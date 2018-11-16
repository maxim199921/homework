export class ContactsView {
    constructor(root) {
        this.root = root;
    }

    render() {
            this.root.innerHTML = `
                <header class="mdl-layout__header mdl-layout__header--transparent">
                    <div class="mdl-layout__header-row">
                        <!-- Title -->
                        <span class="mdl-layout-title mdl-layout-title-text">My works</span>
                        <!-- Add spacer, to align navigation to the right -->
                        <div class="mdl-layout-spacer"></div>
                        <!-- Navigation -->
                        <nav class="mdl-navigation">
                            <a id="me" class="mdl-navigation__link mdl-navigation__text" href="">Me</a>
                            <a id="skills" class="mdl-navigation__link mdl-navigation__text" href="">Skills</a>
                            <a id="contacts" class="mdl-navigation__link mdl-navigation__text" href="">Contacts</a>
                        </nav>
                    </div>
                </header>
                <div class="mdl-layout__drawer">
                    <span class="mdl-layout-title">My works</span>
                    <nav class="mdl-navigation">
                         <a class="mdl-navigation__link" href="http://limitless-eyrie-17966.herokuapp.com/">
                            <b class="mdl-navigation__link__text">Online Chat(SPA)</b>
                        </a>
                        <a class="mdl-navigation__link" href="https://github.com/maxim199921/JS-FD2-project">
                            <b class="mdl-navigation__link__text">Online Chat(Github)</b>
                        </a>
                        <a class="mdl-navigation__link" href="https://github.com/maxim199921/mishka">
                            <b class="mdl-navigation__link__text">Mishka(layout)</b>
                        </a>
                        <a class="mdl-navigation__link" href="https://github.com/maxim199921/homework/tree/master/script/homeworks/17/clockMVC">
                            <b class="mdl-navigation__link__text">Clock JS</b>
                        </a>
                        <a class="mdl-navigation__link" href="https://github.com/maxim199921/homework/tree/master/script/homeworks/16/Game%20Pinpong">
                            <b class="mdl-navigation__link__text">Pin Pong Game JS</b>
                        </a>
                        <a class="mdl-navigation__link" href="https://github.com/maxim199921/device">
                            <b class="mdl-navigation__link__text">Device(layout)</b>
                        </a>
                        <a class="mdl-navigation__link" href="https://github.com/maxim199921/barbershop">
                            <b class="mdl-navigation__link__text">Barbershop(layout)</b>
                        </a>
                    </nav>
                </div>
                <main class="mdl-layout__content main-contacts">
                    <div class="mdl-grid mdl-grid--no-spacing">
                        <div class="mdl-cell mdl-cell--12-col">
                            <h1 class="mdl-grid__texth1">MY CONTACTS</h1>
                        </div>
                    </div>
                    <div class="mdl-grid mdl-grid--no-spacing main-contacts__content">
                        <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                            <div class="mdl-grid mdl-grid--no-spacing">
                                <div class="mdl-cell mdl-cell--8-col main-contacts__popap">
                                    <section class="main-contacts__iframe-foto">
                                        <div id="modal-show" class="main-contacts__iframe-foto__wrapper">
                                            <img src="img/iframefoto-mini.png" width="100%" height="100%">
                                        </div>
                                    </section>
                                    <section id="modal-map" class="modal modal-map">
                                        <h2 class="visually-hidden">Как до нас добраться</h2>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37646.05244619612!2d27.428559021539943!3d53.862812378106796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbda6644459535%3A0xf7d8fce9d87b8ed6!2z0YPQuy4g0KHQu9C-0LHQvtC00YHQutCw0Y8gMywg0JzQuNC90YHQug!5e0!3m2!1sru!2sby!4v1541806841732" width="100%" height="550" frameborder="0" style="border:0" allowfullscreen></iframe>
                                        <button class="modal-close" type="button">закрыть</button>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                            <div class="mdl-grid mdl-grid--no-spacing">
                                <div class="mdl-cell mdl-cell--1-col"></div>
                                <div class="mdl-cell mdl-cell--8-col">
                                    <p class="main-contacts__info"><span class="main-contacts__info-item">Country:</span> Belarus</p>
                                    <p class="main-contacts__info"><span class="main-contacts__info-item">City:</span> Minsk</p>
                                    <p class="main-contacts__info"><span class="main-contacts__info-item">Address:</span> Slobodskaya Street 3</p>
                                    <p class="main-contacts__info"><span class="main-contacts__info-item">E-mail:</span> maxim199921@rambler.ru</p>
                                    <p class="main-contacts__info"><span class="main-contacts__info-item">Phone:</span> +375-25-781-82-55(life)</p>
                                    <p class="main-contacts__info"><span class="main-contacts__info-item">GitHub:</span> <a class="main-contacts__info__hr" href="https://github.com/maxim199921">https://github.com/maxim199921</a></p>
                                </div>
                                <div class="mdl-cell mdl-cell--3-col"></div>
                            </div>
                        </div>
                    </div>                 
                </main>
                <footer class="page-footer">
                    <div class="page-footer__wrapper">
                        <a class="page-footer__logo" href="index.html"></a>
                        <ul class="page-footer__social">
                            <li class="page-footer__item">
                                <a class="page-footer__link page-footer__link--instagram" href="https://www.instagram.com"><span class="visually-hidden">Мы в Инстаграме</span></a>
                            </li>
                            <li class="page-footer__item">
                                <a class="page-footer__link page-footer__link--facebook" href="https://www.facebook.com"><span class="visually-hidden">Мы в Фейсбуке</span></a>
                            </li>
                            <li class="page-footer__item">
                                <a class="page-footer__link page-footer__link--twitter" href="https://vk.com"><span class="visually-hidden">Мы в Твитере</span></a>
                            </li>
                        </ul>
                        <div class="page-footer__text">Developed by: M.C.Chupilin</div>
                    </div>
                </footer>
             `;
        componentHandler.downgradeElements(document.querySelector(".mdl-layout"));
        componentHandler.upgradeDom();
    }

    mapPopapShow() {
        document.getElementById('modal-map').classList.add('modal-map__show');
    }

    mapPopapClose() {
        document.getElementById('modal-map').classList.remove('modal-map__show');
    }

    changeHashMe(url) {
        location.hash = url;
    }

    changeHashSkills(url) {
        location.hash = url;
    }

    changeHashContacts(url) {
        location.hash = url;
    }
}