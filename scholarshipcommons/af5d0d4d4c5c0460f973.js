(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{396:function(t,a,s){var i=s(646);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(6).default)("65676cec",i,!0,{sourceMap:!1})},645:function(t,a,s){"use strict";var i=s(396);s.n(i).a},646:function(t,a,s){(t.exports=s(5)(!1)).push([t.i,"\n.modal-title[data-v-a1596632]{margin-top:40px;font-size:20px\n}\n.icon.close-gray[data-v-a1596632]{position:absolute;top:14px;right:10px;cursor:pointer\n}\n.search-wrap[data-v-a1596632]{margin-top:40px;display:inline-block;position:relative\n}\n.search-wrap input[type=text][data-v-a1596632]{padding-left:35px\n}\n.search-wrap .find-gray[data-v-a1596632]{position:absolute;top:10px;left:10px\n}\n.sc-table[data-v-a1596632]{margin-top:40px\n}\n.sc-table td[data-v-a1596632],.sc-table th[data-v-a1596632]{padding:15px 0;font-size:14px\n}\n.btn-area[data-v-a1596632]{position:absolute;left:0;width:100%;bottom:20px;display:flex;justify-content:center\n}\n.btn-area .btn[data-v-a1596632]{margin-right:10px\n}",""])},809:function(t,a,s){"use strict";s.r(a);var i={name:"SearchJudgeModal",props:{isShow:{type:Boolean,default:!1}},data:function(){return{}},methods:{closeModal:function(){this.$emit("close")}}},n=(s(645),s(1)),e=Object(n.a)(i,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("sc-modal",{attrs:{width:"1180px",height:"840px",isShow:t.isShow}},[s("div",{staticClass:"align-center"},[s("i",{staticClass:"icon close-gray xs",on:{click:t.closeModal}}),t._v(" "),s("div",{staticClass:"modal-title"},[t._v("심사위원 검색")]),t._v(" "),s("div",{staticClass:"search-wrap"},[s("input",{staticStyle:{width:"400px"},attrs:{type:"text",placeholder:"심사위원을 검색해 보세요"}}),t._v(" "),s("i",{staticClass:"icon find-gray xs"})]),t._v(" "),s("table",{staticClass:"sc-table"},[s("thead",[s("tr",[s("th",{attrs:{width:"20"}},[s("label",[s("input",{attrs:{type:"checkbox"}})])]),t._v(" "),s("th",{attrs:{width:"180"}},[t._v("성명")]),t._v(" "),s("th",{attrs:{width:"180"}},[t._v("소속기관/부서")]),t._v(" "),s("th",{attrs:{width:"180"}},[t._v("학과")]),t._v(" "),s("th",{attrs:{width:"180"}},[t._v("직책")]),t._v(" "),s("th",{attrs:{width:"180"}},[t._v("이메일주소")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("label",[s("input",{attrs:{type:"checkbox"}})])]),t._v(" "),s("td",[t._v("강심사")]),t._v(" "),s("td",[t._v("소속기관명")]),t._v(" "),s("td",[t._v("학과/부서명")]),t._v(" "),s("td",[t._v("직책명")]),t._v(" "),s("td",[t._v("이메일주소")])])])]),t._v(" "),s("div",{staticClass:"none-area"},[t._v("\n      검색된 심사위원이 없습니다   "),s("span",{staticClass:"color-danger"},[t._v(":(")]),s("br"),t._v("\n      다른 단어로 검색하거나 전체 심사위원 목록을 확인해 주세요.\n    ")]),t._v(" "),s("div",{staticClass:"btn-area"},[s("button",{staticClass:"btn sub outline"},[t._v("선택 초기화")]),t._v(" "),s("button",{staticClass:"btn primary",staticStyle:{width:"180px"}},[t._v("내 리스트에 추가")])])])])},[],!1,null,"a1596632",null);e.options.__file="SearchJudgeModal.vue";a.default=e.exports}}]);