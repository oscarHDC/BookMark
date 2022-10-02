const socialNetworks = document.querySelectorAll(".footer-icon");
const srcFacebook = 'images/icon-facebook.svg';
const srcFacebookHover = 'images/icon-facebook_hover.svg';
const srcTwitter = 'images/icon-twitter.svg';
const srcTwitterHover = 'images/icon-twitter_hover.svg';


socialNetworks.forEach((tab, index) => {
    tab.addEventListener("mouseover", () =>{
        switch(index){
            case 0:
                socialNetworks[index].src = srcFacebookHover;
                break;
            case 1:
                socialNetworks[index].src = srcTwitterHover;
                break;
        }
    });
});

socialNetworks.forEach((tab, index) => {
    tab.addEventListener("mouseleave", () => {
        switch (index) {
            case 0:
                socialNetworks[index].src = srcFacebook;
                break;
            case 1:
                socialNetworks[index].src = srcTwitter;
                break;
        }
    });
});