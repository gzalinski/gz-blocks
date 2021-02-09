/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jsxFileName = "/Users/mac/Sites/gocode/app/public/wp-content/plugins/gz-blocks/blocks/team-member/src/edit.js";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var TeamMemberEdit = /*#__PURE__*/function (_Component) {
  _inherits(TeamMemberEdit, _Component);

  var _super = _createSuper(TeamMemberEdit);

  function TeamMemberEdit() {
    var _this;

    _classCallCheck(this, TeamMemberEdit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "onChangeTitle", function (title) {
      _this.props.setAttributes({
        title: title
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeInfo", function (info) {
      _this.props.setAttributes({
        info: info
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeEmail", function (email) {
      _this.props.setAttributes({
        email: email
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectImage", function (_ref) {
      var id = _ref.id,
          url = _ref.url,
          alt = _ref.alt;

      _this.props.setAttributes({
        id: id,
        url: url,
        alt: alt
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectURL", function (url) {
      _this.props.setAttributes({
        url: url,
        id: null,
        alt: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onUploadError", function (message) {
      var noticeOperations = _this.props.noticeOperations;
      noticeOperations.createErrorNotice(message);
    });

    _defineProperty(_assertThisInitialized(_this), "removeImage", function () {
      _this.props.setAttributes({
        id: null,
        url: '',
        alt: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateAlt", function (alt) {
      _this.props.setAttributes({
        alt: alt
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onImageSizeChange", function (url) {
      _this.props.setAttributes({
        url: url
      });
    });

    return _this;
  }

  _createClass(TeamMemberEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var url = attributes.url,
          id = attributes.id;

      if (url && Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__["isBlobURL"])(url) && !id) {
        setAttributes({
          url: '',
          alt: ''
        });
      }
    }
  }, {
    key: "getImageSizes",
    value: function getImageSizes() {
      var _this$props2 = this.props,
          image = _this$props2.image,
          imageSizes = _this$props2.imageSizes;
      if (!image) return [];
      var options = [];
      var sizes = image.media_details.sizes;

      var _loop = function _loop(key) {
        var size = sizes[key];
        var imageSize = imageSizes.find(function (size) {
          return size.slug === key;
        });

        if (imageSize) {
          options.push({
            label: imageSize.name,
            value: size.source_url
          });
        }
      };

      for (var key in sizes) {
        _loop(key);
      }

      return options;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          className = _this$props3.className,
          attributes = _this$props3.attributes,
          noticeUI = _this$props3.noticeUI;
      var title = attributes.title,
          info = attributes.info,
          email = attributes.email,
          alt = attributes.alt,
          url = attributes.url,
          id = attributes.id;
      return wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 7
        }
      }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 9
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Settings'),
        initialOpen: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }
      }, url && !Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__["isBlobURL"])(url) && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["TextareaControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image Alt', 'ust-blocks'),
        value: alt,
        onChange: this.updateAlt,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }
      }), id && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image Size', 'ust-blocks'),
        options: this.getImageSizes(),
        onChange: this.onImageSizeChange,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 13
        }
      }))), wp.element.createElement("div", {
        className: className,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 9
        }
      }, wp.element.createElement("div", {
        className: "wp-block-ust-member__image",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }
      }, url ? wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 15
        }
      }, wp.element.createElement("img", {
        src: url,
        alt: alt,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 17
        }
      }), Object(_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__["isBlobURL"])(url) && wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 36
        }
      })) : wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaPlaceholder"], {
        icon: "format-image",
        onSelect: this.onSelectImage,
        onSelectURL: this.onSelectURL,
        onError: this.onUploadError,
        accept: "image/*",
        allowedTypes: ['image'],
        notices: noticeUI,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 17
        }
      }), url && wp.element.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }
      }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
        className: "components-icon-button components-toolbar__control",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Remove Image', 'ust-blocks'),
        onClick: this.removeImage,
        icon: 'trash',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 15
        }
      }), id && wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUploadCheck"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 15
        }
      }, wp.element.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUpload"], {
        onSelect: this.onSelectImage,
        alowedTypes: ['image'],
        value: id,
        render: function render(_ref2) {
          var open = _ref2.open;
          return wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
            className: "components-icon-button components-toolbar__control",
            label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Edit Image', 'ust-blocks'),
            onClick: open,
            icon: 'edit',
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 23
            }
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 17
        }
      })))), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
        className: 'wp-block-gzblocks-team-member__title',
        tagName: "h4",
        onChange: this.onChangeTitle,
        value: title,
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Member Name', 'gzblocks'),
        formattingControls: [],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }
      }), wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
        className: 'wp-block-gzblocks-team-member__info',
        tagName: "p",
        onChange: this.onChangeInfo,
        value: info,
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Member Info', 'gzblocks'),
        formattingControls: [],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }
      })));
    }
  }]);

  return TeamMemberEdit;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TeamMemberEdit);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ "./src/style.editor.scss");
/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
var _jsxFileName = "/Users/mac/Sites/gocode/app/public/wp-content/plugins/gz-blocks/blocks/team-member/src/index.js",
    _this = undefined;






var attributes = {
  title: {
    type: 'string',
    source: 'html',
    selector: 'h4'
  },
  info: {
    type: 'string',
    source: 'html',
    selector: 'p'
  },
  email: {
    type: 'string',
    source: 'html',
    selector: 'a'
  },
  id: {
    type: 'number'
  },
  alt: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'alt',
    default: ''
  },
  url: {
    type: 'string',
    source: 'attribute',
    selector: 'img',
    attribute: 'src'
  }
};
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('gzblocks/team-member', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Team Member', 'gz-blocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Block showing a Team Member.', 'gzblocks'),
  category: 'gzblocks',
  icon: {
    background: '#004696',
    foreground: '#fff',
    src: 'admin-users'
  },
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('team', 'gzblocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('person', 'gzblocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('member', 'gzblocks')],
  attributes: attributes,
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var title = attributes.title,
        info = attributes.info,
        email = attributes.email,
        url = attributes.url,
        alt = attributes.alt,
        id = attributes.id;
    return wp.element.createElement("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 7
      }
    }, wp.element.createElement("div", {
      className: "wp-block-ust-member__image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, url && wp.element.createElement("img", {
      src: url,
      alt: alt,
      className: id ? "wp-image-".concat(id) : null,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    })), title && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: 'wp-block-gzblocks-team-member__title',
      tagName: "h4",
      value: title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }
    }), info && wp.element.createElement(_wordpress_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"].Content, {
      className: 'wp-block-gzblocks-team-member__info',
      tagName: "p",
      value: info,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }
    }));
  }
});

/***/ }),

/***/ "./src/style.editor.scss":
/*!*******************************!*\
  !*** ./src/style.editor.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["components"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["editor"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = wp["i18n"];

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map