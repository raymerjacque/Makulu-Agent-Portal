# Makulu Agent Portal - Community Plugins

Welcome to the official open-source plugin repository for the **Makulu Agent Portal**, an AI-powered application that uses a team of specialized agents to build and manage complex code and content projects.

---

### **What is the Makulu Agent Portal?**

The Makulu Agent Portal is a next-generation development environment where you can turn ideas into reality through conversation. Instead of a single AI, it uses a collaborative multi-agent system, where each AI agent has a specific role (Architect, Coder, QA Engineer, Debugger, etc.). These agents work together, following advanced software development workflows like hierarchical planning and test-driven development, to build robust applications from a simple prompt.

The application features three powerful modes:
*   **Coder Mode:** For generating full-stack applications, from simple websites to complex multi-service projects with databases and APIs.
*   **Content Mode:** For creating high-quality, structured written content like novels, technical manuals, and articles.
*   **Canvas Mode:** An interactive "whiteboard" where you can collaborate with the AI to refactor, edit, and evolve existing code or text.

### **An Open Core Project**

This project operates on an **Open Core** model. This means:
*   **The Core Application** is proprietary and closed-source. It contains the main user interface, the agent orchestration engine, and state management.
*   **This Repository** is **open-source (MIT Licensed)**. It contains all the language-specific "agent plugins" that extend the core's functionality.

This model allows us to protect our core intellectual property while inviting you—the community—to help us grow by adding support for new languages, frameworks, and content types.

### **We Need Your Help! An Invitation to Contribute**

The power of the Makulu Agent Portal grows with every new plugin. We are actively looking for contributors to help us expand the platform's capabilities. If you have expertise in a specific language or framework, you can make a huge impact.

We are looking for contributions in areas such as:
*   **New Language Agent Plugins** (e.g., Python, Go, Rust, C#, PHP)
*   **New Framework Blueprints** (e.g., Angular, Django, Ruby on Rails)
*   **Specialized Content Agents** (e.g., a "Screenplay Agent" or "Legal Document Agent")

### **Getting Started with Contributions**

We have created a lightweight, self-contained **Plugin Host** that allows you to build and test your plugin locally without needing access to the core application. The process is straightforward:

1.  **Fork & Clone** this repository.
2.  **Set up** the development environment with `npm install`.
3.  **Create** your new plugin following our defined interface.
4.  **Test** your plugin's logic using the local `npm run dev:host` command.
5.  **Submit** a Pull Request with your working, tested plugin.

For a complete walkthrough of this process, please see our detailed **[CONTRIBUTING.md](./CONTRIBUTING.md)** guide.

### **License**

All content within this repository is licensed under the permissive **MIT License**. We believe in fostering a collaborative and open environment for our contributors.