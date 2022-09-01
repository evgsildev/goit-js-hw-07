import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const cardsMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", cardsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
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
        `;
    })
    .join("");
}

function onGalleryContainerClick(evt) {
  const isPictureEl = evt.target.classList.contains("gallery__image");
  if (!isPictureEl) {
    return;
  }

  evt.preventDefault();

  const getCurrentImg = evt.target;

  const getNewUrl = getCurrentImg.dataset.source;

  const instance = basicLightbox.create(
    `
        <img src="${getNewUrl}">
    `,
    {
      onShow: () => {
        document.addEventListener("keydown", KeyClose);
      },
      onClose: () => {
        document.removeEventListener("keydown", KeyClose);
      },
    }
  );

  instance.show();

  function KeyClose(evt) {
    if (evt.key === "Escape") {
      return instance.close();
    }
  }
}
