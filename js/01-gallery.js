import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

for (let i = 0; i < galleryItems.length; i++) {
  const image = document.createElement("img");
  image.classList = "gallery__image";
  image.src = galleryItems[i].preview;
  image.alt = galleryItems[i].description;
  image.setAttribute("data-source", `${galleryItems[i].original}`);

  const link = document.createElement("a");
  link.classList = "gallery__link";
  link.href = galleryItems[i].original;

  const div = document.createElement("div");
  div.classList = "gallery__item";

  link.append(image);
  div.append(link);
  gallery.append(div);

  div.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.dataset.source);

    const instance = basicLightbox.create(
      `<img src=${galleryItems[i].original} width="800" height="600">`
    );

    instance.show();

    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        instance.close();
      }
    });
  });
}
