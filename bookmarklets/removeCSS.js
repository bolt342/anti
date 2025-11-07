javascript:(function(){
    var s = document.querySelectorAll('style,link[rel="stylesheet"]');
    for(var i = 0; i < s.length; i++) {
        s[i].parentNode.removeChild(s[i]);
        document.body.removeAttribute('style');
    }
})();