var t = document.title;
var abbr = t.substring(0, t.indexOf(' '));
var X = abbr[0];
var n = parseInt(abbr.substring(1, abbr.length));
var i;

function tag_it(str, tagname) {
	return '<' + tagname + '>' + str + '</' + tagname + '>'; 
}

function style_name_num(word, i) {
	return tag_it(word + abbr + '.' + (i+1), 'b');
}

function style_num(word, i) {
	return tag_it(word + (i+1), 'b');
}

function style_void(word) {
	return tag_it(word, 'b');
}

function style_formula(word, i) {
	return '(' + abbr + '-' + (i+1) + ')';
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

// nav
//var nav = document.getElementsById('nav');
//if (X = '#')
//	X = '%23';
//nav[0].innerHTML = nav[0].innerHTML.replace(/prev/g, X + (n-1)).replace(/next/g, X + (n+1));

decorate('h2', '', style_name_num, 'tag')
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
