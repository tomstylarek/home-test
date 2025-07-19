import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 60 * 1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: 'html',

  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3100',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    /* Desktop */
    {
      name: 'chromium',
      use: devices['Desktop Chrome'],
    },
    {
      name: 'firefox',
      use: devices['Desktop Firefox'],
    },
    {
      name: 'webkit',
      use: devices['Desktop Safari'],
    },

    /* Mobile */
    {
      name: 'Mobile Chrome',
      use: devices['Galaxy S24'],
    },
    {
      name: 'Mobile Safari',
      use: devices['iPhone 15 Pro Max'],
    },
  ],
});
