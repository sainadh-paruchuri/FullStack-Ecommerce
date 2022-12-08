const main=document.querySelector('.section1');
const cart_items=document.querySelector('.cart-items')

main.addEventListener('click',(e)=>{
    if(e.target.id=='button'){
        let id=e.target.parentNode.parentNode.id;
        console.log(id)
        const name = document.querySelector(`#${id} h3`).innerText;
        console.log(name)
        const img_src = document.querySelector(`#${id} img`).src;
        console.log(img_src)
        const price = e.target.parentNode.firstElementChild.innerText;
        console.log(price)
        let cart_price=document.getElementById('total-value').innerText;
        console.log(cart_price)
         if (document.querySelector(`#cart-${id}`)){
            alert('This item is already added to the cart');
            return
        }
        document.querySelector('#number').innerText = parseInt(document.querySelector('#number').innerText)+1
        const cart_item=document.createElement('div');
        cart_item.classList.add('cart_row');
        cart_item.setAttribute('id',`cart-${id}`)
        cart_price=parseFloat(cart_price)+parseFloat(price);
        console.log(`${cart_price}`)       
        document.getElementById('total-value').innerText=`${cart_price}`

        cart_item.innerHTML=`
         <span class='cart-item'>
        <img class='cart-img' src="${img_src}" alt=""/>
            <span>${name}</span>
        </span>
        <span class=cart-quantity>
        <input type="text" value="1">
        </span>
    <span class='cart-price'>
        
        <span class='cart-price'>${price}</span>
        <button>REMOVE</button>
    </span>
    `
    cart_items.appendChild(cart_item)
    


// notification
const container=document.getElementById('container')




    const notif=document.createElement('div');
    notif.classList.add('toast');
    notif.innerText=`${name} is added to the cart`;
    container.appendChild(notif);

    setTimeout(()=>{
        notif.remove()
    },3000)

document.querySelector('.purchase-btn').addEventListener('click',()=> {
        if (parseInt(document.querySelector('#number').innerText) === 0){
            alert('You have Nothing in Cart , Add some products to purchase !');
            return
        }
        alert('Thanks for the purchase')
        cart_items.innerHTML = ""
        document.querySelector('#number').innerText = 0
        document.querySelector('#total-value').innerText = `0`;
    })

    }










//cart
const btn=document.getElementById('cart');
const nav=document.querySelector('.cart-section')

btn.addEventListener('click',()=>{
    nav.classList.toggle('active');
    btn.classList.toggle('active');
})


})