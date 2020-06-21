webpackJsonp([53,25],{

/***/ 1038:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1039);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(803)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./cropper.css", function() {
			var newContent = require("!!../../css-loader/index.js!./cropper.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1039:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "/*!\n * Cropper.js v1.5.7\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2020-05-23T05:22:57.283Z\n */\n\n.cropper-container {\n  direction: ltr;\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -ms-touch-action: none;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.cropper-container img {\n  display: block;\n  height: 100%;\n  image-orientation: 0deg;\n  max-height: none !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  min-width: 0 !important;\n  width: 100%;\n}\n\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.cropper-wrap-box,\n.cropper-canvas {\n  overflow: hidden;\n}\n\n.cropper-drag-box {\n  background-color: #fff;\n  opacity: 0;\n}\n\n.cropper-modal {\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.cropper-view-box {\n  display: block;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  overflow: hidden;\n  width: 100%;\n}\n\n.cropper-dashed {\n  border: 0 dashed #eee;\n  display: block;\n  opacity: 0.5;\n  position: absolute;\n}\n\n.cropper-dashed.dashed-h {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: calc(100% / 3);\n  left: 0;\n  top: calc(100% / 3);\n  width: 100%;\n}\n\n.cropper-dashed.dashed-v {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: calc(100% / 3);\n  top: 0;\n  width: calc(100% / 3);\n}\n\n.cropper-center {\n  display: block;\n  height: 0;\n  left: 50%;\n  opacity: 0.75;\n  position: absolute;\n  top: 50%;\n  width: 0;\n}\n\n.cropper-center::before,\n.cropper-center::after {\n  background-color: #eee;\n  content: ' ';\n  display: block;\n  position: absolute;\n}\n\n.cropper-center::before {\n  height: 1px;\n  left: -3px;\n  top: 0;\n  width: 7px;\n}\n\n.cropper-center::after {\n  height: 7px;\n  left: 0;\n  top: -3px;\n  width: 1px;\n}\n\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  display: block;\n  height: 100%;\n  opacity: 0.1;\n  position: absolute;\n  width: 100%;\n}\n\n.cropper-face {\n  background-color: #fff;\n  left: 0;\n  top: 0;\n}\n\n.cropper-line {\n  background-color: #39f;\n}\n\n.cropper-line.line-e {\n  cursor: ew-resize;\n  right: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-n {\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n  top: -3px;\n}\n\n.cropper-line.line-w {\n  cursor: ew-resize;\n  left: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-s {\n  bottom: -3px;\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n}\n\n.cropper-point {\n  background-color: #39f;\n  height: 5px;\n  opacity: 0.75;\n  width: 5px;\n}\n\n.cropper-point.point-e {\n  cursor: ew-resize;\n  margin-top: -3px;\n  right: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-n {\n  cursor: ns-resize;\n  left: 50%;\n  margin-left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-w {\n  cursor: ew-resize;\n  left: -3px;\n  margin-top: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-s {\n  bottom: -3px;\n  cursor: s-resize;\n  left: 50%;\n  margin-left: -3px;\n}\n\n.cropper-point.point-ne {\n  cursor: nesw-resize;\n  right: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-nw {\n  cursor: nwse-resize;\n  left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-sw {\n  bottom: -3px;\n  cursor: nesw-resize;\n  left: -3px;\n}\n\n.cropper-point.point-se {\n  bottom: -3px;\n  cursor: nwse-resize;\n  height: 20px;\n  opacity: 1;\n  right: -3px;\n  width: 20px;\n}\n\n@media (min-width: 768px) {\n  .cropper-point.point-se {\n    height: 15px;\n    width: 15px;\n  }\n}\n\n@media (min-width: 992px) {\n  .cropper-point.point-se {\n    height: 10px;\n    width: 10px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .cropper-point.point-se {\n    height: 5px;\n    opacity: 0.75;\n    width: 5px;\n  }\n}\n\n.cropper-point.point-se::before {\n  background-color: #39f;\n  bottom: -50%;\n  content: ' ';\n  display: block;\n  height: 200%;\n  opacity: 0;\n  position: absolute;\n  right: -50%;\n  width: 200%;\n}\n\n.cropper-invisible {\n  opacity: 0;\n}\n\n.cropper-bg {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');\n}\n\n.cropper-hide {\n  display: block;\n  height: 0;\n  position: absolute;\n  width: 0;\n}\n\n.cropper-hidden {\n  display: none !important;\n}\n\n.cropper-move {\n  cursor: move;\n}\n\n.cropper-crop {\n  cursor: crosshair;\n}\n\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n", ""]);

// exports


/***/ }),

/***/ 1608:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1609);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("72bc62c4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-350dd93c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create-user.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-350dd93c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create-user.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1609:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n.row[data-v-350dd93c] {\n        padding: 10px;\n}\n.mb-3[data-v-350dd93c]{\n        margin-bottom: 0px !important;\n}\n.user-register[data-v-350dd93c]{\n        display: flex;\n        justify-content: center;\n}\n.user-register button[data-v-350dd93c]{\n        font-size: 12px;\n}\n.nav-tabs .nav-link.active[data-v-350dd93c] {\n        color: #333 !important;\n        border-color: #9c27b0 !important;\n}\n.admin-registration[data-v-350dd93c] {\n        width: 296.667px;\n        transform: translate3d(-8px, 0px, 0px);\n        transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1) 0s;\n        background-color: #e91e63;\n        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(233, 30, 99, .4);\n        position: absolute;\n        text-align: center;\n        padding: 12px;\n        font-size: 12px;\n        text-transform: uppercase;\n        -webkit-font-smoothing: subpixel-antialiased;\n        top: -6px;\n        left: 0;\n        border-radius: 4px;\n        color: #fff;\n        cursor: pointer;\n        font-weight: 500;\n}\n#wizardProfile[data-v-350dd93c] {\n        padding: 20px;\n}\n.card[data-v-350dd93c] {\n        box-shadow: none;\n}\n/*--------------*/\nh2[data-v-350dd93c] {\n        font-family: \"Roboto\", sans-serif;\n        font-size: 26px;\n        line-height: 1;\n        color: #454cad;\n        margin-bottom: 0;\n}\np[data-v-350dd93c] {\n        font-family: \"Roboto\", sans-serif;\n        font-size: 18px;\n        color: #5f6982;\n}\n.uploader[data-v-350dd93c] {\n        display: block;\n        clear: both;\n        margin: 0 auto;\n        width: 100%;\n        max-width: 600px;\n}\n.uploader label[data-v-350dd93c] {\n        float: left;\n        clear: both;\n        width: 100%;\n        padding: 2rem 1.5rem;\n        text-align: center;\n        background: #fff;\n        border-radius: 7px;\n        border: 3px solid #eee;\n        transition: all .2s ease;\n        user-select: none;\n}\n.uploader label[data-v-350dd93c]:hover {\n        border-color: #454cad;\n}\n.uploader label.hover[data-v-350dd93c] {\n        border: 3px solid #454cad;\n        box-shadow: inset 0 0 0 6px #eee;\n}\n.uploader label.hover #start i.fa[data-v-350dd93c] {\n        transform: scale(0.8);\n        opacity: 0.3;\n}\n.uploader #start[data-v-350dd93c] {\n        float: left;\n        clear: both;\n        width: 100%;\n}\n.uploader #start.hidden[data-v-350dd93c] {\n        display: none;\n}\n.uploader #start i.fa[data-v-350dd93c] {\n        font-size: 50px;\n        margin-bottom: 1rem;\n        transition: all .2s ease-in-out;\n}\n.uploader #response[data-v-350dd93c] {\n        float: left;\n        clear: both;\n        width: 100%;\n}\n.uploader #response.hidden[data-v-350dd93c] {\n        display: none;\n}\n.uploader #response #messages[data-v-350dd93c] {\n        margin-bottom: .5rem;\n}\n.uploader #file-image[data-v-350dd93c] {\n        display: inline;\n        margin: 0 auto .5rem auto;\n        width: auto;\n        height: auto;\n        max-width: 180px;\n}\n.uploader #file-image.hidden[data-v-350dd93c] {\n        display: none;\n}\n.uploader #notimage[data-v-350dd93c] {\n        display: block;\n        float: left;\n        clear: both;\n        width: 100%;\n}\n.uploader #notimage.hidden[data-v-350dd93c] {\n        display: none;\n}\n.uploader progress[data-v-350dd93c],\n    .uploader .progress[data-v-350dd93c] {\n        display: inline;\n        clear: both;\n        margin: 0 auto;\n        width: 100%;\n        max-width: 180px;\n        height: 8px;\n        border: 0;\n        border-radius: 4px;\n        background-color: #eee;\n        overflow: hidden;\n}\n.uploader .progress[value][data-v-350dd93c]::-webkit-progress-bar {\n        border-radius: 4px;\n        background-color: #eee;\n}\n.uploader .progress[value][data-v-350dd93c]::-webkit-progress-value {\n        background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n        border-radius: 4px;\n}\n.uploader .progress[value][data-v-350dd93c]::-moz-progress-bar {\n        background: linear-gradient(to right, #393f90 0%, #454cad 50%);\n        border-radius: 4px;\n}\n.uploader input[type=\"file\"][data-v-350dd93c] {\n        display: none;\n}\n.uploader div[data-v-350dd93c] {\n        margin: 0 0 .5rem 0;\n        color: #5f6982;\n}\n.uploader .btn[data-v-350dd93c] {\n        display: inline-block;\n        margin: .5rem .5rem 1rem .5rem;\n        clear: both;\n        font-family: inherit;\n        font-weight: 700;\n        font-size: 14px;\n        text-decoration: none;\n        text-transform: initial;\n        border: none;\n        border-radius: .2rem;\n        outline: none;\n        padding: 0 1rem;\n        height: 36px;\n        line-height: 36px;\n        color: #fff;\n        transition: all 0.2s ease-in-out;\n        box-sizing: border-box;\n        background: #454cad;\n        border-color: #454cad;\n        cursor: pointer;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ 1610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_cropperjs__ = __webpack_require__(983);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_cropperjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_cropperjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cropperjs_dist_cropper_css__ = __webpack_require__(1038);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cropperjs_dist_cropper_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cropperjs_dist_cropper_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_form__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validations_validations__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mini_toastr__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_echarts_lib_component_tooltip__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_echarts_lib_component_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_echarts_lib_component_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__buttons__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_admin_api_service__ = __webpack_require__(807);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//











__WEBPACK_IMPORTED_MODULE_8__common_admin_api_service__["a" /* default */].init();
var unsub;
__WEBPACK_IMPORTED_MODULE_5_mini_toastr__["a" /* default */].init();
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_form___default.a, __WEBPACK_IMPORTED_MODULE_4__validations_validations__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "create-user",
    components: {
        Buttons: __WEBPACK_IMPORTED_MODULE_7__buttons___default.a,
        VueCropper: __WEBPACK_IMPORTED_MODULE_1_vue_cropperjs___default.a
    },
    data: function data() {
        return {
            role: 1,
            loading: false,
            instances: [],
            imageSrc: "",
            counter: 1,
            AdminPassCodeShower: false,
            value: '',
            formstate1: {},
            formstate2: {},
            formstate3: {},

            model: {
                isAdmin: 0,
                croppedImageSrc: "",
                studentId: "",
                password: "",
                repeatPassword: "",
                adminPassCode: "",
                name: "",
                email: "",
                dob: "",
                nationality: "",
                emirates_id_details: "",
                passport_details: "",
                profile_image: "",
                gender: "A",
                options: [{ item: 'A', name: 'Male' }, { item: 'B', name: 'Female' }],
                married: 'a',
                maritalStatus: [{ value: 'a', text: 'Single' }, { value: 'b', text: 'Married' }],
                category: '1',
                CategoryData: []
            }
        };
    },

    methods: {
        onReady: function onReady(instance) {
            this.instances.push(instance);
        },
        CreateUser: function CreateUser($id) {
            if ($id === 1) {
                console.log('------------', $id);
                if (this.formstate1.$invalid) {
                    return;
                } else {
                    var image = new Image();
                    image.src = $('.bg-light').attr('src');
                    this.model.isAdmin = $id;
                    __WEBPACK_IMPORTED_MODULE_8__common_admin_api_service__["a" /* default */].post('CreateUser', this.model).then(function (result) {
                        var data = result.data;
                        if (data.success === true) {
                            __WEBPACK_IMPORTED_MODULE_5_mini_toastr__["a" /* default */].success(data.message);
                            console.log(data);
                        } else {
                            __WEBPACK_IMPORTED_MODULE_5_mini_toastr__["a" /* default */].error(data.message);
                            console.log('------------', data);
                        }
                    }, function (error) {
                        var data = result.data;
                        console.log('error', data);
                    });
                }
            }
            if ($id === 2) {
                console.log('------------', $id);
                this.model.isAdmin = $id;
                if (this.formstate2.$invalid) {
                    return;
                } else {
                    var image = new Image();
                    image.src = $('.bg-light').attr('src');
                    __WEBPACK_IMPORTED_MODULE_8__common_admin_api_service__["a" /* default */].post('CreateUser', this.model).then(function (result) {
                        var data = result.data;
                        if (data.success === true) {
                            __WEBPACK_IMPORTED_MODULE_5_mini_toastr__["a" /* default */].success(data.message);
                            console.log(data);
                        } else {
                            __WEBPACK_IMPORTED_MODULE_5_mini_toastr__["a" /* default */].error(data.message);
                            console.log(data);
                        }
                    }, function (error) {
                        var data = result.data;
                        console.log('error', data);
                    });
                }
            }
            if ($id === 0) {
                console.log('------------', $id);
                this.model.isAdmin = $id;
                if (this.formstate3.$invalid) {
                    return;
                } else {
                    var image = new Image();
                    image.src = $('.bg-light').attr('src');
                    __WEBPACK_IMPORTED_MODULE_8__common_admin_api_service__["a" /* default */].post('CreateUser', this.model).then(function (result) {
                        var data = result.data;
                        if (data.success === true) {
                            __WEBPACK_IMPORTED_MODULE_5_mini_toastr__["a" /* default */].success(data.message);

                            console.log(data);
                        } else {
                            __WEBPACK_IMPORTED_MODULE_5_mini_toastr__["a" /* default */].error(data.message);
                            console.log(data);
                        }
                    }, function (error) {
                        var data = result.data;
                        console.log('error', data);
                    });
                }
            }
        },
        submit_profile: function submit_profile() {},

        setImage: function setImage(e) {
            var _this = this;

            var file = e.target.files[0];
            if (!file.type.includes('image/')) {
                alert('Please select an image file');
                return;
            }
            if (typeof FileReader === 'function') {
                var reader = new FileReader();
                reader.onload = function (event) {
                    _this.imageSrc = event.target.result;
                    // Rebuild cropperjs with the updated source
                    // this.$refs.cropper.replace(event.target.result);
                };
                reader.readAsDataURL(file);
            } else {
                alert('Sorry, FileReader API not supported');
            }
        },
        showAdminPassCodeForm: function showAdminPassCodeForm($status) {
            console.log($status);
            if ($status === true) {
                this.AdminPassCodeShower = $status;
            } else {
                this.AdminPassCodeShower = $status;
            }
        },
        cropImage: function cropImage() {
            // Get image data for post processing, e.g. upload or setting image src
            this.model.croppedImageSrc = this.$refs.cropper.getCroppedCanvas().toDataURL();
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        unsub = this.$store.subscribe(function (mutation, state) {
            if (mutation.type == "left_menu") {
                _this2.instances.forEach(function (item, index) {
                    setTimeout(function () {
                        item.resize();
                    });
                });
                setTimeout(function () {
                    _this2.$refs.swiper.swiper.update();
                });
            }
        });
        // let externalScript = document.createElement('script')
        // externalScript.setAttribute('src', "https://demos.creative-tim.com/material-dashboard-pro/assets/js/plugins/jquery.bootstrap-wizard.js")
        // document.head.appendChild(externalScript)
    },
    created: function created() {
        var _this3 = this;

        __WEBPACK_IMPORTED_MODULE_8__common_admin_api_service__["a" /* default */].post('GetCategory').then(function (result) {
            var data = result.data;
            if (data.success) {
                _this3.getData = data;
                console.log('CategoryData', data.CategoryData);
                _this3.model.CategoryData = data.CategoryData;
            }
        }, function (error) {
            console.log('error');
        });
        __WEBPACK_IMPORTED_MODULE_5_mini_toastr__["a" /* default */].setIcon('error', 'i', {
            'class': 'fa fa-times'
        });
        __WEBPACK_IMPORTED_MODULE_5_mini_toastr__["a" /* default */].setIcon('success', 'i', {
            'class': 'fa fa-arrow-circle-o-down'
        });
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        unsub();
        next();
    }
});

/***/ }),

/***/ 1611:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: " mr-auto ml-auto" }, [
    _c("div", { staticClass: "wizard-container" }, [
      _c(
        "div",
        {
          staticClass: "card card-wizard active",
          attrs: { "data-color": "rose", id: "wizardProfile" }
        },
        [
          _c("div", { attrs: { novalidate: "novalidate" } }, [
            _c(
              "div",
              { staticClass: "user-r-content" },
              [
                _c(
                  "b-tabs",
                  [
                    _c(
                      "b-tab",
                      { attrs: { title: "Admin", active: "" } },
                      [
                        _c("b-card", [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-5" },
                              [
                                _c(
                                  "vue-form",
                                  { attrs: { state: _vm.formstate1 } },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "table-responsive" },
                                      [
                                        _c(
                                          "table",
                                          {
                                            staticClass: "table table-striped"
                                          },
                                          [
                                            _c("tbody", [
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Admin ID")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: (_vm.model.isAdmin1 = 1),
                                                          expression:
                                                            "model.isAdmin1 = 1"
                                                        }
                                                      ],
                                                      staticStyle: {
                                                        display: "none"
                                                      },
                                                      attrs: {
                                                        name: "isAdmin1",
                                                        type: "number"
                                                      },
                                                      domProps: {
                                                        value: (_vm.model.isAdmin1 = 1)
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.model,
                                                            "isAdmin1 = 1",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.model
                                                                  .studentId,
                                                              expression:
                                                                "model.studentId"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            name: "studentId",
                                                            type: "text",
                                                            autofocus: "",
                                                            id: "studentId",
                                                            required: ""
                                                          },
                                                          domProps: {
                                                            value:
                                                              _vm.model
                                                                .studentId
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                _vm.model,
                                                                "studentId",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "studentId",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "User ID is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Name")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.model.name,
                                                              expression:
                                                                "model.name"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            name: "name",
                                                            type: "text",
                                                            id: "name",
                                                            required: ""
                                                          },
                                                          domProps: {
                                                            value:
                                                              _vm.model.name
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                _vm.model,
                                                                "name",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "name",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Name is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Email")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.model.email,
                                                              expression:
                                                                "model.email"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            name: "email",
                                                            type: "email",
                                                            id: "email",
                                                            required: ""
                                                          },
                                                          domProps: {
                                                            value:
                                                              _vm.model.email
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                _vm.model,
                                                                "email",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "email",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Email is a required field"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot: "email"
                                                                },
                                                                slot: "email"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Email is not valid"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Passcode")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.model
                                                                  .password,
                                                              expression:
                                                                "model.password"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            name: "password",
                                                            type: "password",
                                                            required: "",
                                                            placeholder:
                                                              "Password",
                                                            minlength: "4",
                                                            maxlength: "10",
                                                            id: "password"
                                                          },
                                                          domProps: {
                                                            value:
                                                              _vm.model.password
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                _vm.model,
                                                                "password",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "password",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Password is required"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "minlength"
                                                                },
                                                                slot:
                                                                  "minlength"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Password should be atleast 4 characters long"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "maxlength"
                                                                },
                                                                slot:
                                                                  "maxlength"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Password should be atmost 10 characters long"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Gender")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("b-form-select", {
                                                          staticClass:
                                                            "mb-3 r-content form-control",
                                                          attrs: {
                                                            options:
                                                              _vm.model.options,
                                                            "value-field":
                                                              "item",
                                                            "text-field":
                                                              "name",
                                                            name: "gender",
                                                            id: "gender",
                                                            required: "",
                                                            "disabled-field":
                                                              "notEnabled"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.model.gender,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.model,
                                                                "gender",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "model.gender"
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "gender",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Gender is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Nationality")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.model
                                                                  .nationality,
                                                              expression:
                                                                "model.nationality"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control r-content",
                                                          attrs: {
                                                            type: "text",
                                                            name: "nationality",
                                                            id: "nationality",
                                                            required: "",
                                                            placeholder:
                                                              "Nationality"
                                                          },
                                                          domProps: {
                                                            value:
                                                              _vm.model
                                                                .nationality
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                _vm.model,
                                                                "nationality",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name:
                                                                "nationality",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Nationality is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Date of Birth")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.model.dob,
                                                              expression:
                                                                "model.dob"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control r-content",
                                                          attrs: {
                                                            type: "date",
                                                            name: "dob",
                                                            id: "dob",
                                                            required: "",
                                                            placeholder:
                                                              "Select Date"
                                                          },
                                                          domProps: {
                                                            value: _vm.model.dob
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                _vm.model,
                                                                "dob",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "dob",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Birthday is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Marital Status")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("b-form-select", {
                                                          staticClass:
                                                            "mb-3 r-content form-control",
                                                          attrs: {
                                                            options:
                                                              _vm.model
                                                                .maritalStatus,
                                                            "value-field":
                                                              "value",
                                                            "text-field":
                                                              "text",
                                                            name: "married",
                                                            id: "married",
                                                            required: "",
                                                            "disabled-field":
                                                              "notEnabled"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.model.married,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.model,
                                                                "married",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "model.married"
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "married",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Married is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Emirates")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("b-form-textarea", {
                                                          staticClass:
                                                            "r-content",
                                                          attrs: {
                                                            id:
                                                              "textarea-large",
                                                            required: "",
                                                            size: "lg",
                                                            placeholder:
                                                              "Emirates Id Details",
                                                            name:
                                                              "emirates_id_details"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.model
                                                                .emirates_id_details,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.model,
                                                                "emirates_id_details",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "model.emirates_id_details"
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name:
                                                                "emirates_id_details",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Emirates Id Details is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Passport")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("b-form-textarea", {
                                                          staticClass:
                                                            "r-content",
                                                          attrs: {
                                                            id:
                                                              "textarea-large",
                                                            required: "",
                                                            size: "lg",
                                                            placeholder:
                                                              "Passport Details",
                                                            name:
                                                              "passport_details"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.model
                                                                .passport_details,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.model,
                                                                "passport_details",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "model.passport_details"
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name:
                                                                "passport_details",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Passport Details is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ])
                                            ])
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-7" }, [
                              _c(
                                "div",
                                { staticClass: "panel-body r-content" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "p-3 bg-white shadow rounded-lg"
                                    },
                                    [
                                      _c("input", {
                                        attrs: {
                                          type: "file",
                                          name: "image",
                                          required: "",
                                          accept: "image/*"
                                        },
                                        on: { change: _vm.setImage }
                                      }),
                                      _vm._v(" "),
                                      _c("img", {
                                        attrs: {
                                          src: _vm.imageSrc,
                                          width: "100"
                                        }
                                      }),
                                      _vm._v(" "),
                                      this.imageSrc
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "my-3 d-flex align-items-center justify-content-center mx-auto"
                                            },
                                            [
                                              _c("vue-cropper", {
                                                ref: "cropper",
                                                staticClass:
                                                  "mr-2 w-50 cropped-image",
                                                attrs: {
                                                  guides: true,
                                                  src: _vm.imageSrc
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("img", {
                                                staticClass:
                                                  "ml-2 w-50 bg-light",
                                                attrs: {
                                                  src: _vm.model.croppedImageSrc
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      this.imageSrc
                                        ? _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary btn-fab-mini",
                                              on: { click: _vm.cropImage }
                                            },
                                            [_vm._v("Crop")]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "user-register" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: (_vm.model.isAdmin = 1),
                                expression: "model.isAdmin = 1"
                              }
                            ],
                            staticStyle: { display: "none" },
                            attrs: { type: "number" },
                            domProps: { value: (_vm.model.isAdmin = 1) },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.model,
                                  "isAdmin = 1",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success",
                              on: {
                                click: function($event) {
                                  return _vm.CreateUser(1)
                                }
                              }
                            },
                            [_vm._v("Register")]
                          ),
                          _vm._v("   \n                                "),
                          _c("button", { staticClass: "btn btn-danger" }, [
                            _vm._v("Cancel")
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      { attrs: { title: "Supervisor" } },
                      [
                        _c("b-card", [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-5" },
                              [
                                _c(
                                  "vue-form",
                                  { attrs: { state: _vm.formstate2 } },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "table-responsive" },
                                      [
                                        _c(
                                          "table",
                                          {
                                            staticClass: "table table-striped"
                                          },
                                          [
                                            _c("tbody", [
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Supervisor ID")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: (_vm.model.isAdmin2 = 2),
                                                          expression:
                                                            "model.isAdmin2 = 2"
                                                        }
                                                      ],
                                                      staticStyle: {
                                                        display: "none"
                                                      },
                                                      attrs: {
                                                        type: "number",
                                                        name: "isAdmin2"
                                                      },
                                                      domProps: {
                                                        value: (_vm.model.isAdmin2 = 2)
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.model,
                                                            "isAdmin2 = 2",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.model
                                                                  .studentId,
                                                              expression:
                                                                "model.studentId"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            name: "studentId",
                                                            type: "text",
                                                            autofocus: "",
                                                            id: "studentId",
                                                            required: ""
                                                          },
                                                          domProps: {
                                                            value:
                                                              _vm.model
                                                                .studentId
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                _vm.model,
                                                                "studentId",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "studentId",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "User ID is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Name")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.model.name,
                                                              expression:
                                                                "model.name"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            name: "name",
                                                            type: "text",
                                                            id: "name",
                                                            required: ""
                                                          },
                                                          domProps: {
                                                            value:
                                                              _vm.model.name
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                _vm.model,
                                                                "name",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "name",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Name is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Email")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.model.email,
                                                              expression:
                                                                "model.email"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            name: "email",
                                                            type: "email",
                                                            id: "email",
                                                            required: ""
                                                          },
                                                          domProps: {
                                                            value:
                                                              _vm.model.email
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                _vm.model,
                                                                "email",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "email",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Email is a required field"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot: "email"
                                                                },
                                                                slot: "email"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Email is not valid"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Passcode")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.model
                                                                  .password,
                                                              expression:
                                                                "model.password"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            name: "password",
                                                            type: "password",
                                                            required: "",
                                                            placeholder:
                                                              "Password",
                                                            minlength: "4",
                                                            maxlength: "10",
                                                            id: "password"
                                                          },
                                                          domProps: {
                                                            value:
                                                              _vm.model.password
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                _vm.model,
                                                                "password",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "password",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Password is required"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "minlength"
                                                                },
                                                                slot:
                                                                  "minlength"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Password should be atleast 4 characters long"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "maxlength"
                                                                },
                                                                slot:
                                                                  "maxlength"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Password should be atmost 10 characters long"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Gender")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("b-form-select", {
                                                          staticClass:
                                                            "mb-3 r-content form-control",
                                                          attrs: {
                                                            options:
                                                              _vm.model.options,
                                                            "value-field":
                                                              "item",
                                                            "text-field":
                                                              "name",
                                                            name: "gender",
                                                            id: "gender",
                                                            required: "",
                                                            "disabled-field":
                                                              "notEnabled"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.model.gender,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.model,
                                                                "gender",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "model.gender"
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "gender",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Gender is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Nationality")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.model
                                                                  .nationality,
                                                              expression:
                                                                "model.nationality"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control r-content",
                                                          attrs: {
                                                            type: "text",
                                                            name: "nationality",
                                                            id: "nationality",
                                                            required: "",
                                                            placeholder:
                                                              "Nationality"
                                                          },
                                                          domProps: {
                                                            value:
                                                              _vm.model
                                                                .nationality
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                _vm.model,
                                                                "nationality",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name:
                                                                "nationality",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Nationality is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Date of Birth")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.model.dob,
                                                              expression:
                                                                "model.dob"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control r-content",
                                                          attrs: {
                                                            type: "date",
                                                            name: "dob",
                                                            id: "dob",
                                                            required: "",
                                                            placeholder:
                                                              "Select Date"
                                                          },
                                                          domProps: {
                                                            value: _vm.model.dob
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                _vm.model,
                                                                "dob",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "dob",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Birthday is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Marital Status")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("b-form-select", {
                                                          staticClass:
                                                            "mb-3 r-content form-control",
                                                          attrs: {
                                                            options:
                                                              _vm.model
                                                                .maritalStatus,
                                                            "value-field":
                                                              "value",
                                                            "text-field":
                                                              "text",
                                                            name: "married",
                                                            id: "married",
                                                            required: "",
                                                            "disabled-field":
                                                              "notEnabled"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.model.married,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.model,
                                                                "married",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "model.married"
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "married",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Married is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Emirates")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("b-form-textarea", {
                                                          staticClass:
                                                            "r-content",
                                                          attrs: {
                                                            id:
                                                              "textarea-large",
                                                            required: "",
                                                            size: "lg",
                                                            placeholder:
                                                              "Emirates Id Details",
                                                            name:
                                                              "emirates_id_details"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.model
                                                                .emirates_id_details,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.model,
                                                                "emirates_id_details",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "model.emirates_id_details"
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name:
                                                                "emirates_id_details",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Emirates Id Details is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Passport")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("b-form-textarea", {
                                                          staticClass:
                                                            "r-content",
                                                          attrs: {
                                                            id:
                                                              "textarea-large",
                                                            required: "",
                                                            size: "lg",
                                                            placeholder:
                                                              "Passport Details",
                                                            name:
                                                              "passport_details"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.model
                                                                .passport_details,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.model,
                                                                "passport_details",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "model.passport_details"
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name:
                                                                "passport_details",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Passport Details is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ])
                                            ])
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-7" }, [
                              _c(
                                "div",
                                { staticClass: "panel-body r-content" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "p-3 bg-white shadow rounded-lg"
                                    },
                                    [
                                      _c("input", {
                                        attrs: {
                                          type: "file",
                                          name: "image",
                                          required: "",
                                          accept: "image/*"
                                        },
                                        on: { change: _vm.setImage }
                                      }),
                                      _vm._v(" "),
                                      _c("img", {
                                        attrs: {
                                          src: _vm.imageSrc,
                                          width: "100"
                                        }
                                      }),
                                      _vm._v(" "),
                                      this.imageSrc
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "my-3 d-flex align-items-center justify-content-center mx-auto"
                                            },
                                            [
                                              _c("vue-cropper", {
                                                ref: "cropper",
                                                staticClass:
                                                  "mr-2 w-50 cropped-image",
                                                attrs: {
                                                  guides: true,
                                                  src: _vm.imageSrc
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("img", {
                                                staticClass:
                                                  "ml-2 w-50 bg-light",
                                                attrs: {
                                                  src: _vm.model.croppedImageSrc
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      this.imageSrc
                                        ? _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary btn-fab-mini",
                                              on: { click: _vm.cropImage }
                                            },
                                            [_vm._v("Crop")]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "user-register" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: (_vm.model.isAdmin = 2),
                                expression: "model.isAdmin = 2"
                              }
                            ],
                            staticStyle: { display: "none" },
                            attrs: { type: "number" },
                            domProps: { value: (_vm.model.isAdmin = 2) },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.model,
                                  "isAdmin = 2",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success",
                              on: {
                                click: function($event) {
                                  return _vm.CreateUser(2)
                                }
                              }
                            },
                            [_vm._v("Register")]
                          ),
                          _vm._v("   \n                                "),
                          _c("button", { staticClass: "btn btn-danger" }, [
                            _vm._v("Cancel")
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      { attrs: { title: "Student" } },
                      [
                        _c("b-card", [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-5" },
                              [
                                _c(
                                  "vue-form",
                                  { attrs: { state: _vm.formstate3 } },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "table-responsive" },
                                      [
                                        _c(
                                          "table",
                                          {
                                            staticClass: "table table-striped"
                                          },
                                          [
                                            _c("tbody", [
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Student ID")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value: (_vm.model.isAdmin0 = 0),
                                                          expression:
                                                            "model.isAdmin0 = 0"
                                                        }
                                                      ],
                                                      staticStyle: {
                                                        display: "none"
                                                      },
                                                      attrs: {
                                                        name: "isAdmin0",
                                                        type: "number"
                                                      },
                                                      domProps: {
                                                        value: (_vm.model.isAdmin0 = 0)
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.model,
                                                            "isAdmin0 = 0",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.model
                                                                  .studentId,
                                                              expression:
                                                                "model.studentId"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            name: "studentId",
                                                            type: "text",
                                                            autofocus: "",
                                                            id: "studentId",
                                                            required: ""
                                                          },
                                                          domProps: {
                                                            value:
                                                              _vm.model
                                                                .studentId
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                _vm.model,
                                                                "studentId",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "studentId",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "User ID is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Name")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.model.name,
                                                              expression:
                                                                "model.name"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            name: "name",
                                                            type: "text",
                                                            id: "name",
                                                            required: ""
                                                          },
                                                          domProps: {
                                                            value:
                                                              _vm.model.name
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                _vm.model,
                                                                "name",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "name",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Name is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Email")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("input", {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.model.email,
                                                              expression:
                                                                "model.email"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            name: "email",
                                                            type: "email",
                                                            id: "email",
                                                            required: ""
                                                          },
                                                          domProps: {
                                                            value:
                                                              _vm.model.email
                                                          },
                                                          on: {
                                                            input: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                $event.target
                                                                  .composing
                                                              ) {
                                                                return
                                                              }
                                                              _vm.$set(
                                                                _vm.model,
                                                                "email",
                                                                $event.target
                                                                  .value
                                                              )
                                                            }
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "email",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Email is a required field"
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot: "email"
                                                                },
                                                                slot: "email"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Email is not valid"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Category")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("b-form-select", {
                                                          staticClass:
                                                            "mb-3 r-content form-control",
                                                          attrs: {
                                                            options:
                                                              _vm.model
                                                                .CategoryData,
                                                            "value-field": "id",
                                                            "text-field":
                                                              "name",
                                                            name: "gender",
                                                            id: "gender",
                                                            required: "",
                                                            "disabled-field":
                                                              "notEnabled"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.model
                                                                .category,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.model,
                                                                "category",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "model.category"
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "gender",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Category is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { staticClass: "text-left" },
                                                  [_vm._v("Gender")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "td",
                                                  [
                                                    _c(
                                                      "validate",
                                                      { attrs: { tag: "div" } },
                                                      [
                                                        _c("b-form-select", {
                                                          staticClass:
                                                            "mb-3 r-content form-control",
                                                          attrs: {
                                                            options:
                                                              _vm.model.options,
                                                            "value-field":
                                                              "item",
                                                            "text-field":
                                                              "name",
                                                            name: "gender",
                                                            id: "gender",
                                                            required: "",
                                                            "disabled-field":
                                                              "notEnabled"
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.model.gender,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.model,
                                                                "gender",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "model.gender"
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "field-messages",
                                                          {
                                                            staticClass:
                                                              "text-danger",
                                                            attrs: {
                                                              name: "gender",
                                                              show:
                                                                "$invalid && $submitted"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                attrs: {
                                                                  slot:
                                                                    "required"
                                                                },
                                                                slot: "required"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Gender is a required field"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ])
                                            ])
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-7" }, [
                              _c(
                                "div",
                                { staticClass: "panel-body r-content" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "p-3 bg-white shadow rounded-lg"
                                    },
                                    [
                                      _c("input", {
                                        attrs: {
                                          type: "file",
                                          name: "image",
                                          required: "",
                                          accept: "image/*"
                                        },
                                        on: { change: _vm.setImage }
                                      }),
                                      _vm._v(" "),
                                      _c("img", {
                                        attrs: {
                                          src: _vm.imageSrc,
                                          width: "100"
                                        }
                                      }),
                                      _vm._v(" "),
                                      this.imageSrc
                                        ? _c(
                                            "div",
                                            {
                                              staticClass:
                                                "my-3 d-flex align-items-center justify-content-center mx-auto"
                                            },
                                            [
                                              _c("vue-cropper", {
                                                ref: "cropper",
                                                staticClass:
                                                  "mr-2 w-50 cropped-image",
                                                attrs: {
                                                  guides: true,
                                                  src: _vm.imageSrc
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("img", {
                                                staticClass:
                                                  "ml-2 w-50 bg-light",
                                                attrs: {
                                                  src: _vm.model.croppedImageSrc
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      this.imageSrc
                                        ? _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary btn-fab-mini",
                                              on: { click: _vm.cropImage }
                                            },
                                            [_vm._v("Crop")]
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "user-register" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: (_vm.model.isAdmin = 0),
                                expression: "model.isAdmin = 0"
                              }
                            ],
                            staticStyle: { display: "none" },
                            attrs: { type: "number" },
                            domProps: { value: (_vm.model.isAdmin = 0) },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.model,
                                  "isAdmin = 0",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success",
                              on: {
                                click: function($event) {
                                  return _vm.CreateUser(0)
                                }
                              }
                            },
                            [_vm._v("Register")]
                          ),
                          _vm._v("   \n                                "),
                          _c("button", { staticClass: "btn btn-danger" }, [
                            _vm._v("Cancel")
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
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-350dd93c", module.exports)
  }
}

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(973)
  __webpack_require__(975)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(977)
/* template */
var __vue_template__ = __webpack_require__(978)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-544d8501"
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
Component.options.__file = "resources/assets/components/pages/buttons.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-544d8501", Component.options)
  } else {
    hotAPI.reload("data-v-544d8501", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1608)
}
var normalizeComponent = __webpack_require__(46)
/* script */
var __vue_script__ = __webpack_require__(1610)
/* template */
var __vue_template__ = __webpack_require__(1611)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-350dd93c"
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
Component.options.__file = "resources/assets/components/pages/admin/create-user.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-350dd93c", Component.options)
  } else {
    hotAPI.reload("data-v-350dd93c", Component.options)
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

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(804);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 804:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fadeOut */
/* unused harmony export flatten */
/* unused harmony export makeCss */
/* unused harmony export appendStyles */
/* unused harmony export makeNode */
/* unused harmony export createIcon */
/* unused harmony export addElem */
/* unused harmony export getTypeClass */
function fadeOut (element, cb) {
  if (element.style.opacity && element.style.opacity > 0.05) {
    element.style.opacity = element.style.opacity - 0.05
  } else if (element.style.opacity && element.style.opacity <= 0.1) {
    if (element.parentNode) {
      element.parentNode.removeChild(element)
      if (cb) cb()
    }
  } else {
    element.style.opacity = 0.9
  }
  setTimeout(() => fadeOut.apply(this, [element, cb]), 1000 / 30
  )
}

const LIB_NAME = 'mini-toastr'
/* unused harmony export LIB_NAME */


const ERROR = 'error'
/* unused harmony export ERROR */

const WARN = 'warn'
/* unused harmony export WARN */

const SUCCESS = 'success'
/* unused harmony export SUCCESS */

const INFO = 'info'
/* unused harmony export INFO */

const CONTAINER_CLASS = LIB_NAME
/* unused harmony export CONTAINER_CLASS */

const NOTIFICATION_CLASS = `${LIB_NAME}__notification`
/* unused harmony export NOTIFICATION_CLASS */

const TITLE_CLASS = `${LIB_NAME}-notification__title`
/* unused harmony export TITLE_CLASS */

const ICON_CLASS = `${LIB_NAME}-notification__icon`
/* unused harmony export ICON_CLASS */

const MESSAGE_CLASS = `${LIB_NAME}-notification__message`
/* unused harmony export MESSAGE_CLASS */

const ERROR_CLASS = `-${ERROR}`
/* unused harmony export ERROR_CLASS */

const WARN_CLASS = `-${WARN}`
/* unused harmony export WARN_CLASS */

const SUCCESS_CLASS = `-${SUCCESS}`
/* unused harmony export SUCCESS_CLASS */

const INFO_CLASS = `-${INFO}`
/* unused harmony export INFO_CLASS */

const DEFAULT_TIMEOUT = 3000
/* unused harmony export DEFAULT_TIMEOUT */



function flatten (obj, into, prefix) {
  into = into || {}
  prefix = prefix || ''

  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      const prop = obj[k]
      if (prop && typeof prop === 'object' && !(prop instanceof Date || prop instanceof RegExp)) {
        flatten(prop, into, prefix + k + ' ')
      } else {
        if (into[prefix] && typeof into[prefix] === 'object') {
          into[prefix][k] = prop
        } else {
          into[prefix] = {}
          into[prefix][k] = prop
        }
      }
    }
  }

  return into
}

function makeCss (obj) {
  const flat = flatten(obj)
  let str = JSON.stringify(flat, null, 2)
  str = str.replace(/"([^"]*)": {/g, '$1 {')
    .replace(/"([^"]*)"/g, '$1')
    .replace(/(\w*-?\w*): ([\w\d .#]*),?/g, '$1: $2;')
    .replace(/},/g, '}\n')
    .replace(/ &([.:])/g, '$1')

  str = str.substr(1, str.lastIndexOf('}') - 1)

  return str
}

function appendStyles (css) {
  let head = document.head || document.getElementsByTagName('head')[0]
  let styleElem = makeNode('style')
  styleElem.id = `${LIB_NAME}-styles`
  styleElem.type = 'text/css'

  if (styleElem.styleSheet) {
    styleElem.styleSheet.cssText = css
  } else {
    styleElem.appendChild(document.createTextNode(css))
  }

  head.appendChild(styleElem)
}

const config = {
  types: {ERROR, WARN, SUCCESS, INFO},
  animation: fadeOut,
  timeout: DEFAULT_TIMEOUT,
  icons: {},
  appendTarget: document.body,
  node: makeNode(),
  style: {
    [`.${CONTAINER_CLASS}`]: {
      position: 'fixed',
      'z-index': 99999,
      right: '12px',
      top: '12px'
    },
    [`.${NOTIFICATION_CLASS}`]: {
      cursor: 'pointer',
      padding: '12px 18px',
      margin: '0 0 6px 0',
      'background-color': '#000',
      opacity: 0.8,
      color: '#fff',
      'border-radius': '3px',
      'box-shadow': '#3c3b3b 0 0 12px',
      width: '300px',
      [`&.${ERROR_CLASS}`]: {
        'background-color': '#D5122B'
      },
      [`&.${WARN_CLASS}`]: {
        'background-color': '#F5AA1E'
      },
      [`&.${SUCCESS_CLASS}`]: {
        'background-color': '#7AC13E'
      },
      [`&.${INFO_CLASS}`]: {
        'background-color': '#4196E1'
      },
      '&:hover': {
        opacity: 1,
        'box-shadow': '#000 0 0 12px'
      }
    },
    [`.${TITLE_CLASS}`]: {
      'font-weight': '500'
    },
    [`.${MESSAGE_CLASS}`]: {
      display: 'inline-block',
      'vertical-align': 'middle',
      width: '240px',
      padding: '0 12px'
    }
  }
}
/* unused harmony export config */


function makeNode (type = 'div') {
  return document.createElement(type)
}

function createIcon (node, type, config) {
  const iconNode = makeNode(config.icons[type].nodeType)
  const attrs = config.icons[type].attrs

  for (const k in attrs) {
    if (attrs.hasOwnProperty(k)) {
      iconNode.setAttribute(k, attrs[k])
    }
  }

  node.appendChild(iconNode)
}

function addElem (node, text, className) {
  const elem = makeNode()
  elem.className = className
  elem.appendChild(document.createTextNode(text))
  node.appendChild(elem)
}

function getTypeClass (type) {
  if (type === SUCCESS) return SUCCESS_CLASS
  if (type === WARN) return WARN_CLASS
  if (type === ERROR) return ERROR_CLASS
  if (type === INFO) return INFO_CLASS

  return ''
}

const miniToastr = {
  config,
  isInitialised: false,
  showMessage (message, title, type, timeout, cb, overrideConf) {
    const config = {}
    Object.assign(config, this.config)
    Object.assign(config, overrideConf)

    const notificationElem = makeNode()
    notificationElem.className = `${NOTIFICATION_CLASS} ${getTypeClass(type)}`

    notificationElem.onclick = function () {
      config.animation(notificationElem, null)
    }

    if (title) addElem(notificationElem, title, TITLE_CLASS)
    if (config.icons[type]) createIcon(notificationElem, type, config)
    if (message) addElem(notificationElem, message, MESSAGE_CLASS)

    config.node.insertBefore(notificationElem, config.node.firstChild)
    setTimeout(() => config.animation(notificationElem, cb), timeout || config.timeout
    )

    if (cb) cb()
    return this
  },
  init (aConfig) {
    const newConfig = {}
    Object.assign(newConfig, config)
    Object.assign(newConfig, aConfig)
    this.config = newConfig

    const cssStr = makeCss(newConfig.style)
    appendStyles(cssStr)

    newConfig.node.id = CONTAINER_CLASS
    newConfig.node.className = CONTAINER_CLASS
    newConfig.appendTarget.appendChild(newConfig.node)

    Object.keys(newConfig.types).forEach(v => {
        this[newConfig.types[v]] = function (message, title, timeout, cb, config) {
          this.showMessage(message, title, newConfig.types[v], timeout, cb, config)
          return this
        }.bind(this)
      }
    )

    this.isInitialised = true;

    return this
  },
  setIcon (type, nodeType = 'i', attrs = []) {
    attrs.class = attrs.class ? attrs.class + ' ' + ICON_CLASS : ICON_CLASS

    this.config.icons[type] = {nodeType, attrs}
  }
}

/* harmony default export */ __webpack_exports__["a"] = (miniToastr);

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_service__ = __webpack_require__(228);





var Admin_ApiService = {
    init: function init() {
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_1_axios___default.a);
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.baseURL = 'api/admin/';
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    },
    setHeader: function setHeader() {
        var user_data = __WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* default */].getUser('admin');
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
        if (__WEBPACK_IMPORTED_MODULE_3__jwt_service__["a" /* default */].getUser() !== null) {
            this.setHeader();
        } else {}
        return __WEBPACK_IMPORTED_MODULE_0_vue___default.a.axios.post("" + resource, params);
    }
};

/* harmony default export */ __webpack_exports__["a"] = (Admin_ApiService);

/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueForm = factory());
}(this, (function () { 'use strict';

var emailRegExp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i; // from angular
var urlRegExp = /^(http\:\/\/|https\:\/\/)(.{4,})$/;

var email = function email(value, attrValue, vnode) {
  return emailRegExp.test(value);
};
email._allowNulls = true;

var number = function number(value, attrValue, vnode) {
  return !isNaN(value);
};
number._allowNulls = true;

var url = function url(value, attrValue, vnode) {
  return urlRegExp.test(value);
};
url._allowNulls = true;

var validators = {
  email: email,
  number: number,
  url: url,
  required: function required(value, attrValue, vnode) {
    if (attrValue === false) {
      return true;
    }

    if (value === 0) {
      return true;
    }

    if (vnode.data.attrs && typeof vnode.data.attrs.bool !== 'undefined' || vnode.componentOptions && vnode.componentOptions.propsData && typeof vnode.componentOptions.propsData.bool !== 'undefined') {
      // bool attribute is present, allow false pass validation
      if (value === false) {
        return true;
      }
    }

    if (Array.isArray(value)) {
      return !!value.length;
    }
    return !!value;
  },
  minlength: function minlength(value, length) {
    return value.length >= length;
  },
  maxlength: function maxlength(value, length) {
    return length >= value.length;
  },
  pattern: function pattern(value, _pattern) {
    var patternRegExp = new RegExp('^' + _pattern + '$');
    return patternRegExp.test(value);
  },
  min: function min(value, _min, vnode) {
    if ((vnode.data.attrs.type || '').toLowerCase() == 'number') {
      return +value >= +_min;
    }
    return value >= _min;
  },
  max: function max(value, _max, vnode) {
    if ((vnode.data.attrs.type || '').toLowerCase() == 'number') {
      return +_max >= +value;
    }
    return _max >= value;
  }
};

var config = {
  validators: validators,
  formComponent: 'VueForm',
  formTag: 'form',
  messagesComponent: 'FieldMessages',
  messagesTag: 'div',
  showMessages: '',
  validateComponent: 'Validate',
  validateTag: 'div',
  fieldComponent: 'Field',
  fieldTag: 'div',
  formClasses: {
    dirty: 'vf-form-dirty',
    pristine: 'vf-form-pristine',
    valid: 'vf-form-valid',
    invalid: 'vf-form-invalid',
    touched: 'vf-form-touched',
    untouched: 'vf-form-untouched',
    focused: 'vf-form-focused',
    submitted: 'vf-form-submitted',
    pending: 'vf-form-pending'
  },
  validateClasses: {
    dirty: 'vf-field-dirty',
    pristine: 'vf-field-pristine',
    valid: 'vf-field-valid',
    invalid: 'vf-field-invalid',
    touched: 'vf-field-touched',
    untouched: 'vf-field-untouched',
    focused: 'vf-field-focused',
    submitted: 'vf-field-submitted',
    pending: 'vf-field-pending'
  },
  inputClasses: {
    dirty: 'vf-dirty',
    pristine: 'vf-pristine',
    valid: 'vf-valid',
    invalid: 'vf-invalid',
    touched: 'vf-touched',
    untouched: 'vf-untouched',
    focused: 'vf-focused',
    submitted: 'vf-submitted',
    pending: 'vf-pending'
  },
  Promise: typeof Promise === 'function' ? Promise : null
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

function getClasses(classConfig, state) {
  var _ref;

  return _ref = {}, defineProperty(_ref, classConfig.dirty, state.$dirty), defineProperty(_ref, classConfig.pristine, state.$pristine), defineProperty(_ref, classConfig.valid, state.$valid), defineProperty(_ref, classConfig.invalid, state.$invalid), defineProperty(_ref, classConfig.touched, state.$touched), defineProperty(_ref, classConfig.untouched, state.$untouched), defineProperty(_ref, classConfig.focused, state.$focused), defineProperty(_ref, classConfig.pending, state.$pending), defineProperty(_ref, classConfig.submitted, state.$submitted), _ref;
}

function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
}

function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

function vModelValue(data) {
  if (data.model) {
    return data.model.value;
  }
  return data.directives.filter(function (v) {
    return v.name === 'model';
  })[0].value;
}

function getVModelAndLabel(nodes, config) {
  var foundVnodes = {
    vModel: [],
    label: null,
    messages: null
  };

  if (!nodes) {
    return foundVnodes;
  }

  function traverse(nodes) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];

      if (node.componentOptions) {
        if (node.componentOptions.tag === hyphenate(config.messagesComponent)) {
          foundVnodes.messages = node;
        }
      }

      if (node.tag === 'label' && !foundVnodes.label) {
        foundVnodes.label = node;
      }

      if (node.data) {
        if (node.data.model) {
          // model check has to come first. If a component has
          // a directive and v-model, the directive will be in .directives
          // and v-modelstored in .model
          foundVnodes.vModel.push(node);
        } else if (node.data.directives) {
          var match = node.data.directives.filter(function (v) {
            return v.name === 'model';
          });
          if (match.length) {
            foundVnodes.vModel.push(node);
          }
        }
      }
      if (node.children) {
        traverse(node.children);
      } else if (node.componentOptions && node.componentOptions.children) {
        traverse(node.componentOptions.children);
      }
    }
  }

  traverse(nodes);

  return foundVnodes;
}

function getName(vnode) {
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.name) {
    return vnode.data.attrs.name;
  } else if (vnode.componentOptions && vnode.componentOptions.propsData && vnode.componentOptions.propsData.name) {
    return vnode.componentOptions.propsData.name;
  }
}

var hyphenateRE = /([^-])([A-Z])/g;
function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
}

function randomId() {
  return Math.random().toString(36).substr(2, 10);
}

// https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function isShallowObjectDifferent(a, b) {
  var aValue = '';
  var bValue = '';
  Object.keys(a).sort().filter(function (v) {
    return typeof a[v] !== 'function';
  }).forEach(function (v) {
    return aValue += a[v];
  });
  Object.keys(b).sort().filter(function (v) {
    return typeof a[v] !== 'function';
  }).forEach(function (v) {
    return bValue += b[v];
  });
  return aValue !== bValue;
}

var vueFormConfig = 'VueFormProviderConfig' + randomId();
var vueFormState = 'VueFormProviderState' + randomId();
var vueFormParentForm = 'VueFormProviderParentForm' + randomId();

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty$1 = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty$1 && options.name === '__proto__') {
		defineProperty$1(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

var extend = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};

var vueForm = {
  render: function render(h) {
    var _this = this;

    var attrs = {};

    if (typeof window !== 'undefined') {
      attrs.novalidate = '';
    }

    return h(this.tag || this.vueFormConfig.formTag, {
      on: {
        submit: function submit(event) {
          if (_this.state.$pending) {
            event.preventDefault();
            _this.vueFormConfig.Promise.all(_this.promises).then(function () {
              _this.state._submit();
              _this.$emit('submit', event);
              _this.promises = [];
            });
          } else {
            _this.state._submit();
            _this.$emit('submit', event);
          }
        },
        reset: function reset(event) {
          _this.state._reset();
          _this.$emit('reset', event);
        }
      },
      class: this.className,
      attrs: attrs
    }, [this.$slots.default]);
  },

  props: {
    state: {
      type: Object,
      required: true
    },
    tag: String,
    showMessages: String
  },
  inject: { vueFormConfig: vueFormConfig },
  provide: function provide() {
    var _ref;

    return _ref = {}, defineProperty(_ref, vueFormState, this.state), defineProperty(_ref, vueFormParentForm, this), _ref;
  },

  data: function data() {
    return {
      promises: []
    };
  },
  created: function created() {
    var _this2 = this;

    if (!this.state) {
      return;
    }
    var controls = {};
    var state = this.state;
    var formstate = {
      $dirty: false,
      $pristine: true,
      $valid: true,
      $invalid: false,
      $submitted: false,
      $touched: false,
      $untouched: true,
      $focused: false,
      $pending: false,
      $error: {},
      $submittedState: {},
      _id: '',
      _submit: function _submit() {
        _this2.state.$submitted = true;
        _this2.state._cloneState();
      },
      _cloneState: function _cloneState() {
        var cloned = JSON.parse(JSON.stringify(state));
        delete cloned.$submittedState;
        Object.keys(cloned).forEach(function (key) {
          _this2.$set(_this2.state.$submittedState, key, cloned[key]);
        });
      },
      _addControl: function _addControl(ctrl) {
        controls[ctrl.$name] = ctrl;
        _this2.$set(state, ctrl.$name, ctrl);
      },
      _removeControl: function _removeControl(ctrl) {
        delete controls[ctrl.$name];
        _this2.$delete(_this2.state, ctrl.$name);
        _this2.$delete(_this2.state.$error, ctrl.$name);
      },
      _validate: function _validate() {
        Object.keys(controls).forEach(function (key) {
          controls[key]._validate();
        });
      },
      _reset: function _reset() {
        state.$submitted = false;
        state.$pending = false;
        state.$submittedState = {};
        Object.keys(controls).forEach(function (key) {
          var control = controls[key];
          control._hasFocused = false;
          control._setUntouched();
          control._setPristine();
          control.$submitted = false;
          control.$pending = false;
        });
      }
    };

    Object.keys(formstate).forEach(function (key) {
      _this2.$set(_this2.state, key, formstate[key]);
    });

    this.$watch('state', function () {
      var isDirty = false;
      var isValid = true;
      var isTouched = false;
      var isFocused = false;
      var isPending = false;
      Object.keys(controls).forEach(function (key) {
        var control = controls[key];

        control.$submitted = state.$submitted;

        if (control.$dirty) {
          isDirty = true;
        }
        if (control.$touched) {
          isTouched = true;
        }
        if (control.$focused) {
          isFocused = true;
        }
        if (control.$pending) {
          isPending = true;
        }
        if (!control.$valid) {
          isValid = false;
          // add control to errors
          _this2.$set(state.$error, control.$name, control);
        } else {
          _this2.$delete(state.$error, control.$name);
        }
      });

      state.$dirty = isDirty;
      state.$pristine = !isDirty;
      state.$touched = isTouched;
      state.$untouched = !isTouched;
      state.$focused = isFocused;
      state.$valid = isValid;
      state.$invalid = !isValid;
      state.$pending = isPending;
    }, {
      deep: true,
      immediate: true
    });

    /* watch pristine? if set to true, set all children to pristine
    Object.keys(controls).forEach((ctrl) => {
      controls[ctrl].setPristine();
    });*/
  },

  computed: {
    className: function className() {
      var classes = getClasses(this.vueFormConfig.formClasses, this.state);
      return classes;
    }
  },
  methods: {
    reset: function reset() {
      this.state._reset();
    },
    validate: function validate() {
      this.state._validate();
    }
  }
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var scope_eval = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.10.0
(function() {
  var hasProp = {}.hasOwnProperty,
    slice = [].slice;

  module.exports = function(source, scope) {
    var key, keys, value, values;
    keys = [];
    values = [];
    for (key in scope) {
      if (!hasProp.call(scope, key)) continue;
      value = scope[key];
      if (key === 'this') {
        continue;
      }
      keys.push(key);
      values.push(value);
    }
    return Function.apply(null, slice.call(keys).concat(["return eval(" + (JSON.stringify(source)) + ")"])).apply(scope["this"], values);
  };

}).call(commonjsGlobal);
});

function findLabel(nodes) {
  if (!nodes) {
    return;
  }
  for (var i = 0; i < nodes.length; i++) {
    var vnode = nodes[i];
    if (vnode.tag === 'label') {
      return nodes[i];
    } else if (nodes[i].children) {
      return findLabel(nodes[i].children);
    }
  }
}

var messages = {
  inject: { vueFormConfig: vueFormConfig, vueFormState: vueFormState, vueFormParentForm: vueFormParentForm },
  render: function render(h) {
    var _this = this;

    var children = [];
    var field = this.formstate[this.fieldname];
    if (field && field.$error && this.isShown) {
      Object.keys(field.$error).forEach(function (key) {
        if (_this.$slots[key] || _this.$scopedSlots[key]) {
          var out = _this.$slots[key] || _this.$scopedSlots[key](field);
          if (_this.autoLabel) {
            var label = findLabel(out);
            if (label) {
              label.data = label.data || {};
              label.data.attrs = label.data.attrs || {};
              label.data.attrs.for = field._id;
            }
          }
          children.push(out);
        }
      });
      if (!children.length && field.$valid) {
        if (this.$slots.default || this.$scopedSlots.default) {
          var out = this.$slots.default || this.$scopedSlots.default(field);
          if (this.autoLabel) {
            var label = findLabel(out);
            if (label) {
              label.data = label.data || {};
              label.data.attrs = label.data.attrs || {};
              label.data.attrs.for = field._id;
            }
          }
          children.push(out);
        }
      }
    }
    return h(this.tag || this.vueFormConfig.messagesTag, children);
  },

  props: {
    state: Object,
    name: String,
    show: {
      type: String,
      default: ''
    },
    tag: {
      type: String
    },
    autoLabel: Boolean
  },
  data: function data() {
    return {
      formstate: null,
      fieldname: ''
    };
  },
  created: function created() {
    this.fieldname = this.name;
    this.formstate = this.state || this.vueFormState;
  },

  computed: {
    isShown: function isShown() {
      var field = this.formstate[this.fieldname];
      var show = this.show || this.vueFormParentForm.showMessages || this.vueFormConfig.showMessages;

      if (!show || !field) {
        return true;
      }

      return scope_eval(show, field);
    }
  }
};

var validate = {
  render: function render(h) {
    var _this = this;

    var foundVnodes = getVModelAndLabel(this.$slots.default, this.vueFormConfig);
    var vModelnodes = foundVnodes.vModel;
    var attrs = {
      for: null
    };
    if (vModelnodes.length) {
      this.name = getName(vModelnodes[0]);

      if (foundVnodes.messages) {
        this.$nextTick(function () {
          var messagesVm = foundVnodes.messages.componentInstance;
          if (messagesVm) {
            messagesVm.fieldname = messagesVm.fieldname || _this.name;
          }
        });
      }

      if (this.autoLabel) {
        var id = vModelnodes[0].data.attrs.id || this.fieldstate._id;
        this.fieldstate._id = id;
        vModelnodes[0].data.attrs.id = id;
        if (foundVnodes.label) {
          foundVnodes.label.data = foundVnodes.label.data || {};
          foundVnodes.label.data.attrs = foundVnodes.label.data.attrs || {};
          foundVnodes.label.data.attrs.for = id;
        } else if (this.tag === 'label') {
          attrs.for = id;
        }
      }
      vModelnodes.forEach(function (vnode) {
        if (!vnode.data.directives) {
          vnode.data.directives = [];
        }
        vnode.data.directives.push({ name: 'vue-form-validator', value: { fieldstate: _this.fieldstate, config: _this.vueFormConfig } });
        vnode.data.attrs['vue-form-validator'] = '';
        vnode.data.attrs['debounce'] = _this.debounce;
      });
    } else {
      //console.warn('Element with v-model not found');
    }
    return h(this.tag || this.vueFormConfig.validateTag, { 'class': this.className, attrs: attrs }, this.$slots.default);
  },

  props: {
    state: Object,
    custom: null,
    autoLabel: Boolean,
    tag: {
      type: String
    },
    debounce: Number
  },
  inject: { vueFormConfig: vueFormConfig, vueFormState: vueFormState, vueFormParentForm: vueFormParentForm },
  data: function data() {
    return {
      name: '',
      formstate: null,
      fieldstate: {}
    };
  },

  methods: {
    getClasses: function getClasses$$1(classConfig) {
      var s = this.fieldstate;
      return Object.keys(s.$error).reduce(function (classes, error) {
        classes[classConfig.invalid + '-' + hyphenate(error)] = true;
        return classes;
      }, getClasses(classConfig, s));
    }
  },
  computed: {
    className: function className() {
      return this.getClasses(this.vueFormConfig.validateClasses);
    },
    inputClassName: function inputClassName() {
      return this.getClasses(this.vueFormConfig.inputClasses);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.fieldstate.$name = this.name;
    this.formstate._addControl(this.fieldstate);

    var vModelEls = this.$el.querySelectorAll('[vue-form-validator]');

    // add classes to the input element
    this.$watch('inputClassName', function (value, oldValue) {
      var out = void 0;

      var _loop = function _loop(i, el) {
        if (oldValue) {
          Object.keys(oldValue).filter(function (k) {
            return oldValue[k];
          }).forEach(function (k) {
            return removeClass(el, k);
          });
        }
        out = [];
        Object.keys(value).filter(function (k) {
          return value[k];
        }).forEach(function (k) {
          out.push(k);
          addClass(el, k);
        });
      };

      for (var i = 0, el; el = vModelEls[i++];) {
        _loop(i, el);
      }
      _this2.fieldstate._className = out;
    }, {
      deep: true,
      immediate: true
    });

    this.$watch('name', function (value, oldValue) {
      _this2.formstate._removeControl(_this2.fieldstate);
      _this2.fieldstate.$name = value;
      _this2.formstate._addControl(_this2.fieldstate);
    });
  },
  created: function created() {
    var _this4 = this;

    this.formstate = this.state || this.vueFormState;
    var vm = this;
    var pendingValidators = [];
    var _val = void 0;
    var prevVnode = void 0;
    this.fieldstate = {
      $name: '',
      $dirty: false,
      $pristine: true,
      $valid: true,
      $invalid: false,
      $touched: false,
      $untouched: true,
      $focused: false,
      $pending: false,
      $submitted: false,
      $error: {},
      $attrs: {},
      _className: null,
      _id: 'vf' + randomId(),
      _setValidatorValidity: function _setValidatorValidity(validator, isValid) {
        if (isValid) {
          vm.$delete(this.$error, validator);
        } else {
          vm.$set(this.$error, validator, true);
        }
      },
      _setValidity: function _setValidity(isValid) {
        this.$valid = isValid;
        this.$invalid = !isValid;
      },
      _setDirty: function _setDirty() {
        this.$dirty = true;
        this.$pristine = false;
      },
      _setPristine: function _setPristine() {
        this.$dirty = false;
        this.$pristine = true;
      },
      _setTouched: function _setTouched() {
        this.$touched = true;
        this.$untouched = false;
      },
      _setUntouched: function _setUntouched() {
        this.$touched = false;
        this.$untouched = true;
      },
      _setFocused: function _setFocused(value) {
        this.$focused = typeof value === 'boolean' ? value : false;
        if (this.$focused) {
          this._setHasFocused();
        } else {
          this._setTouched();
        }
      },
      _setHasFocused: function _setHasFocused() {
        this._hasFocused = true;
      },

      _hasFocused: false,
      _validators: {},
      _validate: function _validate(vnode) {
        var _this3 = this;

        if (!vnode) {
          vnode = prevVnode;
        } else {
          prevVnode = vnode;
        }
        this.$pending = true;
        var isValid = true;
        var emptyAndRequired = false;
        var value = vModelValue(vnode.data);
        _val = value;

        var pending = {
          promises: [],
          names: []
        };

        pendingValidators.push(pending);

        var attrs = vnode.data.attrs || {};
        var childvm = vnode.componentInstance;
        if (childvm && childvm._vfValidationData_) {
          attrs = extend({}, attrs, childvm._vfValidationData_);
        }

        var propsData = vnode.componentOptions && vnode.componentOptions.propsData ? vnode.componentOptions.propsData : {};

        Object.keys(this._validators).forEach(function (validator) {
          // when value is empty and current validator is not the required validator, the field is valid
          if ((value === '' || value === undefined || value === null) && validator !== 'required') {
            _this3._setValidatorValidity(validator, true);
            emptyAndRequired = true;
            // return early, required validator will
            // fall through if it is present
            return;
          }

          var attrValue = typeof attrs[validator] !== 'undefined' ? attrs[validator] : propsData[validator];
          var isFunction = typeof _this3._validators[validator] === 'function';

          // match vue behaviour, ignore if attribute is null or undefined. But for type=email|url|number and custom validators, the value will be null, so allow with _allowNulls
          if (isFunction && (attrValue === null || typeof attrValue === 'undefined') && !_this3._validators[validator]._allowNulls) {
            return;
          }

          if (attrValue) {
            _this3.$attrs[validator] = attrValue;
          }

          var result = isFunction ? _this3._validators[validator](value, attrValue, vnode) : vm.custom[validator];

          if (typeof result === 'boolean') {
            if (result) {
              _this3._setValidatorValidity(validator, true);
            } else {
              isValid = false;
              _this3._setValidatorValidity(validator, false);
            }
          } else {
            pending.promises.push(result);
            pending.names.push(validator);
            vm.vueFormParentForm.promises.push(result);
          }
        });

        if (pending.promises.length) {
          vm.vueFormConfig.Promise.all(pending.promises).then(function (results) {

            // only concerned with the last promise results, in case
            // async responses return out of order
            if (pending !== pendingValidators[pendingValidators.length - 1]) {
              //console.log('ignoring old promise', pending.promises);
              return;
            }

            pendingValidators = [];

            results.forEach(function (result, i) {
              var name = pending.names[i];
              if (result) {
                _this3._setValidatorValidity(name, true);
              } else {
                isValid = false;
                _this3._setValidatorValidity(name, false);
              }
            });
            _this3._setValidity(isValid);
            _this3.$pending = false;
          });
        } else {
          this._setValidity(isValid);
          this.$pending = false;
        }
      }
    };

    // add custom validators
    if (this.custom) {
      Object.keys(this.custom).forEach(function (prop) {
        if (typeof _this4.custom[prop] === 'function') {
          _this4.custom[prop]._allowNulls = true;
          _this4.fieldstate._validators[prop] = _this4.custom[prop];
        } else {
          _this4.fieldstate._validators[prop] = _this4.custom[prop];
        }
      });
    }

    this.$watch('custom', function (v, oldV) {
      if (!oldV || !v) {
        return;
      }
      if (isShallowObjectDifferent(v, oldV)) {
        _this4.fieldstate._validate();
      }
    }, {
      deep: true
    });
  },
  destroyed: function destroyed() {
    this.formstate._removeControl(this.fieldstate);
  }
};

var field = {
  inject: { vueFormConfig: vueFormConfig },
  render: function render(h) {
    var foundVnodes = getVModelAndLabel(this.$slots.default, this.vueFormConfig);
    var vModelnodes = foundVnodes.vModel;
    var attrs = {
      for: null
    };
    if (vModelnodes.length) {
      if (this.autoLabel) {
        var id = vModelnodes[0].data.attrs && vModelnodes[0].data.attrs.id || 'vf' + randomId();
        vModelnodes[0].data.attrs.id = id;
        if (foundVnodes.label) {
          foundVnodes.label.data = foundVnodes.label.data || {};
          foundVnodes.label.data.attrs = foundVnodes.label.data.attrs = {};
          foundVnodes.label.data.attrs.for = id;
        } else if (this.tag === 'label') {
          attrs.for = id;
        }
      }
    }
    return h(this.tag || this.vueFormConfig.fieldTag, { attrs: attrs }, this.$slots.default);
  },

  props: {
    tag: {
      type: String
    },
    autoLabel: {
      type: Boolean,
      default: true
    }
  }
};

var debouncedValidators = {};

function addValidators(attrs, validators, fieldValidators) {
  Object.keys(attrs).forEach(function (attr) {
    var prop = attr === 'type' ? attrs[attr].toLowerCase() : attr.toLowerCase();

    if (validators[prop] && !fieldValidators[prop]) {
      fieldValidators[prop] = validators[prop];
    }
  });
}

function compareChanges(vnode, oldvnode, validators) {

  var hasChanged = false;
  var attrs = vnode.data.attrs || {};
  var oldAttrs = oldvnode.data.attrs || {};
  var out = {};

  if (vModelValue(vnode.data) !== vModelValue(oldvnode.data)) {
    out.vModel = true;
    hasChanged = true;
  }

  Object.keys(validators).forEach(function (validator) {
    if (attrs[validator] !== oldAttrs[validator]) {
      out[validator] = true;
      hasChanged = true;
    }
  });

  // if is a component
  if (vnode.componentOptions && vnode.componentOptions.propsData) {
    var _attrs = vnode.componentOptions.propsData;
    var _oldAttrs = oldvnode.componentOptions.propsData;
    Object.keys(validators).forEach(function (validator) {
      if (_attrs[validator] !== _oldAttrs[validator]) {
        out[validator] = true;
        hasChanged = true;
      }
    });
  }

  if (hasChanged) {
    return out;
  }
}

var vueFormValidator = {
  name: 'vue-form-validator',
  bind: function bind(el, binding, vnode) {
    var fieldstate = binding.value.fieldstate;
    var validators = binding.value.config.validators;

    var attrs = vnode.data.attrs || {};
    var inputName = getName(vnode);

    if (!inputName) {
      console.warn('vue-form: name attribute missing');
      return;
    }

    if (attrs.debounce) {
      debouncedValidators[fieldstate._id] = debounce(function (fieldstate, vnode) {
        if (fieldstate._hasFocused) {
          fieldstate._setDirty();
        }
        fieldstate._validate(vnode);
      }, attrs.debounce);
    }

    // add validators
    addValidators(attrs, validators, fieldstate._validators);

    // if is a component, a validator attribute could be a prop this component uses
    if (vnode.componentOptions && vnode.componentOptions.propsData) {
      addValidators(vnode.componentOptions.propsData, validators, fieldstate._validators);
    }

    fieldstate._validate(vnode);

    // native listeners
    el.addEventListener('blur', function () {
      fieldstate._setFocused(false);
    }, false);
    el.addEventListener('focus', function () {
      fieldstate._setFocused(true);
    }, false);

    // component listeners
    var vm = vnode.componentInstance;
    if (vm) {
      vm.$on('blur', function () {
        fieldstate._setFocused(false);
      });
      vm.$on('focus', function () {
        fieldstate._setFocused(true);
      });

      vm.$once('vf:addFocusListeners', function () {
        el.addEventListener('focusout', function () {
          fieldstate._setFocused(false);
        }, false);
        el.addEventListener('focusin', function () {
          fieldstate._setFocused(true);
        }, false);
      });

      vm.$on('vf:validate', function (data) {
        if (!vm._vfValidationData_) {
          addValidators(data, validators, fieldstate._validators);
        }
        vm._vfValidationData_ = data;
        fieldstate._validate(vm.$vnode);
      });
    }
  },
  update: function update(el, binding, vnode, oldVNode) {
    var validators = binding.value.config.validators;

    var changes = compareChanges(vnode, oldVNode, validators);
    var fieldstate = binding.value.fieldstate;


    var attrs = vnode.data.attrs || {};
    var vm = vnode.componentInstance;
    if (vm && vm._vfValidationData_) {
      attrs = extend({}, attrs, vm[vm._vfValidationData_]);
    }

    if (vnode.elm.className.indexOf(fieldstate._className[0]) === -1) {
      vnode.elm.className = vnode.elm.className + ' ' + fieldstate._className.join(' ');
    }

    if (!changes) {
      return;
    }

    if (changes.vModel) {
      // re-validate all
      if (attrs.debounce) {
        fieldstate.$pending = true;
        debouncedValidators[fieldstate._id](fieldstate, vnode);
      } else {
        if (fieldstate._hasFocused) {
          fieldstate._setDirty();
        }
        fieldstate._validate(vnode);
      }
    } else {
      // attributes have changed
      // to do: loop through them and re-validate changed ones
      //for(let prop in changes) {
      //  fieldstate._validate(vnode, validator);
      //}
      // for now
      fieldstate._validate(vnode);
    }
  }
};

function VueFormBase(options) {
  var _components;

  var c = extend(true, {}, config, options);
  this.provide = function () {
    return defineProperty({}, vueFormConfig, c);
  };
  this.components = (_components = {}, defineProperty(_components, c.formComponent, vueForm), defineProperty(_components, c.messagesComponent, messages), defineProperty(_components, c.validateComponent, validate), defineProperty(_components, c.fieldComponent, field), _components);
  this.directives = { vueFormValidator: vueFormValidator };
}

var VueForm = function (_VueFormBase) {
  inherits(VueForm, _VueFormBase);

  function VueForm() {
    classCallCheck(this, VueForm);
    return possibleConstructorReturn(this, (VueForm.__proto__ || Object.getPrototypeOf(VueForm)).apply(this, arguments));
  }

  createClass(VueForm, null, [{
    key: 'install',
    value: function install(Vue, options) {
      Vue.mixin(new this(options));
    }
  }, {
    key: 'installed',
    get: function get$$1() {
      return !!this.install.done;
    },
    set: function set$$1(val) {
      this.install.done = val;
    }
  }]);
  return VueForm;
}(VueFormBase);

VueFormBase.call(VueForm);
// temp fix for vue 2.3.0
VueForm.options = new VueForm();

return VueForm;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25)))

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var options = {
    validators: {
        checkbox: function checkbox(value, attrValue, vnode) {
            return value;
        },
        sameas: function sameas(value, attrValue, vnode) {
            return value == attrValue;
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (options);

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(974);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("fa18aff2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-544d8501\",\"scoped\":false,\"hasInlineConfig\":true}!./hover.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-544d8501\",\"scoped\":false,\"hasInlineConfig\":true}!./hover.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "/*!\r\n * Hover.css (http://ianlunn.github.io/Hover/)\r\n * Version: 2.3.2\r\n * Author: Ian Lunn @IanLunn\r\n * Author URL: http://ianlunn.co.uk/\r\n * Github: https://github.com/IanLunn/Hover\r\n\r\n * Hover.css Copyright Ian Lunn 2017. Generated with Sass.\r\n */\r\n/* 2D TRANSITIONS */\r\n/* Grow */\n.hvr-grow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {\r\n  transform: scale(1.1);\n}\r\n\r\n/* Shrink */\n.hvr-shrink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-shrink:hover, .hvr-shrink:focus, .hvr-shrink:active {\r\n  transform: scale(0.9);\n}\r\n\r\n/* Pulse */\n@keyframes hvr-pulse {\n25% {\r\n    transform: scale(1.1);\n}\n75% {\r\n    transform: scale(0.9);\n}\n}\n.hvr-pulse {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-pulse:hover, .hvr-pulse:focus, .hvr-pulse:active {\r\n  animation-name: hvr-pulse;\r\n  animation-duration: 1s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: infinite;\n}\r\n\r\n/* Pulse Grow */\n@keyframes hvr-pulse-grow {\nto {\r\n    transform: scale(1.1);\n}\n}\n.hvr-pulse-grow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-pulse-grow:hover, .hvr-pulse-grow:focus, .hvr-pulse-grow:active {\r\n  animation-name: hvr-pulse-grow;\r\n  animation-duration: 0.3s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\n}\r\n\r\n/* Pulse Shrink */\n@keyframes hvr-pulse-shrink {\nto {\r\n    transform: scale(0.9);\n}\n}\n.hvr-pulse-shrink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-pulse-shrink:hover, .hvr-pulse-shrink:focus, .hvr-pulse-shrink:active {\r\n  animation-name: hvr-pulse-shrink;\r\n  animation-duration: 0.3s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\n}\r\n\r\n/* Push */\n@keyframes hvr-push {\n50% {\r\n    transform: scale(0.8);\n}\n100% {\r\n    transform: scale(1);\n}\n}\n.hvr-push {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-push:hover, .hvr-push:focus, .hvr-push:active {\r\n  animation-name: hvr-push;\r\n  animation-duration: 0.3s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Pop */\n@keyframes hvr-pop {\n50% {\r\n    transform: scale(1.2);\n}\n}\n.hvr-pop {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-pop:hover, .hvr-pop:focus, .hvr-pop:active {\r\n  animation-name: hvr-pop;\r\n  animation-duration: 0.3s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Bounce In */\n.hvr-bounce-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.5s;\n}\n.hvr-bounce-in:hover, .hvr-bounce-in:focus, .hvr-bounce-in:active {\r\n  transform: scale(1.2);\r\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n}\r\n\r\n/* Bounce Out */\n.hvr-bounce-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.5s;\n}\n.hvr-bounce-out:hover, .hvr-bounce-out:focus, .hvr-bounce-out:active {\r\n  transform: scale(0.8);\r\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n}\r\n\r\n/* Rotate */\n.hvr-rotate {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-rotate:hover, .hvr-rotate:focus, .hvr-rotate:active {\r\n  transform: rotate(4deg);\n}\r\n\r\n/* Grow Rotate */\n.hvr-grow-rotate {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-grow-rotate:hover, .hvr-grow-rotate:focus, .hvr-grow-rotate:active {\r\n  transform: scale(1.1) rotate(4deg);\n}\r\n\r\n/* Float */\n.hvr-float {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-out;\n}\n.hvr-float:hover, .hvr-float:focus, .hvr-float:active {\r\n  transform: translateY(-8px);\n}\r\n\r\n/* Sink */\n.hvr-sink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-out;\n}\n.hvr-sink:hover, .hvr-sink:focus, .hvr-sink:active {\r\n  transform: translateY(8px);\n}\r\n\r\n/* Bob */\n@keyframes hvr-bob {\n0% {\r\n    transform: translateY(-8px);\n}\n50% {\r\n    transform: translateY(-4px);\n}\n100% {\r\n    transform: translateY(-8px);\n}\n}\n@keyframes hvr-bob-float {\n100% {\r\n    transform: translateY(-8px);\n}\n}\n.hvr-bob {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-bob:hover, .hvr-bob:focus, .hvr-bob:active {\r\n  animation-name: hvr-bob-float, hvr-bob;\r\n  animation-duration: .3s, 1.5s;\r\n  animation-delay: 0s, .3s;\r\n  animation-timing-function: ease-out, ease-in-out;\r\n  animation-iteration-count: 1, infinite;\r\n  animation-fill-mode: forwards;\r\n  animation-direction: normal, alternate;\n}\r\n\r\n/* Hang */\n@keyframes hvr-hang {\n0% {\r\n    transform: translateY(8px);\n}\n50% {\r\n    transform: translateY(4px);\n}\n100% {\r\n    transform: translateY(8px);\n}\n}\n@keyframes hvr-hang-sink {\n100% {\r\n    transform: translateY(8px);\n}\n}\n.hvr-hang {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-hang:hover, .hvr-hang:focus, .hvr-hang:active {\r\n  animation-name: hvr-hang-sink, hvr-hang;\r\n  animation-duration: .3s, 1.5s;\r\n  animation-delay: 0s, .3s;\r\n  animation-timing-function: ease-out, ease-in-out;\r\n  animation-iteration-count: 1, infinite;\r\n  animation-fill-mode: forwards;\r\n  animation-direction: normal, alternate;\n}\r\n\r\n/* Skew */\n.hvr-skew {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-skew:hover, .hvr-skew:focus, .hvr-skew:active {\r\n  transform: skew(-10deg);\n}\r\n\r\n/* Skew Forward */\n.hvr-skew-forward {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  transform-origin: 0 100%;\n}\n.hvr-skew-forward:hover, .hvr-skew-forward:focus, .hvr-skew-forward:active {\r\n  transform: skew(-10deg);\n}\r\n\r\n/* Skew Backward */\n.hvr-skew-backward {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  transform-origin: 0 100%;\n}\n.hvr-skew-backward:hover, .hvr-skew-backward:focus, .hvr-skew-backward:active {\r\n  transform: skew(10deg);\n}\r\n\r\n/* Wobble Vertical */\n@keyframes hvr-wobble-vertical {\n16.65% {\r\n    transform: translateY(8px);\n}\n33.3% {\r\n    transform: translateY(-6px);\n}\n49.95% {\r\n    transform: translateY(4px);\n}\n66.6% {\r\n    transform: translateY(-2px);\n}\n83.25% {\r\n    transform: translateY(1px);\n}\n100% {\r\n    transform: translateY(0);\n}\n}\n.hvr-wobble-vertical {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-wobble-vertical:hover, .hvr-wobble-vertical:focus, .hvr-wobble-vertical:active {\r\n  animation-name: hvr-wobble-vertical;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-in-out;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Wobble Horizontal */\n@keyframes hvr-wobble-horizontal {\n16.65% {\r\n    transform: translateX(8px);\n}\n33.3% {\r\n    transform: translateX(-6px);\n}\n49.95% {\r\n    transform: translateX(4px);\n}\n66.6% {\r\n    transform: translateX(-2px);\n}\n83.25% {\r\n    transform: translateX(1px);\n}\n100% {\r\n    transform: translateX(0);\n}\n}\n.hvr-wobble-horizontal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-wobble-horizontal:hover, .hvr-wobble-horizontal:focus, .hvr-wobble-horizontal:active {\r\n  animation-name: hvr-wobble-horizontal;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-in-out;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Wobble To Bottom Right */\n@keyframes hvr-wobble-to-bottom-right {\n16.65% {\r\n    transform: translate(8px, 8px);\n}\n33.3% {\r\n    transform: translate(-6px, -6px);\n}\n49.95% {\r\n    transform: translate(4px, 4px);\n}\n66.6% {\r\n    transform: translate(-2px, -2px);\n}\n83.25% {\r\n    transform: translate(1px, 1px);\n}\n100% {\r\n    transform: translate(0, 0);\n}\n}\n.hvr-wobble-to-bottom-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-wobble-to-bottom-right:hover, .hvr-wobble-to-bottom-right:focus, .hvr-wobble-to-bottom-right:active {\r\n  animation-name: hvr-wobble-to-bottom-right;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-in-out;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Wobble To Top Right */\n@keyframes hvr-wobble-to-top-right {\n16.65% {\r\n    transform: translate(8px, -8px);\n}\n33.3% {\r\n    transform: translate(-6px, 6px);\n}\n49.95% {\r\n    transform: translate(4px, -4px);\n}\n66.6% {\r\n    transform: translate(-2px, 2px);\n}\n83.25% {\r\n    transform: translate(1px, -1px);\n}\n100% {\r\n    transform: translate(0, 0);\n}\n}\n.hvr-wobble-to-top-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-wobble-to-top-right:hover, .hvr-wobble-to-top-right:focus, .hvr-wobble-to-top-right:active {\r\n  animation-name: hvr-wobble-to-top-right;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-in-out;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Wobble Top */\n@keyframes hvr-wobble-top {\n16.65% {\r\n    transform: skew(-12deg);\n}\n33.3% {\r\n    transform: skew(10deg);\n}\n49.95% {\r\n    transform: skew(-6deg);\n}\n66.6% {\r\n    transform: skew(4deg);\n}\n83.25% {\r\n    transform: skew(-2deg);\n}\n100% {\r\n    transform: skew(0);\n}\n}\n.hvr-wobble-top {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transform-origin: 0 100%;\n}\n.hvr-wobble-top:hover, .hvr-wobble-top:focus, .hvr-wobble-top:active {\r\n  animation-name: hvr-wobble-top;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-in-out;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Wobble Bottom */\n@keyframes hvr-wobble-bottom {\n16.65% {\r\n    transform: skew(-12deg);\n}\n33.3% {\r\n    transform: skew(10deg);\n}\n49.95% {\r\n    transform: skew(-6deg);\n}\n66.6% {\r\n    transform: skew(4deg);\n}\n83.25% {\r\n    transform: skew(-2deg);\n}\n100% {\r\n    transform: skew(0);\n}\n}\n.hvr-wobble-bottom {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transform-origin: 100% 0;\n}\n.hvr-wobble-bottom:hover, .hvr-wobble-bottom:focus, .hvr-wobble-bottom:active {\r\n  animation-name: hvr-wobble-bottom;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-in-out;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Wobble Skew */\n@keyframes hvr-wobble-skew {\n16.65% {\r\n    transform: skew(-12deg);\n}\n33.3% {\r\n    transform: skew(10deg);\n}\n49.95% {\r\n    transform: skew(-6deg);\n}\n66.6% {\r\n    transform: skew(4deg);\n}\n83.25% {\r\n    transform: skew(-2deg);\n}\n100% {\r\n    transform: skew(0);\n}\n}\n.hvr-wobble-skew {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-wobble-skew:hover, .hvr-wobble-skew:focus, .hvr-wobble-skew:active {\r\n  animation-name: hvr-wobble-skew;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-in-out;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Buzz */\n@keyframes hvr-buzz {\n50% {\r\n    transform: translateX(3px) rotate(2deg);\n}\n100% {\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n}\n.hvr-buzz {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-buzz:hover, .hvr-buzz:focus, .hvr-buzz:active {\r\n  animation-name: hvr-buzz;\r\n  animation-duration: 0.15s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: infinite;\n}\r\n\r\n/* Buzz Out */\n@keyframes hvr-buzz-out {\n10% {\r\n    transform: translateX(3px) rotate(2deg);\n}\n20% {\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n30% {\r\n    transform: translateX(3px) rotate(2deg);\n}\n40% {\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n50% {\r\n    transform: translateX(2px) rotate(1deg);\n}\n60% {\r\n    transform: translateX(-2px) rotate(-1deg);\n}\n70% {\r\n    transform: translateX(2px) rotate(1deg);\n}\n80% {\r\n    transform: translateX(-2px) rotate(-1deg);\n}\n90% {\r\n    transform: translateX(1px) rotate(0);\n}\n100% {\r\n    transform: translateX(-1px) rotate(0);\n}\n}\n.hvr-buzz-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-buzz-out:hover, .hvr-buzz-out:focus, .hvr-buzz-out:active {\r\n  animation-name: hvr-buzz-out;\r\n  animation-duration: 0.75s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Forward */\n.hvr-forward {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-forward:hover, .hvr-forward:focus, .hvr-forward:active {\r\n  transform: translateX(8px);\n}\r\n\r\n/* Backward */\n.hvr-backward {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-backward:hover, .hvr-backward:focus, .hvr-backward:active {\r\n  transform: translateX(-8px);\n}\r\n\r\n/* BACKGROUND TRANSITIONS */\r\n/* Fade */\n.hvr-fade {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  overflow: hidden;\r\n  transition-duration: 0.3s;\r\n  transition-property: color, background-color;\n}\n.hvr-fade:hover, .hvr-fade:focus, .hvr-fade:active {\r\n  background-color: #2098D1;\r\n  color: white;\n}\r\n\r\n/* Back Pulse */\n@keyframes hvr-back-pulse {\n50% {\r\n    background-color: rgba(32, 152, 209, 0.75);\n}\n}\n.hvr-back-pulse {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  overflow: hidden;\r\n  transition-duration: 0.5s;\r\n  transition-property: color, background-color;\n}\n.hvr-back-pulse:hover, .hvr-back-pulse:focus, .hvr-back-pulse:active {\r\n  animation-name: hvr-back-pulse;\r\n  animation-duration: 1s;\r\n  animation-delay: 0.5s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: infinite;\r\n  background-color: #2098D1;\r\n  background-color: #2098d1;\r\n  color: white;\n}\r\n\r\n/* Sweep To Right */\n.hvr-sweep-to-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  transition-property: color;\r\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-right:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  transform: scaleX(0);\r\n  transform-origin: 0 50%;\r\n  transition-property: transform;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-right:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active {\r\n  color: white;\n}\n.hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {\r\n  transform: scaleX(1);\n}\r\n\r\n/* Sweep To Left */\n.hvr-sweep-to-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  transition-property: color;\r\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-left:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  transform: scaleX(0);\r\n  transform-origin: 100% 50%;\r\n  transition-property: transform;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-left:hover, .hvr-sweep-to-left:focus, .hvr-sweep-to-left:active {\r\n  color: white;\n}\n.hvr-sweep-to-left:hover:before, .hvr-sweep-to-left:focus:before, .hvr-sweep-to-left:active:before {\r\n  transform: scaleX(1);\n}\r\n\r\n/* Sweep To Bottom */\n.hvr-sweep-to-bottom {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  transition-property: color;\r\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-bottom:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  transform: scaleY(0);\r\n  transform-origin: 50% 0;\r\n  transition-property: transform;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-bottom:hover, .hvr-sweep-to-bottom:focus, .hvr-sweep-to-bottom:active {\r\n  color: white;\n}\n.hvr-sweep-to-bottom:hover:before, .hvr-sweep-to-bottom:focus:before, .hvr-sweep-to-bottom:active:before {\r\n  transform: scaleY(1);\n}\r\n\r\n/* Sweep To Top */\n.hvr-sweep-to-top {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  transition-property: color;\r\n  transition-duration: 0.3s;\n}\n.hvr-sweep-to-top:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  transform: scaleY(0);\r\n  transform-origin: 50% 100%;\r\n  transition-property: transform;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-sweep-to-top:hover, .hvr-sweep-to-top:focus, .hvr-sweep-to-top:active {\r\n  color: white;\n}\n.hvr-sweep-to-top:hover:before, .hvr-sweep-to-top:focus:before, .hvr-sweep-to-top:active:before {\r\n  transform: scaleY(1);\n}\r\n\r\n/* Bounce To Right */\n.hvr-bounce-to-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  transition-property: color;\r\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-right:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  transform: scaleX(0);\r\n  transform-origin: 0 50%;\r\n  transition-property: transform;\r\n  transition-duration: 0.5s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-right:hover, .hvr-bounce-to-right:focus, .hvr-bounce-to-right:active {\r\n  color: white;\n}\n.hvr-bounce-to-right:hover:before, .hvr-bounce-to-right:focus:before, .hvr-bounce-to-right:active:before {\r\n  transform: scaleX(1);\r\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\r\n\r\n/* Bounce To Left */\n.hvr-bounce-to-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  transition-property: color;\r\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-left:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  transform: scaleX(0);\r\n  transform-origin: 100% 50%;\r\n  transition-property: transform;\r\n  transition-duration: 0.5s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-left:hover, .hvr-bounce-to-left:focus, .hvr-bounce-to-left:active {\r\n  color: white;\n}\n.hvr-bounce-to-left:hover:before, .hvr-bounce-to-left:focus:before, .hvr-bounce-to-left:active:before {\r\n  transform: scaleX(1);\r\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\r\n\r\n/* Bounce To Bottom */\n.hvr-bounce-to-bottom {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  transition-property: color;\r\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-bottom:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  transform: scaleY(0);\r\n  transform-origin: 50% 0;\r\n  transition-property: transform;\r\n  transition-duration: 0.5s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-bottom:hover, .hvr-bounce-to-bottom:focus, .hvr-bounce-to-bottom:active {\r\n  color: white;\n}\n.hvr-bounce-to-bottom:hover:before, .hvr-bounce-to-bottom:focus:before, .hvr-bounce-to-bottom:active:before {\r\n  transform: scaleY(1);\r\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\r\n\r\n/* Bounce To Top */\n.hvr-bounce-to-top {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  transition-property: color;\r\n  transition-duration: 0.5s;\n}\n.hvr-bounce-to-top:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  transform: scaleY(0);\r\n  transform-origin: 50% 100%;\r\n  transition-property: transform;\r\n  transition-duration: 0.5s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-bounce-to-top:hover, .hvr-bounce-to-top:focus, .hvr-bounce-to-top:active {\r\n  color: white;\n}\n.hvr-bounce-to-top:hover:before, .hvr-bounce-to-top:focus:before, .hvr-bounce-to-top:active:before {\r\n  transform: scaleY(1);\r\n  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\r\n\r\n/* Radial Out */\n.hvr-radial-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  overflow: hidden;\r\n  background: #e1e1e1;\r\n  transition-property: color;\r\n  transition-duration: 0.3s;\n}\n.hvr-radial-out:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  border-radius: 100%;\r\n  transform: scale(0);\r\n  transition-property: transform;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-radial-out:hover, .hvr-radial-out:focus, .hvr-radial-out:active {\r\n  color: white;\n}\n.hvr-radial-out:hover:before, .hvr-radial-out:focus:before, .hvr-radial-out:active:before {\r\n  transform: scale(2);\n}\r\n\r\n/* Radial In */\n.hvr-radial-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  overflow: hidden;\r\n  background: #2098D1;\r\n  transition-property: color;\r\n  transition-duration: 0.3s;\n}\n.hvr-radial-in:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #e1e1e1;\r\n  border-radius: 100%;\r\n  transform: scale(2);\r\n  transition-property: transform;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-radial-in:hover, .hvr-radial-in:focus, .hvr-radial-in:active {\r\n  color: white;\n}\n.hvr-radial-in:hover:before, .hvr-radial-in:focus:before, .hvr-radial-in:active:before {\r\n  transform: scale(0);\n}\r\n\r\n/* Rectangle In */\n.hvr-rectangle-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  background: #2098D1;\r\n  transition-property: color;\r\n  transition-duration: 0.3s;\n}\n.hvr-rectangle-in:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #e1e1e1;\r\n  transform: scale(1);\r\n  transition-property: transform;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-rectangle-in:hover, .hvr-rectangle-in:focus, .hvr-rectangle-in:active {\r\n  color: white;\n}\n.hvr-rectangle-in:hover:before, .hvr-rectangle-in:focus:before, .hvr-rectangle-in:active:before {\r\n  transform: scale(0);\n}\r\n\r\n/* Rectangle Out */\n.hvr-rectangle-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  background: #e1e1e1;\r\n  transition-property: color;\r\n  transition-duration: 0.3s;\n}\n.hvr-rectangle-out:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  transform: scale(0);\r\n  transition-property: transform;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-rectangle-out:hover, .hvr-rectangle-out:focus, .hvr-rectangle-out:active {\r\n  color: white;\n}\n.hvr-rectangle-out:hover:before, .hvr-rectangle-out:focus:before, .hvr-rectangle-out:active:before {\r\n  transform: scale(1);\n}\r\n\r\n/* Shutter In Horizontal */\n.hvr-shutter-in-horizontal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  background: #2098D1;\r\n  transition-property: color;\r\n  transition-duration: 0.3s;\n}\n.hvr-shutter-in-horizontal:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #e1e1e1;\r\n  transform: scaleX(1);\r\n  transform-origin: 50%;\r\n  transition-property: transform;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-in-horizontal:hover, .hvr-shutter-in-horizontal:focus, .hvr-shutter-in-horizontal:active {\r\n  color: white;\n}\n.hvr-shutter-in-horizontal:hover:before, .hvr-shutter-in-horizontal:focus:before, .hvr-shutter-in-horizontal:active:before {\r\n  transform: scaleX(0);\n}\r\n\r\n/* Shutter Out Horizontal */\n.hvr-shutter-out-horizontal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  background: #e1e1e1;\r\n  transition-property: color;\r\n  transition-duration: 0.3s;\n}\n.hvr-shutter-out-horizontal:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #2098D1;\r\n  transform: scaleX(0);\r\n  transform-origin: 50%;\r\n  transition-property: transform;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-out-horizontal:hover, .hvr-shutter-out-horizontal:focus, .hvr-shutter-out-horizontal:active {\r\n  color: white;\n}\n.hvr-shutter-out-horizontal:hover:before, .hvr-shutter-out-horizontal:focus:before, .hvr-shutter-out-horizontal:active:before {\r\n  transform: scaleX(1);\n}\r\n\r\n/* Shutter In Vertical */\n.hvr-shutter-in-vertical {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  background: #2098D1;\r\n  transition-property: color;\r\n  transition-duration: 0.3s;\n}\n.hvr-shutter-in-vertical:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #e1e1e1;\r\n  transform: scaleY(1);\r\n  transform-origin: 50%;\r\n  transition-property: transform;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-in-vertical:hover, .hvr-shutter-in-vertical:focus, .hvr-shutter-in-vertical:active {\r\n  color: white;\n}\n.hvr-shutter-in-vertical:hover:before, .hvr-shutter-in-vertical:focus:before, .hvr-shutter-in-vertical:active:before {\r\n  transform: scaleY(0);\n}\r\n\r\n/* Shutter Out Vertical */\n.hvr-shutter-out-vertical {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  background: #e1e1e1;\r\n  transition-property: color;\r\n  transition-duration: 0.3s;\n}\n.hvr-shutter-out-vertical:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: #2098D1;\r\n  transform: scaleY(0);\r\n  transform-origin: 50%;\r\n  transition-property: transform;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-shutter-out-vertical:hover, .hvr-shutter-out-vertical:focus, .hvr-shutter-out-vertical:active {\r\n  color: white;\n}\n.hvr-shutter-out-vertical:hover:before, .hvr-shutter-out-vertical:focus:before, .hvr-shutter-out-vertical:active:before {\r\n  transform: scaleY(1);\n}\r\n\r\n/* BORDER TRANSITIONS */\r\n/* Border Fade */\n.hvr-border-fade {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: box-shadow;\r\n  box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0);\r\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n.hvr-border-fade:hover, .hvr-border-fade:focus, .hvr-border-fade:active {\r\n  box-shadow: inset 0 0 0 4px #2098D1, 0 0 1px rgba(0, 0, 0, 0);\r\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\r\n\r\n/* Hollow */\n.hvr-hollow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: background;\r\n  box-shadow: inset 0 0 0 4px #e1e1e1, 0 0 1px rgba(0, 0, 0, 0);\r\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n.hvr-hollow:hover, .hvr-hollow:focus, .hvr-hollow:active {\r\n  background: none;\n}\r\n\r\n/* Trim */\n.hvr-trim {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\n}\n.hvr-trim:before {\r\n  content: '';\r\n  position: absolute;\r\n  border: white solid 4px;\r\n  top: 4px;\r\n  left: 4px;\r\n  right: 4px;\r\n  bottom: 4px;\r\n  opacity: 0;\r\n  transition-duration: 0.3s;\r\n  transition-property: opacity;\n}\n.hvr-trim:hover:before, .hvr-trim:focus:before, .hvr-trim:active:before {\r\n  opacity: 1;\n}\r\n\r\n/* Ripple Out */\n@keyframes hvr-ripple-out {\n100% {\r\n    top: -12px;\r\n    right: -12px;\r\n    bottom: -12px;\r\n    left: -12px;\r\n    opacity: 0;\n}\n}\n.hvr-ripple-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\n}\n.hvr-ripple-out:before {\r\n  content: '';\r\n  position: absolute;\r\n  border: #e1e1e1 solid 6px;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  animation-duration: 1s;\n}\n.hvr-ripple-out:hover:before, .hvr-ripple-out:focus:before, .hvr-ripple-out:active:before {\r\n  animation-name: hvr-ripple-out;\n}\r\n\r\n/* Ripple In */\n@keyframes hvr-ripple-in {\n100% {\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    opacity: 1;\n}\n}\n.hvr-ripple-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\n}\n.hvr-ripple-in:before {\r\n  content: '';\r\n  position: absolute;\r\n  border: #e1e1e1 solid 4px;\r\n  top: -12px;\r\n  right: -12px;\r\n  bottom: -12px;\r\n  left: -12px;\r\n  opacity: 0;\r\n  animation-duration: 1s;\n}\n.hvr-ripple-in:hover:before, .hvr-ripple-in:focus:before, .hvr-ripple-in:active:before {\r\n  animation-name: hvr-ripple-in;\n}\r\n\r\n/* Outline Out */\n.hvr-outline-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\n}\n.hvr-outline-out:before {\r\n  content: '';\r\n  position: absolute;\r\n  border: #e1e1e1 solid 4px;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  transition-duration: 0.3s;\r\n  transition-property: top, right, bottom, left;\n}\n.hvr-outline-out:hover:before, .hvr-outline-out:focus:before, .hvr-outline-out:active:before {\r\n  top: -8px;\r\n  right: -8px;\r\n  bottom: -8px;\r\n  left: -8px;\n}\r\n\r\n/* Outline In */\n.hvr-outline-in {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\n}\n.hvr-outline-in:before {\r\n  pointer-events: none;\r\n  content: '';\r\n  position: absolute;\r\n  border: #e1e1e1 solid 4px;\r\n  top: -16px;\r\n  right: -16px;\r\n  bottom: -16px;\r\n  left: -16px;\r\n  opacity: 0;\r\n  transition-duration: 0.3s;\r\n  transition-property: top, right, bottom, left;\n}\n.hvr-outline-in:hover:before, .hvr-outline-in:focus:before, .hvr-outline-in:active:before {\r\n  top: -8px;\r\n  right: -8px;\r\n  bottom: -8px;\r\n  left: -8px;\r\n  opacity: 1;\n}\r\n\r\n/* Round Corners */\n.hvr-round-corners {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: border-radius;\n}\n.hvr-round-corners:hover, .hvr-round-corners:focus, .hvr-round-corners:active {\r\n  border-radius: 1em;\n}\r\n\r\n/* Underline From Left */\n.hvr-underline-from-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-underline-from-left:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  right: 100%;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  transition-property: right;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-underline-from-left:hover:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:active:before {\r\n  right: 0;\n}\r\n\r\n/* Underline From Center */\n.hvr-underline-from-center {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-underline-from-center:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 51%;\r\n  right: 51%;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  transition-property: left, right;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {\r\n  left: 0;\r\n  right: 0;\n}\r\n\r\n/* Underline From Right */\n.hvr-underline-from-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-underline-from-right:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 100%;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  transition-property: left;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-underline-from-right:hover:before, .hvr-underline-from-right:focus:before, .hvr-underline-from-right:active:before {\r\n  left: 0;\n}\r\n\r\n/* Overline From Left */\n.hvr-overline-from-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-overline-from-left:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  right: 100%;\r\n  top: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  transition-property: right;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-overline-from-left:hover:before, .hvr-overline-from-left:focus:before, .hvr-overline-from-left:active:before {\r\n  right: 0;\n}\r\n\r\n/* Overline From Center */\n.hvr-overline-from-center {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-overline-from-center:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 51%;\r\n  right: 51%;\r\n  top: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  transition-property: left, right;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-overline-from-center:hover:before, .hvr-overline-from-center:focus:before, .hvr-overline-from-center:active:before {\r\n  left: 0;\r\n  right: 0;\n}\r\n\r\n/* Overline From Right */\n.hvr-overline-from-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-overline-from-right:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 100%;\r\n  right: 0;\r\n  top: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  transition-property: left;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-overline-from-right:hover:before, .hvr-overline-from-right:focus:before, .hvr-overline-from-right:active:before {\r\n  left: 0;\n}\r\n\r\n/* Reveal */\n.hvr-reveal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-reveal:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-color: #2098D1;\r\n  border-style: solid;\r\n  border-width: 0;\r\n  transition-property: border-width;\r\n  transition-duration: 0.1s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-reveal:hover:before, .hvr-reveal:focus:before, .hvr-reveal:active:before {\r\n  transform: translateY(0);\r\n  border-width: 4px;\n}\r\n\r\n/* Underline Reveal */\n.hvr-underline-reveal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-underline-reveal:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  transform: translateY(4px);\r\n  transition-property: transform;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-underline-reveal:hover:before, .hvr-underline-reveal:focus:before, .hvr-underline-reveal:active:before {\r\n  transform: translateY(0);\n}\r\n\r\n/* Overline Reveal */\n.hvr-overline-reveal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  overflow: hidden;\n}\n.hvr-overline-reveal:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  z-index: -1;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  background: #2098D1;\r\n  height: 4px;\r\n  transform: translateY(-4px);\r\n  transition-property: transform;\r\n  transition-duration: 0.3s;\r\n  transition-timing-function: ease-out;\n}\n.hvr-overline-reveal:hover:before, .hvr-overline-reveal:focus:before, .hvr-overline-reveal:active:before {\r\n  transform: translateY(0);\n}\r\n\r\n/* SHADOW/GLOW TRANSITIONS */\r\n/* Glow */\n.hvr-glow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: box-shadow;\n}\n.hvr-glow:hover, .hvr-glow:focus, .hvr-glow:active {\r\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);\n}\r\n\r\n/* Shadow */\n.hvr-shadow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: box-shadow;\n}\n.hvr-shadow:hover, .hvr-shadow:focus, .hvr-shadow:active {\r\n  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);\n}\r\n\r\n/* Grow Shadow */\n.hvr-grow-shadow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: box-shadow, transform;\n}\n.hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {\r\n  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);\r\n  transform: scale(1.1);\n}\r\n\r\n/* Box Shadow Outset */\n.hvr-box-shadow-outset {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: box-shadow;\n}\n.hvr-box-shadow-outset:hover, .hvr-box-shadow-outset:focus, .hvr-box-shadow-outset:active {\r\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);\n}\r\n\r\n/* Box Shadow Inset */\n.hvr-box-shadow-inset {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\r\n  transition-property: box-shadow;\r\n  box-shadow: inset 0 0 0 rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0);\r\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\n.hvr-box-shadow-inset:hover, .hvr-box-shadow-inset:focus, .hvr-box-shadow-inset:active {\r\n  box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.6), 0 0 1px rgba(0, 0, 0, 0);\r\n  /* Hack to improve aliasing on mobile/tablet devices */\n}\r\n\r\n/* Float Shadow */\n.hvr-float-shadow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-float-shadow:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  top: 100%;\r\n  left: 5%;\r\n  height: 10px;\r\n  width: 90%;\r\n  opacity: 0;\r\n  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);\r\n  /* W3C */\r\n  transition-duration: 0.3s;\r\n  transition-property: transform, opacity;\n}\n.hvr-float-shadow:hover, .hvr-float-shadow:focus, .hvr-float-shadow:active {\r\n  transform: translateY(-5px);\r\n  /* move the element up by 5px */\n}\n.hvr-float-shadow:hover:before, .hvr-float-shadow:focus:before, .hvr-float-shadow:active:before {\r\n  opacity: 1;\r\n  transform: translateY(5px);\r\n  /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */\n}\r\n\r\n/* Shadow Radial */\n.hvr-shadow-radial {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\n}\n.hvr-shadow-radial:before, .hvr-shadow-radial:after {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  content: '';\r\n  left: 0;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  background-repeat: no-repeat;\r\n  height: 5px;\r\n  opacity: 0;\r\n  transition-duration: 0.3s;\r\n  transition-property: opacity;\n}\n.hvr-shadow-radial:before {\r\n  bottom: 100%;\r\n  background: radial-gradient(ellipse at 50% 150%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\n}\n.hvr-shadow-radial:after {\r\n  top: 100%;\r\n  background: radial-gradient(ellipse at 50% -50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 80%);\n}\n.hvr-shadow-radial:hover:before, .hvr-shadow-radial:focus:before, .hvr-shadow-radial:active:before, .hvr-shadow-radial:hover:after, .hvr-shadow-radial:focus:after, .hvr-shadow-radial:active:after {\r\n  opacity: 1;\n}\r\n\r\n/* SPEECH BUBBLES */\r\n/* Bubble Top */\n.hvr-bubble-top {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\n}\n.hvr-bubble-top:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  border-style: solid;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  left: calc(50% - 10px);\r\n  top: 0;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #e1e1e1 transparent;\n}\n.hvr-bubble-top:hover:before, .hvr-bubble-top:focus:before, .hvr-bubble-top:active:before {\r\n  transform: translateY(-10px);\n}\r\n\r\n/* Bubble Right */\n.hvr-bubble-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\n}\n.hvr-bubble-right:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  border-style: solid;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  top: calc(50% - 10px);\r\n  right: 0;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent #e1e1e1;\n}\n.hvr-bubble-right:hover:before, .hvr-bubble-right:focus:before, .hvr-bubble-right:active:before {\r\n  transform: translateX(10px);\n}\r\n\r\n/* Bubble Bottom */\n.hvr-bubble-bottom {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\n}\n.hvr-bubble-bottom:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  border-style: solid;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  left: calc(50% - 10px);\r\n  bottom: 0;\r\n  border-width: 10px 10px 0 10px;\r\n  border-color: #e1e1e1 transparent transparent transparent;\n}\n.hvr-bubble-bottom:hover:before, .hvr-bubble-bottom:focus:before, .hvr-bubble-bottom:active:before {\r\n  transform: translateY(10px);\n}\r\n\r\n/* Bubble Left */\n.hvr-bubble-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\n}\n.hvr-bubble-left:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  border-style: solid;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  top: calc(50% - 10px);\r\n  left: 0;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent #e1e1e1 transparent transparent;\n}\n.hvr-bubble-left:hover:before, .hvr-bubble-left:focus:before, .hvr-bubble-left:active:before {\r\n  transform: translateX(-10px);\n}\r\n\r\n/* Bubble Float Top */\n.hvr-bubble-float-top {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-bubble-float-top:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  left: calc(50% - 10px);\r\n  top: 0;\r\n  border-style: solid;\r\n  border-width: 0 10px 10px 10px;\r\n  border-color: transparent transparent #e1e1e1 transparent;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-bubble-float-top:hover, .hvr-bubble-float-top:focus, .hvr-bubble-float-top:active {\r\n  transform: translateY(10px);\n}\n.hvr-bubble-float-top:hover:before, .hvr-bubble-float-top:focus:before, .hvr-bubble-float-top:active:before {\r\n  transform: translateY(-10px);\n}\r\n\r\n/* Bubble Float Right */\n.hvr-bubble-float-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-bubble-float-right:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  top: calc(50% - 10px);\r\n  right: 0;\r\n  content: '';\r\n  border-style: solid;\r\n  border-width: 10px 0 10px 10px;\r\n  border-color: transparent transparent transparent #e1e1e1;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-bubble-float-right:hover, .hvr-bubble-float-right:focus, .hvr-bubble-float-right:active {\r\n  transform: translateX(-10px);\n}\n.hvr-bubble-float-right:hover:before, .hvr-bubble-float-right:focus:before, .hvr-bubble-float-right:active:before {\r\n  transform: translateX(10px);\n}\r\n\r\n/* Bubble Float Bottom */\n.hvr-bubble-float-bottom {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-bubble-float-bottom:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  left: calc(50% - 10px);\r\n  bottom: 0;\r\n  border-style: solid;\r\n  border-width: 10px 10px 0 10px;\r\n  border-color: #e1e1e1 transparent transparent transparent;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-bubble-float-bottom:hover, .hvr-bubble-float-bottom:focus, .hvr-bubble-float-bottom:active {\r\n  transform: translateY(-10px);\n}\n.hvr-bubble-float-bottom:hover:before, .hvr-bubble-float-bottom:focus:before, .hvr-bubble-float-bottom:active:before {\r\n  transform: translateY(10px);\n}\r\n\r\n/* Bubble Float Left */\n.hvr-bubble-float-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-bubble-float-left:before {\r\n  position: absolute;\r\n  z-index: -1;\r\n  content: '';\r\n  top: calc(50% - 10px);\r\n  left: 0;\r\n  border-style: solid;\r\n  border-width: 10px 10px 10px 0;\r\n  border-color: transparent #e1e1e1 transparent transparent;\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\n}\n.hvr-bubble-float-left:hover, .hvr-bubble-float-left:focus, .hvr-bubble-float-left:active {\r\n  transform: translateX(10px);\n}\n.hvr-bubble-float-left:hover:before, .hvr-bubble-float-left:focus:before, .hvr-bubble-float-left:active:before {\r\n  transform: translateX(-10px);\n}\r\n\r\n/* ICONS */\r\n/* Icon Back */\n.hvr-icon-back {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.1s;\n}\n.hvr-icon-back .hvr-icon {\r\n  transform: translateZ(0);\r\n  transition-duration: 0.1s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-back:hover .hvr-icon, .hvr-icon-back:focus .hvr-icon, .hvr-icon-back:active .hvr-icon {\r\n  transform: translateX(-4px);\n}\r\n\r\n/* Icon Forward */\n.hvr-icon-forward {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.1s;\n}\n.hvr-icon-forward .hvr-icon {\r\n  transform: translateZ(0);\r\n  transition-duration: 0.1s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-forward:hover .hvr-icon, .hvr-icon-forward:focus .hvr-icon, .hvr-icon-forward:active .hvr-icon {\r\n  transform: translateX(4px);\n}\r\n\r\n/* Icon Down */\n@keyframes hvr-icon-down {\n0%,\r\n\t50%,\r\n\t100% {\r\n    transform: translateY(0);\n}\n25%,\r\n\t75% {\r\n    transform: translateY(6px);\n}\n}\r\n/* Icon Down */\n.hvr-icon-down {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-icon-down .hvr-icon {\r\n  transform: translateZ(0);\n}\n.hvr-icon-down:hover .hvr-icon, .hvr-icon-down:focus .hvr-icon, .hvr-icon-down:active .hvr-icon {\r\n  animation-name: hvr-icon-down;\r\n  animation-duration: 0.75s;\r\n  animation-timing-function: ease-out;\n}\r\n\r\n/* Icon Up */\n@keyframes hvr-icon-up {\n0%,\r\n\t50%,\r\n\t100% {\r\n    transform: translateY(0);\n}\n25%,\r\n\t75% {\r\n    transform: translateY(-6px);\n}\n}\r\n/* Icon Up */\n.hvr-icon-up {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-icon-up .hvr-icon {\r\n  transform: translateZ(0);\n}\n.hvr-icon-up:hover .hvr-icon, .hvr-icon-up:focus .hvr-icon, .hvr-icon-up:active .hvr-icon {\r\n  animation-name: hvr-icon-up;\r\n  animation-duration: 0.75s;\r\n  animation-timing-function: ease-out;\n}\r\n\r\n/* Icon Spin */\n.hvr-icon-spin {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-icon-spin .hvr-icon {\r\n  transition-duration: 1s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-in-out;\n}\n.hvr-icon-spin:hover .hvr-icon, .hvr-icon-spin:focus .hvr-icon, .hvr-icon-spin:active .hvr-icon {\r\n  transform: rotate(360deg);\n}\r\n\r\n/* Icon Drop */\n@keyframes hvr-icon-drop {\n0% {\r\n    opacity: 0;\n}\n50% {\r\n    opacity: 0;\r\n    transform: translateY(-100%);\n}\n51%,\r\n\t100% {\r\n    opacity: 1;\n}\n}\r\n/* Icon Drop */\n.hvr-icon-drop {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-icon-drop .hvr-icon {\r\n  transform: translateZ(0);\n}\n.hvr-icon-drop:hover .hvr-icon, .hvr-icon-drop:focus .hvr-icon, .hvr-icon-drop:active .hvr-icon {\r\n  opacity: 0;\r\n  transition-duration: 0.3s;\r\n  animation-name: hvr-icon-drop;\r\n  animation-duration: 0.5s;\r\n  animation-delay: 0.3s;\r\n  animation-fill-mode: forwards;\r\n  animation-timing-function: ease-in-out;\r\n  animation-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);\n}\r\n\r\n/* Icon Fade */\n.hvr-icon-fade {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-icon-fade .hvr-icon {\r\n  transform: translateZ(0);\r\n  transition-duration: 0.5s;\r\n  transition-property: color;\n}\n.hvr-icon-fade:hover .hvr-icon, .hvr-icon-fade:focus .hvr-icon, .hvr-icon-fade:active .hvr-icon {\r\n  color: #0F9E5E;\n}\r\n\r\n/* Icon Float Away */\n@keyframes hvr-icon-float-away {\n0% {\r\n    opacity: 1;\n}\n100% {\r\n    opacity: 0;\r\n    transform: translateY(-1em);\n}\n}\r\n/* Icon Float Away */\n.hvr-icon-float-away {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-icon-float-away .hvr-icon {\r\n  transform: translateZ(0);\r\n  animation-duration: 0.5s;\r\n  animation-fill-mode: forwards;\n}\n.hvr-icon-float-away:hover .hvr-icon, .hvr-icon-float-away:focus .hvr-icon, .hvr-icon-float-away:active .hvr-icon {\r\n  animation-name: hvr-icon-float-away;\r\n  animation-timing-function: ease-out;\n}\r\n\r\n/* Icon Sink Away */\n@keyframes hvr-icon-sink-away {\n0% {\r\n    opacity: 1;\n}\n100% {\r\n    opacity: 0;\r\n    transform: translateY(1em);\n}\n}\r\n/* Icon Sink Away */\n.hvr-icon-sink-away {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-icon-sink-away .hvr-icon {\r\n  transform: translateZ(0);\r\n  animation-duration: 0.5s;\r\n  animation-fill-mode: forwards;\n}\n.hvr-icon-sink-away:hover .hvr-icon, .hvr-icon-sink-away:focus .hvr-icon, .hvr-icon-sink-away:active .hvr-icon {\r\n  animation-name: hvr-icon-sink-away;\r\n  animation-timing-function: ease-out;\n}\r\n\r\n/* Icon Grow */\n.hvr-icon-grow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-grow .hvr-icon {\r\n  transform: translateZ(0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-grow:hover .hvr-icon, .hvr-icon-grow:focus .hvr-icon, .hvr-icon-grow:active .hvr-icon {\r\n  transform: scale(1.3) translateZ(0);\n}\r\n\r\n/* Icon Shrink */\n.hvr-icon-shrink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-shrink .hvr-icon {\r\n  transform: translateZ(0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-shrink:hover .hvr-icon, .hvr-icon-shrink:focus .hvr-icon, .hvr-icon-shrink:active .hvr-icon {\r\n  transform: scale(0.8);\n}\r\n\r\n/* Icon Pulse */\n@keyframes hvr-icon-pulse {\n25% {\r\n    transform: scale(1.3);\n}\n75% {\r\n    transform: scale(0.8);\n}\n}\n.hvr-icon-pulse {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-icon-pulse .hvr-icon {\r\n  transform: translateZ(0);\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pulse:hover .hvr-icon, .hvr-icon-pulse:focus .hvr-icon, .hvr-icon-pulse:active .hvr-icon {\r\n  animation-name: hvr-icon-pulse;\r\n  animation-duration: 1s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: infinite;\n}\r\n\r\n/* Icon Pulse Grow */\n@keyframes hvr-icon-pulse-grow {\nto {\r\n    transform: scale(1.3);\n}\n}\n.hvr-icon-pulse-grow {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-icon-pulse-grow .hvr-icon {\r\n  transform: translateZ(0);\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pulse-grow:hover .hvr-icon, .hvr-icon-pulse-grow:focus .hvr-icon, .hvr-icon-pulse-grow:active .hvr-icon {\r\n  animation-name: hvr-icon-pulse-grow;\r\n  animation-duration: 0.3s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\n}\r\n\r\n/* Icon Pulse Shrink */\n@keyframes hvr-icon-pulse-shrink {\nto {\r\n    transform: scale(0.8);\n}\n}\n.hvr-icon-pulse-shrink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\n}\n.hvr-icon-pulse-shrink .hvr-icon {\r\n  transform: translateZ(0);\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pulse-shrink:hover .hvr-icon, .hvr-icon-pulse-shrink:focus .hvr-icon, .hvr-icon-pulse-shrink:active .hvr-icon {\r\n  animation-name: hvr-icon-pulse-shrink;\r\n  animation-duration: 0.3s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: infinite;\r\n  animation-direction: alternate;\n}\r\n\r\n/* Icon Push */\n@keyframes hvr-icon-push {\n50% {\r\n    transform: scale(0.5);\n}\n}\n.hvr-icon-push {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-push .hvr-icon {\r\n  transform: translateZ(0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-push:hover .hvr-icon, .hvr-icon-push:focus .hvr-icon, .hvr-icon-push:active .hvr-icon {\r\n  animation-name: hvr-icon-push;\r\n  animation-duration: 0.3s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Icon Pop */\n@keyframes hvr-icon-pop {\n50% {\r\n    transform: scale(1.5);\n}\n}\n.hvr-icon-pop {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-pop .hvr-icon {\r\n  transform: translateZ(0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-pop:hover .hvr-icon, .hvr-icon-pop:focus .hvr-icon, .hvr-icon-pop:active .hvr-icon {\r\n  animation-name: hvr-icon-pop;\r\n  animation-duration: 0.3s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Icon Bounce */\n.hvr-icon-bounce {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-bounce .hvr-icon {\r\n  transform: translateZ(0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-bounce:hover .hvr-icon, .hvr-icon-bounce:focus .hvr-icon, .hvr-icon-bounce:active .hvr-icon {\r\n  transform: scale(1.5);\r\n  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);\n}\r\n\r\n/* Icon Rotate */\n.hvr-icon-rotate {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-rotate .hvr-icon {\r\n  transform: translateZ(0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-rotate:hover .hvr-icon, .hvr-icon-rotate:focus .hvr-icon, .hvr-icon-rotate:active .hvr-icon {\r\n  transform: rotate(20deg);\n}\r\n\r\n/* Icon Grow Rotate */\n.hvr-icon-grow-rotate {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-grow-rotate .hvr-icon {\r\n  transform: translateZ(0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-grow-rotate:hover .hvr-icon, .hvr-icon-grow-rotate:focus .hvr-icon, .hvr-icon-grow-rotate:active .hvr-icon {\r\n  transform: scale(1.5) rotate(12deg);\n}\r\n\r\n/* Icon Float */\n.hvr-icon-float {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-float .hvr-icon {\r\n  transform: translateZ(0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-float:hover .hvr-icon, .hvr-icon-float:focus .hvr-icon, .hvr-icon-float:active .hvr-icon {\r\n  transform: translateY(-4px);\n}\r\n\r\n/* Icon Sink */\n.hvr-icon-sink {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-sink .hvr-icon {\r\n  transform: translateZ(0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-out;\n}\n.hvr-icon-sink:hover .hvr-icon, .hvr-icon-sink:focus .hvr-icon, .hvr-icon-sink:active .hvr-icon {\r\n  transform: translateY(4px);\n}\r\n\r\n/* Icon Bob */\n@keyframes hvr-icon-bob {\n0% {\r\n    transform: translateY(-6px);\n}\n50% {\r\n    transform: translateY(-2px);\n}\n100% {\r\n    transform: translateY(-6px);\n}\n}\n@keyframes hvr-icon-bob-float {\n100% {\r\n    transform: translateY(-6px);\n}\n}\n.hvr-icon-bob {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-bob .hvr-icon {\r\n  transform: translateZ(0);\n}\n.hvr-icon-bob:hover .hvr-icon, .hvr-icon-bob:focus .hvr-icon, .hvr-icon-bob:active .hvr-icon {\r\n  animation-name: hvr-icon-bob-float, hvr-icon-bob;\r\n  animation-duration: .3s, 1.5s;\r\n  animation-delay: 0s, .3s;\r\n  animation-timing-function: ease-out, ease-in-out;\r\n  animation-iteration-count: 1, infinite;\r\n  animation-fill-mode: forwards;\r\n  animation-direction: normal, alternate;\n}\r\n\r\n/* Icon Hang */\n@keyframes hvr-icon-hang {\n0% {\r\n    transform: translateY(6px);\n}\n50% {\r\n    transform: translateY(2px);\n}\n100% {\r\n    transform: translateY(6px);\n}\n}\n@keyframes hvr-icon-hang-sink {\n100% {\r\n    transform: translateY(6px);\n}\n}\n.hvr-icon-hang {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-hang .hvr-icon {\r\n  transform: translateZ(0);\n}\n.hvr-icon-hang:hover .hvr-icon, .hvr-icon-hang:focus .hvr-icon, .hvr-icon-hang:active .hvr-icon {\r\n  animation-name: hvr-icon-hang-sink, hvr-icon-hang;\r\n  animation-duration: .3s, 1.5s;\r\n  animation-delay: 0s, .3s;\r\n  animation-timing-function: ease-out, ease-in-out;\r\n  animation-iteration-count: 1, infinite;\r\n  animation-fill-mode: forwards;\r\n  animation-direction: normal, alternate;\n}\r\n\r\n/* Icon Wobble Horizontal */\n@keyframes hvr-icon-wobble-horizontal {\n16.65% {\r\n    transform: translateX(6px);\n}\n33.3% {\r\n    transform: translateX(-5px);\n}\n49.95% {\r\n    transform: translateX(4px);\n}\n66.6% {\r\n    transform: translateX(-2px);\n}\n83.25% {\r\n    transform: translateX(1px);\n}\n100% {\r\n    transform: translateX(0);\n}\n}\n.hvr-icon-wobble-horizontal {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-wobble-horizontal .hvr-icon {\r\n  transform: translateZ(0);\n}\n.hvr-icon-wobble-horizontal:hover .hvr-icon, .hvr-icon-wobble-horizontal:focus .hvr-icon, .hvr-icon-wobble-horizontal:active .hvr-icon {\r\n  animation-name: hvr-icon-wobble-horizontal;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-in-out;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Icon Wobble Vertical */\n@keyframes hvr-icon-wobble-vertical {\n16.65% {\r\n    transform: translateY(6px);\n}\n33.3% {\r\n    transform: translateY(-5px);\n}\n49.95% {\r\n    transform: translateY(4px);\n}\n66.6% {\r\n    transform: translateY(-2px);\n}\n83.25% {\r\n    transform: translateY(1px);\n}\n100% {\r\n    transform: translateY(0);\n}\n}\n.hvr-icon-wobble-vertical {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-wobble-vertical .hvr-icon {\r\n  transform: translateZ(0);\n}\n.hvr-icon-wobble-vertical:hover .hvr-icon, .hvr-icon-wobble-vertical:focus .hvr-icon, .hvr-icon-wobble-vertical:active .hvr-icon {\r\n  animation-name: hvr-icon-wobble-vertical;\r\n  animation-duration: 1s;\r\n  animation-timing-function: ease-in-out;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* Icon Buzz */\n@keyframes hvr-icon-buzz {\n50% {\r\n    transform: translateX(3px) rotate(2deg);\n}\n100% {\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n}\n.hvr-icon-buzz {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-buzz .hvr-icon {\r\n  transform: translateZ(0);\n}\n.hvr-icon-buzz:hover .hvr-icon, .hvr-icon-buzz:focus .hvr-icon, .hvr-icon-buzz:active .hvr-icon {\r\n  animation-name: hvr-icon-buzz;\r\n  animation-duration: 0.15s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: infinite;\n}\r\n\r\n/* Icon Buzz Out */\n@keyframes hvr-icon-buzz-out {\n10% {\r\n    transform: translateX(3px) rotate(2deg);\n}\n20% {\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n30% {\r\n    transform: translateX(3px) rotate(2deg);\n}\n40% {\r\n    transform: translateX(-3px) rotate(-2deg);\n}\n50% {\r\n    transform: translateX(2px) rotate(1deg);\n}\n60% {\r\n    transform: translateX(-2px) rotate(-1deg);\n}\n70% {\r\n    transform: translateX(2px) rotate(1deg);\n}\n80% {\r\n    transform: translateX(-2px) rotate(-1deg);\n}\n90% {\r\n    transform: translateX(1px) rotate(0);\n}\n100% {\r\n    transform: translateX(-1px) rotate(0);\n}\n}\n.hvr-icon-buzz-out {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  transition-duration: 0.3s;\n}\n.hvr-icon-buzz-out .hvr-icon {\r\n  transform: translateZ(0);\n}\n.hvr-icon-buzz-out:hover .hvr-icon, .hvr-icon-buzz-out:focus .hvr-icon, .hvr-icon-buzz-out:active .hvr-icon {\r\n  animation-name: hvr-icon-buzz-out;\r\n  animation-duration: 0.75s;\r\n  animation-timing-function: linear;\r\n  animation-iteration-count: 1;\n}\r\n\r\n/* CURLS */\r\n/* Curl Top Left */\n.hvr-curl-top-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\n}\n.hvr-curl-top-left:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  content: '';\r\n  height: 0;\r\n  width: 0;\r\n  top: 0;\r\n  left: 0;\r\n  background: white;\r\n  /* IE9 */\r\n  background: linear-gradient(135deg, white 45%, #aaa 50%, #ccc 56%, white 80%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='#ffffff', endColorstr='#000000');\r\n  /*For IE7-8-9*/\r\n  z-index: 1000;\r\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);\r\n  transition-duration: 0.3s;\r\n  transition-property: width, height;\n}\n.hvr-curl-top-left:hover:before, .hvr-curl-top-left:focus:before, .hvr-curl-top-left:active:before {\r\n  width: 25px;\r\n  height: 25px;\n}\r\n\r\n/* Curl Top Right */\n.hvr-curl-top-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\n}\n.hvr-curl-top-right:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  content: '';\r\n  height: 0;\r\n  width: 0;\r\n  top: 0;\r\n  right: 0;\r\n  background: white;\r\n  /* IE9 */\r\n  background: linear-gradient(225deg, white 45%, #aaa 50%, #ccc 56%, white 80%);\r\n  box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.4);\r\n  transition-duration: 0.3s;\r\n  transition-property: width, height;\n}\n.hvr-curl-top-right:hover:before, .hvr-curl-top-right:focus:before, .hvr-curl-top-right:active:before {\r\n  width: 25px;\r\n  height: 25px;\n}\r\n\r\n/* Curl Bottom Right */\n.hvr-curl-bottom-right {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\n}\n.hvr-curl-bottom-right:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  content: '';\r\n  height: 0;\r\n  width: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  background: white;\r\n  /* IE9 */\r\n  background: linear-gradient(315deg, white 45%, #aaa 50%, #ccc 56%, white 80%);\r\n  box-shadow: -1px -1px 1px rgba(0, 0, 0, 0.4);\r\n  transition-duration: 0.3s;\r\n  transition-property: width, height;\n}\n.hvr-curl-bottom-right:hover:before, .hvr-curl-bottom-right:focus:before, .hvr-curl-bottom-right:active:before {\r\n  width: 25px;\r\n  height: 25px;\n}\r\n\r\n/* Curl Bottom Left */\n.hvr-curl-bottom-left {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  transform: perspective(1px) translateZ(0);\r\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0);\r\n  position: relative;\n}\n.hvr-curl-bottom-left:before {\r\n  pointer-events: none;\r\n  position: absolute;\r\n  content: '';\r\n  height: 0;\r\n  width: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  background: white;\r\n  /* IE9 */\r\n  background: linear-gradient(45deg, white 45%, #aaa 50%, #ccc 56%, white 80%);\r\n  box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.4);\r\n  transition-duration: 0.3s;\r\n  transition-property: width, height;\n}\n.hvr-curl-bottom-left:hover:before, .hvr-curl-bottom-left:focus:before, .hvr-curl-bottom-left:active:before {\r\n  width: 25px;\r\n  height: 25px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(976);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(39)("babd1618", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-544d8501\",\"scoped\":true,\"hasInlineConfig\":true}!./button.css", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-544d8501\",\"scoped\":true,\"hasInlineConfig\":true}!./button.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, "\n.btn_rounded[data-v-544d8501] {\n    border-radius: 50px;\n}\n.effects .btn[data-v-544d8501] {\n    margin: .4em;\n    padding: 1em;\n    cursor: pointer;\n    background: #dcdcdc;\n    text-decoration: none;\n    color: #333;\n}\n.iconsbtn .btn[data-v-544d8501] {\n    padding-right: 3em;\n}\n.btn[data-v-544d8501] {\n    cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ 977:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "buttons",
    components: {},
    mounted: function mounted() {},
    data: function data() {
        return {};
    },

    methods: {}
});

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-6" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-deafult-card",
              attrs: { header: "Basic Buttons", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "form-group text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Primary")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Default")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Success")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info mt-3 text-white",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Info")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-warning mt-3 text-white",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Warning")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger mt-3 text-white",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Danger")]
                )
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-6" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-default-card",
              attrs: { header: "Outline buttons", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "form-group text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-primary mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Primary")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Default")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-success mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Success")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-info mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Info")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-warning mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Warning")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-danger mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Danger")]
                )
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-6" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-default-card",
              attrs: { header: "Rounded Buttons", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "form-group text-center" }, [
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-outline-primary btn_width btn_rounded mt-3 ",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Primary\n                    ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-outline-secondary btn_width btn_rounded mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Default\n                    ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-outline-success btn_width btn_rounded mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Success\n                    ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-outline-info btn_width btn_rounded mt-3",
                    attrs: { type: "button" }
                  },
                  [
                    _vm._v(
                      "\n                        Info\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-outline-warning btn_width btn_rounded mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Warning\n                    ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "btn btn-outline-danger btn_width btn_rounded mt-3",
                    attrs: { type: "button" }
                  },
                  [
                    _vm._v(
                      "\n                        Danger\n                    "
                    )
                  ]
                )
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-6" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-default-card effects",
              attrs: { header: "Curls", "header-tag": "h4" }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-curl-top-left",
                  attrs: { type: "button" }
                },
                [_vm._v("Curl Top Left")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-curl-top-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Curl Top Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-curl-bottom-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Curl Bottom Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-curl-bottom-left",
                  attrs: { type: "button" }
                },
                [_vm._v("Curl Bottom Left")]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-12" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-primary-card effects",
              attrs: { header: "2D Transitions", "header-tag": "h4" }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-grow",
                  attrs: { type: "button" }
                },
                [_vm._v("Grow")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-shrink",
                  attrs: { type: "button" }
                },
                [_vm._v("Shrink")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-pulse",
                  attrs: { type: "button" }
                },
                [_vm._v("Pulse")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-pulse-grow",
                  attrs: { type: "button" }
                },
                [_vm._v("Pulse Grow")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-pulse-shrink",
                  attrs: { type: "button" }
                },
                [_vm._v("Pulse Shrink")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-push",
                  attrs: { type: "button" }
                },
                [_vm._v("Push")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-pop",
                  attrs: { type: "button" }
                },
                [_vm._v("Pop")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bounce-in",
                  attrs: { type: "button" }
                },
                [_vm._v("Bounce In")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bounce-out",
                  attrs: { type: "button" }
                },
                [_vm._v("Bounce Out")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-rotate",
                  attrs: { type: "button" }
                },
                [_vm._v("Rotate")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-grow-rotate",
                  attrs: { type: "button" }
                },
                [_vm._v("Grow Rotate")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-float",
                  attrs: { type: "button" }
                },
                [_vm._v("Float")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-sink",
                  attrs: { type: "button" }
                },
                [_vm._v("Sink")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bob",
                  attrs: { type: "button" }
                },
                [_vm._v("Bob")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-hang",
                  attrs: { type: "button" }
                },
                [_vm._v("Hang")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-skew",
                  attrs: { type: "button" }
                },
                [_vm._v("Skew")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-skew-forward",
                  attrs: { type: "button" }
                },
                [_vm._v("Skew Forward")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-skew-backward",
                  attrs: { type: "button" }
                },
                [_vm._v("Skew Backward")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-wobble-horizontal",
                  attrs: { type: "button" }
                },
                [_vm._v("Wobble Horizontal")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-wobble-vertical",
                  attrs: { type: "button" }
                },
                [_vm._v("Wobble Vertical")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-wobble-to-bottom-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Wobble To Bottom Right\n                ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-wobble-to-top-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Wobble To Top Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-wobble-top",
                  attrs: { type: "button" }
                },
                [_vm._v("Wobble Top")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-wobble-bottom",
                  attrs: { type: "button" }
                },
                [_vm._v("Wobble Bottom")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-wobble-skew",
                  attrs: { type: "button" }
                },
                [_vm._v("Wobble Skew")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-buzz",
                  attrs: { type: "button" }
                },
                [_vm._v("Buzz")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-buzz-out",
                  attrs: { type: "button" }
                },
                [_vm._v("Buzz Out")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-forward",
                  attrs: { type: "button" }
                },
                [_vm._v("Forward")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-backward",
                  attrs: { type: "button" }
                },
                [_vm._v("Backward")]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-6 " },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-info-card effects",
              attrs: { header: "Border Transitions", "header-tag": "h4" }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-border-fade",
                  attrs: { type: "button" }
                },
                [_vm._v("Border Fade")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-round-corners",
                  attrs: { type: "button" }
                },
                [_vm._v("Round Corners")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-underline-from-left",
                  attrs: { type: "button" }
                },
                [_vm._v("Underline From Left")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-underline-from-center",
                  attrs: { type: "button" }
                },
                [_vm._v("Underline From Center\n                ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-underline-from-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Underline From Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-reveal",
                  attrs: { type: "button" }
                },
                [_vm._v("Reveal")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-underline-reveal",
                  attrs: { type: "button" }
                },
                [_vm._v("Underline Reveal")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-overline-reveal",
                  attrs: { type: "button" }
                },
                [_vm._v("Overline Reveal")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-overline-from-left",
                  attrs: { type: "button" }
                },
                [_vm._v("Overline From Left")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-overline-from-center",
                  attrs: { type: "button" }
                },
                [_vm._v("Overline From Center")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-overline-from-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Overline From Right")]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-6 " },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-success-card effects",
              attrs: { header: "Background Transitions", "header-tag": "h4" }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-sweep-to-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Sweep To Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-sweep-to-left",
                  attrs: { type: "button" }
                },
                [_vm._v("Sweep To Left")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-sweep-to-bottom",
                  attrs: { type: "button" }
                },
                [_vm._v("Sweep To Bottom")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-sweep-to-top",
                  attrs: { type: "button" }
                },
                [_vm._v("Sweep To Top")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bounce-to-right",
                  attrs: { type: "button" }
                },
                [_vm._v("Bounce To Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bounce-to-left",
                  attrs: { type: "button" }
                },
                [_vm._v("Bounce To Left")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bounce-to-bottom",
                  attrs: { type: "button" }
                },
                [_vm._v("Bounce To Bottom")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bounce-to-top",
                  attrs: { type: "button" }
                },
                [_vm._v("Bounce To Top")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-radial-out",
                  attrs: { type: "button" }
                },
                [_vm._v("Radial Out")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-rectangle-out",
                  attrs: { type: "button" }
                },
                [_vm._v("Rectangle Out")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-shutter-out-horizontal",
                  attrs: { type: "button" }
                },
                [_vm._v("Shutter Out Horizontal\n                ")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-shutter-out-vertical",
                  attrs: { type: "button" }
                },
                [_vm._v("Shutter Out Vertical")]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-6" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-warning-card effects",
              attrs: { header: "Speech Bubbles", "header-tag": "h4" }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-top mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Top")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-right mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-float-bottom mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Float Bottom")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-bottom mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Bottom")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-left mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Left")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-float-right mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Float Right")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-float-top mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Float Top")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-bubble-float-left mb-2",
                  attrs: { type: "button" }
                },
                [_vm._v("Bubble Float Left")]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-6" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-danger-card effects",
              attrs: {
                header: "Shadow and Glow Transitions",
                "header-tag": "h4"
              }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-shadow",
                  attrs: { type: "button" }
                },
                [_vm._v("Shadow")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-grow-shadow",
                  attrs: { type: "button" }
                },
                [_vm._v("Grow Shadow")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-float-shadow",
                  attrs: { type: "button" }
                },
                [_vm._v("Float Shadow")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-glow",
                  attrs: { type: "button" }
                },
                [_vm._v("Glow")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-shadow-radial",
                  attrs: { type: "button" }
                },
                [_vm._v("Shadow Radial")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-box-shadow-outset",
                  attrs: { type: "button" }
                },
                [_vm._v("Box Shadow Outset")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-default hvr-box-shadow-inset",
                  attrs: { type: "button" }
                },
                [_vm._v("Box Shadow Inset")]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-4" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-default-card",
              attrs: { header: "Buttons Sizes", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "form-group text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-sm mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Small button")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary btn-sm mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Small button")]
                )
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-4" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-default-card",
              attrs: { header: "Normal Buttons ", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "form-group text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-md mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Normal button")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary btn-md mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Normal button")]
                )
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-lg-4" },
        [
          _c(
            "b-card",
            {
              staticClass: "bg-default-card",
              attrs: { header: "Large Buttons", "header-tag": "h4" }
            },
            [
              _c("div", { staticClass: "form-group text-center" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary btn-lg mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Large button")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary btn-lg mt-3",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Large button")]
                )
              ])
            ]
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-544d8501", module.exports)
  }
}

/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cropperjs = __webpack_require__(984);

var _cropperjs2 = _interopRequireDefault(_cropperjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var previewPropType = typeof window === 'undefined' ? [String, Array] : [String, Array, Element, NodeList];

exports.default = {
  render: function render(h) {
    return h('div', { style: this.containerStyle }, [h('img', {
      ref: 'img',
      attrs: {
        src: this.src,
        alt: this.alt || 'image',
        style: 'max-width: 100%'
      },
      on: this.$listeners,
      style: this.imgStyle
    })]);
  },

  props: {
    containerStyle: Object,
    src: {
      type: String,
      default: ''
    },
    alt: String,
    imgStyle: Object,

    viewMode: Number,
    dragMode: String,
    initialAspectRatio: Number,
    aspectRatio: Number,
    data: Object,
    preview: previewPropType,
    responsive: {
      type: Boolean,
      default: true
    },
    restore: {
      type: Boolean,
      default: true
    },
    checkCrossOrigin: {
      type: Boolean,
      default: true
    },
    checkOrientation: {
      type: Boolean,
      default: true
    },
    modal: {
      type: Boolean,
      default: true
    },
    guides: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    },
    background: {
      type: Boolean,
      default: true
    },
    autoCrop: {
      type: Boolean,
      default: true
    },
    autoCropArea: Number,
    movable: {
      type: Boolean,
      default: true
    },
    rotatable: {
      type: Boolean,
      default: true
    },
    scalable: {
      type: Boolean,
      default: true
    },
    zoomable: {
      type: Boolean,
      default: true
    },
    zoomOnTouch: {
      type: Boolean,
      default: true
    },
    zoomOnWheel: {
      type: Boolean,
      default: true
    },
    wheelZoomRatio: Number,
    cropBoxMovable: {
      type: Boolean,
      default: true
    },
    cropBoxResizable: {
      type: Boolean,
      default: true
    },
    toggleDragModeOnDblclick: {
      type: Boolean,
      default: true
    },

    minCanvasWidth: Number,
    minCanvasHeight: Number,
    minCropBoxWidth: Number,
    minCropBoxHeight: Number,
    minContainerWidth: Number,
    minContainerHeight: Number,

    ready: Function,
    cropstart: Function,
    cropmove: Function,
    cropend: Function,
    crop: Function,
    zoom: Function
  },
  mounted: function mounted() {
    var _$options$props = this.$options.props,
        containerStyle = _$options$props.containerStyle,
        src = _$options$props.src,
        alt = _$options$props.alt,
        imgStyle = _$options$props.imgStyle,
        data = _objectWithoutProperties(_$options$props, ['containerStyle', 'src', 'alt', 'imgStyle']);

    var props = {};

    for (var key in data) {
      if (this[key] !== undefined) {
        props[key] = this[key];
      }
    }

    this.cropper = new _cropperjs2.default(this.$refs.img, props);
  },

  methods: {
    reset: function reset() {
      return this.cropper.reset();
    },
    clear: function clear() {
      return this.cropper.clear();
    },
    initCrop: function initCrop() {
      return this.cropper.crop();
    },
    replace: function replace(url) {
      var onlyColorChanged = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      return this.cropper.replace(url, onlyColorChanged);
    },
    enable: function enable() {
      return this.cropper.enable();
    },
    disable: function disable() {
      return this.cropper.disable();
    },
    destroy: function destroy() {
      return this.cropper.destroy();
    },
    move: function move(offsetX, offsetY) {
      return this.cropper.move(offsetX, offsetY);
    },
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;

      return this.cropper.moveTo(x, y);
    },
    relativeZoom: function relativeZoom(ratio, _originalEvent) {
      return this.cropper.zoom(ratio, _originalEvent);
    },
    zoomTo: function zoomTo(ratio, _originalEvent) {
      return this.cropper.zoomTo(ratio, _originalEvent);
    },
    rotate: function rotate(degree) {
      return this.cropper.rotate(degree);
    },
    rotateTo: function rotateTo(degree) {
      return this.cropper.rotateTo(degree);
    },
    scaleX: function scaleX(_scaleX) {
      return this.cropper.scaleX(_scaleX);
    },
    scaleY: function scaleY(_scaleY) {
      return this.cropper.scaleY(_scaleY);
    },
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;

      return this.cropper.scale(scaleX, scaleY);
    },
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      return this.cropper.getData(rounded);
    },
    setData: function setData(data) {
      return this.cropper.setData(data);
    },
    getContainerData: function getContainerData() {
      return this.cropper.getContainerData();
    },
    getImageData: function getImageData() {
      return this.cropper.getImageData();
    },
    getCanvasData: function getCanvasData() {
      return this.cropper.getCanvasData();
    },
    setCanvasData: function setCanvasData(data) {
      return this.cropper.setCanvasData(data);
    },
    getCropBoxData: function getCropBoxData() {
      return this.cropper.getCropBoxData();
    },
    setCropBoxData: function setCropBoxData(data) {
      return this.cropper.setCropBoxData(data);
    },
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this.cropper.getCroppedCanvas(options);
    },
    setAspectRatio: function setAspectRatio(aspectRatio) {
      return this.cropper.setAspectRatio(aspectRatio);
    },
    setDragMode: function setDragMode(mode) {
      return this.cropper.setDragMode(mode);
    }
  }
};

/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Cropper.js v1.5.7
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-05-23T05:23:00.081Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Cropper = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
  var WINDOW = IS_BROWSER ? window : {};
  var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
  var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
  var NAMESPACE = 'cropper'; // Actions

  var ACTION_ALL = 'all';
  var ACTION_CROP = 'crop';
  var ACTION_MOVE = 'move';
  var ACTION_ZOOM = 'zoom';
  var ACTION_EAST = 'e';
  var ACTION_WEST = 'w';
  var ACTION_SOUTH = 's';
  var ACTION_NORTH = 'n';
  var ACTION_NORTH_EAST = 'ne';
  var ACTION_NORTH_WEST = 'nw';
  var ACTION_SOUTH_EAST = 'se';
  var ACTION_SOUTH_WEST = 'sw'; // Classes

  var CLASS_CROP = "".concat(NAMESPACE, "-crop");
  var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
  var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
  var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
  var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
  var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
  var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys

  var DATA_ACTION = "".concat(NAMESPACE, "Action");
  var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes

  var DRAG_MODE_CROP = 'crop';
  var DRAG_MODE_MOVE = 'move';
  var DRAG_MODE_NONE = 'none'; // Events

  var EVENT_CROP = 'crop';
  var EVENT_CROP_END = 'cropend';
  var EVENT_CROP_MOVE = 'cropmove';
  var EVENT_CROP_START = 'cropstart';
  var EVENT_DBLCLICK = 'dblclick';
  var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
  var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
  var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
  var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
  var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
  var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
  var EVENT_READY = 'ready';
  var EVENT_RESIZE = 'resize';
  var EVENT_WHEEL = 'wheel';
  var EVENT_ZOOM = 'zoom'; // Mime types

  var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps

  var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
  var REGEXP_DATA_URL = /^data:/;
  var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
  var REGEXP_TAG_NAME = /^img|canvas$/i; // Misc

  var DEFAULTS = {
    // Define the view mode of the cropper
    viewMode: 0,
    // 0, 1, 2, 3
    // Define the dragging mode of the cropper
    dragMode: DRAG_MODE_CROP,
    // 'crop', 'move' or 'none'
    // Define the initial aspect ratio of the crop box
    initialAspectRatio: NaN,
    // Define the aspect ratio of the crop box
    aspectRatio: NaN,
    // An object with the previous cropping result data
    data: null,
    // A selector for adding extra containers to preview
    preview: '',
    // Re-render the cropper when resize the window
    responsive: true,
    // Restore the cropped area after resize the window
    restore: true,
    // Check if the current image is a cross-origin image
    checkCrossOrigin: true,
    // Check the current image's Exif Orientation information
    checkOrientation: true,
    // Show the black modal
    modal: true,
    // Show the dashed lines for guiding
    guides: true,
    // Show the center indicator for guiding
    center: true,
    // Show the white modal to highlight the crop box
    highlight: true,
    // Show the grid background
    background: true,
    // Enable to crop the image automatically when initialize
    autoCrop: true,
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: 0.8,
    // Enable to move the image
    movable: true,
    // Enable to rotate the image
    rotatable: true,
    // Enable to scale the image
    scalable: true,
    // Enable to zoom the image
    zoomable: true,
    // Enable to zoom the image by dragging touch
    zoomOnTouch: true,
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: true,
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: 0.1,
    // Enable to move the crop box
    cropBoxMovable: true,
    // Enable to resize the crop box
    cropBoxResizable: true,
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: true,
    // Size limitation
    minCanvasWidth: 0,
    minCanvasHeight: 0,
    minCropBoxWidth: 0,
    minCropBoxHeight: 0,
    minContainerWidth: 200,
    minContainerHeight: 100,
    // Shortcuts of events
    ready: null,
    cropstart: null,
    cropmove: null,
    cropend: null,
    crop: null,
    zoom: null
  };

  var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

  /**
   * Check if the given value is not a number.
   */

  var isNaN = Number.isNaN || WINDOW.isNaN;
  /**
   * Check if the given value is a number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a number, else `false`.
   */

  function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  /**
   * Check if the given value is a positive number.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
   */

  var isPositiveNumber = function isPositiveNumber(value) {
    return value > 0 && value < Infinity;
  };
  /**
   * Check if the given value is undefined.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
   */

  function isUndefined(value) {
    return typeof value === 'undefined';
  }
  /**
   * Check if the given value is an object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is an object, else `false`.
   */

  function isObject(value) {
    return _typeof(value) === 'object' && value !== null;
  }
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * Check if the given value is a plain object.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
   */

  function isPlainObject(value) {
    if (!isObject(value)) {
      return false;
    }

    try {
      var _constructor = value.constructor;
      var prototype = _constructor.prototype;
      return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
    } catch (error) {
      return false;
    }
  }
  /**
   * Check if the given value is a function.
   * @param {*} value - The value to check.
   * @returns {boolean} Returns `true` if the given value is a function, else `false`.
   */

  function isFunction(value) {
    return typeof value === 'function';
  }
  var slice = Array.prototype.slice;
  /**
   * Convert array-like or iterable object to an array.
   * @param {*} value - The value to convert.
   * @returns {Array} Returns a new array.
   */

  function toArray(value) {
    return Array.from ? Array.from(value) : slice.call(value);
  }
  /**
   * Iterate the given data.
   * @param {*} data - The data to iterate.
   * @param {Function} callback - The process function for each element.
   * @returns {*} The original data.
   */

  function forEach(data, callback) {
    if (data && isFunction(callback)) {
      if (Array.isArray(data) || isNumber(data.length)
      /* array-like */
      ) {
          toArray(data).forEach(function (value, key) {
            callback.call(data, value, key, data);
          });
        } else if (isObject(data)) {
        Object.keys(data).forEach(function (key) {
          callback.call(data, data[key], key, data);
        });
      }
    }

    return data;
  }
  /**
   * Extend the given object.
   * @param {*} target - The target object to extend.
   * @param {*} args - The rest objects for merging to the target object.
   * @returns {Object} The extended object.
   */

  var assign = Object.assign || function assign(target) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (isObject(target) && args.length > 0) {
      args.forEach(function (arg) {
        if (isObject(arg)) {
          Object.keys(arg).forEach(function (key) {
            target[key] = arg[key];
          });
        }
      });
    }

    return target;
  };
  var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
  /**
   * Normalize decimal number.
   * Check out {@link https://0.30000000000000004.com/}
   * @param {number} value - The value to normalize.
   * @param {number} [times=100000000000] - The times for normalizing.
   * @returns {number} Returns the normalized number.
   */

  function normalizeDecimalNumber(value) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
    return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
  }
  var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
  /**
   * Apply styles to the given element.
   * @param {Element} element - The target element.
   * @param {Object} styles - The styles for applying.
   */

  function setStyle(element, styles) {
    var style = element.style;
    forEach(styles, function (value, property) {
      if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
        value = "".concat(value, "px");
      }

      style[property] = value;
    });
  }
  /**
   * Check if the given element has a special class.
   * @param {Element} element - The element to check.
   * @param {string} value - The class to search.
   * @returns {boolean} Returns `true` if the special class was found.
   */

  function hasClass(element, value) {
    return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
  }
  /**
   * Add classes to the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be added.
   */

  function addClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        addClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.add(value);
      return;
    }

    var className = element.className.trim();

    if (!className) {
      element.className = value;
    } else if (className.indexOf(value) < 0) {
      element.className = "".concat(className, " ").concat(value);
    }
  }
  /**
   * Remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be removed.
   */

  function removeClass(element, value) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        removeClass(elem, value);
      });
      return;
    }

    if (element.classList) {
      element.classList.remove(value);
      return;
    }

    if (element.className.indexOf(value) >= 0) {
      element.className = element.className.replace(value, '');
    }
  }
  /**
   * Add or remove classes from the given element.
   * @param {Element} element - The target element.
   * @param {string} value - The classes to be toggled.
   * @param {boolean} added - Add only.
   */

  function toggleClass(element, value, added) {
    if (!value) {
      return;
    }

    if (isNumber(element.length)) {
      forEach(element, function (elem) {
        toggleClass(elem, value, added);
      });
      return;
    } // IE10-11 doesn't support the second parameter of `classList.toggle`


    if (added) {
      addClass(element, value);
    } else {
      removeClass(element, value);
    }
  }
  var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
  /**
   * Transform the given string from camelCase to kebab-case
   * @param {string} value - The value to transform.
   * @returns {string} The transformed value.
   */

  function toParamCase(value) {
    return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
  }
  /**
   * Get data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to get.
   * @returns {string} The data value.
   */

  function getData(element, name) {
    if (isObject(element[name])) {
      return element[name];
    }

    if (element.dataset) {
      return element.dataset[name];
    }

    return element.getAttribute("data-".concat(toParamCase(name)));
  }
  /**
   * Set data to the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to set.
   * @param {string} data - The data value.
   */

  function setData(element, name, data) {
    if (isObject(data)) {
      element[name] = data;
    } else if (element.dataset) {
      element.dataset[name] = data;
    } else {
      element.setAttribute("data-".concat(toParamCase(name)), data);
    }
  }
  /**
   * Remove data from the given element.
   * @param {Element} element - The target element.
   * @param {string} name - The data key to remove.
   */

  function removeData(element, name) {
    if (isObject(element[name])) {
      try {
        delete element[name];
      } catch (error) {
        element[name] = undefined;
      }
    } else if (element.dataset) {
      // #128 Safari not allows to delete dataset property
      try {
        delete element.dataset[name];
      } catch (error) {
        element.dataset[name] = undefined;
      }
    } else {
      element.removeAttribute("data-".concat(toParamCase(name)));
    }
  }
  var REGEXP_SPACES = /\s\s*/;

  var onceSupported = function () {
    var supported = false;

    if (IS_BROWSER) {
      var once = false;

      var listener = function listener() {};

      var options = Object.defineProperty({}, 'once', {
        get: function get() {
          supported = true;
          return once;
        },

        /**
         * This setter can fix a `TypeError` in strict mode
         * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
         * @param {boolean} value - The value to set
         */
        set: function set(value) {
          once = value;
        }
      });
      WINDOW.addEventListener('test', listener, options);
      WINDOW.removeEventListener('test', listener, options);
    }

    return supported;
  }();
  /**
   * Remove event listener from the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */


  function removeListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (!onceSupported) {
        var listeners = element.listeners;

        if (listeners && listeners[event] && listeners[event][listener]) {
          handler = listeners[event][listener];
          delete listeners[event][listener];

          if (Object.keys(listeners[event]).length === 0) {
            delete listeners[event];
          }

          if (Object.keys(listeners).length === 0) {
            delete element.listeners;
          }
        }
      }

      element.removeEventListener(event, handler, options);
    });
  }
  /**
   * Add event listener to the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Function} listener - The event listener.
   * @param {Object} options - The event options.
   */

  function addListener(element, type, listener) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var _handler = listener;
    type.trim().split(REGEXP_SPACES).forEach(function (event) {
      if (options.once && !onceSupported) {
        var _element$listeners = element.listeners,
            listeners = _element$listeners === void 0 ? {} : _element$listeners;

        _handler = function handler() {
          delete listeners[event][listener];
          element.removeEventListener(event, _handler, options);

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          listener.apply(element, args);
        };

        if (!listeners[event]) {
          listeners[event] = {};
        }

        if (listeners[event][listener]) {
          element.removeEventListener(event, listeners[event][listener], options);
        }

        listeners[event][listener] = _handler;
        element.listeners = listeners;
      }

      element.addEventListener(event, _handler, options);
    });
  }
  /**
   * Dispatch event on the target element.
   * @param {Element} element - The event target.
   * @param {string} type - The event type(s).
   * @param {Object} data - The additional event data.
   * @returns {boolean} Indicate if the event is default prevented or not.
   */

  function dispatchEvent(element, type, data) {
    var event; // Event and CustomEvent on IE9-11 are global objects, not constructors

    if (isFunction(Event) && isFunction(CustomEvent)) {
      event = new CustomEvent(type, {
        detail: data,
        bubbles: true,
        cancelable: true
      });
    } else {
      event = document.createEvent('CustomEvent');
      event.initCustomEvent(type, true, true, data);
    }

    return element.dispatchEvent(event);
  }
  /**
   * Get the offset base on the document.
   * @param {Element} element - The target element.
   * @returns {Object} The offset data.
   */

  function getOffset(element) {
    var box = element.getBoundingClientRect();
    return {
      left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
      top: box.top + (window.pageYOffset - document.documentElement.clientTop)
    };
  }
  var location = WINDOW.location;
  var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
  /**
   * Check if the given URL is a cross origin URL.
   * @param {string} url - The target URL.
   * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
   */

  function isCrossOriginURL(url) {
    var parts = url.match(REGEXP_ORIGINS);
    return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
  }
  /**
   * Add timestamp to the given URL.
   * @param {string} url - The target URL.
   * @returns {string} The result URL.
   */

  function addTimestamp(url) {
    var timestamp = "timestamp=".concat(new Date().getTime());
    return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
  }
  /**
   * Get transforms base on the given object.
   * @param {Object} obj - The target object.
   * @returns {string} A string contains transform values.
   */

  function getTransforms(_ref) {
    var rotate = _ref.rotate,
        scaleX = _ref.scaleX,
        scaleY = _ref.scaleY,
        translateX = _ref.translateX,
        translateY = _ref.translateY;
    var values = [];

    if (isNumber(translateX) && translateX !== 0) {
      values.push("translateX(".concat(translateX, "px)"));
    }

    if (isNumber(translateY) && translateY !== 0) {
      values.push("translateY(".concat(translateY, "px)"));
    } // Rotate should come first before scale to match orientation transform


    if (isNumber(rotate) && rotate !== 0) {
      values.push("rotate(".concat(rotate, "deg)"));
    }

    if (isNumber(scaleX) && scaleX !== 1) {
      values.push("scaleX(".concat(scaleX, ")"));
    }

    if (isNumber(scaleY) && scaleY !== 1) {
      values.push("scaleY(".concat(scaleY, ")"));
    }

    var transform = values.length ? values.join(' ') : 'none';
    return {
      WebkitTransform: transform,
      msTransform: transform,
      transform: transform
    };
  }
  /**
   * Get the max ratio of a group of pointers.
   * @param {string} pointers - The target pointers.
   * @returns {number} The result ratio.
   */

  function getMaxZoomRatio(pointers) {
    var pointers2 = _objectSpread2({}, pointers);

    var ratios = [];
    forEach(pointers, function (pointer, pointerId) {
      delete pointers2[pointerId];
      forEach(pointers2, function (pointer2) {
        var x1 = Math.abs(pointer.startX - pointer2.startX);
        var y1 = Math.abs(pointer.startY - pointer2.startY);
        var x2 = Math.abs(pointer.endX - pointer2.endX);
        var y2 = Math.abs(pointer.endY - pointer2.endY);
        var z1 = Math.sqrt(x1 * x1 + y1 * y1);
        var z2 = Math.sqrt(x2 * x2 + y2 * y2);
        var ratio = (z2 - z1) / z1;
        ratios.push(ratio);
      });
    });
    ratios.sort(function (a, b) {
      return Math.abs(a) < Math.abs(b);
    });
    return ratios[0];
  }
  /**
   * Get a pointer from an event object.
   * @param {Object} event - The target event object.
   * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
   * @returns {Object} The result pointer contains start and/or end point coordinates.
   */

  function getPointer(_ref2, endOnly) {
    var pageX = _ref2.pageX,
        pageY = _ref2.pageY;
    var end = {
      endX: pageX,
      endY: pageY
    };
    return endOnly ? end : _objectSpread2({
      startX: pageX,
      startY: pageY
    }, end);
  }
  /**
   * Get the center point coordinate of a group of pointers.
   * @param {Object} pointers - The target pointers.
   * @returns {Object} The center point coordinate.
   */

  function getPointersCenter(pointers) {
    var pageX = 0;
    var pageY = 0;
    var count = 0;
    forEach(pointers, function (_ref3) {
      var startX = _ref3.startX,
          startY = _ref3.startY;
      pageX += startX;
      pageY += startY;
      count += 1;
    });
    pageX /= count;
    pageY /= count;
    return {
      pageX: pageX,
      pageY: pageY
    };
  }
  /**
   * Get the max sizes in a rectangle under the given aspect ratio.
   * @param {Object} data - The original sizes.
   * @param {string} [type='contain'] - The adjust type.
   * @returns {Object} The result sizes.
   */

  function getAdjustedSizes(_ref4) // or 'cover'
  {
    var aspectRatio = _ref4.aspectRatio,
        height = _ref4.height,
        width = _ref4.width;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
    var isValidWidth = isPositiveNumber(width);
    var isValidHeight = isPositiveNumber(height);

    if (isValidWidth && isValidHeight) {
      var adjustedWidth = height * aspectRatio;

      if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
        height = width / aspectRatio;
      } else {
        width = height * aspectRatio;
      }
    } else if (isValidWidth) {
      height = width / aspectRatio;
    } else if (isValidHeight) {
      width = height * aspectRatio;
    }

    return {
      width: width,
      height: height
    };
  }
  /**
   * Get the new sizes of a rectangle after rotated.
   * @param {Object} data - The original sizes.
   * @returns {Object} The result sizes.
   */

  function getRotatedSizes(_ref5) {
    var width = _ref5.width,
        height = _ref5.height,
        degree = _ref5.degree;
    degree = Math.abs(degree) % 180;

    if (degree === 90) {
      return {
        width: height,
        height: width
      };
    }

    var arc = degree % 90 * Math.PI / 180;
    var sinArc = Math.sin(arc);
    var cosArc = Math.cos(arc);
    var newWidth = width * cosArc + height * sinArc;
    var newHeight = width * sinArc + height * cosArc;
    return degree > 90 ? {
      width: newHeight,
      height: newWidth
    } : {
      width: newWidth,
      height: newHeight
    };
  }
  /**
   * Get a canvas which drew the given image.
   * @param {HTMLImageElement} image - The image for drawing.
   * @param {Object} imageData - The image data.
   * @param {Object} canvasData - The canvas data.
   * @param {Object} options - The options.
   * @returns {HTMLCanvasElement} The result canvas.
   */

  function getSourceCanvas(image, _ref6, _ref7, _ref8) {
    var imageAspectRatio = _ref6.aspectRatio,
        imageNaturalWidth = _ref6.naturalWidth,
        imageNaturalHeight = _ref6.naturalHeight,
        _ref6$rotate = _ref6.rotate,
        rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
        _ref6$scaleX = _ref6.scaleX,
        scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
        _ref6$scaleY = _ref6.scaleY,
        scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
    var aspectRatio = _ref7.aspectRatio,
        naturalWidth = _ref7.naturalWidth,
        naturalHeight = _ref7.naturalHeight;
    var _ref8$fillColor = _ref8.fillColor,
        fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
        _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
        imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
        _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
        imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
        _ref8$maxWidth = _ref8.maxWidth,
        maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
        _ref8$maxHeight = _ref8.maxHeight,
        maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
        _ref8$minWidth = _ref8.minWidth,
        minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
        _ref8$minHeight = _ref8.minHeight,
        minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
    var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
    // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

    var destMaxSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: maxWidth,
      height: maxHeight
    });
    var destMinSizes = getAdjustedSizes({
      aspectRatio: imageAspectRatio,
      width: minWidth,
      height: minHeight
    }, 'cover');
    var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
    var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
    var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = fillColor;
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.rotate(rotate * Math.PI / 180);
    context.scale(scaleX, scaleY);
    context.imageSmoothingEnabled = imageSmoothingEnabled;
    context.imageSmoothingQuality = imageSmoothingQuality;
    context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    context.restore();
    return canvas;
  }
  var fromCharCode = String.fromCharCode;
  /**
   * Get string from char code in data view.
   * @param {DataView} dataView - The data view for read.
   * @param {number} start - The start index.
   * @param {number} length - The read length.
   * @returns {string} The read result.
   */

  function getStringFromCharCode(dataView, start, length) {
    var str = '';
    length += start;

    for (var i = start; i < length; i += 1) {
      str += fromCharCode(dataView.getUint8(i));
    }

    return str;
  }
  var REGEXP_DATA_URL_HEAD = /^data:.*,/;
  /**
   * Transform Data URL to array buffer.
   * @param {string} dataURL - The Data URL to transform.
   * @returns {ArrayBuffer} The result array buffer.
   */

  function dataURLToArrayBuffer(dataURL) {
    var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
    var binary = atob(base64);
    var arrayBuffer = new ArrayBuffer(binary.length);
    var uint8 = new Uint8Array(arrayBuffer);
    forEach(uint8, function (value, i) {
      uint8[i] = binary.charCodeAt(i);
    });
    return arrayBuffer;
  }
  /**
   * Transform array buffer to Data URL.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
   * @param {string} mimeType - The mime type of the Data URL.
   * @returns {string} The result Data URL.
   */

  function arrayBufferToDataURL(arrayBuffer, mimeType) {
    var chunks = []; // Chunk Typed Array for better performance (#435)

    var chunkSize = 8192;
    var uint8 = new Uint8Array(arrayBuffer);

    while (uint8.length > 0) {
      // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
      // eslint-disable-next-line prefer-spread
      chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
      uint8 = uint8.subarray(chunkSize);
    }

    return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
  }
  /**
   * Get orientation value from given array buffer.
   * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
   * @returns {number} The read orientation value.
   */

  function resetAndGetOrientation(arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var orientation; // Ignores range error when the image does not have correct Exif information

    try {
      var littleEndian;
      var app1Start;
      var ifdStart; // Only handle JPEG image (start by 0xFFD8)

      if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        var length = dataView.byteLength;
        var offset = 2;

        while (offset + 1 < length) {
          if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
            app1Start = offset;
            break;
          }

          offset += 1;
        }
      }

      if (app1Start) {
        var exifIDCode = app1Start + 4;
        var tiffOffset = app1Start + 10;

        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
          var endianness = dataView.getUint16(tiffOffset);
          littleEndian = endianness === 0x4949;

          if (littleEndian || endianness === 0x4D4D
          /* bigEndian */
          ) {
              if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                if (firstIFDOffset >= 0x00000008) {
                  ifdStart = tiffOffset + firstIFDOffset;
                }
              }
            }
        }
      }

      if (ifdStart) {
        var _length = dataView.getUint16(ifdStart, littleEndian);

        var _offset;

        var i;

        for (i = 0; i < _length; i += 1) {
          _offset = ifdStart + i * 12 + 2;

          if (dataView.getUint16(_offset, littleEndian) === 0x0112
          /* Orientation */
          ) {
              // 8 is the offset of the current tag's value
              _offset += 8; // Get the original orientation value

              orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

              dataView.setUint16(_offset, 1, littleEndian);
              break;
            }
        }
      }
    } catch (error) {
      orientation = 1;
    }

    return orientation;
  }
  /**
   * Parse Exif Orientation value.
   * @param {number} orientation - The orientation to parse.
   * @returns {Object} The parsed result.
   */

  function parseOrientation(orientation) {
    var rotate = 0;
    var scaleX = 1;
    var scaleY = 1;

    switch (orientation) {
      // Flip horizontal
      case 2:
        scaleX = -1;
        break;
      // Rotate left 180°

      case 3:
        rotate = -180;
        break;
      // Flip vertical

      case 4:
        scaleY = -1;
        break;
      // Flip vertical and rotate right 90°

      case 5:
        rotate = 90;
        scaleY = -1;
        break;
      // Rotate right 90°

      case 6:
        rotate = 90;
        break;
      // Flip horizontal and rotate right 90°

      case 7:
        rotate = 90;
        scaleX = -1;
        break;
      // Rotate left 90°

      case 8:
        rotate = -90;
        break;
    }

    return {
      rotate: rotate,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }

  var render = {
    render: function render() {
      this.initContainer();
      this.initCanvas();
      this.initCropBox();
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    },
    initContainer: function initContainer() {
      var element = this.element,
          options = this.options,
          container = this.container,
          cropper = this.cropper;
      addClass(cropper, CLASS_HIDDEN);
      removeClass(element, CLASS_HIDDEN);
      var containerData = {
        width: Math.max(container.offsetWidth, Number(options.minContainerWidth) || 200),
        height: Math.max(container.offsetHeight, Number(options.minContainerHeight) || 100)
      };
      this.containerData = containerData;
      setStyle(cropper, {
        width: containerData.width,
        height: containerData.height
      });
      addClass(element, CLASS_HIDDEN);
      removeClass(cropper, CLASS_HIDDEN);
    },
    // Canvas (image wrapper)
    initCanvas: function initCanvas() {
      var containerData = this.containerData,
          imageData = this.imageData;
      var viewMode = this.options.viewMode;
      var rotated = Math.abs(imageData.rotate) % 180 === 90;
      var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
      var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
      var aspectRatio = naturalWidth / naturalHeight;
      var canvasWidth = containerData.width;
      var canvasHeight = containerData.height;

      if (containerData.height * aspectRatio > containerData.width) {
        if (viewMode === 3) {
          canvasWidth = containerData.height * aspectRatio;
        } else {
          canvasHeight = containerData.width / aspectRatio;
        }
      } else if (viewMode === 3) {
        canvasHeight = containerData.width / aspectRatio;
      } else {
        canvasWidth = containerData.height * aspectRatio;
      }

      var canvasData = {
        aspectRatio: aspectRatio,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        width: canvasWidth,
        height: canvasHeight
      };
      canvasData.left = (containerData.width - canvasWidth) / 2;
      canvasData.top = (containerData.height - canvasHeight) / 2;
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      this.canvasData = canvasData;
      this.limited = viewMode === 1 || viewMode === 2;
      this.limitCanvas(true, true);
      this.initialImageData = assign({}, imageData);
      this.initialCanvasData = assign({}, canvasData);
    },
    limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var viewMode = options.viewMode;
      var aspectRatio = canvasData.aspectRatio;
      var cropped = this.cropped && cropBoxData;

      if (sizeLimited) {
        var minCanvasWidth = Number(options.minCanvasWidth) || 0;
        var minCanvasHeight = Number(options.minCanvasHeight) || 0;

        if (viewMode > 1) {
          minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
          minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

          if (viewMode === 3) {
            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        } else if (viewMode > 0) {
          if (minCanvasWidth) {
            minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
          } else if (minCanvasHeight) {
            minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
          } else if (cropped) {
            minCanvasWidth = cropBoxData.width;
            minCanvasHeight = cropBoxData.height;

            if (minCanvasHeight * aspectRatio > minCanvasWidth) {
              minCanvasWidth = minCanvasHeight * aspectRatio;
            } else {
              minCanvasHeight = minCanvasWidth / aspectRatio;
            }
          }
        }

        var _getAdjustedSizes = getAdjustedSizes({
          aspectRatio: aspectRatio,
          width: minCanvasWidth,
          height: minCanvasHeight
        });

        minCanvasWidth = _getAdjustedSizes.width;
        minCanvasHeight = _getAdjustedSizes.height;
        canvasData.minWidth = minCanvasWidth;
        canvasData.minHeight = minCanvasHeight;
        canvasData.maxWidth = Infinity;
        canvasData.maxHeight = Infinity;
      }

      if (positionLimited) {
        if (viewMode > (cropped ? 0 : 1)) {
          var newCanvasLeft = containerData.width - canvasData.width;
          var newCanvasTop = containerData.height - canvasData.height;
          canvasData.minLeft = Math.min(0, newCanvasLeft);
          canvasData.minTop = Math.min(0, newCanvasTop);
          canvasData.maxLeft = Math.max(0, newCanvasLeft);
          canvasData.maxTop = Math.max(0, newCanvasTop);

          if (cropped && this.limited) {
            canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
            canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
            canvasData.maxLeft = cropBoxData.left;
            canvasData.maxTop = cropBoxData.top;

            if (viewMode === 2) {
              if (canvasData.width >= containerData.width) {
                canvasData.minLeft = Math.min(0, newCanvasLeft);
                canvasData.maxLeft = Math.max(0, newCanvasLeft);
              }

              if (canvasData.height >= containerData.height) {
                canvasData.minTop = Math.min(0, newCanvasTop);
                canvasData.maxTop = Math.max(0, newCanvasTop);
              }
            }
          }
        } else {
          canvasData.minLeft = -canvasData.width;
          canvasData.minTop = -canvasData.height;
          canvasData.maxLeft = containerData.width;
          canvasData.maxTop = containerData.height;
        }
      }
    },
    renderCanvas: function renderCanvas(changed, transformed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;

      if (transformed) {
        var _getRotatedSizes = getRotatedSizes({
          width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
          height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
          degree: imageData.rotate || 0
        }),
            naturalWidth = _getRotatedSizes.width,
            naturalHeight = _getRotatedSizes.height;

        var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
        var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
        canvasData.left -= (width - canvasData.width) / 2;
        canvasData.top -= (height - canvasData.height) / 2;
        canvasData.width = width;
        canvasData.height = height;
        canvasData.aspectRatio = naturalWidth / naturalHeight;
        canvasData.naturalWidth = naturalWidth;
        canvasData.naturalHeight = naturalHeight;
        this.limitCanvas(true, false);
      }

      if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
        canvasData.left = canvasData.oldLeft;
      }

      if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
        canvasData.top = canvasData.oldTop;
      }

      canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
      canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
      this.limitCanvas(false, true);
      canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
      canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
      canvasData.oldLeft = canvasData.left;
      canvasData.oldTop = canvasData.top;
      setStyle(this.canvas, assign({
        width: canvasData.width,
        height: canvasData.height
      }, getTransforms({
        translateX: canvasData.left,
        translateY: canvasData.top
      })));
      this.renderImage(changed);

      if (this.cropped && this.limited) {
        this.limitCropBox(true, true);
      }
    },
    renderImage: function renderImage(changed) {
      var canvasData = this.canvasData,
          imageData = this.imageData;
      var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
      var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
      assign(imageData, {
        width: width,
        height: height,
        left: (canvasData.width - width) / 2,
        top: (canvasData.height - height) / 2
      });
      setStyle(this.image, assign({
        width: imageData.width,
        height: imageData.height
      }, getTransforms(assign({
        translateX: imageData.left,
        translateY: imageData.top
      }, imageData))));

      if (changed) {
        this.output();
      }
    },
    initCropBox: function initCropBox() {
      var options = this.options,
          canvasData = this.canvasData;
      var aspectRatio = options.aspectRatio || options.initialAspectRatio;
      var autoCropArea = Number(options.autoCropArea) || 0.8;
      var cropBoxData = {
        width: canvasData.width,
        height: canvasData.height
      };

      if (aspectRatio) {
        if (canvasData.height * aspectRatio > canvasData.width) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.cropBoxData = cropBoxData;
      this.limitCropBox(true, true); // Initialize auto crop area

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

      cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
      cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
      cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
      cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;
      this.initialCropBoxData = assign({}, cropBoxData);
    },
    limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
      var options = this.options,
          containerData = this.containerData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData,
          limited = this.limited;
      var aspectRatio = options.aspectRatio;

      if (sizeLimited) {
        var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
        var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
        var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
        var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height

        minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
        minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

        if (aspectRatio) {
          if (minCropBoxWidth && minCropBoxHeight) {
            if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
              minCropBoxHeight = minCropBoxWidth / aspectRatio;
            } else {
              minCropBoxWidth = minCropBoxHeight * aspectRatio;
            }
          } else if (minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else if (minCropBoxHeight) {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }

          if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
            maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
          } else {
            maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
          }
        } // The minWidth/Height must be less than maxWidth/Height


        cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
        cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
        cropBoxData.maxWidth = maxCropBoxWidth;
        cropBoxData.maxHeight = maxCropBoxHeight;
      }

      if (positionLimited) {
        if (limited) {
          cropBoxData.minLeft = Math.max(0, canvasData.left);
          cropBoxData.minTop = Math.max(0, canvasData.top);
          cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
          cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
        } else {
          cropBoxData.minLeft = 0;
          cropBoxData.minTop = 0;
          cropBoxData.maxLeft = containerData.width - cropBoxData.width;
          cropBoxData.maxTop = containerData.height - cropBoxData.height;
        }
      }
    },
    renderCropBox: function renderCropBox() {
      var options = this.options,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData;

      if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
        cropBoxData.left = cropBoxData.oldLeft;
      }

      if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
        cropBoxData.top = cropBoxData.oldTop;
      }

      cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
      cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
      this.limitCropBox(false, true);
      cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
      cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
      cropBoxData.oldLeft = cropBoxData.left;
      cropBoxData.oldTop = cropBoxData.top;

      if (options.movable && options.cropBoxMovable) {
        // Turn to move the canvas when the crop box is equal to the container
        setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
      }

      setStyle(this.cropBox, assign({
        width: cropBoxData.width,
        height: cropBoxData.height
      }, getTransforms({
        translateX: cropBoxData.left,
        translateY: cropBoxData.top
      })));

      if (this.cropped && this.limited) {
        this.limitCanvas(true, true);
      }

      if (!this.disabled) {
        this.output();
      }
    },
    output: function output() {
      this.preview();
      dispatchEvent(this.element, EVENT_CROP, this.getData());
    }
  };

  var preview = {
    initPreview: function initPreview() {
      var element = this.element,
          crossOrigin = this.crossOrigin;
      var preview = this.options.preview;
      var url = crossOrigin ? this.crossOriginUrl : this.url;
      var alt = element.alt || 'The image to preview';
      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = url;
      image.alt = alt;
      this.viewBox.appendChild(image);
      this.viewBoxImage = image;

      if (!preview) {
        return;
      }

      var previews = preview;

      if (typeof preview === 'string') {
        previews = element.ownerDocument.querySelectorAll(preview);
      } else if (preview.querySelector) {
        previews = [preview];
      }

      this.previews = previews;
      forEach(previews, function (el) {
        var img = document.createElement('img'); // Save the original size for recover

        setData(el, DATA_PREVIEW, {
          width: el.offsetWidth,
          height: el.offsetHeight,
          html: el.innerHTML
        });

        if (crossOrigin) {
          img.crossOrigin = crossOrigin;
        }

        img.src = url;
        img.alt = alt;
        /**
         * Override img element styles
         * Add `display:block` to avoid margin top issue
         * Add `height:auto` to override `height` attribute on IE8
         * (Occur only when margin-top <= -height)
         */

        img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
        el.innerHTML = '';
        el.appendChild(img);
      });
    },
    resetPreview: function resetPreview() {
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        setStyle(element, {
          width: data.width,
          height: data.height
        });
        element.innerHTML = data.html;
        removeData(element, DATA_PREVIEW);
      });
    },
    preview: function preview() {
      var imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var cropBoxWidth = cropBoxData.width,
          cropBoxHeight = cropBoxData.height;
      var width = imageData.width,
          height = imageData.height;
      var left = cropBoxData.left - canvasData.left - imageData.left;
      var top = cropBoxData.top - canvasData.top - imageData.top;

      if (!this.cropped || this.disabled) {
        return;
      }

      setStyle(this.viewBoxImage, assign({
        width: width,
        height: height
      }, getTransforms(assign({
        translateX: -left,
        translateY: -top
      }, imageData))));
      forEach(this.previews, function (element) {
        var data = getData(element, DATA_PREVIEW);
        var originalWidth = data.width;
        var originalHeight = data.height;
        var newWidth = originalWidth;
        var newHeight = originalHeight;
        var ratio = 1;

        if (cropBoxWidth) {
          ratio = originalWidth / cropBoxWidth;
          newHeight = cropBoxHeight * ratio;
        }

        if (cropBoxHeight && newHeight > originalHeight) {
          ratio = originalHeight / cropBoxHeight;
          newWidth = cropBoxWidth * ratio;
          newHeight = originalHeight;
        }

        setStyle(element, {
          width: newWidth,
          height: newHeight
        });
        setStyle(element.getElementsByTagName('img')[0], assign({
          width: width * ratio,
          height: height * ratio
        }, getTransforms(assign({
          translateX: -left * ratio,
          translateY: -top * ratio
        }, imageData))));
      });
    }
  };

  var events = {
    bind: function bind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        addListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        addListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        addListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        addListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        addListener(element, EVENT_ZOOM, options.zoom);
      }

      addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

      if (options.zoomable && options.zoomOnWheel) {
        addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
      }

      addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
      addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

      if (options.responsive) {
        addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
      }
    },
    unbind: function unbind() {
      var element = this.element,
          options = this.options,
          cropper = this.cropper;

      if (isFunction(options.cropstart)) {
        removeListener(element, EVENT_CROP_START, options.cropstart);
      }

      if (isFunction(options.cropmove)) {
        removeListener(element, EVENT_CROP_MOVE, options.cropmove);
      }

      if (isFunction(options.cropend)) {
        removeListener(element, EVENT_CROP_END, options.cropend);
      }

      if (isFunction(options.crop)) {
        removeListener(element, EVENT_CROP, options.crop);
      }

      if (isFunction(options.zoom)) {
        removeListener(element, EVENT_ZOOM, options.zoom);
      }

      removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

      if (options.zoomable && options.zoomOnWheel) {
        removeListener(cropper, EVENT_WHEEL, this.onWheel, {
          passive: false,
          capture: true
        });
      }

      if (options.toggleDragModeOnDblclick) {
        removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
      }

      removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
      removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

      if (options.responsive) {
        removeListener(window, EVENT_RESIZE, this.onResize);
      }
    }
  };

  var handlers = {
    resize: function resize() {
      if (this.disabled) {
        return;
      }

      var options = this.options,
          container = this.container,
          containerData = this.containerData;
      var ratio = container.offsetWidth / containerData.width; // Resize when width changed or height changed

      if (ratio !== 1 || container.offsetHeight !== containerData.height) {
        var canvasData;
        var cropBoxData;

        if (options.restore) {
          canvasData = this.getCanvasData();
          cropBoxData = this.getCropBoxData();
        }

        this.render();

        if (options.restore) {
          this.setCanvasData(forEach(canvasData, function (n, i) {
            canvasData[i] = n * ratio;
          }));
          this.setCropBoxData(forEach(cropBoxData, function (n, i) {
            cropBoxData[i] = n * ratio;
          }));
        }
      }
    },
    dblclick: function dblclick() {
      if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
        return;
      }

      this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
    },
    wheel: function wheel(event) {
      var _this = this;

      var ratio = Number(this.options.wheelZoomRatio) || 0.1;
      var delta = 1;

      if (this.disabled) {
        return;
      }

      event.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

      if (this.wheeling) {
        return;
      }

      this.wheeling = true;
      setTimeout(function () {
        _this.wheeling = false;
      }, 50);

      if (event.deltaY) {
        delta = event.deltaY > 0 ? 1 : -1;
      } else if (event.wheelDelta) {
        delta = -event.wheelDelta / 120;
      } else if (event.detail) {
        delta = event.detail > 0 ? 1 : -1;
      }

      this.zoom(-delta * ratio, event);
    },
    cropStart: function cropStart(event) {
      var buttons = event.buttons,
          button = event.button;

      if (this.disabled // Handle mouse event and pointer event and ignore touch event
      || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && ( // No primary button (Usually the left button)
      isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 // Open context menu
      || event.ctrlKey)) {
        return;
      }

      var options = this.options,
          pointers = this.pointers;
      var action;

      if (event.changedTouches) {
        // Handle touch event
        forEach(event.changedTouches, function (touch) {
          pointers[touch.identifier] = getPointer(touch);
        });
      } else {
        // Handle mouse event and pointer event
        pointers[event.pointerId || 0] = getPointer(event);
      }

      if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
        action = ACTION_ZOOM;
      } else {
        action = getData(event.target, DATA_ACTION);
      }

      if (!REGEXP_ACTIONS.test(action)) {
        return;
      }

      if (dispatchEvent(this.element, EVENT_CROP_START, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      } // This line is required for preventing page zooming in iOS browsers


      event.preventDefault();
      this.action = action;
      this.cropping = false;

      if (action === ACTION_CROP) {
        this.cropping = true;
        addClass(this.dragBox, CLASS_MODAL);
      }
    },
    cropMove: function cropMove(event) {
      var action = this.action;

      if (this.disabled || !action) {
        return;
      }

      var pointers = this.pointers;
      event.preventDefault();

      if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
        originalEvent: event,
        action: action
      }) === false) {
        return;
      }

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          // The first parameter should not be undefined (#432)
          assign(pointers[touch.identifier] || {}, getPointer(touch, true));
        });
      } else {
        assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
      }

      this.change(event);
    },
    cropEnd: function cropEnd(event) {
      if (this.disabled) {
        return;
      }

      var action = this.action,
          pointers = this.pointers;

      if (event.changedTouches) {
        forEach(event.changedTouches, function (touch) {
          delete pointers[touch.identifier];
        });
      } else {
        delete pointers[event.pointerId || 0];
      }

      if (!action) {
        return;
      }

      event.preventDefault();

      if (!Object.keys(pointers).length) {
        this.action = '';
      }

      if (this.cropping) {
        this.cropping = false;
        toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
      }

      dispatchEvent(this.element, EVENT_CROP_END, {
        originalEvent: event,
        action: action
      });
    }
  };

  var change = {
    change: function change(event) {
      var options = this.options,
          canvasData = this.canvasData,
          containerData = this.containerData,
          cropBoxData = this.cropBoxData,
          pointers = this.pointers;
      var action = this.action;
      var aspectRatio = options.aspectRatio;
      var left = cropBoxData.left,
          top = cropBoxData.top,
          width = cropBoxData.width,
          height = cropBoxData.height;
      var right = left + width;
      var bottom = top + height;
      var minLeft = 0;
      var minTop = 0;
      var maxWidth = containerData.width;
      var maxHeight = containerData.height;
      var renderable = true;
      var offset; // Locking aspect ratio in "free mode" by holding shift key

      if (!aspectRatio && event.shiftKey) {
        aspectRatio = width && height ? width / height : 1;
      }

      if (this.limited) {
        minLeft = cropBoxData.minLeft;
        minTop = cropBoxData.minTop;
        maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
        maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
      }

      var pointer = pointers[Object.keys(pointers)[0]];
      var range = {
        x: pointer.endX - pointer.startX,
        y: pointer.endY - pointer.startY
      };

      var check = function check(side) {
        switch (side) {
          case ACTION_EAST:
            if (right + range.x > maxWidth) {
              range.x = maxWidth - right;
            }

            break;

          case ACTION_WEST:
            if (left + range.x < minLeft) {
              range.x = minLeft - left;
            }

            break;

          case ACTION_NORTH:
            if (top + range.y < minTop) {
              range.y = minTop - top;
            }

            break;

          case ACTION_SOUTH:
            if (bottom + range.y > maxHeight) {
              range.y = maxHeight - bottom;
            }

            break;
        }
      };

      switch (action) {
        // Move crop box
        case ACTION_ALL:
          left += range.x;
          top += range.y;
          break;
        // Resize crop box

        case ACTION_EAST:
          if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_EAST);
          width += range.x;

          if (width < 0) {
            action = ACTION_WEST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_NORTH:
          if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;

          if (height < 0) {
            action = ACTION_SOUTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_WEST:
          if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
            renderable = false;
            break;
          }

          check(ACTION_WEST);
          width -= range.x;
          left += range.x;

          if (width < 0) {
            action = ACTION_EAST;
            width = -width;
            left -= width;
          }

          if (aspectRatio) {
            height = width / aspectRatio;
            top += (cropBoxData.height - height) / 2;
          }

          break;

        case ACTION_SOUTH:
          if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
            renderable = false;
            break;
          }

          check(ACTION_SOUTH);
          height += range.y;

          if (height < 0) {
            action = ACTION_NORTH;
            height = -height;
            top -= height;
          }

          if (aspectRatio) {
            width = height * aspectRatio;
            left += (cropBoxData.width - width) / 2;
          }

          break;

        case ACTION_NORTH_EAST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
          } else {
            check(ACTION_NORTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_NORTH_WEST:
          if (aspectRatio) {
            if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
              renderable = false;
              break;
            }

            check(ACTION_NORTH);
            height -= range.y;
            top += range.y;
            width = height * aspectRatio;
            left += cropBoxData.width - width;
          } else {
            check(ACTION_NORTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y <= 0 && top <= minTop) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y <= 0) {
              if (top > minTop) {
                height -= range.y;
                top += range.y;
              }
            } else {
              height -= range.y;
              top += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_SOUTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_NORTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_SOUTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_WEST:
          if (aspectRatio) {
            if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_WEST);
            width -= range.x;
            left += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_WEST);

            if (range.x <= 0) {
              if (left > minLeft) {
                width -= range.x;
                left += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width -= range.x;
              left += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_EAST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            top -= height;
          }

          break;

        case ACTION_SOUTH_EAST:
          if (aspectRatio) {
            if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
              renderable = false;
              break;
            }

            check(ACTION_EAST);
            width += range.x;
            height = width / aspectRatio;
          } else {
            check(ACTION_SOUTH);
            check(ACTION_EAST);

            if (range.x >= 0) {
              if (right < maxWidth) {
                width += range.x;
              } else if (range.y >= 0 && bottom >= maxHeight) {
                renderable = false;
              }
            } else {
              width += range.x;
            }

            if (range.y >= 0) {
              if (bottom < maxHeight) {
                height += range.y;
              }
            } else {
              height += range.y;
            }
          }

          if (width < 0 && height < 0) {
            action = ACTION_NORTH_WEST;
            height = -height;
            width = -width;
            top -= height;
            left -= width;
          } else if (width < 0) {
            action = ACTION_SOUTH_WEST;
            width = -width;
            left -= width;
          } else if (height < 0) {
            action = ACTION_NORTH_EAST;
            height = -height;
            top -= height;
          }

          break;
        // Move canvas

        case ACTION_MOVE:
          this.move(range.x, range.y);
          renderable = false;
          break;
        // Zoom canvas

        case ACTION_ZOOM:
          this.zoom(getMaxZoomRatio(pointers), event);
          renderable = false;
          break;
        // Create crop box

        case ACTION_CROP:
          if (!range.x || !range.y) {
            renderable = false;
            break;
          }

          offset = getOffset(this.cropper);
          left = pointer.startX - offset.left;
          top = pointer.startY - offset.top;
          width = cropBoxData.minWidth;
          height = cropBoxData.minHeight;

          if (range.x > 0) {
            action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
          } else if (range.x < 0) {
            left -= width;
            action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
          }

          if (range.y < 0) {
            top -= height;
          } // Show the crop box if is hidden


          if (!this.cropped) {
            removeClass(this.cropBox, CLASS_HIDDEN);
            this.cropped = true;

            if (this.limited) {
              this.limitCropBox(true, true);
            }
          }

          break;
      }

      if (renderable) {
        cropBoxData.width = width;
        cropBoxData.height = height;
        cropBoxData.left = left;
        cropBoxData.top = top;
        this.action = action;
        this.renderCropBox();
      } // Override


      forEach(pointers, function (p) {
        p.startX = p.endX;
        p.startY = p.endY;
      });
    }
  };

  var methods = {
    // Show the crop box manually
    crop: function crop() {
      if (this.ready && !this.cropped && !this.disabled) {
        this.cropped = true;
        this.limitCropBox(true, true);

        if (this.options.modal) {
          addClass(this.dragBox, CLASS_MODAL);
        }

        removeClass(this.cropBox, CLASS_HIDDEN);
        this.setCropBoxData(this.initialCropBoxData);
      }

      return this;
    },
    // Reset the image and crop box to their initial states
    reset: function reset() {
      if (this.ready && !this.disabled) {
        this.imageData = assign({}, this.initialImageData);
        this.canvasData = assign({}, this.initialCanvasData);
        this.cropBoxData = assign({}, this.initialCropBoxData);
        this.renderCanvas();

        if (this.cropped) {
          this.renderCropBox();
        }
      }

      return this;
    },
    // Clear the crop box
    clear: function clear() {
      if (this.cropped && !this.disabled) {
        assign(this.cropBoxData, {
          left: 0,
          top: 0,
          width: 0,
          height: 0
        });
        this.cropped = false;
        this.renderCropBox();
        this.limitCanvas(true, true); // Render canvas after crop box rendered

        this.renderCanvas();
        removeClass(this.dragBox, CLASS_MODAL);
        addClass(this.cropBox, CLASS_HIDDEN);
      }

      return this;
    },

    /**
     * Replace the image's src and rebuild the cropper
     * @param {string} url - The new URL.
     * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
     * @returns {Cropper} this
     */
    replace: function replace(url) {
      var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.disabled && url) {
        if (this.isImg) {
          this.element.src = url;
        }

        if (hasSameSize) {
          this.url = url;
          this.image.src = url;

          if (this.ready) {
            this.viewBoxImage.src = url;
            forEach(this.previews, function (element) {
              element.getElementsByTagName('img')[0].src = url;
            });
          }
        } else {
          if (this.isImg) {
            this.replaced = true;
          }

          this.options.data = null;
          this.uncreate();
          this.load(url);
        }
      }

      return this;
    },
    // Enable (unfreeze) the cropper
    enable: function enable() {
      if (this.ready && this.disabled) {
        this.disabled = false;
        removeClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },
    // Disable (freeze) the cropper
    disable: function disable() {
      if (this.ready && !this.disabled) {
        this.disabled = true;
        addClass(this.cropper, CLASS_DISABLED);
      }

      return this;
    },

    /**
     * Destroy the cropper and remove the instance from the image
     * @returns {Cropper} this
     */
    destroy: function destroy() {
      var element = this.element;

      if (!element[NAMESPACE]) {
        return this;
      }

      element[NAMESPACE] = undefined;

      if (this.isImg && this.replaced) {
        element.src = this.originalUrl;
      }

      this.uncreate();
      return this;
    },

    /**
     * Move the canvas with relative offsets
     * @param {number} offsetX - The relative offset distance on the x-axis.
     * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
     * @returns {Cropper} this
     */
    move: function move(offsetX) {
      var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
      var _this$canvasData = this.canvasData,
          left = _this$canvasData.left,
          top = _this$canvasData.top;
      return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
    },

    /**
     * Move the canvas to an absolute point
     * @param {number} x - The x-axis coordinate.
     * @param {number} [y=x] - The y-axis coordinate.
     * @returns {Cropper} this
     */
    moveTo: function moveTo(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var canvasData = this.canvasData;
      var changed = false;
      x = Number(x);
      y = Number(y);

      if (this.ready && !this.disabled && this.options.movable) {
        if (isNumber(x)) {
          canvasData.left = x;
          changed = true;
        }

        if (isNumber(y)) {
          canvasData.top = y;
          changed = true;
        }

        if (changed) {
          this.renderCanvas(true);
        }
      }

      return this;
    },

    /**
     * Zoom the canvas with a relative ratio
     * @param {number} ratio - The target ratio.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoom: function zoom(ratio, _originalEvent) {
      var canvasData = this.canvasData;
      ratio = Number(ratio);

      if (ratio < 0) {
        ratio = 1 / (1 - ratio);
      } else {
        ratio = 1 + ratio;
      }

      return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
    },

    /**
     * Zoom the canvas to an absolute ratio
     * @param {number} ratio - The target ratio.
     * @param {Object} pivot - The zoom pivot point coordinate.
     * @param {Event} _originalEvent - The original event if any.
     * @returns {Cropper} this
     */
    zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
      var options = this.options,
          canvasData = this.canvasData;
      var width = canvasData.width,
          height = canvasData.height,
          naturalWidth = canvasData.naturalWidth,
          naturalHeight = canvasData.naturalHeight;
      ratio = Number(ratio);

      if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
        var newWidth = naturalWidth * ratio;
        var newHeight = naturalHeight * ratio;

        if (dispatchEvent(this.element, EVENT_ZOOM, {
          ratio: ratio,
          oldRatio: width / naturalWidth,
          originalEvent: _originalEvent
        }) === false) {
          return this;
        }

        if (_originalEvent) {
          var pointers = this.pointers;
          var offset = getOffset(this.cropper);
          var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
            pageX: _originalEvent.pageX,
            pageY: _originalEvent.pageY
          }; // Zoom from the triggering point of the event

          canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
        } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
          canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
          canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
        } else {
          // Zoom from the center of the canvas
          canvasData.left -= (newWidth - width) / 2;
          canvasData.top -= (newHeight - height) / 2;
        }

        canvasData.width = newWidth;
        canvasData.height = newHeight;
        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Rotate the canvas with a relative degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotate: function rotate(degree) {
      return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
    },

    /**
     * Rotate the canvas to an absolute degree
     * @param {number} degree - The rotate degree.
     * @returns {Cropper} this
     */
    rotateTo: function rotateTo(degree) {
      degree = Number(degree);

      if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
        this.imageData.rotate = degree % 360;
        this.renderCanvas(true, true);
      }

      return this;
    },

    /**
     * Scale the image on the x-axis.
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @returns {Cropper} this
     */
    scaleX: function scaleX(_scaleX) {
      var scaleY = this.imageData.scaleY;
      return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
    },

    /**
     * Scale the image on the y-axis.
     * @param {number} scaleY - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scaleY: function scaleY(_scaleY) {
      var scaleX = this.imageData.scaleX;
      return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
    },

    /**
     * Scale the image
     * @param {number} scaleX - The scale ratio on the x-axis.
     * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
     * @returns {Cropper} this
     */
    scale: function scale(scaleX) {
      var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
      var imageData = this.imageData;
      var transformed = false;
      scaleX = Number(scaleX);
      scaleY = Number(scaleY);

      if (this.ready && !this.disabled && this.options.scalable) {
        if (isNumber(scaleX)) {
          imageData.scaleX = scaleX;
          transformed = true;
        }

        if (isNumber(scaleY)) {
          imageData.scaleY = scaleY;
          transformed = true;
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }
      }

      return this;
    },

    /**
     * Get the cropped area position and size data (base on the original image)
     * @param {boolean} [rounded=false] - Indicate if round the data values or not.
     * @returns {Object} The result cropped data.
     */
    getData: function getData() {
      var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData,
          cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          x: cropBoxData.left - canvasData.left,
          y: cropBoxData.top - canvasData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
        var ratio = imageData.width / imageData.naturalWidth;
        forEach(data, function (n, i) {
          data[i] = n / ratio;
        });

        if (rounded) {
          // In case rounding off leads to extra 1px in right or bottom border
          // we should round the top-left corner and the dimension (#343).
          var bottom = Math.round(data.y + data.height);
          var right = Math.round(data.x + data.width);
          data.x = Math.round(data.x);
          data.y = Math.round(data.y);
          data.width = right - data.x;
          data.height = bottom - data.y;
        }
      } else {
        data = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }

      if (options.rotatable) {
        data.rotate = imageData.rotate || 0;
      }

      if (options.scalable) {
        data.scaleX = imageData.scaleX || 1;
        data.scaleY = imageData.scaleY || 1;
      }

      return data;
    },

    /**
     * Set the cropped area position and size with new data
     * @param {Object} data - The new data.
     * @returns {Cropper} this
     */
    setData: function setData(data) {
      var options = this.options,
          imageData = this.imageData,
          canvasData = this.canvasData;
      var cropBoxData = {};

      if (this.ready && !this.disabled && isPlainObject(data)) {
        var transformed = false;

        if (options.rotatable) {
          if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
            imageData.rotate = data.rotate;
            transformed = true;
          }
        }

        if (options.scalable) {
          if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
            imageData.scaleX = data.scaleX;
            transformed = true;
          }

          if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
            imageData.scaleY = data.scaleY;
            transformed = true;
          }
        }

        if (transformed) {
          this.renderCanvas(true, true);
        }

        var ratio = imageData.width / imageData.naturalWidth;

        if (isNumber(data.x)) {
          cropBoxData.left = data.x * ratio + canvasData.left;
        }

        if (isNumber(data.y)) {
          cropBoxData.top = data.y * ratio + canvasData.top;
        }

        if (isNumber(data.width)) {
          cropBoxData.width = data.width * ratio;
        }

        if (isNumber(data.height)) {
          cropBoxData.height = data.height * ratio;
        }

        this.setCropBoxData(cropBoxData);
      }

      return this;
    },

    /**
     * Get the container size data.
     * @returns {Object} The result container data.
     */
    getContainerData: function getContainerData() {
      return this.ready ? assign({}, this.containerData) : {};
    },

    /**
     * Get the image position and size data.
     * @returns {Object} The result image data.
     */
    getImageData: function getImageData() {
      return this.sized ? assign({}, this.imageData) : {};
    },

    /**
     * Get the canvas position and size data.
     * @returns {Object} The result canvas data.
     */
    getCanvasData: function getCanvasData() {
      var canvasData = this.canvasData;
      var data = {};

      if (this.ready) {
        forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
          data[n] = canvasData[n];
        });
      }

      return data;
    },

    /**
     * Set the canvas position and size with new data.
     * @param {Object} data - The new canvas data.
     * @returns {Cropper} this
     */
    setCanvasData: function setCanvasData(data) {
      var canvasData = this.canvasData;
      var aspectRatio = canvasData.aspectRatio;

      if (this.ready && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          canvasData.left = data.left;
        }

        if (isNumber(data.top)) {
          canvasData.top = data.top;
        }

        if (isNumber(data.width)) {
          canvasData.width = data.width;
          canvasData.height = data.width / aspectRatio;
        } else if (isNumber(data.height)) {
          canvasData.height = data.height;
          canvasData.width = data.height * aspectRatio;
        }

        this.renderCanvas(true);
      }

      return this;
    },

    /**
     * Get the crop box position and size data.
     * @returns {Object} The result crop box data.
     */
    getCropBoxData: function getCropBoxData() {
      var cropBoxData = this.cropBoxData;
      var data;

      if (this.ready && this.cropped) {
        data = {
          left: cropBoxData.left,
          top: cropBoxData.top,
          width: cropBoxData.width,
          height: cropBoxData.height
        };
      }

      return data || {};
    },

    /**
     * Set the crop box position and size with new data.
     * @param {Object} data - The new crop box data.
     * @returns {Cropper} this
     */
    setCropBoxData: function setCropBoxData(data) {
      var cropBoxData = this.cropBoxData;
      var aspectRatio = this.options.aspectRatio;
      var widthChanged;
      var heightChanged;

      if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
        if (isNumber(data.left)) {
          cropBoxData.left = data.left;
        }

        if (isNumber(data.top)) {
          cropBoxData.top = data.top;
        }

        if (isNumber(data.width) && data.width !== cropBoxData.width) {
          widthChanged = true;
          cropBoxData.width = data.width;
        }

        if (isNumber(data.height) && data.height !== cropBoxData.height) {
          heightChanged = true;
          cropBoxData.height = data.height;
        }

        if (aspectRatio) {
          if (widthChanged) {
            cropBoxData.height = cropBoxData.width / aspectRatio;
          } else if (heightChanged) {
            cropBoxData.width = cropBoxData.height * aspectRatio;
          }
        }

        this.renderCropBox();
      }

      return this;
    },

    /**
     * Get a canvas drawn the cropped image.
     * @param {Object} [options={}] - The config options.
     * @returns {HTMLCanvasElement} - The result canvas.
     */
    getCroppedCanvas: function getCroppedCanvas() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.ready || !window.HTMLCanvasElement) {
        return null;
      }

      var canvasData = this.canvasData;
      var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

      if (!this.cropped) {
        return source;
      }

      var _this$getData = this.getData(),
          initialX = _this$getData.x,
          initialY = _this$getData.y,
          initialWidth = _this$getData.width,
          initialHeight = _this$getData.height;

      var ratio = source.width / Math.floor(canvasData.naturalWidth);

      if (ratio !== 1) {
        initialX *= ratio;
        initialY *= ratio;
        initialWidth *= ratio;
        initialHeight *= ratio;
      }

      var aspectRatio = initialWidth / initialHeight;
      var maxSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.maxWidth || Infinity,
        height: options.maxHeight || Infinity
      });
      var minSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.minWidth || 0,
        height: options.minHeight || 0
      }, 'cover');

      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: options.width || (ratio !== 1 ? source.width : initialWidth),
        height: options.height || (ratio !== 1 ? source.height : initialHeight)
      }),
          width = _getAdjustedSizes.width,
          height = _getAdjustedSizes.height;

      width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
      height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d');
      canvas.width = normalizeDecimalNumber(width);
      canvas.height = normalizeDecimalNumber(height);
      context.fillStyle = options.fillColor || 'transparent';
      context.fillRect(0, 0, width, height);
      var _options$imageSmoothi = options.imageSmoothingEnabled,
          imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
          imageSmoothingQuality = options.imageSmoothingQuality;
      context.imageSmoothingEnabled = imageSmoothingEnabled;

      if (imageSmoothingQuality) {
        context.imageSmoothingQuality = imageSmoothingQuality;
      } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


      var sourceWidth = source.width;
      var sourceHeight = source.height; // Source canvas parameters

      var srcX = initialX;
      var srcY = initialY;
      var srcWidth;
      var srcHeight; // Destination canvas parameters

      var dstX;
      var dstY;
      var dstWidth;
      var dstHeight;

      if (srcX <= -initialWidth || srcX > sourceWidth) {
        srcX = 0;
        srcWidth = 0;
        dstX = 0;
        dstWidth = 0;
      } else if (srcX <= 0) {
        dstX = -srcX;
        srcX = 0;
        srcWidth = Math.min(sourceWidth, initialWidth + srcX);
        dstWidth = srcWidth;
      } else if (srcX <= sourceWidth) {
        dstX = 0;
        srcWidth = Math.min(initialWidth, sourceWidth - srcX);
        dstWidth = srcWidth;
      }

      if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
        srcY = 0;
        srcHeight = 0;
        dstY = 0;
        dstHeight = 0;
      } else if (srcY <= 0) {
        dstY = -srcY;
        srcY = 0;
        srcHeight = Math.min(sourceHeight, initialHeight + srcY);
        dstHeight = srcHeight;
      } else if (srcY <= sourceHeight) {
        dstY = 0;
        srcHeight = Math.min(initialHeight, sourceHeight - srcY);
        dstHeight = srcHeight;
      }

      var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

      if (dstWidth > 0 && dstHeight > 0) {
        var scale = width / initialWidth;
        params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
      } // All the numerical parameters should be integer for `drawImage`
      // https://github.com/fengyuanchen/cropper/issues/476


      context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
        return Math.floor(normalizeDecimalNumber(param));
      }))));
      return canvas;
    },

    /**
     * Change the aspect ratio of the crop box.
     * @param {number} aspectRatio - The new aspect ratio.
     * @returns {Cropper} this
     */
    setAspectRatio: function setAspectRatio(aspectRatio) {
      var options = this.options;

      if (!this.disabled && !isUndefined(aspectRatio)) {
        // 0 -> NaN
        options.aspectRatio = Math.max(0, aspectRatio) || NaN;

        if (this.ready) {
          this.initCropBox();

          if (this.cropped) {
            this.renderCropBox();
          }
        }
      }

      return this;
    },

    /**
     * Change the drag mode.
     * @param {string} mode - The new drag mode.
     * @returns {Cropper} this
     */
    setDragMode: function setDragMode(mode) {
      var options = this.options,
          dragBox = this.dragBox,
          face = this.face;

      if (this.ready && !this.disabled) {
        var croppable = mode === DRAG_MODE_CROP;
        var movable = options.movable && mode === DRAG_MODE_MOVE;
        mode = croppable || movable ? mode : DRAG_MODE_NONE;
        options.dragMode = mode;
        setData(dragBox, DATA_ACTION, mode);
        toggleClass(dragBox, CLASS_CROP, croppable);
        toggleClass(dragBox, CLASS_MOVE, movable);

        if (!options.cropBoxMovable) {
          // Sync drag mode to crop box when it is not movable
          setData(face, DATA_ACTION, mode);
          toggleClass(face, CLASS_CROP, croppable);
          toggleClass(face, CLASS_MOVE, movable);
        }
      }

      return this;
    }
  };

  var AnotherCropper = WINDOW.Cropper;

  var Cropper = /*#__PURE__*/function () {
    /**
     * Create a new Cropper.
     * @param {Element} element - The target element for cropping.
     * @param {Object} [options={}] - The configuration options.
     */
    function Cropper(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Cropper);

      if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
        throw new Error('The first argument is required and must be an <img> or <canvas> element.');
      }

      this.element = element;
      this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
      this.cropped = false;
      this.disabled = false;
      this.pointers = {};
      this.ready = false;
      this.reloading = false;
      this.replaced = false;
      this.sized = false;
      this.sizing = false;
      this.init();
    }

    _createClass(Cropper, [{
      key: "init",
      value: function init() {
        var element = this.element;
        var tagName = element.tagName.toLowerCase();
        var url;

        if (element[NAMESPACE]) {
          return;
        }

        element[NAMESPACE] = this;

        if (tagName === 'img') {
          this.isImg = true; // e.g.: "img/picture.jpg"

          url = element.getAttribute('src') || '';
          this.originalUrl = url; // Stop when it's a blank image

          if (!url) {
            return;
          } // e.g.: "https://example.com/img/picture.jpg"


          url = element.src;
        } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
          url = element.toDataURL();
        }

        this.load(url);
      }
    }, {
      key: "load",
      value: function load(url) {
        var _this = this;

        if (!url) {
          return;
        }

        this.url = url;
        this.imageData = {};
        var element = this.element,
            options = this.options;

        if (!options.rotatable && !options.scalable) {
          options.checkOrientation = false;
        } // Only IE10+ supports Typed Arrays


        if (!options.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        } // Detect the mime type of the image directly if it is a Data URL


        if (REGEXP_DATA_URL.test(url)) {
          // Read ArrayBuffer from Data URL of JPEG images directly for better performance
          if (REGEXP_DATA_URL_JPEG.test(url)) {
            this.read(dataURLToArrayBuffer(url));
          } else {
            // Only a JPEG image may contains Exif Orientation information,
            // the rest types of Data URLs are not necessary to check orientation at all.
            this.clone();
          }

          return;
        } // 1. Detect the mime type of the image by a XMLHttpRequest.
        // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.


        var xhr = new XMLHttpRequest();
        var clone = this.clone.bind(this);
        this.reloading = true;
        this.xhr = xhr; // 1. Cross origin requests are only supported for protocol schemes:
        // http, https, data, chrome, chrome-extension.
        // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
        // in some browsers as IE11 and Safari.

        xhr.onabort = clone;
        xhr.onerror = clone;
        xhr.ontimeout = clone;

        xhr.onprogress = function () {
          // Abort the request directly if it not a JPEG image for better performance
          if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
            xhr.abort();
          }
        };

        xhr.onload = function () {
          _this.read(xhr.response);
        };

        xhr.onloadend = function () {
          _this.reloading = false;
          _this.xhr = null;
        }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error


        if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
          url = addTimestamp(url);
        }

        xhr.open('GET', url);
        xhr.responseType = 'arraybuffer';
        xhr.withCredentials = element.crossOrigin === 'use-credentials';
        xhr.send();
      }
    }, {
      key: "read",
      value: function read(arrayBuffer) {
        var options = this.options,
            imageData = this.imageData; // Reset the orientation value to its default value 1
        // as some iOS browsers will render image with its orientation

        var orientation = resetAndGetOrientation(arrayBuffer);
        var rotate = 0;
        var scaleX = 1;
        var scaleY = 1;

        if (orientation > 1) {
          // Generate a new URL which has the default orientation value
          this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);

          var _parseOrientation = parseOrientation(orientation);

          rotate = _parseOrientation.rotate;
          scaleX = _parseOrientation.scaleX;
          scaleY = _parseOrientation.scaleY;
        }

        if (options.rotatable) {
          imageData.rotate = rotate;
        }

        if (options.scalable) {
          imageData.scaleX = scaleX;
          imageData.scaleY = scaleY;
        }

        this.clone();
      }
    }, {
      key: "clone",
      value: function clone() {
        var element = this.element,
            url = this.url;
        var crossOrigin = element.crossOrigin;
        var crossOriginUrl = url;

        if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
          if (!crossOrigin) {
            crossOrigin = 'anonymous';
          } // Bust cache when there is not a "crossOrigin" property (#519)


          crossOriginUrl = addTimestamp(url);
        }

        this.crossOrigin = crossOrigin;
        this.crossOriginUrl = crossOriginUrl;
        var image = document.createElement('img');

        if (crossOrigin) {
          image.crossOrigin = crossOrigin;
        }

        image.src = crossOriginUrl || url;
        image.alt = element.alt || 'The image to crop';
        this.image = image;
        image.onload = this.start.bind(this);
        image.onerror = this.stop.bind(this);
        addClass(image, CLASS_HIDE);
        element.parentNode.insertBefore(image, element.nextSibling);
      }
    }, {
      key: "start",
      value: function start() {
        var _this2 = this;

        var image = this.image;
        image.onload = null;
        image.onerror = null;
        this.sizing = true; // Match all browsers that use WebKit as the layout engine in iOS devices,
        // such as Safari for iOS, Chrome for iOS, and in-app browsers.

        var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);

        var done = function done(naturalWidth, naturalHeight) {
          assign(_this2.imageData, {
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            aspectRatio: naturalWidth / naturalHeight
          });
          _this2.sizing = false;
          _this2.sized = true;

          _this2.build();
        }; // Most modern browsers (excepts iOS WebKit)


        if (image.naturalWidth && !isIOSWebKit) {
          done(image.naturalWidth, image.naturalHeight);
          return;
        }

        var sizingImage = document.createElement('img');
        var body = document.body || document.documentElement;
        this.sizingImage = sizingImage;

        sizingImage.onload = function () {
          done(sizingImage.width, sizingImage.height);

          if (!isIOSWebKit) {
            body.removeChild(sizingImage);
          }
        };

        sizingImage.src = image.src; // iOS WebKit will convert the image automatically
        // with its orientation once append it into DOM (#279)

        if (!isIOSWebKit) {
          sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
          body.appendChild(sizingImage);
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var image = this.image;
        image.onload = null;
        image.onerror = null;
        image.parentNode.removeChild(image);
        this.image = null;
      }
    }, {
      key: "build",
      value: function build() {
        if (!this.sized || this.ready) {
          return;
        }

        var element = this.element,
            options = this.options,
            image = this.image; // Create cropper elements

        var container = element.parentNode;
        var template = document.createElement('div');
        template.innerHTML = TEMPLATE;
        var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
        var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
        var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
        var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
        var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
        this.container = container;
        this.cropper = cropper;
        this.canvas = canvas;
        this.dragBox = dragBox;
        this.cropBox = cropBox;
        this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
        this.face = face;
        canvas.appendChild(image); // Hide the original image

        addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

        container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

        if (!this.isImg) {
          removeClass(image, CLASS_HIDE);
        }

        this.initPreview();
        this.bind();
        options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
        options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
        options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
        addClass(cropBox, CLASS_HIDDEN);

        if (!options.guides) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
        }

        if (!options.center) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
        }

        if (options.background) {
          addClass(cropper, "".concat(NAMESPACE, "-bg"));
        }

        if (!options.highlight) {
          addClass(face, CLASS_INVISIBLE);
        }

        if (options.cropBoxMovable) {
          addClass(face, CLASS_MOVE);
          setData(face, DATA_ACTION, ACTION_ALL);
        }

        if (!options.cropBoxResizable) {
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
          addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
        }

        this.render();
        this.ready = true;
        this.setDragMode(options.dragMode);

        if (options.autoCrop) {
          this.crop();
        }

        this.setData(options.data);

        if (isFunction(options.ready)) {
          addListener(element, EVENT_READY, options.ready, {
            once: true
          });
        }

        dispatchEvent(element, EVENT_READY);
      }
    }, {
      key: "unbuild",
      value: function unbuild() {
        if (!this.ready) {
          return;
        }

        this.ready = false;
        this.unbind();
        this.resetPreview();
        this.cropper.parentNode.removeChild(this.cropper);
        removeClass(this.element, CLASS_HIDDEN);
      }
    }, {
      key: "uncreate",
      value: function uncreate() {
        if (this.ready) {
          this.unbuild();
          this.ready = false;
          this.cropped = false;
        } else if (this.sizing) {
          this.sizingImage.onload = null;
          this.sizing = false;
          this.sized = false;
        } else if (this.reloading) {
          this.xhr.onabort = null;
          this.xhr.abort();
        } else if (this.image) {
          this.stop();
        }
      }
      /**
       * Get the no conflict cropper class.
       * @returns {Cropper} The cropper class.
       */

    }], [{
      key: "noConflict",
      value: function noConflict() {
        window.Cropper = AnotherCropper;
        return Cropper;
      }
      /**
       * Change the default options.
       * @param {Object} options - The new default options.
       */

    }, {
      key: "setDefaults",
      value: function setDefaults(options) {
        assign(DEFAULTS, isPlainObject(options) && options);
      }
    }]);

    return Cropper;
  }();

  assign(Cropper.prototype, render, preview, events, handlers, change, methods);

  return Cropper;

})));


/***/ })

});