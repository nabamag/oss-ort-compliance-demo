const app = {
  name: "OSS Compliance Sample App",
  purpose: "Demonstrate open-source compliance and software supply chain analysis",
  version: "1.0.0",
};

function getAppInfo() {
  return {
    ...app,
    status: "running",
    checks: [
      "dependency-inventory",
      "license-review",
      "sbom-generation",
    ],
  };
}

function main() {
  console.log(JSON.stringify(getAppInfo(), null, 2));
}

if (require.main === module) {
  main();
}

module.exports = { getAppInfo };
