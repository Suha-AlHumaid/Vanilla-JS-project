$(document).ready(function(){
//  console.log("hi");
    // $(`#imgBannerDiv`).animate({top:: '500px'});
    $("#imgBannerDiv").animate({
        // bottom: '250px',
        // height: '+=150px',
        // width: '+=150px',
        marginTop:'0px' ,
        transitionDuration: '2s'
      });
      $("#contentBanner").animate({
        // bottom: '250px',
        // height: '+=150px',
        // width: '+=150px',
        marginTop:'300px' ,
        transitionDuration: '2s'
      });
});

const works =[
 {client:"website0",tech:`JS`, created: "2020" , imgUrl:`/img1.jpg`,imgUrl2:`/img1.jpg`,imgUrl3:`/img1.jpg`},
 {client:"website1",tech:`JS`, created: "2020" , imgUrl:`/img1.jpg`,imgUrl2:`/img1.jpg`,imgUrl3:`/img1.jpg`},
 {client:"website2",tech:`JS`, created: "2020" , imgUrl:`/img1.jpg`,imgUrl2:`/img1.jpg`,imgUrl3:`/img1.jpg`},
 {client:"website2",tech:`JS`, created: "2020" , imgUrl:`/img1.jpg`,imgUrl2:`/img1.jpg`,imgUrl3:`/img1.jpg`},
 {client:"website3",tech:`JS`, created: "2020" , imgUrl:`/img1.jpg`,imgUrl2:`/img1.jpg`,imgUrl3:`/img1.jpg`},

];

const randerWork= (index) =>{
    $("#home").hide();
    $('#workPage').addClass("showWork");
    $('#workPage').append(
        `    <div>
        <h3>Client: <span>${works[index].client}</span></h3>
        <h3>Created: <span>${works[index].created}</span></h3>
        <h3>Teachnologies: <span>${works[index].tech}</span></h3>
        <img src="${works[index].imgUrl}" alt="">
        <img src="${works[index].imgUrl2}" alt="">
        <img src="${works[index].imgUrl3}" alt="">
    </div>`
      );
//end of foeEach
};

const randerWorks = () => {

    // works.forEach((elem, index) => {
        for(let index=0; index<4; index++){

      $("#cards").append(
        //  `<h1>hi</h1>`
        `<div class="grid-item" id="card${index}"><img src="${works[index].imgUrl}"" alt="" id="imgCard${index}"/></div>`
      );
      $(`#card${index}`).click(()=>randerWork(index));
      //end of loop
    // });
      };
  };

  randerWorks();
 
  const worksRander = ()=>{
    $("#home").hide();
    // $('#workPage').addClass("showWork");

    works.forEach((elem, index) => { 
      $("#workPage").append(
        `<div class="card" id="card${index}"><img src="${elem.imgUrl}"" alt="" id="imgCard${index}"/></div>`
      );
      
      //end of loop
    });

  };
  $("#portfolio").click(worksRander);