let container =document.querySelector('.container')

let GetData = async()=>{
    let result = await fetch('https://fakestoreapi.com/products')
    .then((data)=>data.json())
    .catch(er=>console.log(er))
    
    result.map((product)=>{
        container.innerHTML += `
        <div class="card">
            <img src="${product.image}" alt="${product.title}"/>
            <h3>${product.title}</h3>
            <p>${product.price} EGP</p>
            <a href="./index1.html?id=${product.id}">show more</a>
        
        </div>
        
        `
    })

}
GetData()