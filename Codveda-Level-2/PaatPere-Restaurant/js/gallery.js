
const galleryItems=[...document.querySelectorAll(".gallery-item")];
const filterButtons=document.querySelectorAll(".filter-btn");
const lightbox=document.getElementById("lightbox");
const lightboxImage=document.getElementById("lightboxImage");
const lightboxCaption=document.getElementById("lightboxCaption");
const closeButton=document.getElementById("lightboxClose");
const prevButton=document.getElementById("lightboxPrev");
const nextButton=document.getElementById("lightboxNext");

let visibleItems=[];
let currentIndex=0;

function updateVisibleItems(){
    visibleItems=galleryItems.filter(item=>!item.classList.contains("hidden"));
}

filterButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        filterButtons.forEach(btn=>btn.classList.remove("active"));
        button.classList.add("active");
        const filter=button.dataset.filter;

        galleryItems.forEach(item=>{
            const show=filter==="all"||item.dataset.category===filter;
            item.classList.toggle("hidden",!show);
        });

        updateVisibleItems();
    });
});

function openLightbox(index){
    currentIndex=index;
    const item=visibleItems[currentIndex];
    const image=item.querySelector("img");
    const title=item.querySelector("h3");

    if(!image||!title)return;

    lightboxImage.src=image.src;
    lightboxImage.alt=image.alt;
    lightboxCaption.textContent=title.textContent;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
}

function closeLightbox(){
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden","true");
    document.body.style.overflow="";
}

function showNext(){
    if(!visibleItems.length)return;
    currentIndex=(currentIndex+1)%visibleItems.length;
    openLightbox(currentIndex);
}

function showPrevious(){
    if(!visibleItems.length)return;
    currentIndex=(currentIndex-1+visibleItems.length)%visibleItems.length;
    openLightbox(currentIndex);
}

galleryItems.forEach(item=>{
    item.addEventListener("click",()=>{
        updateVisibleItems();
        openLightbox(visibleItems.indexOf(item));
    });
});

closeButton.addEventListener("click",closeLightbox);
nextButton.addEventListener("click",showNext);
prevButton.addEventListener("click",showPrevious);

lightbox.addEventListener("click",event=>{
    if(event.target===lightbox)closeLightbox();
});

document.addEventListener("keydown",event=>{
    if(!lightbox.classList.contains("open"))return;
    if(event.key==="Escape")closeLightbox();
    if(event.key==="ArrowRight")showNext();
    if(event.key==="ArrowLeft")showPrevious();
});

const menuToggle=document.getElementById("menuToggle");
const navLinks=document.getElementById("navLinks");

if(menuToggle&&navLinks){
    menuToggle.addEventListener("click",()=>{
        const open=navLinks.classList.toggle("open");
        menuToggle.textContent=open?"✕":"☰";
        menuToggle.setAttribute("aria-expanded",String(open));
    });

    navLinks.querySelectorAll("a").forEach(link=>{
        link.addEventListener("click",()=>{
            navLinks.classList.remove("open");
            menuToggle.textContent="☰";
            menuToggle.setAttribute("aria-expanded","false");
        });
    });
}

const year=document.getElementById("year");
if(year)year.textContent=new Date().getFullYear();

updateVisibleItems();
