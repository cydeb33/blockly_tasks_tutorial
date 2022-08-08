var initInterpreterApi = function(interpreter, scope) {
    var wrapper;
    wrapper = function(length,id) {
      Turtle.move(length,id.toString(),false);
    };
    interpreter.setProperty(scope, 'moveForward',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(length,id) {
      Turtle.move(-length,id.toString(),false);
    };
    interpreter.setProperty(scope, 'moveBackward',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(angle,id) {
      Turtle.turn(angle,0, id.toString(),false);
    };
    interpreter.setProperty(scope, 'turnLeft',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(angle,id) {
      Turtle.turn(angle,1, id.toString(),false);
    };
    interpreter.setProperty(scope, 'turnRight',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(width,id) {
      Turtle.turn(width,0,id.toString(),false);
    };
    interpreter.setProperty(scope, 'penWidth',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      Turtle.penUp(id.toString());
    };
    interpreter.setProperty(scope, 'penUp',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(id) {
      Turtle.penDown(id.toString());
    };
    interpreter.setProperty(scope, 'penDown',
        interpreter.createNativeFunction(wrapper));
    wrapper = function(colour,id) {
      Turtle.penColour(colour,id.toString());
    };
    interpreter.setProperty(scope, 'penColour',
        interpreter.createNativeFunction(wrapper));
    
    //var a = (Blockly.getMainWorkspace().blockDB_);
    //Turtle.log = Object.keys(a);
    Turtle.log = [];
    Turtle.reset(false);
};

var animate = function() {
    Turtle.animate();
};
