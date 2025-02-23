
function sumdes(num) {
    let num1=document.getElementById("num").value;
    let res=document.getElementById("ans");
    while (num1 >= 10) {
        let sum = 0;
        while (num1 > 0) {
            sum += num1 % 10;
            num1 = Math.floor(num1 / 10);
        }
        num1 = sum;
    }
    return num1;
    document.getElementById("result").innerText=sum;
}
