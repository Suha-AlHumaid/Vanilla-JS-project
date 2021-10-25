const portfoliWorks = JSON.parse(localStorage.getItem("portfolio"));
console.log(portfoliWorks.length);

for (let i =0 ; i<portfoliWorks.length;i++){
    $('#show').append("hi");
};
// portfoliWorks.forEach((elem,index)=>{
//     // $('#workPage').addClass("showWork");
//     $('#show').append(
//         `<div style="padding-top: 500px;">
//         <h3>Client: <span>${elem.client}</span></h3>
//     </div>`
//       );
// });
 // <img class="discImg" src="${elem.imgUrl}" alt="">