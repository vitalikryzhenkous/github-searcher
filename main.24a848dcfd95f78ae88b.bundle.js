webpackJsonp([4],{"/EYG":function(n,l,t){"use strict";t.d(l,"a",function(){return a});var e=t("rlar"),u=(t.n(e),t("CPp0")),o=t("5v8a"),a=(t.n(o),function(){function n(n){this._http=n,this._userName="vitalikryzhenkous",this._clientID="Iv1.aee58b33fc9ae7ab",this._clientSecret="5e9363cf49061ebaabff1e2083ab2e38a16a692e",this.user$=new e.Subject,this.repos$=new e.Subject}return n.prototype.updateUserName=function(n){this._userName=n},n.prototype.getUser=function(){var n="https://api.github.com/users/"+this._userName+"?client_id="+this._clientID+"&client_secret="+this._clientSecret;return this._http.get(n).map(function(n){return n.json()})},n.prototype.getUserRepos=function(){var n="https://api.github.com/users/"+this._userName+"/repos?client_id="+this._clientID+"&client_secret="+this._clientSecret;return this._http.get(n).map(function(n){return n.json()})},n.prototype.storeInitialState=function(n,l){switch(n){case"STORE_USER":this.user$.next(l);break;case"STORE_REPOS":this.repos$.next(l);break;default:console.log("DEFAULT at storeInitialState")}},n.prototype.getStoreState=function(n){switch(n){case"REQUEST_USER":return this.user$.asObservable();case"REQUEST_REPOS":return this.repos$.asObservable();default:console.log("DEFAULT at storeInitialState")}},n.ctorParameters=function(){return[{type:u.d}]},n}())},0:function(n,l,t){n.exports=t("cDNt")},"65mH":function(n,l,t){"use strict";t.d(l,"a",function(){return u});var e=t("rlar"),u=(t.n(e),function(){function n(){this.storeUser=new e.Subject,this.storeRepos=new e.Subject}return n.prototype.storeInitialData=function(n,l){switch(n){case"STORE_USER":this.storeUser.next(l);break;case"STORE_REPOS":this.storeRepos.next(l);break;default:console.log("Default is Fire at storeInitialData | action: "+n+" & payload: "+l)}},n.prototype.getIntialData=function(n){switch(n){case"GET_USER":return this.storeUser.asObservable();case"GET_REPOS":return this.storeRepos.asObservable();default:console.log("Default is Fire at getIntialData | action: "+n)}},n.ctorParameters=function(){return[]},n}())},cDNt:function(n,l,t){"use strict";function e(n){return f._37(0,[(n()(),f._35(null,["\n        "])),(n()(),f._17(0,null,null,10,"header",[["class","header-container"]],null,null,null,null,null)),(n()(),f._35(null,["\n            "])),(n()(),f._17(0,null,null,4,"div",[["class","header-item name"]],null,null,null,null,null)),(n()(),f._17(0,null,null,3,"span",[],null,[[null,"click"]],function(n,l,t){var e=!0;if("click"===l){e=!1!==f._29(n,5).onClick()&&e}return e},null,null)),f._15(16384,null,0,d.l,[d.k,d.a,[8,null],f.N,f.n],{routerLink:[0,"routerLink"]},null),f._30(1),(n()(),f._35(null,["",""])),(n()(),f._35(null,["\n            "])),(n()(),f._17(0,null,null,1,"div",[["class","header-item avatar"]],null,null,null,null,null)),(n()(),f._35(null,["\n            "])),(n()(),f._35(null,["\n        "])),(n()(),f._35(null,["\n    "]))],function(n,l){n(l,5,0,n(l,6,0,"/"))},function(n,l){n(l,7,0,l.component.ownerName)})}function u(n){return f._37(0,[(n()(),f._17(0,null,null,1,"app-header",[],null,null,null,e,g)),f._15(49152,null,0,p,[],null,null)],null,null)}function o(n){return b._37(0,[(n()(),b._35(null,["\n        "])),(n()(),b._17(0,null,null,0,"footer",[],null,null,null,null,null)),(n()(),b._35(null,["\n    "]))],null,null)}function a(n){return b._37(0,[(n()(),b._17(0,null,null,1,"app-footer",[],null,null,null,o,x)),b._15(49152,null,0,m,[],null,null)],null,null)}function r(n){return w._37(0,[(n()(),w._35(null,["\n      "])),(n()(),w._17(0,null,null,13,"div",[["class","app-wrapper"]],null,null,null,null,null)),(n()(),w._35(null,["\n        "])),(n()(),w._17(0,null,null,1,"app-header",[],null,null,null,e,g)),w._15(49152,null,0,p,[],null,null),(n()(),w._35(null,["\n        "])),(n()(),w._17(0,null,null,4,"div",[["class","main"]],null,null,null,null,null)),(n()(),w._35(null,["\n          "])),(n()(),w._17(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),w._15(212992,null,0,y.n,[y.b,w.Z,w.k,[8,null],w.i],null,null),(n()(),w._35(null,["\n        "])),(n()(),w._35(null,["\n        "])),(n()(),w._17(0,null,null,1,"app-footer",[],null,null,null,o,x)),w._15(49152,null,0,m,[],null,null),(n()(),w._35(null,["\n      "])),(n()(),w._35(null,["\n  "]))],function(n,l){n(l,9,0)},null)}function i(n){return w._37(0,[(n()(),w._17(0,null,null,1,"app-root",[],null,null,null,r,v)),w._15(49152,null,0,s,[],null,null)],null,null)}Object.defineProperty(l,"__esModule",{value:!0});var c={production:!0},_=function(){function n(){}return n}(),s=function(){function n(){}return n}(),p=function(){function n(){this.ownerName="Vitalii Ryzhenko"}return n}(),f=t("/oeL"),d=t("BkNc"),h=[".header-container[_ngcontent-%COMP%] {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 10px 0;\n            max-width: 1160px;\n            width: 100%;\n            margin: 0 auto;\n        }\n        .name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n            color: #fafafa;\n            cursor: pointer;\n            font-size: 24px;\n        }\n        .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n            max-width: 50px;\n            max-height: 50px;\n            object-fit: contain;\n            border-radius: 2px;\n        }"],g=f._14({encapsulation:0,styles:h,data:{}}),m=(f._12("app-header",p,u,{},{},[]),function(){function n(){}return n}()),b=t("/oeL"),k=[""],x=b._14({encapsulation:0,styles:k,data:{}}),w=(b._12("app-footer",m,a,{},{},[]),t("/oeL")),y=t("BkNc"),S=["app-header[_ngcontent-%COMP%] {\n      z-index: 1;\n      width: 100%;\n      background-color: #24292E;\n      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    }\n\n    \n    .app-wrapper[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      min-height: 100vh;\n    }\n    .main[_ngcontent-%COMP%] {\n      flex: 1;\n      background-color: #dadada;\n    }"],v=w._14({encapsulation:0,styles:S,data:{}}),E=w._12("app-root",s,i,{},{},[]),O=t("/oeL"),j=t("qbdv"),R=t("fc+i"),P=t("CPp0"),C=t("BkNc"),D=t("/EYG"),U=t("65mH"),I=O._13(_,[s],function(n){return O._27([O._28(512,O.k,O._9,[[8,[E]],[3,O.k],O.E]),O._28(5120,O.A,O._26,[[3,O.A]]),O._28(4608,j.l,j.k,[O.A]),O._28(5120,O.c,O._18,[]),O._28(5120,O.y,O._23,[]),O._28(5120,O.z,O._24,[]),O._28(4608,R.b,R.s,[j.c]),O._28(6144,O.Q,null,[R.b]),O._28(4608,R.e,R.f,[]),O._28(5120,R.c,function(n,l,t,e){return[new R.k(n),new R.o(l),new R.n(t,e)]},[j.c,j.c,j.c,R.e]),O._28(4608,R.d,R.d,[R.c,O.G]),O._28(135680,R.m,R.m,[j.c]),O._28(4608,R.l,R.l,[R.d,R.m]),O._28(6144,O.O,null,[R.l]),O._28(6144,R.p,null,[R.m]),O._28(4608,O.X,O.X,[O.G]),O._28(4608,R.g,R.g,[j.c]),O._28(4608,R.i,R.i,[j.c]),O._28(4608,P.c,P.c,[]),O._28(4608,P.g,P.b,[]),O._28(5120,P.i,P.j,[]),O._28(4608,P.h,P.h,[P.c,P.g,P.i]),O._28(4608,P.f,P.a,[]),O._28(5120,P.d,P.k,[P.h,P.f]),O._28(5120,C.a,C.w,[C.k]),O._28(4608,C.d,C.d,[]),O._28(6144,C.f,null,[C.d]),O._28(135680,C.o,C.o,[C.k,O.D,O.j,O.w,C.f]),O._28(4608,C.e,C.e,[]),O._28(5120,C.h,C.z,[C.x]),O._28(5120,O.b,function(n){return[n]},[C.h]),O._28(4608,D.a,D.a,[P.d]),O._28(4608,U.a,U.a,[]),O._28(512,j.b,j.b,[]),O._28(1024,O.o,R.q,[]),O._28(1024,O.F,function(){return[C.s()]},[]),O._28(512,C.x,C.x,[O.w]),O._28(1024,O.d,function(n,l,t){return[R.r(n,l),C.y(t)]},[[2,R.h],[2,O.F],C.x]),O._28(512,O.e,O.e,[[2,O.d]]),O._28(131584,O._16,O._16,[O.G,O._10,O.w,O.o,O.k,O.e]),O._28(2048,O.g,null,[O._16]),O._28(512,O.f,O.f,[O.g]),O._28(512,R.a,R.a,[[3,R.a]]),O._28(512,P.e,P.e,[]),O._28(1024,C.r,C.u,[[3,C.k]]),O._28(512,C.q,C.c,[]),O._28(512,C.b,C.b,[]),O._28(256,C.g,{},[]),O._28(1024,j.h,C.t,[j.n,[2,j.a],C.g]),O._28(512,j.g,j.g,[j.h]),O._28(512,O.j,O.j,[]),O._28(512,O.D,O.U,[O.j,[2,O.V]]),O._28(1024,C.i,function(){return[[{path:"",loadChildren:"app/page/home/home.module#HomeModule"},{path:"kottans",loadChildren:"app/page/kottans/kottans-detail.module#KottansModule"},{path:"**",redirectTo:"/404"},{path:"404",loadChildren:"app/page/404/nocontent.module#NoContentModule"}]]},[]),O._28(1024,C.k,C.v,[O.g,C.q,C.b,j.g,O.w,O.D,O.j,C.i,C.g,[2,C.p],[2,C.j]]),O._28(512,C.m,C.m,[[2,C.r],[2,C.k]]),O._28(512,_,_,[])])}),N=t("/oeL"),M=t("fc+i");c.production&&Object(N._3)(),Object(M.j)().bootstrapModuleFactory(I)},gFIY:function(n,l,t){function e(n){var l=u[n];return l?t.e(l[1]).then(function(){return t(l[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var u={"app/page/404/nocontent.module.ngfactory":["lTFf",2],"app/page/home/home.module.ngfactory":["qlI+",0],"app/page/kottans/kottans-detail.module.ngfactory":["hx08",1]};e.keys=function(){return Object.keys(u)},n.exports=e,e.id="gFIY"}},[0]);