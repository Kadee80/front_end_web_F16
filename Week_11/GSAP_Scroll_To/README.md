# Scrollto Plugin – Elevator animation/nav example:

This example will be using a lot of jQuery, GSAP’s TweenLite, EasePack, and ScrollTo plugins. Here are the CDN links for the libraries we need for this example before we begin:


`<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>`

` <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/easing/EasePack.min.js"></script>`

`<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/plugins/ScrollToPlugin.min.js"></script>`

`<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>`


We should wrap all of our code in a document.ready function to ensure nothing executes before everything has loaded on our page:

```jquery
$(document).ready(function() {

});
```

This example will also be using jQuery’s [.offset()](https://api.jquery.com/offset/) and a [custom HTML5 data attribute](http://www.w3schools.com/tags/att_global_data.asp). You can read up on these further in the links above.