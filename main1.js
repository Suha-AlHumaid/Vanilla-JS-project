// const item = JSON.parse(localStorage.getItem("item"));
// $(".desc").append(``);
// $("#cards") dec page function
// const render2 = (item) => {
//     localStorage.setItem("item", JSON.stringify(item));
//     location.replace("#body");
//     console.log(item);
//   };


const portfoliWorks = JSON.parse(localStorage.getItem("portfolio"));
console.log(portfoliWorks);
portfoliWorks.forEach((elem,index)=>{
    $('#workPage').addClass("showWork");
    $('#workPage').append(
        `
        <div>
        <h3>Client: <span>${elem.client}</span></h3>
        <img class="discImg" src="${elem.imgUrl}" alt="">
    </div>`
      );
});

// $(".body").append(``);


// $('#workPage').addClass("showWork");


// $('#workPage').append(
//     `    <div class="disc">
//     <div class="discContent">
//     <h3>Client: <span>${item.client}</span></h3>
//     <h3>Created: <span>${item.created}</span></h3>
//     <h3>Teachnologies: <span>${item.tech}</span></h3>
//     <a href="" ><span style="color: red;"class="fa fa-heart" aria-hidden="true">
//     </span></a>
//     </div>
//     <div class="grid" >
//     <img class="discImg" src="${item.imgUrl}" alt="">
//     <img class="discImg" src="${item.imgUrl2}" alt="">
//     <img class="discImg" src="${item.imgUrl3}" alt="">
//     </div>

// </div>`
// );