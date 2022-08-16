new Swiper('.testimonial_slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
const smoothLinks = document.querySelectorAll('a[href^="#"]')
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault()
    const id = smoothLink.getAttribute('href')

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}
