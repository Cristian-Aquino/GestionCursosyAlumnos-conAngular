import{a as xe,b as Ie,c as Q}from"./chunk-E6VKM4BV.js";import"./chunk-BV5OK7LD.js";import{b as De}from"./chunk-GX6AV423.js";import{a as he,f as St,g as J,h as fe,i as ge,j as ye,k as xt,l as ve,m as Ae,t as Se}from"./chunk-NKJEXYBB.js";import{a as ke,b as _e}from"./chunk-5L3ICMBY.js";import{a as Ee,b as Ce,d as Te,f as Me,g as Re}from"./chunk-OZ7YNWCY.js";import{P as be,aa as Oe,ca as we}from"./chunk-P6QF5PR7.js";import"./chunk-EJJBCPAK.js";import{c as ae,d as ce,e as ue,f as le,g as de,j as U,k as q,l as pe,m as me,n as At}from"./chunk-465FC233.js";import{D as mt,Da as ft,Dc as re,E as D,Ea as gt,Eb as $,G as Bt,H as Vt,Ha as qt,I as Gt,K as Ht,Mb as x,Na as Y,Nb as I,Oa as Jt,Ob as z,Rc as se,Sb as oe,Va as Qt,Vb as vt,X as Zt,Y as Xt,_ as Kt,a as G,aa as ht,b as H,ba as K,ea as Wt,ec as _,fa as Yt,fc as w,g as dt,hb as j,ia as N,ib as yt,ja as L,jb as te,l as Ft,la as k,lb as ee,m as jt,n as $t,na as S,nb as ne,o as zt,oa as R,q as pt,qb as ie,ta as P,u as Ut,ua as F,v as T,xa as W}from"./chunk-LA57Z5ON.js";var tt=class e{constructor(n,t){this.router=n;this.authServicio=t;this.authUsuario$=this.authServicio.authUsuario$}showFiller=!1;authUsuario$;logout(){this.authServicio.logout()}static \u0275fac=function(t){return new(t||e)(yt(q),yt(Q))};static \u0275cmp=P({type:e,selectors:[["app-dashboard"]],decls:31,vars:5,consts:[["drawer",""],["inicioLink","routerLinkActive"],["usuariosLink","routerLinkActive"],["cursosLink","routerLinkActive"],["clasesLink","routerLinkActive"],["inscripcionesLink","routerLinkActive"],["autosize","",1,"example-container"],["mode","side",1,"example-sidenav"],["routerLink","inicio","routerLinkActive","","mat-list-item","",3,"activated"],["routerLink","usuarios","routerLinkActive","","mat-list-item","",3,"activated"],["routerLink","cursos","routerLinkActive","","mat-list-item","",3,"activated"],["routerLink","clases","routerLinkActive","","mat-list-item","",3,"activated"],["routerLink","inscripciones","routerLinkActive","","mat-list-item","",3,"activated"],["mat-list-item","",3,"click"],[1,"example-sidenav-content"],[1,"menu-principal"],[1,"d-flex","justify-content-between","align-items-center","w-100","h-100"],["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon",3,"click"]],template:function(t,i){if(t&1){let o=oe();x(0,"mat-drawer-container",6)(1,"mat-drawer",7,0)(3,"mat-nav-list")(4,"a",8,1),w(6,"Inicio"),I(),x(7,"a",9,2),w(9,"Usuarios"),I(),x(10,"a",10,3),w(12,"Cursos"),I(),x(13,"a",11,4),w(15,"Clases"),I(),x(16,"a",12,5),w(18,"Inscripciones"),I(),x(19,"a",13),vt("click",function(){return ft(o),gt(i.logout())}),w(20,"Cerrar Sesion"),I()()(),x(21,"div",14)(22,"mat-toolbar",15)(23,"div",16)(24,"div")(25,"button",17),vt("click",function(){ft(o);let u=_(2);return gt(u.toggle())}),x(26,"mat-icon"),w(27,"menu"),I()(),x(28,"span"),w(29,"Mi Aplicacion"),I()()()(),z(30,"router-outlet"),I()()}if(t&2){let o=_(5),a=_(8),u=_(11),l=_(14),h=_(17);j(4),$("activated",o.isActive),j(3),$("activated",a.isActive),j(3),$("activated",u.isActive),j(3),$("activated",l.isActive),j(3),$("activated",h.isActive)}},dependencies:[U,pe,me,Ee,Ce,Oe,Te,we,Re,Me],styles:[".example-container[_ngcontent-%COMP%]{width:100%;height:100%}.example-sidenav-content[_ngcontent-%COMP%]{height:100%;padding:20px}.example-sidenav[_ngcontent-%COMP%]{padding:20px;width:200px;background-color:#00a3a1}.menu-principal[_ngcontent-%COMP%]{background-color:#1cdcd9}"]})};var et=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=P({type:e,selectors:[["app-auth"]],decls:4,vars:0,consts:[[2,"background-color","darkgray","height","100vh","display","flex","justify-content","center","align-items","center"]],template:function(t,i){t&1&&(x(0,"div",0)(1,"mat-card")(2,"mat-card-content"),z(3,"router-outlet"),I()()())},dependencies:[U,ke,_e]})};var Pe=(e,n)=>{let t=R(Q),i=R(q);return t.verificarToken().pipe(T(o=>o||i.createUrlTree(["auth","login"])))};var un=[{path:"auth",component:et,loadChildren:()=>import("./chunk-EIWTT2IM.js").then(e=>e.AuthModule)},{path:"dashboard",canActivate:[Pe],component:tt,loadChildren:()=>import("./chunk-MQUUQLT3.js").then(e=>e.DashboardModule)},{path:"**",redirectTo:"auth"}],nt=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=F({type:e});static \u0275inj=L({imports:[At.forRoot(un),At]})};var it=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=P({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(t,i){t&1&&z(0,"router-outlet")},dependencies:[U]})};var ln="@",dn=(()=>{class e{constructor(t,i,o,a,u){this.doc=t,this.delegate=i,this.zone=o,this.animationType=a,this.moduleImpl=u,this._rendererFactoryPromise=null,this.scheduler=R(ee,{optional:!0}),this.loadingSchedulerFn=R(pn,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-CZG4IS4J.js").then(o=>o),i;return this.loadingSchedulerFn?i=this.loadingSchedulerFn(t):i=t(),i.catch(o=>{throw new Yt(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:a})=>{this._engine=o(this.animationType,this.doc);let u=new a(this.delegate,this._engine,this.zone);return this.delegate=u,u})}createRenderer(t,i){let o=this.delegate.createRenderer(t,i);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let a=new It(o);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(u=>{let l=u.createRenderer(t,i);a.use(l),this.scheduler?.notify(10)}).catch(u=>{a.use(o)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(i){te()}}static{this.\u0275prov=N({token:e,factory:e.\u0275fac})}}return e})(),It=class{constructor(n){this.delegate=n,this.replay=[],this.\u0275type=1}use(n){if(this.delegate=n,this.replay!==null){for(let t of this.replay)t(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,t){return this.delegate.createElement(n,t)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,t){this.delegate.appendChild(n,t)}insertBefore(n,t,i,o){this.delegate.insertBefore(n,t,i,o)}removeChild(n,t,i){this.delegate.removeChild(n,t,i)}selectRootElement(n,t){return this.delegate.selectRootElement(n,t)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,t,i,o){this.delegate.setAttribute(n,t,i,o)}removeAttribute(n,t,i){this.delegate.removeAttribute(n,t,i)}addClass(n,t){this.delegate.addClass(n,t)}removeClass(n,t){this.delegate.removeClass(n,t)}setStyle(n,t,i,o){this.delegate.setStyle(n,t,i,o)}removeStyle(n,t,i){this.delegate.removeStyle(n,t,i)}setProperty(n,t,i){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(n,t,i)),this.delegate.setProperty(n,t,i)}setValue(n,t){this.delegate.setValue(n,t)}listen(n,t,i){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(n,t,i)),this.delegate.listen(n,t,i)}shouldReplay(n){return this.replay!==null&&n.startsWith(ln)}},pn=new k("");function Fe(e="animations"){return ie("NgAsyncAnimations"),W([{provide:ne,useFactory:(n,t,i)=>new dn(n,t,i,e),deps:[se,ue,Y]},{provide:Qt,useValue:e==="noop"?"NoopAnimations":"BrowserAnimations"}])}var je={[xe]:Ie};var X="PERFORM_ACTION",mn="REFRESH",Ge="RESET",He="ROLLBACK",Ze="COMMIT",Xe="SWEEP",Ke="TOGGLE_ACTION",hn="SET_ACTIONS_ACTIVE",We="JUMP_TO_STATE",Ye="JUMP_TO_ACTION",Lt="IMPORT_STATE",qe="LOCK_CHANGES",Je="PAUSE_RECORDING",V=class{constructor(n,t){if(this.action=n,this.timestamp=t,this.type=X,typeof n.type>"u")throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')}},bt=class{constructor(){this.type=mn}},Et=class{constructor(n){this.timestamp=n,this.type=Ge}},Ct=class{constructor(n){this.timestamp=n,this.type=He}},Ot=class{constructor(n){this.timestamp=n,this.type=Ze}},Tt=class{constructor(){this.type=Xe}},wt=class{constructor(n){this.id=n,this.type=Ke}};var Mt=class{constructor(n){this.index=n,this.type=We}},Rt=class{constructor(n){this.actionId=n,this.type=Ye}},kt=class{constructor(n){this.nextLiftedState=n,this.type=Lt}},_t=class{constructor(n){this.status=n,this.type=qe}},Dt=class{constructor(n){this.status=n,this.type=Je}};var at=new k("@ngrx/store-devtools Options"),$e=new k("@ngrx/store-devtools Initial Config");function Qe(){return null}var fn="NgRx Store DevTools";function gn(e){let n={maxAge:!1,monitor:Qe,actionSanitizer:void 0,stateSanitizer:void 0,name:fn,serialize:!1,logOnly:!1,autoPause:!1,trace:!1,traceLimit:75,features:{pause:!0,lock:!0,persist:!0,export:!0,import:"custom",jump:!0,skip:!0,reorder:!0,dispatch:!0,test:!0},connectInZone:!1},t=typeof e=="function"?e():e,i=t.logOnly?{pause:!0,export:!0,test:!0}:!1,o=t.features||i||n.features;o.import===!0&&(o.import="custom");let a=Object.assign({},n,{features:o},t);if(a.maxAge&&a.maxAge<2)throw new Error(`Devtools 'maxAge' cannot be less than 2, got ${a.maxAge}`);return a}function ze(e,n){return e.filter(t=>n.indexOf(t)<0)}function tn(e){let{computedStates:n,currentStateIndex:t}=e;if(t>=n.length){let{state:o}=n[n.length-1];return o}let{state:i}=n[t];return i}function Z(e){return new V(e,+Date.now())}function yn(e,n){return Object.keys(n).reduce((t,i)=>{let o=Number(i);return t[o]=en(e,n[o],o),t},{})}function en(e,n,t){return H(G({},n),{action:e(n.action,t)})}function vn(e,n){return n.map((t,i)=>({state:nn(e,t.state,i),error:t.error}))}function nn(e,n,t){return e(n,t)}function on(e){return e.predicate||e.actionsSafelist||e.actionsBlocklist}function An(e,n,t,i){let o=[],a={},u=[];return e.stagedActionIds.forEach((l,h)=>{let r=e.actionsById[l];r&&(h&&Pt(e.computedStates[h],r,n,t,i)||(a[l]=r,o.push(l),u.push(e.computedStates[h])))}),H(G({},e),{stagedActionIds:o,actionsById:a,computedStates:u})}function Pt(e,n,t,i,o){let a=t&&!t(e,n.action),u=i&&!n.action.type.match(i.map(h=>Ue(h)).join("|")),l=o&&n.action.type.match(o.map(h=>Ue(h)).join("|"));return a||u||l}function Ue(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function rn(e){return{ngZone:e?R(Y):null,connectInZone:e}}var ct=(()=>{class e extends J{static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=qt(e)))(o||e)}})()}static{this.\u0275prov=N({token:e,factory:e.\u0275fac})}}return e})(),ot={START:"START",DISPATCH:"DISPATCH",STOP:"STOP",ACTION:"ACTION"},Nt=new k("@ngrx/store-devtools Redux Devtools Extension"),sn=(()=>{class e{constructor(t,i,o){this.config=i,this.dispatcher=o,this.zoneConfig=rn(this.config.connectInZone),this.devtoolsExtension=t,this.createActionStreams()}notify(t,i){if(this.devtoolsExtension)if(t.type===X){if(i.isLocked||i.isPaused)return;let o=tn(i);if(on(this.config)&&Pt(o,t,this.config.predicate,this.config.actionsSafelist,this.config.actionsBlocklist))return;let a=this.config.stateSanitizer?nn(this.config.stateSanitizer,o,i.currentStateIndex):o,u=this.config.actionSanitizer?en(this.config.actionSanitizer,t,i.nextActionId):t;this.sendToReduxDevtools(()=>this.extensionConnection.send(u,a))}else{let o=H(G({},i),{stagedActionIds:i.stagedActionIds,actionsById:this.config.actionSanitizer?yn(this.config.actionSanitizer,i.actionsById):i.actionsById,computedStates:this.config.stateSanitizer?vn(this.config.stateSanitizer,i.computedStates):i.computedStates});this.sendToReduxDevtools(()=>this.devtoolsExtension.send(null,o,this.getExtensionConfig(this.config)))}}createChangesObservable(){return this.devtoolsExtension?new dt(t=>{let i=this.zoneConfig.connectInZone?this.zoneConfig.ngZone.runOutsideAngular(()=>this.devtoolsExtension.connect(this.getExtensionConfig(this.config))):this.devtoolsExtension.connect(this.getExtensionConfig(this.config));return this.extensionConnection=i,i.init(),i.subscribe(o=>t.next(o)),i.unsubscribe}):$t}createActionStreams(){let t=this.createChangesObservable().pipe(Xt()),i=t.pipe(D(r=>r.type===ot.START)),o=t.pipe(D(r=>r.type===ot.STOP)),a=t.pipe(D(r=>r.type===ot.DISPATCH),T(r=>this.unwrapAction(r.payload)),Vt(r=>r.type===Lt?this.dispatcher.pipe(D(y=>y.type===xt),Ut(1e3),Gt(1e3),T(()=>r),Bt(()=>pt(r)),Ht(1)):pt(r))),l=t.pipe(D(r=>r.type===ot.ACTION),T(r=>this.unwrapAction(r.payload))).pipe(K(o)),h=a.pipe(K(o));this.start$=i.pipe(K(o)),this.actions$=this.start$.pipe(ht(()=>l)),this.liftedActions$=this.start$.pipe(ht(()=>h))}unwrapAction(t){return typeof t=="string"?(0,eval)(`(${t})`):t}getExtensionConfig(t){let i={name:t.name,features:t.features,serialize:t.serialize,autoPause:t.autoPause??!1,trace:t.trace??!1,traceLimit:t.traceLimit??75};return t.maxAge!==!1&&(i.maxAge=t.maxAge),i}sendToReduxDevtools(t){try{t()}catch(i){console.warn("@ngrx/store-devtools: something went wrong inside the redux devtools",i)}}static{this.\u0275fac=function(i){return new(i||e)(S(Nt),S(at),S(ct))}}static{this.\u0275prov=N({token:e,factory:e.\u0275fac})}}return e})(),st={type:St},Sn="@ngrx/store-devtools/recompute",xn={type:Sn};function an(e,n,t,i,o){if(i)return{state:t,error:"Interrupted by an error up the chain"};let a=t,u;try{a=e(t,n)}catch(l){u=l.toString(),o.handleError(l)}return{state:a,error:u}}function rt(e,n,t,i,o,a,u,l,h){if(n>=e.length&&e.length===a.length)return e;let r=e.slice(0,n),y=a.length-(h?1:0);for(let s=n;s<y;s++){let p=a[s],A=o[p].action,d=r[s-1],c=d?d.state:i,E=d?d.error:void 0,C=u.indexOf(p)>-1?d:an(t,A,c,E,l);r.push(C)}return h&&r.push(e[e.length-1]),r}function In(e,n){return{monitorState:n(void 0,{}),nextActionId:1,actionsById:{0:Z(st)},stagedActionIds:[0],skippedActionIds:[],committedState:e,currentStateIndex:0,computedStates:[],isLocked:!1,isPaused:!1}}function bn(e,n,t,i,o={}){return a=>(u,l)=>{let{monitorState:h,actionsById:r,nextActionId:y,stagedActionIds:s,skippedActionIds:p,committedState:A,currentStateIndex:d,computedStates:c,isLocked:E,isPaused:v}=u||n;u||(r=Object.create(r));function C(g){let f=g,M=s.slice(1,f+1);for(let b=0;b<M.length;b++)if(c[b+1].error){f=b,M=s.slice(1,f+1);break}else delete r[M[b]];p=p.filter(b=>M.indexOf(b)===-1),s=[0,...s.slice(f+1)],A=c[f].state,c=c.slice(f),d=d>f?d-f:0}function O(){r={0:Z(st)},y=1,s=[0],p=[],A=c[d].state,d=0,c=[]}let m=0;switch(l.type){case qe:{E=l.status,m=1/0;break}case Je:{v=l.status,v?(s=[...s,y],r[y]=new V({type:"@ngrx/devtools/pause"},+Date.now()),y++,m=s.length-1,c=c.concat(c[c.length-1]),d===s.length-2&&d++,m=1/0):O();break}case Ge:{r={0:Z(st)},y=1,s=[0],p=[],A=e,d=0,c=[];break}case Ze:{O();break}case He:{r={0:Z(st)},y=1,s=[0],p=[],d=0,c=[];break}case Ke:{let{id:g}=l;p.indexOf(g)===-1?p=[g,...p]:p=p.filter(M=>M!==g),m=s.indexOf(g);break}case hn:{let{start:g,end:f,active:M}=l,b=[];for(let lt=g;lt<f;lt++)b.push(lt);M?p=ze(p,b):p=[...p,...b],m=s.indexOf(g);break}case We:{d=l.index,m=1/0;break}case Ye:{let g=s.indexOf(l.actionId);g!==-1&&(d=g),m=1/0;break}case Xe:{s=ze(s,p),p=[],d=Math.min(d,s.length-1);break}case X:{if(E)return u||n;if(v||u&&Pt(u.computedStates[d],l,o.predicate,o.actionsSafelist,o.actionsBlocklist)){let f=c[c.length-1];c=[...c.slice(0,-1),an(a,l.action,f.state,f.error,t)],m=1/0;break}o.maxAge&&s.length===o.maxAge&&C(1),d===s.length-1&&d++;let g=y++;r[g]=l,s=[...s,g],m=s.length-1;break}case Lt:{({monitorState:h,actionsById:r,nextActionId:y,stagedActionIds:s,skippedActionIds:p,committedState:A,currentStateIndex:d,computedStates:c,isLocked:E,isPaused:v}=l.nextLiftedState);break}case St:{m=0,o.maxAge&&s.length>o.maxAge&&(c=rt(c,m,a,A,r,s,p,t,v),C(s.length-o.maxAge),m=1/0);break}case xt:{if(c.filter(f=>f.error).length>0)m=0,o.maxAge&&s.length>o.maxAge&&(c=rt(c,m,a,A,r,s,p,t,v),C(s.length-o.maxAge),m=1/0);else{if(!v&&!E){d===s.length-1&&d++;let f=y++;r[f]=new V(l,+Date.now()),s=[...s,f],m=s.length-1,c=rt(c,m,a,A,r,s,p,t,v)}c=c.map(f=>H(G({},f),{state:a(f.state,xn)})),d=s.length-1,o.maxAge&&s.length>o.maxAge&&C(s.length-o.maxAge),m=1/0}break}default:{m=1/0;break}}return c=rt(c,m,a,A,r,s,p,t,v),h=i(h,l),{monitorState:h,actionsById:r,nextActionId:y,stagedActionIds:s,skippedActionIds:p,committedState:A,currentStateIndex:d,computedStates:c,isLocked:E,isPaused:v}}}var Be=(()=>{class e{constructor(t,i,o,a,u,l,h,r){let y=In(h,r.monitor),s=bn(h,y,l,r.monitor,r),p=mt(mt(i.asObservable().pipe(Kt(1)),a.actions$).pipe(T(Z)),t,a.liftedActions$).pipe(zt(jt)),A=o.pipe(T(s)),d=rn(r.connectInZone),c=new Ft(1);this.liftedStateSubscription=p.pipe(Wt(A),Ve(d),Zt(({state:C},[O,m])=>{let g=m(C,O);return O.type!==X&&on(r)&&(g=An(g,r.predicate,r.actionsSafelist,r.actionsBlocklist)),a.notify(O,g),{state:g,action:O}},{state:y,action:null})).subscribe(({state:C,action:O})=>{if(c.next(C),O.type===X){let m=O.action;u.next(m)}}),this.extensionStartSubscription=a.start$.pipe(Ve(d)).subscribe(()=>{this.refresh()});let E=c.asObservable(),v=E.pipe(T(tn));Object.defineProperty(v,"state",{value:he(v,{manualCleanup:!0,requireSync:!0})}),this.dispatcher=t,this.liftedState=E,this.state=v}ngOnDestroy(){this.liftedStateSubscription.unsubscribe(),this.extensionStartSubscription.unsubscribe()}dispatch(t){this.dispatcher.next(t)}next(t){this.dispatcher.next(t)}error(t){}complete(){}performAction(t){this.dispatch(new V(t,+Date.now()))}refresh(){this.dispatch(new bt)}reset(){this.dispatch(new Et(+Date.now()))}rollback(){this.dispatch(new Ct(+Date.now()))}commit(){this.dispatch(new Ot(+Date.now()))}sweep(){this.dispatch(new Tt)}toggleAction(t){this.dispatch(new wt(t))}jumpToAction(t){this.dispatch(new Rt(t))}jumpToState(t){this.dispatch(new Mt(t))}importState(t){this.dispatch(new kt(t))}lockChanges(t){this.dispatch(new _t(t))}pauseRecording(t){this.dispatch(new Dt(t))}static{this.\u0275fac=function(i){return new(i||e)(S(ct),S(J),S(ge),S(sn),S(ve),S(Jt),S(fe),S(at))}}static{this.\u0275prov=N({token:e,factory:e.\u0275fac})}}return e})();function Ve({ngZone:e,connectInZone:n}){return t=>n?new dt(i=>t.subscribe({next:o=>e.run(()=>i.next(o)),error:o=>e.run(()=>i.error(o)),complete:()=>e.run(()=>i.complete())})):t}var En=new k("@ngrx/store-devtools Is Devtools Extension or Monitor Present");function Cn(e,n){return!!e||n.monitor!==Qe}function On(){let e="__REDUX_DEVTOOLS_EXTENSION__";return typeof window=="object"&&typeof window[e]<"u"?window[e]:null}function Tn(e={}){return W([sn,ct,Be,{provide:$e,useValue:e},{provide:En,deps:[Nt,at],useFactory:Cn},{provide:Nt,useFactory:On},{provide:at,deps:[$e],useFactory:gn},{provide:Ae,deps:[Be],useFactory:wn},{provide:ye,useExisting:ct}])}function wn(e){return e.state}var cn=(()=>{class e{static instrument(t={}){return{ngModule:e,providers:[Tn(t)]}}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275mod=F({type:e})}static{this.\u0275inj=L({})}}return e})();var ut=class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=F({type:e,bootstrap:[it]});static \u0275inj=L({providers:[Fe(),be(),ae(ce())],imports:[de,nt,Se.forRoot(je,{}),cn.instrument({maxAge:25,logOnly:!re()}),De.forRoot([])]})};le().bootstrapModule(ut,{ngZoneEventCoalescing:!0}).catch(e=>console.error(e));