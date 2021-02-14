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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var is = __webpack_require__(3);
var delegate = __webpack_require__(4);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var closest = __webpack_require__(5);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __webpack_require__(0);
var select_default = /*#__PURE__*/__webpack_require__.n(src_select);

// CONCATENATED MODULE: ./src/clipboard-action.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Inner class which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 */

var clipboard_action_ClipboardAction = function () {
    /**
     * @param {Object} options
     */
    function ClipboardAction(options) {
        _classCallCheck(this, ClipboardAction);

        this.resolveOptions(options);
        this.initSelection();
    }

    /**
     * Defines base properties passed from constructor.
     * @param {Object} options
     */


    _createClass(ClipboardAction, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = options.action;
            this.container = options.container;
            this.emitter = options.emitter;
            this.target = options.target;
            this.text = options.text;
            this.trigger = options.trigger;

            this.selectedText = '';
        }

        /**
         * Decides which selection strategy is going to be applied based
         * on the existence of `text` and `target` properties.
         */

    }, {
        key: 'initSelection',
        value: function initSelection() {
            if (this.text) {
                this.selectFake();
            } else if (this.target) {
                this.selectTarget();
            }
        }

        /**
         * Creates a fake textarea element, sets its value from `text` property,
         * and makes a selection on it.
         */

    }, {
        key: 'selectFake',
        value: function selectFake() {
            var _this = this;

            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';

            this.removeFake();

            this.fakeHandlerCallback = function () {
                return _this.removeFake();
            };
            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;

            this.fakeElem = document.createElement('textarea');
            // Prevent zooming on iOS
            this.fakeElem.style.fontSize = '12pt';
            // Reset box model
            this.fakeElem.style.border = '0';
            this.fakeElem.style.padding = '0';
            this.fakeElem.style.margin = '0';
            // Move element out of screen horizontally
            this.fakeElem.style.position = 'absolute';
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
            // Move element to the same position vertically
            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = yPosition + 'px';

            this.fakeElem.setAttribute('readonly', '');
            this.fakeElem.value = this.text;

            this.container.appendChild(this.fakeElem);

            this.selectedText = select_default()(this.fakeElem);
            this.copyText();
        }

        /**
         * Only removes the fake element after another click event, that way
         * a user can hit `Ctrl+C` to copy because selection still exists.
         */

    }, {
        key: 'removeFake',
        value: function removeFake() {
            if (this.fakeHandler) {
                this.container.removeEventListener('click', this.fakeHandlerCallback);
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
            }

            if (this.fakeElem) {
                this.container.removeChild(this.fakeElem);
                this.fakeElem = null;
            }
        }

        /**
         * Selects the content from element passed on `target` property.
         */

    }, {
        key: 'selectTarget',
        value: function selectTarget() {
            this.selectedText = select_default()(this.target);
            this.copyText();
        }

        /**
         * Executes the copy operation based on the current selection.
         */

    }, {
        key: 'copyText',
        value: function copyText() {
            var succeeded = void 0;

            try {
                succeeded = document.execCommand(this.action);
            } catch (err) {
                succeeded = false;
            }

            this.handleResult(succeeded);
        }

        /**
         * Fires an event based on the copy operation result.
         * @param {Boolean} succeeded
         */

    }, {
        key: 'handleResult',
        value: function handleResult(succeeded) {
            this.emitter.emit(succeeded ? 'success' : 'error', {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
            });
        }

        /**
         * Moves focus away from `target` and back to the trigger, removes current selection.
         */

    }, {
        key: 'clearSelection',
        value: function clearSelection() {
            if (this.trigger) {
                this.trigger.focus();
            }
            document.activeElement.blur();
            window.getSelection().removeAllRanges();
        }

        /**
         * Sets the `action` to be performed which can be either 'copy' or 'cut'.
         * @param {String} action
         */

    }, {
        key: 'destroy',


        /**
         * Destroy lifecycle.
         */
        value: function destroy() {
            this.removeFake();
        }
    }, {
        key: 'action',
        set: function set() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';

            this._action = action;

            if (this._action !== 'copy' && this._action !== 'cut') {
                throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
        }

        /**
         * Gets the `action` property.
         * @return {String}
         */
        ,
        get: function get() {
            return this._action;
        }

        /**
         * Sets the `target` property using an element
         * that will be have its content copied.
         * @param {Element} target
         */

    }, {
        key: 'target',
        set: function set(target) {
            if (target !== undefined) {
                if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                    if (this.action === 'copy' && target.hasAttribute('disabled')) {
                        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                    }

                    if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                    }

                    this._target = target;
                } else {
                    throw new Error('Invalid "target" value, use a valid Element');
                }
            }
        }

        /**
         * Gets the `target` property.
         * @return {String|HTMLElement}
         */
        ,
        get: function get() {
            return this._target;
        }
    }]);

    return ClipboardAction;
}();

/* harmony default export */ var clipboard_action = (clipboard_action_ClipboardAction);
// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __webpack_require__(1);
var tiny_emitter_default = /*#__PURE__*/__webpack_require__.n(tiny_emitter);

// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __webpack_require__(2);
var listen_default = /*#__PURE__*/__webpack_require__.n(listen);

// CONCATENATED MODULE: ./src/clipboard.js
var clipboard_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var clipboard_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */

var clipboard_Clipboard = function (_Emitter) {
    _inherits(Clipboard, _Emitter);

    /**
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     * @param {Object} options
     */
    function Clipboard(trigger, options) {
        clipboard_classCallCheck(this, Clipboard);

        var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

        _this.resolveOptions(options);
        _this.listenClick(trigger);
        return _this;
    }

    /**
     * Defines if attributes would be resolved using internal setter functions
     * or custom functions that were passed in the constructor.
     * @param {Object} options
     */


    clipboard_createClass(Clipboard, [{
        key: 'resolveOptions',
        value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
        }

        /**
         * Adds a click event listener to the passed trigger.
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         */

    }, {
        key: 'listenClick',
        value: function listenClick(trigger) {
            var _this2 = this;

            this.listener = listen_default()(trigger, 'click', function (e) {
                return _this2.onClick(e);
            });
        }

        /**
         * Defines a new `ClipboardAction` on each click event.
         * @param {Event} e
         */

    }, {
        key: 'onClick',
        value: function onClick(e) {
            var trigger = e.delegateTarget || e.currentTarget;

            if (this.clipboardAction) {
                this.clipboardAction = null;
            }

            this.clipboardAction = new clipboard_action({
                action: this.action(trigger),
                target: this.target(trigger),
                text: this.text(trigger),
                container: this.container,
                trigger: trigger,
                emitter: this
            });
        }

        /**
         * Default `action` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultAction',
        value: function defaultAction(trigger) {
            return getAttributeValue('action', trigger);
        }

        /**
         * Default `target` lookup function.
         * @param {Element} trigger
         */

    }, {
        key: 'defaultTarget',
        value: function defaultTarget(trigger) {
            var selector = getAttributeValue('target', trigger);

            if (selector) {
                return document.querySelector(selector);
            }
        }

        /**
         * Returns the support of the given action, or all actions if no action is
         * given.
         * @param {String} [action]
         */

    }, {
        key: 'defaultText',


        /**
         * Default `text` lookup function.
         * @param {Element} trigger
         */
        value: function defaultText(trigger) {
            return getAttributeValue('text', trigger);
        }

        /**
         * Destroy lifecycle.
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.listener.destroy();

            if (this.clipboardAction) {
                this.clipboardAction.destroy();
                this.clipboardAction = null;
            }
        }
    }], [{
        key: 'isSupported',
        value: function isSupported() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];

            var actions = typeof action === 'string' ? [action] : action;
            var support = !!document.queryCommandSupported;

            actions.forEach(function (action) {
                support = support && !!document.queryCommandSupported(action);
            });

            return support;
        }
    }]);

    return Clipboard;
}(tiny_emitter_default.a);

/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */


function getAttributeValue(suffix, element) {
    var attribute = 'data-clipboard-' + suffix;

    if (!element.hasAttribute(attribute)) {
        return;
    }

    return element.getAttribute(attribute);
}

/* harmony default export */ var clipboard = __webpack_exports__["default"] = (clipboard_Clipboard);

/***/ })
/******/ ])["default"];
});

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/prismjs/plugins/autoloader/autoloader.js":
/*!******************************************************!*\
  !*** ./src/prismjs/plugins/autoloader/autoloader.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function () {
  if ("undefined" != typeof self && self.Prism && self.document && document.createElement) {
    var e = {
      javascript: "clike",
      actionscript: "javascript",
      aspnet: "markup",
      bison: "c",
      c: "clike",
      csharp: "clike",
      cpp: "c",
      coffeescript: "javascript",
      crystal: "ruby",
      "css-extras": "css",
      d: "clike",
      dart: "clike",
      fsharp: "clike",
      glsl: "clike",
      go: "clike",
      groovy: "clike",
      haml: "ruby",
      handlebars: "markup",
      haxe: "clike",
      jade: "javascript",
      java: "clike",
      jolie: "clike",
      kotlin: "clike",
      less: "css",
      markdown: "markup",
      nginx: "clike",
      objectivec: "c",
      parser: "markup",
      php: "clike",
      "php-extras": "php",
      processing: "clike",
      protobuf: "clike",
      qore: "clike",
      jsx: ["markup", "javascript"],
      reason: "clike",
      ruby: "clike",
      sass: "css",
      scss: "css",
      scala: "java",
      smarty: "markup",
      swift: "clike",
      textile: "markup",
      twig: "markup",
      typescript: "javascript",
      wiki: "markup"
    },
        c = {},
        a = "none",
        s = Prism.plugins.autoloader = {
      languages_path: "components/",
      use_minified: !0
    },
        n = function n(e, c, a) {
      var s = document.createElement("script");
      s.src = e, s.async = !0, s.onload = function () {
        document.body.removeChild(s), c && c();
      }, s.onerror = function () {
        document.body.removeChild(s), a && a();
      }, document.body.appendChild(s);
    },
        r = function r(e) {
      return s.languages_path + "prism-" + e + (s.use_minified ? ".min" : "") + ".js";
    },
        i = function i(e, a) {
      var s = c[e];
      s || (s = c[e] = {});
      var n = a.getAttribute("data-dependencies");
      !n && a.parentNode && "pre" === a.parentNode.tagName.toLowerCase() && (n = a.parentNode.getAttribute("data-dependencies")), n = n ? n.split(/\s*,\s*/g) : [], l(n, function () {
        t(e, function () {
          Prism.highlightElement(a);
        });
      });
    },
        l = function l(e, c, a) {
      "string" == typeof e && (e = [e]);

      var s = 0,
          n = e.length,
          r = function r() {
        n > s ? t(e[s], function () {
          s++, r();
        }, function () {
          a && a(e[s]);
        }) : s === n && c && c(e);
      };

      r();
    },
        t = function t(a, s, i) {
      var t = function t() {
        var e = !1;
        a.indexOf("!") >= 0 && (e = !0, a = a.replace("!", ""));
        var l = c[a];
        if (l || (l = c[a] = {}), s && (l.success_callbacks || (l.success_callbacks = []), l.success_callbacks.push(s)), i && (l.error_callbacks || (l.error_callbacks = []), l.error_callbacks.push(i)), !e && Prism.languages[a]) o(a);else if (!e && l.error) u(a);else if (e || !l.loading) {
          l.loading = !0;
          var t = r(a);
          n(t, function () {
            l.loading = !1, o(a);
          }, function () {
            l.loading = !1, l.error = !0, u(a);
          });
        }
      },
          p = e[a];

      p && p.length ? l(p, t) : t();
    },
        o = function o(e) {
      c[e] && c[e].success_callbacks && c[e].success_callbacks.length && c[e].success_callbacks.forEach(function (c) {
        c(e);
      });
    },
        u = function u(e) {
      c[e] && c[e].error_callbacks && c[e].error_callbacks.length && c[e].error_callbacks.forEach(function (c) {
        c(e);
      });
    };

    Prism.hooks.add("complete", function (e) {
      e.element && e.language && !e.grammar && e.language !== a && i(e.language, e.element);
    });
  }
}();

/***/ }),

/***/ "./src/prismjs/plugins/copy-to-clipboard/copy-to-clipboard.js":
/*!********************************************************************!*\
  !*** ./src/prismjs/plugins/copy-to-clipboard/copy-to-clipboard.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function () {
  if ("undefined" != typeof self && self.Prism && self.document) if (Prism.plugins.toolbar) {
    var c = window.ClipboardJS || void 0;
    c || "function" != "function" || (c = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js"));
    var u = [];

    if (!c) {
      var t = document.createElement("script"),
          o = document.querySelector("head");
      t.onload = function () {
        if (c = window.ClipboardJS) for (; u.length;) {
          u.pop()();
        }
      }, t.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js", o.appendChild(t);
    }

    Prism.plugins.toolbar.registerButton("copy-to-clipboard", function (t) {
      var o = t.element,
          e = function (t) {
        var o = {
          copy: "Copy",
          "copy-error": "Press Ctrl+C to copy",
          "copy-success": "Copied!",
          "copy-timeout": 5e3
        };

        for (var e in o) {
          for (var n = "data-prismjs-" + e, r = t; r && !r.hasAttribute(n);) {
            r = r.parentElement;
          }

          r && (o[e] = r.getAttribute(n));
        }

        return o;
      }(o),
          n = document.createElement("button");

      return n.textContent = e.copy, n.setAttribute("type", "button"), c ? r() : u.push(r), n;

      function r() {
        var t = new c(n, {
          text: function text() {
            return o.textContent;
          }
        });
        t.on("success", function () {
          n.textContent = e["copy-success"], i();
        }), t.on("error", function () {
          n.textContent = e["copy-error"], i();
        });
      }

      function i() {
        setTimeout(function () {
          n.textContent = e.copy;
        }, e["copy-timeout"]);
      }
    });
  } else console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");
}();

/***/ }),

/***/ "./src/prismjs/plugins/css-attribute-formater/css-attribute-formate.js":
/*!*****************************************************************************!*\
  !*** ./src/prismjs/plugins/css-attribute-formater/css-attribute-formate.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function (s) {
  var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
      }
    },
    url: {
      pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + e.source + "$"),
          alias: "url"
        }
      }
    },
    selector: RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"),
    string: {
      pattern: e,
      greedy: !0
    },
    property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
    important: /!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:,]/
  }, s.languages.css.atrule.inside.rest = s.languages.css;
  var t = s.languages.markup;
  t && (t.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
      pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
      lookbehind: !0,
      inside: {
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            style: {
              pattern: /(["'])[\s\S]+(?=["']$)/,
              lookbehind: !0,
              alias: "language-css",
              inside: s.languages.css
            },
            punctuation: [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        },
        "attr-name": /^style/i
      }
    }
  }, t.tag));
}(Prism);
!function (e) {
  var a,
      n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  e.languages.css.selector = {
    pattern: e.languages.css.selector,
    inside: a = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      class: /\.[-\w]+/,
      id: /#[-\w]+/,
      attribute: {
        pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
        greedy: !0,
        inside: {
          punctuation: /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: !0,
            alias: "keyword"
          },
          namespace: {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: !0,
            inside: {
              punctuation: /\|$/
            }
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: !0
          },
          "attr-value": [n, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: !0
          }],
          operator: /[|~*^$]?=/
        }
      },
      "n-th": [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: !0,
        inside: {
          number: /[\dn]+/,
          operator: /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: !0
      }],
      combinator: />|\+|~|\|\|/,
      punctuation: /[(),]/
    }
  }, e.languages.css.atrule.inside["selector-function-argument"].inside = a, e.languages.insertBefore("css", "property", {
    variable: {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: !0
    }
  });
  var r = {
    pattern: /(\b\d+)(?:%|[a-z]+\b)/,
    lookbehind: !0
  },
      i = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: !0
  };
  e.languages.insertBefore("css", "function", {
    operator: {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: !0
    },
    hexcode: {
      pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i,
      alias: "color"
    },
    color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        unit: r,
        number: i,
        function: /[\w-]+(?=\()/,
        punctuation: /[(),]/
      }
    }],
    entity: /\\[\da-f]{1,8}/i,
    unit: r,
    number: i
  });
}(Prism);

/***/ }),

/***/ "./src/prismjs/plugins/inline-colors/inline-color.css":
/*!************************************************************!*\
  !*** ./src/prismjs/plugins/inline-colors/inline-color.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/prismjs/plugins/inline-colors/inline-color.js":
/*!***********************************************************!*\
  !*** ./src/prismjs/plugins/inline-colors/inline-color.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function (s) {
  var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: !0,
          alias: "selector"
        },
        keyword: {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: !0
        }
      }
    },
    url: {
      pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
      greedy: !0,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/,
        string: {
          pattern: RegExp("^" + e.source + "$"),
          alias: "url"
        }
      }
    },
    selector: RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"),
    string: {
      pattern: e,
      greedy: !0
    },
    property: /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
    important: /!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:,]/
  }, s.languages.css.atrule.inside.rest = s.languages.css;
  var t = s.languages.markup;
  t && (t.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
      pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
      lookbehind: !0,
      inside: {
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            style: {
              pattern: /(["'])[\s\S]+(?=["']$)/,
              lookbehind: !0,
              alias: "language-css",
              inside: s.languages.css
            },
            punctuation: [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        },
        "attr-name": /^style/i
      }
    }
  }, t.tag));
}(Prism);
!function (e) {
  var a,
      n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  e.languages.css.selector = {
    pattern: e.languages.css.selector,
    inside: a = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      class: /\.[-\w]+/,
      id: /#[-\w]+/,
      attribute: {
        pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
        greedy: !0,
        inside: {
          punctuation: /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: !0,
            alias: "keyword"
          },
          namespace: {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: !0,
            inside: {
              punctuation: /\|$/
            }
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: !0
          },
          "attr-value": [n, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: !0
          }],
          operator: /[|~*^$]?=/
        }
      },
      "n-th": [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: !0,
        inside: {
          number: /[\dn]+/,
          operator: /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: !0
      }],
      combinator: />|\+|~|\|\|/,
      punctuation: /[(),]/
    }
  }, e.languages.css.atrule.inside["selector-function-argument"].inside = a, e.languages.insertBefore("css", "property", {
    variable: {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: !0
    }
  });
  var r = {
    pattern: /(\b\d+)(?:%|[a-z]+\b)/,
    lookbehind: !0
  },
      i = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: !0
  };
  e.languages.insertBefore("css", "function", {
    operator: {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: !0
    },
    hexcode: {
      pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i,
      alias: "color"
    },
    color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        unit: r,
        number: i,
        function: /[\w-]+(?=\()/,
        punctuation: /[(),]/
      }
    }],
    entity: /\\[\da-f]{1,8}/i,
    unit: r,
    number: i
  });
}(Prism);

(function () {
  if (typeof self === 'undefined' || typeof Prism === 'undefined' || typeof document === 'undefined') {
    return;
  } // Copied from the markup language definition


  var HTML_TAG = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g; // a regex to validate hexadecimal colors

  var HEX_COLOR = /^#?((?:[\da-f]){3,4}|(?:[\da-f]{2}){3,4})$/i;
  /**
   * Parses the given hexadecimal representation and returns the parsed RGBA color.
   *
   * If the format of the given string is invalid, `undefined` will be returned.
   * Valid formats are: `RGB`, `RGBA`, `RRGGBB`, and `RRGGBBAA`.
   *
   * Hexadecimal colors are parsed because they are not fully supported by older browsers, so converting them to
   * `rgba` functions improves browser compatibility.
   *
   * @param {string} hex
   * @returns {string | undefined}
   */

  function parseHexColor(hex) {
    var match = HEX_COLOR.exec(hex);

    if (!match) {
      return undefined;
    }

    hex = match[1]; // removes the leading "#"
    // the width and number of channels

    var channelWidth = hex.length >= 6 ? 2 : 1;
    var channelCount = hex.length / channelWidth; // the scale used to normalize 4bit and 8bit values

    var scale = channelWidth == 1 ? 1 / 15 : 1 / 255; // normalized RGBA channels

    var channels = [];

    for (var i = 0; i < channelCount; i++) {
      var int = parseInt(hex.substr(i * channelWidth, channelWidth), 16);
      channels.push(int * scale);
    }

    if (channelCount == 3) {
      channels.push(1); // add alpha of 100%
    } // output


    var rgb = channels.slice(0, 3).map(function (x) {
      return String(Math.round(x * 255));
    }).join(',');
    var alpha = String(Number(channels[3].toFixed(3))); // easy way to round 3 decimal places

    return 'rgba(' + rgb + ',' + alpha + ')';
  }
  /**
   * Validates the given Color using the current browser's internal implementation.
   *
   * @param {string} color
   * @returns {string | undefined}
   */


  function validateColor(color) {
    var s = new Option().style;
    s.color = color;
    return s.color ? color : undefined;
  }
  /**
   * An array of function which parse a given string representation of a color.
   *
   * These parser serve as validators and as a layer of compatibility to support color formats which the browser
   * might not support natively.
   *
   * @type {((value: string) => (string|undefined))[]}
   */


  var parsers = [parseHexColor, validateColor];
  Prism.hooks.add('wrap', function (env) {
    if (env.type === 'color' || env.classes.indexOf('color') >= 0) {
      var content = env.content; // remove all HTML tags inside

      var rawText = content.split(HTML_TAG).join('');
      var color;

      for (var i = 0, l = parsers.length; i < l && !color; i++) {
        color = parsers[i](rawText);
      }

      if (!color) {
        return;
      }

      var previewElement = '<span class="inline-color-wrapper"><span class="inline-color" style="background-color:' + color + ';"></span></span>';
      env.content = previewElement + content;
    }
  });
})();

/***/ }),

/***/ "./src/prismjs/plugins/line-numbers/line-numbers.css":
/*!***********************************************************!*\
  !*** ./src/prismjs/plugins/line-numbers/line-numbers.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/prismjs/plugins/line-numbers/line-numbers.js":
/*!**********************************************************!*\
  !*** ./src/prismjs/plugins/line-numbers/line-numbers.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var o = "line-numbers",
        a = /\n(?!$)/g,
        e = Prism.plugins.lineNumbers = {
      getLine: function getLine(e, n) {
        if ("PRE" === e.tagName && e.classList.contains(o)) {
          var t = e.querySelector(".line-numbers-rows");

          if (t) {
            var i = parseInt(e.getAttribute("data-start"), 10) || 1,
                r = i + (t.children.length - 1);
            n < i && (n = i), r < n && (n = r);
            var s = n - i;
            return t.children[s];
          }
        }
      },
      resize: function resize(e) {
        u([e]);
      },
      assumeViewportIndependence: !0
    },
        t = function t(e) {
      return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null;
    },
        n = void 0;

    window.addEventListener("resize", function () {
      e.assumeViewportIndependence && n === window.innerWidth || (n = window.innerWidth, u(Array.prototype.slice.call(document.querySelectorAll("pre." + o))));
    }), Prism.hooks.add("complete", function (e) {
      if (e.code) {
        var n = e.element,
            t = n.parentNode;

        if (t && /pre/i.test(t.nodeName) && !n.querySelector(".line-numbers-rows") && Prism.util.isActive(n, o)) {
          n.classList.remove(o), t.classList.add(o);
          var i,
              r = e.code.match(a),
              s = r ? r.length + 1 : 1,
              l = new Array(s + 1).join("<span></span>");
          (i = document.createElement("span")).setAttribute("aria-hidden", "true"), i.className = "line-numbers-rows", i.innerHTML = l, t.hasAttribute("data-start") && (t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)), e.element.appendChild(i), u([t]), Prism.hooks.run("line-numbers", e);
        }
      }
    }), Prism.hooks.add("line-numbers", function (e) {
      e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0;
    });
  }

  function u(e) {
    if (0 != (e = e.filter(function (e) {
      var n = t(e)["white-space"];
      return "pre-wrap" === n || "pre-line" === n;
    })).length) {
      var n = e.map(function (e) {
        var n = e.querySelector("code"),
            t = e.querySelector(".line-numbers-rows");

        if (n && t) {
          var i = e.querySelector(".line-numbers-sizer"),
              r = n.textContent.split(a);
          i || ((i = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(i)), i.innerHTML = "0", i.style.display = "block";
          var s = i.getBoundingClientRect().height;
          return i.innerHTML = "", {
            element: e,
            lines: r,
            lineHeights: [],
            oneLinerHeight: s,
            sizer: i
          };
        }
      }).filter(Boolean);
      n.forEach(function (e) {
        var i = e.sizer,
            n = e.lines,
            r = e.lineHeights,
            s = e.oneLinerHeight;
        r[n.length - 1] = void 0, n.forEach(function (e, n) {
          if (e && 1 < e.length) {
            var t = i.appendChild(document.createElement("span"));
            t.style.display = "block", t.textContent = e;
          } else r[n] = s;
        });
      }), n.forEach(function (e) {
        for (var n = e.sizer, t = e.lineHeights, i = 0, r = 0; r < t.length; r++) {
          void 0 === t[r] && (t[r] = n.children[i++].getBoundingClientRect().height);
        }
      }), n.forEach(function (e) {
        var n = e.sizer,
            t = e.element.querySelector(".line-numbers-rows");
        n.style.display = "none", n.innerHTML = "", e.lineHeights.forEach(function (e, n) {
          t.children[n].style.height = e + "px";
        });
      });
    }
  }
}();

/***/ }),

/***/ "./src/prismjs/plugins/preview/preview.css":
/*!*************************************************!*\
  !*** ./src/prismjs/plugins/preview/preview.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/prismjs/plugins/preview/preview.js":
/*!************************************************!*\
  !*** ./src/prismjs/plugins/preview/preview.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function () {
  if (("undefined" == typeof self || self.Prism) && self.document && Function.prototype.bind) {
    var r,
        s,
        o = {
      gradient: {
        create: (r = {}, s = function s(e) {
          if (r[e]) return r[e];
          var s = e.match(/^(\b|\B-[a-z]{1,10}-)((?:repeating-)?(?:linear|radial)-gradient)/),
              t = s && s[1],
              i = s && s[2],
              a = e.replace(/^(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\(|\)$/g, "").split(/\s*,\s*/);
          return 0 <= i.indexOf("linear") ? r[e] = function (e, s, t) {
            var i = "180deg";
            return /^(?:-?(?:\d+(?:\.\d+)?|\.\d+)(?:deg|rad)|to\b|top|right|bottom|left)/.test(t[0]) && (i = t.shift()).indexOf("to ") < 0 && (0 <= i.indexOf("top") ? i = 0 <= i.indexOf("left") ? "to bottom right" : 0 <= i.indexOf("right") ? "to bottom left" : "to bottom" : 0 <= i.indexOf("bottom") ? i = 0 <= i.indexOf("left") ? "to top right" : 0 <= i.indexOf("right") ? "to top left" : "to top" : 0 <= i.indexOf("left") ? i = "to right" : 0 <= i.indexOf("right") ? i = "to left" : e && (0 <= i.indexOf("deg") ? i = 90 - parseFloat(i) + "deg" : 0 <= i.indexOf("rad") && (i = Math.PI / 2 - parseFloat(i) + "rad"))), s + "(" + i + "," + t.join(",") + ")";
          }(t, i, a) : 0 <= i.indexOf("radial") ? r[e] = function (e, s, t) {
            if (t[0].indexOf("at") < 0) {
              var i = "center",
                  a = "ellipse",
                  r = "farthest-corner";

              if (/\bcenter|top|right|bottom|left\b|^\d+/.test(t[0]) && (i = t.shift().replace(/\s*-?\d+(?:rad|deg)\s*/, "")), /\bcircle|ellipse|closest|farthest|contain|cover\b/.test(t[0])) {
                var n = t.shift().split(/\s+/);
                !n[0] || "circle" !== n[0] && "ellipse" !== n[0] || (a = n.shift()), n[0] && (r = n.shift()), "cover" === r ? r = "farthest-corner" : "contain" === r && (r = "clothest-side");
              }

              return s + "(" + a + " " + r + " at " + i + "," + t.join(",") + ")";
            }

            return s + "(" + t.join(",") + ")";
          }(0, i, a) : r[e] = i + "(" + a.join(",") + ")";
        }, function () {
          new Prism.plugins.Previewer("gradient", function (e) {
            return this.firstChild.style.backgroundImage = "", this.firstChild.style.backgroundImage = s(e), !!this.firstChild.style.backgroundImage;
          }, "*", function () {
            this._elt.innerHTML = "<div></div>";
          });
        }),
        tokens: {
          gradient: {
            pattern: /(?:\b|\B-[a-z]{1,10}-)(?:repeating-)?(?:linear|radial)-gradient\((?:(?:rgb|hsl)a?\(.+?\)|[^\)])+\)/gi,
            inside: {
              function: /[\w-]+(?=\()/,
              punctuation: /[(),]/
            }
          }
        },
        languages: {
          css: !0,
          less: !0,
          sass: [{
            lang: "sass",
            before: "punctuation",
            inside: "inside",
            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
          }, {
            lang: "sass",
            before: "punctuation",
            inside: "inside",
            root: Prism.languages.sass && Prism.languages.sass["property-line"]
          }],
          scss: !0,
          stylus: [{
            lang: "stylus",
            before: "func",
            inside: "rest",
            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
          }, {
            lang: "stylus",
            before: "func",
            inside: "rest",
            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
          }]
        }
      },
      angle: {
        create: function create() {
          new Prism.plugins.Previewer("angle", function (e) {
            var s,
                t,
                i = parseFloat(e),
                a = e.match(/[a-z]+$/i);
            if (!i || !a) return !1;

            switch (a = a[0]) {
              case "deg":
                s = 360;
                break;

              case "grad":
                s = 400;
                break;

              case "rad":
                s = 2 * Math.PI;
                break;

              case "turn":
                s = 1;
            }

            return t = 100 * i / s, t %= 100, this[(i < 0 ? "set" : "remove") + "Attribute"]("data-negative", ""), this.querySelector("circle").style.strokeDasharray = Math.abs(t) + ",500", !0;
          }, "*", function () {
            this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>';
          });
        },
        tokens: {
          angle: /(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)(?:deg|g?rad|turn)\b/i
        },
        languages: {
          css: !0,
          less: !0,
          markup: {
            lang: "markup",
            before: "punctuation",
            inside: "inside",
            root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
          },
          sass: [{
            lang: "sass",
            inside: "inside",
            root: Prism.languages.sass && Prism.languages.sass["property-line"]
          }, {
            lang: "sass",
            before: "operator",
            inside: "inside",
            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
          }],
          scss: !0,
          stylus: [{
            lang: "stylus",
            before: "func",
            inside: "rest",
            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
          }, {
            lang: "stylus",
            before: "func",
            inside: "rest",
            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
          }]
        }
      },
      color: {
        create: function create() {
          new Prism.plugins.Previewer("color", function (e) {
            return this.style.backgroundColor = "", this.style.backgroundColor = e, !!this.style.backgroundColor;
          });
        },
        tokens: {
          color: [Prism.languages.css.hexcode].concat(Prism.languages.css.color)
        },
        languages: {
          css: !1,
          less: !0,
          markup: {
            lang: "markup",
            before: "punctuation",
            inside: "inside",
            root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
          },
          sass: [{
            lang: "sass",
            before: "punctuation",
            inside: "inside",
            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
          }, {
            lang: "sass",
            inside: "inside",
            root: Prism.languages.sass && Prism.languages.sass["property-line"]
          }],
          scss: !1,
          stylus: [{
            lang: "stylus",
            before: "hexcode",
            inside: "rest",
            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
          }, {
            lang: "stylus",
            before: "hexcode",
            inside: "rest",
            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
          }]
        }
      },
      easing: {
        create: function create() {
          new Prism.plugins.Previewer("easing", function (e) {
            var s = (e = {
              linear: "0,0,1,1",
              ease: ".25,.1,.25,1",
              "ease-in": ".42,0,1,1",
              "ease-out": "0,0,.58,1",
              "ease-in-out": ".42,0,.58,1"
            }[e] || e).match(/-?(?:\d+(?:\.\d+)?|\.\d+)/g);
            if (4 !== s.length) return !1;
            s = s.map(function (e, s) {
              return 100 * (s % 2 ? 1 - e : e);
            }), this.querySelector("path").setAttribute("d", "M0,100 C" + s[0] + "," + s[1] + ", " + s[2] + "," + s[3] + ", 100,0");
            var t = this.querySelectorAll("line");
            return t[0].setAttribute("x2", s[0]), t[0].setAttribute("y2", s[1]), t[1].setAttribute("x2", s[2]), t[1].setAttribute("y2", s[3]), !0;
          }, "*", function () {
            this._elt.innerHTML = '<svg viewBox="-20 -20 140 140" width="100" height="100"><defs><marker id="prism-previewer-easing-marker" viewBox="0 0 4 4" refX="2" refY="2" markerUnits="strokeWidth"><circle cx="2" cy="2" r="1.5" /></marker></defs><path d="M0,100 C20,50, 40,30, 100,0" /><line x1="0" y1="100" x2="20" y2="50" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /><line x1="100" y1="0" x2="40" y2="30" marker-start="url(#prism-previewer-easing-marker)" marker-end="url(#prism-previewer-easing-marker)" /></svg>';
          });
        },
        tokens: {
          easing: {
            pattern: /\bcubic-bezier\((?:-?(?:\d+(?:\.\d+)?|\.\d+),\s*){3}-?(?:\d+(?:\.\d+)?|\.\d+)\)\B|\b(?:linear|ease(?:-in)?(?:-out)?)(?=\s|[;}]|$)/i,
            inside: {
              function: /[\w-]+(?=\()/,
              punctuation: /[(),]/
            }
          }
        },
        languages: {
          css: !0,
          less: !0,
          sass: [{
            lang: "sass",
            inside: "inside",
            before: "punctuation",
            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
          }, {
            lang: "sass",
            inside: "inside",
            root: Prism.languages.sass && Prism.languages.sass["property-line"]
          }],
          scss: !0,
          stylus: [{
            lang: "stylus",
            before: "hexcode",
            inside: "rest",
            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
          }, {
            lang: "stylus",
            before: "hexcode",
            inside: "rest",
            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
          }]
        }
      },
      time: {
        create: function create() {
          new Prism.plugins.Previewer("time", function (e) {
            var s = parseFloat(e),
                t = e.match(/[a-z]+$/i);
            return !(!s || !t) && (t = t[0], this.querySelector("circle").style.animationDuration = 2 * s + t, !0);
          }, "*", function () {
            this._elt.innerHTML = '<svg viewBox="0 0 64 64"><circle r="16" cy="32" cx="32"></circle></svg>';
          });
        },
        tokens: {
          time: /(?:\b|\B-|(?=\B\.))(?:\d+(?:\.\d+)?|\.\d+)m?s\b/i
        },
        languages: {
          css: !0,
          less: !0,
          markup: {
            lang: "markup",
            before: "punctuation",
            inside: "inside",
            root: Prism.languages.markup && Prism.languages.markup.tag.inside["attr-value"]
          },
          sass: [{
            lang: "sass",
            inside: "inside",
            root: Prism.languages.sass && Prism.languages.sass["property-line"]
          }, {
            lang: "sass",
            before: "operator",
            inside: "inside",
            root: Prism.languages.sass && Prism.languages.sass["variable-line"]
          }],
          scss: !0,
          stylus: [{
            lang: "stylus",
            before: "hexcode",
            inside: "rest",
            root: Prism.languages.stylus && Prism.languages.stylus["property-declaration"].inside
          }, {
            lang: "stylus",
            before: "hexcode",
            inside: "rest",
            root: Prism.languages.stylus && Prism.languages.stylus["variable-declaration"].inside
          }]
        }
      }
    },
        t = /(?:^|\s)token(?=$|\s)/,
        e = /(?:^|\s)active(?=$|\s)/g,
        i = /(?:^|\s)flipped(?=$|\s)/g,
        n = function n(e, s, t, i) {
      this._elt = null, this._type = e, this._clsRegexp = RegExp("(?:^|\\s)" + e + "(?=$|\\s)"), this._token = null, this.updater = s, this._mouseout = this.mouseout.bind(this), this.initializer = i;
      var a = this;
      t || (t = ["*"]), Array.isArray(t) || (t = [t]), t.forEach(function (e) {
        "string" != typeof e && (e = e.lang), n.byLanguages[e] || (n.byLanguages[e] = []), n.byLanguages[e].indexOf(a) < 0 && n.byLanguages[e].push(a);
      }), n.byType[e] = this;
    };

    for (var a in n.prototype.init = function () {
      this._elt || (this._elt = document.createElement("div"), this._elt.className = "prism-previewer prism-previewer-" + this._type, document.body.appendChild(this._elt), this.initializer && this.initializer());
    }, n.prototype.isDisabled = function (e) {
      do {
        if (e.hasAttribute && e.hasAttribute("data-previewers")) return -1 === (e.getAttribute("data-previewers") || "").split(/\s+/).indexOf(this._type);
      } while (e = e.parentNode);

      return !1;
    }, n.prototype.check = function (e) {
      if (!t.test(e.className) || !this.isDisabled(e)) {
        do {
          if (t.test(e.className) && this._clsRegexp.test(e.className)) break;
        } while (e = e.parentNode);

        e && e !== this._token && (this._token = e, this.show());
      }
    }, n.prototype.mouseout = function () {
      this._token.removeEventListener("mouseout", this._mouseout, !1), this._token = null, this.hide();
    }, n.prototype.show = function () {
      if (this._elt || this.init(), this._token) if (this.updater.call(this._elt, this._token.textContent)) {
        this._token.addEventListener("mouseout", this._mouseout, !1);

        var e = function (e) {
          var s = e.getBoundingClientRect(),
              t = s.left,
              i = s.top,
              a = document.documentElement.getBoundingClientRect();
          return t -= a.left, {
            top: i -= a.top,
            right: innerWidth - t - s.width,
            bottom: innerHeight - i - s.height,
            left: t,
            width: s.width,
            height: s.height
          };
        }(this._token);

        this._elt.className += " active", 0 < e.top - this._elt.offsetHeight ? (this._elt.className = this._elt.className.replace(i, ""), this._elt.style.top = e.top + "px", this._elt.style.bottom = "") : (this._elt.className += " flipped", this._elt.style.bottom = e.bottom + "px", this._elt.style.top = ""), this._elt.style.left = e.left + Math.min(200, e.width / 2) + "px";
      } else this.hide();
    }, n.prototype.hide = function () {
      this._elt.className = this._elt.className.replace(e, "");
    }, n.byLanguages = {}, n.byType = {}, n.initEvents = function (e, s) {
      var t = [];
      n.byLanguages[s] && (t = t.concat(n.byLanguages[s])), n.byLanguages["*"] && (t = t.concat(n.byLanguages["*"])), e.addEventListener("mouseover", function (e) {
        var s = e.target;
        t.forEach(function (e) {
          e.check(s);
        });
      }, !1);
    }, Prism.plugins.Previewer = n, Prism.hooks.add("before-highlight", function (r) {
      for (var n in o) {
        var l = o[n].languages;

        if (r.language && l[r.language] && !l[r.language].initialized) {
          var e = l[r.language];
          Array.isArray(e) || (e = [e]), e.forEach(function (e) {
            var s, t, i, a;
            e = (!0 === e ? (s = "important", t = r.language) : (s = e.before || "important", t = e.inside || e.lang, i = e.root || Prism.languages, a = e.skip), r.language), !a && Prism.languages[e] && (Prism.languages.insertBefore(t, s, o[n].tokens, i), r.grammar = Prism.languages[e], l[r.language] = {
              initialized: !0
            });
          });
        }
      }
    }), Prism.hooks.add("after-highlight", function (e) {
      (n.byLanguages["*"] || n.byLanguages[e.language]) && n.initEvents(e.element, e.language);
    }), o) {
      o[a].create();
    }
  }
}();

/***/ }),

/***/ "./src/prismjs/plugins/toolbar/toolbar.css":
/*!*************************************************!*\
  !*** ./src/prismjs/plugins/toolbar/toolbar.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/prismjs/plugins/toolbar/toolbar.js":
/*!************************************************!*\
  !*** ./src/prismjs/plugins/toolbar/toolbar.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var i = [],
        l = {},
        c = function c() {};

    Prism.plugins.toolbar = {};

    var e = Prism.plugins.toolbar.registerButton = function (e, n) {
      var t;
      t = "function" == typeof n ? n : function (e) {
        var t;
        return "function" == typeof n.onClick ? ((t = document.createElement("button")).type = "button", t.addEventListener("click", function () {
          n.onClick.call(this, e);
        })) : "string" == typeof n.url ? (t = document.createElement("a")).href = n.url : t = document.createElement("span"), n.className && t.classList.add(n.className), t.textContent = n.text, t;
      }, e in l ? console.warn('There is a button with the key "' + e + '" registered already.') : i.push(l[e] = t);
    },
        t = Prism.plugins.toolbar.hook = function (a) {
      var e = a.element.parentNode;

      if (e && /pre/i.test(e.nodeName) && !e.parentNode.classList.contains("code-toolbar")) {
        var t = document.createElement("div");
        t.classList.add("code-toolbar"), e.parentNode.insertBefore(t, e), t.appendChild(e);
        var r = document.createElement("div");
        r.classList.add("toolbar");

        var n = i,
            o = function (e) {
          for (; e;) {
            var t = e.getAttribute("data-toolbar-order");
            if (null != t) return (t = t.trim()).length ? t.split(/\s*,\s*/g) : [];
            e = e.parentElement;
          }
        }(a.element);

        o && (n = o.map(function (e) {
          return l[e] || c;
        })), n.forEach(function (e) {
          var t = e(a);

          if (t) {
            var n = document.createElement("div");
            n.classList.add("toolbar-item"), n.appendChild(t), r.appendChild(n);
          }
        }), t.appendChild(r);
      }
    };

    e("label", function (e) {
      var t = e.element.parentNode;

      if (t && /pre/i.test(t.nodeName) && t.hasAttribute("data-label")) {
        var n,
            a,
            r = t.getAttribute("data-label");

        try {
          a = document.querySelector("template#" + r);
        } catch (e) {}

        return a ? n = a.content : (t.hasAttribute("data-url") ? (n = document.createElement("a")).href = t.getAttribute("data-url") : n = document.createElement("span"), n.textContent = r), n;
      }
    }), Prism.hooks.add("complete", t);
  }
}();

/***/ }),

/***/ "./src/prismjs/prismjs.js":
/*!********************************!*\
  !*** ./src/prismjs/prismjs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* PrismJS 1.23.0
https://prismjs.com/download.html#themes=prism-tomorrow */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function (u) {
  var c = /\blang(?:uage)?-([\w-]+)\b/i,
      n = 0,
      M = {
    manual: u.Prism && u.Prism.manual,
    disableWorkerMessageHandler: u.Prism && u.Prism.disableWorkerMessageHandler,
    util: {
      encode: function e(n) {
        return n instanceof W ? new W(n.type, e(n.content), n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      },
      type: function type(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function objId(e) {
        return e.__id || Object.defineProperty(e, "__id", {
          value: ++n
        }), e.__id;
      },
      clone: function r(e, t) {
        var a, n;

        switch (t = t || {}, M.util.type(e)) {
          case "Object":
            if (n = M.util.objId(e), t[n]) return t[n];

            for (var i in a = {}, t[n] = a, e) {
              e.hasOwnProperty(i) && (a[i] = r(e[i], t));
            }

            return a;

          case "Array":
            return n = M.util.objId(e), t[n] ? t[n] : (a = [], t[n] = a, e.forEach(function (e, n) {
              a[n] = r(e, t);
            }), a);

          default:
            return e;
        }
      },
      getLanguage: function getLanguage(e) {
        for (; e && !c.test(e.className);) {
          e = e.parentElement;
        }

        return e ? (e.className.match(c) || [, "none"])[1].toLowerCase() : "none";
      },
      currentScript: function currentScript() {
        if ("undefined" == typeof document) return null;
        if ("currentScript" in document) return document.currentScript;

        try {
          throw new Error();
        } catch (e) {
          var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1];

          if (n) {
            var r = document.getElementsByTagName("script");

            for (var t in r) {
              if (r[t].src == n) return r[t];
            }
          }

          return null;
        }
      },
      isActive: function isActive(e, n, r) {
        for (var t = "no-" + n; e;) {
          var a = e.classList;
          if (a.contains(n)) return !0;
          if (a.contains(t)) return !1;
          e = e.parentElement;
        }

        return !!r;
      }
    },
    languages: {
      extend: function extend(e, n) {
        var r = M.util.clone(M.languages[e]);

        for (var t in n) {
          r[t] = n[t];
        }

        return r;
      },
      insertBefore: function insertBefore(r, e, n, t) {
        var a = (t = t || M.languages)[r],
            i = {};

        for (var l in a) {
          if (a.hasOwnProperty(l)) {
            if (l == e) for (var o in n) {
              n.hasOwnProperty(o) && (i[o] = n[o]);
            }
            n.hasOwnProperty(l) || (i[l] = a[l]);
          }
        }

        var s = t[r];
        return t[r] = i, M.languages.DFS(M.languages, function (e, n) {
          n === s && e != r && (this[e] = i);
        }), i;
      },
      DFS: function e(n, r, t, a) {
        a = a || {};
        var i = M.util.objId;

        for (var l in n) {
          if (n.hasOwnProperty(l)) {
            r.call(n, l, n[l], t || l);
            var o = n[l],
                s = M.util.type(o);
            "Object" !== s || a[i(o)] ? "Array" !== s || a[i(o)] || (a[i(o)] = !0, e(o, r, l, a)) : (a[i(o)] = !0, e(o, r, null, a));
          }
        }
      }
    },
    plugins: {},
    highlightAll: function highlightAll(e, n) {
      M.highlightAllUnder(document, e, n);
    },
    highlightAllUnder: function highlightAllUnder(e, n, r) {
      var t = {
        callback: r,
        container: e,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };
      M.hooks.run("before-highlightall", t), t.elements = Array.prototype.slice.apply(t.container.querySelectorAll(t.selector)), M.hooks.run("before-all-elements-highlight", t);

      for (var a, i = 0; a = t.elements[i++];) {
        M.highlightElement(a, !0 === n, t.callback);
      }
    },
    highlightElement: function highlightElement(e, n, r) {
      var t = M.util.getLanguage(e),
          a = M.languages[t];
      e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + t;
      var i = e.parentElement;
      i && "pre" === i.nodeName.toLowerCase() && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + t);
      var l = {
        element: e,
        language: t,
        grammar: a,
        code: e.textContent
      };

      function o(e) {
        l.highlightedCode = e, M.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, M.hooks.run("after-highlight", l), M.hooks.run("complete", l), r && r.call(l.element);
      }

      if (M.hooks.run("before-sanity-check", l), !l.code) return M.hooks.run("complete", l), void (r && r.call(l.element));
      if (M.hooks.run("before-highlight", l), l.grammar) {
        if (n && u.Worker) {
          var s = new Worker(M.filename);
          s.onmessage = function (e) {
            o(e.data);
          }, s.postMessage(JSON.stringify({
            language: l.language,
            code: l.code,
            immediateClose: !0
          }));
        } else o(M.highlight(l.code, l.grammar, l.language));
      } else o(M.util.encode(l.code));
    },
    highlight: function highlight(e, n, r) {
      var t = {
        code: e,
        grammar: n,
        language: r
      };
      return M.hooks.run("before-tokenize", t), t.tokens = M.tokenize(t.code, t.grammar), M.hooks.run("after-tokenize", t), W.stringify(M.util.encode(t.tokens), t.language);
    },
    tokenize: function tokenize(e, n) {
      var r = n.rest;

      if (r) {
        for (var t in r) {
          n[t] = r[t];
        }

        delete n.rest;
      }

      var a = new i();
      return I(a, a.head, e), function e(n, r, t, a, i, l) {
        for (var o in t) {
          if (t.hasOwnProperty(o) && t[o]) {
            var s = t[o];
            s = Array.isArray(s) ? s : [s];

            for (var u = 0; u < s.length; ++u) {
              if (l && l.cause == o + "," + u) return;
              var c = s[u],
                  g = c.inside,
                  f = !!c.lookbehind,
                  h = !!c.greedy,
                  d = c.alias;

              if (h && !c.pattern.global) {
                var v = c.pattern.toString().match(/[imsuy]*$/)[0];
                c.pattern = RegExp(c.pattern.source, v + "g");
              }

              for (var p = c.pattern || c, m = a.next, y = i; m !== r.tail && !(l && y >= l.reach); y += m.value.length, m = m.next) {
                var k = m.value;
                if (r.length > n.length) return;

                if (!(k instanceof W)) {
                  var b,
                      x = 1;

                  if (h) {
                    if (!(b = z(p, y, n, f))) break;
                    var w = b.index,
                        A = b.index + b[0].length,
                        P = y;

                    for (P += m.value.length; P <= w;) {
                      m = m.next, P += m.value.length;
                    }

                    if (P -= m.value.length, y = P, m.value instanceof W) continue;

                    for (var S = m; S !== r.tail && (P < A || "string" == typeof S.value); S = S.next) {
                      x++, P += S.value.length;
                    }

                    x--, k = n.slice(y, P), b.index -= y;
                  } else if (!(b = z(p, 0, k, f))) continue;

                  var w = b.index,
                      E = b[0],
                      O = k.slice(0, w),
                      L = k.slice(w + E.length),
                      N = y + k.length;
                  l && N > l.reach && (l.reach = N);
                  var j = m.prev;
                  O && (j = I(r, j, O), y += O.length), q(r, j, x);
                  var C = new W(o, g ? M.tokenize(E, g) : E, d, E);

                  if (m = I(r, j, C), L && I(r, m, L), 1 < x) {
                    var _ = {
                      cause: o + "," + u,
                      reach: N
                    };
                    e(n, r, t, m.prev, y, _), l && _.reach > l.reach && (l.reach = _.reach);
                  }
                }
              }
            }
          }
        }
      }(e, a, n, a.head, 0), function (e) {
        var n = [],
            r = e.head.next;

        for (; r !== e.tail;) {
          n.push(r.value), r = r.next;
        }

        return n;
      }(a);
    },
    hooks: {
      all: {},
      add: function add(e, n) {
        var r = M.hooks.all;
        r[e] = r[e] || [], r[e].push(n);
      },
      run: function run(e, n) {
        var r = M.hooks.all[e];
        if (r && r.length) for (var t, a = 0; t = r[a++];) {
          t(n);
        }
      }
    },
    Token: W
  };

  function W(e, n, r, t) {
    this.type = e, this.content = n, this.alias = r, this.length = 0 | (t || "").length;
  }

  function z(e, n, r, t) {
    e.lastIndex = n;
    var a = e.exec(r);

    if (a && t && a[1]) {
      var i = a[1].length;
      a.index += i, a[0] = a[0].slice(i);
    }

    return a;
  }

  function i() {
    var e = {
      value: null,
      prev: null,
      next: null
    },
        n = {
      value: null,
      prev: e,
      next: null
    };
    e.next = n, this.head = e, this.tail = n, this.length = 0;
  }

  function I(e, n, r) {
    var t = n.next,
        a = {
      value: r,
      prev: n,
      next: t
    };
    return n.next = a, t.prev = a, e.length++, a;
  }

  function q(e, n, r) {
    for (var t = n.next, a = 0; a < r && t !== e.tail; a++) {
      t = t.next;
    }

    (n.next = t).prev = n, e.length -= a;
  }

  if (u.Prism = M, W.stringify = function n(e, r) {
    if ("string" == typeof e) return e;

    if (Array.isArray(e)) {
      var t = "";
      return e.forEach(function (e) {
        t += n(e, r);
      }), t;
    }

    var a = {
      type: e.type,
      content: n(e.content, r),
      tag: "span",
      classes: ["token", e.type],
      attributes: {},
      language: r
    },
        i = e.alias;
    i && (Array.isArray(i) ? Array.prototype.push.apply(a.classes, i) : a.classes.push(i)), M.hooks.run("wrap", a);
    var l = "";

    for (var o in a.attributes) {
      l += " " + o + '="' + (a.attributes[o] || "").replace(/"/g, "&quot;") + '"';
    }

    return "<" + a.tag + ' class="' + a.classes.join(" ") + '"' + l + ">" + a.content + "</" + a.tag + ">";
  }, !u.document) return u.addEventListener && (M.disableWorkerMessageHandler || u.addEventListener("message", function (e) {
    var n = JSON.parse(e.data),
        r = n.language,
        t = n.code,
        a = n.immediateClose;
    u.postMessage(M.highlight(t, M.languages[r], r)), a && u.close();
  }, !1)), M;
  var e = M.util.currentScript();

  function r() {
    M.manual || M.highlightAll();
  }

  if (e && (M.filename = e.src, e.hasAttribute("data-manual") && (M.manual = !0)), !M.manual) {
    var t = document.readyState;
    "loading" === t || "interactive" === t && e && e.defer ? document.addEventListener("DOMContentLoaded", r) : window.requestAnimationFrame ? window.requestAnimationFrame(r) : window.setTimeout(r, 16);
  }

  return M;
}(_self);

 true && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/prismjs/themes/prism.css":
/*!**************************************!*\
  !*** ./src/prismjs/themes/prism.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prismjs/themes/prism.css */ "./src/prismjs/themes/prism.css");
/* harmony import */ var _prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prismjs_prismjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prismjs/prismjs */ "./src/prismjs/prismjs.js");
/* harmony import */ var _prismjs_prismjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prismjs_prismjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prismjs_plugins_line_numbers_line_numbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prismjs/plugins/line-numbers/line-numbers */ "./src/prismjs/plugins/line-numbers/line-numbers.js");
/* harmony import */ var _prismjs_plugins_line_numbers_line_numbers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prismjs_plugins_line_numbers_line_numbers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prismjs_plugins_line_numbers_line_numbers_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prismjs/plugins/line-numbers/line-numbers.css */ "./src/prismjs/plugins/line-numbers/line-numbers.css");
/* harmony import */ var _prismjs_plugins_line_numbers_line_numbers_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prismjs_plugins_line_numbers_line_numbers_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _prismjs_plugins_autoloader_autoloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prismjs/plugins/autoloader/autoloader */ "./src/prismjs/plugins/autoloader/autoloader.js");
/* harmony import */ var _prismjs_plugins_autoloader_autoloader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prismjs_plugins_autoloader_autoloader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _prismjs_plugins_css_attribute_formater_css_attribute_formate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prismjs/plugins/css-attribute-formater/css-attribute-formate */ "./src/prismjs/plugins/css-attribute-formater/css-attribute-formate.js");
/* harmony import */ var _prismjs_plugins_css_attribute_formater_css_attribute_formate__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_prismjs_plugins_css_attribute_formater_css_attribute_formate__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _prismjs_plugins_preview_preview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prismjs/plugins/preview/preview */ "./src/prismjs/plugins/preview/preview.js");
/* harmony import */ var _prismjs_plugins_preview_preview__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_prismjs_plugins_preview_preview__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _prismjs_plugins_preview_preview_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prismjs/plugins/preview/preview.css */ "./src/prismjs/plugins/preview/preview.css");
/* harmony import */ var _prismjs_plugins_preview_preview_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_prismjs_plugins_preview_preview_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _prismjs_plugins_inline_colors_inline_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prismjs/plugins/inline-colors/inline-color */ "./src/prismjs/plugins/inline-colors/inline-color.js");
/* harmony import */ var _prismjs_plugins_inline_colors_inline_color__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_prismjs_plugins_inline_colors_inline_color__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _prismjs_plugins_inline_colors_inline_color_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./prismjs/plugins/inline-colors/inline-color.css */ "./src/prismjs/plugins/inline-colors/inline-color.css");
/* harmony import */ var _prismjs_plugins_inline_colors_inline_color_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_prismjs_plugins_inline_colors_inline_color_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _prismjs_plugins_toolbar_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./prismjs/plugins/toolbar/toolbar */ "./src/prismjs/plugins/toolbar/toolbar.js");
/* harmony import */ var _prismjs_plugins_toolbar_toolbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_prismjs_plugins_toolbar_toolbar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _prismjs_plugins_toolbar_toolbar_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./prismjs/plugins/toolbar/toolbar.css */ "./src/prismjs/plugins/toolbar/toolbar.css");
/* harmony import */ var _prismjs_plugins_toolbar_toolbar_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_prismjs_plugins_toolbar_toolbar_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _prismjs_plugins_copy_to_clipboard_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./prismjs/plugins/copy-to-clipboard/copy-to-clipboard */ "./src/prismjs/plugins/copy-to-clipboard/copy-to-clipboard.js");
/* harmony import */ var _prismjs_plugins_copy_to_clipboard_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_prismjs_plugins_copy_to_clipboard_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_12__);




Prism.plugins.autoloader.languages_path = path_prismjs;
Prism.hooks.add('before-highlight', function (env) {
  env.element.innerHTML = env.element.innerHTML.replace(/<br\s*\/?>/g, '\n');
  env.code = env.element.textContent.replace(/^(?:\r?\n|\r)/, '');
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map