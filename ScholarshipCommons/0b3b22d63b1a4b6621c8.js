(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{253:function(t,n,i){"use strict";i.d(n,"a",function(){return a}),i.d(n,"d",function(){return s}),i.d(n,"b",function(){return e}),i.d(n,"c",function(){return p});var a=[{name:"UI CSS 사용가이드",path:"/dev-guide/css"},{name:"UI 컴포넌트 사용가이드",path:"/dev-guide/component"}],s=[{name:"선발 공고문",path:"/temp/scholarship"},{name:"선발 공고문 현황",path:"/temp/scholarship-list"},{name:"양식 미리보기",path:"/temp/preview-form"},{name:"학생/장학금신청",path:"/apply"}],e=[{name:"스칼라십커먼즈 홈",path:"/"}],p={login:"/sign/sign-in",signUp:"/sign/sign-up",resetPassword:"/sign/resetPassword",signUpStep1:"/sign/sign-up/step1",signUpStep2:"/sign/sign-up/step2",signUpStep3:"/sign/sign-up/step3",signUpFinish:"/sign/sign-up/finish"}},288:function(t,n,i){var a=i(371);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i(11).default)("04813508",a,!0,{})},370:function(t,n,i){"use strict";var a=i(288);i.n(a).a},371:function(t,n,i){(t.exports=i(10)(!1)).push([t.i,"\n.sign-container[data-v-ca88a788]{width:400px;height:625px;margin-top:80px;position:relative\n}\n.top-title[data-v-ca88a788]{font-size:20px;margin-top:220px\n}\n.form-area[data-v-ca88a788]{margin-top:110px;width:400px;height:240px\n}\n.form-text-area[data-v-ca88a788]{width:360px;margin:10px auto 0;position:relative;display:flex\n}\n.form-text[data-v-ca88a788]{width:318px;padding-right:30px\n}\n.indicator-black[data-v-ca88a788],.indicator-gray[data-v-ca88a788]{margin-top:40px;margin-right:10px\n}",""])},430:function(t,n,i){"use strict";i.r(n);var a=i(253),s={layout:"sign",name:"step2",data:function(){return{signMenu:a.c}},methods:{next:function(){this.$store.dispatch("sign/changeStep",{step:"step1"}),this.$router.push("/")}},mounted:function(){}},e=(i(370),i(2)),p=Object(e.a)(s,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container align-center"},[n("div",{staticClass:"card sign-container"},[this._m(0),this._v(" "),n("div",{staticStyle:{position:"absolute",bottom:"40px",width:"400px"}},[n("div",{staticStyle:{"margin-bottom":"10px"}},[n("button",{staticClass:"btn primary outline",staticStyle:{width:"360px"},on:{click:this.next}},[this._v("내 계정으로 시작하기")])])])])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"top-title"},[this._v("\n        스칼라십커먼즈"),n("br"),this._v("\n        회원가입을 환영합니다!\n      ")])])}],!1,null,"ca88a788",null);p.options.__file="SignUpFinish.vue";n.default=p.exports}}]);