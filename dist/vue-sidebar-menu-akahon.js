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
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "12ac":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("819f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("54989440", content, shadowRoot)
};

/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "35d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesToShadowDOM; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (Object({"NODE_ENV":"production","BASE_URL":"/vue-sidebar-menu-akahon/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name || value != null) {
      return true
    }
    return value
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      const self = super();
      self.attachShadow({ mode: 'open' });

      const wrapper = self._wrapper = new Vue({
        name: 'shadow-root',
        customElement: self,
        shadowRoot: self.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === self) {
            syncAttribute(self, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            self.childNodes
          ));
        }
      });
      observer.observe(self, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__("24fb");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"ea172532-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Sidebar-menu-akahon.vue?vue&type=template&id=33e83dfe&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar",class:_vm.isOpened ? 'open' : '',style:(_vm.cssVars)},[_c('div',{staticClass:"logo-details",staticStyle:{"margin":"6px 14px 0 14px"}},[(_vm.menuLogo)?_c('img',{staticClass:"menu-logo icon",attrs:{"src":_vm.menuLogo,"alt":"menu-logo"}}):_c('i',{staticClass:"bx icon",class:_vm.menuIcon}),_c('div',{staticClass:"logo_name"},[_vm._v(" "+_vm._s(_vm.menuTitle)+" ")]),_c('i',{staticClass:"bx",class:_vm.isOpened ? 'bx-menu-alt-right' : 'bx-menu',attrs:{"id":"btn"},on:{"click":function($event){_vm.isOpened = !_vm.isOpened}}})]),_c('div',{staticStyle:{"display":"flex","flex-direction":"column","justify-content":"space-between","flex-grow":"1","max-height":"calc(100% - 60px)"}},[_c('div',{staticStyle:{"margin":"6px 14px 0 14px"},attrs:{"id":"my-scroll"}},[_c('ul',{staticClass:"nav-list",staticStyle:{"overflow":"visible"}},[(_vm.isSearch)?_c('li',{attrs:{"id":"links_search"},on:{"click":function($event){_vm.isOpened = true}}},[_c('i',{staticClass:"bx bx-search"}),_c('input',{attrs:{"type":"text","placeholder":_vm.searchPlaceholder},on:{"input":function($event){return _vm.$emit('search-input-emit', $event.target.value)}}}),_c('span',{staticClass:"tooltip",attrs:{"data-target":"links_search"}},[_vm._v(_vm._s(_vm.searchTooltip))])]):_vm._e(),_vm._l((_vm.menuItems),function(menuItem,index){return _c('li',{key:index,attrs:{"id":'links_' + index}},[(_vm.isUsedVueRouter)?_c('router-link',{attrs:{"to":menuItem.link}},[_c('i',{staticClass:"bx",class:menuItem.icon || 'bx-square-rounded'}),_c('span',{staticClass:"links_name"},[_vm._v(_vm._s(menuItem.name))])]):_c('a',{attrs:{"href":menuItem.link},on:{"click":function($event){$event.stopPropagation();$event.preventDefault();return _vm.$emit('menuItemClcked', menuItem.link)}}},[_c('i',{staticClass:"bx",class:menuItem.icon || 'bx-square-rounded'}),_c('span',{staticClass:"links_name"},[_vm._v(_vm._s(menuItem.name))])]),_c('span',{staticClass:"tooltip",attrs:{"data-target":'links_' + index}},[_vm._v(_vm._s(menuItem.tooltip || menuItem.name))])],1)})],2)]),(_vm.isLoggedIn)?_c('div',{staticClass:"profile"},[_c('div',{staticClass:"profile-details"},[(_vm.profileImg)?_c('img',{attrs:{"src":_vm.profileImg,"alt":"profileImg"}}):_c('i',{staticClass:"bx bxs-user-rectangle"}),_c('div',{staticClass:"name_job"},[_c('div',{staticClass:"name"},[_vm._v(" "+_vm._s(_vm.profileName)+" ")]),_c('div',{staticClass:"job"},[_vm._v(" "+_vm._s(_vm.profileRole)+" ")])])]),(_vm.isExitButton)?_c('i',{staticClass:"bx bx-log-out",attrs:{"id":"log_out"},on:{"click":function($event){$event.stopPropagation();return _vm.$emit('button-exit-clicked')}}}):_vm._e()]):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Sidebar-menu-akahon.vue?vue&type=template&id=33e83dfe&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Sidebar-menu-akahon.vue?vue&type=script&lang=js&shadow
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Sidebar_menu_akahonvue_type_script_lang_js_shadow = ({
  name: 'SidebarMenuAkahon',
  props: {
    //! Menu settings
    isMenuOpen: {
      type: Boolean,
      default: true
    },
    isUsedVueRouter: {
      type: Boolean,
      default: false
    },
    menuTitle: {
      type: String,
      default: 'Akahon'
    },
    menuLogo: {
      type: String,
      default: ''
    },
    menuIcon: {
      type: String,
      default: 'bxl-c-plus-plus'
    },
    isPaddingLeft: {
      type: Boolean,
      default: true
    },
    menuOpenedPaddingLeftBody: {
      type: String,
      default: '250px'
    },
    menuClosedPaddingLeftBody: {
      type: String,
      default: '78px'
    },
    //! Menu items
    menuItems: {
      type: Array,
      default: () => [{
        link: '#',
        name: 'Dashboard',
        tooltip: 'Dashboard',
        icon: 'bx-grid-alt'
      }, {
        link: '#',
        name: 'User',
        tooltip: 'User',
        icon: 'bx-user'
      }, {
        link: '#',
        name: 'Messages',
        tooltip: 'Messages',
        icon: 'bx-chat'
      }, {
        link: '#',
        name: 'Analytics',
        tooltip: 'Analytics',
        icon: 'bx-pie-chart-alt-2'
      }, {
        link: '#',
        name: 'File Manager',
        tooltip: 'Files',
        icon: 'bx-folder'
      }, {
        link: '#',
        name: 'Order',
        tooltip: 'Order',
        icon: 'bx-cart-alt'
      }, {
        link: '#',
        name: 'Saved',
        tooltip: 'Saved',
        icon: 'bx-heart'
      }, {
        link: '#',
        name: 'Setting',
        tooltip: 'Setting',
        icon: 'bx-cog'
      }]
    },
    //! Search
    isSearch: {
      type: Boolean,
      default: true
    },
    searchPlaceholder: {
      type: String,
      default: 'Search...'
    },
    searchTooltip: {
      type: String,
      default: 'Search'
    },
    //! Profile detailes
    profileImg: {
      type: String,
      default: ''
    },
    profileName: {
      type: String,
      default: 'Fayzullo Saidakbarov'
    },
    profileRole: {
      type: String,
      default: 'Frontend vue developer'
    },
    isExitButton: {
      type: Boolean,
      default: true
    },
    isLoggedIn: {
      type: Boolean,
      default: true
    },
    //! Styles
    bgColor: {
      type: String,
      default: '#11101d'
    },
    secondaryColor: {
      type: String,
      default: '#1d1b31'
    },
    homeSectionColor: {
      type: String,
      default: '#e4e9f7'
    },
    logoTitleColor: {
      type: String,
      default: '#fff'
    },
    iconsColor: {
      type: String,
      default: '#fff'
    },
    itemsTooltipColor: {
      type: String,
      default: '#e4e9f7'
    },
    searchInputTextColor: {
      type: String,
      default: '#fff'
    },
    menuItemsHoverColor: {
      type: String,
      default: '#fff'
    },
    menuItemsTextColor: {
      type: String,
      default: '#fff'
    },
    menuFooterTextColor: {
      type: String,
      default: '#fff'
    }
  },

  data() {
    return {
      isOpened: false
    };
  },

  mounted() {
    this.isOpened = this.isMenuOpen;
    this.tooltipAttached();
  },

  computed: {
    cssVars() {
      return {
        // '--padding-left-body': this.isOpened ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody,
        '--bg-color': this.bgColor,
        '--secondary-color': this.secondaryColor,
        '--home-section-color': this.homeSectionColor,
        '--logo-title-color': this.logoTitleColor,
        '--icons-color': this.iconsColor,
        '--items-tooltip-color': this.itemsTooltipColor,
        '--serach-input-text-color': this.searchInputTextColor,
        '--menu-items-hover-color': this.menuItemsHoverColor,
        '--menu-items-text-color': this.menuItemsTextColor,
        '--menu-footer-text-color': this.menuFooterTextColor
      };
    }

  },
  watch: {
    isOpened(val) {
      window.document.body.style.paddingLeft = this.isOpened && this.isPaddingLeft ? this.menuOpenedPaddingLeftBody : this.menuClosedPaddingLeftBody;
    }

  },
  methods: {
    tooltipAttached() {
      const tooltips = document.querySelectorAll('.tooltip');
      tooltips.forEach(tooltip => {
        document.body.appendChild(tooltip);
      });
      document.querySelectorAll('.tooltip').forEach(tooltip => {
        const targetID = tooltip.dataset.target;
        const target = document.querySelector(`#${targetID}`);
        if (!target) return;
        target.addEventListener('mouseenter', () => {
          const targetPosition = target.getBoundingClientRect();
          if (this.isOpened) return;
          tooltip.style.top = `${targetPosition.top + window.scrollY}px`;
          tooltip.style.left = `${targetPosition.left + targetPosition.width + 20}px`;
          tooltip.classList.add('active');
        });
        target.addEventListener('mouseleave', () => {
          tooltip.classList.remove('active');
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./src/components/Sidebar-menu-akahon.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var components_Sidebar_menu_akahonvue_type_script_lang_js_shadow = (Sidebar_menu_akahonvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/components/Sidebar-menu-akahon.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__("ae49")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  components_Sidebar_menu_akahonvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var Sidebar_menu_akahonshadow = (component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('vue-sidebar-menu-akahon', vue_wc_wrapper(external_Vue_default.a, Sidebar_menu_akahonshadow))

/***/ }),

/***/ "819f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap);"]);
exports.push([module.i, "@import url(https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css);"]);
// Module
exports.push([module.i, "*{margin:0;padding:0;box-sizing:border-box;font-family:Poppins,sans-serif}body{transition:all .5s ease}.name_job{margin-bottom:5px}.menu-logo{width:30px;margin:0 10px 0 10px}.sidebar{position:relative;display:flex;flex-direction:column;position:fixed;left:0;top:0;height:100%;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content;width:78px;background:var(--bg-color);z-index:99;transition:all .5s ease}.sidebar.open{width:250px}.sidebar .logo-details{height:60px;display:flex;align-items:center;position:relative}.sidebar .logo-details .icon{opacity:0;transition:all .5s ease}.sidebar .logo-details .logo_name{color:var(--logo-title-color);font-size:20px;font-weight:600;opacity:0;transition:all .5s ease}.sidebar.open .logo-details .icon,.sidebar.open .logo-details .logo_name{opacity:1}.sidebar .logo-details #btn{position:absolute;top:50%;right:0;transform:translateY(-50%);font-size:22px;transition:all .4s ease;font-size:23px;text-align:center;cursor:pointer;transition:all .5s ease}.sidebar.open .logo-details #btn{text-align:right}.sidebar i{color:var(--icons-color);height:60px;min-width:50px;font-size:28px;text-align:center;line-height:60px}.sidebar .nav-list{margin-top:20px}.sidebar li{position:relative;margin:8px 0;list-style:none}.tooltip{position:absolute;z-index:3;background:var(--items-tooltip-color);box-shadow:0 5px 10px rgba(0,0,0,.3);padding:6px 12px;border-radius:4px;font-size:15px;font-weight:400;opacity:0;white-space:nowrap;pointer-events:none;transition:0s}.tooltip.active{opacity:1;pointer-events:auto;transition:all .4s ease;transform:translateY(25%)}.sidebar.open li .tooltip{display:none}.sidebar input{font-size:15px;color:var(--serach-input-text-color);font-weight:400;outline:none;height:50px;width:100%;width:50px;border:none;border-radius:12px;transition:all .5s ease;background:var(--secondary-color)}.sidebar.open input{padding:0 20px 0 50px;width:100%}.sidebar .bx-search{position:absolute;top:50%;left:0;transform:translateY(-50%);font-size:22px}.sidebar .bx-search,.sidebar.open .bx-search:hover{background:var(--secondary-color);color:var(--icons-color)}.sidebar .bx-search:hover{background:var(--menu-items-hover-color);color:var(--bg-color)}.sidebar li a{display:flex;height:100%;width:100%;border-radius:12px;align-items:center;text-decoration:none;transition:all .4s ease;background:var(--bg-color)}.sidebar li a:hover{background:var(--menu-items-hover-color)}.sidebar li a .links_name{color:var(--menu-items-text-color);font-size:15px;font-weight:400;white-space:nowrap;opacity:0;pointer-events:none;transition:.4s}.sidebar.open li a .links_name{opacity:1;pointer-events:auto}.sidebar li a:hover .links_name,.sidebar li a:hover i{transition:all .5s ease;color:var(--bg-color)}.sidebar li router-link{display:flex;height:100%;width:100%;border-radius:12px;align-items:center;text-decoration:none;transition:all .4s ease;background:var(--bg-color)}.sidebar li router-link:hover{background:var(--menu-items-hover-color)}.sidebar li router-link .links_name{color:var(--menu-items-text-color);font-size:15px;font-weight:400;white-space:nowrap;opacity:0;pointer-events:none;transition:.4s}.sidebar.open li router-link .links_name{opacity:1;pointer-events:auto}.sidebar li router-link:hover .links_name,.sidebar li router-link:hover i{transition:all .5s ease;color:var(--bg-color)}.sidebar li i{height:50px;line-height:50px;font-size:18px;border-radius:12px}.sidebar div.profile{position:relative;height:60px;width:78px;padding:10px 14px;background:var(--secondary-color);transition:all .5s ease;overflow:hidden}.sidebar.open div.profile{width:250px}.sidebar div .profile-details{display:flex;align-items:center;flex-wrap:nowrap}.sidebar div img{height:45px;width:45px;-o-object-fit:cover;object-fit:cover;border-radius:6px;margin-right:10px}.sidebar div.profile .job,.sidebar div.profile .name{font-size:15px;font-weight:400;color:var(--menu-footer-text-color);white-space:nowrap}.sidebar div.profile .job{font-size:12px}.sidebar .profile #log_out{position:absolute;top:50%;right:0;transform:translateY(-50%);background:var(--secondary-color);width:100%;height:60px;line-height:60px;border-radius:0;transition:all .5s ease}.sidebar.open .profile #log_out{width:50px;background:var(--secondary-color);opacity:0}.sidebar.open .profile:hover #log_out{opacity:1}.sidebar.open .profile #log_out:hover{opacity:1;color:red}.sidebar .profile #log_out:hover{color:red}.home-section{position:relative;background:var(--home-section-color);min-height:100vh;top:0;left:78px;width:calc(100% - 78px);transition:all .5s ease;z-index:2}.sidebar.open~.home-section{left:250px;width:calc(100% - 250px)}.home-section .text{display:inline-block;color:var(--bg-color);font-size:25px;font-weight:500;margin:18px}#my-scroll,.my-scroll-active{overflow-y:auto}#my-scroll{height:calc(100% - 60px)}#my-scroll::-webkit-scrollbar{display:none}@media (max-width:420px){.sidebar li .tooltip{display:none}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "ae49":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_menu_akahon_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("12ac");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_menu_akahon_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_menu_akahon_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_menu_akahon_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_menu_akahon_vue_vue_type_style_index_0_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

/******/ });
//# sourceMappingURL=vue-sidebar-menu-akahon.js.map