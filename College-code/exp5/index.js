
// 1. Area of triangle 
function triangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}
let side1 = 5, side2 = 6, side3 = 7;
console.log("Area of the triangle:", triangleArea(side1, side2, side3).toFixed(2));


// 2. Add to number ,give triple of the sum if same number 
function sumOrTriple(a, b) {
    if (a === b) {
        return 3 * (a + b);
    } else {
        return a + b; 
    }
}
console.log(sumOrTriple(4, 5)); 
console.log(sumOrTriple(5, 5)); 



//3. Reversing the number 
function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
console.log(reverseNumber(12345)); 



//4. 1st letter of each word to uppercase 
function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("hello world")); 


//5. finding largest of 5 numbers 
function findLargest(a, b, c, d, e) {
    let largest = Math.max(a, b, c, d, e);
    alert("The largest number is: " + largest);
}
findLargest(1,2,3,4,5);


//6. Average marks and grade 
function calculateGrade(marks) {
    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let average = total / marks.length;

    let grade;
    if (average < 60) {
        grade = "F";
    } else if (average < 70) {
        grade = "D";
    } else if (average < 80) {
        grade = "C";
    } else if (average < 90) {
        grade = "B";
    } else {
        grade = "A";
    }
    console.log(`Average Marks: ${average.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
}
let studentMarks = [80, 77, 88, 95, 68];
calculateGrade(studentMarks);

//7. star pattern 
for (let i =0; i<5; i++){
    for (let j=0; j<i;j++){
        console.log("*")
    }
}

//8. The To-do app 
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.textContent = taskText;
    li.addEventListener("click", () => li.classList.toggle("completed"));

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

//9. Character counter 
function updateCounter() {
    let textInput = document.getElementById("textInput");
    let charCount = document.getElementById("charCount");
    charCount.textContent = `${textInput.value.length}/150 characters used`;
} 

//10. Number guessing game
let x = Math.floor((Math.random() * 100) + 1);
let count = 0;

function Guessnumber(){
    count++; 
    let msg = document.getElementById("Attempts");
    msg.textContent = count;

    let Input = document.getElementById("num");
    let UserInput = Input.value.trim();
    if (UserInput==="") return;
    
    let message = document.getElementById("Response");
    if (UserInput === x){
        message.textContent = 'Your guess is correct ${x}';
        resetGame();
    }
    else if (UserInput > x){
        message.textContent = 'Too High';
    }
    else {
        message.textContent = 'Too Low';
    }
    if (count == 10){
        message.textContent = "Attempts are over"
        resetGame();
    }

   function resetGame(){
        count =0;
        randomNumber = Math.floor(Math.random() * 100) + 1;
                document.getElementById("Response").textContent = "";
                document.getElementById("num").value = "";
    }
}