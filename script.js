var box = document.querySelectorAll(".boxx");
var icon = document.querySelector(".fa-solid");
var menu = document.querySelector(".nav ul");
var flag = 0;
var m = 0;
var arr=[];
box.forEach(
    (box,index)=>{
        box.addEventListener('click',()=>{
            var innerbox = document.querySelector(`.boxx${index}`);
            if(index==8){
                innerbox.style.backgroundColor = `red`;
                arr[m]=`${index}`;
                setTimeout(()=>{
                for(let i=0;i<arr.length;i++){
                setTimeout(()=>{
                        var innerbox = document.querySelector(`.boxx${arr[i]}`);
                        innerbox.style.backgroundColor = `rgba(7, 7, 230, 0.798)`;
                },1000*i);
                };
                m=0;
            },1000);
            }
            else{
                innerbox.style.backgroundColor = `red`;
                arr[m]=`${index}`;
                m++;
            }
        })
});
icon.addEventListener('click',()=>{
    if(flag==0){
    menu.style.display = `block`;
    flag=1;
    }
    else{
        menu.style.display = `none`;
        flag=0;
    }
})