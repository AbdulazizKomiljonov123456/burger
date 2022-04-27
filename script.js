const product = {
    plainBurger:{
        name:'GAMBURGER',
        price:10000,
        kcall:120,
        amount:0,
        get Summ(){
            return this.price * this.amount
        },
        get Kcall(){
            return this.kcall * this.amount
        }
    },
    freshBurger:{
        name:'GAMBURGER FRESH',
        price:20500,
        kcall:170,
        amount:0,
        get Summ(){
            return this.price * this.amount
        },
        get Kcall(){
            return this.kcall * this.amount
        }
    },
    freshCombo:{
        name:'FRESH COMBO',
        price:31900,
        kcall:210,
        amount:0,
        get Summ(){
            return this.price * this.amount
        },
        get Kcall(){
            return this.kcall * this.amount
        }
    }
}

const productBtn = document.querySelectorAll('.main__product-btn');

for (let i = 0; i < productBtn.length; i++) {
    productBtn[i].addEventListener('click', function () {
        plusMinus(this)
    })
    
}
function plusMinus(item) {
   const parent = item.closest('.main__product'),
         parentId = parent.getAttribute('id'),
         out = parent.querySelector('.main__product-num'),
         price = parent.querySelector('.main__product-price span'),
         kcall = parent.querySelector('.main__product-kcall span'),
         check = item.getAttribute('data-symbol')
         
         if (check == '+' && product[parentId].amount < 10) {
            product[parentId].amount++
         } else if(check == '-' && product[parentId].amount > 0){
            product[parentId].amount--
         }

         out.innerHTML = product[parentId].amount
         price.innerHTML = product[parentId].Summ
         kcall.innerHTML = product[parentId].Kcall
}
const addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptWindowOut = document.querySelector('.receipt__window-out')

const headerTimer = document.querySelector('.header__timer'),
    timeExtra = document.querySelector('.header__timer-extra');

function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
function color() {
    let r = random(0, 255)
    let g = random(0, 255)
    let b = random(0, 255)
    return `rgb(${r},${g},${b})`
}
function rec() {
    if (timeExtra.innerHTML < 70) {
        timeExtra.innerHTML++
        setTimeout(() => {
            rec()
        }, 50);
    } else if (timeExtra.innerHTML < 100) {
        timeExtra.innerHTML++
        setTimeout(() => {
            rec()
        }, 1100);
    }
}
rec()


const mainProductInfo = document.querySelectorAll('.main__product-info'),
    view = document.querySelector('.view'),
    viewClose = document.querySelector('.view__close'),
    viewImg = document.querySelector('.view img');

mainProductInfo.forEach(el => {
    el.addEventListener('dblclick', () => {
        view.classList.add('active')
        let img = el.querySelector('.main__product-img'),
            imgAtt = img.getAttribute('src')
        viewImg.setAttribute('src', imgAtt)
    })
});

