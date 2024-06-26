function fabonacci(n) {
  if (n <= 0) return 0;
  else if (n == 1) return n;

  let ans = fabonacci(n - 1) + fabonacci(n - 2);
  return ans;
}

console.log(fabonacci(8));