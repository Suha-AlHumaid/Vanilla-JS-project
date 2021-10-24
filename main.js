const works =[
 {client:"website0",tech:`JS`, created: "2020" , imgUrl:`/bannerImg.jpeg`,imgUrl2:`/bannerImg.jpeg`,imgUrl3:`/bannerImg.jpeg`},
 {client:"website1",tech:`JS`, created: "2020" , imgUrl:`/bannerImg.jpeg`,imgUrl2:`/bannerImg.jpeg`,imgUrl3:`/bannerImg.jpeg`},
 {client:"website2",tech:`JS`, created: "2020" , imgUrl:`/bannerImg.jpeg`,imgUrl2:`/bannerImg.jpeg`,imgUrl3:`/bannerImg.jpeg`},
 {client:"website2",tech:`JS`, created: "2020" , imgUrl:`/bannerImg.jpeg`,imgUrl2:`/bannerImg.jpeg`,imgUrl3:`/bannerImg.jpeg`},
 {client:"website3",tech:`JS`, created: "2020" , imgUrl:`/bannerImg.jpeg`,imgUrl2:`/bannerImg.jpeg`,imgUrl3:`/bannerImg.jpeg`},

];

const randerWork= (index) =>{
    $("#home").hide();
    $('#workPage').addClass("showWork");
    
    $('#workPage').append(
    
        `    <div>
        <h3>Client: <span>${elem.client}</span></h3>
        <h3>Created: <span>${elem.created}</span></h3>
        <h3>Teachnologies: <span>${elem.tech}</span></h3>
        <img src="${elem.imgUrl}" alt="">
        <img src="${elem.imgUrl2}" alt="">
        <img src="${elem.imgUrl3}" alt="">
    </div>`
      );

}

const randerWorks = () => {

    // works.forEach((elem, index) => {
        for(let index=0; index<4; index++){

      $("#cards").append(
        //  `<h1>hi</h1>`
        `<div class="card" id="card${index}"><img src="${works[index].imgUrl}"" alt="" id="imgCard${index}"/></div>`
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