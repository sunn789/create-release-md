
````markdown
# Create Release Markdown File Extension for VS Code

This Visual Studio Code extension automatically generates a markdown file with the current date as the filename prefix (e.g., `release-YYYY-MM-DD.md`) for documenting your release notes. It's ideal for keeping track of project releases, generating consistent markdown files with the date and structured sections for **Version**, **New Features**, **Bug Fixes**, and more.

## Features

- **Automatically create a markdown file**: A new `.md` file is generated with the current date in the filename (e.g., `release-2025-09-21.md`).
- **Structured Template**: The markdown file is pre-populated with a simple release template:
  - **Version** (default: `1.0.0`)
  - **New Features** (for you to add new features)
  - **Bug Fixes** (for you to track fixes)
- **Open the file automatically**: After generating the file, the extension opens it in your VS Code editor for immediate editing.
- **Customizable**: You can modify the template in the source code to suit your project’s needs.

## Installation

1. **Install the Extension**:
   You can install the extension by searching for **Create Release Markdown File** in the [VS Code marketplace](https://marketplace.visualstudio.com/).
   Alternatively, if you have the source code, you can manually install the extension by running:

   ```bash
   npm install -g vsce
   vsce package
   code --install-extension create-release-md-1.0.0.vsix
````

2. **Clone the Repository**:
   If you'd like to build the extension yourself, clone the repository from GitHub:

   ```bash
   git clone https://github.com/yourusername/create-release-md.git
   cd create-release-md
   npm install
   ```

## Usage

Once installed, you can generate a release markdown file using the following steps:

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
2. Type **Create Release Markdown File**.
3. Hit Enter to generate a new markdown file with the current date (`release-YYYY-MM-DD.md`).

The file will open in your editor automatically, and you can fill in the release details.

## Example Generated File

```markdown
# Release Notes - 2025-09-21

## Version 1.0.0

### New Features:
- Add your release notes here.

### Bug Fixes:
- Track bug fixes here.

### Breaking Changes:
- Mention any breaking changes here if applicable.
```

## How It Works

* **Command**: The extension adds a command called `Create Release Markdown File` to the Command Palette.
* **File Creation**: It creates a `.md` file with the current date as the filename (e.g., `release-2025-09-21.md`).
* **Template**: The file is pre-populated with a basic template that includes sections for **Version**, **New Features**, **Bug Fixes**, and **Breaking Changes**.
* **Editor**: The file is automatically opened in the VS Code editor, allowing you to start editing the release notes immediately.

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and create pull requests. Here are a few ways you can contribute:

* Report issues you encounter with the extension.
* Suggest new features or improvements.
* Submit a pull request with bug fixes or code improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* Thanks to the VS Code team for providing such an extensible environment for building great tools!

```

### **Key Sections:**

1. **Introduction**: A brief description of what the extension does.
2. **Features**: A list of the main features, including automatic file creation, templating, and file opening.
3. **Installation**: Instructions on how to install the extension either from the marketplace or via manual installation.
4. **Usage**: Instructions on how to use the extension by running the command from the Command Palette.
5. **Example Generated File**: Shows a sample markdown file structure that the extension generates.
6. **How It Works**: An explanation of the internal workings of the extension (how it creates the markdown file and uses a template).
7. **Contributing**: Guidelines for contributing to the project (optional but recommended if you plan to open-source it).
8. **License**: Information about the licensing of your code.
9. **Acknowledgments**: Giving credit where it's due, especially if you used any libraries or tools that helped with the development.

---

### **Next Steps:**

- Replace the **GitHub repository URL** (`https://github.com/yourusername/create-release-md.git`) with the actual link to your GitHub repository.
- If you decide to publish your extension, make sure to update the version number in the `package.json` and **publish it to the Visual Studio Code Marketplace** using `vsce publish`.

Let me know if you need further assistance with publishing or adjusting the content!
```
