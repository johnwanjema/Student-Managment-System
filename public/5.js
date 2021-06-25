(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      editmode: false,
      users: {},
      form: new Form({
        id: "",
        name: "",
        email: "",
        type: "",
        bio: "",
        password: "",
        remember: false
      }),
      currentPage: 1,
      perPage: 5,
      fields: ['#', 'photo', 'name', 'email', 'class', 'created_at', 'actions'],
      filter: null,
      filterOn: [],
      totalRows: 1
    };
  },
  methods: {
    getResults: function getResults() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get('api/user?page=' + page).then(function (response) {
        _this.users = response.data;
      });
    },
    openModal: function openModal() {
      this.editmode = false;
      this.form.reset();
      $("#exampleModal").modal("show");
    },
    createuser: function createuser() {
      this.$Progress.start();
      this.form.post("/api/user").then(function () {
        toast.fire({
          type: "success",
          title: "User Created successfully"
        });
        Fire.$emit("After");
        $("#exampleModal").modal("hide");
      })["catch"](function () {});
      this.$Progress.finish();
    },
    updateuser: function updateuser() {
      var _this2 = this;

      this.$Progress.start();
      this.form.put("/api/user/" + this.form.id).then(function () {
        $("#exampleModal").modal("hide");
        Swal.fire("Updated", "User has been updated.", "success");

        _this2.$Progress.finish();

        Fire.$emit("After");
      })["catch"](function () {
        _this2.$Progress.fail();
      });
    },
    editmodal: function editmodal(user) {
      this.editmode = true;
      this.form.reset();
      $("#exampleModal").modal("show");
      this.form.fill(user);
    },
    deleteUser: function deleteUser(id) {
      var _this3 = this;

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        // send request
        if (result.value) {
          _this3.form["delete"]("api/user/" + id).then(function () {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            Fire.$emit("After");
          })["catch"](function () {
            Swal.fire("Huston we have a problem", "fail");
          });
        }
      });
    },
    loadusers: function loadusers() {
      var _this4 = this;

      axios.get('/api/user').then(function (_ref) {
        var data = _ref.data;
        _this4.users = data.data;
        _this4.totalRows = _this4.users.length;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    onFiltered: function onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    this.loadusers();
    Fire.$on("After", function () {
      _this5.loadusers();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user.vue?vue&type=template&id=e039bdd4&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user.vue?vue&type=template&id=e039bdd4& ***!
  \*******************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12 mt-2" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-header" }, [
                  _c("div", { staticClass: "card-tools" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success",
                        on: { click: _vm.openModal }
                      },
                      [
                        _vm._v(
                          "\n                                    Add Student\n                                    "
                        ),
                        _c("i", { staticClass: "fas fa-user-plus fa-fw" })
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "div",
                    {
                      staticClass: "dataTables_wrapper dt-bootstrap4",
                      attrs: { id: "example1_wrapper" }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-12 col-md-6" }, [
                          _c(
                            "div",
                            {
                              staticClass: "dataTables_filter",
                              attrs: { id: "example1_filter" }
                            },
                            [
                              _c("label", [
                                _vm._v("Search:"),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.filter,
                                      expression: "filter"
                                    }
                                  ],
                                  staticClass: "form-control form-control-md",
                                  attrs: {
                                    type: "search",
                                    placeholder: "",
                                    "aria-controls": "example1"
                                  },
                                  domProps: { value: _vm.filter },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.filter = $event.target.value
                                    }
                                  }
                                })
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-sm-12" },
                          [
                            _c("b-table", {
                              attrs: {
                                responsive: "",
                                striped: "",
                                hover: "",
                                "show-empty": "",
                                items: _vm.users,
                                fields: _vm.fields,
                                filter: _vm.filter,
                                filterIncludedFields: _vm.filterOn,
                                "per-page": _vm.perPage,
                                "current-page": _vm.currentPage
                              },
                              on: { filtered: _vm.onFiltered },
                              scopedSlots: _vm._u([
                                {
                                  key: "cell(#)",
                                  fn: function(row) {
                                    return [
                                      _c("p", [_vm._v(_vm._s(row.index + 1))])
                                    ]
                                  }
                                },
                                {
                                  key: "cell(actions)",
                                  fn: function(row) {
                                    return [
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "btn btn-sm",
                                          attrs: { variant: "primary" },
                                          on: {
                                            click: function($event) {
                                              return _vm.editmodal(row.item)
                                            }
                                          }
                                        },
                                        [_vm._v(" Edit")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-button",
                                        {
                                          staticClass: "btn btn-sm",
                                          attrs: { variant: "danger" },
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteUser(row.item.id)
                                            }
                                          }
                                        },
                                        [_vm._v("Delete")]
                                      )
                                    ]
                                  }
                                }
                              ])
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-sm-12 col-md-10" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-sm-12 col-md-2" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "dataTables_paginate paging_simple_numbers",
                              attrs: { id: "example1_paginate" }
                            },
                            [
                              _c("b-pagination", {
                                attrs: {
                                  "total-rows": _vm.totalRows,
                                  "per-page": _vm.perPage,
                                  "aria-controls": "my-table"
                                },
                                model: {
                                  value: _vm.currentPage,
                                  callback: function($$v) {
                                    _vm.currentPage = $$v
                                  },
                                  expression: "currentPage"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ])
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "modal fade",
                attrs: {
                  id: "exampleModal",
                  tabindex: "-1",
                  role: "dialog",
                  "aria-labelledby": "exampleModalLabel",
                  "aria-hidden": "true"
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "modal-dialog", attrs: { role: "document" } },
                  [
                    _c("div", { staticClass: "modal-content" }, [
                      _c("div", { staticClass: "modal-header" }, [
                        _c(
                          "h5",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.editmode,
                                expression: "!editmode"
                              }
                            ],
                            staticClass: "modal-title",
                            attrs: { id: "exampleModalLabel" }
                          },
                          [_vm._v("Add new Student")]
                        ),
                        _vm._v(" "),
                        _c(
                          "h5",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.editmode,
                                expression: "editmode"
                              }
                            ],
                            staticClass: "modal-title",
                            attrs: { id: "exampleModalLabel" }
                          },
                          [_vm._v("Update Student")]
                        ),
                        _vm._v(" "),
                        _vm._m(1)
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-body" }, [
                        _c(
                          "form",
                          {
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                _vm.editmode
                                  ? _vm.updateuser()
                                  : _vm.createuser()
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.name,
                                      expression: "form.name"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has("name")
                                  },
                                  attrs: {
                                    type: "text",
                                    name: "name",
                                    placeholder: "First Name"
                                  },
                                  domProps: { value: _vm.form.name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "name",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "name" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.lastName,
                                      expression: "form.lastName"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has("name")
                                  },
                                  attrs: {
                                    type: "text",
                                    name: "name",
                                    placeholder: "Last Name"
                                  },
                                  domProps: { value: _vm.form.lastName },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "lastName",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "name" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.email,
                                      expression: "form.email"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has("email")
                                  },
                                  attrs: {
                                    type: "email",
                                    name: "email",
                                    placeholder: "Email"
                                  },
                                  domProps: { value: _vm.form.email },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "email",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "email" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.type,
                                        expression: "form.type"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid": _vm.form.errors.has("bio")
                                    },
                                    attrs: { name: "type", id: "type" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.form,
                                          "type",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c("option", { attrs: { value: "" } }, [
                                      _vm._v("Select Class")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "option",
                                      { attrs: { value: "Admin" } },
                                      [_vm._v("Class 1")]
                                    ),
                                    _vm._v(" "),
                                    _c("option", { attrs: { value: "User" } }, [
                                      _vm._v("Class 5")
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "type" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.password,
                                      expression: "form.password"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.form.errors.has(
                                      "password"
                                    )
                                  },
                                  attrs: {
                                    type: "password",
                                    name: "password",
                                    placeholder: "Password"
                                  },
                                  domProps: { value: _vm.form.password },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "password",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("has-error", {
                                  attrs: { form: _vm.form, field: "password" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "modal-footer" }, [
                              _c(
                                "button",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.editmode,
                                      expression: "editmode"
                                    }
                                  ],
                                  staticClass: "btn btn-success",
                                  attrs: { type: "submit" }
                                },
                                [_vm._v("Update Student")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: !_vm.editmode,
                                      expression: "!editmode"
                                    }
                                  ],
                                  staticClass: "btn btn-primary",
                                  attrs: { type: "submit" }
                                },
                                [_vm._v("Create Student")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger",
                                  attrs: {
                                    type: "button",
                                    "data-dismiss": "modal"
                                  }
                                },
                                [_vm._v("Close")]
                              )
                            ])
                          ]
                        )
                      ])
                    ])
                  ]
                )
              ]
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
    return _c("section", { staticClass: "content-header" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row mb-2" }, [
          _c("div", { staticClass: "col-sm-6" }, [
            _c("h1", [_vm._v("Students")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6" }, [
            _c("ol", { staticClass: "breadcrumb float-sm-right" }, [
              _c("li", { staticClass: "breadcrumb-item" }, [
                _c("a", { attrs: { href: "/admin" } }, [_vm._v("Home")])
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "breadcrumb-item active" }, [
                _vm._v("Students")
              ])
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
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/user.vue":
/*!******************************************!*\
  !*** ./resources/js/components/user.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_vue_vue_type_template_id_e039bdd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.vue?vue&type=template&id=e039bdd4& */ "./resources/js/components/user.vue?vue&type=template&id=e039bdd4&");
/* harmony import */ var _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.vue?vue&type=script&lang=js& */ "./resources/js/components/user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_vue_vue_type_template_id_e039bdd4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_vue_vue_type_template_id_e039bdd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/user.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./user.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user.vue?vue&type=template&id=e039bdd4&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/user.vue?vue&type=template&id=e039bdd4& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_e039bdd4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./user.vue?vue&type=template&id=e039bdd4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user.vue?vue&type=template&id=e039bdd4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_e039bdd4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_user_vue_vue_type_template_id_e039bdd4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);