let ngauNhien = document.querySelector('#ngau-nhien');
let color = document.querySelector('#mau-sac');

//Tạo màu ngẫu nhiên
function randomBackGround() {
    let randomBg = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomBg;
    color.innerHTML = '#' + randomBg;
}

ngauNhien.addEventListener('click', randomBackGround);

randomBackGround();

//Nhập màu từ giá trị người dùng nhập vào
let buttonInputColor = document.querySelector('#button-input-color');
let inputColor = document.querySelector('#input-color');
function createBackground(){
    document.body.style.backgroundColor = inputColor.value;
    color.innerHTML = inputColor.value;
}

buttonInputColor.addEventListener('click', createBackground);
createBackground();