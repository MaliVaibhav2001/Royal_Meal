let itemsel = document.querySelector(".col-md-3");
let cartitemsel = document.querySelector(".marg_top");
let subtotal = document.querySelector(".subtotal");
let itemsincart = document.querySelector(".cart sup");
const grocery = [
    {
        id : 1,
        name : "Coconut, Indonesisia(Piece)",
        desc : 'Fruits & Vegetables',
        price : 2.99,
        stock : 10,
        qty : 0
    },
    {
        id : 2,
        name : "Soft Creme cheese (200g)",
        desc : 'Dairy and eggs',
        price : 3.99,
        stock : 8,
        qty : 0
    },
    {
        id : 3,
        name : "Pepsi soda can (30ml)",
        desc : 'Soft drinks and juice',
        price : 1.00,
        stock : 5,
        qty : 0
    },
    {
        id : 4,
        name : "Fresh Orange, Spain (1kg)",
        desc : 'Fruits and Vegetables',
        price : 1.75,
        stock : 5,
        qty : 0
    },
    {
        id : 5,
        name : "Moisture Body Lotion (250ml)",
        desc : 'Personal hygiene',
        price : 5.20,
        stock : 10,
        qty : 0
    },
    {
        id : 6,
        name : "Nut Chocolate Paste (750g)",
        desc : 'Snacks, Sweets and Chips',
        price : 7.50,
        stock : 8,
        qty : 0
    },
    {
        id : 7,
        name : "Mozzarella Mini Cheese",
        desc : 'Dairy and Eggs',
        price : 4.99,
        stock : 15,
        qty : 0
    },
    {
        id : 8,
        name : "Mozzarella Cheese (125g)",
        desc : 'Dairy and Eggs',
        price : 4.30,
        stock : 15,
        qty : 0
    },
    {
        id : 9,
        name : "Men’s Shampoo (400ml)",
        desc : 'Personal hygiene',
        price : 5.99,
        stock : 15,
        qty : 0
    },
    {
        id : 10,
        name : "Frozen Oven-ready Poultry",
        desc : 'Meat and Poultry',
        price : 12.00,
        stock : 5,
        qty : 0
    },
    {
        id : 11,
        name : "Dark Chocolate with Nuts",
        desc : 'Snacks, Sweets and Chips',
        price : 2.5,
        stock : 50,
        qty : 0
    },
    {
        id : 12,
        name : "Corn Oil Bottle (500ml)",
        desc : 'Canned Food and Oil',
        price : 3.10,
        stock : 10,
        qty : 0
    },
    {
        id : 13,
        name : "Steak Salmon Fillet (1kg)",
        desc : 'Fish and Seafood',
        price : 17.99,
        stock : 10,
        qty : 0
    },
    {
        id : 14,
        name : "Sardine in Tomato Sauce (105g)",
        desc : 'Canned Food and Oil',
        price : 3.25,
        stock : 15,
        qty : 0
    },
    {
        id : 15,
        name : "Italian Pasta (500g)",
        desc : 'Packets, Cereals',
        price : 2.99,
        stock : 7,
        qty : 0
    },
    {
        id : 16,
        name : "Rice Cakes with Chia Seeds",
        desc : 'Packets, Cereals',
        price : 1.40,
        stock : 23,
        qty : 0
    }

]

function displayitems()
{
    grocery.forEach((product) => {
        itemsel.innerHTML +=`
        <div class="col-md-3">
                 <div class="wsk-cp-product">
                 <div class="wsk-cp-img">
                     <img src="img/${product.id}.png" alt="Product" class="img-responsive" />
                 </div>
                 <div class="wsk-cp-text">
                     <div class="category">
                     <span>Food</span>
                     </div>
                     <div class="title-product">
                     <h3>${product.name}</h3>
                     </div>
                     <div class="description-prod">
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptatibus officiis commodi sint accusamus beatae? Dolore et aliquam provident nihil, adipisci fugit autem laboriosam, deleniti blanditiis consectetur consequatur, iure velit.</p>
                     </div>
                     <div class="card-footer">
                     <div class="wcf-left"><span class="price">${product.price}.00 <sub>Rs</sub></span></div>
                     <div class="wcf-right"><a href="#" class="buy-btn" onclick="addtocart(${product.id})">ADD TO CART</a></div>
                     </div>
                 </div>
                 </div>
         </div>
                `
    })
}

displayitems();

let cart = JSON.parse(localStorage.getItem("CART")) || [];

updatecart();
function addtocart(id)
{
    // Check if product already exist
    if(cart.some((item)=>item.id===id))
    {
        changeqty("plus", id);
    }else
    {
        const item = grocery.find((product)=>product.id===id);
        cart.push({
            ...item,
            qty:1
        });
    }

    updatecart()
    alert("Item Added Suscessfully");

}

function updatecart()
{
    rendercartitems();
    rendersubtotal();
    localStorage.setItem("CART", JSON.stringify(cart));
}

function rendercartitems()
{
    cartitemsel.innerHTML="";
    cart.forEach((item)=> {
        cartitemsel.innerHTML += `
        <section class="marg_top">
                <div class="cart_prod">
                    <div class="prod">
                        <img src="img/${item.id}.png" alt="" class="wid">
                    </div>
                    <div class="prod">
                        <div class="prod_1">
                            <h1>${item.name}</h1>
                            <h3>Price : ${item.price}.00</h3>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus', ${item.id})">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg>
          ${item.qty}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus', ${item.id})">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
                            <h2>Total : ${totalprice.toFixed(2)}.00</h2>
                        </div>
                    </div>
                </div>
            </section>`
    })
}

function changeqty(action,id)
{
    cart = cart.map((item) => {
        let qty = item.qty;
        if (item.id===id) {
            if (action==="minus" && qty > 1) 
            {
                qty--;
            }
            else if(action==="plus" && qty<item.stock)
            {
                qty++;
            }
        }
        return {
            ...item,
            qty,
        };
    })
    updatecart();
}

function rendersubtotal()
{
    let totalprice=0, totalitems=0;
    cart.forEach((item)=>{
        totalprice+=item.price*item.qty;
        totalitems+=item.qty;
    });
    subtotal.innerHTML=`${totalprice.toFixed(2)}`
    itemsincart.innerHTML = totalitems;
}
