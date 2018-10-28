'use strict';

class TAJAXStorage {
    constructor() {
        this.ajaxHandlerScript="http://fe.it-academy.by/AjaxStringStorage2.php";
        this.stringName='MAXIMCHUPILIN_DRINK_STORAGE';
        this.messages = {};
    }

    getAllTAJAXStorage() {
        $.ajax( {
                url : this.ajaxHandlerScript,
                type : 'POST', dataType:'json',
                data : { f : 'READ', n : this.stringName },
                cache : false,
                success : (callresult) => alert(JSON.stringify(callresult)),
                error : this.errorHandler
            }
        );
    }

    getTAJAXStorage(name) {
        $.ajax( {
                url : this.ajaxHandlerScript,
                type : 'POST', dataType:'json',
                data : { f : 'READ', n : this.stringName },
                cache : false,
                success : (callresult) => this.readReady(callresult, name),
                error : this.errorHandler
            }
        );
    }

    readReady(callresult,name) { // сообщения получены - показывает
        if ( callresult.error !== undefined )
            alert(callresult.error);
        else {
            if ( callresult.result !== "" ) { // либо строка пустая - сообщений нет
                // либо в строке - JSON-представление массива сообщений
                this.messages = JSON.parse(callresult.result);
            }
            if (name in this.messages) {
                alert(`ajax вернул - ${ JSON.stringify(this.messages[name]) }`);
            } else {
                alert('Такого напитка нет');
            }
        }
    }

    sendMessage(name, alc, recipe) {
        this.updatePassword = Math.random();
        $.ajax(
            {
                url : this.ajaxHandlerScript,
                type : 'POST', dataType:'json',
                data : { f : 'LOCKGET', n : this.stringName,
                    p : this.updatePassword },
                cache : false,
                success : (a) => this.lockGetReady(a, (name, alc, recipe) => {
                    this.messages[name] = {"Алкогольный": alc, "Рецепт приготовления": recipe};
                }, name, alc, recipe ),
                error : this.errorHandler
            }
        );
    }



    lockGetReady(callresult, func, name, alc, recipe) {
        if ( callresult.error !== undefined )
            alert(callresult.error);
        else {
            if ( callresult.result !== "" ) // либо строка пустая - сообщений нет
            {
                // либо в строке - JSON-представление массива сообщений
                this.messages = JSON.parse(callresult.result);
            }
            func(name, alc, recipe);
            $.ajax( {
                    url : this.ajaxHandlerScript,
                    type : 'POST', dataType:'json',
                    data : { f : 'UPDATE', n : this.stringName,
                        v : JSON.stringify(this.messages), p : this.updatePassword },
                    cache : false,
                    success : this.updateReady,
                    error : this.errorHandler
                }
            );
        }
    }

    updateReady(callresult) {
        if ( callresult.error !== undefined )
            alert(callresult.error);
    }

    errorHandler(jqXHR,statusStr,errorStr) {
        alert(statusStr+' '+errorStr);
    }

    deleteLockget(name) {
        this.updatePassword = Math.random();
        $.ajax(
            {
                url : this.ajaxHandlerScript,
                type : 'POST', dataType:'json',
                data : { f : 'LOCKGET', n : this.stringName,
                    p : this.updatePassword },
                cache : false,
                success : (a) => this.lockGetReady(a, (name) => {
                    if (name in this.messages) {
                        delete this.messages[name];
                    } else {
                        alert('Такого напитка нет');
                    };
                }, name),
                error : this.errorHandler
            }
        );
    }

    deleteDrink(callresult, name) {
        if (name in callresult) {
            delete callresult[name];
        } else {
            alert('Такого напитка нет');
        }
        /*this.lockGetReady(callresult, ((callresult, name) => {

        }) (callresult, name));*/
    }
}