(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{yI65:function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=e("jUk4"),o=e("W4AR"),r={LoadOrgDetails:Object(o.b)("[LoadOrgDetails]"),LoadOrgDetailsSucceeded:Object(o.b)("[LoadOrgDetails] Success"),LoadOrgDetailsFailed:Object(o.b)("[LoadOrgDetails] Fail"),SyncOrgPersonas:Object(o.b)("[SyncOrgPersonas]"),SyncOrgPersonasSucceeded:Object(o.b)("[SyncOrgPersonas] Success"),SyncOrgPersonasFailed:Object(o.b)("[SyncOrgPersonas] Fail"),SaveOrgDetails:Object(o.b)("[SaveOrgDetails]"),SaveOrgDetailsSucceeded:Object(o.b)("[SaveOrgDetails] Success"),SaveOrgDetailsFailed:Object(o.b)("[SaveOrgDetails] Fail")},i=function(){return function(l){this.payload=l,this.type=r.LoadOrgDetails}}(),a=function(){return function(l){this.payload=l,this.type=r.SyncOrgPersonas}}(),s=function(){return function(l){this.payload=l,this.type=r.SaveOrgDetails}}(),d=function(){return function(l,n,e){var u=this;this.store=l,this.route=n,this.router=e,this.store.dispatch(new a({})),this.store.select(function(l){return l.organization.sync}).subscribe(function(l){!0===l&&u.router.navigate(["../profile"],{relativeTo:u.route})})}}(),c=function(l){this.authService=l,l.currentUser&&(this.title=l.currentUser.profile.ttitle)},p=e("LvDl"),g=e("dzgT"),m=e("Znwt"),f=function(){function l(l,n){var e=this;this.store=l,this.formBuilder=n,this.canDeactivate=function(){return e.editorForm.pristine},this.editorForm=this.formBuilder.group({isSupplier:!1,isPurchaser:!1}),this.store.select(function(l){return l.organization.updated}).subscribe(function(){return e.editorForm.reset()}),this.details$=this.store.select(function(l){return l.organization.details}),this.apps$=this.store.select(function(l){return l.workspaces.apps}),this.store.dispatch(new i(null)),this.store.dispatch(new m.f({includeSystem:!0,view:"full"})),Object(g.a)(this.details$,this.apps$,function(l,n){return l&&n&&n.length>0?{record:l,apps:n}:null}).subscribe(function(l){l&&(e.record=l.record,e.initializeForm(e.record),l.apps.forEach(function(l){return l.isSelected=!1}),e.apps=l.apps,e.setSubscriptions())})}return l.prototype.unloadNotification=function(l){this.canDeactivate()||(l.returnValue="WARNING: You have unsaved changes. Press Cancel to go back and save these changes, or OK to lose these changes.")},l.prototype.initializeForm=function(l){this.editorForm=this.formBuilder.group({isSupplier:[l.isSupplier],isPurchaser:[l.isPurchaser],supplierSolutions:this.formBuilder.array([]),purchaserSolutions:this.formBuilder.array([]),generalSolutions:this.formBuilder.array([]),subscriptions:this.formBuilder.array([])})},l.prototype.setSubscriptions=function(){var l=this;if(this.apps&&this.record){this.record.subscriptions&&this.record.subscriptions.forEach(function(n){var e=p.find(l.apps,{id:n.id});e&&(e.isSelected=!0)});var n=p.groupBy(this.apps,"tags");this.setControlValues(n.general,"generalSolutions"),this.setControlValues(n.purchaser,"purchaserSolutions"),this.setControlValues(n.supplier,"supplierSolutions")}},l.prototype.setControlValues=function(l,n){var e=this;if(l){var u=l.map(function(l){return e.formBuilder.group(l)}),t=this.formBuilder.array(u);this.editorForm.setControl(n,t)}},Object.defineProperty(l.prototype,"supplierSolutions",{get:function(){return this.editorForm.get("supplierSolutions")},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"purchaserSolutions",{get:function(){return this.editorForm.get("purchaserSolutions")},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"generalSolutions",{get:function(){return this.editorForm.get("generalSolutions")},enumerable:!0,configurable:!0}),l.prototype.onSubmit=function(){var l=this.preparePayload();this.store.dispatch(new s(l))},l.prototype.preparePayload=function(){var l=this.editorForm.value,n=p.filter(l.generalSolutions,{isSelected:!0}).map(function(l){return Object.assign({},{id:l.id,code:l.code})}),e=p.filter(l.supplierSolutions,{isSelected:!0}).map(function(l){return Object.assign({},{id:l.id,code:l.code})}),u=p.filter(l.purchaserSolutions,{isSelected:!0}).map(function(l){return Object.assign({},{id:l.id,code:l.code})}),t=p.union(n,e,u);return{isPurchaser:l.isPurchaser,isSupplier:l.isSupplier,subscriptions:t}},l}(),v=function(){},C=function(){},h=e("9AJC"),b=e("pMnS"),y=e("eVFG"),S=e("ZYCi"),O=e("Ip0R"),F=e("HuXx"),N=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function _(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,12,"div",[["class","pane-header"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,11,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](3,null,["",""])),(l()(),u["\u0275eld"](4,0,null,null,8,"nav",[["class","nav"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,3,"a",[["class","nav-link"],["routerLink","profile"],["style","padding-left:0;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,6).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](6,671744,null,0,S.l,[S.k,S.a,O.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),u["\u0275eld"](7,0,null,null,0,"i",[["class","fa fa-id-card"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Profile"])),(l()(),u["\u0275eld"](9,0,null,null,3,"a",[["class","nav-link"],["routerLink","people"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,10).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](10,671744,null,0,S.l,[S.k,S.a,O.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),u["\u0275eld"](11,0,null,null,0,"i",[["class","fa fa-users"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" People"])),(l()(),u["\u0275eld"](13,0,null,null,3,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),u["\u0275eld"](14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](15,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),u["\u0275did"](16,212992,null,0,S.n,[S.b,u.ViewContainerRef,u.ComponentFactoryResolver,[8,null],u.ChangeDetectorRef],null,null)],function(l,n){l(n,6,0,"profile"),l(n,10,0,"people"),l(n,16,0)},function(l,n){l(n,3,0,n.component.title),l(n,5,0,u["\u0275nov"](n,6).target,u["\u0275nov"](n,6).href),l(n,9,0,u["\u0275nov"](n,10).target,u["\u0275nov"](n,10).href)})}var k=u["\u0275ccf"]("app-organization-home",c,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-organization-home",[],null,null,null,_,N)),u["\u0275did"](1,49152,null,0,c,[F.d],null,null)],null,null)},{},{},[]),j=e("yGQT"),P=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function D(l){return u["\u0275vid"](0,[(l()(),u["\u0275ted"](-1,null,["syncing profile"]))],null,null)}var R=u["\u0275ccf"]("app-sync-profile",d,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-sync-profile",[],null,null,null,D,P)),u["\u0275did"](1,49152,null,0,d,[j.o,S.a,S.k],null,null)],null,null)},{},{},[]),V=e("gIcY"),I=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function A(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,15,"tr",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),u["\u0275did"](1,212992,null,0,V.FormGroupName,[[3,V.ControlContainer],[8,null],[8,null]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,V.ControlContainer,null,[V.FormGroupName]),u["\u0275did"](3,16384,null,0,V.NgControlStatusGroup,[[4,V.ControlContainer]],null,null),(l()(),u["\u0275eld"](4,0,null,null,6,"td",[["width","1%"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,5,"input",[["formControlName","isSelected"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,e){var t=!0;return"change"===n&&(t=!1!==u["\u0275nov"](l,6).onChange(e.target.checked)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,6).onTouched()&&t),t},null,null)),u["\u0275did"](6,16384,null,0,V.CheckboxControlValueAccessor,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,V.NG_VALUE_ACCESSOR,function(l){return[l]},[V.CheckboxControlValueAccessor]),u["\u0275did"](8,671744,null,0,V.FormControlName,[[3,V.ControlContainer],[8,null],[8,null],[6,V.NG_VALUE_ACCESSOR],[2,V["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,V.NgControl,null,[V.FormControlName]),u["\u0275did"](10,16384,null,0,V.NgControlStatus,[[4,V.NgControl]],null,null),(l()(),u["\u0275eld"](11,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),u["\u0275ted"](13,null,["",""])),(l()(),u["\u0275eld"](14,0,null,null,1,"div",[["class","text-muted"]],null,null,null,null,null)),(l()(),u["\u0275ted"](15,null,["",""]))],function(l,n){l(n,1,0,n.context.index),l(n,8,0,"isSelected")},function(l,n){l(n,0,0,u["\u0275nov"](n,3).ngClassUntouched,u["\u0275nov"](n,3).ngClassTouched,u["\u0275nov"](n,3).ngClassPristine,u["\u0275nov"](n,3).ngClassDirty,u["\u0275nov"](n,3).ngClassValid,u["\u0275nov"](n,3).ngClassInvalid,u["\u0275nov"](n,3).ngClassPending),l(n,5,0,u["\u0275nov"](n,10).ngClassUntouched,u["\u0275nov"](n,10).ngClassTouched,u["\u0275nov"](n,10).ngClassPristine,u["\u0275nov"](n,10).ngClassDirty,u["\u0275nov"](n,10).ngClassValid,u["\u0275nov"](n,10).ngClassInvalid,u["\u0275nov"](n,10).ngClassPending),l(n,13,0,n.context.$implicit.value.title),l(n,15,0,n.context.$implicit.value.summary)})}function T(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,6,"table",[["class","table"],["formArrayName","generalSolutions"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),u["\u0275did"](1,212992,null,0,V.FormArrayName,[[3,V.ControlContainer],[8,null],[8,null]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,V.ControlContainer,null,[V.FormArrayName]),u["\u0275did"](3,16384,null,0,V.NgControlStatusGroup,[[4,V.ControlContainer]],null,null),(l()(),u["\u0275eld"](4,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,A)),u["\u0275did"](6,278528,null,0,O.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var e=n.component;l(n,1,0,"generalSolutions"),l(n,6,0,e.generalSolutions.controls)},function(l,n){l(n,0,0,u["\u0275nov"](n,3).ngClassUntouched,u["\u0275nov"](n,3).ngClassTouched,u["\u0275nov"](n,3).ngClassPristine,u["\u0275nov"](n,3).ngClassDirty,u["\u0275nov"](n,3).ngClassValid,u["\u0275nov"](n,3).ngClassInvalid,u["\u0275nov"](n,3).ngClassPending)})}function w(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,15,"tr",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),u["\u0275did"](1,212992,null,0,V.FormGroupName,[[3,V.ControlContainer],[8,null],[8,null]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,V.ControlContainer,null,[V.FormGroupName]),u["\u0275did"](3,16384,null,0,V.NgControlStatusGroup,[[4,V.ControlContainer]],null,null),(l()(),u["\u0275eld"](4,0,null,null,6,"td",[["width","1%"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,5,"input",[["formControlName","isSelected"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,e){var t=!0;return"change"===n&&(t=!1!==u["\u0275nov"](l,6).onChange(e.target.checked)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,6).onTouched()&&t),t},null,null)),u["\u0275did"](6,16384,null,0,V.CheckboxControlValueAccessor,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,V.NG_VALUE_ACCESSOR,function(l){return[l]},[V.CheckboxControlValueAccessor]),u["\u0275did"](8,671744,null,0,V.FormControlName,[[3,V.ControlContainer],[8,null],[8,null],[6,V.NG_VALUE_ACCESSOR],[2,V["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,V.NgControl,null,[V.FormControlName]),u["\u0275did"](10,16384,null,0,V.NgControlStatus,[[4,V.NgControl]],null,null),(l()(),u["\u0275eld"](11,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),u["\u0275ted"](13,null,["",""])),(l()(),u["\u0275eld"](14,0,null,null,1,"div",[["class","text-muted"]],null,null,null,null,null)),(l()(),u["\u0275ted"](15,null,["",""]))],function(l,n){l(n,1,0,n.context.index),l(n,8,0,"isSelected")},function(l,n){l(n,0,0,u["\u0275nov"](n,3).ngClassUntouched,u["\u0275nov"](n,3).ngClassTouched,u["\u0275nov"](n,3).ngClassPristine,u["\u0275nov"](n,3).ngClassDirty,u["\u0275nov"](n,3).ngClassValid,u["\u0275nov"](n,3).ngClassInvalid,u["\u0275nov"](n,3).ngClassPending),l(n,5,0,u["\u0275nov"](n,10).ngClassUntouched,u["\u0275nov"](n,10).ngClassTouched,u["\u0275nov"](n,10).ngClassPristine,u["\u0275nov"](n,10).ngClassDirty,u["\u0275nov"](n,10).ngClassValid,u["\u0275nov"](n,10).ngClassInvalid,u["\u0275nov"](n,10).ngClassPending),l(n,13,0,n.context.$implicit.value.title),l(n,15,0,n.context.$implicit.value.summary)})}function L(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,6,"table",[["class","table"],["formArrayName","purchaserSolutions"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),u["\u0275did"](1,212992,null,0,V.FormArrayName,[[3,V.ControlContainer],[8,null],[8,null]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,V.ControlContainer,null,[V.FormArrayName]),u["\u0275did"](3,16384,null,0,V.NgControlStatusGroup,[[4,V.ControlContainer]],null,null),(l()(),u["\u0275eld"](4,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,w)),u["\u0275did"](6,278528,null,0,O.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var e=n.component;l(n,1,0,"purchaserSolutions"),l(n,6,0,e.purchaserSolutions.controls)},function(l,n){l(n,0,0,u["\u0275nov"](n,3).ngClassUntouched,u["\u0275nov"](n,3).ngClassTouched,u["\u0275nov"](n,3).ngClassPristine,u["\u0275nov"](n,3).ngClassDirty,u["\u0275nov"](n,3).ngClassValid,u["\u0275nov"](n,3).ngClassInvalid,u["\u0275nov"](n,3).ngClassPending)})}function x(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,15,"tr",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),u["\u0275did"](1,212992,null,0,V.FormGroupName,[[3,V.ControlContainer],[8,null],[8,null]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,V.ControlContainer,null,[V.FormGroupName]),u["\u0275did"](3,16384,null,0,V.NgControlStatusGroup,[[4,V.ControlContainer]],null,null),(l()(),u["\u0275eld"](4,0,null,null,6,"td",[["width","1%"]],null,null,null,null,null)),(l()(),u["\u0275eld"](5,0,null,null,5,"input",[["formControlName","isSelected"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,e){var t=!0;return"change"===n&&(t=!1!==u["\u0275nov"](l,6).onChange(e.target.checked)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,6).onTouched()&&t),t},null,null)),u["\u0275did"](6,16384,null,0,V.CheckboxControlValueAccessor,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,V.NG_VALUE_ACCESSOR,function(l){return[l]},[V.CheckboxControlValueAccessor]),u["\u0275did"](8,671744,null,0,V.FormControlName,[[3,V.ControlContainer],[8,null],[8,null],[6,V.NG_VALUE_ACCESSOR],[2,V["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,V.NgControl,null,[V.FormControlName]),u["\u0275did"](10,16384,null,0,V.NgControlStatus,[[4,V.NgControl]],null,null),(l()(),u["\u0275eld"](11,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),u["\u0275eld"](12,0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),u["\u0275ted"](13,null,["",""])),(l()(),u["\u0275eld"](14,0,null,null,1,"div",[["class","text-muted"]],null,null,null,null,null)),(l()(),u["\u0275ted"](15,null,["",""]))],function(l,n){l(n,1,0,n.context.index),l(n,8,0,"isSelected")},function(l,n){l(n,0,0,u["\u0275nov"](n,3).ngClassUntouched,u["\u0275nov"](n,3).ngClassTouched,u["\u0275nov"](n,3).ngClassPristine,u["\u0275nov"](n,3).ngClassDirty,u["\u0275nov"](n,3).ngClassValid,u["\u0275nov"](n,3).ngClassInvalid,u["\u0275nov"](n,3).ngClassPending),l(n,5,0,u["\u0275nov"](n,10).ngClassUntouched,u["\u0275nov"](n,10).ngClassTouched,u["\u0275nov"](n,10).ngClassPristine,u["\u0275nov"](n,10).ngClassDirty,u["\u0275nov"](n,10).ngClassValid,u["\u0275nov"](n,10).ngClassInvalid,u["\u0275nov"](n,10).ngClassPending),l(n,13,0,n.context.$implicit.value.title),l(n,15,0,n.context.$implicit.value.summary)})}function G(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,6,"table",[["class","table"],["formArrayName","supplierSolutions"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),u["\u0275did"](1,212992,null,0,V.FormArrayName,[[3,V.ControlContainer],[8,null],[8,null]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,V.ControlContainer,null,[V.FormArrayName]),u["\u0275did"](3,16384,null,0,V.NgControlStatusGroup,[[4,V.ControlContainer]],null,null),(l()(),u["\u0275eld"](4,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,x)),u["\u0275did"](6,278528,null,0,O.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var e=n.component;l(n,1,0,"supplierSolutions"),l(n,6,0,e.supplierSolutions.controls)},function(l,n){l(n,0,0,u["\u0275nov"](n,3).ngClassUntouched,u["\u0275nov"](n,3).ngClassTouched,u["\u0275nov"](n,3).ngClassPristine,u["\u0275nov"](n,3).ngClassDirty,u["\u0275nov"](n,3).ngClassValid,u["\u0275nov"](n,3).ngClassInvalid,u["\u0275nov"](n,3).ngClassPending)})}function E(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,41,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,e){var t=!0,o=l.component;return"submit"===n&&(t=!1!==u["\u0275nov"](l,2).onSubmit(e)&&t),"reset"===n&&(t=!1!==u["\u0275nov"](l,2).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.onSubmit()&&t),t},null,null)),u["\u0275did"](1,16384,null,0,V["\u0275angular_packages_forms_forms_bh"],[],null,null),u["\u0275did"](2,540672,null,0,V.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),u["\u0275prd"](2048,null,V.ControlContainer,null,[V.FormGroupDirective]),u["\u0275did"](4,16384,null,0,V.NgControlStatusGroup,[[4,V.ControlContainer]],null,null),(l()(),u["\u0275eld"](5,0,null,null,5,"input",[["formControlName","isPurchaser"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,e){var t=!0;return"change"===n&&(t=!1!==u["\u0275nov"](l,6).onChange(e.target.checked)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,6).onTouched()&&t),t},null,null)),u["\u0275did"](6,16384,null,0,V.CheckboxControlValueAccessor,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,V.NG_VALUE_ACCESSOR,function(l){return[l]},[V.CheckboxControlValueAccessor]),u["\u0275did"](8,671744,null,0,V.FormControlName,[[3,V.ControlContainer],[8,null],[8,null],[6,V.NG_VALUE_ACCESSOR],[2,V["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,V.NgControl,null,[V.FormControlName]),u["\u0275did"](10,16384,null,0,V.NgControlStatus,[[4,V.NgControl]],null,null),(l()(),u["\u0275ted"](-1,null,[" I am a purchaser"])),(l()(),u["\u0275eld"](12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](13,0,null,null,5,"input",[["formControlName","isSupplier"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,e){var t=!0;return"change"===n&&(t=!1!==u["\u0275nov"](l,14).onChange(e.target.checked)&&t),"blur"===n&&(t=!1!==u["\u0275nov"](l,14).onTouched()&&t),t},null,null)),u["\u0275did"](14,16384,null,0,V.CheckboxControlValueAccessor,[u.Renderer2,u.ElementRef],null,null),u["\u0275prd"](1024,null,V.NG_VALUE_ACCESSOR,function(l){return[l]},[V.CheckboxControlValueAccessor]),u["\u0275did"](16,671744,null,0,V.FormControlName,[[3,V.ControlContainer],[8,null],[8,null],[6,V.NG_VALUE_ACCESSOR],[2,V["\u0275angular_packages_forms_forms_k"]]],{name:[0,"name"]},null),u["\u0275prd"](2048,null,V.NgControl,null,[V.FormControlName]),u["\u0275did"](18,16384,null,0,V.NgControlStatus,[[4,V.NgControl]],null,null),(l()(),u["\u0275ted"](-1,null,[" I am a supplier"])),(l()(),u["\u0275eld"](20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](21,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](22,0,null,null,15,"div",[["class","row"]],null,null,null,null,null)),(l()(),u["\u0275eld"](23,0,null,null,4,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),u["\u0275eld"](24,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["General solutions"])),(l()(),u["\u0275and"](16777216,null,null,1,null,T)),u["\u0275did"](27,16384,null,0,O.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](28,0,null,null,4,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),u["\u0275eld"](29,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Purchaser solutions"])),(l()(),u["\u0275and"](16777216,null,null,1,null,L)),u["\u0275did"](32,16384,null,0,O.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](33,0,null,null,4,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),u["\u0275eld"](34,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Supplier solutions"])),(l()(),u["\u0275and"](16777216,null,null,1,null,G)),u["\u0275did"](37,16384,null,0,O.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](38,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275eld"](39,0,null,null,2,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),u["\u0275eld"](40,0,null,null,0,"i",[["class","fa fa-save"]],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,[" Save changes"]))],function(l,n){var e=n.component;l(n,2,0,e.editorForm),l(n,8,0,"isPurchaser"),l(n,16,0,"isSupplier"),l(n,27,0,e.generalSolutions),l(n,32,0,e.purchaserSolutions),l(n,37,0,e.supplierSolutions)},function(l,n){var e=n.component;l(n,0,0,u["\u0275nov"](n,4).ngClassUntouched,u["\u0275nov"](n,4).ngClassTouched,u["\u0275nov"](n,4).ngClassPristine,u["\u0275nov"](n,4).ngClassDirty,u["\u0275nov"](n,4).ngClassValid,u["\u0275nov"](n,4).ngClassInvalid,u["\u0275nov"](n,4).ngClassPending),l(n,5,0,u["\u0275nov"](n,10).ngClassUntouched,u["\u0275nov"](n,10).ngClassTouched,u["\u0275nov"](n,10).ngClassPristine,u["\u0275nov"](n,10).ngClassDirty,u["\u0275nov"](n,10).ngClassValid,u["\u0275nov"](n,10).ngClassInvalid,u["\u0275nov"](n,10).ngClassPending),l(n,13,0,u["\u0275nov"](n,18).ngClassUntouched,u["\u0275nov"](n,18).ngClassTouched,u["\u0275nov"](n,18).ngClassPristine,u["\u0275nov"](n,18).ngClassDirty,u["\u0275nov"](n,18).ngClassValid,u["\u0275nov"](n,18).ngClassInvalid,u["\u0275nov"](n,18).ngClassPending),l(n,39,0,e.editorForm.pristine)})}function M(l){return u["\u0275vid"](2,[(l()(),u["\u0275and"](16777216,null,null,3,null,E)),u["\u0275did"](1,16384,null,0,O.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),u["\u0275pid"](131072,O.AsyncPipe,[u.ChangeDetectorRef]),u["\u0275pid"](131072,O.AsyncPipe,[u.ChangeDetectorRef])],function(l,n){var e=n.component;l(n,1,0,u["\u0275unv"](n,1,0,u["\u0275nov"](n,2).transform(e.details$))&&u["\u0275unv"](n,1,0,u["\u0275nov"](n,3).transform(e.apps$))&&e.editorForm)},null)}var U=u["\u0275ccf"]("app-organization-profile",f,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-organization-profile",[],null,[["window","beforeunload"]],function(l,n,e){var t=!0;return"window:beforeunload"===n&&(t=!1!==u["\u0275nov"](l,1).unloadNotification(e)&&t),t},M,I)),u["\u0275did"](1,49152,null,0,f,[j.o,V.FormBuilder],null,null)],null,null)},{},{},[]),z=u["\u0275crt"]({encapsulation:2,styles:[],data:{}});function $(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["People"]))],null,null)}var B=u["\u0275ccf"]("app-organization-people",v,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-organization-people",[],null,null,null,$,z)),u["\u0275did"](1,49152,null,0,v,[],null,null)],null,null)},{},{},[]),K=e("4GxJ"),J=e("t/Na"),Y=e("ynQB"),q=e("4Vzq"),X=e("mhVT"),Q=e("nX/Y"),Z=e("ZYjt"),H=e("HF1C"),W=e("Fa87"),ll=e("VSng"),nl=e("7LN8"),el=e("h5lK"),ul=e("Pchq"),tl=e("g4HV"),ol=e("pODc"),rl=e("8uIU"),il=e("jhFJ"),al=e("G5kV"),sl=function(){return(sl=Object.assign||function(l){for(var n,e=1,u=arguments.length;e<u;e++)for(var t in n=arguments[e])Object.prototype.hasOwnProperty.call(n,t)&&(l[t]=n[t]);return l}).apply(this,arguments)};function dl(l,n){switch(n.type){case r.SaveOrgDetailsSucceeded:return sl({},l,{updated:!0});case r.LoadOrgDetailsSucceeded:return sl({},l,{details:n.payload});case r.SyncOrgPersonas:return sl({},l,{sync:!1});case r.SyncOrgPersonasSucceeded:return sl({},l,{sync:!0});default:return l}}var cl=e("jYNz"),pl=e("mrSG"),gl=e("15JJ"),ml=e("67Y/"),fl=e("9Z1F"),vl=e("F/XL"),Cl=function(){function l(l){var n=this;this.httpClient=l,this.baseUrl="/organization",this.options={headers:{servicename:"admin-api"}},this.update$=function(l){return n.httpClient.put(n.baseUrl,l,n.options)},this.getDetails$=function(){return n.httpClient.get(n.baseUrl,n.options)},this.syncPersonas$=function(){return n.httpClient.put(n.baseUrl+"/sync",{},n.options)}}return l.ngInjectableDef=u.defineInjectable({factory:function(){return new l(u.inject(J.c))},token:l,providedIn:"root"}),l}(),hl=function(){function l(l,n){var e=this;this.actions$=l,this.organizationService=n,this.loadDetails=this.actions$.pipe(Object(cl.d)(r.LoadOrgDetails),Object(gl.a)(function(){return e.organizationService.getDetails$().pipe(Object(ml.a)(function(l){return{type:r.LoadOrgDetailsSucceeded,payload:l}}),Object(fl.a)(function(){return Object(vl.a)({type:r.LoadOrgDetailsFailed})}))})),this.syncDetails=this.actions$.pipe(Object(cl.d)(r.SyncOrgPersonas),Object(gl.a)(function(){return e.organizationService.syncPersonas$().pipe(Object(ml.a)(function(l){return{type:r.SyncOrgPersonasSucceeded,payload:l}}),Object(fl.a)(function(){return Object(vl.a)({type:r.SyncOrgPersonasFailed})}))})),this.updateProfile=this.actions$.pipe(Object(cl.d)(r.SaveOrgDetails),Object(gl.a)(function(l){return e.organizationService.update$(l.payload).pipe(Object(ml.a)(function(l){return{type:r.SaveOrgDetailsSucceeded,payload:l}}),Object(fl.a)(function(){return Object(vl.a)({type:r.SaveOrgDetailsFailed})}))}))}return l.ngInjectableDef=u.defineInjectable({factory:function(){return new l(u.inject(cl.a),u.inject(Cl))},token:l,providedIn:"root"}),Object(pl.__decorate)([Object(cl.b)(),Object(pl.__metadata)("design:type",Object)],l.prototype,"loadDetails",void 0),Object(pl.__decorate)([Object(cl.b)(),Object(pl.__metadata)("design:type",Object)],l.prototype,"syncDetails",void 0),Object(pl.__decorate)([Object(cl.b)(),Object(pl.__metadata)("design:type",Object)],l.prototype,"updateProfile",void 0),l}();e.d(n,"OrganizationModuleNgFactory",function(){return bl});var bl=u["\u0275cmf"](C,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[h.a,h.b,h.i,h.e,h.f,h.g,h.h,b.a,y.n,y.o,k,R,U,B]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,O.NgLocalization,O.NgLocaleLocalization,[u.LOCALE_ID,[2,O["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](4608,V["\u0275angular_packages_forms_forms_j"],V["\u0275angular_packages_forms_forms_j"],[]),u["\u0275mpd"](4608,V.FormBuilder,V.FormBuilder,[]),u["\u0275mpd"](4608,K.v,K.v,[u.ComponentFactoryResolver,u.Injector,K.V,K.w]),u["\u0275mpd"](4608,J.i,J.o,[O.DOCUMENT,u.PLATFORM_ID,J.m]),u["\u0275mpd"](4608,J.p,J.p,[J.i,J.n]),u["\u0275mpd"](135680,Y.c,Y.c,[u.PLATFORM_ID]),u["\u0275mpd"](4608,q.MessageService,q.MessageService,[]),u["\u0275mpd"](5120,J.a,function(l,n,e,u){return[l,new X.b(n),new t.b(e),new t.g(u)]},[J.p,Y.c,q.MessageService,o.a]),u["\u0275mpd"](4608,J.l,J.l,[]),u["\u0275mpd"](6144,J.j,null,[J.l]),u["\u0275mpd"](4608,J.h,J.h,[J.j]),u["\u0275mpd"](6144,J.b,null,[J.h]),u["\u0275mpd"](4608,J.g,J.k,[J.b,u.Injector]),u["\u0275mpd"](4608,J.c,J.c,[J.g]),u["\u0275mpd"](4608,Q.c,Q.c,[J.c,Z.c]),u["\u0275mpd"](4608,t.t,t.t,[j.o,S.k]),u["\u0275mpd"](4608,t.f,t.f,[]),u["\u0275mpd"](1073742336,O.CommonModule,O.CommonModule,[]),u["\u0275mpd"](1073742336,V["\u0275angular_packages_forms_forms_bc"],V["\u0275angular_packages_forms_forms_bc"],[]),u["\u0275mpd"](1073742336,V.FormsModule,V.FormsModule,[]),u["\u0275mpd"](1073742336,V.ReactiveFormsModule,V.ReactiveFormsModule,[]),u["\u0275mpd"](1073742336,K.c,K.c,[]),u["\u0275mpd"](1073742336,K.f,K.f,[]),u["\u0275mpd"](1073742336,K.g,K.g,[]),u["\u0275mpd"](1073742336,K.k,K.k,[]),u["\u0275mpd"](1073742336,K.l,K.l,[]),u["\u0275mpd"](1073742336,K.q,K.q,[]),u["\u0275mpd"](1073742336,K.t,K.t,[]),u["\u0275mpd"](1073742336,K.x,K.x,[]),u["\u0275mpd"](1073742336,K.B,K.B,[]),u["\u0275mpd"](1073742336,K.C,K.C,[]),u["\u0275mpd"](1073742336,K.F,K.F,[]),u["\u0275mpd"](1073742336,K.I,K.I,[]),u["\u0275mpd"](1073742336,K.L,K.L,[]),u["\u0275mpd"](1073742336,K.P,K.P,[]),u["\u0275mpd"](1073742336,K.Q,K.Q,[]),u["\u0275mpd"](1073742336,K.T,K.T,[]),u["\u0275mpd"](1073742336,K.y,K.y,[]),u["\u0275mpd"](1073742336,H.a,H.a,[]),u["\u0275mpd"](1073742336,W.InputTextModule,W.InputTextModule,[]),u["\u0275mpd"](1073742336,ll.ButtonModule,ll.ButtonModule,[]),u["\u0275mpd"](1073742336,nl.SharedModule,nl.SharedModule,[]),u["\u0275mpd"](1073742336,el.AutoCompleteModule,el.AutoCompleteModule,[]),u["\u0275mpd"](1073742336,J.e,J.e,[]),u["\u0275mpd"](1073742336,J.d,J.d,[]),u["\u0275mpd"](1073742336,Q.b,Q.b,[]),u["\u0275mpd"](1073742336,ul.SidebarModule,ul.SidebarModule,[]),u["\u0275mpd"](1073742336,tl.TooltipModule,tl.TooltipModule,[]),u["\u0275mpd"](1073742336,ol.TabViewModule,ol.TabViewModule,[]),u["\u0275mpd"](1073742336,rl.a,rl.a,[]),u["\u0275mpd"](1073742336,S.m,S.m,[[2,S.s],[2,S.k]]),u["\u0275mpd"](1073742336,t.i,t.i,[]),u["\u0275mpd"](1073742336,Y.b,Y.b,[]),u["\u0275mpd"](1073742336,X.a,X.a,[]),u["\u0275mpd"](1073742336,il.b,il.b,[]),u["\u0275mpd"](1073742336,al.ToastModule,al.ToastModule,[]),u["\u0275mpd"](1024,j.k,function(){return[{key:"containers",reducerFactory:j.B,metaReducers:[],initialState:{commands:[],currentWorkspace:null,workspaces:[]}},{key:"organization",reducerFactory:j.B,metaReducers:[],initialState:{details:null,sync:!1,updated:!1}}]},[]),u["\u0275mpd"](1024,j.s,function(){return[t.l,dl]},[]),u["\u0275mpd"](1024,j.t,function(l,n){return[l,n]},[j.s,j.s]),u["\u0275mpd"](1024,j.b,function(l,n,e,u,t,o){return[j.y(l,n,e),j.y(u,t,o)]},[u.Injector,j.s,j.t,u.Injector,j.s,j.t]),u["\u0275mpd"](1073873408,j.p,j.p,[j.k,j.b,j.h,j.q]),u["\u0275mpd"](512,t.m,t.m,[cl.a,S.k,O.Location]),u["\u0275mpd"](512,hl,hl,[cl.a,Cl]),u["\u0275mpd"](1024,cl.i,function(l,n){return[cl.e(l),cl.e(n)]},[t.m,hl]),u["\u0275mpd"](1073742336,cl.g,cl.g,[cl.f,cl.i,[2,j.q],[2,j.p]]),u["\u0275mpd"](1073742336,t.a,t.a,[]),u["\u0275mpd"](1073742336,C,C,[]),u["\u0275mpd"](256,J.m,"XSRF-TOKEN",[]),u["\u0275mpd"](256,J.n,"X-XSRF-TOKEN",[]),u["\u0275mpd"](1024,S.i,function(){return[[{path:"ws/:wscode",component:t.j},{path:"not-implemented",component:t.k}],[{path:"",component:c,children:[{path:"sync-profile",component:d},{path:"profile",component:f,canDeactivate:[t.f]},{path:"people",component:v}]}]]},[])])})}}]);