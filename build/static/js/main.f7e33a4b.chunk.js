(this.webpackJsonpemployee=this.webpackJsonpemployee||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Oscar Nu\xf1ez","occupation":"Manager"},{"id":2,"name":"Kristen Nu\xf1ez","occupation":"Software Engineer"},{"id":3,"name":"Adhan Payano","occupation":"Intern"},{"id":4,"name":"Heriberto Valdez","occupation":"Intern"},{"id":5,"name":"Anthony Nu\xf1ez","occupation":"Software Engineer"},{"id":6,"name":"Sophia Nu\xf1ez","occupation":"Software Engineer"},{"id":7,"name":"Kat Suarez","occupation":"Intern"},{"id":8,"name":"Arsenio Rondon","occupation":"Software Engineer"},{"id":9,"name":"Jasmine Davila","occupation":"Intern"},{"id":10,"name":"Raul Nino","occupation":"Software Engineer"}]')},,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),l=(n(14),n(4)),i=n(5),m=n(8),u=n(6),s=(n(15),n(16),n(7));var p=function(e){var t=Object(a.useState)(""),n=Object(s.a)(t,2),r=n[0],c=n[1];return o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.handleSubmit(r)},className:"search"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"search"},"Search Employee:"),o.a.createElement("input",{onChange:function(e){c(e.target.value)},value:e.search,name:"name",type:"text",className:"form-control",placeholder:"Search for employee"}),o.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary mt-3"},"Search")))},d=n(1);var h=function(e){return o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"},"#"),o.a.createElement("th",{scope:"col"},"Name"),o.a.createElement("th",{scope:"col"},"Role"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"row"},e.id),o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.occupation),o.a.createElement("td",null,o.a.createElement("img",{src:e.image})))))},f=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={employees:d,name:"",role:""},e.Changename=function(t){e.setState({name:t}),console.log(e.state)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return console.log(d),o.a.createElement("div",null,o.a.createElement(p,{handleSubmit:this.Changename}),this.state.employees.filter((function(t){return!e.state.name||t.name.toLowerCase().includes(e.state.name.toLowerCase())})).map((function(e,t){return o.a.createElement(h,{key:t,name:e.name,occupation:e.occupation})})),";")}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.f7e33a4b.chunk.js.map