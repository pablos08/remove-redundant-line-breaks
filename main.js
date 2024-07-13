const obsidian = require('obsidian');

class RemoveRedundantLineBreaksPlugin extends obsidian.Plugin {
    async onload() {
        this.addCommand({
            id: 'remove-redundant-line-breaks',
            name: 'Remove Redundant Line Breaks',
            editorCallback: (editor, view) => {
                if (editor && view instanceof obsidian.MarkdownView) {
                    const cursor = editor.getCursor();
                    const content = editor.getValue();
                    const cleanedContent = this.removeRedundantLineBreaks(content);
                    editor.setValue(cleanedContent);
                    editor.setCursor(cursor);
                }
            }
        });
    }

    removeRedundantLineBreaks(text) {
        // Replace two or more newlines with two newlines
        return text.replace(/\n{2,}/g, '\n');
    }
}

module.exports = RemoveRedundantLineBreaksPlugin;