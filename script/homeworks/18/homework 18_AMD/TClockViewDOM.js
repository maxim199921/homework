define(function() {
    class TClockViewDOM {
        constructor(root) {
            this.root = root;
            this.element = null;
            this.checkbox = null;
            this.checkedChangeHandler = null;
            this.timezoneHash = {
                minsk: {name: 'Минск', UTC: '+3'},
                newYork: {name: 'Нью - Йорк', UTC: '-5'},
                london: {name: 'Лондон', UTC: ' '},
                berlin: {name: 'Берлин', UTC: '+1'},
                tokyo: {name: 'Токио', UTC: '+9'},
                vladivostok: {name: 'Владивосток', UTC: '+10'},
            };
        }

        render(model, timezone) {
            // представление создает dom элементы в первый раз
            if (!this.element) {
                this.element = document.createElement('div');
                this.element.style.display = 'inline-block';
                this.root.appendChild(this.element);

                this.Stop = document.createElement('button');
                this.Stop.textContent = 'stop';
                this.Stop.addEventListener('click',
                    e => this.checkedChangeHandler(false));
                this.element.appendChild(this.Stop);

                this.Start = document.createElement('button');
                this.Start.textContent = 'start';
                this.Start.addEventListener('click',
                    e => this.checkedChangeHandler(true));
                this.element.appendChild(this.Start);

                this.timeUTC = document.createElement("span");
                this.element.style.marginRight = '200px';
                this.element.style.marginTop = '50px';
                this.timeUTC.textContent = `(${this.timezoneHash[timezone].name} GMT ${this.timezoneHash[timezone].UTC})`;
                this.element.appendChild(this.timeUTC);

                this.divWrapper = document.createElement('div');
                this.divWrapper.className = 'clock';
                this.divWrapper.style.backgroundColor = 'orange';
                this.divWrapper.style.position = 'relative';
                this.divWrapper.style.borderRadius = '50%';
                this.divWrapper.style.height = '200px';
                this.divWrapper.style.width = '200px';
                this.element.appendChild(this.divWrapper);

                for (let i = 1, deg = 30; i <= 12; i++, deg+=30) {
                    this.num = document.createElement('div');
                    this.span = document.createElement('span');
                    this.numInner = document.createElement('div');
                    this.num.className = "num";
                    this.num.style.position = 'absolute';
                    this.num.style.top = (200 - 25)/2+'px';
                    this.num.style.left = (200 - 25)/2+'px';
                    this.num.style.transformOrigin = '50% 50%';
                    this.num.style.borderRadius = '50%';
                    this.num.style.width = '25px';
                    this.num.style.height = '25px';
                    this.num.style.backgroundColor = 'green';
                    this.num.style.transform = 'rotate('+deg+'deg) translateY(-80px)';
                    this.divWrapper.appendChild(this.num);
                    this.num.appendChild(this.numInner);
                    this.span.innerText = i;
                    this.span.style.transform = 'rotate('+-deg+'deg)';
                    this.span.style.display = 'inline-block';
                    this.numInner.style.height = '100%';
                    this.numInner.style.display = 'flex';
                    this.numInner.style.flexDirection = 'column';
                    this.numInner.style.justifyContent = 'center';
                    this.numInner.style.textAlign = 'center';
                    this.numInner.appendChild(this.span);
                }

                this.secondLine = document.createElement('div');
                this.secondLine.className = 'clock-second';
                this.secondLine.style.position = 'absolute';
                this.secondLine.style.top = (200/2)-87+'px';
                this.secondLine.style.left = (200 - 2)/2+'px';
                this.secondLine.style.transformOrigin = 'bottom right';
                this.secondLine.style.width = '2px';
                this.secondLine.style.height = '87px';
                this.secondLine.style.backgroundColor = 'black';
                this.secondLine.style.borderRadius = '2.5px';
                this.secondLine.style.opacity = '0.8';
                this.divWrapper.appendChild(this.secondLine);

                this.divMinutes = document.createElement('div');
                this.divMinutes.className = 'clock-minutes';
                this.divMinutes.style.position = 'absolute';
                this.divMinutes.style.top = (200/2)-77+'px';
                this.divMinutes.style.left = (200 - 4)/2+'px';
                this.divMinutes.style.transformOrigin = 'bottom right';
                this.divMinutes.style.width = '5px';
                this.divMinutes.style.height = '77px';
                this.divMinutes.style.backgroundColor = 'black';
                this.divMinutes.style.borderRadius = '2.5px';
                this.divMinutes.style.opacity = '0.8';
                this.divWrapper.appendChild(this.divMinutes);

                this.divHour = document.createElement('div');
                this.divHour.className = 'clock-hour';
                this.divHour.style.position = 'absolute';
                this.divHour.style.top = (200/2)-50+'px';
                this.divHour.style.left = (200 - 6)/2+'px';
                this.divHour.style.transformOrigin = 'bottom right';
                this.divHour.style.width = '7px';
                this.divHour.style.height = '50px';
                this.divHour.style.backgroundColor = 'black';
                this.divHour.style.borderRadius = '2.5px';
                this.divHour.style.opacity = '0.8';
                this.divWrapper.appendChild(this.divHour)

            }
            // и обновляет время по данным из модели
            this.secondLine.style.transform = `rotate(${model.date.getSeconds() * 6}deg)`;
            this.divMinutes.style.transform = `rotate(${model.date.getMinutes() * 6}deg)`;
            this.divHour.style.transform = `rotate(${(model.date.getHours() + +this.timezoneHash[timezone].UTC) * 30 }deg`;
        }

        setChangeHandler(handler) {
            this.checkedChangeHandler = handler;
        }
    }
    return {View:TClockViewDOM};

});