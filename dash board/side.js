document.getElementById('openBtn').addEventListener('click', function() {
    document.getElementById('sidebar').style.left = '0';
    document.getElementById('main').style.marginLeft ='250px';
});

document.getElementById('closeBtn').addEventListener('click',function(){
    document.getElementById('sidebar').style.left = '-250px';
    document.getElementById('main').style.marginLeft ='0';
});