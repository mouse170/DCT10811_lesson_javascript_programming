function myfunction(x, y) {
  if (y == 0) {
    throw "Divide by zero.";
  } else if (y < 0) {
    throw new Error(
      (message = "y must greater then zero."),
      (name = "myfunction")
    );
  }
  return x / y;
}
