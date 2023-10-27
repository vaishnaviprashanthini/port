document.queryselectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click',function(e) {
        e.preventDefault();

    const targetId =this.getAtrribute('href').substring(1);
    const targetElement = document.getElementById(targetId);


    if (targetElement ){
        window.scrollTo({
            top:targetElement.offsetTop,
            behaviour:'smooth'
        });
    }


    });
});

        
