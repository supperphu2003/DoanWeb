const btn=document.querySelectorAll(".add-product")
// console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        var btnItem=event.target
        var product=btnItem.closest('.grid__column-2-4')
        var productImg=product.querySelector("img").src
        var productName=product.querySelector("h4.home-product-item__name").innerText
        var productPrice=product.querySelector("span.home-product-item__price-current").innerText
        // console.log(productPrice,productName,productImg)
        addcart(productPrice,productImg,productName)
    })
})
// thêm sản phẩm vào giõ hàng

function addcart(productPrice,productImg,productName){
    var addtr=document.createElement("li.header__cart-item")
    var cartItem = document.querySelectorAll(".header__cart-list-item .header__cart-item");
    // for (var i = 0; i < cartItem.length; i++){
    //     var productT = document.querySelectorAll(".header__cart-item-name")
    //     if(productT[i].innerHTML==productName ){
    //         alert("sản phảm đã có")
    //         return 
    //     }
    // }
    
    var trcontent ='<li class="header__cart-item"><img src="'+productImg+'" alt="" class="header__cart-img"><div class="header__cart-item-info"><div class="header__cart-item-head"><h5 class="header__cart-item-name">'+productName+'</h5><div class="header__cart-item-price-wrap"><span class="header__cart-item-price">'+productPrice+'</span><span class="header__cart-item-multiply">x</span><span  class="header__cart-item-qtn type="number" value="1" min="1">1</span></div></div><div class="header__cart-item-body"><span class="header__cart-item-description">Phân loại:Samxung</span><span class="header__cart-item-remove">Xóa</span></div></div></li>'
    addtr.innerHTML=trcontent
    var cartTable=document.querySelector("ul.header__cart-list-item")
    // console.log(cartTable)
    cartTable.append(addtr)

    carttotal()
    deleteCart()
}
// tổng giá giõ hàng
function carttotal(){
    
    var cartItem = document.querySelectorAll(".header__cart-list-item .header__cart-item");
    var totalC=0 
    var totalNotice=0
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = parseInt(cartItem[i].querySelector("span.header__cart-item-qtn").innerHTML, 10);
        // console.log(inputValue);

        var productPriceStr = cartItem[i].querySelector("span.header__cart-item-price").innerHTML;
        // Chuyển đổi chuỗi sang số và loại bỏ dấu phẩy
        var productPrice = parseFloat(productPriceStr.replace(/,/g, '.'));
        // console.log(productPrice);

        var totalA = inputValue * productPrice*1000000;
        // var totalB = totalA.toLocaleString('de-DE');
        // console.log(totalB);
        totalC=totalC + totalA
        // console.log(totalC)
        totalNotice+=1
        // console.log(totalNotice)
        // var totalD= totalC.toLocaleString('de-DE');
    }
    var cartTotalA=document.querySelector(".totalPrice span.totalPrice-value")
    cartTotalA.innerHTML=totalC.toLocaleString('de-DE')
    var cartNotice=document.querySelector("span.header__cart-notice")
    cartNotice.innerHTML=totalNotice
    // console.log(cartTotalA)



}
// DElete cart
function deleteCart(){
    var cartItem = document.querySelectorAll(".header__cart-list-item .header__cart-item");
    for (var i = 0; i < cartItem.length; i++){
        var productT = document.querySelectorAll(".header__cart-item-remove")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartTtemD = cartDelete.parentElement.parentElement.parentElement
            cartTtemD.remove()
            carttotal()
            
        })
    }

}

// click-------
document.addEventListener('DOMContentLoaded', function() {
    var addProductButton = document.querySelector('.home-product');
  
    addProductButton.addEventListener('click', function(event) {
      // Ngăn chặn hành vi mặc định của sự kiện click
      event.preventDefault();
  
      
    });
  });
  
  
  