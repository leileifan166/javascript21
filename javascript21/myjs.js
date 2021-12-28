var score = 80;
document.write("数学考试成绩: " + score + "分");
document.write("<br>");
if(score >= 60){
    document.write("该学生的考试成绩: 及格");
}
document.write("<br>");


var d = 1200;
var e = 200;
if(d>e){
    document.write("d大于e");
}else{
    document.write("d小于e");
}
document.write("<br>");

/* var year = 2010;
if(year % 4 == 0 && year %  100 !== 0 || year % 400 == 0 ){
    document.write(year + "年是闰年," + "二月份有29天");
}else{
    document.write(year + "年是平年," + "二月份有28天");
}
document.write("<br>"); */

var year = 2010;
var month = 0;
if(year % 4 == 0 && year % 100 !== 0 || year % 400 == 0){
 month = 29;
}else{
 month = 28;
}
alert("2020年2月份的天数为" + month + "天");



