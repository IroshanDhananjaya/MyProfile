document.getElementById("btn-placeOrder").addEventListener("click", function () {
    document.getElementsByClassName("placeOrder-area")[0].style.display = "block"
    document.getElementsByClassName("customer-area")[0].style.display = "none"
    document.getElementsByClassName("item-area")[0].style.display = "none"
})

document.getElementById("btn-customer").addEventListener("click", function () {
    document.getElementsByClassName("customer-area")[0].style.display = "block"
    document.getElementsByClassName("placeOrder-area")[0].style.display = "none"
    document.getElementsByClassName("item-area")[0].style.display = "none"
})

document.getElementById("btn-Item").addEventListener("click", function () {
    document.getElementsByClassName("item-area")[0].style.display = "block"
    document.getElementsByClassName("placeOrder-area")[0].style.display = "none"
    document.getElementsByClassName("customer-area")[0].style.display = "none"
})

// ----------customer-form-------------------------
function saveCustomer() {
    $("#customerTable>tr").off("click");

    let customerID = $("#txtCustID").val();
    let customerName = $("#txtCustName").val();
    let customerAddress = $("#txtCustAddress").val();
    let customerSallary = $("#txtCustSalary").val();

    let row = `<tr><td>${customerID}</td><td>${customerName}</td><td>${customerAddress}</td><td>${customerSallary}</td></tr>`;

    /*select the table body and append the row */
    $("#customerTable").append(row);

    $("#customerTable>tr").click(function () {
        let cusID = $(this).children(":eq(0)").text();
        let cusName = $(this).children(":eq(1)").text();
        let cusAddress = $(this).children(":eq(2)").text();
        let cusSalary = $(this).children(":eq(3)").text();

        console.log(cusID, cusName, cusAddress, cusSalary);

        $("#txtCustID").val(cusID);
        $("#txtCustName").val(cusName);
        $("#txtCustAddress").val(cusAddress);
        $("#txtCustSalary").val(cusSalary)

    })

}

$("#btn-save-customer").click(function () {
    saveCustomer();
});


$("#txtCustID").on("keydown",function (event) {
    if (event.key == "Enter") {
        $("#txtCustName").focus()
    }
});


$("#txtCustName").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCustAddress").focus()
    }
});
$("#txtCustAddress").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtCustSalary").focus()
    }
});

$("#txtCustSalary").keydown(function (event) {
    if (event.key == "Enter") {
        saveCustomer();
    }
});

var regExCusID = /^(C00-)[0-9]{3,4}$/;
var regExCusName = /^[A-z ]{3,20}$$/;
var regExAddress=/^[A-z0-9/, ]{6,30}$/;
var regExSalary=/^[0-9]{1,}[.]?[0-9]{2}$/;

function validation(regExPara,nextReg,thisField,nextField){
    console.log("awooooooooooo")
    var regEx=regExPara;
    if(regEx.test($(thisField).val())){
        $(thisField).css("border","2px solid green");

        if(nextField !=0){
            checkNext(nextReg,nextField);
            $("#error").text("");
        }

    }else {
        $(thisField).css("border","2px solid red");
    }
}
function checkNext(nextReg,nextField){
    console.log("next Check")
    if(nextReg.test($(nextField).val())){
        $(nextField).css("border","2px solid green");
        $("#error").text("");
    }else {
        $("#error").text("Invalid");
    }
}

$("#txtCustID").on("keyup",function () {
    validation(regExCusID,regExCusName,"#txtCustID","#txtCustName");
});

$("#txtCustName").keyup(function () {
    validation(regExCusName,regExAddress,"#txtCustName","#txtCustAddress");
});
$("#txtCustAddress").keyup(function () {
    validation(regExAddress,regExSalary,"#txtCustAddress","#txtCustSalary");
});
$("#txtCustSalary").keyup(function () {
    validation(regExSalary,"","#txtCustSalary","");
});


/*--------------------Item Form--------------------*/
function saveItem() {
    $("#itemTable>tr").off("click");

    let ItemCode = $("#txtItemCode").val();
    let ItemName = $("#txtItemName").val();
    let ItemQty = $("#txtQty").val();
    let ItemPrice = $("#txtPrice").val();

    let row = `<tr><td>${ItemCode}</td><td>${ItemName}</td><td>${ItemQty}</td><td>${ItemPrice}</td></tr>`;

    /*select the table body and append the row */
    $("#itemTable").append(row);

    $("#itemTable>tr").click(function () {
        let iCode = $(this).children(":eq(0)").text();
        let iName = $(this).children(":eq(1)").text();
        let qty = $(this).children(":eq(2)").text();
        let price = $(this).children(":eq(3)").text();


        $("#txtItemCode").val(iCode)
        $("#txtItemName").val(iName);
        $("#txtQty").val(qty);
        $("#txtPrice").val(price);

    });
}

$("#btn-item-save").click(function () {
    saveItem();
});

$("#txtItemCode").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtItemName").focus()
    }

});
$("#txtItemName").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtQty").focus()
    }

});
$("#txtQty").keydown(function (event) {
    if (event.key == "Enter") {
        $("#txtPrice").focus()
    }

});
$("#txtPrice").keydown(function (event) {
    if (event.key == "Enter") {
        saveItem();
        $("#txtItemCode").focus()
    }

});

var regExItemCode = /^(I00-)[0-9]{3,4}$/;
var regExItemName = /^^[A-z ]{3,20}$$/
var regExQTY=/^[0-9]{1,20}$/;
var regExPrice=/^[0-9]{1,}[.]?[0-9]{2}$/;

$("#txtItemCode").keyup(function () {
  validation(regExItemCode,regExItemName,"#txtItemCode","#txtItemName");
});

$("#txtItemName").keyup(function () {
    validation(regExItemName,regExQTY,"#txtItemName","#txtQty");
});

$("#txtQty").keyup(function () {
    validation(regExQTY,regExPrice,"#txtQty","#txtPrice");
});
$("#txtPrice").keyup(function () {
    validation(regExPrice,"","#txtPrice","");
});