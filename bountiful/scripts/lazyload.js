const images=document.querySelectorAll("img[data-src]"); //Get all images from html that have a "data-src" attribute

//preloads all the URLs in the data-src
function preload(img) {
    const src=img.getAttribute("data-src");
    if(!src) {
        return;
    } else {
        img.src=src;
    }
}

//these are measurements that tell us where the "intersection" is
const imgoptions= {
   
    threshold: .5,//This is how much of the image is within the page-view range. if It's at 1, then 100% of the image has to on the page 
    rootMargin: "0px 0px 10px 0px" 
}

//it watches for when the images cross over the "intersection"
const imgObserver= new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }
        else {
            preload(entry.target);
            imgObserver.unobserve(entry.target);
            entry.target.classList.toggle("loaded"); //adds a class when the img crosses the "interesection", we can add CSS style (transition!)
        }
    });
}, imgoptions);

images.forEach(src => {
    imgObserver.observe(src);
});