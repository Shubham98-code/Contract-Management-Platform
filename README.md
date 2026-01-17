# Contract Management System

[![Status](https://img.shields.io/badge/Status-Active-success)]()
[![Stack](https://img.shields.io/badge/Stack-Vanilla_JS_|_HTML5_|_Tailwind-blue)]()

A lightweight, frontend-only application designed to manage the lifecycle of client contracts. This system allows users to define reusable templates (**Blueprints**) and instantiate them into specific **Contracts**, tracking their status from creation to signature.

## 🚀 Key Features

- **Blueprint System:** Create reusable schemas (e.g., "Employment Agreement") to standardize document structures.
- **Contract Lifecycle:** Instantiate blueprints into specific contracts and track status (Draft → Signed).
- **Zero-Dependency:** Runs entirely in the browser with no build steps or backend servers.
- **Persistence:** Uses LocalStorage to save data across sessions.
- **Digital Signatures:** Supports image-based signature uploads stored via Base64.

---

## 🛠️ Getting Started

This project is built as a static web application. You can run it directly in your browser without installing Node.js or Python.

### Prerequisites

1.  **Modern Web Browser:** Chrome, Firefox, Safari, or Edge.
2.  **Internet Connection:** Required to load the Tailwind CSS framework via CDN.

### Installation & Execution

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Shubham98-code/client-contract-management.git](https://github.com/Shubham98-code/client-contract-management.git)
    ```
2.  **Navigate to the project folder.**
3.  **Launch the App:**
    Simply double-click the `index.html` file, or right-click and select **"Open with > Google Chrome"**.

### 🔄 Resetting Data

The application persists data using your browser's Local Storage. To reset the application to its factory state:

1.  Open the application in your browser.
2.  Open Developer Tools (Press `F12`).
3.  Navigate to the **Application** tab > **Local Storage**.
4.  Right-click your local host or file entry and select **Clear**.
5.  Refresh the page (Default seed data will be regenerated).

---

## 🏗 Architecture & Design Decisions

This project demonstrates core DOM manipulation and state management fundamentals without relying on heavy frameworks.

### 1. Zero-Dependency Frontend
* **Decision:** Built using vanilla HTML, JavaScript, and CSS.
* **Reasoning:** Ensures the application is lightweight, requires no build steps (`npm install`), and is highly portable.

### 2. The "Blueprint vs. Contract" Pattern
* **Decision:** Decoupling the structure of a document from the instance of a document.
    * **Blueprints:** Define the schema (Fields: Name, Date, Signature).
    * **Contracts:** Instances filled with specific data (e.g., "John Doe's Agreement").
* **Reasoning:** Mimics enterprise CMS patterns, prioritizing reusability over repetitive data entry.

### 3. Client-Side Persistence
* **Decision:** `localStorage` is utilized as a pseudo-database. A dedicated DB utility object handles CRUD operations.
* **Reasoning:** Simulates persistent data storage and state management without the complexity of a backend, allowing immediate usage upon download.

### 4. Hybrid Styling Strategy
* **Decision:** Tailwind CSS (via CDN) for layout/typography + Custom CSS for glass-morphism and animations.
* **Reasoning:** Tailwind enables rapid UI prototyping, while custom CSS handles complex, interactive state transitions for a polished feel.

### 5. Image-Based Signatures
* **Decision:** Signatures are converted to Base64 strings and stored directly within the JSON object.
* **Reasoning:** Keeps the app self-contained. By avoiding external file storage, the app remains a single unit dependent only on the browser's JSON parsing capabilities.

---

## ⚠️ Assumptions & Limitations

While fully functional, this application is designed as a portfolio piece/prototype and has specific boundaries.

### Assumptions
- **Single User:** No authentication or multi-user support is implemented.
- **Environment:** The user is on a browser supporting ES6 (Arrow functions, Template literals) and CSS Grid.
- **Connectivity:** The user is online (required for Tailwind CDN and Google Fonts).

### Limitations
| Area | Limitation | Detail |
| :--- | :--- | :--- |
| **Data Volatility** | Browser Cache | Clearing browser cache/Local Storage will permanently erase all created contracts. |
| **Security** | No Encryption | Sensitive data is stored in plain text. **Not suitable for PII or real legal documents.** |
| **Storage** | 5MB Limit | LocalStorage has a hard limit (~5MB). Excessive high-res signature uploads will prevent saving. |
| **Validation** | Client-Side Only | Logic exists only in the browser; knowledgeable users can manipulate variables via the console. |

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
