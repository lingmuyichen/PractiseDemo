const loading = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
let load = 0;
// 需要定义在外面，否则拿到timer变量

console.log(loading)
let blurryLoading = function (){
	load++
	if(load >99){
		clearInterval(timer);
	}
		// `${} `拿到变量
		loading.innerText = `${load}%`;
		loading.style.opacity = scale(load, 0, 100, 1, 0);
		bg.style.filter = `blur(${scale(load,0,100,20,0)}px)`;
}
const scale = (num, in_min, in_max, out_min, out_max) => {
	// console.log(((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min)
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
let timer  = setInterval(blurryLoading,150)
// blurryLoading()