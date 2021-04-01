btn.addEventListener("click", sumfirstn);

  function sumfirstn() {
    n1 = n.value;
    let sum = 0;
    for (let i=1; i<=n1; i++){
        sum += Number(i);
        answer.innerHTML= "Sum = " + sum;
    }

}