import {TClock} from "./TClock.js";
import {TClockViewDOM} from "./TClockViewDOM.js";
import {TClockViewSVG} from "./TClockViewSVG.js";
import {TClockControllerButtons} from "./TClockControllerButtons.js";

class Router {
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
    '#minsk': {
        runController: rootElement => {
            new TClockControllerButtons(
                new TClock(),
                new TClockViewDOM(rootElement),
                'minsk');
        }
    },
    '#newYork': {
        runController: rootElement => {
            new TClockControllerButtons(
                new TClock(),
                new TClockViewDOM(rootElement),
                'newYork');
        }
    },
    '#london': {
        runController: rootElement => {
            new TClockControllerButtons(
                new TClock(),
                new TClockViewDOM(rootElement),
                'london');
        }
    },
    '#berlin': {
        runController: rootElement => {
            new TClockControllerButtons(
                new TClock(),
                new TClockViewSVG(rootElement),
                'berlin');
        }
    },
    '#tokyo': {
        runController: rootElement => {
            new TClockControllerButtons(
                new TClock(),
                new TClockViewSVG(rootElement),
                'tokyo');
        }
    },
    '#vladivostok': {
        runController: rootElement => {
            new TClockControllerButtons(
                new TClock(),
                new TClockViewSVG(rootElement),
                'vladivostok');
        }
    },

}, document.body).navigateTo('#newYork');
