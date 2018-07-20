"use strict";var precacheConfig=[["/index.html","5e985c600950f78f6920be2113f201e9"],["/static/css/main.a3855d22.css","fa2ac7145b0c24c1e896fba12489a176"],["/static/js/main.328a2fd9.js","8f1fc01873569a378f9e39893999b3f8"],["/static/media/Hellix-Black.884223a7.woff","884223a7354d914e5c884d0d672b621c"],["/static/media/Hellix-Black.a8ee2028.woff2","a8ee2028f2f1c91474e80f6ed8b39bb5"],["/static/media/Hellix-Bold.541f6e99.woff","541f6e9942ad8564237bfde8b1b7c0d0"],["/static/media/Hellix-Bold.fea1b1b9.woff2","fea1b1b94d27e275b0cd11cc646aa4e9"],["/static/media/Hellix-ExtraBold.291617a1.woff2","291617a151e342322634be5ae434991b"],["/static/media/Hellix-ExtraBold.5d3139d3.woff","5d3139d380f818a4beff0c94db8e25b6"],["/static/media/Hellix-Light.8f2f6497.woff","8f2f64975b1bc9de2f838671ea741186"],["/static/media/Hellix-Light.f23532e2.woff2","f23532e217f7c13ac07b7c3bf9521608"],["/static/media/Hellix-Medium.15db6173.woff","15db6173df8331a0d6e58cd3cba47a7f"],["/static/media/Hellix-Medium.9892241a.woff2","9892241a2e40968afc2b9fbd404429dd"],["/static/media/Hellix-Regular.6e772299.woff","6e772299167a363c3934d312e4ea2260"],["/static/media/Hellix-Regular.9fdf1c35.woff2","9fdf1c35768cdbb4caf0b53a524fef12"],["/static/media/Hellix-SemiBold.6aa05418.woff2","6aa05418154adeab7ff9a3f9b76a8531"],["/static/media/Hellix-SemiBold.b1ce2c9c.woff","b1ce2c9c035f1143a79069b2614b3542"],["/static/media/Hellix-Thin.3d1d9555.woff","3d1d95553003751a84f70f2b18df2e47"],["/static/media/Hellix-Thin.d6a25bc1.woff2","d6a25bc108dc6f60aee9165f462b2b46"],["/static/media/agneshka_maksimik.d0f770cc.jpg","d0f770ccf155de9a153b7b7e1eecb284"],["/static/media/alex_tukaylo.4ce15698.jpg","4ce156988f0430d5234de7cfcf29c863"],["/static/media/andrey_pitunov.43185e0b.jpg","43185e0b7bd19370f0e6f139c7689815"],["/static/media/artyom_khomyakov.c8cb456a.jpeg","c8cb456a76cd07d98ebffa300f243b51"],["/static/media/clients.367658c2.png","367658c20e70fbfc6a78a22511180057"],["/static/media/dmitry_shindin.0e6c5901.jpg","0e6c5901c8ae5a55439afe124a607cfb"],["/static/media/evgeny_yakimovich.1881f7b0.jpeg","1881f7b078b87a444da56ec0b0d59337"],["/static/media/mamon-logo.974c64e3.svg","974c64e38043579954427914d1d239ed"],["/static/media/sergey_loysha.e91d1c70.jpg","e91d1c70d573b1227f9a1c389eb23223"],["/static/media/tomash_svorobovich.f41f82f9.jpg","f41f82f9745b29789052756a144abf46"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});