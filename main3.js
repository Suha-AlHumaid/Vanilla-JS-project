const works = JSON.parse(localStorage.getItem("works"));
 
const randerPortfolio = () => {
    //cards 


    $('#show').html("");
    
    works.forEach(
       

        (elem, i) => { 
 

            if(elem.fav == true){
                $('#show').append("");
                $('#show').html(`
                <div class="grid-item" id="portfoliWorks${i}" >
                   <img class="portImg" id="work${i}" src="${elem.imgUrl}" alt="">
  
                </div> `);
                //end cards 
        }
        else {
           
            $('#show').html(`
            <p>Sorry,your favorit is empty..<br>
            <a href="portfolio.html" style="color: #3f51b5;">Press here </a>to see our projects .. </p>
            `);
            $('#show').css("margin","200px");
        }
   
      }//end loop

);

}

randerPortfolio ();