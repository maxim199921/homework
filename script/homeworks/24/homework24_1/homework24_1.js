const form = document.forms["testForm"];
form.addEventListener('submit', sendForm);           // - повесил событе не на кнопку а на форму, через submit.

// document.getElementById("good").addEventListener('click', sendForm);

function deleteError(container) {
    if (container.lastChild.className === "error-message") {
        container.removeChild(container.lastChild);
    }
}

function error(item, errorMessage) {                  // - вынес в отдельную функцию ошибку
    let element = document.createElement('span');
    element.innerHTML = errorMessage;
    element.className = "error-message";
    item.parentNode.appendChild(element);
    item.focus();
}

function sendForm(e) {
    e.preventDefault();                                // - отменил действие отправки формы по умолчанию

    let mailValid = /^\S+\@\S+\.\S+$/;
    let urlValid=/^(http:[/][/])|(https:[/][/])(\S+\@?\S+\.+\S+)$/;

    deleteError(form.url.parentNode);
    deleteError(form.title.parentNode);
    deleteError(form.startdate.parentNode);
    deleteError(form.persons.parentNode);
    deleteError(form.mail.parentNode);
    deleteError(form.rubric.parentNode);
    deleteError(form.author.parentNode);
    deleteError(form.article.parentNode);
    deleteError(form.comments.parentNode);


    if (form.article.value.length === 0) {
        error(form.article, `<br> нет текста`);
    }

    if (form.comments.checked === false) {
        error(form.comments, `необходимо ваше разрешение!!!`);
    }

    if (form.rubric.value.length === 0) {
        error(form.rubric, `введите данные!!!`);
    }

    if (!mailValid.test(form.mail.value)) {
        error(form.mail, `введите данные корректно обязательно должна содержатся в @ и после неё .(точка)!!!`);
    }

    if (form.persons.value.length === 0) {
        error(form.persons, `введите данные!!!`);
    }

    if (form.startdate.value.length === 0) {
        error(form.startdate, `введите данные!!!`);
    }

    if (!urlValid.test(form.url.value)) {
        error(form.url, `введите данные корректный реальный имейл в формате http:,https:!!!`);
    }

    if (form.title.value.length === 0) {
        error(form.title, `введите данные!!!`);
    }

    if (form.author.value.length === 0) {
        error(form.author, `введите данные!!!`);
    }


    if (form.author.value.length !== 0
        && form.title.value.length !== 0
        && urlValid.test(form.url.value)
        && form.startdate.value.length !== 0
        && form.persons.value.length !== 0
        && mailValid.test(form.mail.value)
        && form.rubric.value.length !== 0
        && form.comments.checked === true
        && form.article.value.length !== 0) {
        let urlName = form.url.value.replace(/http:[/][/]|https:[/][/]/g, "www.");
        getTrueEmail(urlName);
    }
}

function getTrueEmail(url) {
    $.ajax({
            url: 'http://fe.it-academy.by/TestAjax3.php' ,
            type: 'GET',
            data:{func:'GET_DOMAIN_IP',domain:url},
            cache: false,
            success: callresult => {
                console.log(callresult);
                if(callresult.length === 0||callresult === '104.239.213.7'){
                    error(form.url, `молодой человек вы ввели не существующий domen не обманывайте, введите существующий, http://tut.by или https://vk.com!!!`);
                }
                if(callresult.length !== 0&&callresult !== '104.239.213.7'){
                    alert(`Домен корректный вы не обманьщик`);
                    form.submit();
                }
            },
            error: errorHandler => {console.log(errorHandler)}
        }
    );
}

