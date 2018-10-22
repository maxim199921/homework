define([
        "./TClock.js",
        "./TClockViewDOM.js",
        "./TClockViewSVG.js",
        "./TClockControllerButtons.js"],
    function(TClock, TClockViewDOM, TClockViewSVG, TClockControllerButtons) {
        'use strict';

        class RouterAMD {
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

        new RouterAMD({
            '#minsk': {
                runController: rootElement => {
                    new TClockControllerButtons.Controller(
                        new TClock.Model(),
                        new TClockViewDOM.View(rootElement),
                        'minsk');
                }
            },
            '#newYork': {
                runController: rootElement => {
                    new TClockControllerButtons.Controller(
                        new TClock.Model(),
                        new TClockViewDOM.View(rootElement),
                        'newYork');
                }
            },
            '#london': {
                runController: rootElement => {
                        new TClockControllerButtons.Controller(
                        new TClock.Model(),
                        new TClockViewSVG.View(rootElement),
                        'london');
                }
            },
            '#berlin': {
                runController: rootElement => {
                    new TClockControllerButtons.Controller(
                        new TClock.Model(),
                        new TClockViewSVG.View(rootElement),
                        'berlin');
                }
            },
            '#tokyo': {
                runController: rootElement => {
                    new TClockControllerButtons.Controller(
                        new TClock.Model(),
                        new TClockViewSVG.View(rootElement),
                        'tokyo');
                }
            },
            '#vladivostok': {
                runController: rootElement => {
                    new TClockControllerButtons.Controller(
                        new TClock.Model(),
                        new TClockViewSVG.View(rootElement),
                        'vladivostok');
                }
            },

        }, document.body).navigateTo('#newYork');

        return {Router:RouterAMD};
    });


