(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{12:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),i=a.n(s),o=a(9),l=a(2),c=a(7),m=a(8),d=a(11),u=a(10),h=a(3),p=(a(17),[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}]),b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],g=a(4),y=a.n(g),f=a(1),E=a.n(f),v=E.a.shape({name:E.a.string.isRequired}).isRequired,w=(E.a.shape({title:E.a.string.isRequired,completed:E.a.bool.isRequired,user:v.isRequired}),a(20),function(e){var t=e.title,a=e.completed,n=e.user;return r.a.createElement("div",{className:y()("card",{done:a})},r.a.createElement("h2",null,t),r.a.createElement("span",{className:y()("todotext",{donetext:a})}),r.a.createElement("span",{className:"user-name"},n.name||n))}),k=(a(21),function(e){var t=e.todos;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id,className:"todo__item"},r.a.createElement(w,e))})))}),S=p.map((function(e){return Object(h.a)(Object(h.a)({},e),{},{user:b.find((function(t){return t.id===e.userId}))})})),_=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={todoList:S,newTask:"",selectedUser:"",titleFieldError:!1,userFieldError:!1},e.handleChange=function(t){e.setState({titleFieldError:!1}),e.setState({userFieldError:!1});var a=t.target,n=a.name,r=a.value;e.setState(Object(l.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault(),e.state.newTask?""!==e.state.newTask.trim()?e.state.selectedUser?e.setState((function(e){return{todoList:[].concat(Object(o.a)(e.todoList),[{id:e.todoList.length+1,user:e.selectedUser,completed:!1,title:e.newTask}]),newTask:"",selectedUser:""}})):e.setState({userFieldError:!0}):e.setState({titleFieldError:!0,newTask:""}):e.setState({titleFieldError:!0})},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"TODO list"),r.a.createElement("div",{className:"header__info"},r.a.createElement("span",null,"Tasks to do: ".concat(this.state.todoList.length)),r.a.createElement("span",{className:"header__done"}),r.a.createElement("span",null,"People involved:"," ".concat(b.length)))),r.a.createElement(k,{todos:this.state.todoList}),r.a.createElement("form",{className:"form-box",onSubmit:this.handleSubmit},r.a.createElement("div",null,"Add a new task:"),r.a.createElement("div",{className:"form-box__element"},r.a.createElement("input",{type:"text",name:"newTask",placeholder:"Task description",value:this.state.newTask,onChange:this.handleChange}),this.state.titleFieldError&&r.a.createElement("span",{className:"form-box__error"},"Please, enter the title")),r.a.createElement("div",{className:"form-box__element"},r.a.createElement("select",{name:"selectedUser",value:this.state.selectedUser,onChange:this.handleChange},r.a.createElement("option",{value:""},"Select a user"),b.map((function(e){return r.a.createElement("option",{key:e.id},e.name)}))),this.state.userFieldError&&r.a.createElement("span",{className:"form-box__error"},"Please, choose a user")),r.a.createElement("div",{className:"form-box__element"},r.a.createElement("button",{type:"submit"},"Add"))))}}]),a}(r.a.Component);i.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.fc5aaf65.chunk.js.map