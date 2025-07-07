import { defineConfig } from '@playwright/test';

  export default defineConfig({
    testDir: './tests/e2e', // ✅ put your specs in /tests
    timeout: 30 * 1000, // 30 seconds max per test
    expect: {
      timeout: 5000 // 5 seconds for expect() checks
    },
    fullyParallel: true, // Run tests in parallel
    retries: 0, // Change to 1 or 2 if you're debugging flaky tests
    use: {
      headless: true, // Set to false if you want to see browser for debugging
      viewport: { width: 1280, height: 720 },
      actionTimeout: 0,
      ignoreHTTPSErrors: true, // ✅ Allow self-signed HTTPS (e.g., https://localhost)
      screenshot: 'only-on-failure', // Or 'on', 'off'
      video: 'retain-on-failure', // Keeps videos only when a test fails
      baseURL: 'https://localhost:8080', // ✅ You can override this in test files too
    },
    projects: [
      {
        name: 'chromium',
        use: { browserName: 'chromium' }
      },
      {
        name: 'firefox',
        use: { browserName: 'firefox' }
      },
      {
        name: 'webkit',
        use: { browserName: 'webkit' }
      }
    ],
    outputDir: 'test-results/', // Where to store traces, screenshots, etc.
  });
