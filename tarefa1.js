const subtitulos = document.querySelectorAll('h2');
const topicos = new Array();
const ids = new Array();
const copy = new Array();
subtitulos.forEach(subtitulo => {
    topicos.push(subtitulo.textContent);
    ids.push(subtitulo.id);
    copy.push(subtitulo.id)
});
const lista = document.querySelector('ol');
topicos.forEach(topico => {
    const item = document.createElement('li');
    item.textContent = topico;
    const item2 = copy.shift();
    if(item2 == 1){
        item.innerHTML += ['<sup>' + '<a href="#1">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 2){
        item.innerHTML += ['<sup>' + '<a href="#2">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 3){
        item.innerHTML += ['<sup>' + '<a href="#3">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 4){
        item.innerHTML += ['<sup>' + '<a href="#4">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 5){
        item.innerHTML += ['<sup>' + '<a href="#5">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 6){
        item.innerHTML += ['<sup>' + '<a href="#6">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 7){
        item.innerHTML += ['<sup>' + '<a href="#7">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 8){
        item.innerHTML += ['<sup>' + '<a href="#8">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 9){
        item.innerHTML += ['<sup>' + '<a href="#9">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 10){
        item.innerHTML += ['<sup>' + '<a href="#10">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 11){
        item.innerHTML += ['<sup>' + '<a href="#11">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 12){
        item.innerHTML += ['<sup>' + '<a href="#12">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 13){
        item.innerHTML += ['<sup>' + '<a href="#13">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 14){
        item.innerHTML += ['<sup>' + '<a href="#14">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 15){
        item.innerHTML += ['<sup>' + '<a href="#15">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 16){
        item.innerHTML += ['<sup>' + '<a href="#16">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 17){
        item.innerHTML += ['<sup>' + '<a href="#17">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 18){
        item.innerHTML += ['<sup>' + '<a href="#18">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 19){
        item.innerHTML += ['<sup>' + '<a href="#19">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 20){
        item.innerHTML += ['<sup>' + '<a href="#20">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 21){
        item.innerHTML += ['<sup>' + '<a href="#21">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 22){
        item.innerHTML += ['<sup>' + '<a href="#22">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 23){
        item.innerHTML += ['<sup>' + '<a href="#23">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 24){
        item.innerHTML += ['<sup>' + '<a href="#24">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 25){
        item.innerHTML += ['<sup>' + '<a href="#25">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 26){
        item.innerHTML += ['<sup>' + '<a href="#26">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 27){
        item.innerHTML += ['<sup>' + '<a href="#27">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 28){
        item.innerHTML += ['<sup>' + '<a href="#28">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }else if(item2 == 29){
        item.innerHTML += ['<sup>' + '<a href="#29">' + '['+ ids.shift()+ ']' + '</a>' + '</sup>'];
    }
    lista.append(item); 
});