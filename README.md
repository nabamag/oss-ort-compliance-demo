# Open Source Compliance & Software Supply Chain Security Lab

## Overview

This project demonstrates a practical approach to managing open-source software (OSS) compliance and software supply chain risks across the software development lifecycle.

It combines open-source license compliance, Software Bill of Materials (SBOM) generation, dependency analysis, vulnerability assessment, and security controls to demonstrate how technical findings can support governance, risk management, and remediation.

The project is designed as a hands-on demonstration of an open-source compliance workflow using a sample application.

## Objectives

- Identify and inventory open-source dependencies.
- Analyze dependency licenses and potential compliance obligations.
- Generate and inspect Software Bill of Materials (SBOM) data.
- Investigate dependency and vulnerability findings.
- Document compliance issues, remediation actions, and verification evidence.
- Explore how technical findings can map to software supply chain security and GRC controls.
- Demonstrate repeatable analysis using automation.

## Planned Tooling

| Tool | Intended use |
|---|---|
| OSS Review Toolkit (ORT) | Dependency analysis, license findings, and compliance review |
| ScanCode Toolkit | Package and license identification |
| ScanOSS | Additional source-level open-source detection |
| SPDX | SBOM format and license information |
| GitHub Actions | Automated analysis and reporting |
| Additional security tools | To be evaluated as the project evolves |

Tool integration will be added incrementally as each workflow is implemented and tested.

## Compliance Workflow

The planned workflow is:

1. **Inventory:** Identify dependencies and relevant package metadata.
2. **Analyze:** Review licenses, dependency information, and available security findings.
3. **Evaluate:** Assess compliance obligations and potential risks.
4. **Remediate:** Document proposed corrective actions and responsible parties.
5. **Verify:** Record evidence that remediation has been completed and validated.
6. **Report:** Summarize findings, outstanding risks, and compliance status.

## Governance and Risk Management

The project will explore how technical findings can support governance processes, including:

- Open-source policy compliance.
- License obligation management.
- Software supply chain risk assessment.
- Remediation tracking and evidence management.
- Risk prioritization and reporting.
- Mapping relevant practices to recognized security and governance frameworks.

Framework mappings will be documented as the implementation progresses; they will not imply certification or formal compliance.

## Repository Roadmap

- [ ] Create a sample application.
- [ ] Configure and run an initial ORT analysis.
- [ ] Review dependency and license findings.
- [ ] Generate and inspect an SBOM.
- [ ] Document license findings and remediation decisions.
- [ ] Add vulnerability analysis.
- [ ] Integrate ScanOSS.
- [ ] Explore cryptographic inventory and CBOM generation.
- [ ] Add selected security scanning checks.
- [ ] Automate repeatable checks using GitHub Actions.
- [ ] Develop compliance reporting and GRC control mappings.

## Project Status

**Status:** Initial setup

This is a learning and demonstration project. Tool integrations, findings, and reports will be added and validated incrementally.

## Disclaimer

This project is intended for educational and portfolio demonstration purposes. Generated reports and tool findings require review and validation before they can be used as evidence of compliance in a production environment.
