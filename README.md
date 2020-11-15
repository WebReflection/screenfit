# screenfit

A cross platform, cross WebView, solution to fit 100% any Web page.

**[Live Demo](https://webreflection.github.com/screenfit/)**



## Usage

Include *screenfit* helper on top of your *HTML* page/application, and optionally opt in to listen to changes:

```js
addEventListener('screenfit', ({detail}) => {
  const {width, height} = detail;
  console.log(`Now @${width}x${height}`);
});
```

It's important to include this module *ASAP* as *src*, `defer`, or `module`, as it adjusts both `<html>` and `<body>` styles once, so the sooner it runs, the better it is for your web/application.



## About

When it comes to fullfill the current visible area of a Web page/application, nothing really works cross platform via *CSS* only, especially when the OS keyboard shows up.

This module goal is to fix the ability to fullfill a screen in both `width` and, most importantly, `height`, whenever the keyboard is on the screen, or not.



## Use Cases

  * hero images/pages that perfectly fit on the screen even with an active keyboard
  * non necesasrily resizable fullscreen applications such as [Maps](https://webreflection.github.io/map/) and similar
  * splash screens and login splash screens
  * every other use case that needs 100% *HTML* area to work



## Compatibility

**Works/Tested on**

 - KaiOS
 - Opera Mini
 - UCE Browser / Mini
 - Windows Phone
 - Samsung Internet
 - Android 6+ / Androind One
 - Any Chrome/ium based browser
 - Safari / Moble 13+
 - Vivaldi
 - Firefox / Nightly
 - Desktop browsers, including *IE11* (see *gotchas*)

**Known Gotchas**

 - IE11 and Kindle experimental browser need features detection (see [index.html](./index.html))
 - iOS 12 (iPad does *not* trigger any resize), possible work around for iOS < 13 but not sure how to detect the available size without the keyboard: `document.addEventListener('focus', resize, true)`. If you know how to get the right height with an *iPad* on *iOS* 12 with a keyboard up, please file an issue/contact me, thank you!
