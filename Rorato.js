// JavaScript Document
function JSready(e){
	(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?e():document.addEventListener("DOMContentLoaded",e)
}
function JSfadeIn(element,time){
	JSfadeProcessa(element,time,0,100);
}
function JSfadeOut(element,time){
	JSfadeProcessa(element,time,100,0);
}
function JSfadeProcessa(e,t,n,c){
	0==n(increment=2,e.style.display="block"):increment=-2,opc=n,intervalo=setInterval(function(){
		opc==c?(0==c&&(e.style.display="none"),clearInterval(intervalo)):(opc+=increment,e.style.opacity=opc/100,e.style.filter="alpha(opacity="+opc+")")
	},10*t)}
JSready( function() {
	JSfadeOut( document.getElementById('fakeLoader'),0.3);
});