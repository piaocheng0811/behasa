webpackJsonp([67],{

/***/ 1007:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_service__ = __webpack_require__(228);





var User_ApiService = {
    init: function init() {
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_1_axios___default.a);
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.baseURL = 'api/user/';
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    },
    setHeader: function setHeader() {
        var user_data = __WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* default */].getUser('user');
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.headers.common["user_id"] = "" + user_data.user_id;
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.headers.common["password"] = "" + user_data.password;
    },
    query: function query(resource, params) {
        return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.get(resource, params).catch(function (error) {
            throw new Error("[RWV] ApiService " + error);
        });
    },
    get: function get(resource) {
        var slug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

        if (__WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* default */].getUser() !== null) {
            this.setHeader();
        }
        var params = '';
        if (!_.isNaN(slug)) {
            params = '?' + slug;
        }
        if (_.isObject(slug)) {
            params = '?' + _.keys(slug).filter(function (key) {
                return slug[key] != null && slug[key] !== 'null';
            }).map(function (key) {
                return key + '=' + slug[key];
            }).join('&');
        }
        return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.get("" + resource + params).catch(function (error) {
            throw new Error("[RWV] ApiService " + error);
        });
    },
    post: function post(resource, params) {
        console.log(__WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios);
        if (__WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* default */].getUser() !== null) {
            this.setHeader();
        }
        return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.post("" + resource, params);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (User_ApiService);

/***/ }),

/***/ 1304:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1305);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("1bc9383e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fffb44e2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-fffb44e2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1305:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n#color[data-v-fffb44e2] {\n    height: 35px;\n}\n.form-control[data-v-fffb44e2]:disabled{\n    cursor: not-allowed;\n}\n.disabled[data-v-fffb44e2]{\n    cursor:not-allowed;\n}\n.form-control[data-v-fffb44e2]:active, .input-group .form-control[data-v-fffb44e2]:hover{\n    z-index: 1;\n}\n.loader-image[data-v-fffb44e2]{\n    position: fixed;\n    top:50%;\n    left:50%;\n    transform: translate(-50%,-50%);\n}\n.full-modal-body[data-v-fffb44e2]{\n    margin-top:100px;\n    padding:30px;\n}\n.question-image-container[data-v-fffb44e2]{\n    height:100px;\n    margin-bottom:20px;\n}\n.question-image-container img[data-v-fffb44e2]{\n    height: 100%;\n}\n.question-text[data-v-fffb44e2]{\n    font-size:30px;\n    color:#333;\n}\n.question-audio-icon[data-v-fffb44e2] {\n    margin-right: 10px;\n}\ninput[type='radio'][data-v-fffb44e2]{\n    display: none;\n}\n.question-choice-container[data-v-fffb44e2]{\n    padding:30px;\n    margin-left:50px;\n}\n.choice-photo-container[data-v-fffb44e2]{\n    width:75px;\n    height:75px;\n}\n.question-choice-text[data-v-fffb44e2] {\n    font-size: 30px;\n    margin-right: 20px;\n}\nlabel.normal[data-v-fffb44e2] {\n    margin-right: 20px;\n    width: 75px;\n    border: 5px solid black;\n    border-radius: 5px;\n    height: 75px;\n    background: #984807;\n    display: inline-block;\n    max-width: 100%;\n    margin-bottom: 5px;\n    font-weight: 700;\n    cursor: pointer;\n}\ninput:checked + label[data-v-fffb44e2] {\n    position: relative;\n    display: inline-block;\n    padding: 15px 25px;\n    background: #E46C0A;\n    text-decoration: none;\n    color: #fff;\n    font-size: 25px;\n    font-weight: 100;\n    border-radius: 3px;\n    box-shadow: 0px 1px 4px -2px #333;\n    text-shadow: 0px -1px #333;\n    border-color: #797B7B;\n}\n.datatable-context[data-v-fffb44e2]{\n    border:none;\n    padding: 0px !important;\n    margin-top: 20px;\n}\n.datatable-context[data-v-fffb44e2]:hover{\n    box-shadow: none;\n}\n.datatable-material[data-v-fffb44e2]{\n    min-height: 700px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    width: 100%;\n    margin: 30px 0;\n    overflow: unset;\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);\n    border-radius: 6px;\n    background: #fff;\n    font-family: \"Helvetica Neue\", Roboto, Arial, \"Droid Sans\", sans-serif;\n    font-size: 13px;\n    font-weight: 500;\n    color: #333333;\n    border: none;\n}\n.card-icon[data-v-fffb44e2]{\n    border-radius: 3px;\n    padding: 8px 16px;\n    margin-top: -37px;\n    display: flex;\n    float: left;\n    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(255,152,0,.4);\n    background: linear-gradient(60deg,#ec407a,#d81b60);\n}\n.card-icon p[data-v-fffb44e2]{\n    margin-bottom: 0px;\n    font-size: 14px;\n    margin-left: 4px;\n    color: white;\n}\n.display-icon[data-v-fffb44e2]{\n    color: whitesmoke;\n    font-size: 18px;\n}\n.card[data-v-fffb44e2]{\n    box-shadow:none;\n}\n.text-center[data-v-fffb44e2]{\n    padding: 200px;\n}\n.section-title[data-v-fffb44e2]{\n    padding: 15px 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 1306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_i18n__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_common_user_api_service__ = __webpack_require__(1007);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



__WEBPACK_IMPORTED_MODULE_1_common_user_api_service__["a" /* default */].init();

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "home",
    data: function data() {
        return {
            testConfig: {},
            current_question_number: -1,
            current_testing_time: 1800,
            questions: [],
            loader: false,
            rtl_screen: false,
            question: {},
            realtimetest: 0,
            stopOption1: false,
            optionResult: {
                successFlag1: false,
                errorFlag1: false
            }
        };
    },
    beforeMount: function beforeMount() {
        var _this = this;

        __WEBPACK_IMPORTED_MODULE_1_common_user_api_service__["a" /* default */].get('testConfig', { category: this.$store.state.customer_option.category }).then(function (result) {
            var data = result.data;
            if (data.status) {
                _this.testConfig = data.data[0];
            }
        });
    },

    methods: {
        startTest: function startTest() {
            this.current_question_number = 0;
            this.loadTest();
        },
        loadTest: function loadTest() {
            var _this2 = this;

            this.loader = true;
            var customer_option = this.$store.state.customer_option;
            var testConfig = this.testConfig;
            var testOption = {
                testCategory: testConfig.testcategory,
                testType: testConfig.category,
                limit: testConfig.noofquestion,
                specific: testConfig.noofspecificquestion,
                common: testConfig.noofcommonquestion,
                test: testConfig.category,
                language: customer_option.text_language
            };
            __WEBPACK_IMPORTED_MODULE_1_common_user_api_service__["a" /* default */].post('loadTest', testOption).then(function (result) {
                var data = result.data;
                if (data.status === 'success') {
                    _this2.questions = data.data;
                    _this2.questions.map(function (question, index) {
                        _this2.questions[index]['audio'] = "https://www.kozco.com/tech/LRMonoPhase4.wav";
                    });
                }
                _this2.loader = false;
                _this2.question = _this2.questions[0];
            }, function () {
                _this2.loader = false;
            });
        },
        nextQuestion: function nextQuestion() {
            this.current_question_number++;
            this.question = this.questions[this.current_question_number];
        },
        previousQuestion: function previousQuestion() {
            this.current_question_number--;
            this.question = this.questions[this.current_question_number];
        },
        checkAnswer: function checkAnswer() {},
        playOption: function playOption(question_id, choice_number) {}
    },
    mounted: function mounted() {
        console.log(__WEBPACK_IMPORTED_MODULE_0__common_i18n__["a" /* i18n */].locale);
    },
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1307:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticStyle: { "min-height": "500px" } }, [
    _c("div", [
      _c(
        "div",
        { staticClass: "col-lg-12 mb-3" },
        [
          _c("br"),
          _vm._v(" "),
          _c(
            "b-card",
            {
              staticClass: "bg-success-card datatable-material",
              attrs: { header: "", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "section-title" }, [
                _vm._v("Welcome " + _vm._s(_vm.$store.state.user.name))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "note-description-wrapper m-5 text-center" },
                [
                  _c("p", { staticClass: "note-description-text" }, [
                    _vm._v(
                      "There is 30 Minutes duration to finish the test and the result will be shown at the end."
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success btn-lg",
                      on: { click: _vm.startTest }
                    },
                    [_vm._v(_vm._s(_vm.$t("home.labels.start_test")))]
                  )
                ]
              )
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _vm.current_question_number >= 0
      ? _c("div", { staticClass: "full-width-modal" }, [
          _vm.loader
            ? _c(
                "div",
                {
                  staticClass: "loader-image",
                  staticStyle: { position: "fixed", top: "50%", left: "50%" }
                },
                [_c("img", { attrs: { src: __webpack_require__(1308) } })]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "full-modal-header background-1 grid-column-2" },
            [
              _c("p", { staticClass: "text-size-1 text-white mb-0 mt-2" }, [
                _vm._v(
                  "\n                Theory Driving Test for - Canditate Name - " +
                    _vm._s(_vm.$store.state.user.name) +
                    "\n            "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right text-white text-size-2" }, [
                _vm._v(
                  "\n                Time Remaining : 00:22:57\n                "
                ),
                _c("br"),
                _vm._v(" "),
                _c("strong", [
                  _vm._v(
                    "#" +
                      _vm._s(_vm.current_question_number + 1) +
                      "/" +
                      _vm._s(_vm.testConfig.noofquestion)
                  )
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _vm.questions.length > 0
            ? _c("div", { staticClass: "full-modal-body" }, [
                _c(
                  "div",
                  { staticClass: "question-image-container text-center" },
                  [
                    _c("img", {
                      staticClass: "question-image",
                      attrs: { src: _vm.question.photo }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "question-text text-center" }, [
                  _vm.question.audio
                    ? _c("i", {
                        staticClass: "fa fa-volume-up question-audio-icon"
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("span", { staticClass: "question-text" }, [
                    _vm._v(_vm._s(_vm.question.question))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "question-choice-container" }, [
                  _c("table", [
                    _c("tr", { staticClass: "question-choice-item-wrapper" }, [
                      _c(
                        "td",
                        { staticClass: "question-choice-select-wrapper" },
                        [
                          _vm.realtimetest === "1"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.question.answered_value,
                                    expression: "question.answered_value"
                                  }
                                ],
                                attrs: {
                                  type: "radio",
                                  value: "1",
                                  id: "choice-1"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.question.answered_value,
                                    "1"
                                  )
                                },
                                on: {
                                  change: [
                                    function($event) {
                                      return _vm.$set(
                                        _vm.question,
                                        "answered_value",
                                        "1"
                                      )
                                    },
                                    function($event) {
                                      return _vm.checkAnswer()
                                    }
                                  ]
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.realtimetest === 0
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.question.answered_value,
                                    expression: "question.answered_value"
                                  }
                                ],
                                attrs: {
                                  type: "radio",
                                  value: "1",
                                  id: "choice-1"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.question.answered_value,
                                    "1"
                                  )
                                },
                                on: {
                                  change: [
                                    function($event) {
                                      return _vm.$set(
                                        _vm.question,
                                        "answered_value",
                                        "1"
                                      )
                                    },
                                    function($event) {
                                      return _vm.checkAnswer()
                                    }
                                  ]
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "normal",
                            attrs: { for: "choice-1" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "question-choice-text-wrapper",
                          on: {
                            click: function($event) {
                              return _vm.playOption(_vm.question.id, 1)
                            }
                          }
                        },
                        [
                          _c("audio", { staticStyle: { display: "none" } }),
                          _vm._v(" "),
                          !_vm.stopOption1
                            ? _c(
                                "span",
                                { staticClass: "question-choice-text" },
                                [_vm._v(_vm._s(_vm.question.choice1))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.stopOption1
                            ? _c(
                                "span",
                                { staticClass: "question-choice-text" },
                                [_vm._v(_vm._s(_vm.question.choice1))]
                              )
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm.question.choice1photo
                          ? _c("img", {
                              staticClass: "choice-photo-container",
                              attrs: { src: _vm.question.choice1photo }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "choice-result-display" }, [
                        _c("span", [
                          _vm.optionResult.successFlag1
                            ? _c("i", {
                                staticClass:
                                  "fa fa-check-circle fa-3x animated zoomIn"
                              })
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("span", [
                          _vm.optionResult.errorFlag1
                            ? _c("i", {
                                staticClass:
                                  "fa fa-times-circle fa-3x animated zoomIn"
                              })
                            : _vm._e()
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", { staticClass: "question-choice-item-wrapper" }, [
                      _c(
                        "td",
                        { staticClass: "question-choice-select-wrapper" },
                        [
                          _vm.realtimetest === "1"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.question.answered_value,
                                    expression: "question.answered_value"
                                  }
                                ],
                                attrs: {
                                  type: "radio",
                                  value: "2",
                                  id: "choice-2"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.question.answered_value,
                                    "2"
                                  )
                                },
                                on: {
                                  change: [
                                    function($event) {
                                      return _vm.$set(
                                        _vm.question,
                                        "answered_value",
                                        "2"
                                      )
                                    },
                                    function($event) {
                                      return _vm.checkAnswer()
                                    }
                                  ]
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.realtimetest === 0
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.question.answered_value,
                                    expression: "question.answered_value"
                                  }
                                ],
                                attrs: {
                                  type: "radio",
                                  value: "2",
                                  id: "choice-2"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.question.answered_value,
                                    "2"
                                  )
                                },
                                on: {
                                  change: [
                                    function($event) {
                                      return _vm.$set(
                                        _vm.question,
                                        "answered_value",
                                        "2"
                                      )
                                    },
                                    function($event) {
                                      return _vm.checkAnswer()
                                    }
                                  ]
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "normal",
                            attrs: { for: "choice-2" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "question-choice-text-wrapper",
                          on: {
                            click: function($event) {
                              return _vm.playOption(_vm.question.id, 2)
                            }
                          }
                        },
                        [
                          _c("audio", { staticStyle: { display: "none" } }),
                          _vm._v(" "),
                          !_vm.stopOption1
                            ? _c(
                                "span",
                                { staticClass: "question-choice-text" },
                                [_vm._v(_vm._s(_vm.question.choice2))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.stopOption1
                            ? _c(
                                "span",
                                { staticClass: "question-choice-text" },
                                [_vm._v(_vm._s(_vm.question.choice2))]
                              )
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm.question.choice1photo
                          ? _c("img", {
                              staticClass: "choice-photo-container",
                              attrs: { src: _vm.question.choice2photo }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "choice-result-display" }, [
                        _c("span", [
                          _vm.optionResult.successFlag1
                            ? _c("i", {
                                staticClass:
                                  "fa fa-check-circle fa-3x animated zoomIn"
                              })
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("span", [
                          _vm.optionResult.errorFlag1
                            ? _c("i", {
                                staticClass:
                                  "fa fa-times-circle fa-3x animated zoomIn"
                              })
                            : _vm._e()
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", { staticClass: "question-choice-item-wrapper" }, [
                      _c(
                        "td",
                        { staticClass: "question-choice-select-wrapper" },
                        [
                          _vm.realtimetest === "1"
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.question.answered_value,
                                    expression: "question.answered_value"
                                  }
                                ],
                                attrs: {
                                  type: "radio",
                                  value: "3",
                                  id: "choice-3"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.question.answered_value,
                                    "3"
                                  )
                                },
                                on: {
                                  change: [
                                    function($event) {
                                      return _vm.$set(
                                        _vm.question,
                                        "answered_value",
                                        "3"
                                      )
                                    },
                                    function($event) {
                                      return _vm.checkAnswer()
                                    }
                                  ]
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.realtimetest === 0
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.question.answered_value,
                                    expression: "question.answered_value"
                                  }
                                ],
                                attrs: {
                                  type: "radio",
                                  value: "3",
                                  id: "choice-3"
                                },
                                domProps: {
                                  checked: _vm._q(
                                    _vm.question.answered_value,
                                    "3"
                                  )
                                },
                                on: {
                                  change: [
                                    function($event) {
                                      return _vm.$set(
                                        _vm.question,
                                        "answered_value",
                                        "3"
                                      )
                                    },
                                    function($event) {
                                      return _vm.checkAnswer()
                                    }
                                  ]
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("label", {
                            staticClass: "normal",
                            attrs: { for: "choice-3" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "question-choice-text-wrapper",
                          on: {
                            click: function($event) {
                              return _vm.playOption(_vm.question.id, 3)
                            }
                          }
                        },
                        [
                          _c("audio", { staticStyle: { display: "none" } }),
                          _vm._v(" "),
                          !_vm.stopOption1
                            ? _c(
                                "span",
                                { staticClass: "question-choice-text" },
                                [_vm._v(_vm._s(_vm.question.choice3))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.stopOption1
                            ? _c(
                                "span",
                                { staticClass: "question-choice-text" },
                                [_vm._v(_vm._s(_vm.question.choice3))]
                              )
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _vm.question.choice1photo
                          ? _c("img", {
                              staticClass: "choice-photo-container",
                              attrs: { src: _vm.question.choice3photo }
                            })
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "choice-result-display" }, [
                        _c("span", [
                          _vm.optionResult.successFlag1
                            ? _c("i", {
                                staticClass:
                                  "fa fa-check-circle fa-3x animated zoomIn"
                              })
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("span", [
                          _vm.optionResult.errorFlag1
                            ? _c("i", {
                                staticClass:
                                  "fa fa-times-circle fa-3x animated zoomIn"
                              })
                            : _vm._e()
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "full-modal-footer background-1 p-3 pl-4" },
            [
              _vm.current_question_number > 0
                ? _c(
                    "button",
                    {
                      staticClass: "button-type-1",
                      on: { click: _vm.previousQuestion }
                    },
                    [
                      _c("i", {
                        staticClass: "fa fa-arrow-left mr-2",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v("Previous")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "button-type-1",
                  on: { click: _vm.nextQuestion }
                },
                [
                  _vm._v("Next"),
                  _c("i", {
                    staticClass: "fa fa-arrow-right ml-2",
                    attrs: { "aria-hidden": "true" }
                  })
                ]
              )
            ]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fffb44e2", module.exports)
  }
}

/***/ }),

/***/ 1308:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/app-loader.gif?7ac99b075223d901652cf3ad95e0f3d7";

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1304)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1306)
/* template */
var __vue_template__ = __webpack_require__(1307)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fffb44e2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/pages/home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fffb44e2", Component.options)
  } else {
    hotAPI.reload("data-v-fffb44e2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(){function o(e,t){if(!o.installed){if(o.installed=!0,!t)return void console.error("You have to install axios");e.axios=t,Object.defineProperties(e.prototype,{axios:{get:function(){return t}},$http:{get:function(){return t}}})}}"object"==( false?"undefined":_typeof(exports))?module.exports=o: true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return o}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):window.Vue&&window.axios&&Vue.use(o,window.axios)}();

/***/ })

});