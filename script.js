/**Tip Calculator JavaScript File 
    author(Joshua Thomas)
    date(10.01.2022)
    version:1.0
**/

//grab all the elements
const amountOfPeople = document.getElementById('amountOfPeople');
const output = document.getElementById('output');
const percentage = document.getElementById('percentage');
const bill = document.getElementById('bill');

//once calculate button is pressed...
const btn = document.getElementById('btn').addEventListener("click", (e)=>{
    if((bill.value == "") || (percentage.value == "-Percentage-")){
        alert("Fill in the forms");
        return;
    }
    
    let x = 1;
    let p = (bill.value * (percentage.value / 100));
    
    //Condition for if the amount of people paying is more than 1
    if(amountOfPeople.value > x){
        let total = (p / amountOfPeople.value);
        output.innerHTML = "£" + total.toFixed(2) + " each";
    }
    
    //Condition for if the amount of people paying is 1
    if(amountOfPeople.value == x){
        output.innerHTML = "£" + p.toFixed(2) + " tip";
    }
    
    //Condition for if the amount of people box is empty on click event
    if(amountOfPeople.value == ""){
        amountOfPeople.value = x;
        amountOfPeople.innerHTML = x;
        output.innerHTML = "£" + p.toFixed(2) + " tip";
    }
});