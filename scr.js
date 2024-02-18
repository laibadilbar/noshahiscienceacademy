let marks,result;
let point1=0;
let point2=0;
let point3=0;
let point4=0;
let point5=0;
let number;
let answer;
console.log(">>Press 1 to start the Quize:");
console.log(">>press 0 to end the Quize:");
let choice=prompt("Enter your choice:");
if(choice==1){
    console.log("ALL the best your quize start now:");
    console.log("Question number 1");
    console.log("(01)The Province  of punjab is:");;
    console.log("(1) One");
    console.log("(2) Two");
    console.log("(3) Three");
    console.log("(4) five");
let answer=prompt("enter your answer");
if(answer==4){
    console.log("correct answer:");
    point1+=5;
    console.log("Your marks from point 1:" +  point1);
}
else{
    console.log("Wrong answer:" +"correct answer is (4) Five");
    point1-=1;
    console.log("Your marks from point 1:" + point1);
}
    console.log("Question number 2");
    console.log("(02) Windows was developed by:");
    console.log("(1) Sun system");
    console.log("(2) Microsoft");
    console.log("(3) Hewlett");
    console.log("(4) ANSI");
let answer2=prompt("enter your answer");
if(answer2==2){
    console.log("correct answer:");
    point2+=5;
    console.log("Your marks from point 2:" +  point2);
}

else{
    console.log("Wrong answer:");
    point2+=0;
    console.log("Your marks from point 2:" + point2);
}
    console.log("Question number 3");
    console.log("(03)Which of the following is not amouse event:");
    console.log("(1) Left click");
    console.log("(2) Right click");
    console.log("(3) Drag");
    console.log("(4) Go");
let answer3=prompt("enter your answer");
if(answer3==4){
    console.log("correct answer:");
    point3+=5;
    console.log("Your marks from point 3:" +  point3);
}

else{
    console.log("Wrong answer:");
    point3+=0;
    console.log("Your marks from point 3:" + point3);
}
     console.log("Question number 4");
     console.log("(04)Which of the following is a amouse event:");
     console.log("(1) Left click");
     console.log("(2) Right click");
     console.log("(3) Double click");
     console.log("(4) All");
let answer4=prompt("enter your answer");
if(answer4==1){
    console.log("correct answer:");
    point4+=5;
    console.log("Your marks from point 4:" +  point4);
}

else{
    console.log("Wrong answer:");
    point4+=0;
    console.log("Your marks from point 4:" + point4);
}
    console.log("Question number 5");
    console.log("(05)How many orientation type are available in word?:");
    console.log("(1) One");
    console.log("(2) Two");
    console.log("(3) Three");
    console.log("(4) five");
let answer5=prompt("enter your answer");
if(answer5==2){
    console.log("correct answer:");
    point5+=5;
    console.log("Your marks from point 5:" +  point5);
}
else{
    console.log("Wrong answer:");
    point5+=0;
    console.log("Your marks from point 5:" + point5);
}
    //result=point1+point2+point3+point4+point5;
    //console.log("Total Marks =" +result+ "/50")
}
 else if(choice==0){
    console.log("QUize are finished:");
}
else{
    console.log("Invalid statement");
}

console.log("Quize are Finished if you want to again give Quize press 2 or 3>>:")
console.log("If you enter 2 quize are easy:");
console.log("If yoy enter 3 Quiz are Difficult:");
let press=prompt("Enter your choice:")

if(press==2){
    console.log("Your Quize start again");
    console.log("(01)The Province  of punjab is:");;
    console.log("(1) One");
    console.log("(2) Two");
    console.log("(3) Three");
    console.log("(4) five");
    let answer6=prompt("enter your answer");
    if(answer6==4){
    console.log("correct answer:");
    point1+=5;
    console.log("Your marks from point 1:" +  point1);
}

else{
    
    console.log("Wrong answer:");
    
    point1+=0;
    
    console.log("Your marks from point 1:" + point1    );
}
    console.log("(02) Windows was developed by:");
    console.log("(1) Sun system");
    console.log("(2) Microsoft");    
    console.log("(3) Hewlett");
    console.log("(4) ANSI");
let answer7=prompt("enter your answer");
if(answer7==2){
    console.log("correct answer:");
    point2+=5;
    console.log("Your marks from point 2:" +  point2);
}

else{
    console.log("Wrong answer:");
    point2+=0;
    console.log("Your marks from point 2:" + point2);
}
console.log("(03)Which of the following is not amouse event:");
console.log("(1) Left click");
console.log("(2) Right click");
console.log("(3) Drag");
console.log("(4) Go");
let answer8=prompt("enter your answer");
if(answer8==4){
    console.log("correct answer:");
    point3+=5;
    console.log("Your marks from point 3:" +  point3);
}

else{
    console.log("Wrong answer:");
    point3+=0;
    console.log("Your marks from point 3:" + point3);
}

console.log("(04)Which of the following is a amouse event:");
console.log("(1) Left click");
console.log("(2) Right click");
console.log("(3) Double click");
console.log("(4) All");
let answer9=prompt("enter your answer");
if(answer9==1){
    console.log("correct answer:");
    point4+=5;
    console.log("Your marks from point 4:" +  point4);
}

else{
    console.log("Wrong answer:");
    point4+=0;
    console.log("Your marks from point 4:" + point4);
}
console.log("(05)How many orientation type are available in word?:");
console.log("(1) One");
console.log("(2) Two");
console.log("(3) Three");
console.log("(4) five");
let answer10=prompt("enter your answer");
if(answer10==2){
    console.log("correct answer:");
    point5+=5;
    console.log("Your marks from point 5:" +  point5);
}

else{
    console.log("Wrong answer:");
    point5+=0;
    console.log("Your marks from point 5:" + point5);
}
    //result=point1+point2+point3+point4+point5;
    //console.log("Total Marks =" +result+ "/50")
}
else if(press==3){
    console.log("Your Quize start again");
    console.log("(01)what is html:");;
    console.log("(1) One");
    console.log("(2) Two");
    console.log("(3) Three");
    console.log("(4) five");
    let answer=prompt("enter your answer");
    if(answer==4){
    console.log("correct answer:");
    point1+=5;
    console.log("Your marks from point 1:" +  point1);
}

else{
    
    console.log("Wrong answer:");
    
    point1+=0;
    
    console.log("Your marks from point 1:" + point1    );
}
    console.log("(02) Windows was developed by:");
    console.log("(1) Sun system");
    console.log("(2) Microsoft");    
    console.log("(3) Hewlett");
    console.log("(4) ANSI");
let answer2=prompt("enter your answer");
if(answer2==2){
    console.log("correct answer:");
    point2+=5;
    console.log("Your marks from point 2:" +  point2);
}

else{
    console.log("Wrong answer:");
    point2+=0;
    console.log("Your marks from point 2:" + point2);
}
console.log("(03)Which of the following is not amouse event:");
console.log("(1) Left click");
console.log("(2) Right click");
console.log("(3) Drag");
console.log("(4) Go");
let answer3=prompt("enter your answer");
if(answer3==4){
    console.log("correct answer:");
    point3+=5;
    console.log("Your marks from point 3:" +  point3);
}

else{
    console.log("Wrong answer:");
    point3+=0;
    console.log("Your marks from point 3:" + point3);
}

console.log("(04)Which of the following is a amouse event:");
console.log("(1) Left click");
console.log("(2) Right click");
console.log("(3) Double click");
console.log("(4) All");
let answer4=prompt("enter your answer");
if(answer4==1){
    console.log("correct answer:");
    point4+=5;
    console.log("Your marks from point 4:" +  point4);
}

else{
    console.log("Wrong answer:");
    point4+=0;
    console.log("Your marks from point 4:" + point4);
}
console.log("(05)How many orientation type are available in word?:");
console.log("(1) One");
console.log("(2) Two");
console.log("(3) Three");
console.log("(4) five");
let answer5=prompt("enter your answer");
if(answer5==2){
    console.log("correct answer:");
    point5+=5;
    console.log("Your marks from point 5:" +  point5);
}

else{
    console.log("Wrong answer:");
    point5+=0;
    console.log("Your marks from point 5:" + point5);
}
result=point1+point2+point3+point4+point5;
console.log("Total Marks =" +result+ "/50")
}
else{
    console.log("Quize are Finished");
}
console.log("If you Want to display your result press 9>>");
const display=prompt(">>Press 9 if you want to display your result:")
if(display==9){
    result=point1+point2+point3+point4+point5;
    console.log("Your total marks" +result);
    if(result>=25){
        console.log("Congratulation you have passed");
    }
    else{
        console.log("sorry you are Failed");
    }
}
if(answer!=4){
     console.log("sorry you entered wrong answer from question 1");
    console.log("your correct answer is option 4");
}
/*console.log("(01)The Province  of punjab is:");;
console.log("(1) One");
console.log("(2) Two");
console.log("(3) Three");
console.log("(4) five");
let answer=prompt("enter your answer");
if(answer==4){
    console.log("correct answer:");
    point1+=5;
    console.log("Your marks from point 1:" +  point1);
}

else{
    console.log("Wrong answer:");
    point1+=0;
    console.log("Your marks from point 1:" + point1);
}
console.log("(02) Windows was developed by:");
console.log("(1) Sun system");
console.log("(2) Microsoft");
console.log("(3) Hewlett");
console.log("(4) ANSI");
let answer2=prompt("enter your answer");
if(answer2==2){
    console.log("correct answer:");
    point2+=5;
    console.log("Your marks from point 2:" +  point2);
}

else{
    console.log("Wrong answer:");
    point2+=0;
    console.log("Your marks from point 2:" + point2);
}
console.log("(03)Which of the following is not amouse event:");
console.log("(1) Left click");
console.log("(2) Right click");
console.log("(3) Drag");
console.log("(4) Go");
let answer3=prompt("enter your answer");
if(answer3==4){
    console.log("correct answer:");
    point3+=5;
    console.log("Your marks from point 3:" +  point3);
}

else{
    console.log("Wrong answer:");
    point3+=0;
    console.log("Your marks from point 3:" + point3);
}

console.log("(04)Which of the following is a amouse event:");
console.log("(1) Left click");
console.log("(2) Right click");
console.log("(3) Double click");
console.log("(4) All");
let answer4=prompt("enter your answer");
if(answer4==1){
    console.log("correct answer:");
    point4+=5;
    console.log("Your marks from point 4:" +  point4);
}

else{
    console.log("Wrong answer:");
    point4+=0;
    console.log("Your marks from point 4:" + point4);
}
console.log("(05)How many orientation type are available in word?:");
console.log("(1) One");
console.log("(2) Two");
console.log("(3) Three");
console.log("(4) five");
let answer5=prompt("enter your answer");
if(answer5==2){
    console.log("correct answer:");
    point5+=5;
    console.log("Your marks from point 5:" +  point5);
}

else{
    console.log("Wrong answer:");
    point5+=0;
    console.log("Your marks from point 5:" + point5);
}
result=point1+point2+point3+point4+point5;
console.log("Total Marks =" +result+ "/50")*/