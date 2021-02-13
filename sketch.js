let can;
let canw = 700;
let canh = 700;

class Triangle {
    constructor(A, B, C, parent, speed, lerpDist, isLargest) {
        this.A = A
        this.B = B
        this.C = C
        this.parent = parent
        this.speed = speed
        this.lerpDist = lerpDist
        this.isLargest = isLargest
    }
}

let parent = new Triangle(
    [200, 400],
    [600, 400],
    [400, 400-346.410161514],
    0,
    0,
    0
)

let child = new Triangle(
    parent.A.slice(),  // these arent supposed to be referenced but they leave cool artifacts
    parent.B.slice(),
    parent.C.slice(),
    parent,
    0.05,
    0,
    0
)

function setup() {
    can = createCanvas(canh, canw)
    frameRate(20)
}

function draw() {
    // drawTriangle(parent)
    moveTriangle(child)
    drawTriangle(child)
    if(frameCount > 20) noLoop()
}

function moveTriangle(tri) {
        tri.A[0] = lerp(tri.parent.A[0], tri.parent.B[0], tri.lerpDist)
        tri.A[1] = lerp(tri.parent.A[1], tri.parent.B[1], tri.lerpDist)
        tri.B[0] = lerp(tri.parent.B[0], tri.parent.C[0], tri.lerpDist)
        tri.B[1] = lerp(tri.parent.B[1], tri.parent.C[1], tri.lerpDist)
        tri.C[0] = lerp(tri.parent.C[0], tri.parent.A[0], tri.lerpDist)
        tri.C[1] = lerp(tri.parent.C[1], tri.parent.A[1], tri.lerpDist)
        tri.lerpDist += tri.speed
        tri.lerpDist = tri.lerpDist % 1;
}


function drawTriangle(tri) {
    beginShape()
    vertex(tri.A[0], tri.A[1])
    vertex(tri.B[0], tri.B[1])
    vertex(tri.C[0], tri.C[1])
    endShape(CLOSE)
}
