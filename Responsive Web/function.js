// Sidebar

const menuItems = document.querySelectorAll('.menu-item');

// Messages
const messagesNotification = document.querySelector('#messages-notification');
const messagse = document.querySelector('.messagse');
const message = messagse.querySelectorAll('.message'); // Fixed typo here (changed 'messagse' to 'messagse')
const messageSearch = document.querySelector('#message-search');

// theme
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


// =====================Sidebar======================

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id !== 'notifications') {
            document.querySelector('.notifications-popup').
                style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').
                style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    });
});

// Search chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase(); // Fixed typo here (changed 'querySelectorAll' to 'querySelector')
        if (name.indexOf(val) !== -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}

// Search chat
messageSearch.addEventListener('keyup', searchMessage);

// Highlight messages card when messages menu item is clicked 
// =====================Messages======================
messagesNotification.addEventListener('click', () => {
    messagse.style.boxShadow = "0 0 1rem var(--color-primary)";
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messagse.style.boxShadow = 'none';
    }, 2000);
});


/// theme/ display customization

// open model
const openThemeModel = () => {
    themeModel.style.display = 'grid';
}
// close model
const closeThemeModel = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModel.style.display = 'none';
    }
}
// close model

themeModel.addEventListener('click', closeThemeModel);

theme.addEventListener('click', openThemeModel);



// ==================================Fonts=====================================

///// Remove active class from span or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}



fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSizes;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSizes = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSizes = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if (size.classList.contains('font-size-3')) {
            fontSizes = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSizes = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSizes = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSizes;
    })


})

// remove active class form colors
const changeActivecolorclass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}


// Change Priamry color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
// remove active class form colors
        changeActivecolorclass();

        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        }
        else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }

        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


// Theme bakcground value
let lightcolorlightness;
let whitecolorlightness;
let darkcolorlightness;

// changes background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightcolorlightness);
    root.style.setProperty('--white-color-lightness', whitecolorlightness);
    root.style.setProperty('--dark-color-lightness',  darkcolorlightness);

}
// change background colors
Bg1.addEventListener('click', () => {
    // add active class
    Bg1.classList.add('active');
    // remove active class from  the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //remove customized changes from local storage
    window.location.reload();

});

Bg2.addEventListener('click', () => {
    darkcolorlightness = '95%';
    whitecolorlightness = '20%';
    lightcolorlightness = '15%';

    // add active class
    Bg2.classList.add('active');
    // remove active class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();

});
Bg3.addEventListener('click', () => {
    darkcolorlightness = '95%';
    whitecolorlightness = '10%';
    lightcolorlightness = '0%';

    // add active class
    Bg2.classList.add('active');
    // remove active class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();

});


// End
