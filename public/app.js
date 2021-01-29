

//sticky nav 
(function stickyNavInit() {

    var navbar = document.querySelector('.navbar-container');
    var navTop = navbar.scrollTop;
    
    window.addEventListener('scroll', stickyNav);

    function stickyNav(){

        if (window.scrollY > navTop) {
            document.body.classList.add('sticky-nav');
            document.body.style.paddingTop = 0;
        } else {
            document.body.classList.remove('sticky-nav');
            document.body.style.paddingTop = 0;
        }
    }

}());

//menu-burger

(function menuBurgerInit(){

    var menuBurger = document.querySelector('.menu-one');
    var lineOne = document.querySelector('.line-one');
    var navBar = document.querySelector('.navbar-container');

    menuBurger.addEventListener('click', function(){
        lineOne.classList.toggle('line-two');
        navBar.classList.toggle('active-navbar');
    });
}());

//card section animation

(function scroll(){

    var card = document.querySelector('.card-container--flex');
    var yposition = window.pageYOffset;
    window.addEventListener('scroll', scroll);
    
        if (yposition > 1050) {
            card.classList.add('card-container-active');
        } else if (yposition < 1049) {
            card.classList.remove('card-container-active');
        }
}());


//smooth scroll

(function smoothScrollLink(){
    function smoothScroll(target, duration) {
        var target = document.querySelector(target);
        var targetPosition = target.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
        var startTime = null;
    
        function animation(currentTime){
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run  = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if(timeElapsed < duration) requestAnimationFrame(animation);
        };
    
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t* (t-2) - 1) + b;
        }
        requestAnimationFrame(animation);
    }

    var home = document.getElementById('home');
    home.addEventListener('click', function(e){
        smoothScroll('.header', 1000);
        e.preventDefault;
    });

    var cameras = document.getElementById('cameras');
    cameras.addEventListener('click', function(e){
        smoothScroll('.card-container--flex', 1000);
        e.preventDefault;
    });

    var apply = document.getElementById('apply');
    apply.addEventListener('click', function(){
        smoothScroll('.container-form', 1000);
    })

    var jumbotronBtn = document.getElementById('jumbotron-btn');
    jumbotronBtn.addEventListener('click', function(){
        smoothScroll('.section-about', 1000);
    });

    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e){
            e.preventDefault();
        });
    }

}());

//footer dynamic date
(function dynamicDate(){
    var year = new Date().getFullYear();
    var date = `${year}`;
    document.getElementById('span-date').innerHTML = date;
}());


