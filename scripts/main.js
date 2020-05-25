function draw() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  ctx.strokeStyle = "#FF0000";

  let valueFunction = new ValueFunction(6);
  let powerFunction = new PowerFunction(1);
  let addFunction = new AddFunction(powerFunction, valueFunction);

  let width = canvas.width;
  let height = canvas.height;
  let x = 0;
  let y = addFunction.evaluate(x);
  ctx.moveTo(x, height - y);

  for (x = 0; x < width; x += 0.1) {
    y = addFunction.evaluate(x);
    ctx.lineTo(x, height - y);
  }

  ctx.stroke();
}