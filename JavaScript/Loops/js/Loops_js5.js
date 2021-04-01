btn.addEventListener("click",f_out);

function f_out (){
    price = 100;
    percent = 5;
    years = 10;
    let result = 0;

    console.log(price);
    console.log(percent);
    console.log(years);

    result = price*(1+(percent/100))**years;
    answer.innerHTML = "$" + result.toFixed(2);

}

