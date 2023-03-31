"use strict";
let data = [];
let max = 7;
let dataSize = data.length;
function push(val) {
    if (dataSize >= max) {
        return true;
    }
    else {
        data[dataSize] = val;
        dataSize += 1;
        console.log(data);
    }
}
function pop() {
    if (dataSize >= 0) {
        dataSize -= 1;
        data.length = dataSize;
        console.log(data);
    }
}
push(20);
push(30);
push(40);
push(50);
push(60);
push(70);
push(80);
push(90);
push(100);
pop();
