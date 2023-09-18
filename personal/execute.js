
document.getElementById("manualGen").addEventListener("click", manualGeneration);
function manualGeneration(){
    // 버튼을 누를떄 value값을 +1 한다
    let value = document.getElementById("value").innerHTML;
    value = parseInt(value);
    value++;
    showValue(value);
}

function showValue(value){
    //value값을 p태그 아이디 showValue에 보여준다
    document.getElementById("value").innerHTML = value;
}

//자동생산버튼 autoGen
document.getElementById("autoGen").addEventListener("click", autoGeneration);
function autoGeneration(){
    //1초마다 value값을 +1 하는 것을 반복한다
    let genValue = document.getElementById("autoGenerator").innerHTML;
    genValue = parseInt(genValue);
    for(let i=0; i<genValue; i++){
        manualGeneration();
    }
    setTimeout(autoGeneration, 1000);
}

function findgenValue(){
    let genValue = document.getElementById("autoGenerator").innerHTML;
    genValue = parseInt(genValue);
    return genValue;
}
function findValue(){
    let value = document.getElementById("value").innerHTML;
    value = parseInt(value);
    return value;
}

//autoStop 버튼
document.getElementById("autoStop").addEventListener("click", autoStop);
function autoStop(){
    genValue = findgenValue();
    for(let i=0; i<=genValue; i++){
    clearTimeout(autoGeneration);
    }
}
// autoGen 구매버튼
document.getElementById("buyAutoGen").addEventListener("click", buyAutoGen);
function buyAutoGen(){
    //value값을 10 감소시키고 autoGen을 구매한다
    let value = findValue();
    if(value>=10){
        value -= 10;
        showValue(value);
        let autoGen = document.getElementById("autoGenerator").innerHTML;
        autoGen = parseInt(autoGen);
        autoGen++;
        document.getElementById("autoGenerator").innerHTML = autoGen;
    }else{
        alert("잔액이 부족합니다");
    }
}