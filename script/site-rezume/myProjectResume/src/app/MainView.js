export class MainView {
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
                <main id="mainContent" class="mdl-layout__content">
                    <div class="mdl-grid mdl-grid--no-spacing">
                        <div class="mdl-cell mdl-cell--12-col">
                            <h1 class="mdl-grid__texth1">ABOUT ME</h1>
                        </div>
                    </div>
                    <div class="mdl-grid main-me">
                        <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet">
                            <section class="main-me__slider-foto">
                                <div id="slider-foto" class="main-me__slider-foto__wrapper">
                                    <img id="myFoto" src="img/myFoto2.JPG" width="100%" height="100%">
                                    <img id="myFoto1" src="img/myFoto3.JPG" width="100%" height="100%" hidden>
                                    <img id="myFoto2" src="img/myFoto1.JPG" width="100%" height="100%" hidden>
                                </div>
                                <div id="slide-toggle" class="main-me__slider-foto-togle">
                                    <label class="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" for="list-option-1">
                                        <input type="radio" id="list-option-1" class="mdl-radio__button" name="options" value="1" checked />
                                    </label>
                                    <label class="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" for="list-option-2">
                                        <input type="radio" id="list-option-2" class="mdl-radio__button" name="options" value="1"/>
                                    </label>
                                    <label class="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" for="list-option-3">
                                        <input type="radio" id="list-option-3" class="mdl-radio__button" name="options" value="1"/>
                                    </label>
                                </div>
                            </section>
                        </div>
                        <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet">
                            <section class="main-me__info">
                                <div class="mdl-grid mdl-grid--no-spacing">
                                    <div class="mdl-cell mdl-cell--12-col">
                                        <table class="mdl-data-table">
                                            <tbody>
                                            <tr>
                                                <td class="mdl-data-table__cell--non-numeric mdl-js-data-table-item">Full name:</td>
                                                <td class="mdl-data-table__cell--non-numeric">Chupilin Maxim Sergeyevich</td>
                                            </tr>
                                            <tr>
                                                <td class="mdl-data-table__cell--non-numeric mdl-js-data-table__item">Age:</td>
                                                <td class="mdl-data-table__cell--non-numeric">26 years old</td>
                                            </tr>
                                            <tr>
                                                <td class="mdl-data-table__cell--non-numeric mdl-js-data-table__item">Marital status:</td>
                                                <td class="mdl-data-table__cell--non-numeric">married</td>
                                            </tr>
                                            <tr>
                                                <td class="mdl-data-table__cell--non-numeric mdl-js-data-table__item">Сity:</td>
                                                <td class="mdl-data-table__cell--non-numeric">Minsk</td>
                                            </tr>
                                            <tr>
                                                <td class="mdl-data-table__cell--non-numeric mdl-js-data-table__item">Education:</td>
                                                <td class="mdl-data-table__cell--non-numeric">higher education</td>
                                            </tr>
                                            <tr>
                                                <td class="mdl-data-table__cell--non-numeric mdl-js-data-table__item">My qualities:</td>
                                                <td class="mdl-data-table__cell--non-numeric">fast learner, honesty, initiative, stress resistance</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
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
    switchFoto() {
        $('#list-option-1').click((evt)=>{
            $('#myFoto1').attr('hidden', '');
            $('#myFoto2').attr('hidden', '');
            $('#myFoto').removeAttr('hidden');
            this.sliderfoto = $('#slider-foto');
            this.sliderfoto.css('margin-left', '38%');
            this.sliderfoto.css('margin-right', '24%');
        });
        $('#list-option-2').click((evt)=>{
            $('#myFoto').attr('hidden', '');
            $('#myFoto2').attr('hidden', '');
            $('#myFoto1').removeAttr('hidden');
            this.sliderfoto = $('#slider-foto');
            this.sliderfoto.css('margin-left', '15%');
            this.sliderfoto.css('margin-right', '5%');
        });
        $('#list-option-3').click((evt)=>{
            $('#myFoto1').attr('hidden', '');
            $('#myFoto').attr('hidden', '');
            $('#myFoto2').removeAttr('hidden');
            this.sliderfoto = $('#slider-foto');
            this.sliderfoto.css('margin-left', '38%');
            this.sliderfoto.css('margin-right', '24%');
        });
        this.sliderfoto = $('#myFoto, #myFoto1, #myFoto2');
        this.sliderfoto.mouseenter((evt)=>{
            this.sliderfoto = $('#myFoto, #myFoto1, #myFoto2');
            this.sliderfoto.animate( {
                height: '135%',
                width: '135%',
                left: '-20%',
                top: '-20%',
            } ,500)
        });
        this.sliderfoto.mouseleave((evt)=>{
            this.sliderfoto = $('#myFoto, #myFoto1, #myFoto2');
            this.sliderfoto.animate( {
                height: '100%',
                width: '100%',
                left: '0',
                top: '0'
            } ,500)
        });
        // $('#list-option-1').click((evt)=>{
        //     $('#myFoto').attr('src', 'img/myFoto2.JPG');
        //     this.sliderfoto = $('#slider-foto');
        //     this.sliderfoto.css('margin-left', '38%');
        //     this.sliderfoto.css('margin-right', '24%');
        // });
        // $('#list-option-2').click((evt)=>{
        //     $('#myFoto').attr('src', 'img/myFoto3.JPG');
        //     this.sliderfoto = $('#slider-foto');
        //     this.sliderfoto.css('margin-left', '15%');
        //     this.sliderfoto.css('margin-right', '5%');
        // });
        // $('#list-option-3').click((evt)=>{
        //     $('#myFoto').attr('src', 'img/myFoto1.JPG');
        //     this.sliderfoto = $('#slider-foto');
        //     this.sliderfoto.css('margin-left', '38%');
        //     this.sliderfoto.css('margin-right', '24%');
        // });
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