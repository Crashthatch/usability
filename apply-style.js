var loc = window.location.toString();
style = 'scott/fip';
if (loc.indexOf('?') > 0) {
	var style = loc.substr(loc.indexOf('?') + 1);
	if (style.indexOf('#') > 0)
		style = style.substr(0, style.indexOf('#'));
}
document.write('<link href="' + style + '.css" rel="stylesheet/less" type="text/css" />');
document.write('<script src="http://lesscss.googlecode.com/files/less-1.2.1.min.js" type="text/javascript"></scr' + 'ipt>');
document.write('<script type="text/javascript" src="' + style + '.js"></sc' + 'ript>');
document.write('<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></sc' + 'ript>');
document.write('<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js"></sc' + 'ript>');
