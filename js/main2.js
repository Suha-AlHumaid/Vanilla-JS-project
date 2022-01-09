// {client:"website4",tech:`JS`, created: "2020" , imgUrl:`/img1.jpg`,imgUrl2:`/img1.jpg`,imgUrl3:`/img1.jpg`,disc:},
const works = JSON.parse(localStorage.getItem("works"));

function favFunc(index) {
  works[index].fav = !works[index].fav;
  localStorage.setItem("works", JSON.stringify(works));
  randerPortfolio();
}

//description
const randerWork = (elem, i) => {

  $("#homePortfolio").hide();
  $("#home").hide();
  $('html,body').scrollTop(0);
  $("#discPage").append(
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

/////////////////main rander
const randerPortfolio = () => {
  //cards
  $("#show").html("");
  works.forEach((elem, i) => {
    $("#show").append(`
    <div class="grid-item" id="portfoliWorks${i}" >
       <img class="portImg" id="work${i}" src="${elem.imgUrl}" alt="">
  <div>  ${elem.client}
  <a id="like${i}" class="heart fa fa-heart"  aria-hidden="true" style=" padding-left: 5px;"></a></div>
    </div> `); //end cards

    $(`#like${i}`).click(() => favFunc(i));
    if (elem.fav === false) {
      $(`#like${i}`).removeClass("heart");
    } else {
      $(`#like${i}`).addClass("heart");
    }

    //search
    $("#searchBtn").click(function () {
      const name1 = $("#searchInput").val();
      if (name1.length && name1.trim().length) {
        const name = name1.toLowerCase();
        const nameProject = elem.client.toLowerCase();
        console.log(nameProject.includes(name), elem);
        const arr = works.filter(
          (o) =>
            o.client.toLowerCase() === name ||
            o.client.toLowerCase().includes(name)
        );
        $("#show").html(``);
        if (arr.length) {
          arr.forEach((e, index) => {
            $("#show")
              .append(`
              <div class="grid-item" id="portfoliWorks${index}" ><div>
             <img id="obj${index}" class="portImg" src="${e.imgUrl}" alt=""></div>
             <div>${e.client}</div>
             <div class="favorite" id="like${index}" ></div>
            </div> `);

            $(`#portfoliWorks${index}`).click(() => randerWork(e, index));
          });
          $("#show").append(
            `<div><p><a style="color: #8834ec;" href="/portfolio.html">Back to Portfolio</a></p></div>`
          );
        } else {
          $("#show").append(`
        <div><p>Soory,no result.  <a style="color: #8834ec;" href="/portfolio.html">Back to Portfolio</a></p> </div>`);
        }
      }
    }); //end of search

    $(`#work${i}`).click(() => randerWork(elem, i));
  }); //loop end
}; //main rander

const randerfavforite = () => {
  console.log(hi);
  works.forEach((elem, index) => {
    localStorage.setItem("works", JSON.stringify(works));
    location.replace("favorite.html");
  });
  $("#favNav").click(randerfavforite);
};
randerPortfolio();
