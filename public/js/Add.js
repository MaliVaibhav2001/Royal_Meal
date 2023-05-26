let itemsel = document.querySelector(".col-md-3");
let carts = document.querySelectorAll('.buy-btn');
let products = [
    {
        id: 1,
        name: 'Dish 1',
        price: 100,
        incart:0
    },
    {
        id: 2,
        name: 'Dish 2',
        price: 200,
        incart: 0
    },
    {
        id: 3,
        name: 'Dish 3',
        price: 300,
        incart: 0
    },
    {
        id: 4,
        name: 'Dish 4',
        price: 400,
        incart: 0
    },
    {
        id: 5,
        name: 'Dish 5',
        price: 500,
        incart: 0
    },
    {
        id: 6,
        name: 'Dish 6',
        price: 100,
        incart: 0
    },
    {
        id: 7,
        name: 'Dish 7',
        price: 200,
        incart: 0
    },
    {
        id: 8,
        name: 'Dish 8',
        price: 300,
        incart: 0
    },
    {
        id: 9,
        name: 'Dish 9',
        price: 400,
        incart: 0
    },
    {
        id: 10,
        name: 'Dish 10',
        price: 500,
        incart: 0
    },
    {
        id: 11,
        name: 'Dish 11',
        price: 100,
        incart: 0
    },
    {
        id: 12,
        name: 'Dish 12',
        price: 200,
        incart: 0
    },
    {
        id: 13,
        name: 'Dish 13',
        price: 300,
        incart: 0
    },
    {
        id: 14,
        name: 'Dish 14',
        price: 400,
        incart: 0
    },
    {
        id: 15,
        name: 'Dish 15',
        price: 500,
        incart: 0
    },
    {
        id: 16,
        name: 'Dish 16',
        price: 100,
        incart: 0
    },
    {
        id: 17,
        name: 'Dish 17',
        price: 200,
        incart: 0
    },
    {
        id: 18,
        name: 'Dish 18',
        price: 300,
        incart: 0
    },
    {
        id: 19,
        name: 'Dish 19',
        price: 400,
        incart: 0
    },
    {
        id: 20,
        name: 'Dish 20',
        price: 500,
        incart: 0
    },
    {
        id: 21,
        name: 'Dish 21',
        price: 100,
        incart: 0
    },
    {
        id: 22,
        name: 'Dish 22',
        price: 200,
        incart: 0
    },
    {
        id: 23,
        name: 'Dish 23',
        price: 300,
        incart: 0
    },
    {
        id: 24,
        name: 'Dish 24',
        price: 400,
        incart: 0
    },
    {
        id: 25,
        name: 'Dish 25',
        price: 500,
        incart: 0
    },
    {
        id: 26,
        name: 'Dish 26',
        price: 100,
        incart: 0
    },
    {
        id: 27,
        name: 'Dish 27',
        price: 200,
        incart: 0
    },
    {
        id: 28,
        name: 'Dish 28',
        price: 300,
        incart: 0
    },
    {
        id: 29,
        name: 'Dish 29',
        price: 400,
        incart: 0
    },
    {
        id: 30,
        name: 'Dish 30',
        price: 500,
        incart: 0
    },
    {
        id: 31,
        name: 'Dish 31',
        price: 100,
        incart: 0
    },
    {
        id: 32,
        name: 'Dish 32',
        price: 200,
        incart: 0
    },

];


// Display Products

// function displayitems()
// {
//     products.forEach((product) => {
//         itemsel.innerHTML +=`

//             <div class="col-md-3">
//                 <div class="wsk-cp-product">
//                 <div class="wsk-cp-img">
//                     <img src="img/${product.id}.png" alt="Product" class="img-responsive" />
//                 </div>
//                 <div class="wsk-cp-text">
//                     <div class="category">
//                     <span>Food</span>
//                     </div>
//                     <div class="title-product">
//                     <h3>${product.name}</h3>
//                     </div>
//                     <div class="description-prod">
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptatibus officiis commodi sint accusamus beatae? Dolore et aliquam provident nihil, adipisci fugit autem laboriosam, deleniti blanditiis consectetur consequatur, iure velit.</p>
//                     </div>
//                     <div class="card-footer">
//                     <div class="wcf-left"><span class="price">${product.price}.00 <sub>Rs</sub></span></div>
//                     <div class="wcf-right"><a href="#" class="buy-btn" onclick="displayCart()";>ADD TO CART</a></div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//                 `
//     })
// }

// displayitems();



for(let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click' , () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

// arter refresh item not update
function onLoadCartNumber() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart sup').textContent = productNumbers;
    }
}

function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers+ 1);
        document.querySelector('.cart sup').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart sup').textContent = 1; // cart class
    }
    setItems(product);
}


function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        
        if(cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].incart += 1
    } else {
        product.incart = 1;
        cartItems = {
            [product.name]: product
    }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


function totalCost(product) {
    // console.log("The product price is ", product.price);
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("Cartcost is", cartCost);
    console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else {
        localStorage.setItem("totalCost", product.price);
    }
}

// TO display Product in Checkout page
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let orderList = document.querySelector(".marg_top");
    let check = document.querySelector(".pos");
    let check_button = document.querySelector(".button");
    // let card_heading_P3 = document.querySelector(".card_heading_P3");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems)
    if(cartItems && orderList) {
        
        orderList.innerHTML = '';
        Object.values(cartItems).map(item => {
            orderList.innerHTML += `
            <section class="marg_top">
                <div class="cart_prod">
                    <div class="prod">
                        <img src="img/${item.id}.png" alt="" class="wid">
                    </div>
                    <div class="prod">
                        <div class="prod_1">
                            <h1>${item.name}</h1>
                            <h3>Price : ${item.price}.00</h3>
                            <p>Quentity : ${item.incart}</p>
                            <h2>Total : ${item.incart * item.price}.00</h2>
                        </div>
                    </div>
                </div>
            </section>
            `;
        });
    }

    // Total on Form
    console.log(cartItems)
    if(cartItems && check) {
        
        check.innerHTML = '';
        Object.values(cartItems).map(item => {
            check.innerHTML += `
            <h1 class="pos">Total Price : ${cartCost}</h1>
            `;
        });
    }

    // Total on Button
    // console.log(cartItems)
    // if(cartItems && check_button) {
        
    //     check_button.innerHTML = '';
    //     Object.values(cartItems).map(item => {
    //         check_button.innerHTML += `
    //         <button type="submit" class="button">Pay ${cartCost} Rs</button>            `;
    //     });
    // }
}



onLoadCartNumber();
displayCart();