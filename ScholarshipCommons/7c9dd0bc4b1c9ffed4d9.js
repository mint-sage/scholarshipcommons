(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{269:function(t,i,n){"use strict";n.d(i,"a",function(){return a}),n.d(i,"d",function(){return s}),n.d(i,"b",function(){return e}),n.d(i,"c",function(){return p});var a=[],s=[{name:"선발 공고문",path:"/scholarship/1"},{name:"선발 공고문 현황",path:"/temp/scholarship-list"},{name:"양식 미리보기",path:"/scholarship/preview-form"},{name:"학생/장학금신청",path:"/apply"}],e=[{name:"스칼라십커먼즈 홈",path:"/"}],p={login:"/sign/sign-in",signUp:"/sign/sign-up",resetPassword:"/sign/resetPassword",signUpStep1:"/sign/sign-up/step1",signUpStep2:"/sign/sign-up/step2",signUpStep3:"/sign/sign-up/step3",signUpFinish:"/sign/sign-up/finish"}},334:function(t,i,n){var a=n(494);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,n(5).default)("04813508",a,!0,{})},493:function(t,i,n){"use strict";var a=n(334);n.n(a).a},494:function(t,i,n){(t.exports=n(4)(!1)).push([t.i,"\n.sign-container[data-v-ca88a788]{width:400px;height:625px;margin-top:80px;position:relative\n}\n.top-title[data-v-ca88a788]{font-size:20px;margin-top:220px\n}\n.form-area[data-v-ca88a788]{margin-top:110px;width:400px;height:240px\n}\n.form-text-area[data-v-ca88a788]{width:360px;margin:10px auto 0;position:relative;display:flex\n}\n.form-text[data-v-ca88a788]{width:318px;padding-right:30px\n}\n.indicator-black[data-v-ca88a788],.indicator-gray[data-v-ca88a788]{margin-top:40px;margin-right:10px\n}",""])},618:function(t,i,n){"use strict";n.r(i);var a=n(269),s={layout:"sign",name:"step2",data:function(){return{signMenu:a.c}},methods:{next:function(){this.$store.dispatch("sign/changeStep",{step:"step1"}),this.$router.push("/")}},mounted:function(){}},e=(n(493),n(1)),p=Object(e.a)(s,function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"container align-center"},[i("div",{staticClass:"card sign-container"},[this._m(0),this._v(" "),i("div",{staticStyle:{position:"absolute",bottom:"40px",width:"400px"}},[i("div",{staticStyle:{"margin-bottom":"10px"}},[i("button",{staticClass:"btn primary outline",staticStyle:{width:"360px"},on:{click:this.next}},[this._v("내 계정으로 시작하기")])])])])])},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("div",{staticClass:"top-title"},[this._v("\n        스칼라십커먼즈"),i("br"),this._v("\n        회원가입을 환영합니다!\n      ")])])}],!1,null,"ca88a788",null);p.options.__file="SignUpFinish.vue";i.default=p.exports}}]);