
document.getElementById('numberInput').addEventListener('input', function() {
        var input = document.getElementById('numberInput').value;
        var value = parseInt(input);
        var resultDiv = document.getElementById('message');
    
        let sequence = [];
        if (value>=0 && value % 2 === 0) {
            for (let i = 1; i <= 3; i++) {
                sequence.push(value + i * 2);
            }
        }
         else {
            for (let i = 1; i <= 3; i++) {
                sequence.push(value + i * 2);
            }
        }
        resultDiv.textContent = sequence.join(', ');
        if (value < 0) {
            document.getElementById("message").innerHTML="Enter a positive value";
            
        }
    }

);

