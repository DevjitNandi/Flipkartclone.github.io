import {imageSlider} from "../JS/imageSlider.js"
import {electronproductData} from "../JS/electronic.js"
import {sportsHealthData} from "../JS/sports.js"
import {FashionDealdata} from "../JS/fashion.js"
import {foodaccessories} from "../JS/foodaccess.js"

let input_search = document.getElementById("search_input")
let form_search = document.getElementById("search_form")
let recent_SearchEl = document.querySelector(".recent_Search")

let recentArray = ["Mobile","Laptop","LED Tv"]
form_search.addEventListener("submit",(e) =>{
      e.preventDefault()
      recentArray.unshift(input_search.value)
       console.log(recentArray)
       renderRecent()
})

function renderRecent(){
    
let recent_Search_html = ''
recentArray.forEach(el =>{
    recent_Search_html += `
       <div class="recent_list">
          <i class="fa-solid fa-clock-rotate-left"></i>
            <p>${el}</p>
           </div>

        `
})

    recent_SearchEl.innerHTML = recent_Search_html;
  }
    renderRecent()


/**********Image Slider*************/  
let imageSliderlistEl = document.querySelector(".imageSliderlist")
let imageSliderlistHTML = ''
console.log(imageSlider)

imageSlider.forEach(el => {
    imageSliderlistHTML += `
       <div class="imageSlideritem">
          <img src="${el.img}"/>
   </div>
   
    `
})

imageSliderlistEl.innerHTML = imageSliderlistHTML;

let preve_imageBtnEl = document.getElementById("preve_imagebtn")
let next_imageBtn = document.getElementById("next_imagebtn")
let start = 0;
let end = -300;

preve_imageBtnEl.addEventListener("click",handlePrevtImage)
next_imageBtn.addEventListener("click",handleNextImage)

function handlePrevtImage(){
        let imageallList = document.querySelectorAll(".imageSlideritem")
        console.log(imageallList)
        if(start < 0)
        start+=100
        imageallList.forEach(el =>{
       el.style.transform = `translateX(${start}%)`
    })
}
function handleNextImage(){
         let imageallList = document.querySelectorAll(".imageSlideritem")
          console.log(imageallList)
         if(start > end)
         start-=100
         imageallList.forEach(el =>{
               el.style.transform = `translateX(${start}%)`
         })

}

function renderimageSlider(){
     if(start > end){
      handleNextImage()
     }
     else {
          start = 100
     }
}

setInterval(renderimageSlider,2000)


/*******************bestofElectro_product_item*****************************/

let bestofElectron_product_itemEl =document.querySelector(".bestofElectron_product_item")
let bestofElectronproduct_html = ""

console.log(electronproductData)
electronproductData.forEach(el => {
  bestofElectronproduct_html += `
     <div class="BestofElectron_item">
       <div class="bestofElectron_image_Product">
        <img
            src="${el.img}"/>
     </div>
  <div class="BestofElectronmoreoption">
      <p class="bestofElectronProduct_name">${el.productName}</p>
       <p class="bestofElectronProduct_discount">${el.discount}</p>
        <p class="bestofElectronProduct_brand">${el.brand}</p>
     </div>

</div>

`

})

bestofElectron_product_itemEl.innerHTML = bestofElectronproduct_html


/*******************sportsHealth_item**********************/
let sportsHealth_product_itemEl = document.querySelector(".sportsHealth_product_item")
let  sportsHealthproduct_html = ""

 console.log(sportsHealthData)
 sportsHealthData.forEach(el =>{
  sportsHealthproduct_html += `
  <div class="sportsHealth_item">
   <div class="sportsHealth_image_Product">
  <img 
      src="${el.img}"/>
</div>
  <div class="SportsHealthmoreoption">
    <p class="sportsHealth_name">${el.Productname}</p>
    <p class="sportsHealth_discount">${el.discount}</p>
      <p class="sportsHealth_brand">${el.brand}</p>
    </div>

</div>

  `
})


sportsHealth_product_itemEl.innerHTML = sportsHealthproduct_html



/*****************Top Fashion Deals*******************/
let fashionDeals_product_ItemEl = document.querySelector(".fashionDeals_product_Item")
let fashionDealsproduct_html = ""

console.log(FashionDealdata)
FashionDealdata.forEach(el =>{
fashionDealsproduct_html += `
 <div class="fashionDeals_item">
    <div class="fashionDeals_image_Product">
        <img 
            src="${el.img}"/>
   </div>
    <div class="FashionDealsmoreoption">
    <p class="fashionDeals_name">${el.Productname}</p>
    <p class="fashionDeals_discount">${el.discout}</p>
    <p class="fashionDeals_brand">${el.brand}</p>
      </div>

  </div>


  `
})

fashionDeals_product_ItemEl.innerHTML = fashionDealsproduct_html



/***************Food & Accessories Page**********************/
let foodaccess_product_ItemEl = document.querySelector(".foodaccess_product_Item")
let foodaccessories_html = ""

console.log(foodaccessories)
foodaccessories.forEach(el =>{
foodaccessories_html +=`
  <div class="Foodaccesss_item">
      <div class="foodaccess_image_Product">
      <img src="${el.img}">
    </div>
    <div class="Foodaccessmoreoption">
     <p class="foodaccess_name">${el.Productname}</p>
    <p class="foodaccess_discount">${el.discount}</p>
    <p class="foodaccess_brand">${el.brand}</p>

  </div>

 </div> 

`
})

foodaccess_product_ItemEl.innerHTML = foodaccessories_html
