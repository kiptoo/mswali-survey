(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"fE+h":function(e,t,n){"use strict";n.r(t),n.d(t,"CreateSurveyPageModule",(function(){return l}));var r=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),b=n("tyNb"),s=n("EnSQ"),a=n("fXoL");const c=[{path:"",component:(()=>{class e{constructor(e,t,n,r,o,i){this.dataService=e,this.router=t,this.fb=n,this.activatedRoute=r,this.modalController=o,this.routerOutlet=i,this.newSurveyForm={title:"",description:""},this.dynamicForm={email:"",name:"",phone:"",response:[]},this.surveys=[{_id:34},{_id:35},{_id:36},{_id:37}],this.currentUser=JSON.parse(localStorage.getItem("mswalitoken"));let b=this.currentUser.email.split("@");this.username=b[0]}ngOnInit(){}createSurvey(){console.log("this.newSurveyForm",this.newSurveyForm),this.dataService.createSurvey(this.newSurveyForm).subscribe(e=>{console.log("submitSurvey resp",e),this.surveyId=e._id,this.router.navigateByUrl("survey/edit/"+this.surveyId)})}logout(){this.dataService.logout().subscribe(e=>{console.log("logged out",e)})}}return e.\u0275fac=function(t){return new(t||e)(a.Hb(s.a),a.Hb(b.g),a.Hb(o.c),a.Hb(b.a),a.Hb(i.H),a.Hb(i.x))},e.\u0275cmp=a.Bb({type:e,selectors:[["app-create-survey"]],decls:33,vars:3,consts:[["slot","primary"],["src","../../assets/avatar.svg"],[3,"click"],["size","large","name","log-out-sharp"],[1,"ion-padding"],[1,"ion-margin"],["size","12"],[1,"favCard-header"],[3,"ngSubmit"],["type","text","name","title",3,"ngModel","ngModelChange"],["type","text","name","description",3,"ngModel","ngModelChange"],["color","primary","type","submit"]],template:function(e,t){1&e&&(a.Kb(0,"ion-header"),a.Kb(1,"ion-toolbar"),a.Kb(2,"ion-buttons",0),a.Kb(3,"ion-chip"),a.Kb(4,"ion-avatar"),a.Ib(5,"img",1),a.Jb(),a.Kb(6,"ion-label"),a.hc(7),a.Jb(),a.Jb(),a.Kb(8,"ion-button",2),a.Rb("click",(function(){return t.logout()})),a.Ib(9,"ion-icon",3),a.Jb(),a.Jb(),a.Kb(10,"ion-title"),a.hc(11,"Mswali Test Survey"),a.Jb(),a.Jb(),a.Jb(),a.Kb(12,"ion-content",4),a.Kb(13,"ion-content",5),a.Kb(14,"ion-row"),a.Kb(15,"ion-col",6),a.Kb(16,"ion-card",4),a.Kb(17,"ion-card-header",7),a.Kb(18,"ion-card-title"),a.hc(19,"Create Survey"),a.Jb(),a.Jb(),a.Kb(20,"ion-card-content"),a.Kb(21,"form",8),a.Rb("ngSubmit",(function(){return t.createSurvey()})),a.Kb(22,"div",4),a.Kb(23,"ion-label"),a.hc(24,"Survey Title"),a.Jb(),a.Kb(25,"ion-item"),a.Kb(26,"ion-input",9),a.Rb("ngModelChange",(function(e){return t.newSurveyForm.title=e})),a.Jb(),a.Jb(),a.Kb(27,"ion-label"),a.hc(28,"Description"),a.Jb(),a.Kb(29,"ion-item"),a.Kb(30,"textarea",10),a.Rb("ngModelChange",(function(e){return t.newSurveyForm.description=e})),a.Jb(),a.Jb(),a.Jb(),a.Kb(31,"ion-button",11),a.hc(32,"Create"),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Jb(),a.Jb()),2&e&&(a.xb(7),a.ic(t.username),a.xb(19),a.Yb("ngModel",t.newSurveyForm.title),a.xb(4),a.Yb("ngModel",t.newSurveyForm.description))},directives:[i.o,i.D,i.e,i.k,i.c,i.s,i.d,i.p,i.C,i.m,i.y,i.l,i.f,i.h,i.j,i.g,o.q,o.k,o.l,i.r,i.q,i.N,o.j,o.m,o.a],styles:[""]}),e})()}];let u=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[b.k.forChild(c)],b.k]}),e})(),l=(()=>{class e{}return e.\u0275mod=a.Fb({type:e}),e.\u0275inj=a.Eb({factory:function(t){return new(t||e)},imports:[[r.b,o.g,i.E,u]]}),e})()}}]);