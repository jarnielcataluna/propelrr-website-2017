requirejs.config({
    "baseUrl": "js/lib",
    urlArgs: "bust=" + (new Date()).getTime(),
    cacheSuffix: ".buildNumber",
    "paths": {
      	"common": "../common",
      
    },
    "shim": {
    	"html5": ["jquery"],
    	"jquery-ui": ["jquery"],
        "jquery-ui": ["jquery"],
        "ScrollToPlugin": ["jquery"],
        "TweenMax": ["jquery"],
    }
});

requirejs(["common/common"]);


require(['jquery'], function($) {
    
});

