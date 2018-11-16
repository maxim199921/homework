import {MainController} from "./MainController";
import {MainModel} from "./MainModel";
import {MainView} from "./MainView";

import {SkillesController} from "./SkillesController";
import {SkillesModel} from "./SkillesModel";
import {SkillesView} from "./SkillesView";

import {ContactsController} from "./ContactsController";
import {ContactsModel} from "./ContactsModel";
import {ContactsView} from "./ContactsView";

export class Router {
    constructor(map, rootElement) {
        this.map = map;
        this.rootElement = rootElement;
        // Подписаться на событие hashchange
        window.addEventListener('hashchange', this.onhashchange.bind(this));
    }

    onhashchange(e) {
        const activeHash = document.location.hash;
        // Отрисовать страницу для нового адреса
        this._route(activeHash);
    }

    _route(route) {
        const settings = this.map[route];
        if (settings) {
            this.rootElement.innerHTML = '';
            // запустить контроллер страницы,
            // которая соответствует адресу,
            // на который нужно перейти
            settings.runController(this.rootElement);
        }
    }

    navigateTo(route) {
        // Выполнить начальную навигацию на адрес по умолчанию
        if (document.location.hash === route && this.loaded) return;
        this._route(route);
        document.location.hash = route;
        this.loaded = true;
    }
}

new Router({
    '#main': {
        runController: rootElement => {
            new MainController(
                new MainModel(),
                new MainView(rootElement),
            );
        }
    },
    '#skills': {
        runController: (rootElement) => {
            new SkillesController(
                new SkillesModel(),
                new SkillesView(rootElement),
            );
        }
    },
    '#contacts': {
        runController: (rootElement) => {
            new ContactsController(
                new ContactsModel(),
                new ContactsView(rootElement),
            );
        }
    },

},document.getElementById('divMain')).navigateTo('#main');
