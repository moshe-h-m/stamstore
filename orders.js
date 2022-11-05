//בעל החנות (סופר)
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

let imgSrc;
let header;
let desc;
let email;
let pasword;



function init() {
    window.fetch('http://localhost:3000/cards')
        .then(res => res.json())
        .then(data => {
            data.forEach(sof => {
                if (id == sof.id) {
                    imgSrc = sof.imgSrc
                    header = sof.header
                    desc = sof.desc
                    email = sof.email
                    pasword = sof.pasword
                    createProfile(sof.imgSrc, sof.header, sof.desc, sof.email)
                }
            })
        })
}

function createProfile(imgSrc, header, desc, email) {


    const img = document.createElement('img')
    const imgUrl = `./imege/${imgSrc}`
    img.src = imgUrl
    img.className = "userIM"

    const nameDiv = document.createElement('div')
    nameDiv.className = "header"

    const newDiv = document.createElement('div')
    newDiv.className = "header"

    const nameSpan = document.createElement('h1')
    nameSpan.innerText = header

    const desSpan = document.createElement('span')
    desSpan.className = 'spanan'
    desSpan.innerText = desc

    const br1 = document.createElement('br')

    const pan = document.createElement('span')
    pan.className = 'spanan'
    pan.innerText = `Contact via email:   ${email}`

    nameDiv.innerHTML += nameSpan.outerHTML
    // nameDiv.innerHTML += br1.outerHTML
    nameDiv.innerHTML += desSpan.outerHTML
    nameDiv.innerHTML += br1.outerHTML
    nameDiv.innerHTML += br1.outerHTML
    nameDiv.innerHTML += pan.outerHTML

    newDiv.innerHTML += img.outerHTML
    newDiv.innerHTML += nameDiv.outerHTML

    const divune = document.getElementById("mystore")
    divune.appendChild(newDiv)








}

//סל הקניות
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartDOM = document.querySelector('.cart');
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');

if (cart.length > 0) {
    cart.forEach(cartItem => {
        const product = cartItem;
        insertItemToDOM(product);
        countCartTotal();

        addToCartButtonsDOM.forEach(addToCartButtonDOM => {
            const productDOM = addToCartButtonDOM.parentNode;

            if (productDOM.querySelector('.product__name').innerText === product.name) {
                handleActionButtons(addToCartButtonDOM, product);
            }
        });
    });
}

addToCartButtonsDOM.forEach(addToCartButtonDOM => {
    addToCartButtonDOM.addEventListener('click', () => {
        const productDOM = addToCartButtonDOM.parentNode;
        const product = {
            image: productDOM.querySelector('.product__image').getAttribute('src'),
            name: productDOM.querySelector('.product__name').innerText,
            price: productDOM.querySelector('.product__price').innerText,
            quantity: 1
        };

        const isInCart = cart.filter(cartItem => cartItem.name === product.name).length > 0;

        if (!isInCart) {
            insertItemToDOM(product);
            cart.push(product);
            saveCart();
            handleActionButtons(addToCartButtonDOM, product);
        }
    });
});

function insertItemToDOM(product) {
    cartDOM.insertAdjacentHTML(
        'beforeend',
        `
    <div class="cart__item">
      <img class="cart__item__image" src="${product.image}" alt="${product.name}">
      <h3 class="cart__item__name">${product.name}</h3>
      <h3 class="cart__item__price">${product.price}</h3>
      <button class="btn btn--primary btn--small${product.quantity === 1 ? ' btn--danger' : ''}" data-action="DECREASE_ITEM">&minus;</button>
      <h3 class="cart__item__quantity">${product.quantity}</h3>
      <button class="btn btn--primary btn--small" data-action="INCREASE_ITEM">&plus;</button>
      <button class="btn btn--danger btn--small" data-action="REMOVE_ITEM">&times;</button>
    </div>
  `
    );

    addCartFooter();
}

function handleActionButtons(addToCartButtonDOM, product) {
    addToCartButtonDOM.innerText = 'In Cart';
    addToCartButtonDOM.disabled = true;

    const cartItemsDOM = cartDOM.querySelectorAll('.cart__item');
    cartItemsDOM.forEach(cartItemDOM => {
        if (cartItemDOM.querySelector('.cart__item__name').innerText === product.name) {
            cartItemDOM.querySelector('[data-action="INCREASE_ITEM"]').addEventListener('click', () => increaseItem(product, cartItemDOM));
            cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').addEventListener('click', () => decreaseItem(product, cartItemDOM, addToCartButtonDOM));
            cartItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', () => removeItem(product, cartItemDOM, addToCartButtonDOM));
        }
    });
}

function increaseItem(product, cartItemDOM) {
    cart.forEach(cartItem => {
        if (cartItem.name === product.name) {
            cartItemDOM.querySelector('.cart__item__quantity').innerText = ++cartItem.quantity;
            cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').classList.remove('btn--danger');
            saveCart();
        }
    });
}

function decreaseItem(product, cartItemDOM, addToCartButtonDOM) {
    cart.forEach(cartItem => {
        if (cartItem.name === product.name) {
            if (cartItem.quantity > 1) {
                cartItemDOM.querySelector('.cart__item__quantity').innerText = --cartItem.quantity;
                saveCart();
            } else {
                removeItem(product, cartItemDOM, addToCartButtonDOM);
            }

            if (cartItem.quantity === 1) {
                cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').classList.add('btn--danger');
            }
        }
    });
}

function removeItem(product, cartItemDOM, addToCartButtonDOM) {
    cartItemDOM.classList.add('cart__item--removed');
    setTimeout(() => cartItemDOM.remove(), 250);
    cart = cart.filter(cartItem => cartItem.name !== product.name);
    saveCart();
    addToCartButtonDOM.innerText = 'Add To Cart';
    addToCartButtonDOM.disabled = false;

    if (cart.length < 1) {
        document.querySelector('.cart-footer').remove();
    }
}

function addCartFooter() {
    if (document.querySelector('.cart-footer') === null) {
        cartDOM.insertAdjacentHTML(
            'afterend',
            `
      <div class="cart-footer">
        <button class="btn btn--danger" data-action="CLEAR_CART">Clear Cart</button>
        <button class="btn btn--primary" data-action="CHECKOUT">Send an offer</button>
        
      </div>
    `
        );

        document.querySelector('[data-action="CLEAR_CART"]').addEventListener('click', () => clearCart());
        document.querySelector('[data-action="CHECKOUT"]').addEventListener('click', () => { sendOrder() });
    }
}

function clearCart() {
    cartDOM.querySelectorAll('.cart__item').forEach(cartItemDOM => {
        cartItemDOM.classList.add('cart__item--removed');
        setTimeout(() => cartItemDOM.remove(), 250);
    });

    cart = [];
    localStorage.removeItem('cart');
    document.querySelector('.cart-footer').remove();

    addToCartButtonsDOM.forEach(addToCartButtonDOM => {
        addToCartButtonDOM.innerText = 'Add To Cart';
        addToCartButtonDOM.disabled = false;
    });
}
let order_items = ' ';
let sofer_name = header
let sofer_id = id
let paypalFormHTML


// function checkout() {
//     paypalFormHTML = `
//         <form id="paypal-form" action="https://www.paypal.com" action="mailto:${email}"  method="post">
//           <input type="hidden" name="cmd" value="_cart">
//           <input type="hidden" name="upload" value="1">
//           <input type="hidden" name="business" value="adrian@webdev.tube">
//       `;

//     cart.forEach((cartItem, index) => {
//         ++index;

//         paypalFormHTML += `
//           <input type="hidden" name="item_name_${index}" value="${cartItem.name}">
//           <input type="hidden" name="amount_${index}" value="${cartItem.price}">
//           <input type="hidden" name="quantity_${index}" value="${cartItem.quantity}">
//         `;
//     });

//     paypalFormHTML += `
//           <input type="submit" value="PayPal">
//         </form>
//         <div class="overlay"></div>
//       `;



//     document.querySelector('body').insertAdjacentHTML('beforeend', paypalFormHTML);
//     document.getElementById('paypal-form').submit();



// }

function countCartTotal() {
    let cartTotal = 0;
    cart.forEach(cartItem => (cartTotal += cartItem.quantity * cartItem.price));

    document.querySelector('[data-action="CHECKOUT"]').innerText = ` Send an order $${cartTotal}`;

}


//~~~~~~~~~~~~~~~~~~~~~~~~~
function sendOrder() {
    // let url = `http://localhost:3000/cards/${id}`
    // const data = await fetch(url, {
    //     method: 'PUT',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     }, body: JSON.stringify({
    //         imgSrc,
    //         header,
    //         desc,
    //         email,
    //         pasword,
    //         order_items
    //     })
    // })
    // ````
    cart.forEach((cartItem, index) => {
        ++index
        order_items += `\nitem ${index} : ${cartItem.name} * ${cartItem.quantity}; `


    });
    window.fetch('http://localhost:3000/orders', {

        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            header,
            sofer_id,
            email,
            pasword,
            order_items,


        })

    })
        .then(res => res.json())
        .then(data => {
            window.alert(` thank you for your order your order sent to ${data.sofer_name}   prees ok to verify`)
            // data.forEach(sof => {
            //     if (email == sof.email) {
            //         window.alert("this email is alrady exist, please sign in or use other mail adrees");
            //     }
            // })
            clearCart()
        })


        .then((e) => { })
        .catch(console.log(e))



}

//sendOrder()

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));

    countCartTotal();

}



//אנחנו צריכים שהמידע יכנס וגם שישלח אותנו לפייפל
//2  מתי שאני רוצה לכתוב לHTML למה אני לא מקבל את הנתונים מהשרת??
//3 איך לחבר למונגו


// ``````````````````````
