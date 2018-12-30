const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = 'pink';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 0;
// ctx.globalCompositeOperation ='destination-atop';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;


const draw = function(e) {
  if(!isDrawing) return; //stops function when mouse not down.
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 60%, 90%)`;
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if(hue >= 360){
    hue = 0;
  }
  if (ctx.lineWidth >= 75 || ctx.lineWidth <= 1){
    direction = !direction;
  }
  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
