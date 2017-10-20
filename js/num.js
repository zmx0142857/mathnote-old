var t = document.title;
var abbr = t.substring(0, t.indexOf(' '));
var X = abbr[0];
var n = parseInt(abbr.substring(1, abbr.length));
var i;

function decorate(classname, word) {
	var tag = document.getElementsByClassName(classname);
	var i;
	for (i = 0; i < tag.length; i++) {
		tag[i].innerHTML = '<b>' + word + abbr + '.' + (i+1) + '</b> ' + tag[i].innerHTML;
	}
}

// nav
//var nav = document.getElementsById('nav');
//if (X = '#')
//	X = '%23';
//nav[0].innerHTML = nav[0].innerHTML.replace(/prev/g, X + (n-1)).replace(/next/g, X + (n+1));

var h2 = document.getElementsByTagName('h2');
for (i = 0; i < h2.length; i++) {
	h2[i].innerHTML = abbr + '.' + (i+1) + ' ' + h2[i].innerHTML;
}

decorate('theorem', '定理');
decorate('definition', '定义');
decorate('lemma', '引理');
decorate('corollary', '推论');
decorate('note', '注');

// formula num: overwrite
var num = document.getElementsByClassName('num');
for (i = 0; i < num.length; i++) {
	num[i].innerHTML = '(' + abbr + '-' + (i+1) + ')';
}
