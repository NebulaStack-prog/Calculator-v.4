## Part 1. Main Document.

### 1. Title and Basic Information.

• **Name:** Calculator v.4

• **Purpose:** Project No. 15. Product.

• **Project Phase:** Phase II.

• **Technology Stack:** HTML (with embedded CSS styles and JavaScript code).

• **Project Status:** Fully completed.

### 2. Project Overview.

**Calculator v.4** is a web-based calculator implemented as a single HTML file containing both the styles (inside the `<style>` tag) and the application logic (inside the `<script>` tag).

The application supports basic arithmetic operations: addition, subtraction, multiplication, and division, as well as parentheses and decimal numbers.

A key feature of the project is its dark neon-themed design with glowing effects and button animations on hover, as well as keyboard input support.

The calculator runs directly in a web browser — no installation is required, and it can be launched by double-clicking the HTML file.

The project is a fully functional web application with an intuitive interface.

### 3. Project Goals.

• Create a functional web-based calculator with a clear and intuitive interface.

• Implement basic arithmetic operations: +, -, *, /.

• Implement support for parentheses to change the order of operations.

• Implement decimal number input using a dot.

• Implement error handling for invalid expressions.

• Implement keyboard input for convenient use.

• Provide a responsive and visually appealing design with animations.

• Use only standard web technologies in a single file.

• Demonstrate an approach to developing single-page web applications.

### 4. Project Components.

The project consists of a single HTML file containing all components:

• `calculator.html` – a single file containing:

* interface markup (HTML),
* styling (embedded CSS inside the `<style>` tag),
* application logic (embedded JavaScript inside the `<script>` tag).

### 5. Usage Instructions.

* **5.1. Launch:**

• Open the `calculator.html` file in any modern web browser (Chrome, Firefox, Edge).

• No additional installation is required.

* **5.2. Application Purpose:**

• Perform basic arithmetic calculations.

• Enter expressions using the on-screen buttons or keyboard.

* **5.3. Controls:**

• On-screen buttons (mouse): digits 0–9, operators +, -, ×, ÷, parentheses (, ), decimal point ., and the C (clear) and = (calculate) buttons.

• Keyboard:

• 0–9: enter digits.

• +, -, *, /: operators.

• .: decimal point.

• (, ): parentheses.

• Enter: calculate the result (=).

• Escape: clear the display (C).

* **5.4. Interface:**

• Display at the top — dark background with green neon text.

• 4×5 button grid:

• Gray — digits and decimal point.

• Orange — operators (÷, ×, -, +).

• Green (wide) — = button.

• Red — C (clear) button.

• Animations: buttons enlarge when hovered.

• Color scheme: dark blue background (#2c3e50), neon green text (#00ff88).

## Part 2. Technical Document.

### 1. Development Goals.

• Strengthen skills in working with HTML and embedded CSS and JavaScript.

• Learn DOM manipulation, event handling, and the use of `eval()`.

• Implement both mouse and keyboard input.

### 2. Technologies Used.

• HTML – interface markup.

• Embedded CSS (`<style>` tag) – styling, Grid layout, and animations.

• Embedded JavaScript (`<script>` tag) – calculation logic and event handling.

### 3. Project Architecture.

• A single-page application contained in one HTML file.

• The logic is based on a global `expression` variable storing the current expression string.

• Functions: `appendChar()`, `clearDisplay()`, `calculate()`.

• Keyboard input is handled using `document.addEventListener('keydown', ...)`.

### 4. Project Structure.

• **`<style>`:** styles for `.calculator`, `.display`, `.buttons`, `button`, and the `.operator`, `.equals`, and `.clear` classes.

• **`<body>`:** `.calculator` container with the display (`#display`) and button grid.

• **`<script>`:**

* `appendChar(char)` – adds a character to the expression.

* `clearDisplay()` – resets the expression.

* `calculate()` – calculates the result using `eval()`.

* `keydown` event handler for keyboard input.

### 5. Key System Components.

• **Display:** updated whenever the `expression` changes.

• **Calculation:** performed using `eval()` wrapped in `try/catch` for error handling.

• **Keyboard Input:** maps keyboard keys to corresponding actions.

• **Styling:** CSS Grid, `border-radius`, `box-shadow`, and `transition`.

### 6. User Interface Implementation.

• The interface is fully implemented using HTML and embedded CSS.

• The button grid uses `display: grid` and `grid-template-columns: repeat(4, 1fr)`.

• The = button spans two columns using `grid-column: span 2`.

• Animations are implemented using `transition` and `transform`.

### 7. Development Process.

• Creating the calculator's HTML markup.

• Adding embedded CSS styles with a dark theme.

• Implementing the application logic using embedded JavaScript.

• Adding keyboard input handling.

• Finalizing animations and color settings.

### 8. Main Challenges and Solutions.

• **(1) Challenge:** Handling invalid expressions.

**Solution:** Wrapping `eval()` in `try/catch` and displaying the `"Error!"` message.

• **(2) Challenge:** Supporting keyboard input.

**Solution:** Using a global `keydown` event handler with `e.key` validation.

• **(3) Challenge:** Adapting the interface to different screen sizes.

**Solution:** Using flexbox for centering and relative units.

### 9. Current Project Limitations.

• The use of `eval()` can be unsafe in more complex scenarios.

• No calculation history.

• No support for scientific functions (`sin`, `cos`, `√`).

• No calculator memory functions (`M+`, `M-`, `MR`).

### 10. Potential Improvements and Future Development.

• Replace `eval()` with a custom expression parser.

• Add calculation history.

• Add scientific functions and constants (`π`, `e`).

• Implement calculator memory functions.

• Add theme support (light/dark).
