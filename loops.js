function incrementVariable(i) {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  num = 0;

  do {
    console.log("I run once regardless.");
    num = incrementVariable(num);
  } while (incrementVariable() < num)
}
