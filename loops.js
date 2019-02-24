function incrementVariable(num) {
  i = i + 1;
  return i;
}

function doWhileLoop(i) {
  num = 0;

  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num)
}