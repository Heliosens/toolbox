let bubbles = document.getElementById('band').getElementsByTagName('a');

for (let i = 0 ; i < bubbles.length ; i++){
    bubbles[i].addEventListener('click', function (e){
        setTimeout(giveAttr, 1000);
        this.classList.toggle("grow");
    })
}

function giveAttr ($item) {
    $item.setAttribute('href', 'index?c=test')
}

