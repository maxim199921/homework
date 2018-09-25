'use strict';

function generateForm(form, value) {
    const newForm = document.createElement(form);
    newForm.method = 'post';
    newForm.action="http://fe.it-academy.by/TestForm.php ";
    let script = document.getElementById("script");
    document.body.insertBefore(newForm, script);
    let counter = 0;

    value.forEach(item => {
        let label = item['label'];
        let kind = item['kind'];
        let name = item['name'];
        let inputChange = 'input';

        if (kind === 'longtext'){
            kind = 'text';
        }
        if (kind === 'check'){
            kind = 'checkbox';
        }
        if (kind === 'radio'){
            inputChange = 'span';
        }
        if (kind === 'memo'){
            inputChange = 'textarea';
        }
        if (kind === 'combo'){
            inputChange = 'select';
        }

        newForm.innerHTML += `<br><label></label>${label}<${inputChange} id = "${counter++}" type="${kind}" name="${name}">`;
    });

    value.forEach( el => {
        let variants = el['variants'];
        for (let key in variants) {
            let getEl = variants[key];
            for (let keys in getEl) {
                let text = getEl["text"];
                let value = getEl['value'];
                let select = document.getElementById('4');
                const newOption= document.createElement("option");
                const optionText = document.createTextNode(`${text}`);
                newOption.value = `${value}`;
                select.appendChild(newOption);
                newOption.appendChild(optionText);
                // select.innerHTML += `<option value="${value}">${text}</option>`;
                let radio = document.getElementById('5');
                const newInput= document.createElement("input");
                const inputText = document.createTextNode(`${text}`);
                newInput.type = "radio";
                newInput.name = "payment";
                newOption.value = `${value}`;
                radio.appendChild(newInput);
                radio.appendChild(inputText);
                // radio.innerHTML += `<input type="radio" name="contact" value="${value}">${text}`;
                break;
            }
        }
    });
}


let formDef1=
    [
        {label:'Название сайта:',kind:'longtext',name:'sitename'},
        {label:'URL сайта:',kind:'longtext',name:'siteurl'},
        {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
        {label:'E-mail для связи:',kind:'shorttext',name:'email'},
        {label:'Рубрика каталога:',kind:'combo',name:'division',
        variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
        {label:'Размещение:',kind:'radio',name:'payment',
            variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
        {label:'Разрешить отзывы:',kind:'check',name:'votes'},
        {label:'Описание сайта:',kind:'memo',name:'description'},
        {label:'Опубликовать:',kind:'submit'}
    ];

let formDef2=
    [
        {label:'Фамилия:',kind:'longtext',name:'lastname'},
        {label:'Имя:',kind:'longtext',name:'firstname'},
        {label:'Отчество:',kind:'longtext',name:'secondname'},
        {label:'Возраст:',kind:'number',name:'age'},
        {label:'Зарегистрироваться:',kind:'submit'}
    ];


generateForm('form',  formDef1);
generateForm('form',  formDef2);



function correct() {

    let select = document.getElementById('4');
    select.removeChild(select.lastChild);
    select.removeChild(select.lastChild);
    select.removeChild(select.lastChild);

    let radio = document.getElementById('5');
    radio.removeChild(radio.firstChild);
    radio.removeChild(radio.firstChild);
    radio.removeChild(radio.firstChild);
    radio.removeChild(radio.firstChild);
    radio.removeChild(radio.firstChild);
    radio.removeChild(radio.firstChild);


    document.getElementById('5').firstChild.checked = 'checked'; /*- можно true*/
    document.getElementById('6').checked = 'checked'; /*- можно true*/
}
correct();



