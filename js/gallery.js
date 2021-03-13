galleryData = [
  {
    src: "./assest/a.webp",
    title: "Image Title",
    description: "Image description",
  },
  {
    src: "./assest/b.png",
    title: "Image Title",
    description: "Image description",
  },
  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },
  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },
  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },

  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },
  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },

  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },
  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },
  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },

  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },
  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },

  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },
  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },

  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },
  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },

  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },
  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },

  {
    src: "./assest/pp.jpg",
    title: "Image Title",
    description: "Image description",
  },
];

fulload = false;

function showGallery(galleryData, start, end) {
  document.querySelector(".grid").innerHTML = `<div class="grid-sizer"></div>`;
  for (i = start; i < end; i++) {
    document.querySelector(".grid").innerHTML += `
        <div class="grid-item" data-aos="fade-up">
        <figure>
        <a data-fancybox="gallery" href="${galleryData[i].src}" data-caption="${galleryData[i].description}">
        <img src="${galleryData[i].src}" >
        </a>
        </figure>
        </div>
        `;
  }
  var grid = document.querySelector(".grid");
  var msnry;

  imagesLoaded(grid, function () {
    // init Isotope after all images have loaded
    msnry = new Masonry(grid, {
      itemSelector: ".grid-item",
      columnWidth: ".grid-sizer",
      percentPosition: true,
    });
  });
}

function showAllGallery(galleryData) {
  document.querySelector(".grid").innerHTML = `<div class="grid-sizer"></div>`;
  showGallery(galleryData, 0, galleryData.length);
}

document.querySelector(".gallery-button").addEventListener("click", () => {
  if (!fulload) {
    showAllGallery(galleryData);

    document.querySelector(".gallery-button").innerHTML = "Show less";
    fulload = true;
  } else {
    showGallery(galleryData, 0, 9);

    document.querySelector(".gallery-button").innerHTML = "Show less";
    fulload = false;
  }
});

showGallery(galleryData, 0, 9);
