document.querySelector("#sameAddress").addEventListener("click", function(){
    console.log("this works")
let bill = document.querySelector("#bill");
let home = document.querySelector("#home");

    if(this.checked){
        home.value = bill.value;
        home.disabled = true;
        // document.getElementById("home").value = document.getElementById("bill").value
    }
    else{
        home.value = "";
        home.disabled = false;
        // document.getElementById("home").value = ""
    }
})