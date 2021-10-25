// {client:"website4",tech:`JS`, created: "2020" , imgUrl:`/img1.jpg`,imgUrl2:`/img1.jpg`,imgUrl3:`/img1.jpg`},
const portfoliWorks = JSON.parse(localStorage.getItem("portfolio"));
console.log(portfoliWorks);

for (let i =0 ; i<portfoliWorks.length;i++){
   
    // console.log( portfoliWorks[i].client);
    $('#show').append(`
    <div class="grid-item">
<div>
  <img src="${portfoliWorks[i].imgUrl}" alt="">
</div>

<div>
  <h2>${portfoliWorks[i].client}</h2>
</div>

</div> 
    
    `);
};
