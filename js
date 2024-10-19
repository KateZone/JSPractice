function fibonacciGenerator(n) {
    // Initialize an empty array to hold the Fibonacci sequence
    var output = [];
    
    // Handle the first case
    if (n === 1) {
        output = [0];
    } 
    // Handle the second case
    else if (n === 2) {
        output = [0, 1];
    } 
    // For cases where n > 2, generate the Fibonacci sequence
    else {
        output = [0, 1];  // Start with the first two Fibonacci numbers
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]); // Add the sum of the last two numbers
        }
    }

    // Return the generated Fibonacci sequence
    return output;
}

// Call the function and log the result
var result = fibonacciGenerator(5);  // Generate Fibonacci sequence with 5 numbers
console.log(result);  // Output the result
