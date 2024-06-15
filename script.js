// document.addEventListener("DOMContentLoaded", () => {
//   let proContainers = document.querySelectorAll(".pro-container");
//   //redirication of one page to another page
//   proContainers.forEach((proContainer) => {
//     proContainer.addEventListener("click", (event) => {
//       if (event.target.closest(".pro")) {
//         const currentPage = proContainer.dataset.page;
//         if (currentPage === "index") {
//           window.location.href = "shop.html";
//         } else if (currentPage === "index1") {
//           window.location.href = "shop.html";
//         } else if (currentPage === "shop") {
//           window.location.href = "sproduct.html";
//         } else if (currentPage === "sproduct") {
//           window.location.href = "shop.html";
//         }
//       }
//     });
//   });
//   //replace the big image with small image in sproduct.html page
//   let MainImg = document.querySelector("#MainImg");
//   let smallimg = document.querySelectorAll(".small-img");
//   smallimg[0].onclick = function () {
//     MainImg.src = smallimg[0].src;
//   };
//   smallimg[1].onclick = function () {
//     MainImg.src = smallimg[1].src;
//   };
//   smallimg[2].onclick = function () {
//     MainImg.src = smallimg[2].src;
//   };
//   smallimg[3].onclick = function () {
//     MainImg.src = smallimg[3].src;
//   };
// });
// // to respond shop now button in index.html page .
// let btn = document.querySelector("#btn");
// btn.onclick = () => {
//   window.location.href = "shop.html";
// };

// // var MainImg = document.getElementById("MainImg");
// // var smallimg = document.getElementsByClassName("small-img");

const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
