const links = document.getElementsByClassName('link');
const bulb = document.getElementById('fa-lightbulb');
const table = document.querySelector('table');
const anchor = document.querySelectorAll('a');
const list = document.querySelector('.project-one');

    list.addEventListener('click', () => {
    table.classList.toggle('tableHide');
    });



bulb.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {

        table.style.borderColor = 'white';

        for (let a of anchor){
        a.style.color = 'white'
    };

        for (let link of links) {
        link.style.color = 'white'
        };
}
    else {

        table.style.borderColor = '';

        for (let a of anchor){
            a.style.color = ''
        };

        for (let link of links){
        link.style.color = ''
        };
    }
})

/* Image Slider */

const imgUrlsArr = [
    "Media/photo-1460794418188-1bb7dba2720d.avif",
    "Media/photo-1731612166799-2fbba4e93c42.avif",
    "Media/photo-1571171637578-41bc2dd41cd2.avif"
  ];
  
  const articleContainer = document.getElementById("article-container");
  
  articleContainer.innerHTML = `<img src="${imgUrlsArr[0]}" class="image" />`;
  
  let imgIndex = 0;
  
  function previousImg() {
    if (imgIndex > 0 && imgIndex < imgUrlsArr.length) {
        imgIndex--;
    } else {
        imgIndex = imgUrlsArr.length - 1;
    }

    changeImage(imgIndex);
}

function nextImg() {
    if (imgIndex >= 0 && imgIndex < imgUrlsArr.length - 1) {
        imgIndex++;
    } else {
        imgIndex = 0;
    }

    changeImage(imgIndex);
}

function showImage(index) {
    articleContainer.innerHTML = `<img src="${imgUrlsArr[index]}" class="image visible" />`;
}

/* Funzione per cambiare immagine con transizione */
function changeImage(index) {
    const img = document.createElement('img');
    img.src = imgUrlsArr[index];
    img.classList.add('image');
    
    // Aggiungi l'immagine al container
    articleContainer.innerHTML = '';
    articleContainer.appendChild(img);

    // Ritardo per la transizione (minimo per far partire la transizione)
    setTimeout(() => {
        img.classList.add('visible');
    }, 10);
}

  /* Image Slider Auto Play */

  function startAutoPlay() {
    setInterval(() => {
        nextImg();
    }, 4000); // Cambia immagine ogni 4 secondi
}

// Mostra la prima immagine all'avvio
showImage(imgIndex);

// Avvia l'auto-play
startAutoPlay();