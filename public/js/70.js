webpackJsonp([70],{

/***/ 1754:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1755);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("a7b57324", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-af94a716\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./500.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-af94a716\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./500.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1755:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n.bg-color[data-v-af94a716] {\n    background-color: #EEE;\n}\n.container[data-v-af94a716] {\n    min-height: 100vh;\n    color: #FFF;\n}\n.error_content[data-v-af94a716] {\n    margin-top: 7%;\n}\n.error[data-v-af94a716] {\n    font-size: 150px;\n    line-height: 160px;\n    color: #555;\n}\n.error-type[data-v-af94a716] {\n    font-size: 28px;\n    color: #999;\n}\n.error-msg[data-v-af94a716] {\n    font-size: 18px;\n    margin: 45px 0;\n    color: #333;\n}\n.seperator[data-v-af94a716] {\n    border: 0;\n    height: 2px;\n    margin: 20px 0;\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6), rgba(0, 0, 0, 0));\n}\n", ""]);

// exports


/***/ }),

/***/ 1756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
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
    name: "err404",
    mounted: function mounted() {},
    destroyed: function destroyed() {},
    methods: {
        go_back: function go_back() {
            this.$router.go(-1);
        }
    }
});

/***/ }),

/***/ 1757:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bg-color" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          {
            staticClass:
              "col-lg-6 offset-lg-3 col-sm-8 offset-sm-2 col-xs-10 offset-xs-1 text-center error_content"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("hr", { staticClass: "seperator" }),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary link-home",
                attrs: { to: "/", exact: "" }
              },
              [_vm._v("Go Home")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "btn btn-primary link-home",
                attrs: { href: "/" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    $event.stopPropagation()
                    return _vm.go_back($event)
                  }
                }
              },
              [_vm._v("Go Back")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "error" }, [_c("span", [_vm._v("500")])]),
      _vm._v(" "),
      _c("div", { staticClass: "error-type" }, [
        _c("span", [_vm._v("INTERNAL SERVER ERROR")])
      ]),
      _vm._v(" "),
      _c("div", [
        _c("p", { staticClass: "error-msg" }, [
          _vm._v(
            "Something went wrong at our end, we are working on it. Mean while try below options. "
          )
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
    require("vue-hot-reload-api")      .rerender("data-v-af94a716", module.exports)
  }
}

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1754)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1756)
/* template */
var __vue_template__ = __webpack_require__(1757)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-af94a716"
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
Component.options.__file = "resources/assets/components/pages/500.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-af94a716", Component.options)
  } else {
    hotAPI.reload("data-v-af94a716", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});