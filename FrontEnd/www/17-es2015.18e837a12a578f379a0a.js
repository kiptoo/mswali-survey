(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{wmhj:function(n,i,e){"use strict";e.r(i),e.d(i,"TakeSurveyPageModule",(function(){return v}));var o=e("ofXK"),t=e("3Pt+"),b=e("TEn/"),r=e("tyNb"),s=e("EnSQ"),c=e("fXoL");function a(n,i){1&n&&c.Ib(0,"div")}function l(n,i){1&n&&c.Ib(0,"div")}function u(n,i){if(1&n){const n=c.Lb();c.Kb(0,"ion-item"),c.Kb(1,"ion-label"),c.hc(2),c.Jb(),c.Kb(3,"ion-radio",13),c.Rb("valueChange",(function(e){return c.dc(n),i.$implicit._id=e})),c.Jb(),c.Jb()}if(2&n){const n=i.$implicit;c.xb(2),c.ic(n.value),c.xb(1),c.Yb("value",n._id)}}const d=function(){return{standalone:!0}};function m(n,i){if(1&n){const n=c.Lb();c.Kb(0,"div"),c.Kb(1,"ion-list"),c.Kb(2,"ion-radio-group",12),c.Rb("ngModelChange",(function(i){c.dc(n);const e=c.Tb().index;return c.Tb().dynamicForm.response[e].answer=i})),c.Kb(3,"ion-list-header"),c.Kb(4,"ion-label"),c.hc(5),c.Jb(),c.Jb(),c.gc(6,u,4,2,"ion-item",6),c.Jb(),c.Jb(),c.Jb()}if(2&n){const n=c.Tb(),i=n.index,e=n.$implicit,o=c.Tb();c.xb(2),c.Yb("ngModel",o.dynamicForm.response[i].answer)("ngModelOptions",c.ac(4,d)),c.xb(3),c.jc(" ",e.title," "),c.xb(1),c.Yb("ngForOf",null==e?null:e.options)}}function g(n,i){if(1&n){const n=c.Lb();c.Kb(0,"ion-select-option",18),c.Rb("valueChange",(function(e){return c.dc(n),i.$implicit._id=e})),c.hc(1),c.Jb()}if(2&n){const n=i.$implicit;c.Yb("value",n._id),c.xb(1),c.ic(n.value)}}function h(n,i){if(1&n){const n=c.Lb();c.Kb(0,"div"),c.Kb(1,"h3",14),c.hc(2),c.Jb(),c.Kb(3,"ion-item",15),c.Kb(4,"ion-select",16),c.Rb("ngModelChange",(function(i){c.dc(n);const e=c.Tb().index;return c.Tb().dynamicForm.response[e].answer=i})),c.gc(5,g,2,2,"ion-select-option",17),c.Jb(),c.Jb(),c.Jb()}if(2&n){const n=c.Tb(),i=n.$implicit,e=n.index,o=c.Tb();c.xb(2),c.ic(i.title),c.xb(2),c.Yb("ngModel",o.dynamicForm.response[e].answer)("ngModelOptions",c.ac(4,d)),c.xb(1),c.Yb("ngForOf",null==i?null:i.options)}}function p(n,i){if(1&n&&(c.Kb(0,"div"),c.gc(1,a,1,0,"div",11),c.gc(2,l,1,0,"div",11),c.gc(3,m,7,5,"div",11),c.gc(4,h,6,5,"div",11),c.Jb()),2&n){const n=i.$implicit;c.xb(1),c.Yb("ngIf","text"===n.type),c.xb(1),c.Yb("ngIf","textarea"===n.type),c.xb(1),c.Yb("ngIf","radio"===n.type),c.xb(1),c.Yb("ngIf","dropdown"===n.type)}}const y=[{path:"",component:(()=>{class n{constructor(n,i,e,o,t,b){this.dataService=n,this.router=i,this.fb=e,this.activatedRoute=o,this.modalController=t,this.routerOutlet=b,this.dynamicForm={email:"",name:"",phone:"",response:[]},this.surveys=[{_id:34},{_id:35},{_id:36},{_id:37}],this.activatedRoute.queryParams.subscribe(n=>{this.surveyId=this.activatedRoute.snapshot.params.id})}ngOnInit(){this.dataService.getsurveyById(this.surveyId).subscribe(n=>{let i=0;n.questions.forEach(n=>{this.dynamicForm.response.push({question_id:n._id,answer:""}),i=+n.submissions.length}),n.submissionCount=i,this.survey=n})}submitSurvey(){console.log("this.dynamicForm",this.dynamicForm),this.dataService.submitSurvey(this.surveyId,this.dynamicForm).subscribe(n=>{console.log("submitSurvey resp",n)})}}return n.\u0275fac=function(i){return new(i||n)(c.Hb(s.a),c.Hb(r.g),c.Hb(t.c),c.Hb(r.a),c.Hb(b.H),c.Hb(b.x))},n.\u0275cmp=c.Bb({type:n,selectors:[["app-take-survey"]],decls:38,vars:6,consts:[[1,"ion-padding"],["color","primary"],["size","12"],[1,"favCard-header"],[1,"ion-margin","ion-padding"],[3,"ngSubmit"],[4,"ngFor","ngForOf"],["type","text","name","name",3,"ngModel","ngModelChange"],["type","text","name","email",3,"ngModel","ngModelChange"],["type","text","name","phone",3,"ngModel","ngModelChange"],["color","primary","type","submit"],[4,"ngIf"],[3,"ngModel","ngModelOptions","ngModelChange"],["slot","start",3,"value","valueChange"],[1,"ion-padding","question"],[1,"ion-margin"],["placeholder","Select One",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value","valueChange",4,"ngFor","ngForOf"],[3,"value","valueChange"]],template:function(n,i){1&n&&(c.Kb(0,"ion-header"),c.Kb(1,"ion-toolbar"),c.Kb(2,"ion-title"),c.hc(3,"Mswali Test Survey"),c.Jb(),c.Jb(),c.Jb(),c.Kb(4,"ion-content",0),c.Kb(5,"ion-text",1),c.Kb(6,"h1"),c.hc(7,"Take Survey"),c.Jb(),c.Jb(),c.Kb(8,"ion-row"),c.Kb(9,"ion-col",2),c.Kb(10,"ion-card",0),c.Kb(11,"ion-card-header",3),c.Kb(12,"ion-card-title"),c.hc(13),c.Jb(),c.Kb(14,"ion-card-subtitle"),c.hc(15),c.Jb(),c.Jb(),c.Kb(16,"ion-card-content"),c.Kb(17,"h1",4),c.hc(18," Please Fill in the following questions "),c.Jb(),c.Kb(19,"form",5),c.Rb("ngSubmit",(function(){return i.submitSurvey()})),c.gc(20,p,5,4,"div",6),c.Kb(21,"h1",4),c.hc(22,"Additional Info"),c.Jb(),c.Kb(23,"div",0),c.Kb(24,"ion-label"),c.hc(25,"name"),c.Jb(),c.Kb(26,"ion-item"),c.Kb(27,"ion-input",7),c.Rb("ngModelChange",(function(n){return i.dynamicForm.name=n})),c.Jb(),c.Jb(),c.Kb(28,"ion-label"),c.hc(29,"email"),c.Jb(),c.Kb(30,"ion-item"),c.Kb(31,"ion-input",8),c.Rb("ngModelChange",(function(n){return i.dynamicForm.email=n})),c.Jb(),c.Jb(),c.Kb(32,"ion-label"),c.hc(33,"phone"),c.Jb(),c.Kb(34,"ion-item"),c.Kb(35,"ion-input",9),c.Rb("ngModelChange",(function(n){return i.dynamicForm.phone=n})),c.Jb(),c.Jb(),c.Jb(),c.Kb(36,"ion-button",10),c.hc(37,"Submit"),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&n&&(c.xb(13),c.ic(null==i.survey?null:i.survey.title),c.xb(2),c.ic(null==i.survey?null:i.survey.description),c.xb(5),c.Yb("ngForOf",null==i.survey?null:i.survey.questions),c.xb(7),c.Yb("ngModel",i.dynamicForm.name),c.xb(4),c.Yb("ngModel",i.dynamicForm.email),c.xb(4),c.Yb("ngModel",i.dynamicForm.phone))},directives:[b.o,b.D,b.C,b.m,b.B,b.y,b.l,b.f,b.h,b.j,b.i,b.g,t.q,t.k,t.l,o.i,b.s,b.r,b.q,b.N,t.j,t.m,b.d,o.j,b.t,b.w,b.M,b.u,b.v,b.K,b.z,b.A],styles:[".question[_ngcontent-%COMP%]{color:#000}"]}),n})()}];let f=(()=>{class n{}return n.\u0275mod=c.Fb({type:n}),n.\u0275inj=c.Eb({factory:function(i){return new(i||n)},imports:[[r.k.forChild(y)],r.k]}),n})(),v=(()=>{class n{}return n.\u0275mod=c.Fb({type:n}),n.\u0275inj=c.Eb({factory:function(i){return new(i||n)},imports:[[o.b,t.g,b.E,f]]}),n})()}}]);