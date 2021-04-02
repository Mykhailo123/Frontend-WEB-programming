fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')    /* fetch - запрос на сервер на получение данных */
                                                                                /* json() - текстовый формат обмена данными, основанный на JavaScript - как объект с данными своеобразный (с массивами данных в том числе) */
    .then(response => response.json()) 
    .then(function(comm)
    {
        console.log(comm);
        console.log(comm[0]);
        console.log(comm[0].ccy);
        console.log(comm[0].buy);
        cur1.innerHTML =comm[0].ccy + " / "+ "UAN";
        cur1buy.innerHTML =comm[0].buy ;
        cur1sale.innerHTML =comm[0].sale ;
        cur2.innerHTML =comm[1].ccy + " / "+ "UAN";
        cur2buy.innerHTML =comm[1].buy ;
        cur2sale.innerHTML =comm[1].sale ;
        cur3.innerHTML =comm[2].ccy + " / "+ "UAN";
        cur3buy.innerHTML =comm[2].buy ;
        cur3sale.innerHTML =comm[2].sale ;
        cur4.innerHTML =comm[3].ccy + " / "+ "UAN";
        cur4buy.innerHTML =comm[3].buy ;
        cur4sale.innerHTML =comm[3].sale ;   /* buy и sale - это прям с привата потсягивает значения из их json-на */
    }
        
        );


/*
Параметры ответа:  (описание с сайта Привата)

Название	                            Описание

ccy	                                    Код валюты (справочник кодов валют: https://ru.wikipedia.org/wiki/Коды_валют)
base_ccy	                            Код национальной валюты
buy	                                    Курс покупки
sale	                                Курс продажи

*/