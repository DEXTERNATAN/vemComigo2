(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{"8r3O":function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),e=u("ej43"),o=u("gIcY"),i=(u("OO+k"),function(l,n,u,a){return new(u||(u=Promise))(function(e,o){function i(l){try{r(a.next(l))}catch(l){o(l)}}function t(l){try{r(a.throw(l))}catch(l){o(l)}}function r(l){l.done?e(l.value):new u(function(n){n(l.value)}).then(i,t)}r((a=a.apply(l,n||[])).next())})}),t=function(l,n){var u,a,e,o,i={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return o={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function t(o){return function(t){return function(o){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,a&&(e=a[2&o[0]?"return":o[0]?"throw":"next"])&&!(e=e.call(a,o[1])).done)return e;switch(a=0,e&&(o=[0,e.value]),o[0]){case 0:case 1:e=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,a=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(e=(e=i.trys).length>0&&e[e.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!e||o[1]>e[0]&&o[1]<e[3])){i.label=o[1];break}if(6===o[0]&&i.label<e[1]){i.label=e[1],e=o;break}if(e&&i.label<e[2]){i.label=e[2],i.ops.push(o);break}e[2]&&i.ops.pop(),i.trys.pop();continue}o=n.call(l,i)}catch(l){o=[6,l],a=0}finally{u=e=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,t])}}},r=function(){function l(l,n,u,a){this.fb=l,this.authService=n,this.loadingController=u,this.alertController=a,this.submitted=!1,this.loginForm=l.group({email:["",o.k.compose([o.k.required,o.k.email])],password:["",o.k.compose([o.k.required,o.k.minLength(6)])]})}return l.prototype.ngOnInit=function(){},l.prototype.presentLoading=function(){return i(this,void 0,void 0,function(){var l;return t(this,function(n){switch(n.label){case 0:return l=this,[4,this.loadingController.create({content:"Aguarde ..."})];case 1:return l.loading=n.sent(),[4,this.loading.present()];case 2:return[2,n.sent()]}})})},l.prototype.hideLoading=function(){return i(this,void 0,void 0,function(){return t(this,function(l){switch(l.label){case 0:return[4,this.loading.dismiss()];case 1:return[2,l.sent()]}})})},l.prototype.presentAlert=function(l){return i(this,void 0,void 0,function(){return t(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Cadastro de usu\xe1rio",message:l,buttons:["OK"]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},Object.defineProperty(l.prototype,"f",{get:function(){return this.loginForm.controls},enumerable:!0,configurable:!0}),l.prototype.login=function(){var l=this;this.submitted=!0,this.credentias={email:this.loginForm.value.email,password:this.loginForm.value.password},this.loginForm.invalid||this.authService.signWithEmail(this.credentias).then(function(){console.log("Logado")},function(n){console.log("Erros encontrados: ",n.code),l.presentAlert("auth/wrong-password"===n.code?"A senha \xe9 inv\xe1lida ou o usu\xe1rio n\xe3o possui uma senha.":"auth/user-not-found"===n.code?"N\xe3o h\xe1 registro de usu\xe1rio correspondente a esse identificador. O usu\xe1rio pode ter sido exclu\xeddo.":n.message)})},l.prototype.loginGoogle=function(){console.log("Cliquei no login com google"),this.authService.signInWithGoogle().then(function(){console.log("Logado com google")},function(l){return console.log("Erros agora google",l)})},l.prototype.loginFacebook=function(){console.log("Cliquei no login com Facebook")},l}(),s=function(){},c=u("pMnS"),d=u("ntG5"),g=u("M9A9"),p=u("ZYCi"),f=u("Ip0R"),h=u("Zq1E"),m=u("4Olv"),v=u("tXrQ"),k=u("Eq7r"),b=u("CssM"),M=a.La({encapsulation:0,styles:[[""]],data:{}});function C(l){return a.ab(0,[(l()(),a.Na(0,0,null,null,1,"div",[["class","msgInvalid"]],null,null,null,null,null)),(l()(),a.Za(-1,null,["E-mail \xe9 obrigat\xf3rio"]))],null,null)}function y(l){return a.ab(0,[(l()(),a.Na(0,0,null,null,1,"div",[["class","msgInvalid"]],null,null,null,null,null)),(l()(),a.Za(-1,null,["E-mail deve ser um endere\xe7o v\xe1lido"]))],null,null)}function w(l){return a.ab(0,[(l()(),a.Na(0,0,null,null,6,"ion-item",[["class","ion-invalid"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.Va(l,2).onClick(u)&&e),e},null,null)),a.Ma(1,16384,null,0,d.F,[a.k],null,null),a.Ma(2,16384,null,0,g.a,[[2,p.l],a.k],null,null),(l()(),a.Ea(16777216,null,null,1,null,C)),a.Ma(4,16384,null,0,f.i,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.Ea(16777216,null,null,1,null,y)),a.Ma(6,16384,null,0,f.i,[a.M,a.J],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,4,0,u.f.email.errors.required),l(n,6,0,u.f.email.errors.email)},null)}function V(l){return a.ab(0,[(l()(),a.Na(0,0,null,null,1,"div",[["class","msgInvalid"]],null,null,null,null,null)),(l()(),a.Za(-1,null,["Senha \xe9 obrigat\xf3ria"]))],null,null)}function N(l){return a.ab(0,[(l()(),a.Na(0,0,null,null,1,"div",[["class","msgInvalid"]],null,null,null,null,null)),(l()(),a.Za(-1,null,["A senha deve ter pelo menos 6 caracteres."]))],null,null)}function E(l){return a.ab(0,[(l()(),a.Na(0,0,null,null,6,"ion-item",[["class","ion-invalid"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.Va(l,2).onClick(u)&&e),e},null,null)),a.Ma(1,16384,null,0,d.F,[a.k],null,null),a.Ma(2,16384,null,0,g.a,[[2,p.l],a.k],null,null),(l()(),a.Ea(16777216,null,null,1,null,V)),a.Ma(4,16384,null,0,f.i,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.Ea(16777216,null,null,1,null,N)),a.Ma(6,16384,null,0,f.i,[a.M,a.J],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,4,0,u.f.password.errors.required),l(n,6,0,u.f.password.errors.minlength)},null)}function I(l){return a.ab(0,[(l()(),a.Na(0,0,null,null,72,"ion-content",[],null,null,null,null,null)),a.Ma(1,16384,null,0,d.r,[a.k],null,null),(l()(),a.Na(2,0,null,null,2,"div",[["class","cabecalho"]],null,null,null,null,null)),(l()(),a.Na(3,0,null,null,1,"ion-img",[["src","assets/img/logo_login.png"]],null,null,null,null,null)),a.Ma(4,16384,null,0,d.B,[a.k],{src:[0,"src"]},null),(l()(),a.Na(5,0,null,null,2,"ion-title",[["margin",""],["text-center",""]],null,null,null,null,null)),a.Ma(6,16384,null,0,d.Ya,[a.k],null,null),(l()(),a.Za(-1,null,["Bem-Vinda!"])),(l()(),a.Na(8,0,null,null,56,"div",[["class",""]],null,null,null,null,null)),(l()(),a.Na(9,0,null,null,55,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,o=l.component;return"submit"===n&&(e=!1!==a.Va(l,11).onSubmit(u)&&e),"reset"===n&&(e=!1!==a.Va(l,11).onReset()&&e),"ngSubmit"===n&&(e=!1!==o.login()&&e),e},null,null)),a.Ma(10,16384,null,0,o.m,[],null,null),a.Ma(11,540672,null,0,o.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),a.Xa(2048,null,o.a,null,[o.d]),a.Ma(13,16384,null,0,o.i,[[4,o.a]],null,null),(l()(),a.Na(14,0,null,null,50,"ion-grid",[],null,null,null,null,null)),a.Ma(15,16384,null,0,d.x,[a.k],null,null),(l()(),a.Na(16,0,null,null,31,"ion-row",[],null,null,null,null,null)),a.Ma(17,16384,null,0,d.Ea,[],null,null),(l()(),a.Na(18,0,null,null,29,"ion-col",[],null,null,null,null,null)),a.Ma(19,16384,null,0,d.q,[a.k],null,null),(l()(),a.Na(20,0,null,null,11,"ion-item",[["margin-top",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.Va(l,22).onClick(u)&&e),e},null,null)),a.Ma(21,16384,null,0,d.F,[a.k],null,null),a.Ma(22,16384,null,0,g.a,[[2,p.l],a.k],null,null),(l()(),a.Na(23,0,null,null,8,"ion-input",[["formControlName","email"],["id","email"],["placeholder","Email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"ionBlur"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==a.Va(l,26)._handleInputEvent(u.target.value)&&e),"ionBlur"===n&&(e=!1!==a.Va(l,26)._handleBlurEvent()&&e),e},null,null)),a.Ma(24,278528,null,0,f.h,[a.q,a.r,a.k,a.B],{ngClass:[0,"ngClass"]},null),a.Wa(25,{"is-invalid":0}),a.Ma(26,16384,null,0,h.a,[a.k],null,null),a.Xa(1024,null,o.f,function(l){return[l]},[h.a]),a.Ma(28,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.f],[2,o.o]],{name:[0,"name"]},null),a.Xa(2048,null,o.g,null,[o.c]),a.Ma(30,16384,null,0,o.h,[[4,o.g]],null,null),a.Ma(31,16384,null,0,d.E,[a.k],{placeholder:[0,"placeholder"],type:[1,"type"]},{ionBlur:"ionBlur"}),(l()(),a.Ea(16777216,null,null,1,null,w)),a.Ma(33,16384,null,0,f.i,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.Na(34,0,null,null,11,"ion-item",[["margin-top",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.Va(l,36).onClick(u)&&e),e},null,null)),a.Ma(35,16384,null,0,d.F,[a.k],null,null),a.Ma(36,16384,null,0,g.a,[[2,p.l],a.k],null,null),(l()(),a.Na(37,0,null,null,8,"ion-input",[["formControlName","password"],["id","password"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"ionBlur"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==a.Va(l,40)._handleInputEvent(u.target.value)&&e),"ionBlur"===n&&(e=!1!==a.Va(l,40)._handleBlurEvent()&&e),e},null,null)),a.Ma(38,278528,null,0,f.h,[a.q,a.r,a.k,a.B],{ngClass:[0,"ngClass"]},null),a.Wa(39,{"is-invalid":0}),a.Ma(40,16384,null,0,h.a,[a.k],null,null),a.Xa(1024,null,o.f,function(l){return[l]},[h.a]),a.Ma(42,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.f],[2,o.o]],{name:[0,"name"]},null),a.Xa(2048,null,o.g,null,[o.c]),a.Ma(44,16384,null,0,o.h,[[4,o.g]],null,null),a.Ma(45,16384,null,0,d.E,[a.k],{placeholder:[0,"placeholder"],type:[1,"type"]},{ionBlur:"ionBlur"}),(l()(),a.Ea(16777216,null,null,1,null,E)),a.Ma(47,16384,null,0,f.i,[a.M,a.J],{ngIf:[0,"ngIf"]},null),(l()(),a.Na(48,0,null,null,7,"ion-row",[],null,null,null,null,null)),a.Ma(49,16384,null,0,d.Ea,[],null,null),(l()(),a.Na(50,0,null,null,5,"ion-col",[],null,null,null,null,null)),a.Ma(51,16384,null,0,d.q,[a.k],null,null),(l()(),a.Na(52,0,null,null,3,"ion-button",[["button",""],["expand","block"],["shape","round"],["type","submit"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.Va(l,54).onClick(u)&&e),e},null,null)),a.Ma(53,16384,null,0,d.f,[a.k],{expand:[0,"expand"],shape:[1,"shape"],type:[2,"type"]},null),a.Ma(54,16384,null,0,g.a,[[2,p.l],a.k],null,null),(l()(),a.Za(-1,null,["Entrar"])),(l()(),a.Na(56,0,null,null,8,"ion-row",[],null,null,null,null,null)),a.Ma(57,16384,null,0,d.Ea,[],null,null),(l()(),a.Na(58,0,null,null,6,"ion-col",[],null,null,null,null,null)),a.Ma(59,16384,null,0,d.q,[a.k],null,null),(l()(),a.Na(60,0,null,null,4,"ion-button",[["button",""],["color","primary"],["expand","block"],["fill","outline"],["href","/register"],["routerDirection","forward"],["shape","round"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.Va(l,62).onClick()&&e),"click"===n&&(e=!1!==a.Va(l,63).onClick(u)&&e),e},null,null)),a.Ma(61,16384,null,0,d.f,[a.k],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],routerDirection:[3,"routerDirection"],href:[4,"href"],shape:[5,"shape"]},null),a.Ma(62,16384,null,0,m.a,[v.a],{routerDirection:[0,"routerDirection"]},null),a.Ma(63,16384,null,0,g.a,[[2,p.l],a.k],{href:[0,"href"]},null),(l()(),a.Za(-1,null,["Novo Usu\xe1rio"])),(l()(),a.Na(65,0,null,null,7,"ion-grid",[],null,null,null,null,null)),a.Ma(66,16384,null,0,d.x,[a.k],null,null),(l()(),a.Na(67,0,null,null,5,"ion-row",[["justify-content-center",""]],null,null,null,null,null)),a.Ma(68,16384,null,0,d.Ea,[],null,null),(l()(),a.Na(69,0,null,null,3,"ion-col",[["size","8"]],null,null,null,null,null)),a.Ma(70,16384,null,0,d.q,[a.k],{size:[0,"size"]},null),(l()(),a.Na(71,0,null,null,1,"ion-list",[],null,null,null,null,null)),a.Ma(72,16384,null,0,d.M,[a.k],null,null)],function(l,n){var u=n.component;l(n,4,0,"assets/img/logo_login.png"),l(n,11,0,u.loginForm),l(n,24,0,l(n,25,0,u.submitted&&u.f.email.errors)),l(n,28,0,"email"),l(n,31,0,"Email","text"),l(n,33,0,u.submitted&&u.f.email.errors),l(n,38,0,l(n,39,0,u.submitted&&u.f.password.errors)),l(n,42,0,"password"),l(n,45,0,"Password","password"),l(n,47,0,u.submitted&&u.f.password.errors),l(n,53,0,"block","round","submit"),l(n,61,0,"primary","block","outline","forward","/register","round"),l(n,62,0,"forward"),l(n,63,0,"/register"),l(n,70,0,"8")},function(l,n){l(n,9,0,a.Va(n,13).ngClassUntouched,a.Va(n,13).ngClassTouched,a.Va(n,13).ngClassPristine,a.Va(n,13).ngClassDirty,a.Va(n,13).ngClassValid,a.Va(n,13).ngClassInvalid,a.Va(n,13).ngClassPending),l(n,23,0,a.Va(n,30).ngClassUntouched,a.Va(n,30).ngClassTouched,a.Va(n,30).ngClassPristine,a.Va(n,30).ngClassDirty,a.Va(n,30).ngClassValid,a.Va(n,30).ngClassInvalid,a.Va(n,30).ngClassPending),l(n,37,0,a.Va(n,44).ngClassUntouched,a.Va(n,44).ngClassTouched,a.Va(n,44).ngClassPristine,a.Va(n,44).ngClassDirty,a.Va(n,44).ngClassValid,a.Va(n,44).ngClassInvalid,a.Va(n,44).ngClassPending)})}var U=a.Ja("app-login",r,function(l){return a.ab(0,[(l()(),a.Na(0,0,null,null,1,"app-login",[],null,null,null,I,M)),a.Ma(1,114688,null,0,r,[o.b,e.a,k.a,b.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),x=u("95zI"),B=u("9opb"),q=u("apKv"),F=u("B4/3");u.d(n,"LoginPageModuleNgFactory",function(){return S});var S=a.Ka(s,[],function(l){return a.Ta([a.Ua(512,a.j,a.Z,[[8,[c.a,U]],[3,a.j],a.v]),a.Ua(4608,f.k,f.j,[a.s,[2,f.r]]),a.Ua(4608,o.n,o.n,[]),a.Ua(4608,o.b,o.b,[]),a.Ua(4608,x.a,x.a,[a.x,a.g]),a.Ua(4608,B.a,B.a,[x.a,a.j,a.p]),a.Ua(4608,q.a,q.a,[x.a,a.j,a.p]),a.Ua(1073742336,f.b,f.b,[]),a.Ua(1073742336,o.l,o.l,[]),a.Ua(1073742336,o.e,o.e,[]),a.Ua(1073742336,o.j,o.j,[]),a.Ua(1073742336,F.a,F.a,[]),a.Ua(1073742336,p.m,p.m,[[2,p.s],[2,p.l]]),a.Ua(1073742336,s,s,[]),a.Ua(1024,p.j,function(){return[[{path:"",component:r}]]},[])])})}}]);