(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return a}));const r={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},i=()=>{r.selection()},s=()=>{r.selectionStart()},o=()=>{r.selectionChanged()},a=()=>{r.selectionEnd()},c=t=>{r.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=t*e/n-t+"ms",i=2*Math.PI*e/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,i=t*r-t+"ms",s=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":t*e/n-t+"ms"}})}}},"7ch9":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("mrSG"),i=n("fXoL"),s=n("TEn/");let o=(()=>{class t{constructor(t){this.loadingController=t,this.isLoading=!1}present(){return Object(r.a)(this,void 0,void 0,(function*(){return this.isLoading=!0,yield this.loadingController.create({duration:5e3}).then(t=>{t.present().then(()=>{console.log("presented"),this.isLoading||t.dismiss().then(()=>console.log("abort presenting"))})})}))}dismiss(){return Object(r.a)(this,void 0,void 0,(function*(){return this.isLoading=!1,yield this.loadingController.dismiss().then(()=>console.log("dismissed"))}))}}return t.\u0275fac=function(e){return new(e||t)(i.Ob(s.G))},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},EnSQ:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("LRne"),i=n("lJxs"),s=n("vkgz"),o=n("AytR"),a=n("fXoL"),c=n("tk/3"),l=n("tyNb");let u=(()=>{class t{constructor(t,e){this.http=t,this.router=e,this.lastId=20}getsurveys(t){if(this.surveys)return Object(r.a)(this.surveys);{console.log("get getsurveys");let e=`${o.a.serverurl}/api/surveys_byuser/${t}`;return console.log("get getsurveys server",e),this.http.get(e,{withCredentials:!0}).pipe(Object(i.a)(t=>(console.log(t),t),t=>{console.log(t)}))}}getsurveyById(t){console.log("get getsurveys");let e=`${o.a.serverurl}/api/get_surveyByid/${t}`;return console.log("get getsurveys server",e),this.http.get(e,{withCredentials:!0}).pipe(Object(i.a)(t=>(console.log(t),t),t=>{console.log(t)}))}submitSurvey(t,e){return this.http.post(`${o.a.serverurl}/api/submit_survey/${t}`,e,{withCredentials:!0}).pipe(Object(s.a)(t=>(console.log(t),t)))}createSurvey(t){return this.http.post(o.a.serverurl+"/api/backend/surveys",t,{withCredentials:!0}).pipe(Object(s.a)(t=>(console.log(t),t)))}updateSurvey(t){return this.http.post(`${o.a.serverurl}/api/survey/${t._id}`,t,{withCredentials:!0}).pipe(Object(s.a)(t=>(console.log(t),t)))}createQuestion(t){return this.http.post(o.a.serverurl+"/api/survey/add_question",t,{withCredentials:!0}).pipe(Object(s.a)(t=>(console.log(t),t)))}updateQuestion(t){return this.http.post(`${o.a.serverurl}/api/survey/update_question/${t._id}`,t,{withCredentials:!0}).pipe(Object(s.a)(t=>(console.log(t),t)))}createOption(t){return this.http.post(o.a.serverurl+"/api/question/add_option",t,{withCredentials:!0}).pipe(Object(s.a)(t=>(console.log(t),t)))}updateOption(t){return this.http.post(`${o.a.serverurl}/api/question/update_option/${t._id}`,t,{withCredentials:!0}).pipe(Object(s.a)(t=>(console.log(t),t)))}login(t){return this.http.post(o.a.serverurl+"/api/backend/login",t,{withCredentials:!0}).pipe(Object(s.a)(t=>(console.log(t),t)))}logout(){return this.http.post(o.a.serverurl+"/api/backend/logout",{withCredentials:!0}).pipe(Object(s.a)(t=>{console.log(t),localStorage.setItem("isLoggedIn","false"),localStorage.removeItem("mswalitoken"),this.router.navigateByUrl("login")}))}signup(t){return this.http.post(o.a.serverurl+"/api/backend/signup",t,{withCredentials:!0}).pipe(Object(s.a)(t=>(console.log(t),t)))}}return t.\u0275fac=function(e){return new(e||t)(a.Ob(c.a),a.Ob(l.g))},t.\u0275prov=a.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i}));const r=async(t,e,n,r,i)=>{if(t)return t.attachViewToDom(e,n,i,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return r&&r.forEach(t=>s.classList.add(t)),i&&Object.assign(s,i),e.appendChild(s),s.componentOnReady&&await s.componentOnReady(),s},i=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},"U/uv":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("sxy2"),i=n("ItpF"),s=n("2c9M");const o=(t,e)=>{let n,o;const a=(t,r,i)=>{if("undefined"==typeof document)return;const s=document.elementFromPoint(t,r);s&&e(s)?s!==n&&(l(),c(s,i)):l()},c=(t,e)=>{n=t,o||(o=n);const i=n;Object(r.g)(()=>i.classList.add("ion-activated")),e()},l=(t=!1)=>{if(!n)return;const e=n;Object(r.g)(()=>e.classList.remove("ion-activated")),t&&o!==n&&n.click(),n=void 0};return Object(i.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>a(t.currentX,t.currentY,s.a),onMove:t=>a(t.currentX,t.currentY,s.b),onEnd:()=>{l(!0),Object(s.e)(),o=void 0}})}},sPtc:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a}));const r=(t,e)=>null!==e.closest(t),i=(t,e)=>"string"==typeof t&&t.length>0?Object.assign({"ion-color":!0,["ion-color-"+t]:!0},e):e,s=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,r)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n,r)}return!1}}}]);