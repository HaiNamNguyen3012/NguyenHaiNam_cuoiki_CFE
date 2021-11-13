let strArr = [];
let maxLength = 0;
let newStrArr = [];

//nhập chuỗi vào mảng
while(true){
    let str = prompt('Nhập chuỗi mà bạn muốn và nhập -1 để thoát');
    if(str == '-1'){
        break;
    }
    strArr.push(str);
}

//Hàm tìm độ dài của chuỗi lớn nhất trong mảng
function allLongestStrings(arr) {
    let newArr = [];
    for(let index of arr){
        if(maxLength < index.length){
            maxLength = index.length;
        }
    }
    
    for(let index of arr){
        if(index.length === maxLength){
            newArr.push(index);
        }
    }
    return newArr;
}

newStrArr = allLongestStrings(strArr);

for(let index of newStrArr){
    console.log(index);
}