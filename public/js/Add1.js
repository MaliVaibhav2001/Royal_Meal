let carts = document.querySelectorAll('.buy-btn');
let products = [
    {
        id: 1,
        rname:'Kennington Lane Cafe',
        name: 'Egg, kiwi and sauce chilli',
        price: 49,
        incart:0
    },
    {
        id: 2,
        rname:'Kennington Lane Cafe',
        name: 'Potatoes with pork and dried fruits',
        price: 50,
        incart: 0
    },
    {
        id: 3,
        rname:'Kennington Lane Cafe',
        name: 'Rice with shrimps and kiwi',
        price: 51,
        incart: 0
    },
    {
        id: 4,
        rname:'Kennington Lane Cafe',
        name: 'Spaghetti with mushrooms and...',
        price: 52,
        incart: 0
    },
    {
        id: 5,
        rname:'Kennington Lane Cafe',
        name: 'Sliced pork, avocado and...',
        price: 53,
        incart: 0
    },
    {
        id: 6,
        rname:'Kennington Lane Cafe',
        name: 'Veal meat, tomatoes and...',
        price: 54,
        incart: 0
    },
    {
        id: 7,
        rname:'Kennington Lane Cafe',
        name: 'Potatoes with pork and dried fruits',
        price: 49,
        incart: 0
    },
    {
        id: 8,
        rname:'Kennington Lane Cafe',
        name: 'Egg, kiwi and sauce chilli',
        price: 49,
        incart: 0
    },
    {
        id: 9,
        rname:'Kennington Lane Cafe',
        name: 'Sliced pork, avocado and...',
        price: 53,
        incart: 0
    },
    {
        id: 10,
        rname:'Kennington Lane Cafe',
        name: 'Veal meat, tomatoes and...',
        price: 54,
        incart: 0
    },
    {
        id: 1,
        rname:'Kennington Lane Cafe',
        name: 'Spaghetti with mushrooms and...',
        price: 52,
        incart: 0
    },
    {
        id: 10,
        rname:'Kennington Lane Cafe',
        name: 'Rice with shrimps and kiwi',
        price: 52,
        incart: 0
    },
    {
        id: 2,
        rname:'Kennington Lane Cafe',
        name: 'Veal meat, tomatoes and...',
        price: 54,
        incart: 0
    },
    {
        id: 9,
        rname:'Kennington Lane Cafe',
        name: 'Sliced pork, avocado and...',
        price: 53,
        incart: 0
    },
    {
        id: 7,
        rname:'Kennington Lane Cafe',
        name: 'Spaghetti with mushrooms and...',
        price: 52,
        incart: 0
    },
    {
        id: 6,
        rname:'Kennington Lane Cafe',
        name: 'Rice with shrimps and kiwi',
        price: 52,
        incart: 0
    },
    {
        id: 5,
        rname:'Kennington Lane Cafe',
        name: 'Rice with shrimps and kiwi',
        price: 52,
        incart: 0
    },
    {
        id: 2,
        rname:'Kennington Lane Cafe',
        name: 'Rice with shrimps and kiwi',
        price: 52,
        incart: 0
    },

];



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
                            <p>${item.incart}</p>
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
// 
// function displayitems()
// {
//     products.forEach((product) => {
//         itemsel.innerHTML +=`
//         <div class="card_heading_P3">
//             <h1 class="">${product.rname}</h1>
//         </div>
//                 `
//     })
// }

// displayitems();
// 


onLoadCartNumber();
displayCart();