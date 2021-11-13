let weightPeople = [];

//nhập mảng
while(true){
    let weight = parseInt(prompt('Nhập cân nặng của thành viên của hai nhóm và nhập -1 để thoát'));
    if(weight === -1){
        break;
    }
    weightPeople.push(weight);
}


//Hàm tính cân nặng của 2 nhóm
function alternatingSums(inputArray) {
    let sum1 = 0;
    let sum2 = 0;
    let outputArray = [];
    for(let index in inputArray){
        if(index % 2 === 1){
            sum1 += inputArray[index];
        } else{
            sum2 += inputArray[index];
        }
    }
    outputArray.push(sum2);
    outputArray.push(sum1);
    return outputArray;
}

let sumWeightPeople = alternatingSums(weightPeople);

for(let index of sumWeightPeople){
    console.log(index);
}