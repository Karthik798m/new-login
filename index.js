


document.querySelector(".btn1").addEventListener('click',function()
{
    
    document.querySelector('.div1').classList.toggle('active2')
    document.querySelector('.box1').classList.toggle('pop')
    document.querySelector('.box2').classList.toggle('pop')
    document.querySelector('.container').classList.toggle('shadowcolor')
})



document.querySelector(".btn1").addEventListener('click', swap)

function swap() {
  var x = document.querySelector(".btn1");
  if (x.innerHTML === "Sign Up") {
    x.innerHTML = "Sign In";
  } else {
    x.innerHTML = "Sign Up";
  }
}

if(document.querySelector('.in1').value!==''){
  document.querySelector('.si').classList.add('enlarge')
}
