// Mobilmeny: åpne/lukke navigasjonen på små skjermer
(function(){
  var toggle = document.querySelector('.navtoggle');
  var links = document.getElementById('navlinks');
  if(!toggle || !links) return;
  toggle.addEventListener('click', function(){
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // lukk menyen når en lenke trykkes
  links.addEventListener('click', function(e){
    if(e.target.tagName === 'A'){
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    }
  });
})();
