"use strict";var precacheConfig=[["/index.html","38df9d54747e2ba66767713b64d6dbba"],["/static/css/main.85a2e5f7.css","36efdf3851b236ea9998cff1f8ce14cb"],["/static/js/main.9323636e.js","e167a11b045b5b6e077b45c49002c690"],["/static/media/lf300.3a48672c.ttf","3a48672c01d1717de4b3745f7ae23fd2"],["/static/media/lf400.30ee6085.ttf","30ee60852dd36a04ac070c7b94cd25be"],["/static/media/lf500.89fadac2.ttf","89fadac26dc8b67411bfeb46c1b53435"],["/static/media/lf600.cfb7b3cd.ttf","cfb7b3cd115ff97473d601fc139858e8"],["/static/media/lf700.242d8322.ttf","242d832220bc5cfbc35876479a53d0f7"],["/static/media/lf800.a4ee16aa.ttf","a4ee16aa8b2b09eaa74c83212ba99378"],["/static/media/lf900.da945f08.ttf","da945f0869e3ec337af21823e58a24a9"],["/static/media/rm100.b93c2ad4.ttf","b93c2ad436ccb747ae415c1e865819a4"],["/static/media/rm300.b82d827b.ttf","b82d827ba127c43e9272942682b88dc3"],["/static/media/rm400.a48ac416.ttf","a48ac41620cd818c5020d0f4302489ff"],["/static/media/rm500.5a45b286.ttf","5a45b286f59824f5d3b2d761871ced29"],["/static/media/rm700.c0c4a337.ttf","c0c4a33786b0278c385d0f647b57490f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});