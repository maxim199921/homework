export class TClockViewSVG {
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

            this.element.appendChild(document.createElement('br'));

            this.svgClock = document.createElementNS("http://www.w3.org/2000/svg", 'svg');
            this.svgClock.setAttribute('class', 'clock');
            this.svgClock.setAttribute('width', '200');
            this.svgClock.setAttribute('height', '200');
            this.element.appendChild(this.svgClock);

            this.backgroundCircle = document.createElementNS("http://www.w3.org/2000/svg",'circle');
            this.backgroundCircle.setAttribute('r', '100');
            this.backgroundCircle.setAttribute('cx', '100');
            this.backgroundCircle.setAttribute('cy', '100');
            this.backgroundCircle.setAttribute('fill', 'orange');
            this.svgClock.appendChild(this.backgroundCircle);

            for (let i = 12; i > 0; i--)  {
                this.newCirleNumber = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
                this.newCirleNumber.setAttribute('r', 12.5);
                this.newCirleNumber.setAttribute('cx',(100 - 80 * Math.sin(i * Math.PI / 6) +  'px'));
                this.newCirleNumber.setAttribute('cy', (100 - 80 * Math.cos(i * Math.PI / 6) + 'px'));
                this.newCirleNumber.setAttribute('fill', 'green');
                this.svgClock.appendChild(this.newCirleNumber);

                this.newNumber = document.createElementNS("http://www.w3.org/2000/svg", 'text');
                this.newNumber.textContent = i;
                this.newNumber.setAttribute('x',(95 + 80 * Math.sin(i * Math.PI / 6) +  'px'));
                this.newNumber.setAttribute('y',(105 - 80 * Math.cos(i * Math.PI / 6) + 'px'));
                this.svgClock.appendChild(this.newNumber);
            }

            for (let i = 1; i < 12; i++)  {
                this.newNumber = document.createElementNS("http://www.w3.org/2000/svg", 'text');
                this.newNumber.textContent = i;
                this.newNumber.setAttribute('x',(95 + 80 * Math.sin(i * Math.PI / 6) +  'px'));
                this.newNumber.setAttribute('y',(105 - 80 * Math.cos(i * Math.PI / 6) + 'px'));
                this.svgClock.appendChild(this.newNumber);
            }

            this.secondLine = document.createElementNS("http://www.w3.org/2000/svg", 'line');
            this.secondLine.setAttribute('class', 'clock-second');
            this.secondLine.setAttribute('x1', '100');
            this.secondLine.setAttribute('y1', '100');
            this.secondLine.setAttribute('x2', '100');
            this.secondLine.setAttribute('y2', '13');
            this.secondLine.setAttribute('stroke', 'black');
            this.secondLine.setAttribute('stroke-width', '2');
            this.secondLine.setAttribute('fill', 'black');
            this.svgClock.appendChild(this.secondLine);

            this.minutesLine = document.createElementNS("http://www.w3.org/2000/svg", 'line');
            this.minutesLine.setAttribute('class', 'clock-minutes');
            this.minutesLine.setAttribute('x1', '100');
            this.minutesLine.setAttribute('y1', '100');
            this.minutesLine.setAttribute('x2', '100');
            this.minutesLine.setAttribute('y2', '23');
            this.minutesLine.setAttribute('stroke', 'black');
            this.minutesLine.setAttribute('stroke-width', '5');
            this.minutesLine.setAttribute('fill', 'black');
            this.svgClock.appendChild(this.minutesLine);

            this.hourLine = document.createElementNS("http://www.w3.org/2000/svg", 'line');
            this.hourLine.setAttribute('class', 'clock-hour');
            this.hourLine.setAttribute('x1', '100');
            this.hourLine.setAttribute('y1', '100');
            this.hourLine.setAttribute('x2', '100');
            this.hourLine.setAttribute('y2', '50');
            this.hourLine.setAttribute('stroke', 'black');
            this.hourLine.setAttribute('stroke-width', '7');
            this.hourLine.setAttribute('fill', 'black');
            this.svgClock.appendChild(this.hourLine);

        }
        // и обновляет время по данным из модели\
        this.secondLine.style.transformOrigin = '100px 100px 0';
        this.secondLine.style.transform = `rotate(${model.date.getSeconds() * 6}deg)`;

        this.minutesLine.style.transformOrigin = '100px 100px 0';
        this.minutesLine.style.transform = `rotate(${model.date.getMinutes() * 6}deg)`;

        this.hourLine.style.transformOrigin = '100px 100px 0';
        this.hourLine.style.transform = `rotate(${(model.date.getHours() + +this.timezoneHash[timezone].UTC) * 30 }deg`;
    }

    setChangeHandler(handler) {
        this.checkedChangeHandler = handler;
    }


}




