const fs = require('fs/promises');
const path = require('path');
const fetch = require('node-fetch');
const Mustache = require('mustache');

const BASE_CLI_PKG = '@nitric/cli';

const PLUGIN_PACKAGES = [
  '@nitric/plugin-aws',
  '@nitric/plugin-gcp',
  '@nitric/plugin-do',
];

const VERSION_TAG = 'rc-latest';

const CORE_OUTPUT = './docs/reference/cli/commands.mdx';

const PLUGINS_OUTPUT = './docs/reference/cli/plugin-commands.mdx';

const getCommands = (manifest) => {
  return Object.values(manifest.commands).map((command) => ({
    ...command,
    flags: Object.keys(command.flags).length
      ? Object.values(command.flags)
      : false,
    showArgs: !!Object.keys(command.args).length,
    showOptions: !!Object.keys(command.flags).length,
  }));
};

async function generate() {
  try {
    const coreTemplate = await fs.readFile(
      path.resolve(process.cwd(), './templates/commands.mustache'),
      'utf-8'
    );

    const pluginsTemplate = await fs.readFile(
      path.resolve(process.cwd(), './templates/plugin-commands.mustache'),
      'utf-8'
    );

    const coreManifest = await fetch(
      `https://unpkg.com/${BASE_CLI_PKG}@${VERSION_TAG}/oclif.manifest.json`
    ).then((res) => res.json());

    const rendered = Mustache.render(coreTemplate, {
      coreCommands: getCommands(coreManifest),
    });

    const pluginsRendered = Mustache.render(pluginsTemplate, {
      plugins: await Promise.all(
        PLUGIN_PACKAGES.map(async (pkg) => {
          const manifest = await fetch(
            `https://unpkg.com/${pkg}@${VERSION_TAG}/oclif.manifest.json`
          ).then((res) => res.json());

          return {
            plugin: pkg,
            commands: getCommands(manifest),
          };
        })
      ),
    });

    await fs.writeFile(
      path.resolve(process.cwd(), CORE_OUTPUT),
      rendered,
      'utf-8'
    );

    await fs.writeFile(
      path.resolve(process.cwd(), PLUGINS_OUTPUT),
      pluginsRendered,
      'utf-8'
    );

    console.log('Generated CLI command docs');
  } catch (e) {
    console.error('Generating CLI commands failed' + e);
  }
}

generate();
