(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{WJrd:function(i,n,o){"use strict";o.r(n),o.d(n,"SurveyDataPageModule",(function(){return p}));var t=o("ofXK"),e=o("3Pt+"),s=o("TEn/"),c=o("tyNb"),b=o("EnSQ"),r=o("fXoL");function l(i,n){if(1&i&&(r.Kb(0,"ion-col"),r.hc(1),r.Jb()),2&i){const i=n.$implicit;r.xb(1),r.ic(i)}}function a(i,n){if(1&i&&(r.Kb(0,"ion-col"),r.hc(1),r.Jb()),2&i){const i=n.$implicit;r.xb(1),r.jc(" ",i.answer.value," ")}}function d(i,n){if(1&i){const i=r.Lb();r.Kb(0,"ion-row"),r.Kb(1,"ion-col"),r.hc(2),r.Jb(),r.Kb(3,"ion-col"),r.hc(4),r.Jb(),r.gc(5,a,2,1,"ion-col",5),r.Kb(6,"ion-col"),r.Kb(7,"ion-button",7),r.Rb("click",(function(){r.dc(i);const o=n.index;return r.Tb().showDetails(o)})),r.Ib(8,"ion-icon",8),r.Jb(),r.Jb(),r.Jb()}if(2&i){const i=n.$implicit,o=n.index;r.xb(2),r.ic(o+1),r.xb(2),r.ic(i.name),r.xb(1),r.Yb("ngForOf",null==i?null:i.response)}}function u(i,n){if(1&i&&(r.Kb(0,"ion-item"),r.Kb(1,"ion-label"),r.hc(2),r.Jb(),r.Kb(3,"h6"),r.hc(4),r.Jb(),r.Jb()),2&i){const i=n.$implicit;r.xb(2),r.ic(i.question_id.title),r.xb(2),r.ic(i.answer.value)}}function h(i,n){if(1&i&&(r.Kb(0,"ion-card",2),r.Kb(1,"ion-card-header",3),r.Kb(2,"ion-card-title"),r.hc(3,"Data Detail"),r.Jb(),r.Jb(),r.Kb(4,"ion-card-content"),r.Kb(5,"ion-item"),r.Kb(6,"ion-label"),r.hc(7),r.Jb(),r.Kb(8,"ion-label"),r.hc(9),r.Jb(),r.Kb(10,"ion-label"),r.hc(11),r.Jb(),r.Jb(),r.gc(12,u,5,2,"ion-item",5),r.Jb(),r.Jb()),2&i){const i=r.Tb();r.xb(7),r.jc("Name :",i.selectedSubmission.name,""),r.xb(2),r.jc("Email:",i.selectedSubmission.email,""),r.xb(2),r.jc("Phone.No :",i.selectedSubmission.phone,""),r.xb(1),r.Yb("ngForOf",null==i.selectedSubmission?null:i.selectedSubmission.response)}}const g=[{path:"",component:(()=>{class i{constructor(i,n,o,t,e){this.dataService=i,this.router=n,this.activatedRoute=o,this.modalController=t,this.routerOutlet=e,this.showdetail=!1,this.dynamicForm={email:"",name:"",phone:"",response:[]},this.x=-1,this.tableHeaders=["#","name"],this.surveys=[{_id:34},{_id:35},{_id:36},{_id:37}],this.scrollingElement=document.scrollingElement||document.body,this.activatedRoute.queryParams.subscribe(i=>{this.surveyId=this.activatedRoute.snapshot.params.id})}ngOnInit(){this.dataService.getsurveyById(this.surveyId).subscribe(i=>{i.submissions[0].response.forEach(i=>{this.tableHeaders.push(i.question_id.title)}),this.survey=i})}goToBottom(){this.scrollingElement.scrollTop=this.scrollingElement.scrollHeight}showDetails(i){this.goToBottom(),-1==this.x&&(this.showdetail=!this.showdetail),-1!=this.x&&this.x==i&&(this.showdetail=!this.showdetail),this.x=i,this.selectedSubmission=this.survey.submissions[i],console.log("submission "+i,this.selectedSubmission)}}return i.\u0275fac=function(n){return new(n||i)(r.Hb(b.a),r.Hb(c.g),r.Hb(c.a),r.Hb(s.H),r.Hb(s.x))},i.\u0275cmp=r.Bb({type:i,selectors:[["app-survey-data"]],decls:21,vars:5,consts:[[1,"ion-margin"],["size","12"],[1,"ion-padding"],[1,"favCard-header"],[1,"scrollingContainer"],[4,"ngFor","ngForOf"],["class","ion-padding",4,"ngIf"],[3,"click"],["name","eye-sharp"]],template:function(i,n){1&i&&(r.Kb(0,"ion-header"),r.Kb(1,"ion-toolbar"),r.Kb(2,"ion-title"),r.hc(3,"Mswali Test Survey"),r.Jb(),r.Jb(),r.Jb(),r.Kb(4,"ion-content",0),r.Kb(5,"ion-row"),r.Kb(6,"ion-col",1),r.Kb(7,"ion-card",2),r.Kb(8,"ion-card-header",3),r.Kb(9,"ion-card-title"),r.hc(10),r.Jb(),r.Kb(11,"ion-card-subtitle"),r.hc(12),r.Jb(),r.Jb(),r.Kb(13,"ion-card-content",4),r.Kb(14,"ion-grid",0),r.Kb(15,"ion-row"),r.gc(16,l,2,1,"ion-col",5),r.Kb(17,"ion-col"),r.hc(18,"actions"),r.Jb(),r.Jb(),r.gc(19,d,9,3,"ion-row",5),r.Jb(),r.Jb(),r.gc(20,h,13,4,"ion-card",6),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&i&&(r.xb(10),r.ic(null==n.survey?null:n.survey.title),r.xb(2),r.ic(null==n.survey?null:n.survey.description),r.xb(4),r.Yb("ngForOf",n.tableHeaders),r.xb(3),r.Yb("ngForOf",null==n.survey?null:n.survey.submissions),r.xb(1),r.Yb("ngIf",n.showdetail))},directives:[s.o,s.D,s.C,s.m,s.y,s.l,s.f,s.h,s.j,s.i,s.g,s.n,t.i,t.j,s.d,s.p,s.r,s.s],styles:["ion-grid[_ngcontent-%COMP%]{--ion-grid-column-padding:10px;border-collapse:collapse;border-style:hidden}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:first-child{background-color:#2dd36f;font-weight:700}ion-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{border:1px solid #000;border-bottom:0;border-right:0}ion-grid[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]:last-child{border-right:1px solid #000}ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]:last-child{border-bottom:1px solid #000}"]}),i})()}];let m=(()=>{class i{}return i.\u0275mod=r.Fb({type:i}),i.\u0275inj=r.Eb({factory:function(n){return new(n||i)},imports:[[c.k.forChild(g)],c.k]}),i})(),p=(()=>{class i{}return i.\u0275mod=r.Fb({type:i}),i.\u0275inj=r.Eb({factory:function(n){return new(n||i)},imports:[[t.b,e.g,s.E,m]]}),i})()}}]);