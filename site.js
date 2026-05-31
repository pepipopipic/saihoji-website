/* 西方寺 — 共通スクリプト */
(function(){
  /* ---- header shadow on scroll ---- */
  var header=document.querySelector('.site-header');
  if(header){
    var onScroll=function(){header.classList.toggle('scrolled',window.scrollY>10);};
    onScroll();window.addEventListener('scroll',onScroll,{passive:true});
  }

  /* ---- mobile drawer ---- */
  var burger=document.querySelector('.burger');
  var drawer=document.querySelector('.drawer');
  if(burger&&drawer){
    var close=drawer.querySelector('.drawer-close');
    burger.addEventListener('click',function(){drawer.classList.add('open');document.body.style.overflow='hidden';});
    var shut=function(){drawer.classList.remove('open');document.body.style.overflow='';};
    if(close)close.addEventListener('click',shut);
    drawer.querySelectorAll('a').forEach(function(a){a.addEventListener('click',shut);});
  }

  /* ---- scroll reveal ---- */
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
    },{threshold:0.12,rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(el){io.observe(el);});
  }else{els.forEach(function(el){el.classList.add('in');});}

  /* ---- generate hanging wisteria ---- */
  document.querySelectorAll('.wisteria').forEach(function(w){
    var strands=parseInt(w.dataset.strands||'5',10);
    for(var s=0;s<strands;s++){
      var strand=document.createElement('div');
      strand.className='strand';
      var len=6+Math.floor(Math.random()*5); // petals per strand
      for(var i=0;i<len;i++){
        var p=document.createElement('i');
        var size=14-i*0.7+Math.random()*2;
        if(size<5)size=5;
        p.style.width=size+'px';
        p.style.height=(size*1.15)+'px';
        p.style.opacity=(0.95-i*0.04).toFixed(2);
        strand.appendChild(p);
      }
      w.appendChild(strand);
    }
  });
})();
