# Editing a .Pug Template Website

This guide is designed to help users understand and make changes to a `.pug` template file. Pug is a high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers. Don't worry if that sounds complicated; this guide will walk you through the basics.

## What is a .Pug File?

A `.pug` file is a type of template used in web development to generate HTML. Think of it as a blueprint for a webpage, where we can define the structure and some parts of the content in a simplified and readable format.

## Before You Start

Before making any edits to a `.pug` file, you'll need to set up your environment with the necessary tools:

- **Text Editor:** A text editor is essential for viewing and editing the `.pug` file. We recommend using Visual Studio Code (VS Code) for its ease of use and powerful features.

### Downloading and Installing Visual Studio Code (VS Code)

1. **Visit the VS Code Website:** Open your web browser and go to the [Visual Studio Code website](https://code.visualstudio.com/).

2. **Download VS Code:** Click on the "Download" button. The website should automatically detect your operating system (Windows, macOS, Linux) and offer the correct version for download. If you need a different version, click on the arrow next to the download button and select the appropriate option.

3. **Install VS Code:** Once the download is complete, open the installer.
   - On **Windows**, run the `.exe` file and follow the installation wizard. You might need to agree to the license agreement and choose the installation location.
   - On **macOS**, open the `.zip` archive, then drag the Visual Studio Code icon to your Applications folder.
   - On **Linux**, you may need to follow specific instructions based on your distribution. The VS Code website provides detailed guidance for different versions of Linux.

4. **Launch VS Code:** After installation, open VS Code from your applications menu or desktop shortcut.

5. **Familiarize Yourself with the Interface:** Take a moment to look around VS Code. You'll mainly use the File Explorer on the left to open your `.pug` file and the editor in the center to make changes.

## Cloning a GitHub Repository Using VS Code

This website is maintained in a GitHub repository.  All web pages on this site are written as a `.pug` file, you can easily clone (copy) the repository to your local drive using VS Code. This process allows you to work on the files locally on your Windows PC.

### Prerequisites

Before you begin, make sure you have the following installed:

- **Git:** Git is a version control system that lets you track changes and collaborate on projects. VS Code uses Git for repository management.

#### Installing Git

1. **Download Git:** Go to the [Git website](https://git-scm.com/download/win) and the download should start automatically. If it doesn't, click on the link for the latest version to manually start the download.

2. **Install Git:** Open the downloaded `.exe` file to start the installer. Follow the prompts to install Git. The default settings are typically fine for most users, but pay attention to the following:
   - Choose the default editor for Git (VS Code is a good choice if prompted).
   - Ensure that Git is added to the PATH (this allows you to run Git commands from the command prompt).

3. **Verify Installation:** Open the Command Prompt and type `git --version` to ensure Git is installed correctly. You should see the version number of Git displayed.

### Cloning a Repository with VS Code

Once Git is installed, follow these steps to clone a GitHub repository:

1. **Open VS Code:** Launch Visual Studio Code from your applications menu or desktop shortcut.

2. **Open the Command Palette:** Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac) to open the Command Palette.

3. **Find the Clone Command:** Type `Git: Clone` and select it from the list that appears.

4. **Enter the Repository URL:** Paste the URL of the GitHub repository you wish to clone. You can find this URL by navigating to the repository page on GitHub and clicking the "Clone or download" button.

5. **Choose a Local Folder:** VS Code will ask you where you'd like to save the repository on your local drive. Select a location that's easy for you to remember.

6. **Open the Repository:** After cloning, VS Code may prompt you to open the cloned repository. Click "Open" to start working on the files.

7. **Find Your `.pug` File:** Use the File Explorer on the left-hand side of VS Code to navigate to and open your `.pug` file.

With the repository cloned to your local drive, you're ready to make edits to the `.pug` file as needed. Remember to save your changes regularly.

### Next Steps

After editing, you might want to commit your changes and push them back to the GitHub repository. This process involves using Git commands and is beyond the scope of this guide. If required, consult a Git tutorial or ask a more experienced colleague for assistance.

- **Access to the .pug File:** Ensure the `.pug` file you need to edit is accessible on your computer. You might need to download it from an email, a cloud storage service, or a website.

With VS Code installed and your `.pug` file at hand, you're ready to start editing.

## Step-by-Step Guide to Editing a .Pug File

### Step 1: Open the .Pug File

1. Open the File Explorer tab in the VS left menu.  
2. Navigate to the `/src/pug/` floder and find the file that matches the page you want to edit.  For the home page, you would want to edit the `index.pug` file.
3. Click on the file and the edit window should open in the main window of VS Code. 

### Step 2: Understand the Basic Structure

A `.pug` file uses indentation to define the structure of the webpage, similar to how you would use tabs or spaces in a Word document to organize content.

- **Tags** are used to define elements like headings, paragraphs, and divisions. For example, `h1` for a main heading, `p` for a paragraph.
- **Attributes** within tags can define properties like classes or IDs, similar to how you might categorize or label things. For example, `a(href='https://controlorigins.com')` creates a link to the web page at `https://controlorigins.com`
- **Content** comes right after the tag and sometimes within parentheses.

Here's a simple example:

```pug
doctype html
html
  head
    title My Website
  body
    h1 Welcome to My Website!
    p This is a sample paragraph.
```

### Step 3: Make Your Changes

To edit text, simply find the text within the file and replace it with your new content. Be careful not to change the indentation unless you intend to alter the structure.

### Step 4: Saving Your Changes

After making your edits:

Click "File" in your text editor.
Choose "Save" or use the shortcut Ctrl + S (Windows) or Cmd + S (Mac).
Step 5: Preview Your Changes
It's important to preview your changes in a web browser to ensure everything looks right. You might need a local server to view the file correctly, depending on how your project is set up. If you're part of a team, ask your technical partner how to best preview your changes.

### Tips for Non-Technical Users

Indentation Matters: The structure of a .pug file is based on indentation, typically using spaces. Be careful to maintain the existing indentation when making changes.
Ask for Help: If you're unsure about making a change, it's always better to ask a more experienced colleague or friend for help.
Practice Makes Perfect: Try making small changes and previewing them to build your confidence.
Conclusion
Editing a .pug file doesn't have to be intimidating. With a little practice and attention to detail, you can easily make updates to your website's template. Remember, every expert was once a beginner, so don't hesitate to ask questions and seek help when needed.

## Control Origins Web Project Structure  `/src/` folder

The structure and usage of various directories and files within the `src` directory of the Control Origins Web project.

### Assets

#### CSS

- Contains global stylesheets and vendor-specific CSS files.
- `style.css`: Main stylesheet for custom styles.
- `vendor.css`: Compiled CSS from various third-party libraries.
- Font files (e.g., `icofont.woff`, `remixicon.eot`) are also stored here for web font usage.

#### Fonts

- Houses font files used across the website.
- Includes various formats (`.eot`, `.svg`, `.ttf`, `.woff`, `.woff2`) for compatibility.

#### Images

- Stores all images used in the website, including icons, logos, and photographs.
- Portfolio images like `AsyncDemo.png`, `DataAnalysisDemo.png` are part of the project showcase.

#### JS

- Contains JavaScript files for website functionality.
- `scripts.js`: Custom scripts for interactive features.
- `vendor.js`: Combined JavaScript from third-party libraries.

#### Vendor

- Third-party libraries and frameworks (Bootstrap, AOS, Boxicons, etc.) are organized here.
- Each library/framework is in its own subdirectory, containing CSS, JS, and other assets.

### JavaScript

- A separate `scripts.js` file outside the assets directory, likely for additional custom JavaScript logic.

### Portfolio

- `portfolio.json`: JSON file containing data for portfolio items or projects, used to dynamically generate portfolio sections on the website.

### Pug - Pug Templates Structure in `src/pug`

- Utilizes Pug templates to generate HTML.
- Includes templates for the main page (`index.pug`), layouts, and various sections/modules of the website.

The `src/pug` directory contains Pug templates used for generating the HTML structure of the Control Origins Web project. This structure allows for modular and maintainable development of the website's content. Below is an overview of the key components within this directory:

#### Individual Pages

- **[`Mark-Hazleton.pug`](https://github.com/controlorigins/controloriginsweb/blob/main/src/pug/Mark-Hazleton.pug):** Dedicated to Mark Hazleton, a co-founder of Control Origins. It provides personal and professional information, extending the main layout template.

- **[`index.pug`](https://github.com/controlorigins/controloriginsweb/blob/main/src/pug/index.pug):** Serves as the entry point for the website's homepage, incorporating various modules to construct the page.

#### Layouts

- **[`layout.pug`](https://github.com/controlorigins/controloriginsweb/blob/main/src/pug/layouts/layout.pug):** The main layout template, defining the common HTML structure (header, footer, main container) across the website.

- **[`page-footer.pug`](https://github.com/controlorigins/controloriginsweb/blob/main/src/pug/layouts/page-footer.pug):** Specifies the footer's structure, included in the main layout or specific pages as needed.

#### Modules

Modules are reusable components included in various pages:

- **[`approach.pug`](https://github.com/controlorigins/controloriginsweb/blob/main/src/pug/modules/approach.pug):** Outlines Control Origins' methodology or approach.

- **[`hero.pug`](https://github.com/controlorigins/controloriginsweb/blob/main/src/pug/modules/hero.pug):** Contains the hero section template for the top of webpages.

- **[`models.pug`](https://github.com/controlorigins/controloriginsweb/blob/main/src/pug/modules/models.pug):** Describes different models or frameworks utilized by Control Origins.

- **[`opportunity.pug`](https://github.com/controlorigins/controloriginsweb/blob/main/src/pug/modules/opportunity.pug):** Showcases opportunities or calls to action for visitors.

- **[`portfolio.pug`](https://github.com/controlorigins/controloriginsweb/blob/main/src/pug/modules/portfolio.pug):** Displays a portfolio of projects or achievements.

- **[`sidetracked.pug`](https://github.com/controlorigins/controloriginsweb/blob/main/src/pug/modules/sidetracked.pug):** Discusses industry distractions or challenges and Control Origins' solutions.

- **[`solutions.pug`](https://github.com/controlorigins/controloriginsweb/blob/main/src/pug/modules/solutions.pug):** Details the solutions and services offered by Control Origins.

#### Other Templates

- **[`terms.pug`](https://github.com/controlorigins/controloriginsweb/blob/main/src/pug/terms.pug):** Likely contains terms of service or use for the website or Control Origins' services.

This structure promotes a clean and organized development environment, making it easier to update and maintain the website's content.

### SCSS

- Organized into components, sections, and variables for scalable and maintainable styling.
- `_global.scss`, `_variables.scss`, and `styles.scss` serve as the entry points and global styles.

### Configuration and Meta Files

- `robots.txt`: Directives for search engine crawlers.
- `rss.xml`: RSS feed configuration.
- `sitemap.xml`: Sitemap for search engines.
- `web.config`: Configuration for web servers, particularly IIS.

### Usage Instructions

- **CSS/JS**: Add custom styles/scripts to the respective `style.css` and `scripts.js` files. For vendor-specific overrides, consider extending or creating separate files within the `assets/css` or `assets/js` directories.
- **Fonts/Images**: Place new fonts and images in their respective directories. Ensure web-friendly formats and sizes.
- **Pug**: When adding new pages or sections, create corresponding Pug templates within the `pug` directory. Utilize existing layouts and modules for consistency.
- **SCSS**: For styling, use the SCSS files within the `scss` directory. Define new variables in `_variables.scss` and section-specific styles in the `sections` directory.
- **Portfolio**: To update portfolio items, modify the `portfolio.json` file with new project details.

Ensure to compile Pug and SCSS files into HTML and CSS, respectively, before deploying the website.
