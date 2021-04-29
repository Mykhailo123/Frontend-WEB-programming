<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json; charset=utf-8');

class query
{
    public $title_arr = [ "Know the Queen! 😀👑 Q 1/7","Know the Queen! 😀👑 Q 2/7","Know the Queen! 😀👑 Q 3/7","Know the Queen! 😀👑 Q 4/7","Know the Queen! 😀👑 Q 5/7", "Know the Queen! 😀👑 Q 6/7", "Know the Queen! 😀👑 Q 7/7" ];
    public $question_arr = ["When Beyoncé Giselle Knowles-Carter was born?","Who run the world? 🌍", "How many Grammys does the Queen B have?", "Who said these famous words: 'We shine the light on whatever's worst, perfection is a disease of a nation.'", "What is Beyonce's last song?", "What is the name of her last feat?", "How many children does Beyoncé have?" ];
    public $a1_arr = ["September 14, 1975", "Boys (No)", "28", "William Shakespeare", "BLACK PARADE", "Beyoncé - Flawless (Remix) ft. Nicki Minaj", "1" ];
    public $a2_arr = ["October 10, 1985", "Toys (No)", "79", "Bey", "APESHIT", "Beyoncé - Drunk in Love (Explicit) ft. JAY Z", "2" ];
    public $a3_arr = ["September 4, 1981", "Girls! (Yes)", "31", "Alla Pugachova", "BROWN SKIN GIRL", "Megan Thee Stallion - Savage Remix (feat. Beyoncé)", "3"  ];
    public $a4_arr = ["May 9, 1945", "Masons (Maybe)", "A lot!", "Some wise person", "***Flawless", "Beautiful Liar - Beyonce & Shakira", "4"  ];
    public $answer_arr = ["September 4, 1981", "Girls!", "sqrt(256) + 12", "Like, three guesses 'WHO?'", "BLACK PARADE", "'Savage' with Megan Thee Stallion 🐴", "Blue Ivy Carter, Rumi, and Sir"  ];  /* правильный ответ при нажатии на кнопку "показать ответ" */
    public $n_right_answer_arr = [3, 3, 1, 2, 1, 3, 3];  /*сюда данные моего квиза вставили, а из джавы удалили соответсвующие строки*/  /* Не забываем, что тут =, а не : */
}

$query1 = new query();
$query1->comment = "Hello";


echo(json_encode($query1));
?>