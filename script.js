// Initialize ACE editor with a custom Jellyfish-like theme
const editor = ace.edit("editor");

// Custom CSS for Jellyfish-like theme
editor.setTheme("ace/theme/monokai"); // Use Monokai or any dark theme as a base
editor.session.setMode("ace/mode/javascript");

// Apply additional custom styling for the theme
const css = `
  .ace-monokai {
    background-color: #1e1e1e; /* Darker background */
    color: #dcdcdc; /* Light text */
  }
  .ace-monokai .ace_keyword {
    color: #ff79c6; /* Bright pink for keywords */
  }
  .ace-monokai .ace_identifier {
    color: #f1fa8c; /* Light yellow for identifiers */
  }
  .ace-monokai .ace_string {
    color: #50fa7b; /* Bright green for strings */
  }
  .ace-monokai .ace_comment {
    color: #6272a4; /* Muted blue for comments */
  }
  .ace-monokai .ace_function {
    color: #ffb86c; /* Orange for functions */
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = css;
document.head.appendChild(styleSheet);


function runCode() {
  const code = editor.getValue();
  const outputArea = document.getElementById("output");
  outputArea.textContent = ""; // Clear previous output

  // Create a custom console to capture logs
  const customConsole = {
    log: function(message) {
      outputArea.textContent += message + "\n"; // Append each log to the output
      outputArea.scrollTop = outputArea.scrollHeight; // Auto-scroll to the bottom
    },
  };

  try {
    // Use a self-invoking async function to run the code
    (async () => {
      // Ensure the code is executed within a promise-returning async function
      const result = await new Function("tf", "console", `
        return (async () => { 
          try {
            ${code}
          } catch (error) {
            console.log('Error: ' + error.message);
          }
        })();
      `)(tf, customConsole);

      // If there's a result, log it
      if (result) {
        outputArea.textContent += `Output:\n${JSON.stringify(result, null, 2)}\n`;
      }
    })();
  } catch (error) {
    outputArea.textContent = "Error: " + error.message;
  }
}
