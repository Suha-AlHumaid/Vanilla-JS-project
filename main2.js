// {client:"website4",tech:`JS`, created: "2020" , imgUrl:`/img1.jpg`,imgUrl2:`/img1.jpg`,imgUrl3:`/img1.jpg`,disc:},
const portfoliWorks = JSON.parse(localStorage.getItem("portfolio"));


const randerWork= (index) =>{
    console.log(portfoliWorks[index].client);
    $("#home").hide();
    $('#discPage').append(
  
    `<div class="discContainer">
<div class="blue "></div>
<div class="purple"></div>
<div class="white">
    <div class="t">
    <h1>${portfoliWorks[index].client}</h1>
    <p>${portfoliWorks[index].disc}</p></div>
    </div>
    <div class="dImg"> <img src="${portfoliWorks[index].imgUrl2}" alt="image" class="singlePageImg"></div>
</div>`
      );
    
    
    };

const randerPortfolio = ()=> {
for (let i =0 ; i<portfoliWorks.length;i++){
   
    // console.log( portfoliWorks[i].client);
    $('#show').append(`
    <div class="grid-item" id= "work${i}" >
<div>
  <img class="portImg" src="${portfoliWorks[i].imgUrl}" alt="">
</div>
<div>
  <h2>${portfoliWorks[i].client}</h2>
</div>
</div> 
    `);
    

    $(`#work${i}`).click(()=>randerWork(i));
    //loop end
};

};

randerPortfolio();