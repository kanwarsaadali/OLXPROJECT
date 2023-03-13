var productsRedux = JSON.parse(localStorage.getItem("products"))
var globalSlug;

        
// console.log(productsRedux)

const getSlug = () => {
    const search = window.location.search
    const searchParamas = new URLSearchParams(search)
    const slug = searchParamas.get('product')
    globalSlug = slug
}
getSlug()

// console.log(globalSlug)


const getSingleProduct = () => {
    var singleProduct;
    for (let i = 0; i < productsRedux.length; i++) {
        if (productsRedux[i].productSlug === globalSlug) {
            singleProduct = productsRedux[i]
        }
    }
    // console.log(singleProduct)


    var productImageTag = document.getElementById("productImageTag")
    // console.log(productImageTag)
    productImageTag.setAttribute("src",singleProduct. productImg)

    var productDescrption = document.getElementById('productDescrption')
    var createProductDesc = document.createTextNode(singleProduct.proDes)
    productDescrption.appendChild(createProductDesc)

    var currency = document.getElementById("currency")
    var productcur = document.createTextNode(singleProduct.productCur)
    currency.appendChild(productcur)
    
    var productPrice = document.getElementById('productPrice')
    var proPrice  = document.createTextNode(singleProduct.productPrice)
    productPrice.appendChild(proPrice)    
  
    var proName = document.getElementById('proName')
    var name = document.createTextNode(singleProduct. productName)
    proName.appendChild(name)



}
getSingleProduct()


