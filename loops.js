function incrementVariable(i) {
  i = i + 1;
  return i;
}

function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    array[i] = `"I am ${i} strange loop${i === 0 ? '' : 's'}."`;
  }
  return array;
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.");
    num = incrementVariable(num);
  } while (incrementVariable() < num)
}
