function meanOfNumbers(start, end) {
   
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
      const average = sum / (end - start + 1);
    return average;
}



