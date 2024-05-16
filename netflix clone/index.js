



const show = document.getElementsByClassName('container');

for (i=0; i<show.length; i++){
    show[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}