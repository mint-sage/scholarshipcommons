(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{404:function(t,a,n){var i=n(662);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(6).default)("e0f6d976",i,!0,{sourceMap:!1})},661:function(t,a,n){"use strict";var i=n(404);n.n(i).a},662:function(t,a,n){(t.exports=n(5)(!1)).push([t.i,"\n.scholarship-content[data-v-05019f7f]{font-size:16px\n}\n.scholarship-content .title[data-v-05019f7f]{height:40px;display:flex;align-items:center;justify-content:center;background-color:hsla(0,0%,78.4%,.4)\n}\n.scholarship-content .content-body[data-v-05019f7f]{margin-top:40px\n}\n.scholarship-content .content-subject[data-v-05019f7f]{display:flex;font-size:20px;font-weight:500\n}\n.scholarship-content .content-row[data-v-05019f7f]{margin:40px 0 34px;display:flex\n}\n.scholarship-content .content-row .subject[data-v-05019f7f]{display:inline-block;width:180px;margin-right:60px\n}\n.scholarship-content .content-row .detail[data-v-05019f7f]{display:inline-block;width:940px\n}\n.scholarship-content .content-row .sub-detail[data-v-05019f7f]{margin-top:10px;color:#636569\n}\n.title[data-v-05019f7f]{width:1050px\n}\n.qna-row[data-v-05019f7f]{display:flex;align-items:center;width:1180px;height:60px;margin-top:-1px;border-top:1px solid #e8e8e8;border-bottom:1px solid #e8e8e8;cursor:pointer\n}\n.qna-row .qna-column[data-v-05019f7f]{display:inline-block;text-align:center\n}\n.qna-row .subject[data-v-05019f7f]{text-align:left;width:640px\n}\n.qna-row .answer[data-v-05019f7f],.qna-row .date[data-v-05019f7f],.qna-row .name[data-v-05019f7f]{width:180px\n}\n.qna-detail[data-v-05019f7f]{display:inline-block;width:1180px;background-color:hsla(0,0%,78.4%,.2);padding:40px 0 0 5px\n}\n.qna-detail .subject[data-v-05019f7f]{vertical-align:top;display:inline-block;width:100px\n}\n.qna-detail .detail[data-v-05019f7f]{vertical-align:top;display:inline-block;width:900px;margin-bottom:40px\n}\n.qna-detail .detail .date[data-v-05019f7f]{font-size:14px;color:#636569;margin-top:10px\n}\n.qna-detail .btn-area[data-v-05019f7f]{float:right;margin-top:50px\n}\n.qna-detail button.btn.sub.outline[data-v-05019f7f]{width:70px;background-color:transparent\n}\n.no-qna[data-v-05019f7f]{width:1180px;height:540px;align-items:center;font-size:16px;color:#98989a\n}\n.no-qna[data-v-05019f7f],.pagination-area[data-v-05019f7f]{display:flex;justify-content:center\n}\n.pagination-area[data-v-05019f7f]{margin:100px 0 200px\n}\n.receiver[data-v-05019f7f]{margin:20px\n}\n.text-size-block[data-v-05019f7f]{text-align:right;width:600px;color:#636569\n}",""])},790:function(t,a,n){"use strict";n.r(a);var i={name:"qna",data:function(){return{qnaList:[{title:"질문타이틀",date:"2017.1.6",writer:"김**",detail:"나는 이런것이 궁금해서 이렇게 질문을 하고 있습니다 제발 내 질문에 아주 빨리 답을 해주셨으면 합니다.",isDetailShow:!1,answer:{detail:"네가 너무 급해하니까 내가 이렇게 답을 신속히 달고 있습니다. 귀하가 질문하신 내용은이런 것입니다.",date:"2018. 5. 4.(금)  14:50"}},{title:"질문타이틀",date:"2017.1.6",writer:"김**",detail:"나는 이런것이 궁금해서 이렇게 질문을 하고 있습니다 제발 내 질문에 아주 빨리 답을 해주셨으면 합니다.",isDetailShow:!1,answer:null}],isShowModal:!1,questionText:""}},methods:{showDetail:function(t){this.qnaList[t].isDetailShow?this.qnaList[t].isDetailShow=!1:this.qnaList[t].isDetailShow=!0},openModal:function(){this.isShowModal=!0},closeModal:function(){this.isShowModal=!1}}},s=(n(661),n(1)),e=Object(s.a)(i,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"scholarship-content"},[n("div",{staticStyle:{display:"flex"}},[n("div",{staticClass:"title"},[t._v("Q&A")]),t._v(" "),n("button",{staticClass:"btn primary",staticStyle:{"margin-left":"10px"},on:{click:t.openModal}},[t._v("문의하기")])]),t._v(" "),n("div",{staticClass:"content-body"},[t._l(t.qnaList,function(a,i){return[n("div",{staticClass:"qna-row",on:{click:function(a){t.showDetail(i)}}},[n("div",{staticClass:"qna-column subject"},[a.isDetailShow?[n("b",[t._v(t._s(a.title))])]:[t._v("\n            "+t._s(a.title)+"\n          ")]],2),t._v(" "),n("div",{staticClass:"qna-column date"},[t._v(t._s(a.date))]),t._v(" "),n("div",{staticClass:"qna-column name"},[t._v(t._s(a.writer))]),t._v(" "),n("div",{staticClass:"qna-column answer"},[null!=a.answer?[t._v("\n            답변완료\n          ")]:[n("span",{staticStyle:{color:"#c8c8c8"}},[t._v("답변중")])]],2)]),t._v(" "),n("transition",{attrs:{name:"component-fade",mode:"in-out"}},[a.isDetailShow?[n("div",{staticClass:"qna-detail"},[n("div",[n("div",{staticClass:"subject"},[t._v("문의내용")]),t._v(" "),n("div",{staticClass:"detail"},[t._v("\n                "+t._s(a.detail)+"\n                "),n("div",{staticClass:"btn-area"},[n("button",{staticClass:"btn small sub outline"},[t._v("편집")]),t._v(" "),n("button",{staticClass:"btn small sub outline"},[t._v("삭제")])])])]),t._v(" "),null!=a.answer?n("div",[n("div",{staticClass:"subject"},[t._v("답변내용")]),t._v(" "),n("div",{staticClass:"detail"},[t._v("\n                "+t._s(a.answer.detail)+"\n                "),n("div",{staticClass:"date"},[t._v("2018.5.4(금) 14:50")])])]):t._e()])]:t._e()],2)]})],2),t._v(" "),t.qnaList.length<1?n("div",{staticClass:"content-body"},[t._m(0)]):t._e(),t._v(" "),t._m(1),t._v(" "),n("sc-modal",{attrs:{isShow:t.isShowModal,width:"680px",height:"749px"}},[n("div",{staticStyle:{margin:"40px",display:"flex","flex-direction":"column","align-items":"center"}},[n("div",{staticStyle:{"font-size":"20px"}},[t._v("\n        문의하기\n      ")]),t._v(" "),n("div",{staticClass:"label-radius-gray receiver"},[t._v("\n        수신자: 민트세이지(주)\n      ")]),t._v(" "),n("div",[n("input",{staticStyle:{width:"600px"},attrs:{type:"text",placeholder:"문의 제목을 입력해주세요"}})]),t._v(" "),n("div",{staticStyle:{"margin-top":"10px"}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.questionText,expression:"questionText"}],staticStyle:{width:"600px",height:"378px"},attrs:{placeholder:"문의 내용을 입력해주세요"},domProps:{value:t.questionText},on:{input:function(a){a.target.composing||(t.questionText=a.target.value)}}})]),t._v(" "),n("div",{staticClass:"text-size-block"},[t._v("\n        글자수(공백포함)\n        "),n("span",{staticStyle:{color:"#fd5d60"}},[t._v(t._s(t.questionText.length))]),t._v("\n        /800자\n      ")])]),t._v(" "),n("div",{staticClass:"align-center btn-block"},[n("button",{staticClass:"btn sub outline",staticStyle:{"margin-right":"10px"},on:{click:t.closeModal}},[t._v("취소하기")]),t._v(" "),n("button",{staticClass:"btn primary",on:{click:t.closeModal}},[t._v("문의 등록하기")])])])],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"no-qna"},[a("div",[this._v("\n          등록된 문의가 없습니다  :("),a("br"),this._v("\n          처음으로 문의해 보세요.\n        ")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"pagination-area"},[n("div",{staticClass:"pagination"},[n("span",{staticClass:"item"},[n("i",{staticClass:"icon prev-circle-teal xs"})]),t._v(" "),n("span",{staticClass:"item current"},[t._v("1")]),t._v(" "),n("span",{staticClass:"item"},[t._v("2")]),t._v(" "),n("span",{staticClass:"item"},[t._v("3")]),t._v(" "),n("span",{staticClass:"item"},[t._v("4")]),t._v(" "),n("span",{staticClass:"item"},[t._v("5")]),t._v(" "),n("span",{staticClass:"item"},[t._v("...")]),t._v(" "),n("span",{staticClass:"item"},[n("i",{staticClass:"icon next-circle-teal xs"})])])])}],!1,null,"05019f7f",null);e.options.__file="QnA.vue";a.default=e.exports}}]);