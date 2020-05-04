import { component } from 'picoapp'

export default component(({node}) => {
  const spans = node.querySelectorAll('.js-span') 
  let index = 0
  setInterval(() => {
    spans.forEach((span, i) => {
      if (i === index) {
        span.classList.add('active')
      } else {
        span.classList.remove('active')
      }
      if (index % 2) {
        spans[0].classList.add('mid-active')
        spans[2].classList.add('mid-active')
        spans[1].classList.remove('mid-active')
        spans[3].classList.remove('mid-active')
      } else {
        spans[1].classList.add('mid-active')
        spans[3].classList.add('mid-active')
        spans[0].classList.remove('mid-active')
        spans[2].classList.remove('mid-active')
      }
    })
    if (index === 3) {
      index = 0
    } else {
      index++
    }
  }, 2000);
})