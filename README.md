Project Name

AI Agent Portal - Made b MakuluLinux

Short Description :

AI Agent Portal, a next-generation development environment designed to turn your ideas into reality. This application leverages a sophisticated multi-agent system, where specialized AIs like an Architect, Coder, and QA Engineer collaborate to build complex projects from a single prompt. Whether you're generating a full-stack web application in Coder Mode, writing a novel in Content Mode, or refactoring code in the interactive Canvas, the AI team follows advanced workflows like Test-Driven Development and automated Docker orchestration to deliver high-quality, production-ready results.

More Detailed Explanation and breakdown :

Introduction & Core Concepts

Welcome to the AI Agent Coder Pro! This application is a powerful tool for generating code and content using a team of specialized AI agents. Unlike a single AI, this app uses a multi-agent system where each agent has a specific role, allowing them to collaborate to build complex projects from a simple prompt across several distinct modes.

The Multi-Agent System & Advanced Workflows

The core of this application is its team of AI agents that follow advanced development workflows to ensure high-quality output. You can watch this process unfold in the Agent Logs panel.

Hierarchical Planning:
For complex projects, the AI doesn't just plan files. It uses a deeper Project → Epic → Feature → Files structure. This allows it to break down large tasks into manageable parts, building one component at a time and using a "session memory" to ensure all the pieces fit together.

Intelligent Context Sharing:
After a service (like a backend) is built, the AI generates an API Contract. This contract is then given to the agents building the next service (like the frontend), ensuring all parts of your application are built to work together perfectly.

Blueprint Generation:
To speed up development, the AI can select a boilerplate "blueprint" (e.g., Vite + React) to instantly lay down the foundational files, allowing the agents to focus on your specific features.

Docker Orchestration:
As a final step, an Infrastructure agent can automatically generate Dockerfiles and a docker-compose.yml file, containerizing your entire application for easy local development and deployment.

The 'Project CTO' Agent & Iterative Development

The application can manage a project over its entire lifecycle, not just for initial creation. This is handled by a top-level agent, the "Project CTO."

Once an initial project is built, you can provide follow-up prompts like "Now, add a commenting system to the blog posts." The CTO agent analyzes this request against the existing codebase and creates a new, targeted plan that may involve changes to multiple parts of the application. This transforms the application from a project generator into a project maintainer, allowing you to evolve your code over time.

The 'Pair Programmer' Clarification Loop

If the AI encounters an ambiguous requirement, it can now ask for your input. For example, if you ask to "add a button," the Coder agent may pause and ask in the chat: [CLARIFICATION NEEDED] What should the button's text be, and what should happen when it's clicked?

The entire generation process pauses until you provide a reply. Your answer is then fed back into the Coder's context, and it resumes its work with the clearer instructions. This reduces wasted effort and transforms the interaction into a collaborative pair-programming session.

Meet the Agents

Here are the specialists on your AI team. They are categorized by their primary function.
Core Coder Agents

Project CTO: The master orchestrator for follow-up requests. It analyzes new feature requests against the existing code and creates targeted plans to evolve your application.

Architect: Breaks your initial prompt into a high-level plan of "epics" (services like frontend) and "features," and selects the best "blueprint" for each epic.

Planner: Creates a detailed, file-by-file plan for a single feature, prioritizing a minimalist structure to optimize generation speed.

QA-Engineer (TDD Agent): Writes a set of failing tests that define what the code should do before the Coder starts. This is a core part of Test-Driven Development.

Coder: The workhorse. It writes the code for a single file, with the primary goal of making the QA-Engineer's tests pass.

Refactor Agent: A specialist that makes precise, surgical changes to existing code based on specific instructions from other agents.

Debugger Agent: Performs root cause analysis on errors found by other agents and creates a targeted fix for the Refactor Agent to implement.

Specialist Coder Agents

DB-Agent: An expert database architect that designs and writes SQL schema files.
API-Agent: A backend specialist that generates the code for API endpoints.
Theme-Agent: A frontend specialist that creates CSS or other styling files to define the application's visual theme.

Quality & Deployment Agents

DevOps Agent: Simulates a CI/CD pipeline, checking for syntax errors, broken imports, and integration issues before the code is finalized.

Aesthetics & Layout Agents: A duo of UI specialists. The Aesthetics agent improves visual design (colors, spacing), while the Layout agent refactors the structure for a responsive and intuitive user flow.

QA Agent: The final inspector. It performs a last review to find any subtle bugs or logical errors that other agents might have missed.

Security-Analyst: Scans the code for common security vulnerabilities (like XSS) and violations of best practices (like hardcoded secrets).

Infrastructure Agent: The final agent to run. It generates all necessary Docker files (Dockerfile, docker-compose.yml) and a README.md to make your project easy to run.

Content & Writing Agents

Content-Planner: Outlines the structure for written content, from single articles to multi-chapter books.
Writer: The primary agent for generating articles, blog posts, and other text-based content.
Novel-Orchestrator: Manages the complex, chapter-by-chapter process of writing a novel, ensuring continuity.
Tutorial-Orchestrator: Manages the generation of structured, multi-chapter tutorial books.
Content Verifiers: Specialists (like Plot-Verifier and Character-Verifier) that read generated chapters to ensure consistency.
Humanizer Agent: Subtly refines AI-generated text to make it sound more natural and engaging, while preserving the core meaning and target word count. Also gives the AI its "Electra" persona.
Summarizer Agent: Acts as the system's "session memory." It summarizes completed epics and chapters, providing context for subsequent agents to ensure all parts of a project integrate correctly.

Chat Mode Agents

Master-Agent: The primary orchestrator for chat queries. It provides a comprehensive, conversational answer based on the full conversation history.
Details-Agent: A fact-checker that provides concise, direct, and factually dense responses. (The Humanizer agent then combines these two responses).

Image Mode Agents

Stylist-Agent: Injects artistic style keywords (e.g., "cinematic", "art deco") into your prompt.
Lighting-Agent: Adds keywords for lighting conditions (e.g., "dramatic lighting", "god rays").
Focus-Agent: Adds camera and lens details (e.g., "macro shot", "bokeh").
Details-Agent: Adds keywords to enhance fine details and quality (e.g., "hyperdetailed", "masterpiece").
Finalizer-Agent: Combines your original prompt with all the enhancements from other agents to create the final, master prompt.

Application Modes

The application has several distinct modes, accessible from the header. You can only switch modes when a project is not being generated.

Coder Mode

Purpose: This is your primary tool for turning an idea into a functional, multi-service project. Whether you need a simple website or a full-stack web application, Coder Mode orchestrates the agents to build it for you.

Key Options:

Generation Mode: Choose "Silent Mode" to let the AI build the entire project on autopilot, or "Manual Mode" to review and approve the file plan for each feature before generation begins.
Testing Preference: Choose "Run In-house Testing" to use the advanced Test-Driven Development workflow, or "Skip Testing" for a faster, more direct generation process.

Content Mode

Purpose: This mode is for generating high-quality written content. It's not just for simple articles; it's a powerful tool for creating structured, long-form documents and presentations.

Content Types:

Standard Content (Blog Post, etc.): Ideal for single-document generation. You can provide keywords, a target audience, and a desired tone.
Novel & Tutorial Book: Project-level tools for creating multi-chapter works, complete with detailed planning forms to guide the AI.
PowerPoint Presentation: A unique generator where you define the slides in a form. The AI then writes the content and can even generate relevant images for each slide, compiling it all into a downloadable .pptx file.

Chat Mode

Purpose: A dedicated, full-screen conversational experience. This mode is designed for direct, text-based interaction, allowing you to ask questions, brainstorm ideas, and get high-quality responses from a specialized team of AI agents.

Workflow:

Simply type your message and send. There are no other controls, allowing for a focused conversation.
Behind the scenes, a Master-Agent provides a comprehensive answer while a Details-Agent provides a factual one. A final Humanizer agent synthesizes these into the single, high-quality response you receive.

Image Mode

Purpose: This mode is for creating high-quality, detailed images from text prompts. It uses a team of specialist agents to enhance your ideas before generation.

Workflow:

Enter a simple prompt (e.g., "a cat in a library") and choose an aspect ratio.
A team of agents (Stylist, Lighting, Focus, Details) will automatically add professional keywords to enhance your prompt. You can see this process in the "Agent Activity" log.
A Finalizer agent creates the master prompt, which is then used to generate a gallery of four unique images.
Click the "Surprise Me" button to have the AI generate a random, creative prompt for you.

Canvas Mode

Purpose: Canvas Mode is a powerful, interactive, and conversational workspace designed for fine-tuning, refactoring, and exploring code or text. It's where you collaborate directly with the AI on existing content.

Workflow: The screen is split between the Canvas Editor and the AI Assistant chat. You can directly edit text in the editor, or use the AI to make changes by chatting with it or using the powerful right-click context menu on selected text.

Session History & Persistence

This application is designed to be a persistent workspace, ensuring your projects are always saved and accessible. This is handled automatically using your browser's local storage (IndexedDB), meaning your data stays private on your computer.
Automatic Saving

As you work on a project in Coder Mode or Content Mode, the entire state—including your prompts, AI logs, generated files, and settings—is automatically saved in the background. You don't need to do anything to save your progress.

The History Panel

Clicking the History icon in the header opens the Project History panel. Here you will see a list of all your past projects.

Load: Click this button to load a past project. The application will restore the entire state, allowing you to continue exactly where you left off.
Delete: This will permanently remove a project's history from your browser's storage.
Import / Export: These buttons allow you to manage your entire project database. You can Export all your projects to a single JSON file for backup or to transfer to another computer. The Import button lets you load a previously exported file, which will overwrite your current history.

Interface & Panels

Header: Contains the project name, mode switcher, primary actions like download/history, and toggles for showing/hiding panels.
Assistant Panel: Your main interaction point. Here you select project options, see the chat history, and type your prompts.

Agent Logs Panel: A real-time feed showing which AI agent is currently working and what task it is performing.
Editor Panel: Displays the file tree of your project. You can select files to view and edit their content.
Detailed Logs Panel: A verbose, technical log showing the full prompts sent to the AI and the raw responses received.

Live Preview Panel:
In Coder Mode, this can be activated for projects with an index.html file. It renders a live, interactive preview of your web application.

Project URL
https://agent.makululinux.com/

Contact Information
https://github.com/raymerjacque
