const subtitulos = document.querySelectorAll('h2');
const topicos = new Array();
const ids = new Array();
const copy = new Array();
subtitulos.forEach(subtitulo => {
    topicos.push(subtitulo.textContent);
    ids.push(subtitulo.id);
});
const lista = document.querySelector('ol');
topicos.forEach(topico => {
    const item = document.createElement('li');
    item.textContent = topico;
    const link = createElement('a');
    link.setAttribute('href', '#{topico}');
    lista.append(item); 
    item.append(link);
});