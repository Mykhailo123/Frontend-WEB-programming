btn.addEventListener("click", minmax);

function minmax() {
    a1 = a.value;
    b1 = b.value;
    c1 = c.value;
    d1 = d.value;
    min = Math.min(a1, b1, c1, d1);
    max = Math.max(a1, b1, c1, d1);
    answer.innerHTML = "Minimum: " + min;
    answer1.innerHTML = "Maximum: " + max;
      
  
  }
  