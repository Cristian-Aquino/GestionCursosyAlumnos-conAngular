import{a as si,b as ci}from"./chunk-GX6AV423.js";import{c as P,d as k,e as O,n as J,o as g,p as K,q as L,t as z,u as f,v as V}from"./chunk-NKJEXYBB.js";import{a as ni}from"./chunk-C266OGI4.js";import{a as oi,d as ri,f as ei,y as ti}from"./chunk-MT3NPNYF.js";import"./chunk-5L3ICMBY.js";import{$ as q,X as Y,fa as M,ha as H,ia as X,ka as Z,la as Q,ma as W,na as ii}from"./chunk-P6QF5PR7.js";import"./chunk-EJJBCPAK.js";import{n as y}from"./chunk-465FC233.js";import{$c as R,Eb as a,Mb as e,Nb as n,Vb as E,Zc as $,a as m,b as u,bd as G,cd as T,fc as s,gc as D,hb as c,hc as j,ia as N,ib as h,ic as B,ja as I,na as _,oc as l,pc as d,ta as w,ua as C,zb as v}from"./chunk-LA57Z5ON.js";var t=k({source:"Inscripcion",events:{"Cargar Inscripcions":O(),"Cargar Cursos Options":O(),"Cargar Alumnos Options":O(),"Crear Inscripcion":P()}});var x="inscripcion",di=[{id:"reaf",idUsuario:"45fa",idCurso:"dasr"},{id:"fasd",idUsuario:"s54f",idCurso:"1da5"}],fi=[{id:"2Lms",nombre:"React JS",cantidadClases:13,fechaCreacion:new Date},{id:"3fSc",nombre:"Android",cantidadClases:25,fechaCreacion:new Date},{id:"sdK3",nombre:"Java",cantidadClases:18,fechaCreacion:new Date}],Ii=[{id:"8ec5",nombre:"Jorge",apellido:"Espinoza",email:"jesponiza@gmail.com",password:"123456",token:"25derghvae145tgdw5n7",fecha_creado:new Date,rol:"ADMIN"},{id:"QPa8",nombre:"nombre",apellido:"parrado",email:"npendiente@gmail.com",password:"cTMj9zYG",token:"HGrgHVMwXxSkRFcafYhA",fecha_creado:new Date,rol:"Usuario"},{id:"Fcna",nombre:"eJEMPLO",apellido:"UNO",email:"juno@gmail.com",password:"bccEFgUp",token:"CwSoZypd4xLu1nXfTZJK",fecha_creado:new Date,rol:"Usuario"}],Ci={inscripciones:[],cursosOptions:[],usuariosOptions:[]},Oi=V(Ci,f(t.cargarInscripcions,i=>u(m({},i),{inscripciones:[...di]})),f(t.cargarCursosOptions,i=>u(m({},i),{cursosOptions:[...fi]})),f(t.cargarAlumnosOptions,i=>u(m({},i),{usuariosOptions:[...Ii]})),f(t.crearInscripcion,(i,r)=>u(m({},i),{inscripciones:[...i.inscripciones,{id:ni(4),idCurso:r.idCurso,idUsuario:r.idUsuario}]}))),ai=L({name:x,reducer:Oi});var U=K(x),pi=g(U,i=>i.inscripciones),mi=g(U,i=>i.cursosOptions),ui=g(U,i=>i.usuariosOptions);function Si(i,r){if(i&1&&(e(0,"mat-option",5),s(1),n()),i&2){let o=r.$implicit;a("value",o.id),c(),j(" ",o.nombre," ")}}function bi(i,r){if(i&1&&(e(0,"mat-option",5),s(1),n()),i&2){let o=r.$implicit;a("value",o.id),c(),B(" ",o.nombre," ",o.apellido," ")}}var S=class i{constructor(r,o){this.store=r;this.formBuilder=o;this.inscripcionForm=this.formBuilder.group({idCurso:[null,[M.required]],idUsuario:[null,[M.required]]}),this.inscripciones$=this.store.select(pi),this.cursosOptions$=this.store.select(mi),this.usuariosOptions$=this.store.select(ui)}inscripciones$;cursosOptions$;usuariosOptions$;inscripcionForm;ngOnInit(){this.store.dispatch(t.cargarInscripcions()),this.store.dispatch(t.cargarCursosOptions()),this.store.dispatch(t.cargarAlumnosOptions())}onSubmit(){this.inscripcionForm.invalid?this.inscripcionForm.markAllAsTouched():(this.store.dispatch(t.crearInscripcion(this.inscripcionForm.value)),this.inscripcionForm.reset())}static \u0275fac=function(o){return new(o||i)(h(J),h(ii))};static \u0275cmp=w({type:i,selectors:[["app-inscripciones"]],decls:19,vars:12,consts:[[3,"ngSubmit","formGroup"],["formControlName","idCurso"],[3,"value",4,"ngFor","ngForOf"],["formControlName","idUsuario"],["type","submit","mat-flat-button",""],[3,"value"]],template:function(o,p){o&1&&(e(0,"form",0),E("ngSubmit",function(){return p.onSubmit()}),e(1,"mat-form-field")(2,"mat-label"),s(3,"Curso"),n(),e(4,"mat-select",1),v(5,Si,2,2,"mat-option",2),l(6,"async"),n()(),e(7,"mat-form-field")(8,"mat-label"),s(9,"Alumno"),n(),e(10,"mat-select",3),v(11,bi,2,3,"mat-option",2),l(12,"async"),n()(),e(13,"button",4),s(14,"Inscribir"),n()(),e(15,"pre"),s(16),l(17,"async"),l(18,"json"),n()),o&2&&(a("formGroup",p.inscripcionForm),c(5),a("ngForOf",d(6,4,p.cursosOptions$)),c(6),a("ngForOf",d(12,6,p.usuariosOptions$)),c(5),D(d(18,10,d(17,8,p.inscripciones$))))},dependencies:[$,q,ri,oi,ei,Y,Z,H,X,Q,W,R,G]})};var Fi=[{path:"",component:S}],b=class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=C({type:i});static \u0275inj=I({imports:[y.forChild(Fi),y]})};var F=class i{constructor(r){this.actions$=r}static \u0275fac=function(o){return new(o||i)(_(si))};static \u0275prov=N({token:i,factory:i.\u0275fac})};var li=class i{static \u0275fac=function(o){return new(o||i)};static \u0275mod=C({type:i});static \u0275inj=I({imports:[T,ti,b,z.forFeature(ai),ci.forFeature([F])]})};export{li as InscripcionesModule};
