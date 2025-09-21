import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('extension.createReleaseFile', () => {
        const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
        const fileName = `release-${currentDate}.md`;
        const filePath = path.join(vscode.workspace.rootPath || '', fileName);

        const content = `# Release Notes - ${currentDate}\n\n## Version 1.0.0\n\n### New Features:\n- Add your release notes here.`;

        // Create the file with content
        fs.writeFileSync(filePath, content, 'utf8');

        // Open the newly created file in VS Code
        vscode.workspace.openTextDocument(filePath).then(doc => {
            vscode.window.showTextDocument(doc);
        });

        // Notify the user
        vscode.window.showInformationMessage(`Release notes file created: ${fileName}`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
