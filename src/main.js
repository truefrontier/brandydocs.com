import Alpine from 'alpinejs'
import './style.css'

// Initialize Alpine.js
window.Alpine = Alpine
Alpine.start()

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]')
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
})