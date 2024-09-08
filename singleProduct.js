let container =document.querySelector(".container")
let q = new URLSearchParams(location.search)
let pid = q.get('id')

let GetData = async()=>{
    let product = await fetch('https://fakestoreapi.com/products/' + pid )
    .then((res)=>res.json())
    .catch(er=>console.log(er))

    console.log(product)

    container.innerHTML += `
  <div class="product-card">
    <img src="${product.image}" alt="Product Image">
    <div class="product-details">
      <h2>${product.title}</h2>
      <div class="price">price : ${product.price} EGP</div>
      <p>${product.description}</p>
      <div class="rating">
        <span>⭐ ${product.rating.rate}</span>
        <span>(${product.rating.count} reviews)</span>
      </div>
    </div>
  </div>
    `

}
GetData()