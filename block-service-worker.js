// BLOCK SERVICE WORKER REGISTRATION - Load this script early to prevent SW installation
(function blockServiceWorker() {
  console.log('🚫 Service Worker blocker loaded');

  if ('serviceWorker' in navigator) {
    // Override the register method to block new registrations
    const originalRegister = navigator.serviceWorker.register;

    navigator.serviceWorker.register = function (...args) {
      console.warn('🚫 Blocked service worker registration attempt:', args[0]);
      console.log('Service workers are disabled for this site');
      return Promise.reject(new Error('Service worker registration blocked by policy'));
    };

    // Also remove any existing service workers
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      registrations.forEach(function (registration) {
        registration.unregister().then(function () {
          console.log('🗑️ Removed existing service worker:', registration.scope);
        });
      });
    });

    console.log('✅ Service worker registration blocked');
  } else {
    console.log('ℹ️ Service workers not supported in this browser');
  }
})();
