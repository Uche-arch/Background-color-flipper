const body = document.getElementsByTagName("body")[0];
// const greenButton = document.getElementById("green");
// const redButton = document.getElementById("red");
// const blueButton = document.getElementById("blue");

// greenButton.onclick = function(){
//     body.style.backgroundColor = "green";
// }
// redButton.onclick = function () {
//   body.style.backgroundColor = "red";
// }
// blueButton.onclick = function () {
//   body.style.backgroundColor = "blue";
// }

//         OR

function setcolor(color){
    body.style.backgroundColor = color;
}
function randomColor(){
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    body.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
}


// YOU CAN IMAGINE HOW HAPPY I WAS WHEN I COMPLETED THIS PROJECT