import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",

    setupFiles: [
      "./tests/setup/setup.ts",
    ],

    include: [
      "tests/**/*.test.ts",
    ],
  },
});
