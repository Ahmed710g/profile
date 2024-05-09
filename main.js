let show=document.querySelector('.read-more');
let thecontent=document.querySelector('.read-more-content');


show.addEventListener('click',()=>{
    thecontent.classList.toggle('showing');
    if(thecontent.classList.contains('showing')){
        show.textContent="Read Less";
    }else{
        show.textContent="Read More";
    }
})

let menu=document.getElementById('open-menu-btn');
let close=document.getElementById('close-menu-btn');

let themenu=document.querySelector('nav .container ul');
menu.addEventListener('click',()=>{
    themenu.style.display="block";
    menu.style.display="none";
    close.style.display="block";
});
close.addEventListener('click',()=>{
    themenu.style.display="none";
    menu.style.display="block";
    close.style.display="none";

});

let navitems=themenu.querySelectorAll('li');

let removeall=function (){
    navitems.forEach(function(i){
        i.querySelector('a').classList.remove('active');
    });
}
navitems.forEach(function(i){
    const ac=i.querySelector('a');
    ac.addEventListener('click',()=>{
        removeall();
        ac.classList.add('active');
    });
})

//skills
let skills=document.querySelectorAll('section.skills .container .skill');
skills.forEach(function(a){
    console.log(a);
    a.querySelector('.head').addEventListener
    ('click', function(){
       a.querySelector('.items').classList.toggle('showing')
    })
});