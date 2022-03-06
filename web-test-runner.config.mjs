/** @type {import("@web/test-runner").TestRunnerConfig } */
import snowpack from '@snowpack/web-test-runner-plugin'
import { chromeLauncher } from '@web/test-runner-chrome'

process.env.NODE_ENV = 'test'

export default {
  plugins: [snowpack()],
  browsers: [
    chromeLauncher({
      launchOptions: {
        headless: true,
        args: ['--disable-web-security'],
      },
    }),
  ],
  testFramework: {
    config: {
      timeout: 1000,
      // require: ['./src/helper.test.ts'],
    },
  },
}
