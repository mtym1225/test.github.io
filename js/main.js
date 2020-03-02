'use strict'
{
    const open1 = document.getElementById('open1');
    const close1 = document.getElementById('close1');
    const mask = document.getElementById('mask');
    const modal1 = document.getElementById('modal1');

   open1.addEventListener('click', () =>{
       mask.classList.remove('hidden');
       modal1.classList.remove('hidden');
       let height =  window.innerHeight;
       let y = window.pageYOffset;
       modal1.style.top = y + ( height / 2 ) + 'px';
   });

   close1.addEventListener('click', () =>{
    mask.classList.add('hidden');
    modal1.classList.add('hidden');
   });
}
{
    const open2 = document.getElementById('open2');
    const close2 = document.getElementById('close2');
    const mask = document.getElementById('mask');
    const modal2 = document.getElementById('modal2');

   open2.addEventListener('click', () =>{
       mask.classList.remove('hidden');
       modal2.classList.remove('hidden');
       let height =  window.innerHeight;
       let y = window.pageYOffset;
       modal2.style.top = y + ( height / 2 ) + 'px';
   });

   close2.addEventListener('click', () =>{
    mask.classList.add('hidden');
    modal2.classList.add('hidden');
   });


}
{
    const open3 = document.getElementById('open3');
    const close3 = document.getElementById('close3');
    const mask = document.getElementById('mask');
    const modal3 = document.getElementById('modal3');

   open3.addEventListener('click', () =>{
       mask.classList.remove('hidden');
       modal3.classList.remove('hidden');
       let height =  window.innerHeight;
       let y = window.pageYOffset;
       modal3.style.top = y + ( height / 2 ) + 'px';
   });

   close3.addEventListener('click', () =>{
    mask.classList.add('hidden');
    modal3.classList.add('hidden');
   });


}
{
    const open4 = document.getElementById('open4');
    const close4 = document.getElementById('close4');
    const mask = document.getElementById('mask');
    const modal4 = document.getElementById('modal4');

   open4.addEventListener('click', () =>{
       mask.classList.remove('hidden');
       modal4.classList.remove('hidden');
       let height =  window.innerHeight;
       let y = window.pageYOffset;
       modal4.style.top = y + ( height / 2 ) + 'px';
   });

   close4.addEventListener('click', () =>{
    mask.classList.add('hidden');
    modal4.classList.add('hidden');
   });

}
{
    const open5 = document.getElementById('open5');
    const close5 = document.getElementById('close5');
    const mask = document.getElementById('mask');
    const modal5 = document.getElementById('modal5');

   open5.addEventListener('click', () =>{
       mask.classList.remove('hidden');
       modal5.classList.remove('hidden');
       let height =  window.innerHeight;
       let y = window.pageYOffset;
       modal5.style.top = y + ( height / 2 ) + 'px';
   });

   close5.addEventListener('click', () =>{
    mask.classList.add('hidden');
    modal5.classList.add('hidden');
   });


}
{
    const open6 = document.getElementById('open6');
    const close6 = document.getElementById('close6');
    const mask = document.getElementById('mask');
    const modal6 = document.getElementById('modal6');

   open6.addEventListener('click', () =>{
       mask.classList.remove('hidden');
       modal6.classList.remove('hidden');
       let height =  window.innerHeight;
       let y = window.pageYOffset;
       modal6.style.top = y + ( height / 2 ) + 'px';
   });

   close6.addEventListener('click', () =>{
    mask.classList.add('hidden');
    modal6.classList.add('hidden');
   });

}



{
    let scrollElm = (function() {
        if('scrollingElement' in document) return document.scrollingElement;
        if(navigator.userAgent.indexOf('WebKit') != -1) return document.body;
        return document.documentElement;
      })();
      (function() {
        let duration = 800;
        let ignore = '.noscroll';
        let easing = function (t, b, c, d) { return c * (0.5 - Math.cos(t / d * Math.PI) / 2) + b; }; //jswing
        let smoothScrollElm = document.querySelectorAll('a[href^="#"]:not(' + ignore +')');
        Array.prototype.forEach.call(smoothScrollElm, function(elm) {
          elm.addEventListener('click', function(e) {
            e.preventDefault();
            let targetElm = document.querySelector(elm.getAttribute('href'));
            if(!targetElm) return;
            let targetPos = targetElm.getBoundingClientRect().top;
            let startTime = Date.now();
            let scrollFrom = scrollElm.scrollTop;
            (function loop() {
              let currentTime = Date.now() - startTime;
              if(currentTime < duration) {
                scrollTo(0, easing(currentTime, scrollFrom, targetPos, duration));
                window.requestAnimationFrame(loop);
              } else {
                scrollTo(0, targetPos + scrollFrom);
              }
            })();
          })
        });
      })();
}