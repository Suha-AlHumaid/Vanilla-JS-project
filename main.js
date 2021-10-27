//  Header Anmation
$("#home").removeClass("home");
$(document).ready(function () {
  $("#imgBannerDiv").animate({
    // bottom: '250px',
    // height: '+=150px',
    // width: '+=150px',
    marginTop: "0px",
    transitionDuration: "2s",
  });

  $("#contentBanner").animate({
    // bottom: '250px',
    // height: '+=150px',
    // width: '+=150px',
    marginTop: "300px",
    transitionDuration: "2s",
  });

});

//Informations
const works = [

  {
    client: "Jamaeat App",
    tech: `Laravel , React, Php`,
    created: "November 02, 2018",
    imgUrl: `https://ccit.sa/wp-content/uploads/2021/02/2-5.png`,
    imgUrl2: `https://ccit.sa/wp-content/uploads/2021/02/2-5.png`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa, itaque consequatur earum commodi aliquam accusantium tenetur inventore reiciendis alias! Dolores id iure mollitia nemo ad quae possimus expedita iste?`,
  fav: true,
  },
  {
    client: "Bahar app",
    tech: `JS , PHP , Magento,Bootstrap`,
    created: "Feb 3, 2021",
    imgUrl: `https://ccit.sa/wp-content/uploads/2021/04/bahr3.png`,
    imgUrl2: `https://ccit.sa/wp-content/uploads/2021/04/bahr3.png`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa, itaque consequatur earum commodi aliquam accusantium tenetur inventore reiciendis alias! Dolores id iure mollitia nemo ad quae possimus expedita iste?`,
    fav: false,},
  {
    client: "Xtep Sror",
    tech: `PHP, Magento, Bootstrap, JS`,
    created: "March 3, 2021",
    imgUrl: `https://ccit.sa/wp-content/uploads/2021/04/Xtep2-ccit.png`,
    imgUrl2: `https://ccit.sa/wp-content/uploads/2021/04/Xtep2-ccit.png`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa, itaque consequatur earum commodi aliquam accusantium tenetur inventore reiciendis alias! Dolores id iure mollitia nemo ad quae possimus expedita iste?`,
    fav: true,
  },
  {
    client: "Swiss Corner",
    tech: `PHP, React, Bootstrap`,
    created: "Feb 5, 2020",
    imgUrl: `https://ccit.sa/wp-content/uploads/2021/02/3-8.png`,
    imgUrl2: `https://ccit.sa/wp-content/uploads/2021/02/3-8.png`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa, itaque consequatur earum commodi aliquam accusantium tenetur inventore reiciendis alias! Dolores id iure mollitia nemo ad quae possimus expedita iste?`,
    fav: false,
  },
  {
    client: "Saaf",
    tech: `PHP, Magento, Bootstrap, JS`,
    created: "March 3, 2020",
    imgUrl: `https://ccit.sa/wp-content/uploads/2021/02/saaf11111.png`,
    imgUrl2: `https://ccit.sa/wp-content/uploads/2021/02/saaf11111.png`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa, itaque consequatur earum commodi aliquam accusantium tenetur inventore reiciendis alias! Dolores id iure mollitia nemo ad quae possimus expedita iste?`,
    fav: false,
  },
  {
    client: "Marina Fashion",
    tech: `JQuery, Bootstrap, JS`,
    created: "2020",
    imgUrl: `https://ccit.sa/wp-content/uploads/2021/02/4-1.png`,
    imgUrl2: `https://ccit.sa/wp-content/uploads/2021/02/4-1.png`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa, itaque consequatur earum commodi aliquam accusantium tenetur inventore reiciendis alias! Dolores id iure mollitia nemo ad quae possimus expedita iste?`,
    fav: false,
  }
];

//rander of single page discription
const randerWork = (index) => {
  $("#home").hide();
  $("#workPage").addClass("showWork");
  $("#workPage").append(`

<div class="discContainer">
<div class="blue "></div>
<div class="purple"></div>
<div class="white">
    <div class="t">
    <h1>${works[index].client}</h1>
    <p>${works[index].disc}</p></div>
    </div>
    <div class="dImg">
    <img src="${works[index].imgUrl2}" alt="image" class="singlePageImg">
    </div>
</div>`);
  //end of forEach
};

//rander of partfilio
const worksRander = () => {
  $("#home").hide();
  $("#workPage").addClass("showWork");

  works.forEach((elem, index) => {
    $("#workPage").append(
      `<div class="card" id="card${index}"><img src="${elem.imgUrl}"" alt="" id="imgCard${index}"/></div>`
    );

    //end of loop
  });
};


//rander recent 4 work in home
const randerWorks = () => {

  for (let index = 0; index < 4; index++) {
    $("#cards").append(
      `<div id="card${index}" class="grid-item"><img style="width:${100*(index+3)}px;height:${100*(index+3)}px;"class="imgLatest" src="${works[index].imgUrl}" alt="" id="imgCard${index}"/>

      </div>`
    );
    $(`#card${index}`).click(() => randerWork(index));
    //end of loop

  };
};

//rander of Portfolio page
const randerPortfolio = () => {
  works.forEach((elem, index) => {
    localStorage.setItem("portfolio", JSON.stringify(works));
    location.replace("portfolio.html");
  });
  //end of loop
};
$("#portfolioLink").click(randerPortfolio);
$(".like").click(() => {
  $("like").removeClass("heart");
})
randerWorks();
