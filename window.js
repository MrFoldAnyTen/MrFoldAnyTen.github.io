 function dothis() {
  debug.print("boo");

function dWood (length, thick, width){
  this.dLength =length;
  this.dThick = thick;
  this.dWidth = width;
}
var cill = new dWood(1200,70,70);

function dWindow (width,height,depth){
  this.dWidth = width;
  this.dHeight = height;
  this.dDepth = depth;
  this.dComponents = function(){
    var cill = new dWood(dWindow.dWidth,70,70);
    var head = new dWood(dWindow.dWidth,60,70);
    var leftJamb = new dWood(dWindow.dHeight,60,70);
    var rightJamb = new dWood(dWindow.dHeight,60,70);

  }

}

var aWindow = new dWindow(1200,1000,70);

  alert(cill.dLength);
};
