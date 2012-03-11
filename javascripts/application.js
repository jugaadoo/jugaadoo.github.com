(function() {
  var Jugaadoo, log, _ref;
  var __slice = Array.prototype.slice;
  Jugaadoo = (function() {
    var createIframe, iframeElem, initToggleVideo, klass;
    function Jugaadoo() {}
    Jugaadoo.log = function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log.apply(console, args) : void 0 : void 0;
    };
    klass = null;
    iframeElem = null;
    Jugaadoo.getClass = function() {
      return klass;
    };
    initToggleVideo = function() {
      var link;
      link = $("#trailer-link");
      return link.click(function(e) {
        e.preventDefault();
        link.fadeOut("fast");
        $("#splash-image").fadeOut("fast", function() {
          return $("#iframe").fadeIn("fast");
        });
        return false;
      });
    };
    createIframe = function(callback) {
      iframeElem = $("<iframe src='http://player.vimeo.com/video/27611453' width='1000' height='563' frameborder='0'></iframe>");
      return typeof callback === "function" ? callback() : void 0;
    };
    Jugaadoo.init = function() {
      klass = $("html").attr("class");
      if (klass === "not-ie") {
        initToggleVideo();
        return createIframe(function() {
          return $("#iframe").html(iframeElem);
        });
      }
    };
    return Jugaadoo;
  })();
  window.Jugaadoo = Jugaadoo;
  window.htmlClass = Jugaadoo.getClass;
  log = Jugaadoo.log;
  if ((_ref = window.log) == null) {
    window.log = log;
  }
  jQuery(function() {
    return Jugaadoo.init();
  });
}).call(this);
