document.getElementById("button")
           addEventListener("click", convertFahrToCelsius, false);

           function convertFahrToCelsius() {
               var degF = document.getElementById("fvalue").value;
               var degC = (degF - 32) * (5/9);
               document.getElementById("cvalue").innerHTML = degC;

           }