function randomColor() {
  return  Math.floor((1 + Math.random()) * 0xffffff).toString(16).slice(1);
}
