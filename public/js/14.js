webpackJsonp([14],{

/***/ 1012:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/avatar6.jpg?ad632ec07148871732e34440c087874d";

/***/ }),

/***/ 1041:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/timeline.jpeg?d4d75cf8dce2b75301785daac6b08473";

/***/ }),

/***/ 1079:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/timeline1.jpeg?ba84c7d44073b271195164e3b09d758a";

/***/ }),

/***/ 1478:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1479);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("7b01e256", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-215f2ff1\",\"scoped\":true,\"hasInlineConfig\":true}!./timeline.css", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-215f2ff1\",\"scoped\":true,\"hasInlineConfig\":true}!./timeline.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1479:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n.timeline-container[data-v-215f2ff1] {\n    background-color: #FAFAFA;\n}\n.timeline[data-v-215f2ff1] {\n    list-style: none;\n    padding: 1px 0 30px;\n    position: relative;\n}\n.timeline p[data-v-215f2ff1] {\n    margin: 0;\n}\n.timeline[data-v-215f2ff1]:before {\n    top: 0;\n    bottom: 0;\n    position: absolute;\n    content: \" \";\n    width: 2px;\n    background-color: #CCC;\n    left: 50.2%;\n    margin-left: -1.5px;\n}\n.timeline > li[data-v-215f2ff1] {\n    position: relative;\n    margin-top: 40px;\n}\n.timeline > li[data-v-215f2ff1]:before,\n.timeline > li[data-v-215f2ff1]:after {\n    content: \" \";\n    display: table;\n}\n.timeline > li[data-v-215f2ff1]:after {\n    clear: both;\n}\n.timeline > li > .timeline-card[data-v-215f2ff1] {\n    width: 43%;\n    float: left;\n    border: 1px solid #D4D4D4;\n    border-radius: 2px;\n    position: relative;\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);\n    margin-top: 26px;\n    background-color: #FFF;\n}\n.timeline > li > .timeline-badge[data-v-215f2ff1] {\n    color: #FFF;\n    width: 55px;\n    height: 55px;\n    line-height: 44px;\n    font-size: 22px;\n    text-align: center;\n    position: absolute;\n    top: -10px;\n    left: 50.02%;\n    margin-left: -25px;\n    z-index: 100;\n    border: 5px solid #FAFAFA;\n    border-radius: 50% 50% 50% 0;\n    transform: rotate(16deg);\n}\n.timeline > li.timeline-right > .timeline-badge[data-v-215f2ff1] {\n    border-radius: 50% 50% 0 50%;\n    transform: rotate(-13deg);\n}\n.timeline > li > .timeline-badge i[data-v-215f2ff1] {\n    transform: rotate(-16deg);\n}\n.timeline > li.timeline-right > .timeline-badge i[data-v-215f2ff1] {\n    transform: rotate(14deg);\n}\n.timeline .timeline-details[data-v-215f2ff1] {\n    left: 55%;\n    position: absolute;\n}\n.timeline .timeline-details-inverse[data-v-215f2ff1] {\n    right: 54%;\n    position: absolute;\n    text-align: right;\n}\n.timeline .timeline-details-inverse h4[data-v-215f2ff1],\n.timeline .timeline-details h4[data-v-215f2ff1] {\n    font-size: 18px;\n    margin: 0;\n}\n.timeline > li.timeline-left > .timeline-card[data-v-215f2ff1] {\n    left: 2%;\n}\n.timeline > li.timeline-right > .timeline-card[data-v-215f2ff1] {\n    float: right;\n    right: 2%;\n}\n.timeline-title[data-v-215f2ff1] {\n    margin-top: 0;\n    color: inherit;\n}\n.timeline-body > p[data-v-215f2ff1] {\n    margin-bottom: 0;\n    overflow: hidden;\n}\n.timeline-body > p + p[data-v-215f2ff1] {\n    margin-top: 5px;\n}\n.timeline_panel[data-v-215f2ff1] {\n    padding-bottom: 26px;\n}\n.text-default-gray[data-v-215f2ff1] {\n    color: #777;\n}\n.bg-info[data-v-215f2ff1] {\n    background-color: #5bc0de;\n}\n.bg-warning[data-v-215f2ff1] {\n    background-color: #ec971f;\n}\n.timeline .author-image[data-v-215f2ff1] {\n}\n.timeline .sharedpost-image[data-v-215f2ff1] {\n    width: 100%;\n    height: 220px;\n}\n.timeline .posted-image[data-v-215f2ff1] {\n    width: 100%;\n    height: 270px;\n}\n.circle-author-image[data-v-215f2ff1] {\n    border-radius: 50px;\n    width: 70px;\n}\n.p-20[data-v-215f2ff1] {\n    padding: 20px;\n}\n.p-10[data-v-215f2ff1] {\n    padding: 10px;\n}\n.p-l-20[data-v-215f2ff1] {\n    padding-left: 20px;\n}\n.timeline .action-icons i[data-v-215f2ff1] {\n    font-size: 21px;\n    color: #777;\n    padding-top: 0;\n}\n.timeline .blog-link[data-v-215f2ff1] {\n    position: absolute;\n    bottom: 0;\n    padding: 10px 20px;\n    background-color: rgba(0, 0, 0, .3);\n    width: 100%;\n    color: #CCC;\n}\n.timeline .blog-link a[data-v-215f2ff1] {\n    color: #FFF;\n}\n@media screen and (max-width: 767px) {\n.timeline > li.timeline-left > .timeline-card[data-v-215f2ff1],\n    .timeline > li.timeline-right > .timeline-card[data-v-215f2ff1] {\n        width: 82%;\n        float: right;\n        left: -3%;\n        margin-top: 11px;\n}\n.timeline[data-v-215f2ff1]:before {\n        left: 5%;\n}\n.timeline > li > .timeline-badge[data-v-215f2ff1] {\n        left: 4.5%;\n        border-radius: 50% 50% 0 50%;\n        transform: rotate(-13deg);\n}\n.timeline .timeline-details[data-v-215f2ff1],\n    .timeline .timeline-details-inverse[data-v-215f2ff1] {\n        left: 17%;\n        position: relative;\n        text-align: left;\n}\n.timeline-badge i[data-v-215f2ff1],\n    .timeline > li > .timeline-badge i[data-v-215f2ff1] {\n        transform: rotate(14deg);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1480:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "Timeline",
    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1481:
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
    return _c("div", { staticClass: "timeline-container pt-4 pb-2 mb-3" }, [
      _c("ul", { staticClass: "timeline " }, [
        _c("li", { staticClass: "timeline-left" }, [
          _c("div", { staticClass: "timeline-badge bg-primary" }, [
            _c("i", { staticClass: "fa fa-arrow-circle-down" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-details" }, [
            _c("h4", [_vm._v("A new follower")]),
            _vm._v(" "),
            _c("small", { staticClass: "text-muted" }, [_vm._v("May 08, 2016")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-card p-20" }, [
            _c("img", {
              staticClass: "author-image float-right img-fluid",
              attrs: {
                src: __webpack_require__(971),
                alt: "timeline image1"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-heading p-10" }, [
              _c("h4", { staticClass: "timeline-title" }, [
                _vm._v(
                  "\n          Steven Henderson is now following you\n        "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body p-10" }, [
              _c("p", [
                _vm._v(
                  "\n                        Lorem Ipsum is simply dummy, vidis lio, quem amistosis quis leo..\n                    "
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "timeline-right" }, [
          _c("div", { staticClass: "timeline-badge bg-info" }, [
            _c("i", { staticClass: "fa fa-share-square-o" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-details-inverse" }, [
            _c("h4", [_vm._v("Your friend shared this post")]),
            _vm._v(" "),
            _c("small", { staticClass: "text-muted" }, [_vm._v("May 08, 2016")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-card" }, [
            _c("div", { staticClass: "timeline-heading" }, [
              _c("p", [
                _c("img", {
                  staticClass: "circle-author-image p-10 img-fluid",
                  attrs: {
                    src: __webpack_require__(1012),
                    alt: "author image"
                  }
                }),
                _vm._v(" "),
                _c("span", [
                  _c("strong", [_vm._v("Jennie")]),
                  _vm._v(" shared a post from "),
                  _c("strong", [_vm._v("Nature's")])
                ])
              ]),
              _vm._v(" "),
              _c("img", {
                staticClass: "sharedpost-image img-fluid",
                attrs: {
                  src: __webpack_require__(1041),
                  alt: "timeline image2"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body p-20" }, [
              _c("p", [
                _vm._v("Lorem Ipsum is simply dummy, vidis litro abertis.")
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "timeline-left" }, [
          _c("div", { staticClass: "timeline-badge bg-primary" }, [
            _c("i", { staticClass: "fa fa-user" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-details" }, [
            _c("h4", [_vm._v("Post from your friend")]),
            _vm._v(" "),
            _c("small", { staticClass: "text-muted" }, [_vm._v("May 08, 2016")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-card" }, [
            _c("div", { staticClass: "timeline-heading" }, [
              _c("img", {
                staticClass: "posted-image p-10 img-fluid",
                attrs: {
                  src: __webpack_require__(1079),
                  alt: "timeline image2"
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body" }, [
              _c("p", { staticClass: "p-20" }, [
                _c("strong", [
                  _vm._v("Lorem Ipsum is simply dummy, vidis litro abertis.")
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(
                  " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab blanditiis consectetur consequatur dolor eum ex facilis fugit hic itaque, natus necessitatibus possimus quae reprehenderit sequi suscipit tenetur totam unde ut?\n                    "
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "timeline-right" }, [
          _c("div", { staticClass: "timeline-badge bg-warning" }, [
            _c("i", { staticClass: "fa fa-thumbs-o-up" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-details-inverse" }, [
            _c("h4", [_vm._v("Your friend liked this post")]),
            _vm._v(" "),
            _c("small", { staticClass: "text-muted" }, [_vm._v("May 08, 2016")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-card" }, [
            _c("div", { staticClass: "timeline-heading" }, [
              _c("p", [
                _c("img", {
                  staticClass: "circle-author-image p-10 img-fluid",
                  attrs: {
                    src: __webpack_require__(990),
                    alt: "author image"
                  }
                }),
                _vm._v(" "),
                _c("span", [
                  _c("strong", [_vm._v("Jaffer root")]),
                  _vm._v(" like the post from "),
                  _c("strong", [_vm._v("Truth Teller")])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body" }, [
              _c("p", { staticClass: "p-20" }, [
                _vm._v(
                  "\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut eligendi est ex excepturi nobis quae. Adipisci dignissimos dolorem doloribus expedita iusto magni, nihil nobis officia possimus provident quisquam repellendus!\n                    "
                )
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "p-l-20 action-icons" }, [
                _c("i", {
                  staticClass: "fa fa-thumbs-o-up  p-10",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("i", {
                  staticClass: "fa fa-share-square-o p-10",
                  attrs: { "aria-hidden": "true" }
                })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "timeline-left" }, [
          _c("div", { staticClass: "timeline-badge bg-primary" }, [
            _c("i", { staticClass: "fa fa-share-square-o" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-details" }, [
            _c("h4", [_vm._v("You shared a blog link")]),
            _vm._v(" "),
            _c("small", { staticClass: "text-muted" }, [_vm._v("May 08, 2016")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-card" }, [
            _c("div", { staticClass: "timeline-heading" }, [
              _c("p", { staticClass: "p-20" }, [
                _c("strong", [_vm._v("You")]),
                _vm._v(" have posted a blog link\n                    ")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body" }, [
              _c("span", { staticClass: "blog-link" }, [
                _c("a", { attrs: { href: "javascript:void(0)" } }, [
                  _c("u", [_vm._v("https://examples.blogspot.in")])
                ]),
                _c("br"),
                _vm._v(
                  "\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut eligendi est ex excepturi"
                )
              ]),
              _vm._v(" "),
              _c("img", {
                staticClass: "sharedpost-image img-fluid",
                attrs: {
                  src: __webpack_require__(1041),
                  alt: "timeline image2"
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "timeline-right" }, [
          _c("div", { staticClass: "timeline-badge bg-warning" }, [
            _c("i", { staticClass: "fa fa-user" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-details-inverse" }, [
            _c("h4", [_vm._v("A new Friend Added")]),
            _vm._v(" "),
            _c("small", { staticClass: "text-muted" }, [_vm._v("May 08, 2016")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-card" }, [
            _c("div", { staticClass: "timeline-heading p-20" }, [
              _c("h4", { staticClass: "timeline-title" }, [
                _vm._v("Marshall added to your Friends list")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n                        You have 13 mutual followers.\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body" })
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "timeline-left" }, [
          _c("div", { staticClass: "timeline-badge bg-primary" }, [
            _c("i", { staticClass: "fa fa-briefcase" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-details" }, [
            _c("h4", [_vm._v("An Article by Health Tips")]),
            _vm._v(" "),
            _c("small", { staticClass: "text-muted" }, [_vm._v("May 08, 2016")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-card" }, [
            _c("div", { staticClass: "timeline-heading" }, [
              _c("p", [
                _c("img", {
                  staticClass: "circle-author-image p-10 img-fluid",
                  attrs: {
                    src: __webpack_require__(1482),
                    alt: "author image"
                  }
                }),
                _vm._v(" "),
                _c("span", [
                  _c("strong", [_vm._v("Health Tips")]),
                  _vm._v(" posted an Article")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body" }, [
              _c("ul", { staticClass: "p-20" }, [
                _c("li", [
                  _vm._v("1. Integrate Activity into Your Everyday Life")
                ]),
                _vm._v(" "),
                _c("li", [_vm._v("2. Maintain Healthy Food On Time")]),
                _vm._v(" "),
                _c("li", [_vm._v("3. Having enough Sleep is Important")]),
                _vm._v(" "),
                _c("li", [_vm._v("4. Focus on Deep Breathing")]),
                _vm._v(" "),
                _c("li", [_vm._v("5. Maintain Your siPosture")])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", { staticClass: "timeline-right" }, [
          _c("div", { staticClass: "timeline-badge bg-warning" }, [
            _c("i", { staticClass: "fa fa-map-pin" })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-details-inverse" }, [
            _c("h4", [_vm._v("You shared a moment")]),
            _vm._v(" "),
            _c("small", { staticClass: "text-muted" }, [_vm._v("May 08, 2016")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "timeline-card" }, [
            _c("div", { staticClass: "timeline-heading" }),
            _vm._v(" "),
            _c("div", { staticClass: "timeline-body" }, [
              _c("p", [
                _c("span", { staticClass: "blog-link" }, [
                  _c("strong", [_vm._v("Lorem Ipsum is simply dummy vidis")]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(
                    "\n             Dolor sit amet, consectetur adipisicing elit. At aut eligendi est ex consectetur elit.\n          "
                  )
                ]),
                _vm._v(" "),
                _c("img", {
                  staticClass: "posted-image img-fluid",
                  attrs: {
                    src: __webpack_require__(1079),
                    alt: "timeline image2"
                  }
                })
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
    require("vue-hot-reload-api")      .rerender("data-v-215f2ff1", module.exports)
  }
}

/***/ }),

/***/ 1482:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/health.png?a62090e1f7199d7547f04ae0036c5b71";

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1478)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1480)
/* template */
var __vue_template__ = __webpack_require__(1481)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-215f2ff1"
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
Component.options.__file = "resources/assets/components/pages/timeline.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-215f2ff1", Component.options)
  } else {
    hotAPI.reload("data-v-215f2ff1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 971:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/avatar3.jpg?7e593f7330076b4b89e96f89b9396c0a";

/***/ }),

/***/ 990:
/***/ (function(module, exports) {

module.exports = "/Educ/public/images/avatar5.jpg?83fc5fdfbe37fb37db7a2fe84cca6d6d";

/***/ })

});