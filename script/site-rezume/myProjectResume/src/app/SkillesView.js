export class SkillesView {
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
                <main class="mdl-layout__content main-skills">
                    <div class="mdl-grid mdl-grid--no-spacing">
                        <div class="mdl-cell mdl-cell--12-col">
                            <h1 class="mdl-grid__texth1">MY SKILLS</h1>
                        </div>
                    </div>          
                    <div class="mdl-grid mdl-grid--no-spacing">
                      <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                        <h2 class="main-skills_text main-skills_text__ad">ADUCATION:</h2>
                      </div>
                      <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                        <div class="mdl-grid mdl-grid--no-spacing">
                            <div class="mdl-cell mdl-cell--5-col mdl-cell--8-col-tablet">
                                <h3 class="main-skills_text__h3">Courses:</h3>
                                <p class="main-skills__info__aducation">It-Academy(ПВТ - парк высоких технологий)</p>
                                <p class="main-skills__info__aducation">Courses website development and Front-end - development</p>
                                <p class="main-skills__info__aducation">Professional course Javascript Web Development.</p> 
                                <p class="main-skills__info__aducation">
                                    <a class="main-skills__сourse__program" href="https://www.it-academy.by/course/front-end-developer/">Course program</a>
                                </p>
                            </div>
                            <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
                                <h3 class="main-skills_text__h3">Institute:</h3>
                                <p class="main-skills__info__aducation">MGVRK(Minskiy Gosudarstvennyy Vysshiy Radiotekhnicheskiy Kolledzh)</p>
                                <p class="main-skills__info__aducation">Specialty: radio engineer-teacher</p>
                                <p class="main-skills__info__aducation">Study period: from 2008 to 2013</p>
                            </div>
                        </div>
                      </div>
                      <div class="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
                        <section class="main-skills__listskills">
                             <div class="mdl-grid mdl-grid--no-spacing">
                                  <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--2-col-phone">
                                    <p class="main-skills__info">English:</p>
                                    <p class="main-skills__info">Css:</p>
                                    <p class="main-skills__info">Javascript, jquery:</p>
                                    <p class="main-skills__info">Html:</p>
                                    <p class="main-skills__info">Photoshop:</p>
                                    <p class="main-skills__info">Material Design:</p>
                                    <p class="main-skills__info">Webpack, Gulp:</p>
                                    <p class="main-skills__info">Less, Sass, Git:</p>
                                  </div>
                                  <div class="mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--2-col-phone">
                                    <p class="main-skills__slider"><input class="mdl-slider mdl-js-slider" type="range" min="0" max="100" value="60" tabindex="0"></p>
                                    <p class="main-skills__slider"><input class="mdl-slider mdl-js-slider" type="range" min="0" max="100" value="75" tabindex="0"></p>
                                    <p class="main-skills__slider"><input class="mdl-slider mdl-js-slider" type="range" min="0" max="100" value="76" tabindex="0"></p>
                                    <p class="main-skills__slider"><input class="mdl-slider mdl-js-slider" type="range" min="0" max="100" value="75" tabindex="0"></p>
                                    <p class="main-skills__slider"><input class="mdl-slider mdl-js-slider" type="range" min="0" max="100" value="50" tabindex="0"></p>
                                    <p class="main-skills__slider"><input class="mdl-slider mdl-js-slider" type="range" min="0" max="100" value="55" tabindex="0"></p>
                                    <p class="main-skills__slider"><input class="mdl-slider mdl-js-slider" type="range" min="0" max="100" value="60" tabindex="0"></p>
                                    <p class="main-skills__slider"><input class="mdl-slider mdl-js-slider" type="range" min="0" max="100" value="70" tabindex="0"></p>
                                  </div>                        
                              </div>
                          </section>
                      </div>
                      <div class="mdl-cell mdl-cell--6-col">
                        <h2 class="main-skills_text main-skills_text-mg">:SKILLS</h2>
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