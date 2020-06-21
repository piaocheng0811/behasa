webpackJsonp([11],{

/***/ 1006:
/***/ (function(module, exports) {

module.exports = "/public/images/avatar1.jpg?2d4968bd8ec1519b0535ba849643dd1c";

/***/ }),

/***/ 1041:
/***/ (function(module, exports) {

module.exports = "/public/images/timeline.jpeg?d4d75cf8dce2b75301785daac6b08473";

/***/ }),

/***/ 1043:
/***/ (function(module, exports) {

module.exports = "/public/images/avatar.jpg?9ec1314ec47a05d978a1e1568daab7ec";

/***/ }),

/***/ 1505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_echarts_v3_src_full_js__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts_lib_chart_line__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_echarts_lib_chart_line___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_echarts_lib_chart_line__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_echarts_lib_component_tooltip__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_echarts_lib_component_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_echarts_lib_component_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_widgets_portfolio_portfolio_vue__ = __webpack_require__(1506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components_widgets_portfolio_portfolio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components_widgets_portfolio_portfolio_vue__);
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





// ====

var unsub;
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "widgets",
    components: {
        IEcharts: __WEBPACK_IMPORTED_MODULE_1_vue_echarts_v3_src_full_js__["default"],
        portfolio: __WEBPACK_IMPORTED_MODULE_4_components_widgets_portfolio_portfolio_vue___default.a
    },
    data: function data() {
        return {
            loading: false,
            instances: [],
            line: {
                title: {
                    text: 'Weekly Stats',
                    textStyle: {
                        color: '#FFF',
                        fontStyle: 'normal',
                        fontWeight: 'bolder',
                        fontSize: 18
                    },
                    subtextStyle: {
                        color: '#FFF'
                    },
                    padding: 15
                },
                legend: {
                    show: true
                },
                tooltip: {},
                color: '#FFFFFF',
                xAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                },
                yAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisTick: {
                        show: true,
                        alignWithLabel: false,
                        interval: 'auto',
                        inside: false,
                        length: 5,
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                },
                series: [{
                    name: 'shots',
                    type: 'line',
                    symbolSize: 7,
                    data: [10, 20, 15, 10, 36, 20, 45]
                }]
            }
        };
    },

    methods: {
        onReady: function onReady(instance) {
            this.instances.push(instance);
        }
    },
    mounted: function mounted() {
        var _this = this;

        unsub = this.$store.subscribe(function (mutation, state) {
            if (mutation.type == "left_menu") {
                _this.instances.forEach(function (item, index) {
                    setTimeout(function () {
                        item.resize();
                    });
                });
            }
        });
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        unsub();
        next();
    }
});

/***/ }),

/***/ 1506:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1507)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(1509)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-34452bec"
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
Component.options.__file = "resources/assets/components/widgets/portfolio/portfolio.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34452bec", Component.options)
  } else {
    hotAPI.reload("data-v-34452bec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1507:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1508);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("c5e15cf6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34452bec\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./portfolio.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-34452bec\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./portfolio.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1508:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*social-widget*/\n.social-widget .user-pic[data-v-34452bec] {\n    border-radius: 50%;\n    width: 106px;\n}\n.social-widget .social-icons[data-v-34452bec] {\n    font-size: 20px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n}\n.border_bottom[data-v-34452bec]{\n    border-bottom:1px solid #ccc;\n}\n.post-fllow[data-v-34452bec] {\n    background-color: #fff !important;\n}\n.social-widget .post-fllow[data-v-34452bec] {\n    background-color: #e5e5e5;\n    padding-bottom: 4px;\n    padding-top: 18px;\n    border-top: 1px solid #ccc;\n}\n.social-widget .post-fllow[data-v-34452bec]:not(:last-child) {\n    border-right: 1px solid #CCC;\n}\n", ""]);

// exports


/***/ }),

/***/ 1509:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card social-widget" }, [
      _c("div", { staticClass: "card-block" }, [
        _c("div", { staticClass: "row text-center" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("img", {
              staticClass: "user-pic mt-3 mb-2",
              attrs: {
                src: __webpack_require__(1043),
                alt: "profile image"
              }
            }),
            _vm._v(" "),
            _c("h4", { staticClass: "text_color" }, [_vm._v("Arthur Riley")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 mt-2 text_color mt-2" }, [
            _c("p", { staticClass: "pb-3 border_bottom" }, [
              _vm._v(
                "Morbi nisi elit, blandit sit amet tincidunt eget, ullamcorper at diam. Nunc ultullamcorper at diam. Nunc ultricies semper porta."
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 " }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-4 social-icons" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("i", {
                    staticClass: "fa fa-google-plus text-danger",
                    attrs: { "aria-hidden": "true" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4 social-icons" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("i", {
                    staticClass: "fa fa-facebook text-primary",
                    attrs: { "aria-hidden": "true" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4 social-icons" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("i", {
                    staticClass: "fa fa-twitter text-info",
                    attrs: { "aria-hidden": "true" }
                  })
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row m-0 text-center" }, [
        _c("div", { staticClass: "col-4  pb-0 post-fllow" }, [
          _c("span", { staticClass: "mt-3" }, [_c("strong", [_vm._v("39")])]),
          _vm._v(" "),
          _c("p", { staticClass: "mt-2" }, [_vm._v("Posts")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 pb-0 post-fllow" }, [
          _c("span", [_c("strong", [_vm._v("210")])]),
          _vm._v(" "),
          _c("p", { staticClass: "mt-2" }, [_vm._v("Following")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-4 pb-0 post-fllow" }, [
          _c("span", [_c("strong", [_vm._v("1,650")])]),
          _vm._v(" "),
          _c("p", { staticClass: "mt-2" }, [_vm._v("Followers")])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-34452bec", module.exports)
  }
}

/***/ }),

/***/ 1510:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-12" }, [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "clearfix  visible-xs-block" }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xl-4 col-lg-6 col-md-6" },
          [_c("portfolio")],
          1
        ),
        _vm._v(" "),
        _c("div", {
          staticClass: "clearfix visible-sm-block visible-md-block"
        }),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xl-4 col-lg-6 col-md-6" },
          [
            _c(
              "b-card",
              { attrs: { "no-block": "" } },
              [
                _c(
                  "b-tabs",
                  [
                    _c(
                      "b-tab",
                      { attrs: { title: "Details", active: "" } },
                      [
                        _c("b-card", [
                          _c("article", { staticClass: "media" }, [
                            _c("a", { staticClass: "float-left desc-img" }, [
                              _c("img", {
                                attrs: { src: __webpack_require__(1511) }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "d-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [_vm._v("Hot in Market")]
                              ),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "Lorem Ipsum has been the industry's standard dummy text ever."
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("article", { staticClass: "media" }, [
                            _c("a", { staticClass: "float-left desc-img" }, [
                              _c("img", {
                                attrs: { src: __webpack_require__(1512) }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "d-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [_vm._v("Key Gadgets")]
                              ),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "a search for 'lorem ipsum' will sites still in their infancy."
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("article", { staticClass: "media" }, [
                            _c("a", { staticClass: "float-left desc-img" }, [
                              _c("img", {
                                attrs: { src: __webpack_require__(1513) }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "d-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [_vm._v("Trending Design")]
                              ),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "All the Lorem Ipsum generators on the Internet tend to repeat ."
                                )
                              ])
                            ])
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      { attrs: { title: "Comments" } },
                      [
                        _c("b-card", [
                          _c("article", { staticClass: "media" }, [
                            _c("a", { staticClass: "float-left desc-img" }, [
                              _c("img", {
                                attrs: {
                                  src: __webpack_require__(1006)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _vm._v(
                                    "Discovered the undoubtable source comes from\n                                            sections."
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _c("i", { staticClass: "fa fa-clock-o" }),
                                _vm._v(" Yesterday")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("article", { staticClass: "media" }, [
                            _c("a", { staticClass: "float-left  desc-img" }, [
                              _c("img", {
                                attrs: {
                                  src: __webpack_require__(972)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _vm._v(
                                    "Combined with a handful of model sentence\n                                            structures"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _c("i", { staticClass: "fa fa-clock-o" }),
                                _vm._v(" 15 mins ago")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("article", { staticClass: "media" }, [
                            _c("a", { staticClass: "float-left  desc-img" }, [
                              _c("img", {
                                attrs: {
                                  src: __webpack_require__(971)
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _vm._v(
                                    "Classical Latin literature from making it over. "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _c("i", { staticClass: "fa fa-clock-o" }),
                                _vm._v(" Just now")
                              ])
                            ])
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      { attrs: { title: "Activity" } },
                      [
                        _c("b-card", [
                          _c("article", { staticClass: "media" }, [
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "fa fa-arrow-right text-danger",
                                    attrs: { "aria-hidden": "true" }
                                  }),
                                  _vm._v(
                                    "Discovered the undoubtable from sections."
                                  ),
                                  _c("p", { staticClass: "text-muted" }, [
                                    _vm._v(" 5 Days ago")
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("article", { staticClass: "media" }, [
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "fa fa-arrow-right text-danger",
                                    attrs: { "aria-hiden": "true" }
                                  }),
                                  _vm._v(
                                    "Combined with a sentence structures."
                                  ),
                                  _c("p", { staticClass: "text-muted" }, [
                                    _vm._v(" 2 Days ago")
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("article", { staticClass: "media" }, [
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "fa fa-arrow-right text-danger",
                                    attrs: { en: "true" }
                                  }),
                                  _vm._v(
                                    "\n                                            Classical from making it over.\n                                        "
                                  ),
                                  _c("p", { staticClass: "text-muted" }, [
                                    _vm._v(" 2 Hours ago")
                                  ])
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("article", { staticClass: "media" }, [
                            _c("div", { staticClass: "media-body" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "c-head",
                                  attrs: { href: "javascript:void(0)" }
                                },
                                [
                                  _c("i", {
                                    staticClass:
                                      "fa fa-arrow-right text-danger",
                                    attrs: { "aria-hiden": "true" }
                                  }),
                                  _vm._v(
                                    "I am the last updated activity list here."
                                  ),
                                  _c("p", { staticClass: "text-muted" }, [
                                    _vm._v(" Just now")
                                  ])
                                ]
                              )
                            ])
                          ])
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4 col-lg-6 col-md-6" }, [
          _c("div", { staticClass: "card weekly-stats" }, [
            _c("div", { staticClass: "stats-chart text-center" }, [
              _c(
                "div",
                { staticClass: "echarts" },
                [
                  _c("IEcharts", {
                    attrs: { option: _vm.line, loading: _vm.loading },
                    on: { ready: _vm.onReady }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _vm._m(2)
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xl-4 col-lg-6 col-md-6" },
          [
            _c(
              "b-card",
              { attrs: { "no-block": "" } },
              [
                _c(
                  "b-tabs",
                  [
                    _c(
                      "b-tab",
                      { attrs: { title: "Compose", active: "" } },
                      [
                        _c("b-card", [
                          _c("form", [
                            _c("div", { staticClass: "form-group" }, [
                              _c("div", [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "email",
                                    type: "text",
                                    id: "input_Email",
                                    placeholder: "Email"
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c("div", [
                                _c("input", {
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "subject",
                                    type: "text",
                                    id: "subject",
                                    placeholder: "Subject"
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c("div", [
                                _c("textarea", {
                                  staticClass: "form-control",
                                  attrs: {
                                    name: "address",
                                    id: "message",
                                    rows: "4",
                                    placeholder: "Enter address"
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group form-actions" },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-danger text-white btn-md float-right control-form",
                                    attrs: { type: "submit" }
                                  },
                                  [_vm._v("Send")]
                                )
                              ]
                            )
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      { attrs: { title: "Inbox" } },
                      [
                        _c("b-card", [
                          _c("ul", { staticClass: "mail-list" }, [
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa  fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      { attrs: { title: "Trash" } },
                      [
                        _c("b-card", [
                          _c("ul", { staticClass: "mail-list" }, [
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("table", { staticClass: "table mail-list" }, [
                                _c("tbody", [
                                  _c("tr", [
                                    _c("td", [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "custom-control custom-checkbox"
                                        },
                                        [
                                          _c("input", {
                                            staticClass:
                                              "custom-control-input mail-state",
                                            attrs: {
                                              type: "checkbox",
                                              value: "agree"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("span", {
                                            staticClass:
                                              "custom-control-indicator custom_checkbox_primary"
                                          })
                                        ]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _c("i", {
                                        staticClass: "fa fa-star-o",
                                        attrs: { "aria-hidden": "true" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(" Lorem..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Lorem text..")]),
                                    _vm._v(" "),
                                    _c("td", [_vm._v("Feb 7")])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm._m(3)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-4 col-lg-6 col-md-6" }, [
      _c("div", { staticClass: "card user-profile" }, [
        _c("div", { staticClass: "card-block" }, [
          _c("span", { staticClass: "float-left profile-img" }, [
            _c("img", {
              staticClass: "img-fluid ml-3 mt-3 mb-3",
              attrs: {
                src: __webpack_require__(979),
                alt: "profile image"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "profile-details" }, [
            _c("h4", { staticClass: "text-primary" }, [_vm._v("Jerry Roy")]),
            _vm._v(" "),
            _c("p", { staticClass: "ml-3" }, [_vm._v("Project Architect")])
          ])
        ]),
        _vm._v(" "),
        _c("table", { staticClass: "table account-details" }, [
          _c("tbody", [
            _c("tr", [
              _c("td", [_c("i", { staticClass: "fa fa-list" })]),
              _vm._v(" "),
              _c("td", [_vm._v("New Tasks")]),
              _vm._v(" "),
              _c("td", [_vm._v(" 4")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_c("i", { staticClass: "fa fa-pencil" })]),
              _vm._v(" "),
              _c("td", [_vm._v("Pending Task")]),
              _vm._v(" "),
              _c("td", [_vm._v(" 6")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_c("i", { staticClass: "fa fa-envelope-o" })]),
              _vm._v(" "),
              _c("td", [_vm._v("Inbox")]),
              _vm._v(" "),
              _c("td", [_vm._v(" 28")])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_c("i", { staticClass: "fa fa-bell-o" })]),
              _vm._v(" "),
              _c("td", [_vm._v("Notification")]),
              _vm._v(" "),
              _c("td", [_vm._v(" 5")])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xl-4 col-lg-6 col-md-6" }, [
      _c("div", { staticClass: "card user-page" }, [
        _c("div", [
          _c("img", {
            staticClass: "cover-image img-fluid",
            attrs: {
              src: __webpack_require__(1041),
              alt: "cover-image"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-4" }, [
            _c("img", {
              staticClass: "user-pic",
              attrs: {
                src: __webpack_require__(979),
                alt: "profile image"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-8" }, [
            _c("span", { staticClass: "post-details" }, [
              _c("i", {
                staticClass: "fa fa-map-marker",
                attrs: { "aria-hidden": "true" }
              }),
              _vm._v("\n                              Pilatus, "),
              _c("strong", [_vm._v("SWITZERLAND ")]),
              _c("br"),
              _vm._v(" by "),
              _c("strong", [_vm._v("Antonio Hansen")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row text-center m-0" }, [
          _c("div", { staticClass: "col-4 views" }, [
            _c("i", {
              staticClass: "fa fa-eye",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v(" 1,243\n                        ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-4 views" }, [
            _c("i", {
              staticClass: "fa fa-comment-o",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v(" 65\n                        ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-4 views" }, [
            _c("i", {
              staticClass: "fa fa-heart-o",
              attrs: { "aria-hidden": "true" }
            }),
            _vm._v(" 680\n                        ")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row m-0 text-center" }, [
      _c("div", { staticClass: "col-6 weekly-shots" }, [
        _c("div", { staticClass: "shots-likes" }, [
          _c("h4", [_vm._v("Shots")]),
          _vm._v(" "),
          _c("p", [_vm._v("360")])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        _c("div", { staticClass: "shots-likes" }, [
          _c("h4", [_vm._v("Likes")]),
          _vm._v(" "),
          _c("p", [_vm._v("21,080")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-4 col-lg-6 col-md-6" }, [
        _c("div", { staticClass: "card contact-widget" }, [
          _c("div", { staticClass: "contact-cover" }, [
            _c("div", { staticClass: "profile-img float-left" }, [
              _c("img", {
                attrs: { src: __webpack_require__(972), alt: "" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "follow" }, [
                _c("button", { staticClass: "btn btn-info text-white" }, [
                  _vm._v("Follow")
                ])
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h5", { staticClass: "name_center" }, [_vm._v("Kerry Jay")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "group-icon float-left text-center" }, [
              _c("i", {
                staticClass: "fa fa-user",
                attrs: { "aria-hidden": "true" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "search-icon float-left text-center" }, [
              _c("i", {
                staticClass: "fa fa-pencil",
                attrs: { "aria-hidden": "true" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-block contact-details" }, [
            _c("div", { staticClass: "ml-3 mt-2" }, [
              _c("h5", { staticClass: "name_font" }, [
                _vm._v("Home "),
                _c("i", {
                  staticClass: "fa fa-pencil float-right mr-4",
                  attrs: { "aria-hidden": "true" }
                })
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "number_font",
                  attrs: { href: "javascript:void(0)" }
                },
                [_vm._v("(680)-159-1300")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "ml-3 mt-2" }, [
              _c("h5", { staticClass: "name_font" }, [
                _vm._v("Work "),
                _c("i", {
                  staticClass: "fa fa-pencil float-right mr-4",
                  attrs: { "aria-hidden": "true" }
                })
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "number_font",
                  attrs: { href: "javascript:void(0)" }
                },
                [_vm._v("(942)-748-9794")]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-3 ml-3 mb-4" }, [
              _c("h5", { staticClass: "name_font" }, [
                _vm._v("Email "),
                _c("i", {
                  staticClass: "fa fa-pencil float-right mr-4",
                  attrs: { "aria-hidden": "true" }
                })
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "number_font",
                  attrs: { href: "javascript:void(0)" }
                },
                [_vm._v("example@emailid.com")]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-4 col-lg-6 col-md-6" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card weather-widget" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-6" }, [
                    _c("div", { staticClass: "location text-center" }, [
                      _c("i", {
                        staticClass: "fa fa-cloud",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" "),
                      _c("br"),
                      _c("span", [_vm._v("Los Angeles")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-6" }, [
                    _c("div", { staticClass: "temperature text-center" }, [
                      _vm._v("14°c")
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-block" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-4 text-center details" }, [
                    _c("h4", { staticClass: "name_font" }, [_vm._v("Precip.")]),
                    _vm._v(" "),
                    _c("span", [_vm._v("0.01%")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4 text-center details" }, [
                    _c("h4", { staticClass: "name_font" }, [
                      _vm._v("Humidity")
                    ]),
                    _vm._v(" "),
                    _c("span", [_vm._v("89%")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-4 text-center details" }, [
                    _c("h4", { staticClass: "name_font" }, [_vm._v("Wind")]),
                    _vm._v(" "),
                    _c("span", [_vm._v("0.1km/h")])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "card profile-2 text-center" }, [
              _c("div", { staticClass: "row m-0" }, [
                _c("div", { staticClass: "col-12 p-0" }, [
                  _c("div", { staticClass: "head bg_color" }, [
                    _c("p", [_vm._v("Christine Fox")])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 p-0 data border-right" }, [
                  _c("span", [_c("strong", [_vm._v("1,028")])]),
                  _vm._v(" "),
                  _c("p", { staticClass: "border-bottom" }, [_vm._v("Friends")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 p-0 data arrow" }, [
                  _c("span", [_c("strong", [_vm._v("6k")])]),
                  _vm._v(" "),
                  _c("p", { staticClass: "border-bottom" }, [
                    _vm._v("Followers")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 p-0 data border-right" }, [
                  _c("span", [_c("strong", [_vm._v("16")])]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Messages")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-6 p-0 data" }, [
                  _c("span", [_c("strong", [_vm._v("27")])]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Notifications")])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-4 col-lg-6 col-md-6" }, [
        _c("div", { staticClass: "card tweet-profile" }, [
          _c("div", { staticClass: "card-header text-center" }, [
            _c("h4", [_vm._v("Jerry Roy")]),
            _vm._v(" "),
            _c("p", [_vm._v("jerry.roy9@example.com")])
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "profile-img text-center" }, [
            _c("img", {
              staticClass: "img-fluid",
              attrs: {
                src: __webpack_require__(979),
                alt: "profile image"
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-block" }, [
            _c("div", { staticClass: "tweet-details" }, [
              _c("div", { staticClass: "row text-center" }, [
                _c("div", { staticClass: "col-4" }, [
                  _c("p", { staticClass: "count" }, [_vm._v("670")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Tweets")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4" }, [
                  _c("p", { staticClass: "count" }, [_vm._v("240")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Following")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-4" }, [
                  _c("p", { staticClass: "count" }, [_vm._v("6,870")]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Followers")])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row pl-3 pr-3" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("textarea", {
                  staticClass: "form-control",
                  attrs: { rows: "3", placeholder: "What's in your mind" }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row pl-3 pr-3 pb-3" }, [
              _c("div", { staticClass: "col-3" }, [
                _c("div", { staticClass: "events text-center" }, [
                  _c("i", {
                    staticClass: "fa fa-map-marker",
                    attrs: { "aria-hidden": "true" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-3" }, [
                _c("div", { staticClass: "events text-center" }, [
                  _c("i", {
                    staticClass: "fa fa-camera",
                    attrs: { "aria-hidden": "true" }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-6" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "btn btn-info btn-block btn-tweet text-white m-t-10",
                    attrs: { href: "javascript:void(0)" }
                  },
                  [_vm._v("Tweet")]
                )
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f3b125a2", module.exports)
  }
}

/***/ }),

/***/ 1511:
/***/ (function(module, exports) {

module.exports = "/public/images/item1.jpg?560cd40622949e225ea605672406bf74";

/***/ }),

/***/ 1512:
/***/ (function(module, exports) {

module.exports = "/public/images/item2.jpg?cb1555f63928f3c7eb0a8907f5dcc70c";

/***/ }),

/***/ 1513:
/***/ (function(module, exports) {

module.exports = "/public/images/item3.jpg?d14718f6784393c2d1e4eb80166dd6a6";

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1505)
/* template */
var __vue_template__ = __webpack_require__(1510)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
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
Component.options.__file = "resources/assets/components/pages/widgets.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f3b125a2", Component.options)
  } else {
    hotAPI.reload("data-v-f3b125a2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 971:
/***/ (function(module, exports) {

module.exports = "/public/images/avatar3.jpg?7e593f7330076b4b89e96f89b9396c0a";

/***/ }),

/***/ 972:
/***/ (function(module, exports) {

module.exports = "/public/images/avatar2.jpg?2a26dff9723fa354fe9cb39a4f4529e6";

/***/ }),

/***/ 979:
/***/ (function(module, exports) {

module.exports = "/public/images/avatar4.jpg?25bf7926d4f4c50c95e027395f7019f6";

/***/ })

});