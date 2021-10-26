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
    client: "website1",
    tech: `JS`,
    created: "2020",
    imgUrl: `/img1.jpg`,
    imgUrl2: `/img1.jpg`,
    imgUrl3: `/img1.jpg`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa, itaque consequatur earum commodi aliquam accusantium tenetur inventore reiciendis alias! Dolores id iure mollitia nemo ad quae possimus expedita iste?`,
  },
  {
    client: "website2",
    tech: `JS`,
    created: "2020",
    imgUrl: `/img1.jpg`,
    imgUrl2: `/img1.jpg`,
    imgUrl3: `/img1.jpg`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa, itaque consequatur earum commodi aliquam accusantium tenetur inventore reiciendis alias! Dolores id iure mollitia nemo ad quae possimus expedita iste?`,
  },
  {
    client: "website3",
    tech: `JS`,
    created: "2020",
    imgUrl: `/img1.jpg`,
    imgUrl2: `/img1.jpg`,
    imgUrl3: `/img1.jpg`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa, itaque consequatur earum commodi aliquam accusantium tenetur inventore reiciendis alias! Dolores id iure mollitia nemo ad quae possimus expedita iste?`,
  },
  {
    client: "website4",
    tech: `JS`,
    created: "2020",
    imgUrl: `/img1.jpg`,
    imgUrl2: `/img1.jpg`,
    imgUrl3: `/img1.jpg`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa, itaque consequatur earum commodi aliquam accusantium tenetur inventore reiciendis alias! Dolores id iure mollitia nemo ad quae possimus expedita iste?`,
  },
  {
    client: "website5",
    tech: `JS`,
    created: "2020",
    imgUrl: `/img1.jpg`,
    imgUrl2: `/img1.jpg`,
    imgUrl3: `/img1.jpg`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa, itaque consequatur earum commodi aliquam accusantium tenetur inventore reiciendis alias! Dolores id iure mollitia nemo ad quae possimus expedita iste?`,
  },
  {
    client: "website6",
    tech: `JS`,
    created: "2020",
    imgUrl: `/img1.jpg`,
    imgUrl2: `/img1.jpg`,
    imgUrl3: `/img1.jpg`,
    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa, itaque consequatur earum commodi aliquam accusantium tenetur inventore reiciendis alias! Dolores id iure mollitia nemo ad quae possimus expedita iste?`,
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
      <div class="overlay">
      <div class="text">${works[index].client}</div>
    </div>
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

randerWorks();
