import { FaMicrosoft } from 'react-icons/fa6'
import { NavGroup } from '../types'

export const CSharpReference: NavGroup = {
  title: 'CSharp',
  icon: FaMicrosoft,
  items: [
    { title: 'Overview', href: '/reference/csharp', breadcrumbRoot: true },
    {
      title: 'APIs',
      items: [
        { title: 'api()', href: '/reference/csharp/api/api' },
        { title: 'api.get()', href: '/reference/csharp/api/api-get' },
        { title: 'api.post()', href: '/reference/csharp/api/api-post' },
        { title: 'api.put()', href: '/reference/csharp/api/api-put' },
        { title: 'api.delete()', href: '/reference/csharp/api/api-delete' },
        { title: 'api.patch()', href: '/reference/csharp/api/api-patch' },
        { title: 'api.route()', href: '/reference/csharp/api/api-route' },
        {
          title: 'api.route.all()',
          href: '/reference/csharp/api/api-route-all',
        },
        {
          title: 'api.route.get()',
          href: '/reference/csharp/api/api-route-get',
        },
        {
          title: 'api.route.post()',
          href: '/reference/csharp/api/api-route-post',
        },
        {
          title: 'api.route.put()',
          href: '/reference/csharp/api/api-route-put',
        },
        {
          title: 'api.route.delete()',
          href: '/reference/csharp/api/api-route-delete',
        },
        {
          title: 'api.route.patch()',
          href: '/reference/csharp/api/api-route-patch',
        },
      ],
    },
    {
      title: 'Batch',
      items: [
        { title: 'job()', href: '/reference/csharp/batch/job' },
        { title: 'job.handler()', href: '/reference/csharp/batch/job-handler' },
        { title: 'job.submit()', href: '/reference/csharp/batch/job-submit' },
      ],
    },
    {
      title: 'Key Value Stores',
      items: [
        { title: 'kv()', href: '/reference/csharp/keyvalue/keyvalue' },
        { title: 'kv.get()', href: '/reference/csharp/keyvalue/keyvalue-get' },
        { title: 'kv.set()', href: '/reference/csharp/keyvalue/keyvalue-set' },
        {
          title: 'kv.delete()',
          href: '/reference/csharp/keyvalue/keyvalue-delete',
        },
        {
          title: 'kv.keys()',
          href: '/reference/csharp/keyvalue/keyvalue-keys',
        },
      ],
    },
    {
      title: 'Topics',
      items: [
        { title: 'topic()', href: '/reference/csharp/topic/topic' },
        {
          title: 'topic.publish()',
          href: '/reference/csharp/topic/topic-publish',
        },
        {
          title: 'topic.subscribe()',
          href: '/reference/csharp/topic/topic-subscribe',
        },
      ],
    },
    {
      title: 'Queues',
      items: [
        { title: 'queue()', href: '/reference/csharp/queues/queue' },
        {
          title: 'queue.enqueue()',
          href: '/reference/csharp/queues/queue-enqueue',
        },
        {
          title: 'queue.dequeue()',
          href: '/reference/csharp/queues/queue-dequeue',
        },
      ],
    },
    {
      title: 'Secrets',
      items: [
        { title: 'secret()', href: '/reference/csharp/secrets/secret' },
        { title: 'secret.put()', href: '/reference/csharp/secrets/secret-put' },
        {
          title: 'secret.version()',
          href: '/reference/csharp/secrets/secret-version',
        },
        {
          title: 'secret.latest()',
          href: '/reference/csharp/secrets/secret-latest',
        },
        {
          title: 'secret.version.access()',
          href: '/reference/csharp/secrets/secret-version-access',
        },
      ],
    },
    {
      title: 'Storage',
      items: [
        { title: 'bucket()', href: '/reference/csharp/storage/bucket' },
        { title: 'bucket.on()', href: '/reference/csharp/storage/bucket-on' },
        {
          title: 'bucket.file()',
          href: '/reference/csharp/storage/bucket-file',
        },
        {
          title: 'bucket.files()',
          href: '/reference/csharp/storage/bucket-files',
        },
        {
          title: 'file.read()',
          href: '/reference/csharp/storage/bucket-file-read',
        },
        {
          title: 'file.write()',
          href: '/reference/csharp/storage/bucket-file-write',
        },
        {
          title: 'file.delete()',
          href: '/reference/csharp/storage/bucket-file-delete',
        },
        {
          title: 'file.getDownloadUrl()',
          href: '/reference/csharp/storage/bucket-file-downloadurl',
        },
        {
          title: 'file.getUploadUrl()',
          href: '/reference/csharp/storage/bucket-file-uploadurl',
        },
      ],
    },
    {
      title: 'SQL',
      items: [
        { title: 'sql()', href: '/reference/csharp/sql/sql' },
        {
          title: 'sql.connectionString()',
          href: '/reference/csharp/sql/sql-connection-string',
        },
      ],
    },
    {
      title: 'Schedules',
      items: [
        { title: 'schedule()', href: '/reference/csharp/schedule/schedule' },
        {
          title: 'schedule.every()',
          href: '/reference/csharp/schedule/schedule-every',
        },
        {
          title: 'schedule.cron()',
          href: '/reference/csharp/schedule/schedule-cron',
        },
      ],
    },
    {
      title: 'Websockets',
      items: [
        { title: 'websocket()', href: '/reference/csharp/websocket/websocket' },
        {
          title: 'websocket.on()',
          href: '/reference/csharp/websocket/websocket-on',
        },
        {
          title: 'websocket.connection()',
          href: '/reference/csharp/websocket/websocket-connection',
        },
        {
          title: 'connection.send()',
          href: '/reference/csharp/websocket/connection-send',
        },
        {
          title: 'connection.close()',
          href: '/reference/csharp/websocket/connection-close',
        },
      ],
    },
  ],
}
