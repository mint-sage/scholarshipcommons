(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{288:function(t,i,n){"use strict";n.d(i,"a",function(){return a}),n.d(i,"d",function(){return s}),n.d(i,"b",function(){return e}),n.d(i,"c",function(){return p});var a=[],s=[{name:"선발 공고문",path:"/scholarship/1"},{name:"선발 공고문 현황",path:"/temp/scholarship-list"},{name:"양식 미리보기",path:"/scholarship/preview-form"},{name:"학생/장학금신청",path:"/apply"}],e=[{name:"스칼라십커먼즈 홈",path:"/"}],p={login:"/sign/sign-in",signUp:"/sign/sign-up",resetPassword:"/sign/resetPassword",signUpStep1:"/sign/sign-up/step1",signUpStep2:"/sign/sign-up/step2",signUpStep3:"/sign/sign-up/step3",signUpFinish:"/sign/sign-up/finish"}},382:function(t,i,n){var a=n(618);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(6).default)("4ebce772",a,!0,{sourceMap:!1})},617:function(t,i,n){"use strict";var a=n(382);n.n(a).a},618:function(t,i,n){(t.exports=n(5)(!1)).push([t.i,"\n.sign-container[data-v-60a453a0]{width:400px;height:625px;margin-top:80px;position:relative\n}\n.top-title[data-v-60a453a0]{font-size:20px;margin-top:100px\n}\n.mail-address[data-v-60a453a0]{width:193px;height:40px;background-color:hsla(0,0%,78.4%,.2);border-radius:20px;color:#2d2a26;display:flex;justify-content:center;align-items:center;margin:0 auto 20px\n}\n.indicator-black[data-v-60a453a0],.indicator-gray[data-v-60a453a0]{margin-top:40px;margin-right:10px\n}",""])},822:function(t,i,n){"use strict";n.r(i);var a=n(288),s={layout:"sign",name:"finish",data:function(){return{signMenu:a.c}},methods:{next:function(){this.$store.dispatch("sign/changeStep",{step:"finish"})}}},e=(n(617),n(1)),p=Object(e.a)(s,function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"container align-center"},[i("div",{staticClass:"card sign-container"},[this._m(0),this._v(" "),i("div",{staticStyle:{position:"absolute",bottom:"40px",width:"400px"}},[i("div",{staticStyle:{"margin-bottom":"10px"}},[i("button",{staticClass:"btn primary",staticStyle:{width:"360px"},on:{click:this.next}},[this._v("문자 수신 설정 완료")])]),this._v(" "),this._m(1)])])])},[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("div",{staticClass:"top-title"},[t._v("\n        문자 수신 설정하기\n      ")]),t._v(" "),n("div",{staticClass:"dp-flex-center",staticStyle:{"margin-top":"110px"}},[n("input",{staticStyle:{width:"270px"},attrs:{type:"text"}}),t._v(" "),n("button",{staticClass:"btn danger outline",staticStyle:{"min-width":"80px","margin-left":"10px"}},[t._v("번호인증")])]),t._v(" "),n("div",{staticStyle:{"margin-top":"10px"}},[n("input",{staticStyle:{width:"360px"},attrs:{type:"text"}})]),t._v(" "),n("div",{staticStyle:{width:"360px",margin:"40px auto 0 auto","text-align":"left","font-size":"12px"}},[n("div",{staticStyle:{display:"flex"}},[n("label",[n("input",{attrs:{type:"checkbox"}}),t._v(" "),n("span",[t._v("신청한 장학금의 진행사항을 휴대전화 문자로 받겠습니다."),n("span",{staticStyle:{color:"#009490"}},[t._v("(필수)")])])])])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("i",{staticClass:"icon indicator-gray"}),this._v(" "),i("i",{staticClass:"icon indicator-gray"}),this._v(" "),i("i",{staticClass:"icon indicator-black"})])}],!1,null,"60a453a0",null);p.options.__file="SignUpStep3.vue";i.default=p.exports}}]);