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
       

       // //Variable declartion
       //  let num1 = "25";
       //  let num2 = "30";

       //  //Type casting
       //  let number1 = parseFloat(num1);
       //  let number2 = parseFloat(num2);

       //  //Calculation
       //  let add = number1 + number2;
       //  let sub = number1 - number2;
       //  let mul = number1 * number2;
       //  let div = number1 / number2;

       //  // Console log
       //  console.log("Number1 ="+ number1);
       //  console.log("Number2 ="+ number2);
       //  console.log("Addition of Number1 and Number2 =" + add);
       //  console.log("Subtraction of Number1 and Number2 =" + sub);
       //  console.log("Multiplication of Number1 and Number2 =" + mul);
       //  console.log("Division of Number1 and Number2 =" + div);
        
        
        