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

    if (form.mail.value.length === 0) {
        error(form.mail, `введите данные!!!`);
    }

    if (form.persons.value.length === 0) {
        error(form.persons, `введите данные!!!`);
    }

    if (form.startdate.value.length === 0) {
        error(form.startdate, `введите данные!!!`);
    }

    if (form.url.value.length === 0) {
        error(form.url, `введите данные!!!`);
    }

    if (form.title.value.length === 0) {
        error(form.title, `введите данные!!!`);
    }

    if (form.author.value.length === 0) {
        error(form.author, `введите данные!!!`);
    }


    if (form.author.value.length !== 0
        && form.title.value.length !== 0
        && form.url.value.length !== 0
        && form.startdate.value.length !== 0
        && form.persons.value.length !== 0
        && form.mail.value.length !== 0
        && form.rubric.value.length !== 0
        && form.comments.checked === true
        && form.article.value.length !== 0) {
        form.submit();
    }
}

