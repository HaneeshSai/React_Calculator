export default function Factorial(x) {
  let ans = 1;

  if (x == 0 || x == 1) {
    return ans;
  } else if (x > 1) {
    for (let i = x; i >= 1; i--) {
      ans = ans * i;
    }
    return ans;
  } else {
    return 0;
  }
}
