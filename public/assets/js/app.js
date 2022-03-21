let bubbles = document.getElementById('band').getElementsByTagName('div');

for (let i = 0 ; i < bubbles.length ; i++){
    bubbles[i].addEventListener('click', function (){
        setInterval()
        this.classList.toggle("grow");

    })
}
