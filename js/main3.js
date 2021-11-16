const works = JSON.parse(localStorage.getItem("works"));

function favFunc(index) {
  works[index].fav = !works[index].fav;
  localStorage.setItem("works", JSON.stringify(works));
  randerFav();
}

//discription
const randerWork = (elem, i) => {
  $("#showFav").hide();
  $("#showFav").html("");
  $("html,body").scrollTop(0);
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
  if (works.length != 0) {
    $("#showFav").html("");
    $("#showFav").append(`
    <div class="emptyFav">
                <p>Sorry, your favorite is empty..<br>
                <a href="portfolio.html" style="color: #3f51b5;">Press here </a>to see our projects .. </p>
                </div>
                `);
    // $("#showFav").css("height", "100vh");
  }

  if (works.length) {
    works.forEach(
      (elem, i) => {
        if (elem.fav == true) {
          console.log(works);
          $("#showFav").html("");
          $("#showFav").append(`
                  <div class="grid-item" id='portfoliWorks${i}' >
                     <img class="portImg" id="work${i}"  src="${elem.imgUrl}" alt="">
                    <div>${elem.client}
                    <a id="deleFav${i}"  class="fa fa-trash" aria-hidden="true" style=" padding-left: 5px;"></a>
                  </div>
                    </div> `);

          //end cards
        }
        $(`#deleFav${i}`).click(() => favFunc(i));
        if (elem.fav === false) {
          $(`#like${i}`).removeClass("heart");
        } else {
          $(`#like${i}`).addClass("heart");
        }

        $(`#work${i}`).click(() => randerWork(elem, i));
      } //end loop
    );
  }
};

randerFav();
