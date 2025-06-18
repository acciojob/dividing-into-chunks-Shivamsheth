function divide(arr, n) {
  const result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (currentSum + num <= n) {
      currentChunk.push(num);
      currentSum += num;
    } else {
      result.push(currentChunk);
      currentChunk = [num];
      currentSum = num;
    }
  }

  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
}

// Example usage
const arr = [1, 2, 3, 4, 1, 0, 2, 3];
const n = 5;
const output = divide(arr, n);

// Display result
document.getElementById("output").textContent = JSON.stringify(output);