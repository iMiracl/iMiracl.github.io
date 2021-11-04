$(function () {
  // Custom JS
 
  $(".slick_slider").slick({
    mobileFirst:true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    rows: 2,
    prevArrow: $(".prev-slick__btn"),
    nextArrow: $(".next-slick__btn"),
    // autoplay: true,   не забыть включить 
    // autoplaySpeed: 2000,    не забыть включить 
    //fade: true,
    //asNavFor: '.slider-nav',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
        },
      },
    ],
  });


  // FEEDBACK COROUSEL

  $('.feedback-corousel').slick({
    
   // mobileFirst:true,



    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    draggable: true,
   //variableWidth: true, //произвольная ширина!!!!!!!!!!
   // appendDots: $('.slick-slider-dots'),
   dotsClass: 'my-dots-class',

   responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
    
   
  });
      
	



});



const lightbox = document.getElementById("lightbox");
const images = document.getElementsByClassName("slider_item"); //пихаем все теги img в images (NodeList)Объект NodeList — это коллекция узлов, возвращаемая такими методами, как Node.childNodes и document.querySelectorAll.
console.log(images);
for (const child of images) {
  child.addEventListener("click", (e) => {
    const img = document.createElement("img");
    img.src = child.src;
    let way = img.src; //в way присвоил путь картинки 
    console.log("way =" , way);
   let replaceWay = way.replace(".jpg" ,''); //удалил расширение файла у картинки
   console.log("replace" , replaceWay);
   replaceWay = replaceWay+"Big.jpg"; // Добавил к пути файла Big.jpg
   img.src = replaceWay; // поменял путь картинки на новый
   console.log(replaceWay);
    img.classList.add("righ-lightbox-img");
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
}
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    //	lightbox.classList.add('active')// //добавляет класс active
    console.log(image.src);
    const img = document.createElement("img"); //создает <img> и хранит в переменной img
    img.src = image.src;
    while (lightbox.firstChild) {
      // при просмотре разных img первый не удаляется
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});
