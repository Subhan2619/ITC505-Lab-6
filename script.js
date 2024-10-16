document.getElementById("sortButton").addEventListener("click", function() {
    let input = document.getElementById("numberInput").value;
    let numbers = input.split(",").map(num => parseFloat(num.trim()));
    
    // Check if the input is valid
    if (numbers.every(num => !isNaN(num))) {
        let sortedNumbers = numbers.sort((a, b) => a - b);
        document.getElementById("result").textContent = "Sorted Numbers: " + sortedNumbers.join(", ");
        alert("Sorting successful!");
    } else {
        document.getElementById("result").textContent = "Please enter valid numbers separated by commas.";
        alert("Invalid input! Please enter valid numbers.");
    }
});

// Additional interactive feature - Random color generator
document.getElementById("colorButton").addEventListener("click", function() {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("colorBox").style.backgroundColor = randomColor;
});
