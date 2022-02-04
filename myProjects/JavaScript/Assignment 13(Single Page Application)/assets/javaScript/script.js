document.getElementById("btn-placeOrder").addEventListener("click",function(){
    document.getElementsByClassName("placeOrder-area")[0].style.display="block"
    document.getElementsByClassName("customer-area")[0].style.display="none"
    document.getElementsByClassName("item-area")[0].style.display="none"
})

document.getElementById("btn-customer").addEventListener("click",function(){
    document.getElementsByClassName("customer-area")[0].style.display="block"
    document.getElementsByClassName("placeOrder-area")[0].style.display="none"
    document.getElementsByClassName("item-area")[0].style.display="none"
})

document.getElementById("btn-Item").addEventListener("click",function(){
    document.getElementsByClassName("item-area")[0].style.display="block"
    document.getElementsByClassName("placeOrder-area")[0].style.display="none"
    document.getElementsByClassName("customer-area")[0].style.display="none"
})

// ----------customer-form-------------------------

$("#btn-save-customer").click(function () {
    let customerID = $("#txtCustID").val();
    let customerName = $("#txtCustName").val();
    let customerAddress = $("#txtCustAddress").val();
    let customerSallary = $("#txtCustSalary").val();

    let row = `<tr><td>${customerID}</td><td>${customerName}</td><td>${customerAddress}</td><td>${customerSallary}</td></tr>`;

    /*select the table body and append the row */
    $("#customerTable").append(row);

});
$(document).on('click','#customer-table tr',function () {
    var cID=$(this).find('td:eq(0)').text();
    var cName=$(this).find('td:eq(1)').text();
    var cAddress=$(this).find('td:eq(2)').text();
    var cSalary=$(this).find('td:eq(3)').text();

    $('#txtCustID').val(cID);
    $('#txtCustName').val(cName);
    $('#txtCustAddress').val(cAddress);
    $('#txtCustSalary').val(cSalary);

});

