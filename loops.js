function incrementVariable(i) {
  i = i + 1;
  return i;
}

function doWhileLoop(num) {
  num = 0;
  incrementVariable(i);

  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num)
}
