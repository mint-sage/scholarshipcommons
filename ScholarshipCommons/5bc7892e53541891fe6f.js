(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{361:function(t,a,e){var i=e(548);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,e(5).default)("a7c95eb4",i,!0,{})},547:function(t,a,e){"use strict";var i=e(361);e.n(i).a},548:function(t,a,e){(t.exports=e(4)(!1)).push([t.i,"\n.wrapper[data-v-31d8f385]{width:100%;height:100%;position:fixed;top:0;left:0;display:flex;justify-content:center;overflow:scroll;-webkit-animation:modal-open-data-v-31d8f385 .5s 1;animation:modal-open-data-v-31d8f385 .5s 1\n}\n@-webkit-keyframes modal-open-data-v-31d8f385{\n0%{opacity:0\n}\nto{opacity:1\n}\n}\n@keyframes modal-open-data-v-31d8f385{\n0%{opacity:0\n}\nto{opacity:1\n}\n}\n.modal-background[data-v-31d8f385]{position:fixed;background-color:#fff;width:95%;height:100%;top:0;left:0;opacity:.5\n}\n.modal[data-v-31d8f385]{margin-top:100px;width:1180px;height:1200px;position:relative\n}\n.close-area[data-v-31d8f385]{position:absolute;top:5px;right:5px;cursor:pointer\n}\n.close-area .icon[data-v-31d8f385]{width:14px;height:12px\n}\n.content-area[data-v-31d8f385]{width:400px;position:relative;margin:40px auto\n}\n.content-area .title[data-v-31d8f385]{font-size:20px;text-align:center\n}\n.content-area .input-area[data-v-31d8f385]{margin-top:40px\n}\n.content-area .input-area .text-field[data-v-31d8f385]{margin-bottom:10px\n}\n.content-area .input-area .text-field .btn[data-v-31d8f385]{margin-left:10px\n}\n.content-area .input-area .help[data-v-31d8f385]{font-size:12px;color:#636569\n}\n.btn-area[data-v-31d8f385]{width:100%;position:absolute;bottom:20px;text-align:center\n}\n.btn-area .btn[data-v-31d8f385]:first-child{margin-right:10px\n}\n.table-area .title[data-v-31d8f385]{margin-top:60px;font-size:20px;text-align:center\n}\n.table-area .help[data-v-31d8f385]{margin-top:40px;font-size:14px;text-align:center;color:#636569\n}\ntable[data-v-31d8f385]{margin-top:40px;width:1180px;border-collapse:collapse\n}\ntable thead[data-v-31d8f385]{background-color:hsla(0,0%,78.4%,.2);border-top:1px solid #c8c8c8;border-bottom:1px solid #c8c8c8\n}\ntable thead th[data-v-31d8f385]{height:60px;font-size:16px;font-weight:400\n}\ntable tbody tr[data-v-31d8f385]{border-bottom:1px solid #c8c8c8\n}\ntable tbody tr .text-gray[data-v-31d8f385]{color:#c8c8c8\n}\ntable tbody tr td[data-v-31d8f385]{text-align:center;height:60px\n}",""])},579:function(t,a,e){"use strict";e.r(a);var i={name:"JudgingModal",props:["isShow"],methods:{loadAccount:function(){this.createDialog({icon:"error-red xl",msg:"불러올 계좌정보가 없습니다.",subMsg:"장학금 지급계좌를 직접 입력해 주세요."})},close:function(){this.$emit("close")},submit:function(){this.createDialog({icon:"check-circle-teal xl",msg:"장학금 지급정보를 제출했습니다.",subMsg:"은행계좌 정보는 [계정관리]에 저장되었습니다.\n저장된 계좌정보는 다음 장학금 지급 시에 불러와 사용할 수 있습니다.\n\n제출한 내용은 [장학금 신청 내역]에서 볼 수 있습니다.",btnClass:"primary"}),this.$emit("close")}}},n=(e(547),e(1)),s=Object(n.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.isShow?e("div",{staticClass:"wrapper"},[e("div",{staticClass:"modal-background"}),t._v(" "),e("div",{staticClass:"card-shadow modal"},[e("div",{staticClass:"close-area",on:{click:t.close}},[e("i",{staticClass:"icon close-gray xs"})]),t._v(" "),e("div",{staticClass:"content-area"},[e("div",{staticClass:"title"},[t._v("\n        장학금 지급정보 입력\n      ")]),t._v(" "),e("div",{staticClass:"input-area"},[e("div",{staticClass:"text-field dp-flex"},[e("input",{staticStyle:{width:"270px"},attrs:{type:"text",placeholder:"은행명 입력"}}),t._v(" "),e("button",{staticClass:"btn primary outline",on:{click:t.loadAccount}},[t._v("계좌정보 불러오기")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)]),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"table-area"},[e("div",{staticClass:"title"},[t._v("추가 증빙서류 제출")]),t._v(" "),e("table",[t._m(5),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("기본증명서")]),t._v(" "),e("td",[t._v("가족관계증명서")]),t._v(" "),e("td",{staticClass:"text-gray"},[t._v("파일을 업로드 해주세요")]),t._v(" "),e("td"),t._v(" "),e("td",[e("button",{staticClass:"btn sub outline",on:{click:function(a){t.clickFile("family")}}},[t._v("파일 업로드")]),t._v(" "),e("input",{staticStyle:{display:"none"},attrs:{id:"family",type:"file"}})])]),t._v(" "),t._m(6),t._v(" "),t._m(7)])]),t._v(" "),t._m(8)]),t._v(" "),e("div",{staticClass:"btn-area"},[e("button",{staticClass:"btn sub outline",on:{click:t.close}},[t._v("취소하기")]),t._v(" "),e("button",{staticClass:"btn primary",on:{click:t.submit}},[t._v("제출하기")])])])]):t._e()},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"text-field"},[a("input",{staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"계좌번호 입력(숫자만)"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"text-field"},[a("input",{staticStyle:{width:"100%"},attrs:{type:"text",placeholder:"예금주명 입력"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"help"},[a("span",{staticClass:"color-danger"},[this._v("안내.")]),this._v("  예금주명은 장학생 이름과 동일해야 합니다. 장학금은 장학생 명의로된 계좌로만 지급받을 수 있습니다.\n        ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"input-area"},[a("div",{staticClass:"text-field"},[a("input",{attrs:{type:"text",placeholder:"주민등록번호 입력(숫자만)"}}),this._v(" - "),a("input",{attrs:{type:"text"}})]),this._v(" "),a("div",{staticClass:"help"},[a("span",{staticClass:"color-danger"},[this._v("안내.")]),this._v("  주민등록번호는 운영기관이 국세청에 장학금 지급금액을 신고하기 위한 용도로만 사용됩니다. 주민등록번호는 사용 후 파기되며 스칼라십커먼즈 사이트에 저장되지 않습니다.\n        ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"input-area"},[a("label",[a("input",{attrs:{type:"checkbox"}}),this._v(" "),a("span",[this._v("위 정보의 제공 및 사용에 동의합니다.")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("th",[t._v("증명서유형")]),t._v(" "),e("th",[t._v("증명서명")]),t._v(" "),e("th",[t._v("파일명")]),t._v(" "),e("th",[t._v("파일정보")]),t._v(" "),e("th",[t._v("파일 업로드")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",[this._v("기본증명서")]),this._v(" "),a("td",[this._v("가족관계증명서")]),this._v(" "),a("td",{staticClass:"text-gray"},[this._v("파일을 업로드 해주세요")]),this._v(" "),a("td"),this._v(" "),a("td",[a("div",{staticClass:"progress-bar",staticStyle:{width:"180px"}},[a("div",{staticClass:"progress red",staticStyle:{width:"100%"}})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("td",[t._v("기본증명서")]),t._v(" "),e("td",[t._v("가족관계증명서")]),t._v(" "),e("td",[t._v("filename.jpg")]),t._v(" "),e("td",[t._v("38kbJPEG이미지")]),t._v(" "),e("td",[e("i",{staticClass:"icon close-circle-gray xs"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"help"},[a("span",{staticClass:"color-danger"},[this._v("안내.")]),this._v(" 이미지 및 PDF 파일만 업로드 가능합니다.\n      ")])}],!1,null,"31d8f385",null);s.options.__file="SubmitDocumentModal.vue";a.default=s.exports}}]);