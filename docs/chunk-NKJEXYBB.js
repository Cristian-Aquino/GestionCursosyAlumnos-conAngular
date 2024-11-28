import{Ba as ce,Dc as M,Ha as ue,Ka as D,Kc as j,Na as ae,O as re,W as oe,X as ie,a as f,b as h,ea as se,fa as A,g as S,ia as m,j as X,ja as F,k as b,la as c,m as ee,na as d,o as te,oa as R,pa as C,sb as _,ua as I,v as ne}from"./chunk-LA57Z5ON.js";function k(e,r){let t=!r?.manualCleanup;t&&!r?.injector&&ce(k);let n=t?r?.injector?.get(D)??R(D):null,o=qe(r?.equal),i;r?.requireSync?i=_({kind:0},{equal:o}):i=_({kind:1,value:r?.initialValue},{equal:o});let s=e.subscribe({next:u=>i.set({kind:1,value:u}),error:u=>{if(r?.rejectErrors)throw u;i.set({kind:2,error:u})}});if(r?.requireSync&&i().kind===0)throw new A(601,!1);return n?.onDestroy(s.unsubscribe.bind(s)),j(()=>{let u=i();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new A(601,!1)}},{equal:r?.equal})}function qe(e=Object.is){return(r,t)=>r.kind===1&&t.kind===1&&e(r.value,t.value)}var z={};function Ke(e,r){if(z[e]=(z[e]||0)+1,typeof r=="function")return U(e,(...n)=>h(f({},r(...n)),{type:e}));switch(r?r._as:"empty"){case"empty":return U(e,()=>({type:e}));case"props":return U(e,n=>h(f({},n),{type:e}));default:throw new Error("Unexpected config.")}}function Le(){return{_as:"props",_p:void 0}}function U(e,r){return Object.defineProperty(r,"type",{value:e,writable:!1})}function K(e){return e.charAt(0).toUpperCase()+e.substring(1)}function Be(e){return e.charAt(0).toLowerCase()+e.substring(1)}function tn(e){let{source:r,events:t}=e;return Object.keys(t).reduce((n,o)=>h(f({},n),{[Ge(o)]:Ke(Ze(r,o),t[o])}),{})}function nn(){return Le()}function Ge(e){return e.trim().split(" ").map((r,t)=>t===0?Be(r):K(r)).join("")}function Ze(e,r){return`[${e}] ${r}`}var je="@ngrx/store/init",v=(()=>{class e extends b{constructor(){super({type:je})}next(t){if(typeof t=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof t>"u")throw new TypeError("Actions must be objects");if(typeof t.type>"u")throw new TypeError("Actions must have a type property");super.next(t)}complete(){}ngOnDestroy(){super.complete()}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),He=[v],we=new c("@ngrx/store Internal Root Guard"),de=new c("@ngrx/store Internal Initial State"),L=new c("@ngrx/store Initial State"),xe=new c("@ngrx/store Reducer Factory"),le=new c("@ngrx/store Internal Reducer Factory Provider"),Oe=new c("@ngrx/store Initial Reducers"),N=new c("@ngrx/store Internal Initial Reducers"),fe=new c("@ngrx/store Store Features"),pe=new c("@ngrx/store Internal Store Reducers"),P=new c("@ngrx/store Internal Feature Reducers"),ye=new c("@ngrx/store Internal Feature Configs"),Te=new c("@ngrx/store Internal Store Features"),he=new c("@ngrx/store Internal Feature Reducers Token"),Ae=new c("@ngrx/store Feature Reducers"),Re=new c("@ngrx/store User Provided Meta Reducers"),w=new c("@ngrx/store Meta Reducers"),me=new c("@ngrx/store Internal Resolved Meta Reducers"),ve=new c("@ngrx/store User Runtime Checks Config"),ge=new c("@ngrx/store Internal User Runtime Checks Config"),g=new c("@ngrx/store Internal Runtime Checks"),B=new c("@ngrx/store Check if Action types are unique"),rn=new c("@ngrx/store Root Store Provider"),on=new c("@ngrx/store Feature State Provider");function G(e,r={}){let t=Object.keys(e),n={};for(let i=0;i<t.length;i++){let s=t[i];typeof e[s]=="function"&&(n[s]=e[s])}let o=Object.keys(n);return function(s,u){s=s===void 0?r:s;let l=!1,p={};for(let a=0;a<o.length;a++){let y=o[a],$e=n[y],W=s[y],J=$e(W,u);p[y]=J,l=l||J!==W}return l?p:s}}function Ye(e,r){return Object.keys(e).filter(t=>t!==r).reduce((t,n)=>Object.assign(t,{[n]:e[n]}),{})}function Ce(...e){return function(r){if(e.length===0)return r;let t=e[e.length-1];return e.slice(0,-1).reduceRight((o,i)=>i(o),t(r))}}function De(e,r){return Array.isArray(r)&&r.length>0&&(e=Ce.apply(null,[...r,e])),(t,n)=>{let o=e(t);return(i,s)=>(i=i===void 0?n:i,o(i,s))}}function Qe(e){let r=Array.isArray(e)&&e.length>0?Ce(...e):t=>t;return(t,n)=>(t=r(t),(o,i)=>(o=o===void 0?n:o,t(o,i)))}var E=class extends S{},x=class extends v{},We="@ngrx/store/update-reducers",O=(()=>{class e extends b{get currentReducers(){return this.reducers}constructor(t,n,o,i){super(i(o,n)),this.dispatcher=t,this.initialState=n,this.reducers=o,this.reducerFactory=i}addFeature(t){this.addFeatures([t])}addFeatures(t){let n=t.reduce((o,{reducers:i,reducerFactory:s,metaReducers:u,initialState:l,key:p})=>{let a=typeof i=="function"?Qe(u)(i,l):De(s,u)(i,l);return o[p]=a,o},{});this.addReducers(n)}removeFeature(t){this.removeFeatures([t])}removeFeatures(t){this.removeReducers(t.map(n=>n.key))}addReducer(t,n){this.addReducers({[t]:n})}addReducers(t){this.reducers=f(f({},this.reducers),t),this.updateReducers(Object.keys(t))}removeReducer(t){this.removeReducers([t])}removeReducers(t){t.forEach(n=>{this.reducers=Ye(this.reducers,n)}),this.updateReducers(t)}updateReducers(t){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:We,features:t})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(n){return new(n||e)(d(x),d(L),d(Oe),d(xe))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),Je=[O,{provide:E,useExisting:O},{provide:x,useExisting:v}],Z=(()=>{class e extends X{ngOnDestroy(){this.complete()}static{this.\u0275fac=(()=>{let t;return function(o){return(t||(t=ue(e)))(o||e)}})()}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),Xe=[Z],T=class extends S{},Ee=(()=>{class e extends b{static{this.INIT=je}constructor(t,n,o,i){super(i);let u=t.pipe(te(ee)).pipe(se(n)),l={state:i},p=u.pipe(ie(et,l));this.stateSubscription=p.subscribe(({state:a,action:y})=>{this.next(a),o.next(y)}),this.state=k(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.\u0275fac=function(n){return new(n||e)(d(v),d(E),d(Z),d(L))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})();function et(e={state:void 0},[r,t]){let{state:n}=e;return{state:t(n,r),action:r}}var tt=[Ee,{provide:T,useExisting:Ee}],H=(()=>{class e extends S{constructor(t,n,o){super(),this.actionsObserver=n,this.reducerManager=o,this.source=t,this.state=t.state}select(t,...n){return rt.call(null,t,...n)(this)}selectSignal(t,n){return j(()=>t(this.state()),n)}lift(t){let n=new e(this,this.actionsObserver,this.reducerManager);return n.operator=t,n}dispatch(t){this.actionsObserver.next(t)}next(t){this.actionsObserver.next(t)}error(t){this.actionsObserver.error(t)}complete(){this.actionsObserver.complete()}addReducer(t,n){this.reducerManager.addReducer(t,n)}removeReducer(t){this.reducerManager.removeReducer(t)}static{this.\u0275fac=function(n){return new(n||e)(d(T),d(v),d(O))}}static{this.\u0275prov=m({token:e,factory:e.\u0275fac})}}return e})(),nt=[H];function rt(e,r,...t){return function(o){let i;if(typeof e=="string"){let s=[r,...t].filter(Boolean);i=o.pipe(oe(e,...s))}else if(typeof e=="function")i=o.pipe(ne(s=>e(s,r)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return i.pipe(re())}}var Y="https://ngrx.io/guide/store/configuration/runtime-checks";function Se(e){return e===void 0}function be(e){return e===null}function _e(e){return Array.isArray(e)}function ot(e){return typeof e=="string"}function it(e){return typeof e=="boolean"}function st(e){return typeof e=="number"}function Me(e){return typeof e=="object"&&e!==null}function ct(e){return Me(e)&&!_e(e)}function ke(e){if(!ct(e))return!1;let r=Object.getPrototypeOf(e);return r===Object.prototype||r===null}function V(e){return typeof e=="function"}function ut(e){return V(e)&&e.hasOwnProperty("\u0275cmp")}function at(e,r){return Object.prototype.hasOwnProperty.call(e,r)}var dt=!1;function lt(){return dt}function Fe(e,r){return e===r}function ft(e,r,t){for(let n=0;n<e.length;n++)if(!t(e[n],r[n]))return!0;return!1}function Ue(e,r=Fe,t=Fe){let n=null,o=null,i;function s(){n=null,o=null}function u(a=void 0){i={result:a}}function l(){i=void 0}function p(){if(i!==void 0)return i.result;if(!n)return o=e.apply(null,arguments),n=arguments,o;if(!ft(arguments,n,r))return o;let a=e.apply(null,arguments);return n=arguments,t(o,a)?o:(o=a,a)}return{memoized:p,reset:s,setResult:u,clearResult:l}}function Ne(...e){return yt(Ue)(...e)}function pt(e,r,t,n){if(t===void 0){let i=r.map(s=>s(e));return n.memoized.apply(null,i)}let o=r.map(i=>i(e,t));return n.memoized.apply(null,[...o,t])}function yt(e,r={stateFn:pt}){return function(...t){let n=t;if(Array.isArray(n[0])){let[a,...y]=n;n=[...a,...y]}else n.length===1&&Rt(n[0])&&(n=mt(n[0]));let o=n.slice(0,n.length-1),i=n[n.length-1],s=o.filter(a=>a.release&&typeof a.release=="function"),u=e(function(...a){return i.apply(null,a)}),l=Ue(function(a,y){return r.stateFn.apply(null,[a,o,y,u])});function p(){l.reset(),u.reset(),s.forEach(a=>a.release())}return Object.assign(l.memoized,{release:p,projector:u.memoized,setResult:l.setResult,clearResult:l.clearResult})}}function ht(e){return Ne(r=>{let t=r[e];return!lt()&&M()&&!(e in r)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),t},r=>r)}function Rt(e){return!!e&&typeof e=="object"&&Object.values(e).every(r=>typeof r=="function")}function mt(e){let r=Object.values(e),t=Object.keys(e),n=(...o)=>t.reduce((i,s,u)=>h(f({},i),{[s]:o[u]}),{});return[...r,n]}function sn(e){let{name:r,reducer:t,extraSelectors:n}=e,o=ht(r),i=vt(o,t),s=f({[`select${K(r)}State`]:o},i),u=n?n(s):{};return f(f({name:r,reducer:t},s),u)}function vt(e,r){let t=gt(r);return(ke(t)?Object.keys(t):[]).reduce((o,i)=>h(f({},o),{[`select${K(i)}`]:Ne(e,s=>s?.[i])}),{})}function gt(e){return e(void 0,{type:"@ngrx/feature/init"})}function Et(e){return e instanceof c?R(e):e}function St(e,r){return r.map((t,n)=>{if(e[n]instanceof c){let o=R(e[n]);return{key:t.key,reducerFactory:o.reducerFactory?o.reducerFactory:G,metaReducers:o.metaReducers?o.metaReducers:[],initialState:o.initialState}}return t})}function bt(e){return e.map(r=>r instanceof c?R(r):r)}function Pe(e){return typeof e=="function"?e():e}function Ft(e,r){return e.concat(r)}function It(){if(R(H,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function jt(e,r){return function(t,n){let o=r.action(n)?$(n):n,i=e(t,o);return r.state()?$(i):i}}function $(e){Object.freeze(e);let r=V(e);return Object.getOwnPropertyNames(e).forEach(t=>{if(!t.startsWith("\u0275")&&at(e,t)&&(!r||t!=="caller"&&t!=="callee"&&t!=="arguments")){let n=e[t];(Me(n)||V(n))&&!Object.isFrozen(n)&&$(n)}}),e}function wt(e,r){return function(t,n){if(r.action(n)){let i=q(n);Ie(i,"action")}let o=e(t,n);if(r.state()){let i=q(o);Ie(i,"state")}return o}}function q(e,r=[]){return(Se(e)||be(e))&&r.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,o)=>{if(n)return n;let i=e[o];return ut(i)?n:Se(i)||be(i)||st(i)||it(i)||ot(i)||_e(i)?!1:ke(i)?q(i,[...r,o]):{path:[...r,o],value:i}},!1)}function Ie(e,r){if(e===!1)return;let t=e.path.join("."),n=new Error(`Detected unserializable ${r} at "${t}". ${Y}#strict${r}serializability`);throw n.value=e.value,n.unserializablePath=t,n}function xt(e,r){return function(t,n){if(r.action(n)&&!ae.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${Y}#strictactionwithinngzone`);return e(t,n)}}function Ot(e){return M()?f({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function Tt({strictActionSerializability:e,strictStateSerializability:r}){return t=>e||r?wt(t,{action:n=>e&&!Q(n),state:()=>r}):t}function At({strictActionImmutability:e,strictStateImmutability:r}){return t=>e||r?jt(t,{action:n=>e&&!Q(n),state:()=>r}):t}function Q(e){return e.type.startsWith("@ngrx")}function Ct({strictActionWithinNgZone:e}){return r=>e?xt(r,{action:t=>e&&!Q(t)}):r}function Dt(e){return[{provide:ge,useValue:e},{provide:ve,useFactory:_t,deps:[ge]},{provide:g,deps:[ve],useFactory:Ot},{provide:w,multi:!0,deps:[g],useFactory:At},{provide:w,multi:!0,deps:[g],useFactory:Tt},{provide:w,multi:!0,deps:[g],useFactory:Ct}]}function ze(){return[{provide:B,multi:!0,deps:[g],useFactory:Mt}]}function _t(e){return e}function Mt(e){if(!e.strictActionTypeUniqueness)return;let r=Object.entries(z).filter(([,t])=>t>1).map(([t])=>t);if(r.length)throw new Error(`Action types are registered more than once, ${r.map(t=>`"${t}"`).join(", ")}. ${Y}#strictactiontypeuniqueness`)}function kt(e={},r={}){return[{provide:we,useFactory:It},{provide:de,useValue:r.initialState},{provide:L,useFactory:Pe,deps:[de]},{provide:N,useValue:e},{provide:pe,useExisting:e instanceof c?e:N},{provide:Oe,deps:[N,[new C(pe)]],useFactory:Et},{provide:Re,useValue:r.metaReducers?r.metaReducers:[]},{provide:me,deps:[w,Re],useFactory:Ft},{provide:le,useValue:r.reducerFactory?r.reducerFactory:G},{provide:xe,deps:[le,me],useFactory:De},He,Je,Xe,tt,nt,Dt(r.runtimeChecks),ze()]}function Ut(e,r,t={}){return[{provide:ye,multi:!0,useValue:e instanceof Object?{}:t},{provide:fe,multi:!0,useValue:{key:e instanceof Object?e.name:e,reducerFactory:!(t instanceof c)&&t.reducerFactory?t.reducerFactory:G,metaReducers:!(t instanceof c)&&t.metaReducers?t.metaReducers:[],initialState:!(t instanceof c)&&t.initialState?t.initialState:void 0}},{provide:Te,deps:[ye,fe],useFactory:St},{provide:P,multi:!0,useValue:e instanceof Object?e.reducer:r},{provide:he,multi:!0,useExisting:r instanceof c?r:P},{provide:Ae,multi:!0,deps:[P,[new C(he)]],useFactory:bt},ze()]}var Ve=(()=>{class e{constructor(t,n,o,i,s,u){}static{this.\u0275fac=function(n){return new(n||e)(d(v),d(E),d(Z),d(H),d(we,8),d(B,8))}}static{this.\u0275mod=I({type:e})}static{this.\u0275inj=F({})}}return e})(),Nt=(()=>{class e{constructor(t,n,o,i,s){this.features=t,this.featureReducers=n,this.reducerManager=o;let u=t.map((l,p)=>{let y=n.shift()[p];return h(f({},l),{reducers:y,initialState:Pe(l.initialState)})});o.addFeatures(u)}ngOnDestroy(){this.reducerManager.removeFeatures(this.features)}static{this.\u0275fac=function(n){return new(n||e)(d(Te),d(Ae),d(O),d(Ve),d(B,8))}}static{this.\u0275mod=I({type:e})}static{this.\u0275inj=F({})}}return e})(),cn=(()=>{class e{static forRoot(t,n){return{ngModule:Ve,providers:[...kt(t,n)]}}static forFeature(t,n,o={}){return{ngModule:Nt,providers:[...Ut(t,n,o)]}}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275mod=I({type:e})}static{this.\u0275inj=F({})}}return e})();function un(...e){let r=e.pop(),t=e.map(n=>n.type);return{reducer:r,types:t}}function an(e,...r){let t=new Map;for(let n of r)for(let o of n.types){let i=t.get(o);if(i){let s=(u,l)=>n.reducer(i(u,l),l);t.set(o,s)}else t.set(o,n.reducer)}return function(n=e,o){let i=t.get(o.type);return i?i(n,o):n}}export{k as a,Ke as b,Le as c,tn as d,nn as e,je as f,v as g,L as h,E as i,x as j,We as k,Z as l,T as m,H as n,Ne as o,ht as p,sn as q,Ve as r,Nt as s,cn as t,un as u,an as v};