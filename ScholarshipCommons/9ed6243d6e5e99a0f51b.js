(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{284:function(t,i,e){"use strict";e.d(i,"a",function(){return s}),e.d(i,"d",function(){return n}),e.d(i,"b",function(){return a}),e.d(i,"c",function(){return o});var s=[],n=[{name:"선발 공고문",path:"/scholarship/1"},{name:"선발 공고문 현황",path:"/temp/scholarship-list"},{name:"양식 미리보기",path:"/scholarship/preview-form"},{name:"학생/장학금신청",path:"/apply"}],a=[{name:"스칼라십커먼즈 홈",path:"/"}],o={login:"/sign/sign-in",signUp:"/sign/sign-up",resetPassword:"/sign/resetPassword",signUpStep1:"/sign/sign-up/step1",signUpStep2:"/sign/sign-up/step2",signUpStep3:"/sign/sign-up/step3",signUpFinish:"/sign/sign-up/finish"}},362:function(t,i,e){var s=e(551);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e(6).default)("3672fe28",s,!0,{sourceMap:!1})},550:function(t,i,e){"use strict";var s=e(362);e.n(s).a},551:function(t,i,e){(t.exports=e(5)(!1)).push([t.i,"\n.sign-container[data-v-09832e05]{width:400px;height:625px;margin-top:80px;position:relative\n}\n.tab-button[data-v-09832e05]{margin:40px 0\n}\n.tab-button .item[data-v-09832e05]{box-shadow:0 5px 10px 0 hsla(0,0%,78.4%,.6);width:94px\n}\n.form-area[data-v-09832e05]{width:400px;height:240px\n}\n.form-text-area[data-v-09832e05]{width:360px;margin:10px auto 0;position:relative\n}\n.form-text[data-v-09832e05]{width:360px;padding-right:30px\n}\n.form-text-sub-icon[data-v-09832e05]{position:absolute;top:10px;right:7px\n}\n.indicator-black[data-v-09832e05],.indicator-gray[data-v-09832e05]{margin-top:40px;margin-right:10px\n}\n.auto-complete[data-v-09832e05]{width:360px;max-height:232px;overflow:auto;border:1px solid #c8c8c8;border-radius:4px;box-shadow:0 8px 8px 0 rgba(45,42,38,.1);background-color:#fff;position:absolute;z-index:1;text-align:left\n}\n.auto-complete li[data-v-09832e05]{padding:10px;cursor:pointer\n}\n.auto-complete li[data-v-09832e05]:hover{background-color:hsla(0,0%,78.4%,.2)\n}\n.helper-area[data-v-09832e05]{position:absolute;top:0;right:-400px;width:100%;text-align:left\n}",""])},693:function(t,i,e){"use strict";e.r(i);var s=e(2),n=e.n(s),a=e(284),o={layout:"sign",name:"step1",data:function(){return{signMenu:a.c,signType:[{type:"student",text:"학생"},{type:"foundation",text:"운영기관"},{type:"judge",text:"심사위원"},{type:"recommender",text:"추천인"}],selSignType:"student",mail:"",password:"",passwordCheck:"",belong:"",belongText:"",belongList:[],belongFindList:[],isFindOpen:!1}},methods:{selectSignupType:function(t){this.selSignType=t},next:function(){this.$store.dispatch("sign/changeStep",{step:"step2"})},findBelong:function(t){var i=this;this.belongFindList=this.belongList.map(function(t){return-1!==t.indexOf(i.belongText)?n()({},i.highlightText(t)):null}).filter(function(t){return null!==t})},highlightText:function(t){var i=t,e=this.belongText,s=i.indexOf(e),n=s+e.length;return{sText:i.substring(0,s),hText:i.substring(s,n),eText:i.substring(n,i.length),orgin:i}},selBelong:function(t){this.belong=this.belongFindList[t].orgin,this.belongText=this.belongFindList[t].orgin},openFindBox:function(){this.isFindOpen=!0,this.findBelong()},closeFindBox:function(){var t=this;setTimeout(function(){t.isFindOpen=!1},200)}},computed:{},watch:{},mounted:function(){this.belongList=["고구려대학교","고려대학교(세종캠퍼스)","고려대학교(안암캠퍼스)","고려사이버대학교","고신대학교"]}},r=(e(550),e(1)),l=Object(r.a)(o,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container align-center",staticStyle:{position:"relative"}},[e("div",{staticClass:"card sign-container"},[e("div",{staticClass:"tab-button"},[t._l(t.signType,function(i){return[e("div",{staticClass:"item",class:{active:t.selSignType===i.type},on:{click:function(e){t.selectSignupType(i.type)}}},[t._v(t._s(i.text))])]})],2),t._v(" "),"foundation"!==t.selSignType?e("div",{staticClass:"form-area"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"form-text-area"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.belongText,expression:"belongText"}],staticClass:"form-text",attrs:{type:"text",placeholder:"student"===t.selSignType?"소속학교 입력":"소속기관 입력"},domProps:{value:t.belongText},on:{keyup:t.findBelong,change:t.findBelong,focus:t.openFindBox,blur:t.closeFindBox,input:function(i){i.target.composing||(t.belongText=i.target.value)}}}),t._v(" "),t._m(3),t._v(" "),t.isFindOpen?e("div",{staticClass:"auto-complete"},[e("ul",[t._l(t.belongFindList,function(i,s){return[e("li",{on:{click:function(i){t.selBelong(s)}}},[e("span",[t._v(t._s(i.sText))]),e("span",{staticStyle:{color:"#009490"}},[t._v(t._s(i.hText))]),e("span",[t._v(t._s(i.eText))])])]})],2)]):t._e(),t._v(" "),t._m(4)])]):t._e(),t._v(" "),"foundation"===t.selSignType?e("div",{staticClass:"form-area"},[t._m(5)]):t._e(),t._v(" "),"foundation"!==t.selSignType?e("div",{staticStyle:{width:"360px",margin:"0 auto 0 auto","text-align":"left","font-size":"12px"}},[t._m(6),t._v(" "),t._m(7)]):t._e(),t._v(" "),e("div",{staticStyle:{position:"absolute",bottom:"40px",width:"400px"}},[e("div",{staticStyle:{"margin-bottom":"10px"}},["foundation"===t.selSignType?[e("button",{staticClass:"btn primary",staticStyle:{width:"360px"}},[t._v("스칼라십커먼즈 이메일주소 복사")])]:[e("button",{staticClass:"btn primary",staticStyle:{width:"360px"},on:{click:t.next}},[t._v("회원가입")])]],2),t._v(" "),e("div",[e("nuxt-link",{attrs:{to:t.signMenu.login}},[e("button",{staticClass:"btn outline primary",staticStyle:{width:"360px"}},[t._v("로그인")])])],1),t._v(" "),t._m(8)])])])},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-text-area"},[i("input",{staticClass:"form-text",attrs:{type:"text",placeholder:"이메일주소"}}),this._v(" "),i("div",{staticClass:"form-text-sub-icon"},[i("i",{staticClass:"icon mail-gray s"})]),this._v(" "),i("div",{staticClass:"helper-area"},[i("div",{staticClass:"helper-outline-circle"},[i("i",{staticClass:"icon error-red xs"}),this._v(" \n            "),i("span",[this._v("사용중인 이메일 입니다")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-text-area"},[i("input",{staticClass:"form-text",attrs:{type:"password",placeholder:"비밀번호(영문과 숫자를 포함하여 8자 이상)"}}),this._v(" "),i("div",{staticClass:"form-text-sub-icon",staticStyle:{top:"7px"}},[i("i",{staticClass:"icon locker-gray s",staticStyle:{width:"22px",height:"28px"}})]),this._v(" "),i("div",{staticClass:"helper-area"},[i("div",{staticClass:"helper-outline-circle"},[i("i",{staticClass:"icon error-red xs"}),this._v(" \n            "),i("span",[this._v("비밀번호를 확인해주세요")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-text-area"},[i("input",{staticClass:"form-text",attrs:{type:"password",placeholder:"비밀번호 확인"}}),this._v(" "),i("div",{staticClass:"form-text-sub-icon",staticStyle:{top:"7px"}},[i("i",{staticClass:"icon locker-gray s",staticStyle:{width:"22px",height:"28px"}})]),this._v(" "),i("div",{staticClass:"helper-area"},[i("div",{staticClass:"helper-outline-circle"},[i("i",{staticClass:"icon error-red xs"}),this._v(" \n            "),i("span",[this._v("비밀번호를 확인해주세요")])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"form-text-sub-icon"},[i("i",{staticClass:"icon find-gray s"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"helper-area"},[i("div",{staticClass:"helper-outline-circle"},[i("i",{staticClass:"icon error-red xs"}),this._v(" \n            "),i("span",[this._v("소속학교를 입력해주세요")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{"padding-top":"90px"}},[i("i",{staticClass:"icon mail xxl"}),this._v(" "),i("br"),this._v(" 운영기관 회원가입을 위해서는 "),i("br"),this._v(" 스칼리십커먼즈로 연락해 주세요.")])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{display:"flex"}},[i("label",[i("input",{attrs:{type:"checkbox"}}),this._v(" "),i("span",[i("span",{staticStyle:{color:"#fd5d60"}},[this._v("이용약관 및 개인정보 처리방침에")]),this._v(" 동의합니다.")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticStyle:{display:"flex","margin-top":"10px"}},[i("label",[i("input",{attrs:{type:"checkbox"}}),this._v(" "),i("span",[this._v("본인은 만 14세 이상입니다.")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("i",{staticClass:"icon indicator-black"}),this._v(" "),i("i",{staticClass:"icon indicator-gray"}),this._v(" "),i("i",{staticClass:"icon indicator-gray"})])}],!1,null,"09832e05",null);l.options.__file="SignUpStep1.vue";i.default=l.exports}}]);