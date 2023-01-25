// eslint-disable-next-line import/no-extraneous-dependencies
import { precacheAndRoute } from 'workbox-precaching';

// eslint-disable-next-line no-underscore-dangle, no-restricted-globals
precacheAndRoute(self.__WB_MANIFEST);

// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', () => {
  console.log('Service Worker Installed');
  // eslint-disable-next-line no-restricted-globals
  self.skipWaiting();
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener('push', () => {
  console.log('Service Worker Pushed');
});
