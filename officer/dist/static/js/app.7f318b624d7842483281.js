webpackJsonp([7],{"+2zQ":function(t,e,n){"use strict";var a,o=n("bOdI"),u=n.n(o),i=n("7+uW"),c=n("zSFD");e.a=(a={},u()(a,c.a,function(t){t.authenticated=!!localStorage.getItem("id_token"),t.authenticated&&(i.default.$http.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("id_token"))}),u()(a,c.b,function(){}),u()(a,c.c,function(t,e){t.authenticated=!0,localStorage.setItem("id_token",e),i.default.$http.defaults.headers.common.Authorization="Bearer "+e}),u()(a,c.d,function(t){t.authenticated=!1,localStorage.removeItem("id_token"),i.default.$http.defaults.headers.common.Authorization=""}),a)},"+BTi":function(t,e){},"/+3h":function(t,e,n){"use strict";var a=function(t){return t.packs};e.a={packs:a}},"25il":function(t,e){},"2rGO":function(t,e){},"31YN":function(t,e,n){"use strict";var a=n("7+uW"),o=n("5/be"),u=n.n(o);a.default.use(u.a)},"4Q36":function(t,e,n){"use strict";var a=n("7+uW"),o=n("IcnI"),u=n("zSFD"),i=function(t){(0,t.commit)(u.a)},c=function(t){(0,t.commit)(u.c,"RandomGeneratedToken"),a.default.router.push({name:"home.index"})},r=function(t){(0,t.commit)(u.c,"RandomGeneratedToken"),o.a.dispatch("account/find"),a.default.router.push({name:"home.index"})},s=function(t){(0,t.commit)(u.d),a.default.router.push({name:"login.index"})};e.a={check:i,register:c,login:r,logout:s}},"5W1q":function(t,e){},"77GP":function(t,e,n){"use strict";var a=n("eOO6");n.n(a);e.a={auth:a}},CGh3:function(t,e,n){"use strict";var a=n("4Q36"),o=n("/+3h"),u=n("+2zQ"),i=n("FyWp");e.a={namespaced:!0,actions:a.a,getters:o.a,mutations:u.a,state:i.a}},CZ0x:function(t,e,n){"use strict";var a=n("fHbC"),o=n("iwwM"),u=n("m3mU"),i=n("MACa");e.a={namespaced:!0,actions:a.a,getters:o.a,mutations:u.a,state:i.a}},"DP/h":function(t,e,n){"use strict";e.a=[{path:"/home",name:"home.index",component:function(){return n.e(0).then(n.bind(null,"JNxQ"))},meta:{auth:!0}},{path:"/account",name:"account.index",component:function(){return n.e(4).then(n.bind(null,"NgpE"))},meta:{auth:!0},children:[{path:"profile",name:"account.profile",component:function(){return n.e(5).then(n.bind(null,"bNtk"))}}]},{path:"/login",name:"login",component:function(){return n.e(2).then(n.bind(null,"zOvo"))},meta:{guest:!0}},{path:"/register",name:"register",component:function(){return n.e(1).then(n.bind(null,"3+Sy"))},meta:{guest:!0}},{path:"/forgot-password",name:"forgot",component:function(){return n.e(3).then(n.bind(null,"TGBI"))},meta:{guest:!0}},{path:"/",redirect:"/home"},{path:"/*",redirect:"/home"}]},FyWp:function(t,e,n){"use strict";e.a={packs:[{id:1,title:"體驗會員",desc:"FB  Google 註冊登錄 免費試聽月費會員",priceInfo:"免費試聽"},{id:2,title:"月費會員",desc:"天天享有各種曲風好音樂 隨時隨地輕鬆享有好心情",priceInfo:"NT$100 元/月"},{id:3,title:"白金會員",desc:"年費優惠 <del>$1440</del> → $1000  陪伴永久不斷線",priceInfo:"NT$1000 元/年"}]}},GRgx:function(t,e,n){"use strict";var a=n("9JMe"),o=n.n(a),u=n("IcnI"),i=n("sSws");o.a.sync(u.a,i.a)},IcnI:function(t,e,n){"use strict";var a=n("7+uW"),o=n("NYxO"),u=n("sax8"),i=(n.n(u),n("CGh3")),c=n("CZ0x");a.default.use(o.b);e.a=new o.b.Store({modules:{global:i.a,auth:c.a},strict:!1,plugins:[]})},Jmt5:function(t,e){},Kkag:function(t,e,n){"use strict";var a=n("//Fk"),o=n.n(a),u=n("7+uW"),i=n("mtWM"),c=n.n(i),r=n("IcnI");c.a.defaults.baseURL="",c.a.defaults.headers.common.Accept="application/json",c.a.interceptors.response.use(function(t){return t},function(t){return 401===t.response.status&&r.a.dispatch("auth/logout"),o.a.reject(t)}),u.default.$http=c.a,Object.defineProperty(u.default.prototype,"$http",{get:function(){return c.a}})},M0FW:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return i});var a="CHECK",o="REGISTER",u="LOGIN",i="LOGOUT"},M93x:function(t,e,n){"use strict";function a(t){n("25il")}var o=n("xJD8"),u=n("Op9b"),i=n("VU/8"),c=a,r=i(o.a,u.a,!1,c,null,null);e.a=r.exports},MACa:function(t,e,n){"use strict";e.a={authenticated:!1}},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("cwe7"),o=(n.n(a),n("+BTi")),u=(n.n(o),n("2X9z")),i=n.n(u),c=n("oq7i"),r=(n.n(c),n("+TD8")),s=n.n(r),f=n("2rGO"),d=(n.n(f),n("nu7/")),l=n.n(d),m=n("7+uW"),h=(n("rXZ2"),n("Kkag"),n("SwH8")),p=n("sSws"),g=(n("GRgx"),n("Y3mD"),n("UbOQ"),n("paEY"),n("etBW"),n("31YN"),n("WlsB")),v=(n.n(g),n("M93x")),b=n("IcnI");m.default.config.productionTip=!1,b.a.dispatch("auth/check"),m.default.use(l.a.directive),m.default.prototype.$loading=l.a.service,m.default.prototype.$msgbox=s.a,m.default.prototype.$alert=s.a.alert,m.default.prototype.$confirm=s.a.confirm,m.default.prototype.$message=i.a,new m.default({el:"#app",i18n:h.a,router:p.a,store:b.a,render:function(t){return t(v.a)}})},Op9b:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],u={render:a,staticRenderFns:o};e.a=u},SwH8:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("7+uW"),o=n("TXmL"),u=n("Vtlw");a.default.use(o.a);var i=new o.a({locale:"en",fallbackLocale:"en",messages:u.a})},UbOQ:function(t,e,n){"use strict";var a=n("5W1q");n.n(a)},Uz6F:function(t,e,n){"use strict";var a=n("bfkd");n.n(a);e.a={auth:a}},Vtlw:function(t,e,n){"use strict";var a=n("77GP"),o=n("Uz6F");e.a={en:a.a,nl:o.a}},WlsB:function(t,e){},Y3mD:function(t,e,n){"use strict";var a=n("Jmt5");n.n(a)},bfkd:function(t,e){t.exports={failed:"Het inloggen is mislukt",success:"Het inloggen is geslaagd"}},cwe7:function(t,e){},eOO6:function(t,e){t.exports={failed:"Login failed",success:"Login successful"}},etBW:function(t,e,n){"use strict";var a=n("7+uW"),o=n("bm7V"),u=n.n(o);a.default.use(u.a,{container:"body",duration:500,easing:"ease",offset:0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0})},fHbC:function(t,e,n){"use strict";var a=n("7+uW"),o=n("IcnI"),u=n("M0FW"),i=function(t){(0,t.commit)(u.a)},c=function(t){(0,t.commit)(u.c,"RandomGeneratedToken"),a.default.router.push({name:"home.index"})},r=function(t){(0,t.commit)(u.c,"RandomGeneratedToken"),o.a.dispatch("account/find"),a.default.router.push({name:"home.index"})},s=function(t){(0,t.commit)(u.d),a.default.router.push({name:"login.index"})};e.a={check:i,register:c,login:r,logout:s}},iwwM:function(t,e,n){"use strict";e.a={}},m3mU:function(t,e,n){"use strict";var a,o=n("bOdI"),u=n.n(o),i=n("7+uW"),c=n("M0FW");e.a=(a={},u()(a,c.a,function(t){t.authenticated=!!localStorage.getItem("id_token"),t.authenticated&&(i.default.$http.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("id_token"))}),u()(a,c.b,function(){}),u()(a,c.c,function(t,e){t.authenticated=!0,localStorage.setItem("id_token",e),i.default.$http.defaults.headers.common.Authorization="Bearer "+e}),u()(a,c.d,function(t){t.authenticated=!1,localStorage.removeItem("id_token"),i.default.$http.defaults.headers.common.Authorization=""}),a)},oq7i:function(t,e){},paEY:function(t,e,n){"use strict";var a=n("7+uW"),o=n("sUu7"),u={inject:!1};a.default.use(o.a,u)},rXZ2:function(t,e,n){"use strict";var a=n("7+uW"),o=n("NYxO");a.default.use(o.b)},sSws:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var a=n("7+uW"),o=n("/ocq"),u=n("DP/h");a.default.use(o.a);var i=new o.a({mode:"history",routes:u.a,base:"/official/",scrollBehavior:function(t,e,n){return{x:0,y:0}}});i.beforeEach(function(t,e,n){n()}),a.default.router=i},xJD8:function(t,e,n){"use strict";e.a={name:"vue-boilerplate",mounted:function(){this.$store.state.auth.authenticated&&this.$store.dispatch("account/find")}}},zSFD:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return i});var a="CHECK",o="REGISTER",u="LOGIN",i="LOGOUT"}},["NHnr"]);
//# sourceMappingURL=app.7f318b624d7842483281.js.map