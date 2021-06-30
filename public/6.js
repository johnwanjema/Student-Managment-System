(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fullCalendar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fullCalendar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullcalendar_core_vdom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fullcalendar/core/vdom */ "./node_modules/@fullcalendar/core/vdom.js");
/* harmony import */ var _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fullcalendar/vue */ "./node_modules/@fullcalendar/vue/dist/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // solves problem with Vite


 // import interactionPlugin from '@fullcalendar/interaction'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'full-calendar': _fullcalendar_vue__WEBPACK_IMPORTED_MODULE_1__["default"] // make the <FullCalendar> tag available

  },
  data: function data() {
    return {
      calendarOptions: {
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__["default"]],
        initialView: 'dayGridMonth',
        allDaySlot: false,
        height: 1000,
        events: [// { title: 'event 1', date: '2021-06-28' },
          // { title: 'event 2', date: '2019-04-02' }
        ],
        headerToolbar: {
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
          center: 'title',
          left: 'prev, next, today'
        }
      }
    };
  },
  created: function created() {},
  methods: {
    toggleWeekends: function toggleWeekends() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends; // toggle the boolean!
    },
    updateEvents: function updateEvents() {
      console.log('mounted.');
      this.calendarOptions.events = [{
        title: 'event 1',
        date: '2021-06-28'
      }, {
        title: 'event 2',
        date: '2021-06-29'
      }];
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fullCalendar.vue?vue&type=template&id=6c0b7438&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fullCalendar.vue?vue&type=template&id=6c0b7438& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "344px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-md-12" },
              [
                _c("full-calendar", {
                  ref: "fullCalendar",
                  attrs: { options: _vm.calendarOptions }
                })
              ],
              1
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", { staticClass: "m-0" }, [_vm._v("Dashboard")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Home")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Dashboard v1")
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/fullCalendar.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/fullCalendar.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullCalendar_vue_vue_type_template_id_6c0b7438___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullCalendar.vue?vue&type=template&id=6c0b7438& */ "./resources/js/components/fullCalendar.vue?vue&type=template&id=6c0b7438&");
/* harmony import */ var _fullCalendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullCalendar.vue?vue&type=script&lang=js& */ "./resources/js/components/fullCalendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _fullCalendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fullCalendar_vue_vue_type_template_id_6c0b7438___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fullCalendar_vue_vue_type_template_id_6c0b7438___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fullCalendar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/fullCalendar.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/fullCalendar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fullCalendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./fullCalendar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fullCalendar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fullCalendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/fullCalendar.vue?vue&type=template&id=6c0b7438&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/fullCalendar.vue?vue&type=template&id=6c0b7438& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fullCalendar_vue_vue_type_template_id_6c0b7438___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./fullCalendar.vue?vue&type=template&id=6c0b7438& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fullCalendar.vue?vue&type=template&id=6c0b7438&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fullCalendar_vue_vue_type_template_id_6c0b7438___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fullCalendar_vue_vue_type_template_id_6c0b7438___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);