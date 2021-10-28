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

const works = JSON.parse(localStorage.getItem("works")) || [

  {
    client: "Jamaeat App",
    tech: `Swift`,
    created: "November 02, 2018",
    imgUrl: `https://ccit.sa/wp-content/uploads/2021/02/2-5.png`,
    imgUrl2: `https://ccit.sa/wp-content/uploads/2021/02/2-5.png`,
    disc: `Accelerate Your Business With Response Mobile Applications Built Over Android, IOS, Swiftcode,Kotlin, React Native, Flutter And More.`,
  fav: false,
  },

  {
    client: "Xtep Stor",
    tech: `PHP, Magento, Bootstrap, JS`,
    created: "March 3, 2021",
    imgUrl: `https://ccit.sa/wp-content/uploads/2021/04/Xtep2-ccit.png`,
    imgUrl2: `https://ccit.sa/wp-content/uploads/2021/04/Xtep2-ccit.png`,
    disc: `We Deliver ECommerce That Are Completely Customizable So That They Can Evolve In The Near Future And Accommodate The Brand’s Vision`,
    fav: false,
  },
  {
    client: "Swiss Corner",
    tech: `SWift`,
    created: "Feb 5, 2020",
    imgUrl: `https://ccit.sa/wp-content/uploads/2021/02/3-8.png`,
    imgUrl2: `https://ccit.sa/wp-content/uploads/2021/02/3-8.png`,
    disc: `Accelerate Your Business With Response Mobile Applications Built Over Android, IOS, Swiftcode,Kotlin, React Native, Flutter And More.`,
    fav: false,
  },
  {
    client: "Bahar Profile",
    tech: `JS , PHP , Magento,Bootstrap`,
    created: "Feb 3, 2021",
    imgUrl: `https://ccit.sa/wp-content/uploads/2021/04/bahr3.png`,
    imgUrl2: `https://ccit.sa/wp-content/uploads/2021/04/bahr3.png`,
    disc: `Custom Web Application Development, Re-Engineering / Migration, Porting, Upgrades / Enhancement, Integration, Delivery And Support.`,
    fav: false,},

  {
    client: "Saaf",
    tech: `PHP, Magento, Bootstrap, JS`,
    created: "March 3, 2020",
    imgUrl: `https://ccit.sa/wp-content/uploads/2021/02/saaf11111.png`,
    imgUrl2: `https://ccit.sa/wp-content/uploads/2021/02/saaf11111.png`,
    disc: `We Deliver ECommerce That Are Completely Customizable So That They Can Evolve In The Near Future And Accommodate The Brand’s Vision`,
    fav: false,
  },
  {
    client: "Marina Fashion",
    tech: `JQuery, Bootstrap, JS`,
    created: "2020",
    imgUrl: `https://ccit.sa/wp-content/uploads/2021/02/4-1.png`,
    imgUrl2: `https://ccit.sa/wp-content/uploads/2021/02/4-1.png`,
    disc: `We Deliver ECommerce That Are Completely Customizable So That They Can Evolve In The Near Future And Accommodate The Brand’s Vision.`,
    fav: false,
  }
];
localStorage.setItem("works", JSON.stringify(works));

//rander of single page discription
const randerWork = (index) => {
  $("#home").hide();
  $("#workPage").addClass("showWork");
  $("#workPage").append(

`<div class="discContainer">
<div class="blue "></div>
<div class="purple"></div>
<div class="white">
    <div class="t">
    <h1>${works[index].client}</h1>
    <p>${works[index].disc}</p>
    </div>
    </div>
    <div class="dImg"> <img src="${works[index].imgUrl2}" alt="image" class="singlePageImg"></div>
</div>`


);
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
    // $("#cards").append(
    //   `<div id="card${index}" class="grid-item"><img style="width:${100*(index+3)}px;height:${100*(index+3)}px;"class="imgLatest" src="${works[index].imgUrl}" alt="" id="imgCard${index}"/>

    //   </div>`
    // );
    $("#cards").append(`
<div id="card${index}" class="grid-item">
<img style="width:${100*(index+3)}px;height:${100*(index+3)}px;"class="imgLatest" src="${works[index].imgUrl}" alt="" id="imgCard${index}"/>
<div class="overlay text">${works[index].client}</div>
</div>`   );

    $(`#card${index}`).click(() => randerWork(index));
    //end of loop

  };
};

//rander of Portfolio page
const randerPortfolio = () => {
  works.forEach((elem, index) => {
    localStorage.setItem("works", JSON.stringify(works));
    location.replace("portfolio.html");
  });
  //end of loop
};
$("#portfolioLink").click(randerPortfolio);
randerWorks();
