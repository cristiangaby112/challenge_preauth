const SumArray = (arr: number[], n: number) => {
  let sum = [];

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        sum.push(arr[i], arr[j]);
      }
    }
  }
  return sum;
};

console.log(SumArray([2, 5, 8, 14, 0], 10));
