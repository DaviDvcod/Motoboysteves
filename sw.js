
self.addEventListener("install",e=>{self.skipWaiting()});
self.addEventListener("activate",e=>{self.clients.claim()});
self.addEventListener("fetch",e=>{
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
self.addEventListener("notificationclick",e=>{
  e.notification.close();
  e.waitUntil(clients.matchAll({type:"window",includeUncontrolled:true}).then(l=>{
    for(const c of l){if("focus" in c)return c.focus()}
    return clients.openWindow("./");
  }));
});