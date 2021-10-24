const works =[
 {client:"website0",tech:`JS`, created: "2020" , imgUrl:`/bannerImg.jpeg`,imgUrl2:`/bannerImg.jpeg`,imgUrl3:`/bannerImg.jpeg`},
 {client:"website1",tech:`JS`, created: "2020" , imgUrl:`/bannerImg.jpeg`,imgUrl2:`/bannerImg.jpeg`,imgUrl3:`/bannerImg.jpeg`},
 {client:"website2",tech:`JS`, created: "2020" , imgUrl:`/bannerImg.jpeg`,imgUrl2:`/bannerImg.jpeg`,imgUrl3:`/bannerImg.jpeg`},
 {client:"website3",tech:`JS`, created: "2020" , imgUrl:`/bannerImg.jpeg`,imgUrl2:`/bannerImg.jpeg`,imgUrl3:`/bannerImg.jpeg`},

];

const randerWork= (elem,index) =>{
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
    $("cards").html("");
    works.forEach((elem, index) => {
        console.log(elem.imgUrl);
      $("#cards").append(
        //  `<h1>hi</h1>`
        `<div class="card" id="card${index}"><img src="${elem.imgUrl}"" alt="" id="imgCard${index}"/></div>`
      );
      $(`#card${index}`).click(()=>randerWork(elem,index));
      //end of loop
    });
  };

  randerWorks();