btn.addEventListener("click", summult);

function summult() {
    a_value = a.value;   /* The Number() function converts the object argument to a number that represents the object's value. Но тут можно и без этого, в принципе писать*/
    b_value = b.value;
    var sum = 0;
    var mult = 1;
    mistake_a = 0;
    mistake_b = 0;

    if ((a_value < 1) || (a_value > 20)) {
        alert(" A is out of 1 to 20 - change A value");
        mistake_a = 1;
    }
    if ((b_value < 1) || (b_value > 20)) {
        alert("B is out of 1 to 20 - change B value");
        mistake_b = 1;
    }

    if ( !(mistake_a) && !(mistake_b) ) 
    {
        if (a_value >= b_value) {
            let i = b_value;
                for (; i <= a_value; i++) {
                    sum += Number(i);
                    mult *= Number(i);
                    answer.innerHTML = "Sum: " + sum + "<br> Product: " + mult;
                    // console.log("a is highter")
                    console.log(i);
                    console.log(sum);
                    console.log(mult);
                    console.log(a_value);
                    console.log(b_value);
                }
            }

        if ( a_value <= b_value ) {   
        var i = a_value;    /* тут можно и let, и var - т.к. let, в отличии от var, не создаёт свойства на глобальном объекте. Разница с использованием var в заголовке цикла for, заключается в том, что переменные объявленные var, будут видны во всей функции, в которой находится этот цикл. Как, например, var i=0; for ( let i=i ; i < 10 ; i++ ) { console.log(i); }*/
            for (; i <= b_value; i++) { 
                sum += Number(i);  /* Number() тут делает операцию с числом, без него бы вывело 012345, а не их сумму*/ 
                mult *= Number(i);
                answer.innerHTML = "Sum: " + sum + "<br> Product: " + mult;
                // console.log("b is highter")
                console.log(i);
                console.log(sum);
                console.log(mult);
                console.log(a_value);
                console.log(b_value);
            }
        } 

    
    }
}