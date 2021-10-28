const works = JSON.parse(localStorage.getItem("works"));
 



//discription
const randerWork = (elem,i) => {

    $("#home").hide();
    $('#discPage').append(
      `<div class="discContainer">
  <div class="blue "></div>
  <div class="purple"></div>
  <div class="white">
      <div class="t">
      <h1>${elem.client}</h1>
      <p>${elem.disc}</p>
      </div>
      </div>
      <div class="dImg"> <img src="${elem.imgUrl2}" alt="image" class="singlePageImg"></div>
  </div>`
    );
  };//end discription

const randerFav = () => {
    //cards 


    $('#show').html("");
    
    works.forEach(
       

        (elem, i) => { 
 
          
            if(elem.fav == true){
                console.log(works);
                // $('#show').html("");
                $('#show').append(`
                <div class="grid-item" id="portfoliWorks${i}" >
                   <img class="portImg" id="work${i}" src="${elem.imgUrl}" alt="">
                   
                </div> `);
              
                //end cards 
        }
        $(`#portfoliWorks${i}`).click(() => randerWork(elem,i));


        // else {
        //     $('#show').html(`
        //     <p>Sorry,your favorit is empty..<br>
        //     <a href="portfolio.html" style="color: #3f51b5;">Press here </a>to see our projects .. </p>
        //     `);
        //     $('#show').css("margin","200px");
        // }
        
   
      }//end loop

);

}

randerFav();