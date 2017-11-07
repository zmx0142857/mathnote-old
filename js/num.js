'use strict';

var filename = window.location.href.split('/');
filename = filename[filename.length-1].split('.')[0];
var i = filename.search(/[0-9]/);
if (filename.indexOf('-') > i) {
	i = filename.indexOf('-') + 1;
}
var abbr = filename.substring(0, i);
var n = parseInt(filename.substring(i));

function tag_it(str, tagname) {
	return '<' + tagname + '>' + str + '</' + tagname + '>'; 
}

function style_name_num(word, i) {
	return tag_it(word + filename + '.' + (i+1), 'b');
}

function style_num(word, i) {
	return tag_it(word + (i+1), 'b');
}

function style_void(word) {
	return tag_it(word, 'b');
}

function style_formula(word, i) {
	return '(' + filename + '-' + (i+1) + ')';
}

function decorate(name, word, style=style_name_num, get_by='class') {
	var texts;
	if (get_by === 'class') {
		texts = document.getElementsByClassName(name);
	} else {
		texts = document.getElementsByTagName(name);
	}

	var i;
	if (style === style_formula) {
		for (i = 0; i < texts.length; i++)
			texts[i].innerHTML = style(word, i);
	} else {
		for (i = 0; i < texts.length; i++)
			texts[i].innerHTML = style(word, i) + ' ' + texts[i].innerHTML;
	}
}

/*	<div id="nav">
		<a href="prev.html" id="prev">&lt;&lt;&lt;</a>
		<a href="content.html" target="_blank">· · ·</a>
		<a href="next.html" id="next">&gt;&gt;&gt;</a>
	</div>
*/
function make_nav() {
	var body = document.getElementsByTagName('body');
	var h1 = document.getElementsByTagName('h1');
	var nav = document.createElement('div');
	nav.id = 'nav';
	body[0].insertBefore(nav, h1[0]);
	if (n > 1) {
		var prev = document.createElement('a');
		prev.href = (abbr === '#' ? '%23' : abbr) + (n-1) + '.html';
		prev.id = 'prev';
		prev.innerHTML = '&lt;&lt;&lt;';
		nav.appendChild(prev);
	}
	var content = document.createElement('a');
	content.href = 'content.html';
	content.target = '_blank';
	content.innerHTML = '· · ·';
	nav.appendChild(content);

	var next = document.createElement('a');
	next.href = (abbr === '#' ? '%23' : abbr) + (n+1) + '.html';
	next.id = 'next';
	next.innerHTML = '&gt;&gt;&gt;';
	nav.appendChild(next);
}

make_nav();
decorate('h2', '', style_name_num, 'tag');
decorate('theorem', '定理');
decorate('definition', '定义');
decorate('lemma', '引理');
decorate('corollary', '推论');
decorate('example', '例');
decorate('note', '注');
decorate('method', '法', style_num);// place this before '证' and '解'
decorate('prove', '证', style_void);
decorate('solve', '解', style_void);
decorate('num', '', style_formula);

