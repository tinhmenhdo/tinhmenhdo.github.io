// EMERGENCY SERVICE WORKER CLEANER - Run this script to completely remove all service workers
(async function emergencyServiceWorkerCleanup() {
  console.log('🚨 EMERGENCY SERVICE WORKER CLEANER STARTED');

  // Try to use the integrated service worker killer first
  if (typeof window.emergencySwCleanup === 'function') {
    console.log('🔧 Using integrated service worker killer...');
    await window.emergencySwCleanup();
    return;
  }

  // Fallback to manual cleanup if killer is not available
  console.log('🔧 Using fallback service worker cleanup...');

  try {
    // 1. Unregister all service workers
    if ('serviceWorker' in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();

      for (const registration of registrations) {
        await registration.unregister();
        console.log('💀 Service worker unregistered:', registration.scope);
      }

      if (registrations.length > 0) {
        console.log(`✅ Unregistered ${registrations.length} service worker(s)`);
      } else {
        console.log('ℹ️ No service workers found');
      }
    }

    // 2. Clear all caches
    if ('caches' in window) {
      const cacheNames = await caches.keys();

      for (const cacheName of cacheNames) {
        await caches.delete(cacheName);
        console.log('💀 Cache deleted:', cacheName);
      }

      if (cacheNames.length > 0) {
        console.log(`✅ Deleted ${cacheNames.length} cache(s)`);
      } else {
        console.log('ℹ️ No caches found');
      }
    }

    // 3. Clear service worker related storage
    const swKeys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (
        key &&
        (key.includes('sw-') || key.includes('service-worker') || key.includes('workbox') || key.includes('pwa'))
      ) {
        swKeys.push(key);
      }
    }

    swKeys.forEach((key) => {
      localStorage.removeItem(key);
      console.log('💀 SW localStorage key removed:', key);
    });

    if (swKeys.length > 0) {
      console.log(`✅ Removed ${swKeys.length} service worker localStorage key(s)`);
    }

    // 4. Clear sessionStorage
    sessionStorage.clear();
    console.log('💀 sessionStorage cleared');

    // 5. Clear IndexedDB
    if ('indexedDB' in window) {
      try {
        const databases = await indexedDB.databases();
        for (const db of databases) {
          if (db.name) {
            indexedDB.deleteDatabase(db.name);
            console.log('💀 IndexedDB deleted:', db.name);
          }
        }
        if (databases.length > 0) {
          console.log(`✅ Deleted ${databases.length} IndexedDB database(s)`);
        }
      } catch (e) {
        console.log('💀 IndexedDB cleared (if any)');
      }
    }

    console.log('✅ EMERGENCY SERVICE WORKER CLEANER COMPLETED');
    console.log('🔄 Page will refresh in 2 seconds to ensure clean state');

    // Auto refresh after 2 seconds
    setTimeout(() => {
      console.log('🔄 Auto refreshing...');
      window.location.reload();
    }, 2000);
  } catch (error) {
    console.error('❌ Error during service worker cleanup:', error);
  }
})();
