let begin=document.getElementById('begin');
function start(){
    begin.innerHTML='<img src="anim.gif"/>';
    
    const myTimeout = setTimeout(myGame, 4000);
    function myGame() {
        window.location.href='play.html';
    }
}