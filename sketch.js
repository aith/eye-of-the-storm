let canw = 700; let canh = 700;

function setup() {
    createCanvas(canh, canw)
    frameRate(30)
}

let base = r = 300;
function draw() {
    let min = 0;
    translate(canw/2,canh/2)
    for(; r > min; r-=0.5) {
        fill(r/1.5,r/1.5,r*5)
        ellipse(cos(r*frameCount)*r, sin(r*frameCount)*r, sqrt(r), sqrt(r))
    }
    r = base;
}
