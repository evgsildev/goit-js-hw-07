import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);



function createGallery(galleryItems) {
   return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="large-image.jpg"
                    alt="${description}"
                />
            </a>
        </div>
        `
   }).join("");
   
}

