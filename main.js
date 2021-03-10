/*var name = prompt ('Як вас звати?', '');
if (name.length <= '7') {
    alert ('Привіт, ' + name + '!');
} else {
    alert ('Добрий день, ' + name + '!');
}
*/
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }