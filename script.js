document.getElementById("sortButton").addEventListener("click", function() {
    let numbers = [34, 7, 23, 32, 5, 62];
    let sortedNumbers = numbers.sort((a, b) => a - b);
    document.getElementById("result").textContent = "Sorted Numbers: " + sortedNumbers.join(", ");
});
