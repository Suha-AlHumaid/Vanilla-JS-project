const works = JSON.parse(localStorage.getItem("works"));

//discription
const randerWork = (elem, i) => {
  $("#showFav").hide();
  $("#showFav").html("");
  $('html,body').scrollTop(0);
  $("#discContainer").append(
    `<div class="discContainer">
<div class="blue "></div>
<div class="purple"></div>
<div class="white">
    <div class="t">
    <h1>${elem.client}</h1>
    <p>${elem.disc}</p>    
    <p>Technologies: ${elem.tech}</p>
    <p> Created: ${elem.created}</p>
    
    </div>
    </div>
    <div class="dImg"> <img src="${elem.imgUrl2}" alt="image" class="singlePageImg"></div>
</div>`
  );
}; //end discription

const randerFav = () => {
  //cards

  $("#showFav").html("");
  if (works.length !==0){
    works.forEach(
      (elem, i) => {
        if (elem.fav == true) {
          console.log(works);
          // $('#show').html("");
          $("#showFav").append(`
                  <div class="grid-item" id='portfoliWorks${i}' >
                     <img class="portImg"  id="work${i}"  src="${elem.imgUrl}" alt="">
                    <p> ${elem.client}</p>
                  </div> `);
  
          //end cards
        }
        $(`#portfoliWorks${i}`).click(() => randerWork(elem, i));
  
      } //end loop
    );
  }
  else {

       // $('#show').html("");
          $('#showFav').append(`
          <p>Sorry,your favorit is empty..<br>
          <a href="portfolio.html" style="color: #3f51b5;">Press here </a>to see our projects .. </p>
          `);
          $('#showFav').css("height","100vh");
     
  }

};

randerFav();
