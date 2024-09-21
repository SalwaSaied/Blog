// Back to Top Button  
const backToTopBtn = document.getElementById("backToTop");  
window.onscroll = function() {  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {  
        backToTopBtn.style.display = "block";  
    } else {  
        backToTopBtn.style.display = "none";  
    }  
};  
backToTopBtn.addEventListener("click", () => {  
    window.scrollTo({top: 0, behavior: 'smooth'});  
});  