import { defineManifest } from '@crxjs/vite-plugin';
import { version } from '../package.json';

const manifest = defineManifest({
  manifest_version: 3,
  name: "PandA Downloader",
  version,
  host_permissions: ['<all_urls>'],
  action: {
    default_popup: 'src/popup/index.html',
  },
  content_scripts: [
    {
      matches: ['https://panda.ecs.kyoto-u.ac.jp/*'],
      js: ['src/content/main.tsx'],
    },
  ],
  icons: {
  },
  permissions: ['storage', 'tabs'],
});

export default manifest;
