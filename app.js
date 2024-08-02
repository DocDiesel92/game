const widthWindow = window.visualViewport.width;
const heightWindow = window.visualViewport.height;

const body = document.querySelector('body');

body.style.width = widthWindow + 'px';
body.style.height = heightWindow + 'px';

const btn = document.querySelectorAll('.btn');

let auth = false;

window.onload = () => {
    if (localStorage.getItem('auth') === 'true') {
        document.querySelector('.wrapper-screen').classList.add('hidden')
        document.querySelector('.wrapper-game').classList.remove('hidden')
        document.querySelector('.wrapper-game').style.animation = `show-game 2s 0.3s linear forwards`
    } else {
        return
    }
}

btn.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        console.log(index);
            document.querySelector('.first-reg-join-accept').classList.add('hidden');
        if (index === 0) {
            document.querySelector('.second-reg').classList.remove('hidden');
        }
        if (index === 1) {
            document.querySelector('.second-join').classList.remove('hidden');
        }
        if (index === 2 || index === 3) {
            auth = true;
            localStorage.setItem('auth', auth)
            document.querySelector('.logo').classList.add('hidden');
            document.querySelector('.second-reg').classList.add('hidden');
            document.querySelector('.second-join').classList.add('hidden');
            document.querySelector('.screen-welcome').classList.remove('hidden');
            document.querySelector('.span-welcome').style.animation = `faded 2s 0.2s linear forwards`;
            setInterval(() => {
                document.querySelector('.screen-welcome').style.background = 'black';
                setInterval(() => {
                    document.querySelector('.span-welcome').style.color = 'black'
                    setInterval(() => {
                        document.querySelector('.wrapper-screen').classList.add('hidden')
                        document.querySelector('.wrapper-game').classList.remove('hidden')
                        document.querySelector('.wrapper-game').style.animation = `show-game 2s 0.3s linear forwards`
                    }, 1000);
                }, 2000);
            }, 3000);
        }
    })
})

const wallet = document.querySelector('.wallet');

wallet.addEventListener('click', () => {
    wallet.classList.toggle('wallet-popup')
    document.querySelector('.wallet-popup-block').classList.toggle('hidden')
})

const btnGoToCity = document.querySelector('.btn-go-to-city');

let changeXstart;
let changeXend;

btnGoToCity.addEventListener('touchstart', (e) => {
    changeXstart = e.changedTouches[0].screenX;
})

btnGoToCity.addEventListener('touchend', (e) => {

    changeXend = e.changedTouches[0].screenX;

    let position = getComputedStyle(btnGoToCity)

    if (changeXstart > changeXend) {
        btnGoToCity.style.right = '32px';
    } else {
        btnGoToCity.style.right = '-112px';
    }
})

btnGoToCity.addEventListener('click', (e) => {
    document.querySelector('.btn-claim').classList.add('hidden')
    document.querySelector('.btn-go-to-city').classList.add('hidden')
    document.querySelector('.map').classList.remove('hidden')
})

const map = document.querySelector('.map');

map.addEventListener('touchstart', (e) => {

    changeXstart = e.changedTouches[0].screenX;

})

map.addEventListener('touchend', (e) => {

    changeXend = e.changedTouches[0].screenX;

    if (changeXstart > changeXend) {
        map.style.left = '-100%';
    } else if (changeXstart < changeXend) {
        map.style.left = '0';
    } else {
        return
    }
})

const edifice = document.querySelectorAll('.edifice');

edifice.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('edifice-active')) {
            for (let i = 0; i < edifice.length; i++) {
                edifice[i].classList.remove('edifice-active')
                edifice[i].innerHTML = null
            }
            item.classList.add('edifice-active');
            item.innerHTML = item.getAttribute('id')
        }

    })
})