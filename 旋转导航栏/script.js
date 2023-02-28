const close = document.getElementById("close");
const open = document.getElementById("open");
const container = document.querySelector('.container');

// 给button点击事件,在container上面加上class show-nav,让其动画旋转
open.addEventListener("click",()=>container.classList.add("show-nav"));


close.addEventListener("click",()=>container.classList.remove("show-nav"));