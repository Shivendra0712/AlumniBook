window.addEventListener('scroll', function () {
    const head=document.querySelector('.header');
    head.classList.toggle('sticky',window.scrollY>0);

    
    const bars=[
        document.querySelector('.head .headImg'),
        document.querySelector('.head #title0'),
        document.querySelector('.head .btn'),
        document.querySelector('.head p')
    ];
    for(let i=0;i<4;i++) {
        var r=.25;
        switch(i) {
            case 0: r=.1;  break;
            case 1: r=.25; break;
            case 2: r=.26; break;
            case 3: r=.27; default: break;
        }
        var rate=window.scrollY*r;
        
        if(i==0) {
            bars[i].style.opacity=1/rate*15; } 
        bars[i].style.transform='translate3d(0px,'+rate+'px,0px)'; 
    }
    
});
window.onload= function() {
    console.log("reload");
    let img=document.querySelector(".headImg");
    let dir="./images/";
    let imgAr=['f1.jpg','f2.png','f3.png','f4.png','f5.png'];
    let index=Math.floor(Math.random()*imgAr.length);
    console.log(index);
    img.src=dir+imgAr[index];
};
const pos=document.documentElement;
    pos.addEventListener('mousemove',e=>{
        pos.style.setProperty('--x',e.clientX+"px");
        pos.style.setProperty('--y',e.clientY+"px");
    });

let scr3=0; 
const facilityCards=[
    document.querySelector('.training .card .cardRow  #fac1'),
    document.querySelector('.training .card .cardRow  #fac2'),
    document.querySelector('.training .card .cardRow  #fac3'),
    document.querySelector('.training .card .cardRow  #fac4'),
    document.querySelector('.training .card .cardRow  #fac5'),
    document.querySelector('.training .card .cardRow  #fac6'),
    document.querySelector('.training .card .cardRow  #fac7')
]; 

let inter=setInterval(()=>{
    
    let width=document.querySelector('.training .card .cardRow  #fac1').offsetWidth;
    element=document.querySelector('.training .card .cardRow');
    element.scroll({
        top: 0,
        left: width*(scr3++),
        behavior: 'smooth'
      });
    if(scr3==2) scr3=0;
},3000);
/*  scroll element on click
document.querySelector('.training .card .cardRow').addEventListener('click',()=>{
    /*
    console.log(document.querySelector('.training .card .cardRow  #fac1').offsetWidth);
    let width=document.querySelector('.training .card .cardRow  #fac1').offsetWidth;
    element=document.querySelector('.training .card .cardRow');
    element.scroll({
        top: 100,
        left: width*(i++),
        behavior: 'smooth'
      });
    if(i==8) i=0;
});*/