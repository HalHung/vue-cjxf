webpackJsonp([3],{"2QUX":function(t,a,e){a=t.exports=e("FZ+f")(!0),a.push([t.i,".banner{display:block;position:relative;height:300px;overflow:hidden}","",{version:3,sources:["D:/xampp/htdocs/vue-greattime/src/pages/_part/banner.vue"],names:[],mappings:"AACA,QACE,cAAe,AACf,kBAAmB,AACnB,aAAc,AACd,eAAiB,CAClB",file:"banner.vue",sourcesContent:["\n.banner {\n  display: block;\n  position: relative;\n  height: 300px;\n  overflow: hidden;\n}"],sourceRoot:""}])},"5URT":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"banner"},[e("div",{staticClass:"bg",style:{"background-image":"url("+t.img+")"}})])},s=[],r={render:n,staticRenderFns:s};a.a=r},Axt5:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"btn  btn-block",attrs:{href:"#"}},[e("i",{staticClass:"fa fa-facebook"}),t._v(" 以 Facebook 帳戶登入 ")])}],r={render:n,staticRenderFns:s};a.a=r},Cvd1:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-layout",[e("template",{slot:"necker"},[e("banner",{attrs:{img:"/static/img/member_banner.jpg"}}),t._v(" "),e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"breadcrumb-item active"},[t._v("忘記密碼")])])],1),t._v(" "),e("template",{slot:"page-title"},[e("h1",[t._v("註冊")])]),t._v(" "),e("template",{slot:"body"},[e("div",{staticClass:"container container-xs"},[e("div",{staticClass:"login-box mr-auto mb-6"},[e("p",{staticClass:"text-center"},[t._v("您將收到一封電郵，請依照裡面的指示重設密碼。")]),t._v(" "),e("div",{staticClass:"form"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control text-center",class:{"is-invalid":t.errors.has("email")},attrs:{type:"text",name:"email",placeholder:"EMAIL",autofocus:""},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("email"),expression:"errors.has('email')"}],staticClass:"invalid-feedback"},[t._v(t._s(t.errors.first("email")))])]),t._v(" "),e("div",{staticClass:"login-footer text-center mt-5 px-5"},[e("div",{staticClass:"form-group "},[e("button",{staticClass:"px-5 btn  btn-primary",attrs:{type:"submit"}},[t._v("確認")])])])])])])])],2)},s=[],r={render:n,staticRenderFns:s};a.a=r},"EM4/":function(t,a,e){"use strict";a.a={methods:{hasSlot:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return!!this.$slots[t]}}}},FTSY:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrap"},[e("header",[t._t("header",[e("app-header")])],2),t._v(" "),t.hasSlot("necker")?e("div",{staticClass:"necker"},[t._t("necker")],2):t._e(),t._v(" "),t.hasSlot("body")?e("div",{staticClass:"bodier"},[t.hasSlot("page-title")?e("div",{staticClass:"page-title"},[t._t("page-title")],2):t._e(),t._v(" "),t._t("body")],2):t._e(),t._v(" "),e("footer",{staticClass:"footer"},[t._t("footer",[e("app-footer")])],2)])},s=[],r={render:n,staticRenderFns:s};a.a=r},Fmzc:function(t,a,e){"use strict";function n(t){e("WCVY")}var s=e("LxHq"),r=e("Axt5"),i=e("VU/8"),o=n,c=i(s.a,r.a,!1,o,"data-v-09992f91",null);a.a=c.exports},IeSX:function(t,a,e){a=t.exports=e("FZ+f")(!0),a.push([t.i,".page-title[data-v-492772ca]{text-align:center;padding:6rem 0}.page-title h1[data-v-492772ca]{font-size:1.8rem}","",{version:3,sources:["D:/xampp/htdocs/vue-greattime/src/layouts/Default.vue"],names:[],mappings:"AACA,6BACE,kBAAmB,AACnB,cAAgB,CACjB,AACD,gCACI,gBAAkB,CACrB",file:"Default.vue",sourcesContent:["\n.page-title[data-v-492772ca] {\n  text-align: center;\n  padding: 6rem 0;\n}\n.page-title h1[data-v-492772ca] {\n    font-size: 1.8rem;\n}\n"],sourceRoot:""}])},J3Zp:function(t,a,e){var n=e("IeSX");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("34c51402",n,!0,{})},KB0Y:function(t,a,e){"use strict";function n(t){e("pubL")}var s=e("LG9B"),r=e("5URT"),i=e("VU/8"),o=n,c=i(s.a,r.a,!1,o,null,null);a.a=c.exports},LG9B:function(t,a,e){"use strict";a.a={props:["img"]}},Lne2:function(t,a,e){a=t.exports=e("FZ+f")(!0),a.push([t.i,".inner[data-v-5079cf36]{overflow:hidden;position:relative;display:block;width:100%;background:#333}.inner .item[data-v-5079cf36]{text-align:center;color:#6d6d6d;padding:3rem}.inner .item p[data-v-5079cf36]{font-size:.9rem}.inner .item i.fa[data-v-5079cf36]{margin-bottom:1rem;font-size:2rem}.row[data-v-5079cf36]{color:#fff}.append[data-v-5079cf36]{padding:1rem;background:#000;color:#fff;text-align:center;color:#6d6d6d}","",{version:3,sources:["D:/xampp/htdocs/vue-greattime/src/pages/_part/footer.vue"],names:[],mappings:"AACA,wBACE,gBAAiB,AACjB,kBAAmB,AACnB,cAAe,AACf,WAAY,AACZ,eAAiB,CAClB,AACD,8BACE,kBAAmB,AACnB,cAAe,AACf,YAAc,CACf,AACD,gCACE,eAAkB,CACnB,AACD,mCACE,mBAAoB,AACpB,cAAgB,CACjB,AACD,sBACE,UAAY,CACb,AACD,yBACE,aAAc,AACd,gBAAiB,AACjB,WAAY,AACZ,kBAAmB,AACnB,aAAe,CAChB",file:"footer.vue",sourcesContent:["\n.inner[data-v-5079cf36] {\n  overflow: hidden;\n  position: relative;\n  display: block;\n  width: 100%;\n  background: #333;\n}\n.inner .item[data-v-5079cf36] {\n  text-align: center;\n  color: #6d6d6d;\n  padding: 3rem;\n}\n.inner .item p[data-v-5079cf36] {\n  font-size: 0.9rem;\n}\n.inner .item i.fa[data-v-5079cf36] {\n  margin-bottom: 1rem;\n  font-size: 2rem;\n}\n.row[data-v-5079cf36] {\n  color: #fff;\n}\n.append[data-v-5079cf36] {\n  padding: 1rem;\n  background: #000;\n  color: #fff;\n  text-align: center;\n  color: #6d6d6d;\n}"],sourceRoot:""}])},LxHq:function(t,a,e){"use strict";a.a={name:"fa-login",data:function(){return{}},methods:{test:function(){}},created:function(){},beforeDestroy:function(){}}},RQq5:function(t,a,e){"use strict";function n(t){e("vO8C")}var s=e("odoq"),r=e("VmZx"),i=e("VU/8"),o=n,c=i(s.a,r.a,!1,o,"data-v-577faa30",null);a.a=c.exports},TGBI:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("ubes"),s=e("Cvd1"),r=e("VU/8"),i=r(n.a,s.a,!1,null,null,null);a.default=i.exports},VmZx:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-md  fixed-top ",class:{invert:t.isReading}},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:{path:"/"}}},[e("img",{attrs:{src:"/static/img/"+t.logo,alt:""}})]),t._v(" "),e("ul",{staticClass:"navbar-nav ml-auto"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link btn btn-primary btn-icon",attrs:{to:{name:"account.profile"}}},[e("i",{staticClass:"fa fa-user"})])],1)])],1)])},s=[],r={render:n,staticRenderFns:s};a.a=r},WCVY:function(t,a,e){var n=e("zMyg");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("f13a05ea",n,!0,{})},"YmN+":function(t,a,e){a=t.exports=e("FZ+f")(!0),a.push([t.i,".navbar[data-v-577faa30]{background-color:transparent}.navbar.invert[data-v-577faa30]{background-color:#fff;border-bottom:1px solid #ccc}.navbar .navbar-brand[data-v-577faa30]{height:50px}.navbar .navbar-brand img[data-v-577faa30]{height:100%}","",{version:3,sources:["D:/xampp/htdocs/vue-greattime/src/pages/_part/header.vue"],names:[],mappings:"AACA,yBACE,4BAA8B,CAC/B,AACD,gCACE,sBAAuB,AACvB,4BAA8B,CAC/B,AACD,uCACE,WAAa,CACd,AACD,2CACE,WAAa,CACd",file:"header.vue",sourcesContent:["\n.navbar[data-v-577faa30] {\n  background-color: transparent;\n}\n.navbar.invert[data-v-577faa30] {\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n}\n.navbar .navbar-brand[data-v-577faa30] {\n  height: 50px;\n}\n.navbar .navbar-brand img[data-v-577faa30] {\n  height: 100%;\n}"],sourceRoot:""}])},ao7l:function(t,a,e){"use strict";function n(t){e("J3Zp")}var s=e("nZvO"),r=e("FTSY"),i=e("VU/8"),o=n,c=i(s.a,r.a,!1,o,"data-v-492772ca",null);a.a=c.exports},glvU:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"inner"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row "},[e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"item"},[e("i",{staticClass:"fa fa-phone"}),t._v(" "),e("p",[t._v("+ 886 2 7713 4333")])])]),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"item"},[e("i",{staticClass:"fa fa-building"}),t._v(" "),e("p",[t._v("105 台北市松山區南京東路四段163號5樓")])])]),t._v(" "),e("div",{staticClass:"col-sm-4"},[e("div",{staticClass:"item"},[e("i",{staticClass:"fa fa-envelope-o"}),t._v(" "),e("p",[t._v("greattimemusic@gmail.com")])])])])]),t._v(" "),e("div",{staticClass:"append"},[e("div",{staticClass:"container"},[t._v("Copyright 2018, 時大音樂有限公司. All Rights Reserved")])])])}],r={render:n,staticRenderFns:s};a.a=r},hcmg:function(t,a,e){var n=e("Lne2");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("0b19aecf",n,!0,{})},ip1b:function(t,a,e){"use strict";function n(t){e("hcmg")}var s=e("q9Jw"),r=e("glvU"),i=e("VU/8"),o=n,c=i(s.a,r.a,!1,o,"data-v-5079cf36",null);a.a=c.exports},nZvO:function(t,a,e){"use strict";var n=e("EM4/"),s=e("RQq5"),r=e("ip1b");a.a={name:"default-layout",mixins:[n.a],components:{appHeader:s.a,appFooter:r.a},data:function(){return{menuCollapsed:!1}},methods:{logout:function(){this.$store.dispatch("auth/logout")},toggleMenu:function(){this.menuCollapsed=!this.menuCollapsed}}}},odoq:function(t,a,e){"use strict";a.a={data:function(){return{isReading:!1}},computed:{logo:function(){return this.isReading?"index_logo_invert.png":"index_logo.png"}},methods:{handleScroll:function(t){var a=document.documentElement.scrollTop||document.body.scrollTop;this.isReading=a>100}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}}},pubL:function(t,a,e){var n=e("2QUX");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("3616e017",n,!0,{})},q9Jw:function(t,a,e){"use strict";a.a={}},ubes:function(t,a,e){"use strict";var n=e("ao7l"),s=e("KB0Y"),r=e("Fmzc");a.a={name:"account-index",inject:{$validator:"$validator"},components:{VLayout:n.a,banner:s.a,btnFb:r.a},data:function(){return{email:""}},methods:{login:function(){}}}},vO8C:function(t,a,e){var n=e("YmN+");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("5c305484",n,!0,{})},zMyg:function(t,a,e){a=t.exports=e("FZ+f")(!0),a.push([t.i,".btn[data-v-09992f91]{background:#4267b2;color:#fff;border-radius:5px}.btn[data-v-09992f91]:hover{background:#35518a;color:#fff}","",{version:3,sources:["D:/xampp/htdocs/vue-greattime/src/components/btn-fb.vue"],names:[],mappings:"AACA,sBACE,mBAAoB,AACpB,WAAY,AACZ,iBAAmB,CACpB,AACD,4BACI,mBAAoB,AACpB,UAAY,CACf",file:"btn-fb.vue",sourcesContent:["\n.btn[data-v-09992f91] {\n  background: #4267b2;\n  color: #fff;\n  border-radius: 5px;\n}\n.btn[data-v-09992f91]:hover {\n    background: #35518a;\n    color: #fff;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=3.2a64d07ceeecc6e7387c.js.map