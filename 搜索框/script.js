let btn = document.querySelector(".btn");
let search = document.querySelector(".search");
const input = document.querySelector('.input');
btn.addEventListener('click', () => {
    search.classList.toggle('active');
	// 调用 input.focus 关闭input框自带边框
    input.focus();
})
/* 
在元素中切换类名。

第一个参数为要在元素中移除的类名，并返回 false。
如果该类名不存在则会在元素中添加类名，并返回 true。

第二个是可选参数，是个布尔值用于设置元素是否强制添加或移除类，不管该类名是否存在。例如：

移除一个 class: element.classList.toggle("classToRemove", false);
添加一个 class: element.classList.toggle("classToAdd", true);
 */