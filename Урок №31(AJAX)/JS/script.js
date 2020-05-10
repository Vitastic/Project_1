
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () =>  {
    let request = new XMLHttpRequest();
     
    //request.open(method, url, async, login, pass);
    request.open('GET','js/current.json');
    request.setRequestHeader('Contet-type', 'application/json; charset=utf-8');
    request.send();

    //status
    //statusText
    //responseText / response
    //readyState

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status ==200) {
            let data = JSON.parse(request.response); // Получаем и преобразовываем данные
            
           

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так!!!";
        }
    });

});