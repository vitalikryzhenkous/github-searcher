webpackJsonp([4],{"/EYG":function(n,t,e){"use strict";e.d(t,"a",function(){return r});var l=e("rlar"),u=(e.n(l),e("CPp0")),a=e("5v8a"),r=(e.n(a),function(){function n(n){this._http=n,this._userName="vitalikryzhenkous",this._clientID="Iv1.aee58b33fc9ae7ab",this._clientSecret="5e9363cf49061ebaabff1e2083ab2e38a16a692e",this.user$=new l.Subject,this.repos$=new l.Subject,this.language$=new l.Subject,this.contributors$=new l.Subject,this.comments$=new l.Subject}return n.prototype.getDialogData=function(n,t){console.log("CHECK ",this._userName,n,t);var e="https://api.github.com/repos/"+this._userName+"/"+n+"/"+t;return this._http.get(e).map(function(n){return n.json()})},n.prototype.updateUserName=function(n){this._userName=n},n.prototype.getUser=function(){var n="https://api.github.com/users/"+this._userName+"?client_id="+this._clientID+"&client_secret="+this._clientSecret;return this._http.get(n).map(function(n){return n.json()})},n.prototype.getUserRepos=function(){var n="https://api.github.com/users/"+this._userName+"/repos?client_id="+this._clientID+"&client_secret="+this._clientSecret;return this._http.get(n).map(function(n){return n.json()})},n.prototype.storeInitialState=function(n,t){switch(n){case"STORE_USER":this.user$.next(t);break;case"STORE_REPOS":this.repos$.next(t);break;case"STORE_LANGUAGE":this.language$.next(t);break;case"STORE_CONTRIBUTORS":this.contributors$.next(t);break;case"STORE_COMMENTS":this.comments$.next(t);break;default:console.log("DEFAULT at storeInitialState")}},n.prototype.getStoreState=function(n){switch(n){case"REQUEST_USER":return this.user$.asObservable();case"REQUEST_REPOS":return this.repos$.asObservable();case"REQUEST_LANGUAGE":return this.language$.asObservable();case"REQUEST_CONTRIBUTORS":return this.contributors$.asObservable();case"REQUEST_COMMENTS":return this.comments$.asObservable();default:console.log("DEFAULT at storeInitialState")}},n.ctorParameters=function(){return[{type:u.d}]},n}())},0:function(n,t,e){n.exports=e("cDNt")},"65mH":function(n,t,e){"use strict";e.d(t,"a",function(){return u});var l=e("rlar"),u=(e.n(l),function(){function n(){this.storeUser=new l.Subject,this.storeRepos=new l.Subject}return n.prototype.storeInitialData=function(n,t){switch(n){case"STORE_USER":this.storeUser.next(t);break;case"STORE_REPOS":this.storeRepos.next(t);break;default:console.log("Default is Fire at storeInitialData | action: "+n+" & payload: "+t)}},n.prototype.getIntialData=function(n){switch(n){case"GET_USER":return this.storeUser.asObservable();case"GET_REPOS":return this.storeRepos.asObservable();default:console.log("Default is Fire at getIntialData | action: "+n)}},n.ctorParameters=function(){return[]},n}())},cDNt:function(n,t,e){"use strict";function l(n){return h._38(0,[(n()(),h._36(null,["\n        "])),(n()(),h._17(0,null,null,10,"header",[["class","header-container"]],null,null,null,null,null)),(n()(),h._36(null,["\n            "])),(n()(),h._17(0,null,null,4,"div",[["class","header-item name"]],null,null,null,null,null)),(n()(),h._17(0,null,null,3,"span",[],null,[[null,"click"]],function(n,t,e){var l=!0;if("click"===t){l=!1!==h._29(n,5).onClick()&&l}return l},null,null)),h._15(16384,null,0,d.l,[d.k,d.a,[8,null],h.N,h.n],{routerLink:[0,"routerLink"]},null),h._30(1),(n()(),h._36(null,["",""])),(n()(),h._36(null,["\n            "])),(n()(),h._17(0,null,null,1,"div",[["class","header-item avatar"]],null,null,null,null,null)),(n()(),h._36(null,["\n            "])),(n()(),h._36(null,["\n        "])),(n()(),h._36(null,["\n    "]))],function(n,t){n(t,5,0,n(t,6,0,"/"))},function(n,t){n(t,7,0,t.component.ownerName)})}function u(n){return h._38(0,[(n()(),h._17(0,null,null,1,"app-header",[],null,null,null,l,g)),h._15(49152,null,0,p,[],null,null)],null,null)}function a(n){return b._38(0,[(n()(),b._36(null,["\n        "])),(n()(),b._17(0,null,null,0,"footer",[],null,null,null,null,null)),(n()(),b._36(null,["\n    "]))],null,null)}function r(n){return b._38(0,[(n()(),b._17(0,null,null,1,"app-footer",[],null,null,null,a,k)),b._15(49152,null,0,m,[],null,null)],null,null)}function o(n){return E._38(0,[(n()(),E._36(null,["\n      "])),(n()(),E._17(0,null,null,13,"div",[["class","app-wrapper"]],null,null,null,null,null)),(n()(),E._36(null,["\n        "])),(n()(),E._17(0,null,null,1,"app-header",[],null,null,null,l,g)),E._15(49152,null,0,p,[],null,null),(n()(),E._36(null,["\n        "])),(n()(),E._17(0,null,null,4,"div",[["class","main"]],null,null,null,null,null)),(n()(),E._36(null,["\n          "])),(n()(),E._17(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),E._15(212992,null,0,O.n,[O.b,E.Z,E.k,[8,null],E.i],null,null),(n()(),E._36(null,["\n        "])),(n()(),E._36(null,["\n        "])),(n()(),E._17(0,null,null,1,"app-footer",[],null,null,null,a,k)),E._15(49152,null,0,m,[],null,null),(n()(),E._36(null,["\n      "])),(n()(),E._36(null,["\n  "]))],function(n,t){n(t,9,0)},null)}function i(n){return E._38(0,[(n()(),E._17(0,null,null,1,"app-root",[],null,null,null,o,w)),E._15(49152,null,0,_,[],null,null)],null,null)}Object.defineProperty(t,"__esModule",{value:!0});var c={production:!0},s=function(){function n(){}return n}(),_=function(){function n(){}return n}(),p=function(){function n(){this.ownerName="Vitalii Ryzhenko"}return n}(),h=e("/oeL"),d=e("BkNc"),f=[".header-container[_ngcontent-%COMP%] {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 10px 0;\n            max-width: 1160px;\n            width: 100%;\n            margin: 0 auto;\n        }\n        .name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n            color: #fafafa;\n            cursor: pointer;\n            font-size: 24px;\n        }\n        .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n            max-width: 50px;\n            max-height: 50px;\n            object-fit: contain;\n            border-radius: 2px;\n        }\n        @media screen and (min-width: 768px) and (max-width: 1160px) { \n            .header-container[_ngcontent-%COMP%] {\n                max-width: 760px;\n            }\n        }\n        @media screen and (min-width: 320px ) and (max-width: 767px) { \n            .header-container[_ngcontent-%COMP%] {\n                max-width: 300px;\n            } \n         }"],g=h._14({encapsulation:0,styles:f,data:{}}),m=(h._12("app-header",p,u,{},{},[]),function(){function n(){}return n}()),b=e("/oeL"),x=[""],k=b._14({encapsulation:0,styles:x,data:{}}),E=(b._12("app-footer",m,r,{},{},[]),e("/oeL")),O=e("BkNc"),S=["app-header[_ngcontent-%COMP%] {\n      z-index: 1;\n      width: 100%;\n      background-color: #24292E;\n      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n    }\n\n    \n    .app-wrapper[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      min-height: 100vh;\n    }\n    .main[_ngcontent-%COMP%] {\n      flex: 1;\n      background-color: #dadada;\n    }"],w=E._14({encapsulation:0,styles:S,data:{}}),v=E._12("app-root",_,i,{},{},[]),R=e("/oeL"),y=e("qbdv"),j=e("fc+i"),C=e("CPp0"),T=e("BkNc"),N=e("/EYG"),U=e("65mH"),P=R._13(s,[_],function(n){return R._27([R._28(512,R.k,R._9,[[8,[v]],[3,R.k],R.E]),R._28(5120,R.A,R._26,[[3,R.A]]),R._28(4608,y.m,y.l,[R.A]),R._28(5120,R.c,R._18,[]),R._28(5120,R.y,R._23,[]),R._28(5120,R.z,R._24,[]),R._28(4608,j.b,j.s,[y.c]),R._28(6144,R.Q,null,[j.b]),R._28(4608,j.e,j.f,[]),R._28(5120,j.c,function(n,t,e,l){return[new j.k(n),new j.o(t),new j.n(e,l)]},[y.c,y.c,y.c,j.e]),R._28(4608,j.d,j.d,[j.c,R.G]),R._28(135680,j.m,j.m,[y.c]),R._28(4608,j.l,j.l,[j.d,j.m]),R._28(6144,R.O,null,[j.l]),R._28(6144,j.p,null,[j.m]),R._28(4608,R.X,R.X,[R.G]),R._28(4608,j.g,j.g,[y.c]),R._28(4608,j.i,j.i,[y.c]),R._28(4608,C.c,C.c,[]),R._28(4608,C.g,C.b,[]),R._28(5120,C.i,C.j,[]),R._28(4608,C.h,C.h,[C.c,C.g,C.i]),R._28(4608,C.f,C.a,[]),R._28(5120,C.d,C.k,[C.h,C.f]),R._28(5120,T.a,T.w,[T.k]),R._28(4608,T.d,T.d,[]),R._28(6144,T.f,null,[T.d]),R._28(135680,T.o,T.o,[T.k,R.D,R.j,R.w,T.f]),R._28(4608,T.e,T.e,[]),R._28(5120,T.h,T.z,[T.x]),R._28(5120,R.b,function(n){return[n]},[T.h]),R._28(4608,N.a,N.a,[C.d]),R._28(4608,U.a,U.a,[]),R._28(512,y.b,y.b,[]),R._28(1024,R.o,j.q,[]),R._28(1024,R.F,function(){return[T.s()]},[]),R._28(512,T.x,T.x,[R.w]),R._28(1024,R.d,function(n,t,e){return[j.r(n,t),T.y(e)]},[[2,j.h],[2,R.F],T.x]),R._28(512,R.e,R.e,[[2,R.d]]),R._28(131584,R._16,R._16,[R.G,R._10,R.w,R.o,R.k,R.e]),R._28(2048,R.g,null,[R._16]),R._28(512,R.f,R.f,[R.g]),R._28(512,j.a,j.a,[[3,j.a]]),R._28(512,C.e,C.e,[]),R._28(1024,T.r,T.u,[[3,T.k]]),R._28(512,T.q,T.c,[]),R._28(512,T.b,T.b,[]),R._28(256,T.g,{},[]),R._28(1024,y.h,T.t,[y.o,[2,y.a],T.g]),R._28(512,y.g,y.g,[y.h]),R._28(512,R.j,R.j,[]),R._28(512,R.D,R.U,[R.j,[2,R.V]]),R._28(1024,T.i,function(){return[[{path:"",loadChildren:"app/page/home/home.module#HomeModule"},{path:"kottans",loadChildren:"app/page/kottans/kottans-detail.module#KottansModule"},{path:"**",redirectTo:"/404"},{path:"404",loadChildren:"app/page/404/nocontent.module#NoContentModule"}]]},[]),R._28(1024,T.k,T.v,[R.g,T.q,T.b,y.g,R.w,R.D,R.j,T.i,T.g,[2,T.p],[2,T.j]]),R._28(512,T.m,T.m,[[2,T.r],[2,T.k]]),R._28(512,s,s,[])])}),M=e("/oeL"),D=e("fc+i");c.production&&Object(M._3)(),Object(D.j)().bootstrapModuleFactory(P)},gFIY:function(n,t,e){function l(n){var t=u[n];return t?e.e(t[1]).then(function(){return e(t[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var u={"app/page/404/nocontent.module.ngfactory":["lTFf",2],"app/page/home/home.module.ngfactory":["qlI+",0],"app/page/kottans/kottans-detail.module.ngfactory":["hx08",1]};l.keys=function(){return Object.keys(u)},n.exports=l,l.id="gFIY"}},[0]);