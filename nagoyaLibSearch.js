
var myform = document.createElement('form');
myform.action = 'https://www.library.city.nagoya.jp/licsxp-opac/WOpacMnuTopInitAction.do?WebLinkFlag=1&moveToGamenId=tifschcmpdpre&SchType=1';
myform.method = 'POST';
var inp = document.createElement('input');
inp.name = 'kensaku_keyword';
inp.value = 'バックミンスター';
myform.appendChild(inp);
myform.submit();


