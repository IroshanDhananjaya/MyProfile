$("#btnSave").click(function () {
   let custId=$("#custID").val();
    let custName=$("#custName").val();
    let custAddess=$("#custAddress").val();
    let custSalary=$("#custSalary").val();

let row=`<tr><td>${custId}</td><td>${custName}</td><td>${custAddess}</td><td>${custSalary}</td></tr>;`

$("#customer-Table").append(row);

$("#customer-Table>tr").click(function(){
    console.log(this);
});

});