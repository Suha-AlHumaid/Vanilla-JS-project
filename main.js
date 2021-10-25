//  Header Anmation 
$(document).ready(function(){

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

//Informations
const works =[
 {client:"website0",tech:`JS`, created: "2020" , imgUrl:`/img1.jpg`,imgUrl2:`/img1.jpg`,imgUrl3:`/img1.jpg`},
 {client:"website1",tech:`JS`, created: "2020" , imgUrl:`/img1.jpg`,imgUrl2:`/img1.jpg`,imgUrl3:`/img1.jpg`},
 {client:"website2",tech:`JS`, created: "2020" , imgUrl:`/img1.jpg`,imgUrl2:`/img1.jpg`,imgUrl3:`/img1.jpg`},
 {client:"website3",tech:`JS`, created: "2020" , imgUrl:`/img1.jpg`,imgUrl2:`/img1.jpg`,imgUrl3:`/img1.jpg`},
 {client:"website4",tech:`JS`, created: "2020" , imgUrl:`/img1.jpg`,imgUrl2:`/img1.jpg`,imgUrl3:`/img1.jpg`},

];



//rander of single page discription
const randerWork= (index) =>{
    $("#home").hide();
    $('#workPage').addClass("showWork");
    $('#workPage').append(
        `    <div class="disc">
        <div class="discContent">
        <h3>Client: <span>${works[index].client}</span></h3>
        <h3>Created: <span>${works[index].created}</span></h3>
        <h3>Teachnologies: <span>${works[index].tech}</span></h3>
        <a href="" ><span style="color: red;"class="fa fa-heart" aria-hidden="true">
        </span></a>
        </div>
        <div class="grid" >
        <img class="discImg" src="${works[index].imgUrl}" alt="">
        <img class="discImg" src="${works[index].imgUrl2}" alt="">
        <img class="discImg" src="${works[index].imgUrl3}" alt="">
        </div>

    </div>`
      );
//end of forEach
};
  
//rander of partfilio
const worksRander = ()=>{
    $("#home").hide();
    $('#workPage').addClass("showWork");

    works.forEach((elem, index) => { 
      $("#workPage").append(
        `<div class="card" id="card${index}"><img src="${elem.imgUrl}"" alt="" id="imgCard${index}"/></div>`
      );
      
      //end of loop
    });

  };
//   $("#portfolio").click(worksRander);


//rander recent 4 work in home
const randerWorks = () => {

    // works.forEach((elem, index) => {
        for(let index=0; index<5; index++){

      $("#cards").append(
        //  `<h1>hi</h1>`
        `<div class="grid-item" id="card${index}"><img src="${works[index].imgUrl}"" alt="" id="imgCard${index}"/></div>`
      );
      $(`#card${index}`).click(()=>randerWork(index));

    

   
      //end of loop
    // });
      };
  };


 //rander of Portfolio page
const randerPortfolio = () => {
   
works.forEach((elem,index)=>{

  localStorage.setItem("portfolio",JSON.stringify(works));
  location.replace("portfolio.html");

});
      //end of loop
  };
$('#portfolioLink').click(randerPortfolio);

randerWorks();