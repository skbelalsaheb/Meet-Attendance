/*
 *   Copyright (c) 2020 
 *   All rights reserved By E-cell Author Sk Belal Saheb.
 */


 var studMsg=document.getElementsByClassName("GDhqjd");

// for(let item of studMsg){
//     var tr = table.insertRow();
//     var td = document.createElement('td');

//    td.appendChild(document.createTextNode(studentName));
//    td.appendChild(document.createTextNode(studentRoll));
//    td.appendChild(document.createTextNode(time));
//    tr.appendChild(td);
// tbody.appendChild(tr);
// }
// table.appendChild(tbody);
// div.appendChild(table);
// newWin= window.open("");
// newWin.document.write(div.outerHTML,"hello man");
// newWin.print();
// newWin.close();
function main(){
var body = document.body,
tbl  = document.createElement('table');
tbl.style.width  = '100px';
tbl.style.border = '1px solid black';
let studData=[];
if(studMsg.length >=1){
for(let item of studMsg){


var studentName=item.getElementsByClassName("YTbUzc").item(0).innerHTML;
var studentRoll=item.getElementsByClassName("oIy2qc").item(0).innerHTML;
var time =item.getElementsByClassName("MuzmKe").item(0).innerHTML;
if (studentRoll.length==4){

    if(isNumeric(studentRoll)==true && (studentRoll.startsWith("17") || studentRoll.startsWith("26"))){
    studData.push(studentRoll +"~"+ studentName +"~"+time);
    }
}
}
if(studData.length==0){
    alert("There Is No Valid Roll Number In Messagebox");
    return 0;
}
studData.sort();
for (i=0;i<studData.length;i++){
var tr = tbl.insertRow();
var finalData=studData[i].split("~");

var td = tr.insertCell();
td.appendChild(document.createTextNode(finalData[0]));
td.style.border = '1px solid black';
td.style.fontSize="20px";

var td = tr.insertCell();
td.appendChild(document.createTextNode(finalData[1]));
td.style.border = '1px solid black';

var td = tr.insertCell();
td.appendChild(document.createTextNode(finalData[2]));
td.style.border = '1px solid black';

}
var html = tbl.outerHTML;
var x=null;
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

if(studentRoll.startsWith("17")){
    x="1 St Semester \t"+today;
}
else if(studentRoll.startsWith("26")){
    x="5 th Semester \t"+today;
}
window.open('data:application/vnd.ms-excel,'+'<h1>'+encodeURIComponent(x)+'</h1>'+"\n"+ encodeURIComponent(html));
// newWin= window.open("");
// newWin.document.write(x,tbl.outerHTML);
// newWin.print();
// newWin.close();
}
else{
    alert("No Roll Number In Messagebox");
}

return 0;
}
function isNumeric(value) {
    return /^\d+$/.test(value);
}

main()
