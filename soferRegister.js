var page = document.getElementById('page');
var last_pane = page.getElementsByClassName('pane');
last_pane = last_pane[last_pane.length - 1];
var dummy_x = null;
var offset = 900;

var isMobile = window.matchMedia("only screen and (max-width: 760px)");
window.onscroll = function () {
    // Horizontal Scroll.
    if (!isMobile.matches) {
        var y = window.scrollY;
        if (y > 900) {
            page.scrollLeft = y - offset;
            page.style.position = 'fixed';
        }
        else {
            offset = window.scrollY;
            page.scrollLeft = 0;
            page.style.position = 'relative';
        }
    }
    else {
        page.style.cssText = 'overflow: scroll; flex-wrap: wrap; white-space: normal';
    }
}
// Adjust the body height if the window resizes.
window.onresize = resize;
// Initial resize.
resize();

// Reset window-based vars
function resize() {
    var w = page.scrollWidth - window.innerWidth + window.innerHeight - 2000;
    if (!isMobile.matches)
        w += (offset + 2000);
    document.body.style.height = w + 'px';
}