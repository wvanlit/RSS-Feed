var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// build/_snowpack/env.js
var env_exports = {};
__export(env_exports, {
  MODE: () => MODE,
  NODE_ENV: () => NODE_ENV,
  SSR: () => SSR
});
var MODE = "production";
var NODE_ENV = "production";
var SSR = false;

// build/_snowpack/pkg/reflect-metadata.js
function defaultSetTimout() {
  throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
  throw new Error("clearTimeout has not been defined");
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== "undefined") {
  globalContext = window;
} else if (typeof self !== "undefined") {
  globalContext = self;
} else {
  globalContext = {};
}
if (typeof globalContext.setTimeout === "function") {
  cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === "function") {
  cachedClearTimeout = clearTimeout;
}
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    return setTimeout(fun, 0);
  }
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e2) {
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    return clearTimeout(marker);
  }
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      return cachedClearTimeout.call(null, marker);
    } catch (e2) {
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
function nextTick(fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var title = "browser";
var platform = "browser";
var browser = true;
var argv = [];
var version = "";
var versions = {};
var release = {};
var config = {};
function noop() {
}
var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;
function binding(name) {
  throw new Error("process.binding is not supported");
}
function cwd() {
  return "/";
}
function chdir(dir) {
  throw new Error("process.chdir is not supported");
}
function umask() {
  return 0;
}
var performance = globalContext.performance || {};
var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function() {
  return new Date().getTime();
};
function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds, nanoseconds];
}
var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1e3;
}
var process = {
  nextTick,
  title,
  browser,
  env: {NODE_ENV: "production"},
  argv,
  version,
  versions,
  on,
  addListener,
  once,
  off,
  removeListener,
  removeAllListeners,
  emit,
  binding,
  cwd,
  chdir,
  umask,
  hrtime,
  platform,
  release,
  config,
  uptime
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect2;
(function(Reflect3) {
  (function(factory) {
    var root = typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : Function("return this;")();
    var exporter = makeExporter(Reflect3);
    if (typeof root.Reflect === "undefined") {
      root.Reflect = Reflect3;
    } else {
      exporter = makeExporter(root.Reflect, exporter);
    }
    factory(exporter);
    function makeExporter(target, previous) {
      return function(key, value) {
        if (typeof target[key] !== "function") {
          Object.defineProperty(target, key, {configurable: true, writable: true, value});
        }
        if (previous)
          previous(key, value);
      };
    }
  })(function(exporter) {
    var hasOwn = Object.prototype.hasOwnProperty;
    var supportsSymbol = typeof Symbol === "function";
    var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
    var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
    var supportsCreate = typeof Object.create === "function";
    var supportsProto = {__proto__: []} instanceof Array;
    var downLevel = !supportsCreate && !supportsProto;
    var HashMap = {
      create: supportsCreate ? function() {
        return MakeDictionary(Object.create(null));
      } : supportsProto ? function() {
        return MakeDictionary({__proto__: null});
      } : function() {
        return MakeDictionary({});
      },
      has: downLevel ? function(map, key) {
        return hasOwn.call(map, key);
      } : function(map, key) {
        return key in map;
      },
      get: downLevel ? function(map, key) {
        return hasOwn.call(map, key) ? map[key] : void 0;
      } : function(map, key) {
        return map[key];
      }
    };
    var functionPrototype = Object.getPrototypeOf(Function);
    var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
    var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
    var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    var Metadata = new _WeakMap();
    function decorate(decorators, target, propertyKey, attributes) {
      if (!IsUndefined(propertyKey)) {
        if (!IsArray(decorators))
          throw new TypeError();
        if (!IsObject(target))
          throw new TypeError();
        if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
          throw new TypeError();
        if (IsNull(attributes))
          attributes = void 0;
        propertyKey = ToPropertyKey(propertyKey);
        return DecorateProperty(decorators, target, propertyKey, attributes);
      } else {
        if (!IsArray(decorators))
          throw new TypeError();
        if (!IsConstructor(target))
          throw new TypeError();
        return DecorateConstructor(decorators, target);
      }
    }
    exporter("decorate", decorate);
    function metadata(metadataKey, metadataValue) {
      function decorator(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
          throw new TypeError();
        OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }
      return decorator;
    }
    exporter("metadata", metadata);
    function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
    }
    exporter("defineMetadata", defineMetadata);
    function hasMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryHasMetadata(metadataKey, target, propertyKey);
    }
    exporter("hasMetadata", hasMetadata);
    function hasOwnMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
    }
    exporter("hasOwnMetadata", hasOwnMetadata);
    function getMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryGetMetadata(metadataKey, target, propertyKey);
    }
    exporter("getMetadata", getMetadata);
    function getOwnMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
    }
    exporter("getOwnMetadata", getOwnMetadata);
    function getMetadataKeys(target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryMetadataKeys(target, propertyKey);
    }
    exporter("getMetadataKeys", getMetadataKeys);
    function getOwnMetadataKeys(target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      return OrdinaryOwnMetadataKeys(target, propertyKey);
    }
    exporter("getOwnMetadataKeys", getOwnMetadataKeys);
    function deleteMetadata(metadataKey, target, propertyKey) {
      if (!IsObject(target))
        throw new TypeError();
      if (!IsUndefined(propertyKey))
        propertyKey = ToPropertyKey(propertyKey);
      var metadataMap = GetOrCreateMetadataMap(target, propertyKey, false);
      if (IsUndefined(metadataMap))
        return false;
      if (!metadataMap.delete(metadataKey))
        return false;
      if (metadataMap.size > 0)
        return true;
      var targetMetadata = Metadata.get(target);
      targetMetadata.delete(propertyKey);
      if (targetMetadata.size > 0)
        return true;
      Metadata.delete(target);
      return true;
    }
    exporter("deleteMetadata", deleteMetadata);
    function DecorateConstructor(decorators, target) {
      for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        var decorated = decorator(target);
        if (!IsUndefined(decorated) && !IsNull(decorated)) {
          if (!IsConstructor(decorated))
            throw new TypeError();
          target = decorated;
        }
      }
      return target;
    }
    function DecorateProperty(decorators, target, propertyKey, descriptor) {
      for (var i = decorators.length - 1; i >= 0; --i) {
        var decorator = decorators[i];
        var decorated = decorator(target, propertyKey, descriptor);
        if (!IsUndefined(decorated) && !IsNull(decorated)) {
          if (!IsObject(decorated))
            throw new TypeError();
          descriptor = decorated;
        }
      }
      return descriptor;
    }
    function GetOrCreateMetadataMap(O, P, Create) {
      var targetMetadata = Metadata.get(O);
      if (IsUndefined(targetMetadata)) {
        if (!Create)
          return void 0;
        targetMetadata = new _Map();
        Metadata.set(O, targetMetadata);
      }
      var metadataMap = targetMetadata.get(P);
      if (IsUndefined(metadataMap)) {
        if (!Create)
          return void 0;
        metadataMap = new _Map();
        targetMetadata.set(P, metadataMap);
      }
      return metadataMap;
    }
    function OrdinaryHasMetadata(MetadataKey, O, P) {
      var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn2)
        return true;
      var parent = OrdinaryGetPrototypeOf(O);
      if (!IsNull(parent))
        return OrdinaryHasMetadata(MetadataKey, parent, P);
      return false;
    }
    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
      var metadataMap = GetOrCreateMetadataMap(O, P, false);
      if (IsUndefined(metadataMap))
        return false;
      return ToBoolean(metadataMap.has(MetadataKey));
    }
    function OrdinaryGetMetadata(MetadataKey, O, P) {
      var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
      if (hasOwn2)
        return OrdinaryGetOwnMetadata(MetadataKey, O, P);
      var parent = OrdinaryGetPrototypeOf(O);
      if (!IsNull(parent))
        return OrdinaryGetMetadata(MetadataKey, parent, P);
      return void 0;
    }
    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
      var metadataMap = GetOrCreateMetadataMap(O, P, false);
      if (IsUndefined(metadataMap))
        return void 0;
      return metadataMap.get(MetadataKey);
    }
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
      var metadataMap = GetOrCreateMetadataMap(O, P, true);
      metadataMap.set(MetadataKey, MetadataValue);
    }
    function OrdinaryMetadataKeys(O, P) {
      var ownKeys = OrdinaryOwnMetadataKeys(O, P);
      var parent = OrdinaryGetPrototypeOf(O);
      if (parent === null)
        return ownKeys;
      var parentKeys = OrdinaryMetadataKeys(parent, P);
      if (parentKeys.length <= 0)
        return ownKeys;
      if (ownKeys.length <= 0)
        return parentKeys;
      var set = new _Set();
      var keys = [];
      for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
        var key = ownKeys_1[_i];
        var hasKey = set.has(key);
        if (!hasKey) {
          set.add(key);
          keys.push(key);
        }
      }
      for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
        var key = parentKeys_1[_a];
        var hasKey = set.has(key);
        if (!hasKey) {
          set.add(key);
          keys.push(key);
        }
      }
      return keys;
    }
    function OrdinaryOwnMetadataKeys(O, P) {
      var keys = [];
      var metadataMap = GetOrCreateMetadataMap(O, P, false);
      if (IsUndefined(metadataMap))
        return keys;
      var keysObj = metadataMap.keys();
      var iterator = GetIterator(keysObj);
      var k = 0;
      while (true) {
        var next = IteratorStep(iterator);
        if (!next) {
          keys.length = k;
          return keys;
        }
        var nextValue = IteratorValue(next);
        try {
          keys[k] = nextValue;
        } catch (e) {
          try {
            IteratorClose(iterator);
          } finally {
            throw e;
          }
        }
        k++;
      }
    }
    function Type(x) {
      if (x === null)
        return 1;
      switch (typeof x) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return x === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function IsUndefined(x) {
      return x === void 0;
    }
    function IsNull(x) {
      return x === null;
    }
    function IsSymbol(x) {
      return typeof x === "symbol";
    }
    function IsObject(x) {
      return typeof x === "object" ? x !== null : typeof x === "function";
    }
    function ToPrimitive(input, PreferredType) {
      switch (Type(input)) {
        case 0:
          return input;
        case 1:
          return input;
        case 2:
          return input;
        case 3:
          return input;
        case 4:
          return input;
        case 5:
          return input;
      }
      var hint = PreferredType === 3 ? "string" : PreferredType === 5 ? "number" : "default";
      var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
      if (exoticToPrim !== void 0) {
        var result = exoticToPrim.call(input, hint);
        if (IsObject(result))
          throw new TypeError();
        return result;
      }
      return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
    }
    function OrdinaryToPrimitive(O, hint) {
      if (hint === "string") {
        var toString_1 = O.toString;
        if (IsCallable(toString_1)) {
          var result = toString_1.call(O);
          if (!IsObject(result))
            return result;
        }
        var valueOf = O.valueOf;
        if (IsCallable(valueOf)) {
          var result = valueOf.call(O);
          if (!IsObject(result))
            return result;
        }
      } else {
        var valueOf = O.valueOf;
        if (IsCallable(valueOf)) {
          var result = valueOf.call(O);
          if (!IsObject(result))
            return result;
        }
        var toString_2 = O.toString;
        if (IsCallable(toString_2)) {
          var result = toString_2.call(O);
          if (!IsObject(result))
            return result;
        }
      }
      throw new TypeError();
    }
    function ToBoolean(argument) {
      return !!argument;
    }
    function ToString(argument) {
      return "" + argument;
    }
    function ToPropertyKey(argument) {
      var key = ToPrimitive(argument, 3);
      if (IsSymbol(key))
        return key;
      return ToString(key);
    }
    function IsArray(argument) {
      return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
    }
    function IsCallable(argument) {
      return typeof argument === "function";
    }
    function IsConstructor(argument) {
      return typeof argument === "function";
    }
    function IsPropertyKey(argument) {
      switch (Type(argument)) {
        case 3:
          return true;
        case 4:
          return true;
        default:
          return false;
      }
    }
    function GetMethod(V, P) {
      var func2 = V[P];
      if (func2 === void 0 || func2 === null)
        return void 0;
      if (!IsCallable(func2))
        throw new TypeError();
      return func2;
    }
    function GetIterator(obj) {
      var method = GetMethod(obj, iteratorSymbol);
      if (!IsCallable(method))
        throw new TypeError();
      var iterator = method.call(obj);
      if (!IsObject(iterator))
        throw new TypeError();
      return iterator;
    }
    function IteratorValue(iterResult) {
      return iterResult.value;
    }
    function IteratorStep(iterator) {
      var result = iterator.next();
      return result.done ? false : result;
    }
    function IteratorClose(iterator) {
      var f = iterator["return"];
      if (f)
        f.call(iterator);
    }
    function OrdinaryGetPrototypeOf(O) {
      var proto = Object.getPrototypeOf(O);
      if (typeof O !== "function" || O === functionPrototype)
        return proto;
      if (proto !== functionPrototype)
        return proto;
      var prototype = O.prototype;
      var prototypeProto = prototype && Object.getPrototypeOf(prototype);
      if (prototypeProto == null || prototypeProto === Object.prototype)
        return proto;
      var constructor = prototypeProto.constructor;
      if (typeof constructor !== "function")
        return proto;
      if (constructor === O)
        return proto;
      return constructor;
    }
    function CreateMapPolyfill() {
      var cacheSentinel = {};
      var arraySentinel = [];
      var MapIterator = function() {
        function MapIterator2(keys, values, selector) {
          this._index = 0;
          this._keys = keys;
          this._values = values;
          this._selector = selector;
        }
        MapIterator2.prototype["@@iterator"] = function() {
          return this;
        };
        MapIterator2.prototype[iteratorSymbol] = function() {
          return this;
        };
        MapIterator2.prototype.next = function() {
          var index = this._index;
          if (index >= 0 && index < this._keys.length) {
            var result = this._selector(this._keys[index], this._values[index]);
            if (index + 1 >= this._keys.length) {
              this._index = -1;
              this._keys = arraySentinel;
              this._values = arraySentinel;
            } else {
              this._index++;
            }
            return {value: result, done: false};
          }
          return {value: void 0, done: true};
        };
        MapIterator2.prototype.throw = function(error) {
          if (this._index >= 0) {
            this._index = -1;
            this._keys = arraySentinel;
            this._values = arraySentinel;
          }
          throw error;
        };
        MapIterator2.prototype.return = function(value) {
          if (this._index >= 0) {
            this._index = -1;
            this._keys = arraySentinel;
            this._values = arraySentinel;
          }
          return {value, done: true};
        };
        return MapIterator2;
      }();
      return function() {
        function Map2() {
          this._keys = [];
          this._values = [];
          this._cacheKey = cacheSentinel;
          this._cacheIndex = -2;
        }
        Object.defineProperty(Map2.prototype, "size", {
          get: function() {
            return this._keys.length;
          },
          enumerable: true,
          configurable: true
        });
        Map2.prototype.has = function(key) {
          return this._find(key, false) >= 0;
        };
        Map2.prototype.get = function(key) {
          var index = this._find(key, false);
          return index >= 0 ? this._values[index] : void 0;
        };
        Map2.prototype.set = function(key, value) {
          var index = this._find(key, true);
          this._values[index] = value;
          return this;
        };
        Map2.prototype.delete = function(key) {
          var index = this._find(key, false);
          if (index >= 0) {
            var size = this._keys.length;
            for (var i = index + 1; i < size; i++) {
              this._keys[i - 1] = this._keys[i];
              this._values[i - 1] = this._values[i];
            }
            this._keys.length--;
            this._values.length--;
            if (key === this._cacheKey) {
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            }
            return true;
          }
          return false;
        };
        Map2.prototype.clear = function() {
          this._keys.length = 0;
          this._values.length = 0;
          this._cacheKey = cacheSentinel;
          this._cacheIndex = -2;
        };
        Map2.prototype.keys = function() {
          return new MapIterator(this._keys, this._values, getKey);
        };
        Map2.prototype.values = function() {
          return new MapIterator(this._keys, this._values, getValue);
        };
        Map2.prototype.entries = function() {
          return new MapIterator(this._keys, this._values, getEntry);
        };
        Map2.prototype["@@iterator"] = function() {
          return this.entries();
        };
        Map2.prototype[iteratorSymbol] = function() {
          return this.entries();
        };
        Map2.prototype._find = function(key, insert2) {
          if (this._cacheKey !== key) {
            this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
          }
          if (this._cacheIndex < 0 && insert2) {
            this._cacheIndex = this._keys.length;
            this._keys.push(key);
            this._values.push(void 0);
          }
          return this._cacheIndex;
        };
        return Map2;
      }();
      function getKey(key, _) {
        return key;
      }
      function getValue(_, value) {
        return value;
      }
      function getEntry(key, value) {
        return [key, value];
      }
    }
    function CreateSetPolyfill() {
      return function() {
        function Set2() {
          this._map = new _Map();
        }
        Object.defineProperty(Set2.prototype, "size", {
          get: function() {
            return this._map.size;
          },
          enumerable: true,
          configurable: true
        });
        Set2.prototype.has = function(value) {
          return this._map.has(value);
        };
        Set2.prototype.add = function(value) {
          return this._map.set(value, value), this;
        };
        Set2.prototype.delete = function(value) {
          return this._map.delete(value);
        };
        Set2.prototype.clear = function() {
          this._map.clear();
        };
        Set2.prototype.keys = function() {
          return this._map.keys();
        };
        Set2.prototype.values = function() {
          return this._map.values();
        };
        Set2.prototype.entries = function() {
          return this._map.entries();
        };
        Set2.prototype["@@iterator"] = function() {
          return this.keys();
        };
        Set2.prototype[iteratorSymbol] = function() {
          return this.keys();
        };
        return Set2;
      }();
    }
    function CreateWeakMapPolyfill() {
      var UUID_SIZE = 16;
      var keys = HashMap.create();
      var rootKey = CreateUniqueKey();
      return function() {
        function WeakMap2() {
          this._key = CreateUniqueKey();
        }
        WeakMap2.prototype.has = function(target) {
          var table = GetOrCreateWeakMapTable(target, false);
          return table !== void 0 ? HashMap.has(table, this._key) : false;
        };
        WeakMap2.prototype.get = function(target) {
          var table = GetOrCreateWeakMapTable(target, false);
          return table !== void 0 ? HashMap.get(table, this._key) : void 0;
        };
        WeakMap2.prototype.set = function(target, value) {
          var table = GetOrCreateWeakMapTable(target, true);
          table[this._key] = value;
          return this;
        };
        WeakMap2.prototype.delete = function(target) {
          var table = GetOrCreateWeakMapTable(target, false);
          return table !== void 0 ? delete table[this._key] : false;
        };
        WeakMap2.prototype.clear = function() {
          this._key = CreateUniqueKey();
        };
        return WeakMap2;
      }();
      function CreateUniqueKey() {
        var key;
        do
          key = "@@WeakMap@@" + CreateUUID();
        while (HashMap.has(keys, key));
        keys[key] = true;
        return key;
      }
      function GetOrCreateWeakMapTable(target, create) {
        if (!hasOwn.call(target, rootKey)) {
          if (!create)
            return void 0;
          Object.defineProperty(target, rootKey, {value: HashMap.create()});
        }
        return target[rootKey];
      }
      function FillRandomBytes(buffer, size) {
        for (var i = 0; i < size; ++i)
          buffer[i] = Math.random() * 255 | 0;
        return buffer;
      }
      function GenRandomBytes(size) {
        if (typeof Uint8Array === "function") {
          if (typeof crypto !== "undefined")
            return crypto.getRandomValues(new Uint8Array(size));
          if (typeof msCrypto !== "undefined")
            return msCrypto.getRandomValues(new Uint8Array(size));
          return FillRandomBytes(new Uint8Array(size), size);
        }
        return FillRandomBytes(new Array(size), size);
      }
      function CreateUUID() {
        var data = GenRandomBytes(UUID_SIZE);
        data[6] = data[6] & 79 | 64;
        data[8] = data[8] & 191 | 128;
        var result = "";
        for (var offset = 0; offset < UUID_SIZE; ++offset) {
          var byte = data[offset];
          if (offset === 4 || offset === 6 || offset === 8)
            result += "-";
          if (byte < 16)
            result += "0";
          result += byte.toString(16).toLowerCase();
        }
        return result;
      }
    }
    function MakeDictionary(obj) {
      obj.__ = void 0;
      delete obj.__;
      return obj;
    }
  });
})(Reflect2 || (Reflect2 = {}));

// build/_snowpack/pkg/svelte/internal.js
function noop2() {
}
var identity = (x) => x;
function is_promise(value) {
  return value && typeof value === "object" && typeof value.then === "function";
}
function run(fn) {
  return fn();
}
function blank_object() {
  return Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
var is_client = typeof window !== "undefined";
var now = is_client ? () => window.performance.now() : () => Date.now();
var raf = is_client ? (cb) => requestAnimationFrame(cb) : noop2;
var tasks = new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = {c: callback, f: fulfill});
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
var is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
function end_hydrating() {
  is_hydrating = false;
}
function append(target, node) {
  target.appendChild(node);
}
function get_root_for_style(node) {
  if (!node)
    return document;
  const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
  if (root && root.host) {
    return root;
  }
  return node.ownerDocument;
}
function append_empty_stylesheet(node) {
  const style_element = element("style");
  append_stylesheet(get_root_for_style(node), style_element);
  return style_element.sheet;
}
function append_stylesheet(node, style) {
  append(node.head || node, style);
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i])
      iterations[i].d(detaching);
  }
}
function element(name) {
  return document.createElement(name);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_data(text2, data) {
  data = "" + data;
  if (text2.wholeText !== data)
    text2.data = data;
}
function set_input_value(input, value) {
  input.value = value == null ? "" : value;
}
function custom_event(type, detail, bubbles = false) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, false, detail);
  return e;
}
var managed_styles = new Map();
var active = 0;
function hash(str) {
  let hash2 = 5381;
  let i = str.length;
  while (i--)
    hash2 = (hash2 << 5) - hash2 ^ str.charCodeAt(i);
  return hash2 >>> 0;
}
function create_style_information(doc, node) {
  const info = {stylesheet: append_empty_stylesheet(node), rules: {}};
  managed_styles.set(doc, info);
  return info;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
  const step = 16.666 / duration;
  let keyframes = "{\n";
  for (let p = 0; p <= 1; p += step) {
    const t = a + (b - a) * ease(p);
    keyframes += p * 100 + `%{${fn(t, 1 - t)}}
`;
  }
  const rule = keyframes + `100% {${fn(b, 1 - b)}}
}`;
  const name = `__svelte_${hash(rule)}_${uid}`;
  const doc = get_root_for_style(node);
  const {stylesheet, rules} = managed_styles.get(doc) || create_style_information(doc, node);
  if (!rules[name]) {
    rules[name] = true;
    stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
  }
  const animation = node.style.animation || "";
  node.style.animation = `${animation ? `${animation}, ` : ""}${name} ${duration}ms linear ${delay}ms 1 both`;
  active += 1;
  return name;
}
function delete_rule(node, name) {
  const previous = (node.style.animation || "").split(", ");
  const next = previous.filter(name ? (anim) => anim.indexOf(name) < 0 : (anim) => anim.indexOf("__svelte") === -1);
  const deleted = previous.length - next.length;
  if (deleted) {
    node.style.animation = next.join(", ");
    active -= deleted;
    if (!active)
      clear_rules();
  }
}
function clear_rules() {
  raf(() => {
    if (active)
      return;
    managed_styles.forEach((info) => {
      const {stylesheet} = info;
      let i = stylesheet.cssRules.length;
      while (i--)
        stylesheet.deleteRule(i);
      info.rules = {};
    });
    managed_styles.clear();
  });
}
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn) {
  get_current_component().$$.on_mount.push(fn);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail);
      callbacks.slice().forEach((fn) => {
        fn.call(component, event);
      });
    }
  };
}
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
function add_flush_callback(fn) {
  flush_callbacks.push(fn);
}
var seen_callbacks = new Set();
var flushidx = 0;
function flush() {
  const saved_component = current_component;
  do {
    while (flushidx < dirty_components.length) {
      const component = dirty_components[flushidx];
      flushidx++;
      set_current_component(component);
      update(component.$$);
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
var promise;
function wait() {
  if (!promise) {
    promise = Promise.resolve();
    promise.then(() => {
      promise = null;
    });
  }
  return promise;
}
function dispatch(node, direction, kind) {
  node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
}
var outroing = new Set();
var outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback) {
        if (detach2)
          block.d(1);
        callback();
      }
    });
    block.o(local);
  }
}
var null_transition = {duration: 0};
function create_in_transition(node, fn, params) {
  let config2 = fn(node, params);
  let running = false;
  let animation_name;
  let task;
  let uid = 0;
  function cleanup() {
    if (animation_name)
      delete_rule(node, animation_name);
  }
  function go() {
    const {delay = 0, duration = 300, easing = identity, tick: tick2 = noop2, css} = config2 || null_transition;
    if (css)
      animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
    tick2(0, 1);
    const start_time = now() + delay;
    const end_time = start_time + duration;
    if (task)
      task.abort();
    running = true;
    add_render_callback(() => dispatch(node, true, "start"));
    task = loop((now2) => {
      if (running) {
        if (now2 >= end_time) {
          tick2(1, 0);
          dispatch(node, true, "end");
          cleanup();
          return running = false;
        }
        if (now2 >= start_time) {
          const t = easing((now2 - start_time) / duration);
          tick2(t, 1 - t);
        }
      }
      return running;
    });
  }
  let started = false;
  return {
    start() {
      if (started)
        return;
      started = true;
      delete_rule(node);
      if (is_function(config2)) {
        config2 = config2();
        wait().then(go);
      } else {
        go();
      }
    },
    invalidate() {
      started = false;
    },
    end() {
      if (running) {
        cleanup();
        running = false;
      }
    }
  };
}
function create_bidirectional_transition(node, fn, params, intro) {
  let config2 = fn(node, params);
  let t = intro ? 0 : 1;
  let running_program = null;
  let pending_program = null;
  let animation_name = null;
  function clear_animation() {
    if (animation_name)
      delete_rule(node, animation_name);
  }
  function init2(program, duration) {
    const d = program.b - t;
    duration *= Math.abs(d);
    return {
      a: t,
      b: program.b,
      d,
      duration,
      start: program.start,
      end: program.start + duration,
      group: program.group
    };
  }
  function go(b) {
    const {delay = 0, duration = 300, easing = identity, tick: tick2 = noop2, css} = config2 || null_transition;
    const program = {
      start: now() + delay,
      b
    };
    if (!b) {
      program.group = outros;
      outros.r += 1;
    }
    if (running_program || pending_program) {
      pending_program = program;
    } else {
      if (css) {
        clear_animation();
        animation_name = create_rule(node, t, b, duration, delay, easing, css);
      }
      if (b)
        tick2(0, 1);
      running_program = init2(program, duration);
      add_render_callback(() => dispatch(node, b, "start"));
      loop((now2) => {
        if (pending_program && now2 > pending_program.start) {
          running_program = init2(pending_program, duration);
          pending_program = null;
          dispatch(node, running_program.b, "start");
          if (css) {
            clear_animation();
            animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config2.css);
          }
        }
        if (running_program) {
          if (now2 >= running_program.end) {
            tick2(t = running_program.b, 1 - t);
            dispatch(node, running_program.b, "end");
            if (!pending_program) {
              if (running_program.b) {
                clear_animation();
              } else {
                if (!--running_program.group.r)
                  run_all(running_program.group.c);
              }
            }
            running_program = null;
          } else if (now2 >= running_program.start) {
            const p = now2 - running_program.start;
            t = running_program.a + running_program.d * easing(p / running_program.duration);
            tick2(t, 1 - t);
          }
        }
        return !!(running_program || pending_program);
      });
    }
  }
  return {
    run(b) {
      if (is_function(config2)) {
        wait().then(() => {
          config2 = config2();
          go(b);
        });
      } else {
        go(b);
      }
    },
    end() {
      clear_animation();
      running_program = pending_program = null;
    }
  };
}
function handle_promise(promise2, info) {
  const token = info.token = {};
  function update2(type, index, key, value) {
    if (info.token !== token)
      return;
    info.resolved = value;
    let child_ctx = info.ctx;
    if (key !== void 0) {
      child_ctx = child_ctx.slice();
      child_ctx[key] = value;
    }
    const block = type && (info.current = type)(child_ctx);
    let needs_flush = false;
    if (info.block) {
      if (info.blocks) {
        info.blocks.forEach((block2, i) => {
          if (i !== index && block2) {
            group_outros();
            transition_out(block2, 1, 1, () => {
              if (info.blocks[i] === block2) {
                info.blocks[i] = null;
              }
            });
            check_outros();
          }
        });
      } else {
        info.block.d(1);
      }
      block.c();
      transition_in(block, 1);
      block.m(info.mount(), info.anchor);
      needs_flush = true;
    }
    info.block = block;
    if (info.blocks)
      info.blocks[index] = block;
    if (needs_flush) {
      flush();
    }
  }
  if (is_promise(promise2)) {
    const current_component2 = get_current_component();
    promise2.then((value) => {
      set_current_component(current_component2);
      update2(info.then, 1, info.value, value);
      set_current_component(null);
    }, (error) => {
      set_current_component(current_component2);
      update2(info.catch, 2, info.error, error);
      set_current_component(null);
      if (!info.hasCatch) {
        throw error;
      }
    });
    if (info.current !== info.pending) {
      update2(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update2(info.then, 1, info.value, promise2);
      return true;
    }
    info.resolved = promise2;
  }
}
function update_await_block_branch(info, ctx, dirty) {
  const child_ctx = ctx.slice();
  const {resolved} = info;
  if (info.current === info.then) {
    child_ctx[info.value] = resolved;
  }
  if (info.current === info.catch) {
    child_ctx[info.error] = resolved;
  }
  info.block.p(child_ctx, dirty);
}
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
function outro_and_destroy_block(block, lookup) {
  transition_out(block, 1, 1, () => {
    lookup.delete(block.key);
  });
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block4, next, get_context) {
  let o = old_blocks.length;
  let n = list.length;
  let i = o;
  const old_indexes = {};
  while (i--)
    old_indexes[old_blocks[i].key] = i;
  const new_blocks = [];
  const new_lookup = new Map();
  const deltas = new Map();
  i = n;
  while (i--) {
    const child_ctx = get_context(ctx, list, i);
    const key = get_key(child_ctx);
    let block = lookup.get(key);
    if (!block) {
      block = create_each_block4(key, child_ctx);
      block.c();
    } else if (dynamic) {
      block.p(child_ctx, dirty);
    }
    new_lookup.set(key, new_blocks[i] = block);
    if (key in old_indexes)
      deltas.set(key, Math.abs(i - old_indexes[key]));
  }
  const will_move = new Set();
  const did_move = new Set();
  function insert2(block) {
    transition_in(block, 1);
    block.m(node, next);
    lookup.set(block.key, block);
    next = block.first;
    n--;
  }
  while (o && n) {
    const new_block = new_blocks[n - 1];
    const old_block = old_blocks[o - 1];
    const new_key = new_block.key;
    const old_key = old_block.key;
    if (new_block === old_block) {
      next = new_block.first;
      o--;
      n--;
    } else if (!new_lookup.has(old_key)) {
      destroy(old_block, lookup);
      o--;
    } else if (!lookup.has(new_key) || will_move.has(new_key)) {
      insert2(new_block);
    } else if (did_move.has(old_key)) {
      o--;
    } else if (deltas.get(new_key) > deltas.get(old_key)) {
      did_move.add(new_key);
      insert2(new_block);
    } else {
      will_move.add(old_key);
      o--;
    }
  }
  while (o--) {
    const old_block = old_blocks[o];
    if (!new_lookup.has(old_block.key))
      destroy(old_block, lookup);
  }
  while (n)
    insert2(new_blocks[n - 1]);
  return new_blocks;
}
var boolean_attributes = new Set([
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
]);
function bind(component, name, callback) {
  const index = component.$$.props[name];
  if (index !== void 0) {
    component.$$.bound[index] = callback;
    callback(component.$$.ctx[index]);
  }
}
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor, customElement) {
  const {fragment, on_mount, on_destroy: on_destroy2, after_update} = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = on_mount.map(run).filter(is_function);
      if (on_destroy2) {
        on_destroy2.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance8, create_fragment7, not_equal2, props, append_styles2, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: null,
    props,
    update: noop2,
    not_equal: not_equal2,
    bound: blank_object(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles2 && append_styles2($$.root);
  let ready = false;
  $$.ctx = instance8 ? instance8(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal2($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment7 ? create_fragment7($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode: "open"});
    }
    connectedCallback() {
      const {on_mount} = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr2, _oldValue, newValue) {
      this[attr2] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop2;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}
var SvelteComponent = class {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop2;
  }
  $on(type, callback) {
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback);
    return () => {
      const index = callbacks.indexOf(callback);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
};

// build/_snowpack/pkg/tsyringe.js
var Lifecycle;
(function(Lifecycle2) {
  Lifecycle2[Lifecycle2["Transient"] = 0] = "Transient";
  Lifecycle2[Lifecycle2["Singleton"] = 1] = "Singleton";
  Lifecycle2[Lifecycle2["ResolutionScoped"] = 2] = "ResolutionScoped";
  Lifecycle2[Lifecycle2["ContainerScoped"] = 3] = "ContainerScoped";
})(Lifecycle || (Lifecycle = {}));
var Lifecycle$1 = Lifecycle;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || {__proto__: []} instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2)
      if (b2.hasOwnProperty(p))
        d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return {value: o && o[i++], done: !o};
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = {error};
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
var INJECTION_TOKEN_METADATA_KEY = "injectionTokens";
function getParamInfo(target) {
  var params = Reflect.getMetadata("design:paramtypes", target) || [];
  var injectionTokens = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
  Object.keys(injectionTokens).forEach(function(key) {
    params[+key] = injectionTokens[key];
  });
  return params;
}
function defineInjectionTokenMetadata(data, transform) {
  return function(target, _propertyKey, parameterIndex) {
    var descriptors = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
    descriptors[parameterIndex] = transform ? {
      token: data,
      transform: transform.transformToken,
      transformArgs: transform.args || []
    } : data;
    Reflect.defineMetadata(INJECTION_TOKEN_METADATA_KEY, descriptors, target);
  };
}
function isClassProvider(provider) {
  return !!provider.useClass;
}
function isFactoryProvider(provider) {
  return !!provider.useFactory;
}
var DelayedConstructor = function() {
  function DelayedConstructor2(wrap) {
    this.wrap = wrap;
    this.reflectMethods = [
      "get",
      "getPrototypeOf",
      "setPrototypeOf",
      "getOwnPropertyDescriptor",
      "defineProperty",
      "has",
      "set",
      "deleteProperty",
      "apply",
      "construct",
      "ownKeys"
    ];
  }
  DelayedConstructor2.prototype.createProxy = function(createObject) {
    var _this = this;
    var target = {};
    var init2 = false;
    var value;
    var delayedObject = function() {
      if (!init2) {
        value = createObject(_this.wrap());
        init2 = true;
      }
      return value;
    };
    return new Proxy(target, this.createHandler(delayedObject));
  };
  DelayedConstructor2.prototype.createHandler = function(delayedObject) {
    var handler = {};
    var install = function(name) {
      handler[name] = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        args[0] = delayedObject();
        var method = Reflect[name];
        return method.apply(void 0, __spread(args));
      };
    };
    this.reflectMethods.forEach(install);
    return handler;
  };
  return DelayedConstructor2;
}();
function isNormalToken(token) {
  return typeof token === "string" || typeof token === "symbol";
}
function isTokenDescriptor(descriptor) {
  return typeof descriptor === "object" && "token" in descriptor && "multiple" in descriptor;
}
function isTransformDescriptor(descriptor) {
  return typeof descriptor === "object" && "token" in descriptor && "transform" in descriptor;
}
function isConstructorToken(token) {
  return typeof token === "function" || token instanceof DelayedConstructor;
}
function isTokenProvider(provider) {
  return !!provider.useToken;
}
function isValueProvider(provider) {
  return provider.useValue != void 0;
}
function isProvider(provider) {
  return isClassProvider(provider) || isValueProvider(provider) || isTokenProvider(provider) || isFactoryProvider(provider);
}
var RegistryBase = function() {
  function RegistryBase2() {
    this._registryMap = new Map();
  }
  RegistryBase2.prototype.entries = function() {
    return this._registryMap.entries();
  };
  RegistryBase2.prototype.getAll = function(key) {
    this.ensure(key);
    return this._registryMap.get(key);
  };
  RegistryBase2.prototype.get = function(key) {
    this.ensure(key);
    var value = this._registryMap.get(key);
    return value[value.length - 1] || null;
  };
  RegistryBase2.prototype.set = function(key, value) {
    this.ensure(key);
    this._registryMap.get(key).push(value);
  };
  RegistryBase2.prototype.setAll = function(key, value) {
    this._registryMap.set(key, value);
  };
  RegistryBase2.prototype.has = function(key) {
    this.ensure(key);
    return this._registryMap.get(key).length > 0;
  };
  RegistryBase2.prototype.clear = function() {
    this._registryMap.clear();
  };
  RegistryBase2.prototype.ensure = function(key) {
    if (!this._registryMap.has(key)) {
      this._registryMap.set(key, []);
    }
  };
  return RegistryBase2;
}();
var Registry = function(_super) {
  __extends(Registry2, _super);
  function Registry2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return Registry2;
}(RegistryBase);
var ResolutionContext = function() {
  function ResolutionContext2() {
    this.scopedResolutions = new Map();
  }
  return ResolutionContext2;
}();
function formatDependency(params, idx) {
  if (params === null) {
    return "at position #" + idx;
  }
  var argName = params.split(",")[idx].trim();
  return '"' + argName + '" at position #' + idx;
}
function composeErrorMessage(msg, e, indent) {
  if (indent === void 0) {
    indent = "    ";
  }
  return __spread([msg], e.message.split("\n").map(function(l) {
    return indent + l;
  })).join("\n");
}
function formatErrorCtor(ctor, paramIdx, error) {
  var _a = __read(ctor.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), _b = _a[1], params = _b === void 0 ? null : _b;
  var dep = formatDependency(params, paramIdx);
  return composeErrorMessage("Cannot inject the dependency " + dep + ' of "' + ctor.name + '" constructor. Reason:', error);
}
var PreResolutionInterceptors = function(_super) {
  __extends(PreResolutionInterceptors2, _super);
  function PreResolutionInterceptors2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return PreResolutionInterceptors2;
}(RegistryBase);
var PostResolutionInterceptors = function(_super) {
  __extends(PostResolutionInterceptors2, _super);
  function PostResolutionInterceptors2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  return PostResolutionInterceptors2;
}(RegistryBase);
var Interceptors = function() {
  function Interceptors2() {
    this.preResolution = new PreResolutionInterceptors();
    this.postResolution = new PostResolutionInterceptors();
  }
  return Interceptors2;
}();
var typeInfo = new Map();
var InternalDependencyContainer = function() {
  function InternalDependencyContainer2(parent) {
    this.parent = parent;
    this._registry = new Registry();
    this.interceptors = new Interceptors();
  }
  InternalDependencyContainer2.prototype.register = function(token, providerOrConstructor, options) {
    if (options === void 0) {
      options = {lifecycle: Lifecycle$1.Transient};
    }
    var provider;
    if (!isProvider(providerOrConstructor)) {
      provider = {useClass: providerOrConstructor};
    } else {
      provider = providerOrConstructor;
    }
    if (isTokenProvider(provider)) {
      var path = [token];
      var tokenProvider = provider;
      while (tokenProvider != null) {
        var currentToken = tokenProvider.useToken;
        if (path.includes(currentToken)) {
          throw new Error("Token registration cycle detected! " + __spread(path, [currentToken]).join(" -> "));
        }
        path.push(currentToken);
        var registration = this._registry.get(currentToken);
        if (registration && isTokenProvider(registration.provider)) {
          tokenProvider = registration.provider;
        } else {
          tokenProvider = null;
        }
      }
    }
    if (options.lifecycle === Lifecycle$1.Singleton || options.lifecycle == Lifecycle$1.ContainerScoped || options.lifecycle == Lifecycle$1.ResolutionScoped) {
      if (isValueProvider(provider) || isFactoryProvider(provider)) {
        throw new Error('Cannot use lifecycle "' + Lifecycle$1[options.lifecycle] + '" with ValueProviders or FactoryProviders');
      }
    }
    this._registry.set(token, {provider, options});
    return this;
  };
  InternalDependencyContainer2.prototype.registerType = function(from, to) {
    if (isNormalToken(to)) {
      return this.register(from, {
        useToken: to
      });
    }
    return this.register(from, {
      useClass: to
    });
  };
  InternalDependencyContainer2.prototype.registerInstance = function(token, instance8) {
    return this.register(token, {
      useValue: instance8
    });
  };
  InternalDependencyContainer2.prototype.registerSingleton = function(from, to) {
    if (isNormalToken(from)) {
      if (isNormalToken(to)) {
        return this.register(from, {
          useToken: to
        }, {lifecycle: Lifecycle$1.Singleton});
      } else if (to) {
        return this.register(from, {
          useClass: to
        }, {lifecycle: Lifecycle$1.Singleton});
      }
      throw new Error('Cannot register a type name as a singleton without a "to" token');
    }
    var useClass = from;
    if (to && !isNormalToken(to)) {
      useClass = to;
    }
    return this.register(from, {
      useClass
    }, {lifecycle: Lifecycle$1.Singleton});
  };
  InternalDependencyContainer2.prototype.resolve = function(token, context) {
    if (context === void 0) {
      context = new ResolutionContext();
    }
    var registration = this.getRegistration(token);
    if (!registration && isNormalToken(token)) {
      throw new Error('Attempted to resolve unregistered dependency token: "' + token.toString() + '"');
    }
    this.executePreResolutionInterceptor(token, "Single");
    if (registration) {
      var result = this.resolveRegistration(registration, context);
      this.executePostResolutionInterceptor(token, result, "Single");
      return result;
    }
    if (isConstructorToken(token)) {
      var result = this.construct(token, context);
      this.executePostResolutionInterceptor(token, result, "Single");
      return result;
    }
    throw new Error("Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function.");
  };
  InternalDependencyContainer2.prototype.executePreResolutionInterceptor = function(token, resolutionType) {
    var e_1, _a;
    if (this.interceptors.preResolution.has(token)) {
      var remainingInterceptors = [];
      try {
        for (var _b = __values(this.interceptors.preResolution.getAll(token)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var interceptor = _c.value;
          if (interceptor.options.frequency != "Once") {
            remainingInterceptors.push(interceptor);
          }
          interceptor.callback(token, resolutionType);
        }
      } catch (e_1_1) {
        e_1 = {error: e_1_1};
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      this.interceptors.preResolution.setAll(token, remainingInterceptors);
    }
  };
  InternalDependencyContainer2.prototype.executePostResolutionInterceptor = function(token, result, resolutionType) {
    var e_2, _a;
    if (this.interceptors.postResolution.has(token)) {
      var remainingInterceptors = [];
      try {
        for (var _b = __values(this.interceptors.postResolution.getAll(token)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var interceptor = _c.value;
          if (interceptor.options.frequency != "Once") {
            remainingInterceptors.push(interceptor);
          }
          interceptor.callback(token, result, resolutionType);
        }
      } catch (e_2_1) {
        e_2 = {error: e_2_1};
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      this.interceptors.postResolution.setAll(token, remainingInterceptors);
    }
  };
  InternalDependencyContainer2.prototype.resolveRegistration = function(registration, context) {
    if (registration.options.lifecycle === Lifecycle$1.ResolutionScoped && context.scopedResolutions.has(registration)) {
      return context.scopedResolutions.get(registration);
    }
    var isSingleton = registration.options.lifecycle === Lifecycle$1.Singleton;
    var isContainerScoped = registration.options.lifecycle === Lifecycle$1.ContainerScoped;
    var returnInstance = isSingleton || isContainerScoped;
    var resolved;
    if (isValueProvider(registration.provider)) {
      resolved = registration.provider.useValue;
    } else if (isTokenProvider(registration.provider)) {
      resolved = returnInstance ? registration.instance || (registration.instance = this.resolve(registration.provider.useToken, context)) : this.resolve(registration.provider.useToken, context);
    } else if (isClassProvider(registration.provider)) {
      resolved = returnInstance ? registration.instance || (registration.instance = this.construct(registration.provider.useClass, context)) : this.construct(registration.provider.useClass, context);
    } else if (isFactoryProvider(registration.provider)) {
      resolved = registration.provider.useFactory(this);
    } else {
      resolved = this.construct(registration.provider, context);
    }
    if (registration.options.lifecycle === Lifecycle$1.ResolutionScoped) {
      context.scopedResolutions.set(registration, resolved);
    }
    return resolved;
  };
  InternalDependencyContainer2.prototype.resolveAll = function(token, context) {
    var _this = this;
    if (context === void 0) {
      context = new ResolutionContext();
    }
    var registrations = this.getAllRegistrations(token);
    if (!registrations && isNormalToken(token)) {
      throw new Error('Attempted to resolve unregistered dependency token: "' + token.toString() + '"');
    }
    this.executePreResolutionInterceptor(token, "All");
    if (registrations) {
      var result_1 = registrations.map(function(item) {
        return _this.resolveRegistration(item, context);
      });
      this.executePostResolutionInterceptor(token, result_1, "All");
      return result_1;
    }
    var result = [this.construct(token, context)];
    this.executePostResolutionInterceptor(token, result, "All");
    return result;
  };
  InternalDependencyContainer2.prototype.isRegistered = function(token, recursive) {
    if (recursive === void 0) {
      recursive = false;
    }
    return this._registry.has(token) || recursive && (this.parent || false) && this.parent.isRegistered(token, true);
  };
  InternalDependencyContainer2.prototype.reset = function() {
    this._registry.clear();
    this.interceptors.preResolution.clear();
    this.interceptors.postResolution.clear();
  };
  InternalDependencyContainer2.prototype.clearInstances = function() {
    var e_3, _a;
    try {
      for (var _b = __values(this._registry.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2), token = _d[0], registrations = _d[1];
        this._registry.setAll(token, registrations.filter(function(registration) {
          return !isValueProvider(registration.provider);
        }).map(function(registration) {
          registration.instance = void 0;
          return registration;
        }));
      }
    } catch (e_3_1) {
      e_3 = {error: e_3_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_3)
          throw e_3.error;
      }
    }
  };
  InternalDependencyContainer2.prototype.createChildContainer = function() {
    var e_4, _a;
    var childContainer = new InternalDependencyContainer2(this);
    try {
      for (var _b = __values(this._registry.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var _d = __read(_c.value, 2), token = _d[0], registrations = _d[1];
        if (registrations.some(function(_a2) {
          var options = _a2.options;
          return options.lifecycle === Lifecycle$1.ContainerScoped;
        })) {
          childContainer._registry.setAll(token, registrations.map(function(registration) {
            if (registration.options.lifecycle === Lifecycle$1.ContainerScoped) {
              return {
                provider: registration.provider,
                options: registration.options
              };
            }
            return registration;
          }));
        }
      }
    } catch (e_4_1) {
      e_4 = {error: e_4_1};
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return))
          _a.call(_b);
      } finally {
        if (e_4)
          throw e_4.error;
      }
    }
    return childContainer;
  };
  InternalDependencyContainer2.prototype.beforeResolution = function(token, callback, options) {
    if (options === void 0) {
      options = {frequency: "Always"};
    }
    this.interceptors.preResolution.set(token, {
      callback,
      options
    });
  };
  InternalDependencyContainer2.prototype.afterResolution = function(token, callback, options) {
    if (options === void 0) {
      options = {frequency: "Always"};
    }
    this.interceptors.postResolution.set(token, {
      callback,
      options
    });
  };
  InternalDependencyContainer2.prototype.getRegistration = function(token) {
    if (this.isRegistered(token)) {
      return this._registry.get(token);
    }
    if (this.parent) {
      return this.parent.getRegistration(token);
    }
    return null;
  };
  InternalDependencyContainer2.prototype.getAllRegistrations = function(token) {
    if (this.isRegistered(token)) {
      return this._registry.getAll(token);
    }
    if (this.parent) {
      return this.parent.getAllRegistrations(token);
    }
    return null;
  };
  InternalDependencyContainer2.prototype.construct = function(ctor, context) {
    var _this = this;
    if (ctor instanceof DelayedConstructor) {
      return ctor.createProxy(function(target) {
        return _this.resolve(target, context);
      });
    }
    var paramInfo = typeInfo.get(ctor);
    if (!paramInfo || paramInfo.length === 0) {
      if (ctor.length === 0) {
        return new ctor();
      } else {
        throw new Error('TypeInfo not known for "' + ctor.name + '"');
      }
    }
    var params = paramInfo.map(this.resolveParams(context, ctor));
    return new (ctor.bind.apply(ctor, __spread([void 0], params)))();
  };
  InternalDependencyContainer2.prototype.resolveParams = function(context, ctor) {
    var _this = this;
    return function(param, idx) {
      var _a, _b, _c;
      try {
        if (isTokenDescriptor(param)) {
          if (isTransformDescriptor(param)) {
            return param.multiple ? (_a = _this.resolve(param.transform)).transform.apply(_a, __spread([_this.resolveAll(param.token)], param.transformArgs)) : (_b = _this.resolve(param.transform)).transform.apply(_b, __spread([_this.resolve(param.token, context)], param.transformArgs));
          } else {
            return param.multiple ? _this.resolveAll(param.token) : _this.resolve(param.token, context);
          }
        } else if (isTransformDescriptor(param)) {
          return (_c = _this.resolve(param.transform, context)).transform.apply(_c, __spread([_this.resolve(param.token, context)], param.transformArgs));
        }
        return _this.resolve(param, context);
      } catch (e) {
        throw new Error(formatErrorCtor(ctor, idx, e));
      }
    };
  };
  return InternalDependencyContainer2;
}();
var instance = new InternalDependencyContainer();
function inject(token) {
  return defineInjectionTokenMetadata(token);
}
function injectable() {
  return function(target) {
    typeInfo.set(target, getParamInfo(target));
  };
}
if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
  throw new Error(`tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`);
}

// build/dist/components/FeedFilter.svelte.js
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  child_ctx[8] = list;
  child_ctx[9] = i;
  const constants_0 = child_ctx[6].channel.title !== "" ? child_ctx[6].channel.title : child_ctx[6].url.toString();
  child_ctx[7] = constants_0;
  return child_ctx;
}
function create_each_block(ctx) {
  let li;
  let input;
  let input_checked_value;
  let t0;
  let span;
  let raw_value = ctx[7] + "";
  let span_title_value;
  let t1;
  let mounted;
  let dispose;
  function input_change_handler() {
    ctx[3].call(input, ctx[8], ctx[9]);
  }
  function click_handler() {
    return ctx[4](ctx[6]);
  }
  return {
    c() {
      li = element("li");
      input = element("input");
      t0 = space();
      span = element("span");
      t1 = space();
      attr(input, "type", "checkbox");
      input.checked = input_checked_value = ctx[1].urls?.includes(ctx[6].url);
      attr(input, "class", "svelte-1n7knia");
      attr(span, "title", span_title_value = ctx[7]);
      attr(span, "class", "feed-title");
      attr(li, "class", "feed-title svelte-1n7knia");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, input);
      set_input_value(input, ctx[6].url);
      append(li, t0);
      append(li, span);
      span.innerHTML = raw_value;
      append(li, t1);
      if (!mounted) {
        dispose = [
          listen(input, "change", input_change_handler),
          listen(input, "click", click_handler)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 3 && input_checked_value !== (input_checked_value = ctx[1].urls?.includes(ctx[6].url))) {
        input.checked = input_checked_value;
      }
      if (dirty & 1) {
        set_input_value(input, ctx[6].url);
      }
      if (dirty & 1 && raw_value !== (raw_value = ctx[7] + ""))
        span.innerHTML = raw_value;
      ;
      if (dirty & 1 && span_title_value !== (span_title_value = ctx[7])) {
        attr(span, "title", span_title_value);
      }
    },
    d(detaching) {
      if (detaching)
        detach(li);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment(ctx) {
  let section;
  let h2;
  let t1;
  let ul;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      section = element("section");
      h2 = element("h2");
      h2.textContent = "Filter Feed";
      t1 = space();
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(ul, "class", "svelte-1n7knia");
      attr(section, "class", "filter svelte-1n7knia");
    },
    m(target, anchor) {
      insert(target, section, anchor);
      append(section, h2);
      append(section, t1);
      append(section, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 7) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop2,
    o: noop2,
    d(detaching) {
      if (detaching)
        detach(section);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance2($$self, $$props, $$invalidate) {
  let {feeds} = $$props;
  let {filter} = $$props;
  const dispatch2 = createEventDispatcher();
  function toggleEnabled(feed) {
    var _a, _b;
    if (!filter.urls) {
      $$invalidate(1, filter.urls = [], filter);
    }
    const index = (_b = (_a = filter === null || filter === void 0 ? void 0 : filter.urls) === null || _a === void 0 ? void 0 : _a.findIndex((u) => u.toString() === feed.url.toString())) !== null && _b !== void 0 ? _b : -1;
    if (index >= 0) {
      filter.urls.splice(index, 1);
    } else {
      filter.urls.push(feed.url);
    }
    $$invalidate(1, filter);
    dispatch2("updated", filter);
  }
  function input_change_handler(each_value, feed_index) {
    each_value[feed_index].url = this.value;
    $$invalidate(0, feeds);
  }
  const click_handler = (feed) => toggleEnabled(feed);
  $$self.$$set = ($$props2) => {
    if ("feeds" in $$props2)
      $$invalidate(0, feeds = $$props2.feeds);
    if ("filter" in $$props2)
      $$invalidate(1, filter = $$props2.filter);
  };
  return [feeds, filter, toggleEnabled, input_change_handler, click_handler];
}
var FeedFilter = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance2, create_fragment, safe_not_equal, {feeds: 0, filter: 1});
  }
};
var FeedFilter_svelte_default = FeedFilter;

// build/dist/components/Loader.svelte.js
function create_fragment2(ctx) {
  let div3;
  let div2;
  let t1;
  let span;
  let t2;
  let t3_value = ".".repeat(ctx[0]) + "";
  let t3;
  return {
    c() {
      div3 = element("div");
      div2 = element("div");
      div2.innerHTML = `<div class="svelte-1rlzt3a"></div> 
    <div class="svelte-1rlzt3a"></div>`;
      t1 = space();
      span = element("span");
      t2 = text("Loading ");
      t3 = text(t3_value);
      attr(div2, "class", "lds-ripple svelte-1rlzt3a");
      attr(span, "class", "svelte-1rlzt3a");
      attr(div3, "class", "wrapper svelte-1rlzt3a");
    },
    m(target, anchor) {
      insert(target, div3, anchor);
      append(div3, div2);
      append(div3, t1);
      append(div3, span);
      append(span, t2);
      append(span, t3);
    },
    p(ctx2, [dirty]) {
      if (dirty & 1 && t3_value !== (t3_value = ".".repeat(ctx2[0]) + ""))
        set_data(t3, t3_value);
    },
    i: noop2,
    o: noop2,
    d(detaching) {
      if (detaching)
        detach(div3);
    }
  };
}
function instance3($$self, $$props, $$invalidate) {
  "use strict";
  let dots = 1;
  setInterval(() => {
    $$invalidate(0, dots = dots % 3 + 1);
  }, 1e3);
  return [dots];
}
var Loader = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance3, create_fragment2, safe_not_equal, {});
  }
};
var Loader_svelte_default = Loader;

// build/dist/components/RssItem.svelte.js
function create_fragment3(ctx) {
  let article;
  let time;
  let t0;
  let t1_value = formatDate(ctx[0].publishDate) + "";
  let t1;
  let t2;
  let br;
  let t3;
  let h3;
  let a;
  let raw0_value = ctx[0].title + "";
  let a_href_value;
  let t4;
  let div;
  let raw1_value = ctx[0].description + "";
  return {
    c() {
      article = element("article");
      time = element("time");
      t0 = text("[");
      t1 = text(t1_value);
      t2 = text("]");
      br = element("br");
      t3 = space();
      h3 = element("h3");
      a = element("a");
      t4 = space();
      div = element("div");
      attr(time, "class", "svelte-nexsfq");
      attr(a, "href", a_href_value = ctx[0].link);
      attr(a, "target", "_blank");
      attr(a, "class", "svelte-nexsfq");
      attr(article, "class", "svelte-nexsfq");
    },
    m(target, anchor) {
      insert(target, article, anchor);
      append(article, time);
      append(time, t0);
      append(time, t1);
      append(time, t2);
      append(article, br);
      append(article, t3);
      append(article, h3);
      append(h3, a);
      a.innerHTML = raw0_value;
      append(article, t4);
      append(article, div);
      div.innerHTML = raw1_value;
    },
    p(ctx2, [dirty]) {
      if (dirty & 1 && t1_value !== (t1_value = formatDate(ctx2[0].publishDate) + ""))
        set_data(t1, t1_value);
      if (dirty & 1 && raw0_value !== (raw0_value = ctx2[0].title + ""))
        a.innerHTML = raw0_value;
      ;
      if (dirty & 1 && a_href_value !== (a_href_value = ctx2[0].link)) {
        attr(a, "href", a_href_value);
      }
      if (dirty & 1 && raw1_value !== (raw1_value = ctx2[0].description + ""))
        div.innerHTML = raw1_value;
      ;
    },
    i: noop2,
    o: noop2,
    d(detaching) {
      if (detaching)
        detach(article);
    }
  };
}
function formatDate(date) {
  return date.toLocaleString("en-UK", {
    hour12: false,
    day: "2-digit",
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}
function instance4($$self, $$props, $$invalidate) {
  let {item} = $$props;
  $$self.$$set = ($$props2) => {
    if ("item" in $$props2)
      $$invalidate(0, item = $$props2.item);
  };
  return [item];
}
var RssItem = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance4, create_fragment3, safe_not_equal, {item: 0});
  }
};
var RssItem_svelte_default = RssItem;

// build/_snowpack/pkg/svelte/transition.js
function fade(node, {delay = 0, duration = 400, easing = identity} = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}

// build/dist/components/RssMultiFeed.svelte.js
function get_each_context2(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  child_ctx[3] = i;
  return child_ctx;
}
function create_else_block(ctx) {
  let ul;
  let each_blocks = [];
  let each_1_lookup = new Map();
  let current;
  let each_value = ctx[0];
  const get_key = (ctx2) => ctx2[1].link;
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context2(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block2(key, child_ctx));
  }
  return {
    c() {
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(ul, "class", "svelte-1tz4vsk");
    },
    m(target, anchor) {
      insert(target, ul, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value = ctx2[0];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, ul, outro_and_destroy_block, create_each_block2, null, get_each_context2);
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
    }
  };
}
function create_if_block(ctx) {
  let h2;
  return {
    c() {
      h2 = element("h2");
      h2.textContent = "No results";
      attr(h2, "class", "svelte-1tz4vsk");
    },
    m(target, anchor) {
      insert(target, h2, anchor);
    },
    p: noop2,
    i: noop2,
    o: noop2,
    d(detaching) {
      if (detaching)
        detach(h2);
    }
  };
}
function create_key_block(ctx) {
  let li;
  let rssitem;
  let t;
  let li_intro;
  let current;
  rssitem = new RssItem_svelte_default({props: {item: ctx[1]}});
  return {
    c() {
      li = element("li");
      create_component(rssitem.$$.fragment);
      t = space();
    },
    m(target, anchor) {
      insert(target, li, anchor);
      mount_component(rssitem, li, null);
      append(li, t);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const rssitem_changes = {};
      if (dirty & 1)
        rssitem_changes.item = ctx[1];
      rssitem.$set(rssitem_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(rssitem.$$.fragment, local);
      if (!li_intro) {
        add_render_callback(() => {
          li_intro = create_in_transition(li, fade, {delay: ctx[3] * 30});
          li_intro.start();
        });
      }
      current = true;
    },
    o(local) {
      transition_out(rssitem.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      destroy_component(rssitem);
    }
  };
}
function create_each_block2(key_1, ctx) {
  let first;
  let previous_key = ctx[1];
  let key_block_anchor;
  let current;
  let key_block = create_key_block(ctx);
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      key_block.c();
      key_block_anchor = empty();
      this.first = first;
    },
    m(target, anchor) {
      insert(target, first, anchor);
      key_block.m(target, anchor);
      insert(target, key_block_anchor, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 1 && safe_not_equal(previous_key, previous_key = ctx[1])) {
        group_outros();
        transition_out(key_block, 1, 1, noop2);
        check_outros();
        key_block = create_key_block(ctx);
        key_block.c();
        transition_in(key_block);
        key_block.m(key_block_anchor.parentNode, key_block_anchor);
      } else {
        key_block.p(ctx, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(key_block);
      current = true;
    },
    o(local) {
      transition_out(key_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(first);
      if (detaching)
        detach(key_block_anchor);
      key_block.d(detaching);
    }
  };
}
function create_fragment4(ctx) {
  let main;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[0].length === 0)
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx, -1);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      main = element("main");
      if_block.c();
      attr(main, "class", "feed svelte-1tz4vsk");
    },
    m(target, anchor) {
      insert(target, main, anchor);
      if_blocks[current_block_type_index].m(main, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2, dirty);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(main, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(main);
      if_blocks[current_block_type_index].d();
    }
  };
}
function instance5($$self, $$props, $$invalidate) {
  let {items} = $$props;
  $$self.$$set = ($$props2) => {
    if ("items" in $$props2)
      $$invalidate(0, items = $$props2.items);
  };
  return [items];
}
var RssMultiFeed = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance5, create_fragment4, safe_not_equal, {items: 0});
  }
};
var RssMultiFeed_svelte_default = RssMultiFeed;

// build/dist/modules/util/errors.js
function getErrorMessage(error) {
  if (error instanceof Error)
    return error.message;
  return String(error);
}

// build/dist/components/SourceList.svelte.js
function get_each_context3(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
}
function create_each_block3(ctx) {
  let li;
  let button;
  let t1;
  let t2_value = cleanUrl(ctx[10].toString()) + "";
  let t2;
  let t3;
  let li_title_value;
  let li_transition;
  let current;
  let mounted;
  let dispose;
  function click_handler() {
    return ctx[8](ctx[10]);
  }
  return {
    c() {
      li = element("li");
      button = element("button");
      button.textContent = "x";
      t1 = space();
      t2 = text(t2_value);
      t3 = space();
      attr(button, "class", "remove svelte-swudz5");
      attr(li, "title", li_title_value = ctx[10].toString());
      attr(li, "class", "svelte-swudz5");
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, button);
      append(li, t1);
      append(li, t2);
      append(li, t3);
      current = true;
      if (!mounted) {
        dispose = listen(button, "click", click_handler);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if ((!current || dirty & 1) && t2_value !== (t2_value = cleanUrl(ctx[10].toString()) + ""))
        set_data(t2, t2_value);
      if (!current || dirty & 1 && li_title_value !== (li_title_value = ctx[10].toString())) {
        attr(li, "title", li_title_value);
      }
    },
    i(local) {
      if (current)
        return;
      add_render_callback(() => {
        if (!li_transition)
          li_transition = create_bidirectional_transition(li, fade, {duration: 100}, true);
        li_transition.run(1);
      });
      current = true;
    },
    o(local) {
      if (!li_transition)
        li_transition = create_bidirectional_transition(li, fade, {duration: 100}, false);
      li_transition.run(0);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      if (detaching && li_transition)
        li_transition.end();
      mounted = false;
      dispose();
    }
  };
}
function create_fragment5(ctx) {
  let section;
  let h2;
  let t1;
  let div;
  let input;
  let t2;
  let button;
  let t4;
  let span;
  let t5;
  let t6;
  let ul;
  let current;
  let mounted;
  let dispose;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block3(get_each_context3(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      section = element("section");
      h2 = element("h2");
      h2.textContent = "Sources";
      t1 = space();
      div = element("div");
      input = element("input");
      t2 = space();
      button = element("button");
      button.textContent = "Add";
      t4 = space();
      span = element("span");
      t5 = text(ctx[3]);
      t6 = space();
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(input, "placeholder", "Add a new source");
      attr(input, "autocomplete", "url");
      attr(input, "class", "svelte-swudz5");
      attr(button, "class", "add svelte-swudz5");
      attr(span, "class", "error svelte-swudz5");
      attr(ul, "class", "svelte-swudz5");
      attr(section, "class", "sources svelte-swudz5");
    },
    m(target, anchor) {
      insert(target, section, anchor);
      append(section, h2);
      append(section, t1);
      append(section, div);
      append(div, input);
      set_input_value(input, ctx[2]);
      append(div, t2);
      append(div, button);
      append(section, t4);
      append(section, span);
      append(span, t5);
      append(section, t6);
      append(section, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(input, "input", ctx[6]),
          listen(input, "change", ctx[7]),
          listen(button, "click", ctx[4])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & 4 && input.value !== ctx2[2]) {
        set_input_value(input, ctx2[2]);
      }
      if (!current || dirty & 8)
        set_data(t5, ctx2[3]);
      if (dirty & 3) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context3(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block3(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(ul, null);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(section);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
function cleanUrl(url, max = 30) {
  const value = url.replace(/https?\:\/\//i, "").replace("www.", "");
  return value.slice(0, max) + (value.length > max ? "..." : "");
}
function instance6($$self, $$props, $$invalidate) {
  var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  let {sources} = $$props;
  let {addNew} = $$props;
  let {remove} = $$props;
  let sourceInput = "";
  let errorMessage = "";
  function addSource() {
    return __awaiter(this, void 0, void 0, function* () {
      $$invalidate(3, errorMessage = "");
      try {
        const sourceUrl = new URL(sourceInput);
        yield addNew(sourceUrl);
        $$invalidate(2, sourceInput = "");
      } catch (error) {
        if (error instanceof TypeError)
          $$invalidate(3, errorMessage = error.message.split(":")[1]);
        else
          $$invalidate(3, errorMessage = getErrorMessage(error));
      }
    });
  }
  function input_input_handler() {
    sourceInput = this.value;
    $$invalidate(2, sourceInput);
  }
  const change_handler = () => $$invalidate(3, errorMessage = "");
  const click_handler = (source) => remove(source);
  $$self.$$set = ($$props2) => {
    if ("sources" in $$props2)
      $$invalidate(0, sources = $$props2.sources);
    if ("addNew" in $$props2)
      $$invalidate(5, addNew = $$props2.addNew);
    if ("remove" in $$props2)
      $$invalidate(1, remove = $$props2.remove);
  };
  return [
    sources,
    remove,
    sourceInput,
    errorMessage,
    addSource,
    addNew,
    input_input_handler,
    change_handler,
    click_handler
  ];
}
var SourceList = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance6, create_fragment5, safe_not_equal, {sources: 0, addNew: 5, remove: 1});
  }
};
var SourceList_svelte_default = SourceList;

// build/_snowpack/pkg/svelte/store.js
var subscriber_queue = [];
function writable(value, start = noop2) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop2) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop2;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return {set, update: update2, subscribe: subscribe2};
}

// build/dist/modules/util/localStorageStore.js
function createLocalStore(key, initial) {
  const stored = retrieveValue(key);
  const value = stored ?? initial;
  const store = writable(value);
  store.subscribe((value2) => storeValue(key, value2));
  return store;
}
function retrieveValue(key) {
  const stored = localStorage.getItem(key);
  if (!stored)
    return void 0;
  return JSON.parse(stored);
}
function storeValue(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// build/dist/App.svelte.js
function create_catch_block(ctx) {
  return {
    c: noop2,
    m: noop2,
    p: noop2,
    i: noop2,
    o: noop2,
    d: noop2
  };
}
function create_then_block(ctx) {
  let sourcelist;
  let t0;
  let feedfilter;
  let updating_filter;
  let t1;
  let rssmultifeed;
  let current;
  sourcelist = new SourceList_svelte_default({
    props: {
      sources: ctx[1].feeds.map(func),
      addNew: ctx[4],
      remove: ctx[5]
    }
  });
  function feedfilter_filter_binding(value) {
    ctx[6](value);
  }
  let feedfilter_props = {feeds: ctx[1].feeds};
  if (ctx[0].filter !== void 0) {
    feedfilter_props.filter = ctx[0].filter;
  }
  feedfilter = new FeedFilter_svelte_default({props: feedfilter_props});
  binding_callbacks.push(() => bind(feedfilter, "filter", feedfilter_filter_binding));
  feedfilter.$on("updated", ctx[7]);
  rssmultifeed = new RssMultiFeed_svelte_default({
    props: {
      items: ctx[1].showItems(ctx[0].filter)
    }
  });
  return {
    c() {
      create_component(sourcelist.$$.fragment);
      t0 = space();
      create_component(feedfilter.$$.fragment);
      t1 = space();
      create_component(rssmultifeed.$$.fragment);
    },
    m(target, anchor) {
      mount_component(sourcelist, target, anchor);
      insert(target, t0, anchor);
      mount_component(feedfilter, target, anchor);
      insert(target, t1, anchor);
      mount_component(rssmultifeed, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const sourcelist_changes = {};
      if (dirty & 2)
        sourcelist_changes.sources = ctx2[1].feeds.map(func);
      sourcelist.$set(sourcelist_changes);
      const feedfilter_changes = {};
      if (dirty & 2)
        feedfilter_changes.feeds = ctx2[1].feeds;
      if (!updating_filter && dirty & 1) {
        updating_filter = true;
        feedfilter_changes.filter = ctx2[0].filter;
        add_flush_callback(() => updating_filter = false);
      }
      feedfilter.$set(feedfilter_changes);
      const rssmultifeed_changes = {};
      if (dirty & 3)
        rssmultifeed_changes.items = ctx2[1].showItems(ctx2[0].filter);
      rssmultifeed.$set(rssmultifeed_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(sourcelist.$$.fragment, local);
      transition_in(feedfilter.$$.fragment, local);
      transition_in(rssmultifeed.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(sourcelist.$$.fragment, local);
      transition_out(feedfilter.$$.fragment, local);
      transition_out(rssmultifeed.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(sourcelist, detaching);
      if (detaching)
        detach(t0);
      destroy_component(feedfilter, detaching);
      if (detaching)
        detach(t1);
      destroy_component(rssmultifeed, detaching);
    }
  };
}
function create_pending_block(ctx) {
  let div;
  let loader;
  let current;
  loader = new Loader_svelte_default({});
  return {
    c() {
      div = element("div");
      create_component(loader.$$.fragment);
      attr(div, "class", "loader svelte-12xkga3");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(loader, div, null);
      current = true;
    },
    p: noop2,
    i(local) {
      if (current)
        return;
      transition_in(loader.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(loader.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(loader);
    }
  };
}
function create_fragment6(ctx) {
  let div;
  let header;
  let t1;
  let promise2;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    blocks: [, , ,]
  };
  handle_promise(promise2 = ctx[2], info);
  return {
    c() {
      div = element("div");
      header = element("header");
      header.innerHTML = `<h1>RSS Feed Viewer</h1>`;
      t1 = space();
      info.block.c();
      attr(header, "class", "header svelte-12xkga3");
      attr(div, "class", "App svelte-12xkga3");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      append(div, header);
      append(div, t1);
      info.block.m(div, info.anchor = null);
      info.mount = () => div;
      info.anchor = null;
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & 4 && promise2 !== (promise2 = ctx[2]) && handle_promise(promise2, info)) {
      } else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0; i < 3; i += 1) {
        const block = info.blocks[i];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      info.block.d();
      info.token = null;
      info = null;
    }
  };
}
var func = (feed) => feed.url;
function instance7($$self, $$props, $$invalidate) {
  var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  let configStore = createLocalStore("config", {sources: [], filter: {}});
  let config2;
  configStore.subscribe((c) => $$invalidate(0, config2 = c));
  let manager = instance.resolve("rss.feedmanager");
  let initialLoadPromise;
  onMount(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
      $$invalidate(2, initialLoadPromise = manager.loadInitial(config2.sources));
      return;
    } catch (err) {
      console.error("Error during loading initial sources:", err);
    }
    $$invalidate(2, initialLoadPromise = Promise.resolve());
  }));
  const updateState = () => {
    $$invalidate(1, manager);
    configStore.set(config2);
  };
  function addNewSource(url) {
    return __awaiter(this, void 0, void 0, function* () {
      yield manager.add(url);
      $$invalidate(0, config2.sources = manager.feeds.map((f) => f.url), config2);
      updateState();
    });
  }
  function removeSource(url) {
    return __awaiter(this, void 0, void 0, function* () {
      manager.delete(url);
      $$invalidate(0, config2.sources = manager.feeds.map((f) => f.url), config2);
      updateState();
    });
  }
  function feedfilter_filter_binding(value) {
    if ($$self.$$.not_equal(config2.filter, value)) {
      config2.filter = value;
      $$invalidate(0, config2);
    }
  }
  const updated_handler = (message) => {
    $$invalidate(0, config2.filter = message.detail, config2);
    configStore.set(config2);
  };
  return [
    config2,
    manager,
    initialLoadPromise,
    configStore,
    addNewSource,
    removeSource,
    feedfilter_filter_binding,
    updated_handler
  ];
}
var App = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance7, create_fragment6, safe_not_equal, {});
  }
};
var App_svelte_default = App;

// build/dist/modules/rss/RssFeedManager.js
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp2(target, key, result);
  return result;
};
var __param = (index, decorator) => (target, key) => decorator(target, key, index);
var RssFeedManager = class {
  constructor(provider) {
    this.feeds = [];
    this.provider = provider;
  }
  async loadInitial(urls) {
    this.feeds = await this.provider.getAllFeeds(urls);
  }
  get(url) {
    return this.feeds.find((feed) => feed.url === url);
  }
  async add(url) {
    if (this.feeds.find((f) => f.url.toString() === url.toString()))
      throw new Error("URL already in feed");
    this.feeds.push(await this.provider.getFeed(url));
    this.feeds = [...this.feeds];
  }
  async update(current, update2) {
    const itemIndex = this.feeds.findIndex((feed) => feed.url === current);
    this.feeds[itemIndex] = await this.provider.getFeed(update2);
  }
  delete(url) {
    const itemIndex = this.feeds.findIndex((feed) => feed.url === url);
    this.feeds.splice(itemIndex, 1);
  }
  showItems(filter) {
    return this.feeds.filter((feed) => filter.urls?.includes(feed.url)).flatMap((feed) => feed.items).sort((itemA, itemB) => itemB.publishDate.getTime() - itemA.publishDate.getTime());
  }
};
RssFeedManager = __decorate([
  injectable(),
  __param(0, inject("rss.provider"))
], RssFeedManager);

// build/dist/modules/rss/RssFeed.js
var RssFeed = class {
  constructor(url, rss) {
    this.channel = new RssChannel(rss);
    this.url = url;
    this.items = Array.from(rss.querySelectorAll("item")).map((item) => new RssItem2(item));
  }
};
var RssChannel = class {
  constructor(rss) {
    this.title = queryOrDefault(rss, "channel title");
    this.link = queryOrDefault(rss, "channel link");
    this.description = queryOrDefault(rss, "channel description");
  }
};
var RssItem2 = class {
  constructor(rssItem) {
    this.elem = rssItem;
    this.title = queryOrDefault(rssItem, "title");
    this.description = queryOrDefault(rssItem, "description");
    this.link = queryOrDefault(rssItem, "link");
    this.publishDate = new Date(queryOrDefault(rssItem, "pubDate"));
  }
};
function queryOrDefault(node, query, defaultValue = "") {
  const queryResult = node.querySelector(query)?.innerHTML?.trim() ?? defaultValue;
  if (!queryResult.includes("CDATA"))
    return queryResult;
  const matchedResult = queryResult.match(/<!\[CDATA\[(.*)\]\]\>/);
  if (matchedResult === null)
    return defaultValue;
  return matchedResult[1];
}

// build/dist/modules/rss/RssProvider.js
var __defProp3 = Object.defineProperty;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __decorate2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp3(target, key, result);
  return result;
};
var CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
var RssProvider = class {
  async getFeed(url) {
    const content = await fetch(CORS_PROXY + url.toString(), {
      cache: "default"
    });
    const response = new DOMParser().parseFromString(await content.text(), "text/xml");
    return new RssFeed(url, response);
  }
  async getAllFeeds(urls) {
    return await Promise.all(urls.map(this.getFeed));
  }
};
RssProvider = __decorate2([
  injectable()
], RssProvider);

// build/dist/container.js
function addDependencies() {
  instance.register("rss.provider", RssProvider);
  instance.register("rss.feedmanager", RssFeedManager);
}

// build/dist/index.js
import.meta.env = env_exports;
addDependencies();
var app = new App_svelte_default({
  target: document.body
});
var dist_default = app;
if (void 0) {
  (void 0).accept();
  (void 0).dispose(() => {
    app.$destroy();
  });
}
export {
  dist_default as default
};
//# sourceMappingURL=index.js.map
