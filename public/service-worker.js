let CACHE_NAME = "m2fleet_cache_h2Shd28902nzskNNDAOnsdie"
let URLTO_CACHE = [
    '/',
    '/products',
    '/products/vehicle-tracking-&-management',
    '/products/electronic-seal',
    '/products/advance-security-solutions',
    '/solutions',
    '/solutions/transportation',
    '/solutions/utility',
    '/solutions/car-rental',
    '/solutions/taxi',
    '/solutions/asset-tracking',
    '/solutions/cold-chain-logistics',
    '/features',
    '/features/real-time-tracking',
    '/features/job-dispatch',
    '/features/rules-&-alerts',
    '/features/vehicle-maintenance',
    '/features/fuel-consumption',
    '/features/camera-integration',
    '/features/temperature-sensor',
    '/features/rfid-receiver-&-reader',
    '/features/mobile-application',
    '/resources',
    '/contact',
    '/index.html',
    '/build/bundle.css',
    '/build/bundle.js',
    '/build/bundle.js.map',
    '/src/img/posts/job.png',
    '/src/img/posts/seal.png',
    '/src/img/posts/why.png',
    '/src/img/products/4pps.png',
    '/src/img/products/AdvSS.jpeg',
    '/src/img/products/container.jpeg',
    '/src/img/products/eseal.jpeg',
    '/src/img/products/m2fleet_dispatch_jobsya.jpg',
    '/src/img/products/m2fleet_n4v1a.png',
    '/src/img/slides/features.png',
    '/src/img/slides/rd.png',
    '/src/img/slides/solutions.png',
    '/src/img/solutions/t1.png',
    '/src/img/solutions/t2.png',
    '/src/img/solutions/t3.png',
    '/src/img/solutions/t4.png',
    '/src/img/solutions/t5.png',
    '/src/img/solutions/t6.png',
    '/src/img/solutions/t7.png',
    '/src/img/solutions/t8.png',
    '/src/img/solutions/t9.png',
    '/src/img/solutions/t10.png',
    '/src/img/solutions/t11.png',
    '/src/img/solutions/t12.png',
    '/src/img/solutions/t13.png',
    '/src/img/solutions/t14.png',
    '/src/img/solutions/c4rrent.png',
    '/src/img/solutions/coldstor4ge.png',
    '/src/img/solutions/sms3.png',
    '/src/img/solutions/transportation.png',
    '/src/img/solutions/utility.png',
    '/src/img/features/f1.png',
    '/src/img/features/f2.png',
    '/src/img/features/f3.png',
    '/src/img/features/f4.png',
    '/src/img/features/f5.png',
    '/src/img/features/f6.png',
    '/src/img/features/f7.png',
    '/src/img/features/f8.png',
    '/src/img/features/f9.png',
    '/src/img/features/f10.png',
    '/src/img/features/f11.png',
    '/src/img/features/f12.png',
    '/src/img/features/4lert2.png',
    '/src/img/features/camera.jpeg',
    '/src/img/features/groundservice.png',
    '/src/img/features/vehiclem4inten4nce2.png',
    '/src/img/features/vehiclem4inten4nce3.png',
    '/src/img/jumbo.png',
    '/src/img/m2fleet-icon.png',
    '/src/img/wa-bg.png',
    '/src/js/swipe.js',
    '/favicon.png',
    '/global.css',
    'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2'
]

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Opened cache")
            return cache.addAll(URLTO_CACHE)
        })
    )
})

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(cns => {
            return Promise.all(
                cns.filter(cn => {
                    return cn != CACHE_NAME
                }).map(cn => {
                    return caches.delete(cn)
                })
            )
        })
    )
})

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(r => {
            return r || fetch(e.request)
        })
    )
})