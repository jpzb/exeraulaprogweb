const subtitulos = document.querySelectorAll('h2');
const topicos = new Array();
subtitulos.forEach(subtitulo => {
    topicos.push(subtitulo.textContent);
    const ancora = document.createElement('a');
    ancora.setAttribute('name', subtitulo.textContent);
    subtitulo.append(ancora);
    const retorno = document.createElement('a');
    retorno.setAttribute('href', '#');
    retorno.textContent = "Subir";
    subtitulo.parentElement.insertBefore(retorno, subtitulo.nextElementSibling);
});
const lista = document.querySelector('ol');
topicos.forEach(topico => {
    const item = document.createElement('li');
    lista.append(item);
    const link = document.createElement('a');
    link.setAttribute('href', `#${topico}`);
    link.textContent = topico; 
    item.append(link);
});

