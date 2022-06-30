/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-property-decorator */ \"./node_modules/vue-property-decorator/lib/index.js\");\n/* harmony import */ var _components_Navigater_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Navigater.vue */ \"./src/components/Navigater.vue\");\n/* harmony import */ var _components_Main_UI_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Main_UI.vue */ \"./src/components/Main_UI.vue\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue_property_decorator__WEBPACK_IMPORTED_MODULE_0__[\"Vue\"].extend({\n    name: \"App\",\n    components: {\n        Navigater: _components_Navigater_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        MainUI: _components_Main_UI_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    },\n    methods: {},\n}));\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/ts-loader??ref--14-1!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Main_UI.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Main_UI.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var merge_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! merge-images */ \"./node_modules/merge-images/dist/index.es2015.js\");\n/* harmony import */ var text2png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! text2png */ \"./node_modules/text2png/index.js\");\n/* harmony import */ var text2png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(text2png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_data_fonts_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/data/fonts.ts */ \"./src/assets/data/fonts.ts\");\n/* harmony import */ var _graphql_server_conn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphql/server_conn */ \"./src/graphql/server_conn.ts\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  name: \"Main\",\n  data() {\n    return {\n      fonts: _assets_data_fonts_ts__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      imageLink: \"\",\n      input_data: \"\",\n      text_data: \"\",\n      image_url: \"\",\n      text_X_val: 0,\n      text_Y_val: 0,\n      font_size: 40,\n      font: \"Arial\",\n      font_color: \"#000000\",\n      image_width: 0,\n      image_height: 0,\n    };\n  },\n  beforeCreate() {\n    Object(_graphql_server_conn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(navigator) \n  },\n  methods: {\n    async make_text2png() {\n      this.text_data = text2png__WEBPACK_IMPORTED_MODULE_2___default()(this.input_data, {\n        color: this.font_color,\n        font: `${this.font_size}px ${this.font}`,\n\n        output: \"dataURL\",\n      });\n    },\n    async make_mergeImages(url, text) {\n      try {\n        await Object(merge_images__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\n          { src: url, x: 0, y: 0 },\n          { src: text, x: this.text_X_val, y: this.text_Y_val },\n        ]).then((b64) => (this.imageLink = b64));\n      } catch (e) {\n        console.log(e);\n      }\n    },\n    upload(e) {\n      this.imageLink = URL.createObjectURL(e.target.files[0]);\n      this.make_text2png();\n      var file = e.target.files[0];\n      this.image_url = window.URL.createObjectURL(file);\n      this.text_data == \"data:,\"\n        ? null\n        : this.make_mergeImages(this.image_url, this.text_data);\n    },\n    img_update() {\n      this.image_url != \"\" && this.text_data != \"\"\n        ? (this.make_text2png(),\n          (this.image_width = document.getElementById(\"img\").naturalWidth),\n          (this.image_height = document.getElementById(\"img\").naturalHeight),\n          this.make_mergeImages(this.image_url, this.text_data))\n        : null;\n    },\n  },\n}));\n\n\n//# sourceURL=webpack:///./src/components/Main_UI.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navigater.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navigater.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n  name: \"Navigater\",\n}));\n\n\n//# sourceURL=webpack:///./src/components/Navigater.vue?./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b9138116-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9138116-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"app\" } }, [_c(\"Navigater\"), _c(\"MainUI\")], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22b9138116-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b9138116-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Main_UI.vue?vue&type=template&id=348c97da&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9138116-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Main_UI.vue?vue&type=template&id=348c97da&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"app\" } }, [\n    _c(\"div\", { staticClass: \"filebox\" }, [\n      _c(\"input\", {\n        staticClass: \"filebox\",\n        attrs: { accept: \"image/*\", type: \"file\", id: \"file\" },\n        on: { change: _vm.upload },\n      }),\n      _c(\"label\", { staticClass: \"btn btn-margin\", attrs: { for: \"file\" } }, [\n        _vm._v(\"사진찾기\"),\n      ]),\n      _c(\"input\", { attrs: { type: \"file\", id: \"file\" } }),\n      _c(\n        \"label\",\n        {\n          staticClass: \"btn btn-primary modal-button\",\n          attrs: { for: \"my-modal-2\" },\n        },\n        [_vm._v(\"text\")]\n      ),\n    ]),\n    _c(\"input\", {\n      staticClass: \"modal-toggle\",\n      attrs: { type: \"checkbox\", id: \"my-modal-2\" },\n    }),\n    _c(\"div\", { staticClass: \"modal\" }, [\n      _c(\"div\", { staticClass: \"modal-box\" }, [\n        _c(\"label\", { staticClass: \"label-text\", attrs: { for: \"text\" } }, [\n          _vm._v(\"text \"),\n        ]),\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.input_data,\n              expression: \"input_data\",\n            },\n          ],\n          staticClass: \"input input-bordered label-text\",\n          attrs: { type: \"text\", placeholder: \"text\" },\n          domProps: { value: _vm.input_data },\n          on: {\n            input: function ($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.input_data = $event.target.value\n            },\n          },\n        }),\n        _c(\"br\"),\n        _c(\"label\", { staticClass: \"label-text\", attrs: { for: \"font\" } }, [\n          _vm._v(\"font \"),\n        ]),\n        _c(\n          \"select\",\n          {\n            directives: [\n              {\n                name: \"model\",\n                rawName: \"v-model\",\n                value: _vm.font,\n                expression: \"font\",\n              },\n            ],\n            staticClass: \"input input-bordered label-text\",\n            staticStyle: { width: \"100%\" },\n            on: {\n              change: [\n                function ($event) {\n                  var $$selectedVal = Array.prototype.filter\n                    .call($event.target.options, function (o) {\n                      return o.selected\n                    })\n                    .map(function (o) {\n                      var val = \"_value\" in o ? o._value : o.value\n                      return val\n                    })\n                  _vm.font = $event.target.multiple\n                    ? $$selectedVal\n                    : $$selectedVal[0]\n                },\n                _vm.img_update,\n              ],\n            },\n          },\n          [\n            _c(\"option\", { attrs: { value: \"\", disabled: \"\" } }, [\n              _vm._v(\"폰트\"),\n            ]),\n            _vm._l(_vm.fonts.FontOptions, function (d, i) {\n              return _c(\"option\", { key: i, domProps: { value: d.name } }, [\n                _vm._v(\" \" + _vm._s(d.name) + \" \"),\n              ])\n            }),\n          ],\n          2\n        ),\n        _c(\"br\"),\n        _c(\n          \"label\",\n          { staticClass: \"label-text\", attrs: { for: \"font_size\" } },\n          [_vm._v(\"font size\")]\n        ),\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.font_size,\n              expression: \"font_size\",\n            },\n          ],\n          staticClass: \"input input-bordered label-text\",\n          attrs: { type: \"text\", placeholder: \"font_size\" },\n          domProps: { value: _vm.font_size },\n          on: {\n            input: function ($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.font_size = $event.target.value\n            },\n          },\n        }),\n        _c(\"br\"),\n        _c(\n          \"label\",\n          { staticClass: \"label-text\", attrs: { for: \"font_color\" } },\n          [_vm._v(\"font color\")]\n        ),\n        _c(\"input\", {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.font_color,\n              expression: \"font_color\",\n            },\n          ],\n          staticClass: \"input input-bordered label-text\",\n          attrs: { type: \"text\", placeholder: \"font_color\" },\n          domProps: { value: _vm.font_color },\n          on: {\n            input: function ($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.font_color = $event.target.value\n            },\n          },\n        }),\n        _c(\"div\", { staticClass: \"modal-action\" }, [\n          _c(\n            \"label\",\n            {\n              staticClass: \"btn\",\n              attrs: { for: \"my-modal-2\" },\n              on: { click: _vm.img_update },\n            },\n            [_vm._v(\"Close\")]\n          ),\n        ]),\n      ]),\n    ]),\n    _c(\"div\", { staticClass: \"form_range\" }, [\n      _c(\"label\", { staticClass: \"label-text\", attrs: { for: \"text_X_val\" } }, [\n        _vm._v(\"X index\"),\n      ]),\n      _c(\"input\", {\n        directives: [\n          {\n            name: \"model\",\n            rawName: \"v-model\",\n            value: _vm.text_X_val,\n            expression: \"text_X_val\",\n          },\n        ],\n        staticClass: \"range range-md\",\n        attrs: { id: \"text_X_val\", type: \"range\", max: _vm.image_width - 10 },\n        domProps: { value: _vm.text_X_val },\n        on: {\n          change: _vm.img_update,\n          __r: function ($event) {\n            _vm.text_X_val = $event.target.value\n          },\n        },\n      }),\n      _c(\"label\", { staticClass: \"label-text\", attrs: { for: \"text_Y_val\" } }, [\n        _vm._v(\"Y index\"),\n      ]),\n      _c(\"input\", {\n        directives: [\n          {\n            name: \"model\",\n            rawName: \"v-model\",\n            value: _vm.text_Y_val,\n            expression: \"text_Y_val\",\n          },\n        ],\n        staticClass: \"range range-md\",\n        attrs: {\n          id: \"text_Y_val\",\n          type: \"range\",\n          max: _vm.image_height - _vm.font_size,\n        },\n        domProps: { value: _vm.text_Y_val },\n        on: {\n          change: _vm.img_update,\n          __r: function ($event) {\n            _vm.text_Y_val = $event.target.value\n          },\n        },\n      }),\n    ]),\n    _c(\"br\"),\n    _c(\"img\", { attrs: { id: \"img\", src: _vm.imageLink, alt: \"\" } }),\n    _vm.imageLink.length > 0\n      ? _c(\"a\", { attrs: { href: _vm.imageLink, download: \"\" } }, [\n          _c(\"label\", { staticClass: \"btn\", on: { click: _vm.img_update } }, [\n            _vm._v(\"Download\"),\n          ]),\n        ])\n      : _vm._e(),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Main_UI.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22b9138116-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b9138116-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navigater.vue?vue&type=template&id=8552aebe&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9138116-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navigater.vue?vue&type=template&id=8552aebe&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { attrs: { id: \"app\" } }, [\n    _c(\n      \"div\",\n      {\n        staticClass:\n          \"navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box\",\n      },\n      [\n        _c(\"div\", { staticClass: \"flex-none\" }, [\n          _c(\"button\", { staticClass: \"btn btn-square btn-ghost\" }, [\n            _c(\n              \"a\",\n              { attrs: { href: \"https://www.github.com/tkgka/merge_image\" } },\n              [\n                _c(\n                  \"svg\",\n                  {\n                    staticClass: \"octicon octicon-mark-github v-align-middle\",\n                    attrs: {\n                      height: \"32\",\n                      \"aria-hidden\": \"true\",\n                      viewBox: \"0 0 16 16\",\n                      version: \"1.1\",\n                      width: \"32\",\n                      \"data-view-component\": \"true\",\n                    },\n                  },\n                  [\n                    _c(\"path\", {\n                      attrs: {\n                        \"fill-rule\": \"evenodd\",\n                        d: \"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z\",\n                      },\n                    }),\n                  ]\n                ),\n              ]\n            ),\n          ]),\n        ]),\n        _vm._m(0),\n      ]\n    ),\n  ])\n}\nvar staticRenderFns = [\n  function () {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"flex-1 px-2 mx-2\" }, [\n      _c(\"span\", { staticClass: \"text-lg font-bold\" }, [\n        _vm._v(\" Merge Image \"),\n      ]),\n    ])\n  },\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Navigater.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22b9138116-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(http://fonts.googleapis.com/earlyaccess/amstelvaralpha.css);\"]);\nexports.push([module.i, \"@import url(http://fonts.googleapis.com/earlyaccess/cabinvfbeta.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/dhyana.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/hanna.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/hannari.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/jejuhallasan.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/jejugothic.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/jejumyeongjo.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/karlatamilinclined.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/karlatamilupright.css);\"]);\nexports.push([module.i, \"@import url(http://fonts.googleapis.com/earlyaccess/khyay.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/kokoro.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/kopubbatang.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/laomuangdon.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/laomuangkhong.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/laosanspro.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/lohitbengali.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/lohitdevanagari.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/lohittamil.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/myanmarsanspro.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/nats.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/nicomoji.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/nikukyu.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notonaskharabicui.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notonastaliqurdudraft.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosansbengaliui.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosansdevanagariui.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosansethiopic.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosansgujaratiui.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosansgurmukhiui.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosansjapanese.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosanskannadaui.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosanskhmerui.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosanskufiarabic.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosanslaoui.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosansmalayalamui.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosansmyanmarui.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosansoriyaui.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosanssyriaceastern.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosanssyriacestrangela.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosanssyriacwestern.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosanstamilui.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosansteluguui.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosansthaiui.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/notosanstibetan.css);\"]);\nexports.push([module.i, \"@import url(http://fonts.googleapis.com/earlyaccess/nunitovfbeta.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/opensanshebrew.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/opensanshebrewcondensed.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/phetsarath.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/ponnala.css);\"]);\nexports.push([module.i, \"@import url(http://fonts.googleapis.com/earlyaccess/scheherazade.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/souliyo.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/thabit.css);\"]);\nexports.push([module.i, \"@import url(//fonts.googleapis.com/earlyaccess/tharlon.css);\"]);\n// Module\nexports.push([module.i, \"\\n#app {\\n  font-family: Avenir, Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  text-align: center;\\n  color: #2c3e50;\\n  margin-top: 30px;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Main_UI.vue?vue&type=style&index=0&id=348c97da&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Main_UI.vue?vue&type=style&index=0&id=348c97da&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.form_range[data-v-348c97da] {\\n  margin-left: 20%;\\n  margin-right: 20%;\\n  margin-top: 2%;\\n}\\n#app[data-v-348c97da] {\\n  justify-content: center;\\n  align-items: center;\\n  margin: 3% auto;\\n}\\n#img[data-v-348c97da] {\\n  display: block;\\n  margin-left: auto;\\n  margin-right: auto;\\n  margin-bottom: 1%;\\n}\\n.input[data-v-348c97da] {\\n  margin: 1%;\\n}\\n.modal-box[data-v-348c97da] {\\n  display: flex;\\n  flex-direction: column;\\n  text-align: right;\\n}\\n.filebox input[type=\\\"file\\\"][data-v-348c97da] {\\n  position: absolute;\\n  width: 0;\\n  height: 0;\\n  padding: 0;\\n  overflow: hidden;\\n  border: 0;\\n  margin-right: 30%;\\n}\\n.btn-margin[data-v-348c97da] {\\n  margin-right: 30%;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Main_UI.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navigater.vue?vue&type=style&index=0&id=8552aebe&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navigater.vue?vue&type=style&index=0&id=8552aebe&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n#app[data-v-8552aebe] {\\n  margin-bottom: 2%;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/Navigater.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"a34db668\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Main_UI.vue?vue&type=style&index=0&id=348c97da&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Main_UI.vue?vue&type=style&index=0&id=348c97da&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Main_UI.vue?vue&type=style&index=0&id=348c97da&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Main_UI.vue?vue&type=style&index=0&id=348c97da&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"15e81098\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Main_UI.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navigater.vue?vue&type=style&index=0&id=8552aebe&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navigater.vue?vue&type=style&index=0&id=8552aebe&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Navigater.vue?vue&type=style&index=0&id=8552aebe&scoped=true&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navigater.vue?vue&type=style&index=0&id=8552aebe&scoped=true&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"a95f45b0\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/Navigater.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ \"./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts& */ \"./src/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ \"./src/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=ts&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=ts& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_ts_loader_index_js_ref_14_1_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--14-0!../node_modules/ts-loader??ref--14-1!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=ts& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_14_0_node_modules_ts_loader_index_js_ref_14_1_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--7-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9138116_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b9138116-vue-loader-template\"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"b9138116-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9138116_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9138116_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/assets/data/fonts.ts":
/*!**********************************!*\
  !*** ./src/assets/data/fonts.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    FontOptions: [\n        {\n            name: \"Arial\",\n        },\n        {\n            name: \"Amstelvar Alpha\",\n        },\n        {\n            name: \"Cabin VF Beta\",\n        },\n        {\n            name: \"Dhyana\",\n        },\n        {\n            name: \"Hanna\",\n        },\n        {\n            name: \"Hannari\",\n        },\n        {\n            name: \"Jeju Gothic\",\n        },\n        {\n            name: \"Jeju Hallasan\",\n        },\n        {\n            name: \"Jeju Myeongjo\",\n        },\n        {\n            name: \"Karla Tamil Inclined\",\n        },\n        {\n            name: \"Karla Tamil Upright\",\n        },\n        {\n            name: \"Khyay\",\n        },\n        {\n            name: \"Kokoro\",\n        },\n        {\n            name: \"KoPub Batang\",\n        },\n        {\n            name: \"Lao Muang Don\",\n        },\n        {\n            name: \"Lao Muang Khong\",\n        },\n        {\n            name: \"Lao Sans Pro\",\n        },\n        {\n            name: \"Lohit Bengali\",\n        },\n        {\n            name: \"Lohit Devanagari\",\n        },\n        {\n            name: \"Lohit Tamil\",\n        },\n        {\n            name: \"Myanmar Sans Pro\",\n        },\n        {\n            name: \"NATS\",\n        },\n        {\n            name: \"Nico Moji\",\n        },\n        {\n            name: \"Nikukyu\",\n        },\n        {\n            name: \"Noto Naskh Arabic UI\",\n        },\n        {\n            name: \"Noto Nastaliq Urdu Draft\",\n        },\n        {\n            name: \"Noto Sans Bengali UI\",\n        },\n        {\n            name: \"Noto Sans Devanagari UI\",\n        },\n        {\n            name: \"Noto Sans Ethiopic\",\n        },\n        {\n            name: \"Noto Sans Gujarati UI\",\n        },\n        {\n            name: \"Noto Sans Gurmukhi UI\",\n        },\n        {\n            name: \"Noto Sans Japanese\",\n        },\n        {\n            name: \"Noto Sans Kannada UI\",\n        },\n        {\n            name: \"Noto Sans Khmer UI\",\n        },\n        {\n            name: \"Noto Sans Kufi Arabic\",\n        },\n        {\n            name: \"Noto Sans Lao UI\",\n        },\n        {\n            name: \"Noto Sans Malayalam UI\",\n        },\n        {\n            name: \"Noto Sans Myanmar UI\",\n        },\n        {\n            name: \"Noto Sans Oriya UI\",\n        },\n        {\n            name: \"Noto Sans Syriac Eastern\",\n        },\n        {\n            name: \"Noto Sans Syriac Estrangela\",\n        },\n        {\n            name: \"Noto Sans Syriac Western\",\n        },\n        {\n            name: \"Noto Sans Tamil UI\",\n        },\n        {\n            name: \"Noto Sans Telugu UI\",\n        },\n        {\n            name: \"Noto Sans Thai UI\",\n        },\n        {\n            name: \"Noto Sans Tibetan\",\n        },\n        {\n            name: \"Nunito VF Beta\",\n        },\n        {\n            name: \"Open Sans Hebrew\",\n        },\n        {\n            name: \"Open Sans Hebrew Condensed\",\n        },\n        {\n            name: \"Phetsarath\",\n        },\n        {\n            name: \"Ponnala\",\n        },\n        {\n            name: \"Scheherazade\",\n        },\n        {\n            name: \"Souliyo\",\n        },\n        {\n            name: \"Thabit\",\n        },\n        {\n            name: \"Tharlon\",\n        },\n    ],\n});\n\n\n//# sourceURL=webpack:///./src/assets/data/fonts.ts?");

/***/ }),

/***/ "./src/components/Main_UI.vue":
/*!************************************!*\
  !*** ./src/components/Main_UI.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Main_UI_vue_vue_type_template_id_348c97da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main_UI.vue?vue&type=template&id=348c97da&scoped=true& */ \"./src/components/Main_UI.vue?vue&type=template&id=348c97da&scoped=true&\");\n/* harmony import */ var _Main_UI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main_UI.vue?vue&type=script&lang=js& */ \"./src/components/Main_UI.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Main_UI_vue_vue_type_style_index_0_id_348c97da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main_UI.vue?vue&type=style&index=0&id=348c97da&scoped=true&lang=css& */ \"./src/components/Main_UI.vue?vue&type=style&index=0&id=348c97da&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Main_UI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Main_UI_vue_vue_type_template_id_348c97da_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Main_UI_vue_vue_type_template_id_348c97da_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"348c97da\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Main_UI.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Main_UI.vue?");

/***/ }),

/***/ "./src/components/Main_UI.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/Main_UI.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_UI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Main_UI.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Main_UI.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_UI_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Main_UI.vue?");

/***/ }),

/***/ "./src/components/Main_UI.vue?vue&type=style&index=0&id=348c97da&scoped=true&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./src/components/Main_UI.vue?vue&type=style&index=0&id=348c97da&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_UI_vue_vue_type_style_index_0_id_348c97da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Main_UI.vue?vue&type=style&index=0&id=348c97da&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Main_UI.vue?vue&type=style&index=0&id=348c97da&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_UI_vue_vue_type_style_index_0_id_348c97da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_UI_vue_vue_type_style_index_0_id_348c97da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_UI_vue_vue_type_style_index_0_id_348c97da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_UI_vue_vue_type_style_index_0_id_348c97da_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/Main_UI.vue?");

/***/ }),

/***/ "./src/components/Main_UI.vue?vue&type=template&id=348c97da&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/components/Main_UI.vue?vue&type=template&id=348c97da&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9138116_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_UI_vue_vue_type_template_id_348c97da_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b9138116-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Main_UI.vue?vue&type=template&id=348c97da&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"b9138116-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Main_UI.vue?vue&type=template&id=348c97da&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9138116_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_UI_vue_vue_type_template_id_348c97da_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9138116_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_UI_vue_vue_type_template_id_348c97da_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Main_UI.vue?");

/***/ }),

/***/ "./src/components/Navigater.vue":
/*!**************************************!*\
  !*** ./src/components/Navigater.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Navigater_vue_vue_type_template_id_8552aebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigater.vue?vue&type=template&id=8552aebe&scoped=true& */ \"./src/components/Navigater.vue?vue&type=template&id=8552aebe&scoped=true&\");\n/* harmony import */ var _Navigater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigater.vue?vue&type=script&lang=js& */ \"./src/components/Navigater.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _Navigater_vue_vue_type_style_index_0_id_8552aebe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigater.vue?vue&type=style&index=0&id=8552aebe&scoped=true&lang=css& */ \"./src/components/Navigater.vue?vue&type=style&index=0&id=8552aebe&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _Navigater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Navigater_vue_vue_type_template_id_8552aebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _Navigater_vue_vue_type_template_id_8552aebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"8552aebe\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/Navigater.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/Navigater.vue?");

/***/ }),

/***/ "./src/components/Navigater.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/components/Navigater.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Navigater.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navigater.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/Navigater.vue?");

/***/ }),

/***/ "./src/components/Navigater.vue?vue&type=style&index=0&id=8552aebe&scoped=true&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./src/components/Navigater.vue?vue&type=style&index=0&id=8552aebe&scoped=true&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigater_vue_vue_type_style_index_0_id_8552aebe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Navigater.vue?vue&type=style&index=0&id=8552aebe&scoped=true&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navigater.vue?vue&type=style&index=0&id=8552aebe&scoped=true&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigater_vue_vue_type_style_index_0_id_8552aebe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigater_vue_vue_type_style_index_0_id_8552aebe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigater_vue_vue_type_style_index_0_id_8552aebe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigater_vue_vue_type_style_index_0_id_8552aebe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/Navigater.vue?");

/***/ }),

/***/ "./src/components/Navigater.vue?vue&type=template&id=8552aebe&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/components/Navigater.vue?vue&type=template&id=8552aebe&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9138116_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigater_vue_vue_type_template_id_8552aebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b9138116-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./Navigater.vue?vue&type=template&id=8552aebe&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"b9138116-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Navigater.vue?vue&type=template&id=8552aebe&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9138116_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigater_vue_vue_type_template_id_8552aebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9138116_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigater_vue_vue_type_template_id_8552aebe_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/Navigater.vue?");

/***/ }),

/***/ "./src/graphql/server_conn.ts":
/*!************************************!*\
  !*** ./src/graphql/server_conn.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-client */ \"./node_modules/apollo-client/bundle.esm.js\");\n/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-cache-inmemory */ \"./node_modules/apollo-cache-inmemory/lib/bundle.esm.js\");\n/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-http */ \"./node_modules/apollo-link-http/lib/bundle.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n\n\n\n\n\nvar client = new apollo_client__WEBPACK_IMPORTED_MODULE_1__[\"ApolloClient\"]({\n    link: Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_3__[\"createHttpLink\"])({ uri: \"https://x.oozoo.site\" }),\n    // link: createHttpLink({ uri: \"http://localhost:4000\" }),\n    cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_2__[\"InMemoryCache\"](),\n});\nfunction send_value(navigator) {\n    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"])(this, void 0, void 0, function () {\n        var brands, mobile, platform, data;\n        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__generator\"])(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    brands = null;\n                    mobile = null;\n                    platform = null;\n                    if (navigator.userAgentData != undefined) {\n                        brands = JSON.stringify(navigator.userAgentData.brands).replace(/\"([^(\")\"]+)\":/g, \"$1:\");\n                        mobile = navigator.userAgentData.mobile;\n                        platform = navigator.userAgentData.platform;\n                    }\n                    return [4 /*yield*/, client.query({\n                            query: Object(graphql_tag__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__makeTemplateObject\"])([\"\\n    query{\\n  createContent(contentInput:{\\n    brands:\", \"\\n    mobile:\", \"\\n    platform:\\\"\", \"\\\"\\n}){\\n    ServerURL\\n  }\\n}\\n      \"], [\"\\n    query{\\n  createContent(contentInput:{\\n    brands:\", \"\\n    mobile:\", \"\\n    platform:\\\"\", \"\\\"\\n}){\\n    ServerURL\\n  }\\n}\\n      \"])), brands, mobile, platform),\n                        })];\n                case 1:\n                    data = _a.sent();\n                    return [2 /*return*/, data];\n            }\n        });\n    });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (send_value);\nvar templateObject_1;\n\n\n//# sourceURL=webpack:///./src/graphql/server_conn.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    render: function (h) { return h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]); },\n}).$mount(\"#app\");\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.ts */\"./src/main.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/main.ts?");

/***/ })

/******/ });