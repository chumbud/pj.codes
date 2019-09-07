const blue = '#2966ff';
const pink = '#ffd2d2';
const white = '#fff';
const TAU = Zdog.TAU;
let fill = pink;

let list_item = document.getElementsByClassName(".project-list-item");

let isSpinning = true;
//instance
let illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  //dragRotate: true,
  resize: 'fullscreen',
    zoom: 1.2,
  onResize: function( width, height ) {
    // scale zoom
    let minSize = Math.min( width, height );
    this.zoom = minSize / 1000;
  },
  onDragStart: function() {
    isSpinning = false;
  },
  onDragEnd: function() {
    isSpinning = true;
  },
});

let j = new Zdog.Cone ({
    addTo: illo,
    length: 500,
    diameter: 500,
    color: fill,
    backface: white,
});

function animate() {
  if(isSpinning) {    
    j.rotate.x += isSpinning ? 0.0053: 0;
    j.rotate.y += isSpinning ? 0.0045: 0;
    j.rotate.z += isSpinning ? 0.0072: 0;
  }
  illo.updateRenderGraph();
  requestAnimationFrame( animate );
};

animate();

list_item.addEventListener("mouseenter", function(event) {
  fill = this.dataset.color;
});
list_item.addEventListener("mouseout", function(event) {
  fill = pink;
});