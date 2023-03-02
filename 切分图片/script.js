const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')
// mouseenter（指针穿过，子集不执行）
// mouseleave（指针离开元素时，子元素不执行）
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))