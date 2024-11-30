// TODO: Create a function that returns a license badge based on which license is passed in
function getLicenseBadge(license) {
  switch (license) {
      case "MIT":
          return "![MIT License](https://img.shields.io/badge/license-MIT-green)";
      case "GPL":
          return "![GPL License](https://img.shields.io/badge/license-GPL-blue)";
      case "Apache":
          return "![Apache License](https://img.shields.io/badge/license-Apache-blueviolet)";
      case "None":
          return "No license provided";
      default:
          return "Invalid license type";
  }
}

function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
function getLicenseLink(license) {
  switch (license) {
      case "MIT":
          return "https://opensource.org/licenses/MIT";
      case "GPL":
          return "https://www.gnu.org/licenses/gpl-3.0";
      case "Apache":
          return "https://opensource.org/licenses/Apache-2.0";
      case "None":
          return "No license provided";
      default:
          return "Invalid license type";
  }
}

function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
function generateLicenseSection(license) {
  let section = "## License\n";
  
  switch (license) {
      case "MIT":
          section += `This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).\n`;
          section += `![MIT License](https://img.shields.io/badge/license-MIT-green)\n`;
          break;
      case "GPL":
          section += `This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).\n`;
          section += `![GPL License](https://img.shields.io/badge/license-GPL-blue)\n`;
          break;
      case "Apache":
          section += `This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).\n`;
          section += `![Apache License](https://img.shields.io/badge/license-Apache-blueviolet)\n`;
          break;
      case "None":
          section += "This project has no license.\n";
          break;
      default:
          section += "Invalid license type.\n";
          break;
  }

  return section;
}

function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateREADME(projectTitle, description, installation, usage, license, contributing, tests, contact) {
  const licenseSection = generateLicenseSection(license);

  const markdown = `
# ${projectTitle}

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## License
${licenseSection}

## Contributing
${contributing}

## Tests
${tests}

## Contact
${contact}
`;

  return markdown;
}
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
