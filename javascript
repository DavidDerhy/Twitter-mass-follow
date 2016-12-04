__cnt__ = 0;
jQuery('.GridTimeline .js-follow-btn > span.follow-text').each(function(i, ele) {
    ele = jQuery(ele);
    if (ele.css('display') != 'block') {
        //alert('already following:', i);
        return;
    }
    setTimeout(function() {
        ele.click();
    }, __cnt__++ * 500);
});
