webpackJsonp([35],{

/***/ 1458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: "modals",
    data: function data() {
        return {
            stop_close: false
        };
    },

    methods: {
        open_modal: function open_modal() {
            this.$refs.modal21.show();
        },
        stop: function stop(e) {
            if (!this.stop_close) {
                return e.preventDefault();
            }
        },
        shown: function shown() {
            alert("Modal opened");
        },
        hidden: function hidden() {
            alert("Modal Hidden");
        },
        success: function success() {
            alert("OK Clicked");
        },
        cancel: function cancel() {
            alert("Close Clicked");
        }
    }
});

/***/ }),

/***/ 1459:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    {
      staticClass: "bg-primary-card",
      attrs: { header: "Modals", "header-tag": "h4" }
    },
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-12" },
          [
            _c(
              "b-card",
              { staticClass: "bg-primary-card" },
              [
                _c(
                  "b-btn",
                  {
                    directives: [
                      {
                        name: "b-modal",
                        rawName: "v-b-modal.modal1",
                        modifiers: { modal1: true }
                      }
                    ],
                    staticClass: "mt-3 mb-3",
                    attrs: { variant: "outline-secondary" }
                  },
                  [_vm._v("Launch demo modal")]
                ),
                _vm._v(" "),
                _c(
                  "b-btn",
                  {
                    staticClass: "mt-3 mb-3 ",
                    attrs: { variant: "outline-secondary" },
                    on: { click: _vm.open_modal }
                  },
                  [_vm._v("Launch modal with ref")]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    ref: "modal1",
                    staticClass: "bg-primary",
                    attrs: { id: "modal1", title: "Modal" }
                  },
                  [_c("h1", [_vm._v("modal")])]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  { ref: "modal21", attrs: { id: "modal21", title: "Modal" } },
                  [_c("h1", [_vm._v("modal")])]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-6 mt-3" },
          [
            _c(
              "b-card",
              { staticClass: "bg-info-card" },
              [
                _c("h4", [_vm._v("Stop closing on backdrop click")]),
                _vm._v(" "),
                _c(
                  "b-btn",
                  {
                    directives: [
                      {
                        name: "b-modal",
                        rawName: "v-b-modal.modal2",
                        modifiers: { modal2: true }
                      }
                    ],
                    attrs: { variant: "outline-secondary" }
                  },
                  [_vm._v("Launch demo modal")]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    ref: "modal2",
                    attrs: {
                      "no-close-on-backdrop": true,
                      id: "modal2",
                      title: "Modal"
                    }
                  },
                  [_c("h1", [_vm._v("modal")])]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-6 mt-3" },
          [
            _c(
              "b-card",
              { staticClass: "bg-info-card" },
              [
                _c("h4", [_vm._v("Programmatically stop closing of modal")]),
                _vm._v(" "),
                _c(
                  "b-btn",
                  {
                    directives: [
                      {
                        name: "b-modal",
                        rawName: "v-b-modal.modal3",
                        modifiers: { modal3: true }
                      }
                    ],
                    attrs: { variant: "outline-secondary" }
                  },
                  [_vm._v("Launch demo modal")]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    ref: "modal3",
                    attrs: { id: "modal3", title: "Modal" },
                    on: { hide: _vm.stop }
                  },
                  [
                    _c("h1", [_vm._v("modal")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        { staticClass: "custom-control custom-checkbox" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.stop_close,
                                expression: "stop_close"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: { type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(_vm.stop_close)
                                ? _vm._i(_vm.stop_close, null) > -1
                                : _vm.stop_close
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.stop_close,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      (_vm.stop_close = $$a.concat([$$v]))
                                  } else {
                                    $$i > -1 &&
                                      (_vm.stop_close = $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1)))
                                  }
                                } else {
                                  _vm.stop_close = $$c
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("span", {
                            staticClass:
                              "custom-control-indicator custom_checkbox_info"
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "custom-control-description" },
                            [_vm._v("Enable Modal closing")]
                          )
                        ]
                      )
                    ])
                  ]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-4 mt-3" },
          [
            _c(
              "b-card",
              { staticClass: "bg-primary-card" },
              [
                _c(
                  "b-btn",
                  {
                    directives: [
                      {
                        name: "b-modal",
                        rawName: "v-b-modal.modal4",
                        modifiers: { modal4: true }
                      }
                    ],
                    attrs: { variant: "outline-secondary" }
                  },
                  [_vm._v("Launch small modal")]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  { attrs: { id: "modal4", title: "Small Modal", size: "sm" } },
                  [_c("h1", [_vm._v("modal")])]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-4 mt-3" },
          [
            _c(
              "b-card",
              { staticClass: "bg-success-card" },
              [
                _c(
                  "b-btn",
                  {
                    directives: [
                      {
                        name: "b-modal",
                        rawName: "v-b-modal.modal5",
                        modifiers: { modal5: true }
                      }
                    ],
                    attrs: { variant: "outline-secondary" }
                  },
                  [_vm._v("Launch Normal modal")]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    attrs: { id: "modal5", title: "Normal Modal", size: "md" }
                  },
                  [_c("h1", [_vm._v("modal")])]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-4 mt-3" },
          [
            _c(
              "b-card",
              { staticClass: "bg-danger-card" },
              [
                _c(
                  "b-btn",
                  {
                    directives: [
                      {
                        name: "b-modal",
                        rawName: "v-b-modal.modal6",
                        modifiers: { modal6: true }
                      }
                    ],
                    attrs: { variant: "outline-secondary" }
                  },
                  [_vm._v("Launch Large modal")]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  { attrs: { id: "modal6", title: "Large Modal", size: "lg" } },
                  [_c("h1", [_vm._v("modal")])]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-12 mt-3" },
          [
            _c(
              "b-card",
              { staticClass: "bg-warning-card" },
              [
                _c(
                  "b-btn",
                  {
                    directives: [
                      {
                        name: "b-modal",
                        rawName: "v-b-modal.modal7",
                        modifiers: { modal7: true }
                      }
                    ],
                    attrs: { variant: "outline-secondary" }
                  },
                  [_vm._v("Launch modal Events")]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    attrs: { id: "modal7", title: "Modal" },
                    on: {
                      shown: _vm.shown,
                      hidden: _vm.hidden,
                      ok: _vm.success,
                      cancel: _vm.cancel
                    }
                  },
                  [_c("h1", [_vm._v("modal")])]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-4 mt-3" },
          [
            _c(
              "b-card",
              { staticClass: "bg-primary-card" },
              [
                _c("h4", [_vm._v("Background Primary Modal ")]),
                _vm._v(" "),
                _c(
                  "b-btn",
                  {
                    directives: [
                      {
                        name: "b-modal",
                        rawName: "v-b-modal.modal8",
                        modifiers: { modal8: true }
                      }
                    ],
                    attrs: { variant: "outline-primary" }
                  },
                  [_vm._v("Primary modal")]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    attrs: { id: "modal8", title: "Priamry Modal", size: "md" }
                  },
                  [_c("h1", [_vm._v(" Primary modal")])]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-4 mt-3" },
          [
            _c(
              "b-card",
              { staticClass: "bg-info-card" },
              [
                _c("h4", [_vm._v("Background Info Modal ")]),
                _vm._v(" "),
                _c(
                  "b-btn",
                  {
                    directives: [
                      {
                        name: "b-modal",
                        rawName: "v-b-modal.modal9",
                        modifiers: { modal9: true }
                      }
                    ],
                    attrs: { variant: "outline-info" }
                  },
                  [_vm._v("Info modal")]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  { attrs: { id: "modal9", title: "Info Modal" } },
                  [_c("h1", [_vm._v(" Info modal")])]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-4 mt-3" },
          [
            _c(
              "b-card",
              { staticClass: "bg-warning-card" },
              [
                _c("h4", [_vm._v("Background Warning Modal ")]),
                _vm._v(" "),
                _c(
                  "b-btn",
                  {
                    directives: [
                      {
                        name: "b-modal",
                        rawName: "v-b-modal.modal10",
                        modifiers: { modal10: true }
                      }
                    ],
                    attrs: { variant: "outline-warning" }
                  },
                  [_vm._v("Warning modal")]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  { attrs: { id: "modal10", title: "Warning Modal" } },
                  [_c("h1", [_vm._v(" Warning modal")])]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-4 mt-3" },
          [
            _c(
              "b-card",
              { staticClass: "bg-danger-card" },
              [
                _c("h4", [_vm._v("Background Danger Modal ")]),
                _vm._v(" "),
                _c(
                  "b-btn",
                  {
                    directives: [
                      {
                        name: "b-modal",
                        rawName: "v-b-modal.modal11",
                        modifiers: { modal11: true }
                      }
                    ],
                    attrs: { variant: "outline-danger" }
                  },
                  [_vm._v("Danger Modal")]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  { attrs: { id: "modal11", title: "Danger Modal" } },
                  [_c("h1", [_vm._v("Danger modal")])]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-4 mt-3" },
          [
            _c(
              "b-card",
              { staticClass: "bg-success-card" },
              [
                _c("h4", [_vm._v("Background Success Modal ")]),
                _vm._v(" "),
                _c(
                  "b-btn",
                  {
                    directives: [
                      {
                        name: "b-modal",
                        rawName: "v-b-modal.modal12",
                        modifiers: { modal12: true }
                      }
                    ],
                    attrs: { variant: "outline-success" }
                  },
                  [_vm._v("Success Modal")]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  { attrs: { id: "modal12", title: "Success Modal" } },
                  [_c("h1", [_vm._v(" Success modal")])]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-4 mt-3" },
          [
            _c(
              "b-card",
              { staticClass: "bg-deafult-card" },
              [
                _c("h4", [_vm._v("Background Deafult Modal ")]),
                _vm._v(" "),
                _c(
                  "b-btn",
                  {
                    directives: [
                      {
                        name: "b-modal",
                        rawName: "v-b-modal.modal13",
                        modifiers: { modal13: true }
                      }
                    ],
                    attrs: { variant: "outline-secondary" }
                  },
                  [_vm._v("Deafult modal")]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  { attrs: { id: "modal13", title: "Deafult Modal" } },
                  [_c("h1", [_vm._v("modal")])]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3d4f2296", module.exports)
  }
}

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1458)
/* template */
var __vue_template__ = __webpack_require__(1459)
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
Component.options.__file = "resources/assets/components/pages/modals.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d4f2296", Component.options)
  } else {
    hotAPI.reload("data-v-3d4f2296", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});