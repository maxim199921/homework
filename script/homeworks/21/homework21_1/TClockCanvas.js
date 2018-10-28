class TClockViewCANVAS {
    constructor(root) {
        this.root = root;
        this.hour = null;
        this.min = null;
        this.sec = null;
        this.context = null;
        this.startedChangeHandler = null;
        this.timezoneHash = {
            Minsk: {name: 'Минск', UTC: '+3'},
            NewYork: {name: 'Нью - Йорк', UTC: '-5'},
            London: {name: 'Лондон', UTC: ' '},
            Berlin: {name: 'Берлин', UTC: '+1'},
            Tokyo: {name: 'Токио', UTC: '+9'},
            Vladivostok: {name: 'Владивосток', UTC: '+10'},
        };
    }

    static clock(element, hour, min, sec, date) {
        element.fillStyle = 'orange';
        element.beginPath();
        element.arc(100,100,100,0,Math.PI*2);
        element.fill();

        for (let i = 1, deg = 30; i <= 12; i++, deg += 30) {
            element.fillStyle = 'green';
            element.beginPath();
            element.arc(100+80*Math.sin(deg * Math.PI/180),100-80*Math.cos(deg * Math.PI/180),12.5,0,Math.PI*2);
            element.fill();

            element.fillStyle = 'black';
            element.font = '16px Times';
            element.fillText(i,95+80*Math.sin(deg * Math.PI/180),105-80*Math.cos(deg * Math.PI/180))
        }

        element.strokeStyle = hour.color;
        element.lineWidth = hour.width;
        element.lineCap = 'round';
        element.beginPath();
        element.moveTo(100,100);
        element.lineTo(100+hour.height*Math.sin((30*(10+date.getHours()%12) + date.getMinutes()/2) * Math.PI/180),100-hour.height*Math.cos((30*(10+date.getHours()%12) + date.getMinutes()/2) * Math.PI/180));
        element.stroke();

        element.strokeStyle = min.color;
        element.lineWidth = min.width;
        element.lineCap = 'round';
        element.beginPath();
        element.moveTo(100,100);
        element.lineTo(100+min.height*Math.sin((6*date.getMinutes()) * Math.PI/180),100-min.height*Math.cos((6*date.getMinutes()) * Math.PI/180));
        element.stroke();

        element.strokeStyle = sec.color;
        element.lineWidth = sec.width;
        element.lineCap = 'round';
        element.beginPath();
        element.moveTo(100,100);
        element.lineTo(100+sec.height*Math.sin((6*date.getSeconds()) * Math.PI/180),100-sec.height*Math.cos((6*date.getSeconds()) * Math.PI/180));
        element.stroke();
    }

    render(model, timezone) {
        // представление создает dom элементы в первый раз
        if (!this.canvas) {
            this.divOuter = document.createElement('div');

            this.timeUTC = document.createElement("span");
            this.divOuter.style.marginRight = '200px';
            this.divOuter.style.marginTop = '50px';
            this.timeUTC.textContent = `(${this.timezoneHash[timezone].name} GMT ${this.timezoneHash[timezone].UTC})`;
            this.divOuter.appendChild(this.timeUTC);

            this.divInner = document.createElement('div');
            this.divOuter.style.display = 'inline-block';
            this.divInner.style.display = 'inline-block';
            this.start = document.createElement('input');
            this.stop = document.createElement('input');
            this.start.type = this.stop.type = 'button';
            this.start.value = 'старт';
            this.stop.value = 'стоп';
            this.start.addEventListener('click',
                e => this.startedChangeHandler(true));
            this.stop.addEventListener('click',
                e => this.startedChangeHandler(false));
            this.canvas = document.createElement('canvas');
            this.canvas.width = 200;
            this.canvas.height = 200;
            this.canvas.style.display = 'block';
            this.root.appendChild(this.divOuter);
            this.divOuter.appendChild(this.divInner);
            this.divInner.appendChild(this.stop);
            this.divInner.appendChild(this.start);
            this.divOuter.appendChild(this.canvas);
            this.context = this.canvas.getContext('2d');

            this.hour = {
                color: 'rgba(0,0,0,1)',
                width: 7,
                height: 50
            };
            this.min = {
                color: 'rgba(0,0,0,1)',
                width: 5,
                height: 77
            };
            this.sec = {
                color: 'rgba(0,0,0,1)',
                width: 2,
                height: 87
            };
        }
        // и обновляет время по данным из модели
        TClockViewCANVAS.clock(this.context, this.hour, this.min, this.sec, model.date);
    }

    setChangeHandler(handler) {
        this.startedChangeHandler = handler;
    }
}