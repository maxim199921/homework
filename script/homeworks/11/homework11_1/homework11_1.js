const form = document.forms["testForm"];

document.getElementById("good").addEventListener('click', sendForm);

function deleteError(container) {
    if (container.lastChild.className === "error-message") {
        container.removeChild(container.lastChild);
    }
}

function sendForm() {

    deleteError(form.url.parentNode);
    deleteError(form.title.parentNode);
    deleteError(form.startdate.parentNode);
    deleteError(form.persons.parentNode);
    deleteError(form.mail.parentNode);
    deleteError(form.rubric.parentNode);
    deleteError(form.author.parentNode);
    deleteError(form.article.parentNode);


    if (form.article.value.length === 0) {
        let element = document.createElement('span');
        element.innerHTML = `<br> нет текста`;
        element.className = "error-message";
        form.article.parentNode.appendChild(element);
        form.article.focus();
    }

    if (form.rubric.value.length === 0) {
        let element = document.createElement('span');
        element.innerHTML = "Введите корректно";
        element.className = "error-message";
        form.rubric.parentNode.appendChild(element);
        form.rubric.focus();
    }

    if (form.mail.value.length === 0) {
        let element = document.createElement('span');
        element.innerHTML = "Введите корректно";
        element.className = "error-message";
        form.mail.parentNode.appendChild(element);
        form.mail.focus();
    }

    if (form.persons.value.length === 0) {
        let element = document.createElement('span');
        element.innerHTML = "Введите корректно";
        element.className = "error-message";
        form.persons.parentNode.appendChild(element);
        form.persons.focus();
    }

    if (form.startdate.value.length === 0) {
        let element = document.createElement('span');
        element.innerHTML = "Введите корректно";
        element.className = "error-message";
        form.startdate.parentNode.appendChild(element);
        form.startdate.focus();
    }

    if (form.url.value.length === 0) {
        let element = document.createElement('span');
        element.innerHTML = "Введите корректно";
        element.className = "error-message";
        form.url.parentNode.appendChild(element);
        form.url.focus();
    }

    if (form.title.value.length === 0) {
        let element = document.createElement('span');
        element.innerHTML = "Введите корректно";
        element.className = "error-message";
        form.title.parentNode.appendChild(element);
        form.title.focus();
    }

    if (form.author.value.length === 0) {
        let element = document.createElement('span');
        element.innerHTML = "Введите корректно";
        element.className = "error-message";
        form.author.parentNode.appendChild(element);
        form.author.focus();
    }


    if (form.author.value.length !== 0
        && form.title.value.length !== 0
        && form.url.value.length !== 0
        && form.startdate.value.length !== 0
        && form.persons.value.length !== 0
        && form.mail.value.length !== 0
        && form.rubric.value.length !== 0
        && form.article.value.length !== 0) {
        form.submit();
    }
    // switch (form) {
    //
    //     case form.article.value.length === 0 :
    //         let element1 = document.createElement('span');
    //         element1.innerHTML = `<br> нет текста`;
    //         form.article.parentNode.appendChild(element1);
    //         form.article.focus();
    //         break;
    //
    //     case form.rubric.value.length === 0 :
    //         let element2 = document.createElement('span');
    //         element2.innerHTML = "Введите корректно";
    //         form.rubric.parentNode.appendChild(element2);
    //         form.rubric.focus();
    //         break;
    //
    //     case form.mail.value.length === 0 :
    //         let element3 = document.createElement('span');
    //         element3.innerHTML = "Введите корректно";
    //         form.mail.parentNode.appendChild(element3);
    //         form.mail.focus();
    //         break;
    //
    //     case form.persons.value.length === 0 :
    //         let element4 = document.createElement('span');
    //         element4.innerHTML = "Введите корректно";
    //         form.persons.parentNode.appendChild(element4);
    //         form.persons.focus();
    //         break;
    //
    //     case form.startdate.value.length === 0 :
    //         let element5 = document.createElement('span');
    //         element5.innerHTML = "Введите корректно";
    //         form.startdate.parentNode.appendChild(element5);
    //         form.startdate.focus();
    //         break;
    //
    //     case form.url.value.length === 0 :
    //         let element6 = document.createElement('span');
    //         element6.innerHTML = "Введите корректно";
    //         form.url.parentNode.appendChild(element6);
    //         form.url.focus();
    //         break;
    //
    //     case form.title.value.length === 0 :
    //         let element7 = document.createElement('span');
    //         element7.innerHTML = "Введите корректно";
    //         form.title.parentNode.appendChild(element7);
    //         form.title.focus();
    //         break;
    //
    //     case form.author.value.length === 0 :
    //         let element8 = document.createElement('span');
    //         element8.innerHTML = "Введите корректно";
    //         form.author.parentNode.appendChild(element8);
    //         form.author.focus();
    //         break;
    //
    //     default: alert("error");
    // }
}

