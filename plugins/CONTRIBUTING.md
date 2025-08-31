# Contributing to Makulu Agent Portal Plugins

Thank you for your interest in contributing! This guide provides everything you need to know to build, test, and submit a new language agent plugin for the Makulu Agent Portal.

By following these steps, you can develop and test your plugin in a completely isolated environment without needing access to the proprietary core application.

## Step 1: Fork & Clone the Repository

First, create a fork of this repository on GitHub. Then, clone your forked repository to your local machine.

```bash
git clone https://github.com/YOUR_USERNAME/Makulu-Agent-Portal-plugins.git
cd Makulu-Agent-Portal-plugins
```

## Step 2: Install Dependencies

This repository is a self-contained development environment. Install the necessary dependencies to run the Plugin Host.

```bash
npm install
```

## Step 3: Understand the Plugin Architecture

The key to the system is the `IAgentPlugin` interface, which acts as a contract between the core application and your plugin.

**Location:** `plugins/pluginTypes.ts`

**Core Interface:**
```typescript
export interface IAgentPlugin {
    name: string; // e.g., "Python Flask Agent"
    supportedLanguages: SupportedLanguage[]; // e.g., ['python']
    
    // The primary code generation function.
    generateFileContent: (
        context: GenerationContext
    ) => Promise<GenerationResult>;
}
```
Your plugin's primary job is to implement the `generateFileContent` function. This function receives a `GenerationContext` object with all the necessary information and must return a `GenerationResult`, which can be the generated code, a request to refactor another file, or a question for the user.

## Step 4: Create Your Plugin File

1.  Create a new directory for your language inside the `plugins/` folder (e.g., `plugins/go/`).
2.  Inside your new directory, create an `index.ts` file. This will be the entry point for your plugin.
3.  In `index.ts`, define and export your plugin object. You can look at `plugins/react/index.ts` for a complete example.

**Example for a new Go plugin (`plugins/go/index.ts`):**

```typescript
import type { IAgentPlugin, GenerationContext, GenerationResult } from '../pluginTypes';
// The plugin host's build process will resolve this path correctly.
import { callApiOrchestrator } from '../../services/aiService'; 

// Implement the core logic for your language agent
const generateGoFileContent = async (context: GenerationContext): Promise<GenerationResult> => {
    const { filePath, fileDescription, log, onRequest, onResponse } = context;

    const systemPrompt = `You are an expert Go developer. Your SOLE purpose is to generate a complete, raw Go code file. Your response MUST be enclosed in a single markdown \`\`\`go code block.`;
    
    const mainPrompt = `Generate the full code for the file "${filePath}". This file's purpose is: "${fileDescription}"`;
    
    // Use the core API service to communicate with the AI
    const responseText = await callApiOrchestrator(systemPrompt, mainPrompt, log, onRequest, onResponse);
    
    // For now, we return the code. Your logic could be expanded to handle JSON for refactoring or clarifications.
    return { type: 'code', content: responseText };
};

// Export the plugin object that adheres to the IAgentPlugin interface
export const goAgentPlugin: IAgentPlugin = {
    name: 'Go Agent',
    supportedLanguages: ['go'], // This must match a value from the 'SupportedLanguage' type
    generateFileContent: generateGoFileContent,
};
```

## Step 5: Test Your Plugin Locally

This is the most important step. We have created a lightweight **Plugin Host** to allow you to test your plugin's logic.

1.  **Register your plugin in the host:** Open `plugins/dev/App.tsx`. Import your new plugin and add its exported object to the `availablePlugins` array.

    ```typescript
    // In plugins/dev/App.tsx
    import { reactAgentPlugin } from '../react';
    import { goAgentPlugin } from '../go'; // <-- 1. Add your import

    const availablePlugins: IAgentPlugin[] = [
        reactAgentPlugin,
        goAgentPlugin, // <-- 2. Add your plugin to the array
    ];
    ```

2.  **Run the Plugin Host from your terminal:**

    ```bash
    npm run dev:host
    ```

3.  This command starts a local web server and opens a simple test application in your browser.

4.  **Using the Host:**
    *   Select your plugin from the dropdown menu.
    *   Write a test prompt in the "File Description / Prompt" text area (e.g., "Create a simple web server that responds with Hello World").
    *   Click **"Run Plugin Test"**.
    *   The "Plugin Output" panel on the right will show you the exact `GenerationResult` from your plugin. You can see if it produced code, requested a refactor, or asked a question.
    *   Use this feedback loop to debug and perfect your plugin's logic.

## Step 6: Submit a Pull Request

Once you are confident that your plugin is working correctly in the Plugin Host, you are ready to contribute it back to the project.

1.  Commit your changes.
2.  Push the changes to your forked repository.
3.  Open a Pull Request from your fork to the main `raymerjacque/Makulu-Agent-Portal-plugins` repository.
4.  In your PR description, please include:
    *   The language or feature you are adding.
    *   How you tested it using the Plugin Host.

**Important:** Please ensure your final PR only contains the files for your new plugin (e.g., the `plugins/go/` directory). Do not include any changes you made to the `plugins/dev/` testing files.

Thank you for helping us make the Makulu Agent Portal even better!