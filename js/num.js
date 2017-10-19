var t = document.title;
var abbr = t.substring(0, t.indexOf(' '));
var X = abbr[0];
var n = parseInt(abbr.substring(1, abbr.length));
var i;

// nav
//var nav = document.getElementsById('nav');
//if (X = '#')
//	X = '%23';
//nav[0].innerHTML = nav[0].innerHTML.replace(/prev/g, X + (n-1)).replace(/next/g, X + (n+1));

// h2
var h2 = document.getElementsByTagName('h2');
for (i = 0; i < h2.length; i++) {
	h2[i].innerHTML = abbr + '.' + (i+1) + ' ' + h2[i].innerHTML;
}

// note
var note = document.getElementsByClassName('note');
for (i = 0; i < note.length; i++) {
	note[i].innerHTML = '<b>注' + abbr + '.' + (i+1) + '</b> ' + note[i].innerHTML;
}

// formula num: overwrite
var num = document.getElementsByClassName('num');
for (i = 0; i < num.length; i++) {
	num[i].innerHTML = '(' + abbr + '-' + (i+1) + ')';
}
