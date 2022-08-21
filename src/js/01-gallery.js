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
   
    evt.preventDefault();
    const imgBlock = evt.target;
    const linkUrl = imgBlock.parentNode.href;
    console.log(linkUrl); 
}