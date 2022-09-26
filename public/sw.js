var STATIC_CACHE_VERSION = 'static-v1';
var DYNAMIC_CACHE_VERSION = 'dynamic-v1';

self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing service worker...', event);
  event.waitUntil(
    caches.open(STATIC_CACHE_VERSION).then(function (cache) {
      cache.addAll([
        '/',
        './index.html',
        '../dist/bundle.js',
        './img/logo.jpg',
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap'
      ]);
    })
  );
});

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating service worker...', event);
  // Cleaning the old cache
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(key => {
          if (key !== DYNAMIC_CACHE_VERSION && key !== STATIC_CACHE_VERSION) return caches.delete(key);
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request).then(function (res) {
          return caches.open(DYNAMIC_CACHE_VERSION).then(function (cache) {
            cache.put(event.request.url, res.clone());
            return res;
          });
        });
      }
    })
  );
});

// const syncOfflineOrders = async () => {
//   const transactionDB = DB.getTransactionDB();
//   const offlineOrders = [];
//   transactionDB.iterate((order, key) => {
//     offlineOrders.push([key, order]);
//   });

//   const syncResults = await Promise.all(
//     offlineOrders.map(async (key, order) => {
//       const userData = await fetch('https://basic-react-a8d88-default-rtdb.firebaseio.com/users.json', {
//         method: 'POST',
//         body: JSON.stringify({
//           mobile: order.mobile,
//           firstName: order.firstName,
//           lastName: order.lastName,
//           address: order.address
//         })
//       });

//       const userDataResponse = await userData.json();

//       return fetch('https://basic-react-a8d88-default-rtdb.firebaseio.com/orders.json', {
//         method: 'POST',
//         body: JSON.stringify({
//           userId: userDataResponse.name,
//           items: order.items,
//           subTotal: order.subTotal
//         })
//       })
//         .then(function (res) {
//           return res.json();
//         })
//         .then(function (data) {
//           console.log(data);
//           transactionDB.removeItem(key);
//         });
//     })
//   );

//   console.log('syncResults', syncResults);
// };

self.addEventListener('sync', event => {
  console.log('Back online!');

  if (event.tag === 'orderSync') {
    console.log('orderSync');
    // event.waitUntil();
  }
});
