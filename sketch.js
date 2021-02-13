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
        let x =cos(r*frameCount)*r;
        let y =sin(r*frameCount)*r;
        fill(r/1.5*x,r/1.5,r*5)
        ellipse(x, y, sqrt(r), sqrt(r))
    }
    r = base;
}
