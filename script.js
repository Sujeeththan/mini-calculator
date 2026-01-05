       function add() {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);

            let result = num1 + num2;
            document.getElementById("result").value = result;
        };

        function sub() {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);

            let result = num1 - num2;
            document.getElementById("result").value = result;
        };

        function mul() {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);

            let result = num1 * num2;
            document.getElementById("result").value = result;
        };

        function div() {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);

            let result = num1 / num2;
            document.getElementById("result").value = result;
        };

        function clearFields() {
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
            document.getElementById("result").value = "";
        };

        // Initialize input restrictions to prevent text/special chars
        document.addEventListener('DOMContentLoaded', () => {
            const inputs = document.querySelectorAll('input[type="number"]');
            
            inputs.forEach(input => {
                input.addEventListener('keydown', (e) => {
                    // Allowed keys: digits, Backspace, Delete, Tab, Arrow keys, Enter, Period (if not already present)
                    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', '.'];
                    
                    // Allow control combinations (Ctrl+A, Ctrl+C, etc)
                    if (e.ctrlKey || e.metaKey) return;
                    
                    // Prevent 'e', 'E', '+', '-' from being entered as they are valid in type=number but user requested "only number"
                    if (['e', 'E', '+', '-'].includes(e.key)) {
                        e.preventDefault();
                    }
                    
                    // If it's not a digit and not in allowedKeys, prevent it
                    // Note: e.key for digits is '0'..'9'
                    if (!allowedKeys.includes(e.key) && !/^[0-9]$/.test(e.key)) {
                        e.preventDefault();
                    }
                });

                // Prevent pasting invalid content
                input.addEventListener('paste', (e) => {
                    e.preventDefault();
                    const text = (e.originalEvent || e).clipboardData.getData('text/plain');
                    if (/^[0-9.]+$/.test(text)) {
                        document.execCommand('insertText', false, text);
                    }
                });
            });
        });