var CACHE_NAME = 'my-cache-v1';
var filesToCahche = [
  '/',
  '/app.js',
  '/base.css',
  './icon.png'
];

// self는 service worker쪽 this와 같은 개념
// waitUntil이런 것들은 브라우저에서 제공해주는 기능
self.addEventListener('install', function(event) {
  event.waitUntil(
    // 캐쉬 이름을 등록하고 그 캐쉬 이름에 해당하는 파일들을 캐싱(저장)
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(filesToCahche)
      })
      .catch(function(error) {
        console.error(error);
      })
  );
});

self.addEventListener('fetch', function(event) {

  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request)
    })
    .catch(function(error) {
      console.log(error);
      
    })
  );
})

// var a = 10;

// chrome: //serviceworker-internals/
// 기본 크롭 개발도구 에서는 안되고
// 위 사이트에 Inspect에서 실행됨