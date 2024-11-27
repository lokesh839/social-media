// sidebar
const menuItems = document.querySelectorAll('.menu-item');


// message
const messagesNotifiation = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

// theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');





// remove active class from all menu item
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';

        }
    })
})

// messages

// search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    // console.log(val);
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex';

        } else {
            chat.style.display = 'none'
        }
    })
}

// search chat
messageSearch.addEventListener('keyup', searchMessage)

// Highlight masessage
messagesNotifiation.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotifiation.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'

    }, 2000)
})


// theme display customi

// open model
const openThemeModel = () => {
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

// closing model
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModel);




// fonts

// removie active  class from span or font size \
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSizes = '10px';
            root.style.setProperty('---stick-top-left', '5.4rem');
            root.style.setProperty('---stick-top-right', '5.4rem');


        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('---stick-top-left', '5.4rem');
            root.style.setProperty('---stick-top-right', '-7rem');
        }
        else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('---stick-top-left', '-2rem');
            root.style.setProperty('---stick-top-right', '-17rem');
        }
        else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('---stick-top-left', '-5rem');
            root.style.setProperty('---stick-top-right', '-25rem');
        }
        else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('---stick-top-left', '-12rem');
            root.style.setProperty('---stick-top-right', '-35rem');
        }
        // cheange html element

        document.querySelector('html').style.fontSize = fontSize;
    })


})

// remove active cls and colores

// const changeActiveColorClass =() =>{

//     colorepalette.forEach(colorpicker =>{
//         colorpicker.classList.remove('active');
//     })
// }


// chang primary colore

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        // changeActiveColorClass();

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        }
        else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        }
        else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);

    })
})

// background


let ligthColorLigthness;
let whiteColorLigthness;
let darkColorLigthness;

const changeBG = () => {
    root.style.setProperty('--ligth-color-ligthness', ligthColorLigthness);
    root.style.setProperty('--white-color-ligthness', whiteColorLigthness);
    root.style.setProperty('--dark-color-ligthness', darkColorLigthness);

}

Bg1.addEventListener('click',()=>{
    Bg1.classList.add('active');
    Bg2.classList.remove('active');

    Bg3.classList.remove('active');

    window.location.reload();


});


Bg2.addEventListener('click', () => {
    ligthColorLigthness = '15%';
    whiteColorLigthness = '20%';
    darkColorLigthness = '95%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();


});

Bg3.addEventListener('click', () => {
    ligthColorLigthness = '0%';
    whiteColorLigthness = '10%';
    darkColorLigthness = '95%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();


});