$("#blocklySvgZone").hide();

function addAnimationSpeedWidget() {
    let target = document.getElementById("blocklyButtons");

    let widget = document.createElement("input");
    widget.type = "range";
    widget.min = "1";
    widget.max = "100";
    widget.step = "5";
    widget.id = "slider";

    widget.oninput = function() {
        //reset speed
        window.stepSpeed = json.map.animationSpeed;
        console.log("BEFORE");
        console.log(window.stepSpeed);
        // apply value of range [1-100]
        // as stepspeed is milliseconds the less it is, the speedest it is.
        // so a big range has to be reversed to represent the fast way.
        let reversed_value = (100 - this.value + 1)*10;
        window.stepSpeed = reversed_value;
        console.log("AFTER");
        console.log(window.stepSpeed);
    };
    target.appendChild(widget);
}

addAnimationSpeedWidget();