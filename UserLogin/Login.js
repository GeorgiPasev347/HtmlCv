
document.getElementById('btnlog').addEventListener('click',function(){
    
var name = document.getElementById('namelb').value;
var password = document.getElementById('passwlb').value;
if(name === 'Mark' && password === '1234')
    {
        window.open('SecPage.html','_blank');
    }
    else{
        alert('Try again!');
    }
});