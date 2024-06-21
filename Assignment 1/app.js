//  Question # 1
let name = "abc",
    age = 25,
    email = "abc@gmail.com",
    phoneNo = "xxxxxxxxxxx",
    instituteName = "Jawan Pakistan",
    education = "xyz";

const bioData = `
    <h4>Ans # 01 </h4>
    <h2>Bio Data</h2>
    Name: ${name}, <br>
    Age: ${age}, <br>
    Email: ${email}, <br>
    Phone No: ${phoneNo}, <br>
    Institute Name: ${instituteName},<br>
    Education: ${education}
    `;

    document.write(bioData)

//   Question # 2
const subject1 =  "eng", subject2 = "math", subject3 = "urdu", subject4 = "islamiat", subject5 = "science";
let marks1 = 70, marks2 = 90, marks3 = 60, marks4 = 80, marks5 = 65;
totalMarks = 500;
obtainedMarks = marks1 + marks2 + marks3 + marks4 + marks5;

let percentage = (obtainedMarks/totalMarks) * 100

let grade; 
if (percentage >= 90){
    grade = "A+";
} else if (percentage >= 80){
    grade = "A";
}else if (percentage >= 70){
    grade = "B";
}else if (percentage >= 60){
    grade = "C";
}else if (percentage >= 50){
    grade = "D";
}else if (percentage >= 40){
    grade = "E";
}else{
    grade = "Fail";
}

const markSheet = ` 
    <h4>Ans # 02 </h4>
    <h2>Mark Sheet</h2>
    Subject 1: ${subject1}, Marks: ${marks1}<br>
    Subject 2: ${subject2}, Marks: ${marks2}<br>
    Subject 3: ${subject3}, Marks: ${marks3}<br>
    Subject 4: ${subject4}, Marks: ${marks4}<br>
    Subject 5: ${subject5}, Marks: ${marks5}<br>
    Total Obtained Marks: ${obtainedMarks}<br>
    Total Marks: ${totalMarks}<br>
    Percentage: ${percentage.toFixed(2)}%<br>
    Grade: ${grade}
`;

document.write(markSheet);


//  Question # 3
// VAR
var x = 10; {
    var x = 20;
    document.write(x);
}
document.write(`<h4> Ans # 03</h4> ${x} <br>`);

// LET
let nam = "xyz";{
   let nam = "abc"
   document.write(nam);
}
document.write(`<br> ${nam} <br>`);

// const
const a = 50;{
    const a = 30;
    document.write(a);
}
document.write(`<br> ${a} <br>`)