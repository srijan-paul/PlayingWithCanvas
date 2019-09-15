/*
    * FOR REFERENCE.
    * Arc function - > x, y, radius, start angle, end angle, drawCounterClockwise
    * rect -> x, y, witdth, height.
*/

let cnv = document.getElementById('cnv').getContext('2d');
let width = cnv.canvas.width;
let height = cnv.canvas.height;

let strokeMode = true;



const line = function (x, y, x2, y2) {
    cnv.beginPath();
    cnv.moveTo(x, y);
    cnv.lineTo(x2, y2);
    cnv.stroke();
}

const noStroke = function(){
    strokeMode = !strokeMode;
}

const rect = function (x, y, w, h) {
    cnv.rect(x, y, w, h);
    cnv.fill();
    if(strokeMode){
        cnv.stroke();   
    }
    
}

const circle = function (x, y, r) {
    cnv.beginPath();
    cnv.arc(x, y, r, 0, Math.PI * 2, false);
     if(strokeMode){
        cnv.stroke();   
    }
    cnv.fill();    
}

const fill = function(r,g,b,a){
    if(r && g && b && a){
        cnv.fillStyle = `rgba(${r},${g},${b},${a})`;
    }else{
        cnv.fillStyle = r;
    }
}

const stroke = function(r,g,b,a){
    cnv.strokeStyle = `rgba(${r},${g},${b},${a})`;
}

const background = function(r,g,b,a){
    let str = cnv.fillStyle;
    cnv.fillStyle = `rgba(${r},${g},${b},${a})`;
    rect(0,0,width,height);
    cnv.fill();
    cnv.fillStyle = str;
}


