module.exports = {
    testMatch: ['<rootDir>/tests/meta/**/*.js'], // Only run meta tests
    testPathIgnorePatterns: [
        '/node_modules/',
        '/tests/e2e/', // Ignore your Playwright tests
        '/tests/pages/', // Ignore your POM files if needed
    ],
};
