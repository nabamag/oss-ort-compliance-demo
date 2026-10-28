const test = require("node:test");
const assert = require("node:assert/strict");

const { getAppInfo } = require("./index");

test("returns the expected application information", () => {
  const info = getAppInfo();

  assert.equal(info.name, "OSS Compliance Sample App");
  assert.equal(info.version, "1.0.0");
  assert.equal(info.status, "running");
});

test("includes the planned compliance checks", () => {
  const info = getAppInfo();

  assert.ok(info.checks.includes("dependency-inventory"));
  assert.ok(info.checks.includes("license-review"));
  assert.ok(info.checks.includes("sbom-generation"));
});
