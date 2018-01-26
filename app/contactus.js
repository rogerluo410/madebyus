const contactForm = require('./contactform.js')

Vue.component('contact-info', {
  template:
  `
  <div class="columns is-gapless">
   <div class="column">
     <p style="padding-left: 5px; padding-right: 5px;">
       <strong>Email Address: </strong>
       <br>
       xxxx@madebyus.com
     </p>
   </div>
   <div class="column">
     <p style="padding-left: 5px; padding-right: 5px;">
       <strong>Skype: </strong>
       <br>
       xxxx@madebyus.com
     </p>
   </div>
   <div class="column">
     <p style="padding-left: 5px; padding-right: 5px;">
       <strong>Telephone: </strong>
       <br>
       0212-634255309
     </p>
   </div>
  </div>
  `
})

Vue.component('contact-buttons', {
  template:
  `
  <div class="columns is-gapless">
   <div class="column">
     <a class="button">
       <span class="icon">
         <i class="fab fa-github"></i>
       </span>
       <span>GitHub</span>
     </a>
   </div>
   <div class="column">
    <a class="button">
      <span class="icon">
        <i class="fab fa-twitter"></i>
      </span>
      <span>Twitter</span>
    </a>
   </div>
   <div class="column">
     <a class="button">
       <span class="icon">
         <i class="fab fa-facebook"></i>
       </span>
       <span>Facebook</span>
     </a>
   </div>
  </div>
  `
})

Vue.component('contact-title', {
  template:
  `
  <div class="column is-three-fifths">
      <p class="title">Let’s build something great together</p>
      <p class="subtitle" style="margin-top: 5px;">Whatever your ambition, we’d love to design and build your next big idea or lend a hand on an existing one.</p>
  </div>
  `
})

const contactUs = {
  template:
  `
  <div class='column'>
    <div class="columns">
      <contact-title />
      <div class="column">
        <contact-info />
        <p><strong>Follow us:</strong></p>
        <contact-buttons />
      </div>
    </div>
    <contact-form />
   </div>
  `
}
module.exports = contactUs
