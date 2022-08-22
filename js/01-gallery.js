import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);


function createGallery(galleryItems) {
   return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>
        `
   }).join("");
   
}

function onGalleryContainerClick (evt) {
    const isPictureEl = evt.target.classList.contains("gallery__image");
    if(!isPictureEl) {
        return;
    }

    evt.preventDefault();

    const getImg = evt.target;
    
    getImg.setAttribute("src", getImg.dataset.source);
    
    const imgSrc = getImg.src;

    const instance = basicLightbox.create(`
    <img src="${imgSrc}" width="800" height="600">
    `)

    instance.show();
    
    document.addEventListener("keydown", evt => {
        if(evt.key == "Escape") {
            return instance.close();
    }
});
}