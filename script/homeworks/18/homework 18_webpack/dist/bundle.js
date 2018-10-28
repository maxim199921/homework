!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);class n{constructor(t){this.timezone=t,this.changeListener=null,this.date=new Date,setInterval(()=>{this.date=new Date,"function"==typeof this.changeListenerCallback&&this.changeListenerCallback()},1e3)}setChangeListener(t){this.changeListenerCallback=t}}class s{constructor(t){this.root=t,this.element=null,this.checkbox=null,this.checkedChangeHandler=null,this.timezoneHash={minsk:{name:"Минск",UTC:"+3"},newYork:{name:"Нью - Йорк",UTC:"-5"},london:{name:"Лондон",UTC:" "},berlin:{name:"Берлин",UTC:"+1"},tokyo:{name:"Токио",UTC:"+9"},vladivostok:{name:"Владивосток",UTC:"+10"}}}render(t,e){if(!this.element){this.element=document.createElement("div"),this.element.style.display="inline-block",this.root.appendChild(this.element),this.Stop=document.createElement("button"),this.Stop.textContent="stop",this.Stop.addEventListener("click",t=>this.checkedChangeHandler(!1)),this.element.appendChild(this.Stop),this.Start=document.createElement("button"),this.Start.textContent="start",this.Start.addEventListener("click",t=>this.checkedChangeHandler(!0)),this.element.appendChild(this.Start),this.timeUTC=document.createElement("span"),this.element.style.marginRight="200px",this.element.style.marginTop="50px",this.timeUTC.textContent=`(${this.timezoneHash[e].name} GMT ${this.timezoneHash[e].UTC})`,this.element.appendChild(this.timeUTC),this.divWrapper=document.createElement("div"),this.divWrapper.className="clock",this.divWrapper.style.backgroundColor="orange",this.divWrapper.style.position="relative",this.divWrapper.style.borderRadius="50%",this.divWrapper.style.height="200px",this.divWrapper.style.width="200px",this.element.appendChild(this.divWrapper);for(let t=1,e=30;t<=12;t++,e+=30)this.num=document.createElement("div"),this.span=document.createElement("span"),this.numInner=document.createElement("div"),this.num.className="num",this.num.style.position="absolute",this.num.style.top="87.5px",this.num.style.left="87.5px",this.num.style.transformOrigin="50% 50%",this.num.style.borderRadius="50%",this.num.style.width="25px",this.num.style.height="25px",this.num.style.backgroundColor="green",this.num.style.transform="rotate("+e+"deg) translateY(-80px)",this.divWrapper.appendChild(this.num),this.num.appendChild(this.numInner),this.span.innerText=t,this.span.style.transform="rotate("+-e+"deg)",this.span.style.display="inline-block",this.numInner.style.height="100%",this.numInner.style.display="flex",this.numInner.style.flexDirection="column",this.numInner.style.justifyContent="center",this.numInner.style.textAlign="center",this.numInner.appendChild(this.span);this.secondLine=document.createElement("div"),this.secondLine.className="clock-second",this.secondLine.style.position="absolute",this.secondLine.style.top="13px",this.secondLine.style.left="99px",this.secondLine.style.transformOrigin="bottom right",this.secondLine.style.width="2px",this.secondLine.style.height="87px",this.secondLine.style.backgroundColor="black",this.secondLine.style.borderRadius="2.5px",this.secondLine.style.opacity="0.8",this.divWrapper.appendChild(this.secondLine),this.divMinutes=document.createElement("div"),this.divMinutes.className="clock-minutes",this.divMinutes.style.position="absolute",this.divMinutes.style.top="23px",this.divMinutes.style.left="98px",this.divMinutes.style.transformOrigin="bottom right",this.divMinutes.style.width="5px",this.divMinutes.style.height="77px",this.divMinutes.style.backgroundColor="black",this.divMinutes.style.borderRadius="2.5px",this.divMinutes.style.opacity="0.8",this.divWrapper.appendChild(this.divMinutes),this.divHour=document.createElement("div"),this.divHour.className="clock-hour",this.divHour.style.position="absolute",this.divHour.style.top="50px",this.divHour.style.left="97px",this.divHour.style.transformOrigin="bottom right",this.divHour.style.width="7px",this.divHour.style.height="50px",this.divHour.style.backgroundColor="black",this.divHour.style.borderRadius="2.5px",this.divHour.style.opacity="0.8",this.divWrapper.appendChild(this.divHour)}this.secondLine.style.transform=`rotate(${6*t.date.getSeconds()}deg)`,this.divMinutes.style.transform=`rotate(${6*t.date.getMinutes()}deg)`,this.divHour.style.transform=`rotate(${30*(t.date.getHours()+ +this.timezoneHash[e].UTC)}deg`}setChangeHandler(t){this.checkedChangeHandler=t}}class r{constructor(t){this.root=t,this.element=null,this.checkbox=null,this.checkedChangeHandler=null,this.timezoneHash={minsk:{name:"Минск",UTC:"+3"},newYork:{name:"Нью - Йорк",UTC:"-5"},london:{name:"Лондон",UTC:" "},berlin:{name:"Берлин",UTC:"+1"},tokyo:{name:"Токио",UTC:"+9"},vladivostok:{name:"Владивосток",UTC:"+10"}}}render(t,e){if(!this.element){this.element=document.createElement("div"),this.element.style.display="inline-block",this.root.appendChild(this.element),this.Stop=document.createElement("button"),this.Stop.textContent="stop",this.Stop.addEventListener("click",t=>this.checkedChangeHandler(!1)),this.element.appendChild(this.Stop),this.Start=document.createElement("button"),this.Start.textContent="start",this.Start.addEventListener("click",t=>this.checkedChangeHandler(!0)),this.element.appendChild(this.Start),this.timeUTC=document.createElement("span"),this.element.style.marginRight="200px",this.element.style.marginTop="50px",this.timeUTC.textContent=`(${this.timezoneHash[e].name} GMT ${this.timezoneHash[e].UTC})`,this.element.appendChild(this.timeUTC),this.element.appendChild(document.createElement("br")),this.svgClock=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svgClock.setAttribute("class","clock"),this.svgClock.setAttribute("width","200"),this.svgClock.setAttribute("height","200"),this.element.appendChild(this.svgClock),this.backgroundCircle=document.createElementNS("http://www.w3.org/2000/svg","circle"),this.backgroundCircle.setAttribute("r","100"),this.backgroundCircle.setAttribute("cx","100"),this.backgroundCircle.setAttribute("cy","100"),this.backgroundCircle.setAttribute("fill","orange"),this.svgClock.appendChild(this.backgroundCircle);for(let t=12;t>0;t--)this.newCirleNumber=document.createElementNS("http://www.w3.org/2000/svg","circle"),this.newCirleNumber.setAttribute("r",12.5),this.newCirleNumber.setAttribute("cx",100-80*Math.sin(t*Math.PI/6)+"px"),this.newCirleNumber.setAttribute("cy",100-80*Math.cos(t*Math.PI/6)+"px"),this.newCirleNumber.setAttribute("fill","green"),this.svgClock.appendChild(this.newCirleNumber),this.newNumber=document.createElementNS("http://www.w3.org/2000/svg","text"),this.newNumber.textContent=t,this.newNumber.setAttribute("x",95+80*Math.sin(t*Math.PI/6)+"px"),this.newNumber.setAttribute("y",105-80*Math.cos(t*Math.PI/6)+"px"),this.svgClock.appendChild(this.newNumber);for(let t=1;t<12;t++)this.newNumber=document.createElementNS("http://www.w3.org/2000/svg","text"),this.newNumber.textContent=t,this.newNumber.setAttribute("x",95+80*Math.sin(t*Math.PI/6)+"px"),this.newNumber.setAttribute("y",105-80*Math.cos(t*Math.PI/6)+"px"),this.svgClock.appendChild(this.newNumber);this.secondLine=document.createElementNS("http://www.w3.org/2000/svg","line"),this.secondLine.setAttribute("class","clock-second"),this.secondLine.setAttribute("x1","100"),this.secondLine.setAttribute("y1","100"),this.secondLine.setAttribute("x2","100"),this.secondLine.setAttribute("y2","13"),this.secondLine.setAttribute("stroke","black"),this.secondLine.setAttribute("stroke-width","2"),this.secondLine.setAttribute("fill","black"),this.svgClock.appendChild(this.secondLine),this.minutesLine=document.createElementNS("http://www.w3.org/2000/svg","line"),this.minutesLine.setAttribute("class","clock-minutes"),this.minutesLine.setAttribute("x1","100"),this.minutesLine.setAttribute("y1","100"),this.minutesLine.setAttribute("x2","100"),this.minutesLine.setAttribute("y2","23"),this.minutesLine.setAttribute("stroke","black"),this.minutesLine.setAttribute("stroke-width","5"),this.minutesLine.setAttribute("fill","black"),this.svgClock.appendChild(this.minutesLine),this.hourLine=document.createElementNS("http://www.w3.org/2000/svg","line"),this.hourLine.setAttribute("class","clock-hour"),this.hourLine.setAttribute("x1","100"),this.hourLine.setAttribute("y1","100"),this.hourLine.setAttribute("x2","100"),this.hourLine.setAttribute("y2","50"),this.hourLine.setAttribute("stroke","black"),this.hourLine.setAttribute("stroke-width","7"),this.hourLine.setAttribute("fill","black"),this.svgClock.appendChild(this.hourLine)}this.secondLine.style.transformOrigin="100px 100px 0",this.secondLine.style.transform=`rotate(${6*t.date.getSeconds()}deg)`,this.minutesLine.style.transformOrigin="100px 100px 0",this.minutesLine.style.transform=`rotate(${6*t.date.getMinutes()}deg)`,this.hourLine.style.transformOrigin="100px 100px 0",this.hourLine.style.transform=`rotate(${30*(t.date.getHours()+ +this.timezoneHash[e].UTC)}deg`}setChangeHandler(t){this.checkedChangeHandler=t}}class h{constructor(t,e,i){this.model=t,this.view=e,this.timezone=i,this.view.setChangeHandler(t=>{t?this.registerModelHandler():this.model.setChangeListener(null)}),this.registerModelHandler()}registerModelHandler(){this.model.setChangeListener(()=>this.handleModelChange()),this.handleModelChange()}handleModelChange(){this.view.render(this.model,this.timezone)}}new class{constructor(t,e){this.map=t,this.rootElement=e,window.addEventListener("hashchange",this.onhashchange.bind(this))}onhashchange(t){const e=document.location.hash;this._route(e)}_route(t){const e=this.map[t];e&&(this.rootElement.innerHTML="",e.runController(this.rootElement))}navigateTo(t){document.location.hash===t&&this.loaded||(this._route(t),document.location.hash=t,this.loaded=!0)}}({"#minsk":{runController:t=>{new h(new n,new s(t),"minsk")}},"#newYork":{runController:t=>{new h(new n,new s(t),"newYork")}},"#london":{runController:t=>{new h(new n,new s(t),"london")}},"#berlin":{runController:t=>{new h(new n,new r(t),"berlin")}},"#tokyo":{runController:t=>{new h(new n,new r(t),"tokyo")}},"#vladivostok":{runController:t=>{new h(new n,new r(t),"vladivostok")}}},document.body).navigateTo("#newYork")}]);