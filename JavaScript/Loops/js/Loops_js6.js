btn.addEventListener("click",f_out);

function f_out (){
    price = 24;
    percent = 6;
    years = 2021-1726;
    let result = 0;

    console.log(price);
    console.log(percent);
    console.log(years);

    result = price*(1+(percent/100))**years;
    answer.innerHTML = "Итоговая сумма:  " + "$" + result.toFixed(2);

}