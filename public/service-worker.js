importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "img/icons/100.png",
    "revision": "232bd1dd919e6cedbd3783fd4a89b206"
  },
  {
    "url": "img/icons/1024.png",
    "revision": "a53f3750e855c26bf22c6470b85efcd4"
  },
  {
    "url": "img/icons/114.png",
    "revision": "2c9e978f13b598d555a9ac808b78f85e"
  },
  {
    "url": "img/icons/120.png",
    "revision": "148e4ccd5860bb519af05ced498ed2d6"
  },
  {
    "url": "img/icons/128.png",
    "revision": "ac3c9ea9bb706b0e48f04100d62a29fa"
  },
  {
    "url": "img/icons/144.png",
    "revision": "59b961e7215c3b07a593b0a0aa74e31f"
  },
  {
    "url": "img/icons/152.png",
    "revision": "f3dc4a49c6076052fa32d7303d429f1f"
  },
  {
    "url": "img/icons/16.png",
    "revision": "931fc5d16d6e17244126dafc7fa54a46"
  },
  {
    "url": "img/icons/167.png",
    "revision": "7bc1624797e6f0a36f5c4bc4c0d2942c"
  },
  {
    "url": "img/icons/180.png",
    "revision": "a925c539eba26b6a12d844c0ded85771"
  },
  {
    "url": "img/icons/20.png",
    "revision": "85a0c21482296fb8505a81282e3d6f6e"
  },
  {
    "url": "img/icons/256.png",
    "revision": "39264b8c26571d2fe43c172ad74f09bf"
  },
  {
    "url": "img/icons/29.png",
    "revision": "e0d9f67eba2244a25b1be2d5db162c89"
  },
  {
    "url": "img/icons/32.png",
    "revision": "1e63112fd3cc87ffc741829a1a49c7ed"
  },
  {
    "url": "img/icons/40.png",
    "revision": "08966c0daa2222dac5262dd35064aab0"
  },
  {
    "url": "img/icons/50.png",
    "revision": "f9c83526149984e16acf9ae75ec36c1c"
  },
  {
    "url": "img/icons/512.png",
    "revision": "c037b0126164fb3d50cc615175e8d835"
  },
  {
    "url": "img/icons/57.png",
    "revision": "0f1185012296e1a471a073520819ceab"
  },
  {
    "url": "img/icons/58.png",
    "revision": "51d1d75ee131b9f715498171794b22e5"
  },
  {
    "url": "img/icons/60.png",
    "revision": "7d6575fc7770c11b26b40438c66eb083"
  },
  {
    "url": "img/icons/64.png",
    "revision": "77e39e230e1e46db1febcd3d61c53d23"
  },
  {
    "url": "img/icons/72.png",
    "revision": "3c55d8840e3655bf82dee15ef383cb40"
  },
  {
    "url": "img/icons/76.png",
    "revision": "7cb75d747a600b764fe991dd403686e0"
  },
  {
    "url": "img/icons/80.png",
    "revision": "23c9075fc2922ce26b3b6c81f154e181"
  },
  {
    "url": "img/icons/87.png",
    "revision": "aece83296c1201bdd8c183f342c1e7b9"
  },
  {
    "url": "img/logo.jpg",
    "revision": "04983c35b4b9fdd58ba3d22c4c2a8b70"
  },
  {
    "url": "index.html",
    "revision": "d89d3dbb209b33513e20bb4df9d1583f"
  },
  {
    "url": "manifest.json",
    "revision": "fe1c80bf9ab48888a5e924d7ec7d8f04"
  },
  {
    "url": "sw.js",
    "revision": "dc90fb6e784a763dbb7ce6cb80568cb8"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
