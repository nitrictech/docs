const glob = require('glob');
const { serialize } = require('next-mdx-remote/serialize');
const fs = require('fs/promises');

function runTests() {
  glob(
    'docs/**/*.+(mdx|md)',
    {
      ignore: '**/node_modules/**',
    },
    (er, files) => {
      files.map(async (file) => {
        try {
          console.log(`processing file: ${file}`);
          const content = await fs.readFile(file, 'utf-8');
          await serialize(content);
        } catch (e) {
          console.error(e);
          console.error(`Error processing file: ${file}`);
        }
      });
    }
  );
}

runTests();
