/* Тут позадавали все переменные - варианты ответов и вопросов, счётчик... */

let title_arr = [ "Know the Queen! 😀👑 Q 1/5","Know the Queen! 😀👑 Q 2/5" ]
let question_arr = ["When Beyoncé Giselle Knowles-Carter was born?","Who run the world?"]
let a1_arr = ["September 14, 1975","***"]
let a2_arr = ["October 10, 1985","**"]
let a3_arr = ["September 4, 1981","***"]
let a4_arr = ["May 9, 1945","***"]
let answer_arr = ["September 4, 1981","**"]
let n_right_answer_arr=[1,2]
let n_answer = 1;
let right_answers = 0;


title.innerHTML=title_arr[n_question.value];
question.innerHTML=question_arr[n_question.value];  /* n_question.value - достаём варианты ответов из списка question_arr  */
a1.innerHTML = a1_arr[n_question.value];
a2.innerHTML = a2_arr[n_question.value];
a3.innerHTML = a3_arr[n_question.value];
a4.innerHTML = a4_arr[n_question.value];
answer.innerHTML = answer_arr[n_question.value];

n_right_answer = n_right_answer_arr[n_question.value];
console.log(n_question.value)

/* Actions when pressing the buttons*/

btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
   
/* Functions */

function f_out ()
{
    console.log(y1.checked);  /* console.log - Выводит сообщение в веб-консоль.  */
    console.log(y2.checked);
    console.log(y3.checked);
    console.log(y4.checked);

    if (y1.checked){ n_a = 1;}
    if (y2.checked){ n_a = 2;}
    if (y3.checked){ n_a = 3;}
    if (y4.checked){ n_a = 4;}
    console.log(n_a);

    if (n_a == n_right_answer){
      right_answers += 1;
      right_div.classList.remove("hidden");
      wrong_div.classList.add("hidden");
      console.log("n_question.value = "+n_question.value);
      console.log("n_answer = "+n_answer);
      if (n_question.value == n_answer){
        btn2.classList.add("hidden");
        let el1 = document.createElement("p");
        el1.innerHTML = "<b>"+right_answers+"</b>";
        right_div.appendChild(el1);
      }
    }else{
      right_answers-=1;
      right_div.classList.add("hidden");
      wrong_div.classList.remove("hidden");
    }
     
      
}


function f_out1 ()
{
      answer.classList.toggle("hidden");
      btn1.classList.toggle("opend");
}
  
function f_out2 ()
{
        right_div.classList.add("hidden");
        k = Number(n_question.value);
        k+=1;
        n_question.value = k;
        console.log(n_question)
        title.innerHTML=title_arr[n_question.value];
        question.innerHTML=question_arr[n_question.value];
        a1.innerHTML = a1_arr[n_question.value];
        a2.innerHTML = a2_arr[n_question.value]; /* innerHTML Это свойство предоставляет простой способ полностью заменить содержимое элемента */
        a3.innerHTML = a3_arr[n_question.value];
        a4.innerHTML = a4_arr[n_question.value]; 
        answer.innerHTML = answer_arr[n_question.value];
        
        n_right_answer = n_right_answer_arr[n_question.value];
}
    