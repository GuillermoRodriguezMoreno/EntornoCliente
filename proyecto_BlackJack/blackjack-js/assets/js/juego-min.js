!function(){let o=[],t=0,n=0,r="jugador";const d=document.getElementById("btnPedir"),a=document.getElementById("btnDetener");var e=document.getElementById("btnNuevo");const i=document.getElementById("jugador-cartas"),c=document.getElementById("computadora-cartas"),u=document.getElementById("puntosJugador"),s=document.getElementById("puntosComputadora");function l(){var t,n=["C","D","H","S"];for(let e=1;e<=13;e++)for(const r of n)t=[e.toString()+r,+e],o.push(t);return o}function m(){o=_.shuffle(o)}function f(){return o.pop()}function g(e){var t=document.createElement("img");t.src="../cartas/"+function(e){var t=e[0].split(""),n=t[t.length-1];switch(e[1]){case 11:e[0]="J"+n,e[1]=10;break;case 12:e[0]="Q"+n,e[1]=10;break;case 13:e[0]="K"+n,e[1]=10;break;case 1:e[0]="A"+n,e[1]=11}return e[0]+".png"}(e),t.className="carta",("jugador"==r?i:c).append(t)}function p(e){return"jugador"==r?(t+=e[1],u.innerText=t):(n+=e[1],s.innerText=n)}function b(){d.disabled=!0,a.disabled=!0,r="computadora";do{var e=f();g(e),p(e)}while(n<t&&t<=21);setTimeout(()=>alert(function(){let e="";21<n&&(n=-1);21<t&&(t=-1);return e=t>n?"jugador":"computadora",e}()),200)}d.addEventListener("click",function(){var e=f(),e=(g(e),p(e));!function(e){let t=!1;return t=21<e,t}(e)||(d.setAttribute("disabled",!0),b())}),a.addEventListener("click",b),e.addEventListener("click",function(){n=0,t=0,r="jugador",u.innerText=t,s.innerText=n,d.disabled=!1,a.disabled=!1,function(){for(;i.firstChild;)i.removeChild(i.firstChild);for(;c.firstChild;)c.removeChild(c.firstChild)}(),o=l(),m()}),o=l(),m()}();
