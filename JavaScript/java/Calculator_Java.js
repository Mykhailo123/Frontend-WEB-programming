btn.addEventListener("click", f_out);  /* click - это название события (нажатие) */

  function f_out (){
      q = Number(n.value) +"*X^"+ Number(n.value-1); /* Через плюсики вводим всё, что должно выводится в строке (это не сумма в обычном понятии)*/
      resultat.innerHTML = q; 
  }