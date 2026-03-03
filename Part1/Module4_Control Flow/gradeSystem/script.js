// Question:1
// Write a function getGrade(score) that: 
// • Takes a student's marks (0 to 100) Returns the grade based on this logic: 
//  90-100 A+  
// 80-89 A 
//  70-79 B 
// 60-69 C 
// 33-59 D 
//  0-32 Fail 
// Anything else Invalid marks

let score;
score = prompt("Enter your score:"+score);
console.log("Your score is: " + score);

function getGrade(score) {
    if(score>=90 && score <=100) return "A+";
    else if(score>=80) return "A";
    else if (score >= 70) return "B";
    else if (score >= 60) return "C";
    else if (score >= 33) return "D";
    else if (score >= 0) return "Fail";
    else return "Invalid marks ❌";
}

console.log(getGrade(score));