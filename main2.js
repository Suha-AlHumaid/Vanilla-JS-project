// {client:"website4",tech:`JS`, created: "2020" , imgUrl:`/img1.jpg`,imgUrl2:`/img1.jpg`,imgUrl3:`/img1.jpg`,disc:},
const portfoliWorks = JSON.parse(localStorage.getItem("portfolio"));

function favFunc(index) {
 
  console.log(portfoliWorks[index].fav);
  portfoliWorks[index].fav = !portfoliWorks[index].fav;
  console.log(portfoliWorks[index].fav);
  // randerPortfolio ();
};

const randerWork= (elem) =>{
    console.log(elem.client);
    $("#home").hide();
    $('#discPage').append(
  
    `<div class="discContainer">
<div class="blue "></div>
<div class="purple"></div>
<div class="white">
    <div class="t">
    <h1>${elem.client}</h1>
    <p>${elem.disc}</p>
    <h2 style= "font-size:1rem">Favorit It<i><a class="heart fa fa-heart-o fa-2x" aria-hidden="true" style=" padding-left: 5px;" href=""></a></i></h2></div>
    </div>
    <div class="dImg"> <img src="${elem.imgUrl2}" alt="image" class="singlePageImg"></div>
</div>`
      );
    
    
    };


const randerPortfolio = ()=> {
portfoliWorks.forEach((elem,i)=>{
    $('#show').append(`
    <div class="grid-item" id="portfoliWorks${i}" >
    <div id="work${i}" >
       <img class="portImg" src="${portfoliWorks[i].imgUrl}" alt="">
    </div>

    <div>${portfoliWorks[i].client}</div>
    <div class="favorite" id="like${i}" ></div>
    </div> `);
    // $(`#like${i}`).click(()=>favFunc(i));
   
    if(portfoliWorks[i].fav === false) {
      // $(`#like${i}`).addClass("fa fa-heart-o");
      $(`#like${i}`).append(`
      <i><a id="like${i}" class="fa fa-heart-o"  aria-hidden="true" style=" padding-left: 5px;" href=""></a></i>`);
    } 
    else{
      $(`#like${i}`).append(`
      <i><a id="like${i}" class="heart fa fa-heart"  aria-hidden="true" style=" padding-left: 5px;" href=""></a></i>`);
      // $(`#like${i}`).addClass("heart fa fa-heart");
      // $(`#like${i}`).removeClass("fa fa-heart-o");
    }
    $("#searchBtn").click(function(){
    const name1 = $("#searchInput").val();
    if (name1.length && name1.trim().length) {
     const name= name1.toLowerCase();
     const nameProject =elem.client.toLowerCase();
     const obj = portfoliWorks.find(o => (o.client.toLowerCase()) === name1);
     $('#show').html(``);
   if (obj){
   
    $('#show').append(`
    <div class="grid-item" id="portfoliWorks${i}" >
    <div  >
       <img id="obj${i}" class="portImg" src="${obj.imgUrl}" alt="">
    </div>
    <div>${obj.client}</div>
    <div class="favorite" id="like${i}" ></div>
    </div> `);
    $(`#obj${i}`).click(()=>randerWork(obj));
   } else {
    $('#show').append(`
  <p>Soory,no result.  <a style="color: #8834ec;" href="/portfolio.html">Back</a></p> `);
   }
   
    };
    });
  
$(`#work${i}`).click(()=>randerWork(elem));
    $(`#like${i}`).on("click", () => favFunc(i));
    
    //loop end

  });

};
function search1Func() {
  const name1 = $("#searchInput").val();
  if (name1.length && name1.trim().length) {
   const name= name1.toLowerCase();
  
   let obj = portfoliWorks.find(o => o.client === name1);
 if (obj){
  
 }

  }

}



// portfoliWorks[i].client
randerPortfolio();

// const randerHome = () => {
//   portfoliWorks.forEach((elem, index) => {
//     localStorage.setItem("portfolio", JSON.stringify(portfoliWorks));
//     location.replace("index.html");
//   });
  // $("#homeLink").click(randerHome);
