requirejs.config({  
    "shim": {
    	"jquery.mCustomScrollbar": { deps: ["jquery"]},
    	"jquery.mousewheel": { deps: ["jquery"]},
    }
});

requirejs(["jquery", "jquery.mousewheel", "jquery.mCustomScrollbar"], function () {
    

    var uiScroller = function(){
        
        if($(".scroll").length > 0){
            $(".scroll").mCustomScrollbar({axis:"x"});
        }
    }

    $(document).ready(function(){
        uiScroller();

    });
});