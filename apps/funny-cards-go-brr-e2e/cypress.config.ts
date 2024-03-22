import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run funny-cards-go-brr:serve',
        production: 'nx run funny-cards-go-brr:preview',
      },
      ciWebServerCommand: 'nx run funny-cards-go-brr:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
