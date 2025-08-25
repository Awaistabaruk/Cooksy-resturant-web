let bar = document.querySelector(".fa-solid.fa-bars");
let pages=document.querySelector(".pages");
let hide=true;
bar.addEventListener("click", () => {
    if (hide===true) {
       console.log("hi");
    pages.classList.remove("hide"); 
    hide=false;
    }else{
         pages.classList.add("hide"); 
         hide=true;
    }


});
