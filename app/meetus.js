Vue.component('member-item', {
  props: ['name', 'title', 'desc', 'image_profile'],
  template:
  `
    <div class="single-member effect-3">
      <div class="member-image">
        <img :src=image_profile alt="Member">
      </div>
      <div class="member-info">
        <h3>{{name}}</h3>
        <h5>{{title}}</h5>
        <p>{{desc}}</p>
        <div class="social-touch">
          <a class="fb-touch" href="#"></a>
          <a class="tweet-touch" href="#"></a>
          <a class="linkedin-touch" href="#"></a>
        </div>
      </div>
    </div>
  `
})

Vue.component('company-value', {
  template:
  `
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="one">
          <blockquote>
            <span class="leftq quotes">&ldquo;</span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I was pleased with his creative design and will definitely be hiring him again. <span class="rightq quotes">&bdquo; </span>
          </blockquote>
          <img src="./images/team/leader1.jpg" width="170" height="130" class='say_img' />
          <h2>Steve Kruger</h2>
          <h6>UI/UX Designer at MadeByUs</h6>
        </div>
      </div>

      <div class="swiper-slide">
       <div class="two">
        <blockquote>
          <span class="leftq quotes">&ldquo;</span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I recommend him to anyone who wants their work done professionally. The project ... <span class="rightq quotes">&bdquo; </span>
        </blockquote>
        <img src="./images/team/leader2.jpg" width="170" height="130" class='say_img'/>
        <h2>John Doe</h2>
        <h6>Developer Relations at MadeByUs</h6>
       </div>
      </div>

      <div class="swiper-slide">
       <div class="three">
        <blockquote>
          <span class="quotes leftq"> &ldquo;</span> He promptly completed the task at hand and communicates really well till the project reaches the finishing line. I was pleased with his creative design and will definitely be hiring him again. <span class="rightq quotes">&bdquo; </span>
        </blockquote>
        <img src="./images/team/leader3.jpeg" width="170" height="130" class='say_img' />
        <h2>Steve Stevenson</h2>
        <h6>CEO of MadeByUs</h6>
       </div>
      </div>
    </div>
   </div>
  `
})

Vue.component('tech-title', {
  template:
  `
  <div class="columns" style="padding-left: 40px; padding-top: 60px;">
   <div class="column is-two-fifths">
    <p class="title">Technology stack</p>
    <p class="subtitle" style="margin-top: 5px;">We use technologies proven and supported by a large open-source community and adopted by leading companies like Apple, Netflix, Microsoft, and IBM.</p>
    <a href='/#' style="margin-left: 30px;" class="button is-dark is-outlined">View the detail</a>
    </div>
   <div class="column">
    <div class="grid" style="margin-top: 0px;" />
   </div>
  </div>
  `
})

Vue.component('office-images', {
  template:
  `
  <div class="swiper-container" style="padding-top: 18px;">
   <div class="swiper-wrapper">
     <div class="swiper-slide"><img src="./images/services/s1.jpg"></div>
     <div class="swiper-slide"><img src="./images/services/s2.jpg"></div>
     <div class="swiper-slide"><img src="./images/services/s3.jpg"></div>
   </div>
  </div>
  `
})

Vue.component('team-slides', {
  template:
  `
  <div class="white-bg">
   <div class="columns">
    <div class="column is-half" style="padding-bottom: 50px; padding-left: 40px;">
      <office-images />
    </div>
    <div class="column is-half">
      <company-value />
    </div>
   </div>
 </div>
  `
})

Vue.component('team-list', {
  template:
  `
  <div>
   <panel-title name="Meet our team" />
   <div class="team-members row is-centered" style="margin-top: 0px;">
     <member-item
        name="Berry Colour"
        title="Engineer" desc="Ruby / Python / C++ / Postgresql"
        image_profile="./images/team/member_270x210.jpg" >
     </member-item>
     <member-item
        name="Richard Gan"
        title="Engineer" desc="Ruby / Python / C++ / Postgresql"
        image_profile="./images/team/member_270x210.jpg" >
     </member-item>
     <member-item
        name="Roger Luo"
        title="Engineer" desc="Ruby / Python / C++ / Postgresql"
        image_profile="./images/team/member_270x210.jpg" >
     </member-item>
     <member-item
        name="Chris Wang"
        title="Engineer" desc="Ruby / Python / C++ / Postgresql"
        image_profile="./images/team/member_270x210.jpg" >
     </member-item>
     <member-item
        name="Gary Gao"
        title="Engineer" desc="Ruby / Python / C++ / Postgresql"
        image_profile="./images/team/member_270x210.jpg" >
     </member-item>
     <member-item
        name="Berry Tan"
        title="Engineer" desc="Ruby / Python / C++ / Postgresql"
        image_profile="./images/team/member_270x210.jpg" >
     </member-item>
   </div>
  </div>
  `
})

Vue.component('tech-item-card', {
  props: ['name', 'title', 'desc', 'image_profile'],
  template:
  `
  <div class="card">
<div class="card-image">
  <figure class="image is-4by3">
    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
  </figure>
</div>
<div class="card-content">
  <div class="media">
    <div class="media-left">
      <figure class="image is-48x48">
        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="media-content">
      <p class="title is-4">John Smith</p>
      <p class="subtitle is-6">@johnsmith</p>
    </div>
  </div>

  <div class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
    <a href="#">#css</a> <a href="#">#responsive</a>
    <br>
    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
  </div>
</div>
</div>
  `
})

Vue.component('tech-list', {
  template:
  `
  <div class="white-bg">
   <panel-title name="Our technologies" />
   <div class="team-members row is-centered" style="margin-top: 0px;">
     <tech-item-card
        name="Berry Colour"
        title="Engineer" desc="Ruby / Python / C++ / Postgresql"
        image_profile="./images/team/member_270x210.jpg" >
     </tech-item-card>
     <tech-item-card
        name="Richard Gan"
        title="Engineer" desc="Ruby / Python / C++ / Postgresql"
        image_profile="./images/team/member_270x210.jpg" >
     </tech-item-card>
     <tech-item-card
        name="Roger Luo"
        title="Engineer" desc="Ruby / Python / C++ / Postgresql"
        image_profile="./images/team/member_270x210.jpg" >
     </tech-item-card>
     <tech-item-card
        name="Chris Wang"
        title="Engineer" desc="Ruby / Python / C++ / Postgresql"
        image_profile="./images/team/member_270x210.jpg" >
     </tech-item-card>
     <tech-item-card
        name="Gary Gao"
        title="Engineer" desc="Ruby / Python / C++ / Postgresql"
        image_profile="./images/team/member_270x210.jpg" >
     </tech-item-card>
     <tech-item-card
        name="Berry Tan"
        title="Engineer" desc="Ruby / Python / C++ / Postgresql"
        image_profile="./images/team/member_270x210.jpg" >
     </tech-item-card>
   </div>
  </div>
  `
})

const meetUs = {
  template:
  `
   <div class="container is-fullhd">
     <tech-title />
     <team-slides />
     <team-list />
     <tech-list />
   </div>
  `,
  mounted: function () {
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    //Creating 50 thumbnails inside .grid
    //the images are stored on the server serially. So we can use a loop to generate the HTML.
    var images = "", count = 50;
    for(var i = 1; i <= count; i++)
    	images += '<img src="http://thecodeplayer.com/u/uifaces/'+i+'.jpg" class="image_wall" />';

    //appending the images to .grid
    $(".grid").append(images);

    var d = 0; //delay
    var ry, tz, s; //transform params

    //animation time
    $(document).ready(function(){
    	//fading out the thumbnails with style
    	$(".image_wall").each(function(){
    		d = Math.random()*1000; //1ms to 1000ms delay
    		$(this).delay(d).animate({opacity: 0}, {
    			//while the thumbnails are fading out, we will use the step function to apply some transforms. variable n will give the current opacity in the animation.
    			step: function(n){
    				s = 1-n; //scale - will animate from 0 to 1
    				$(this).css("transform", "scale("+s+")");
    			},
    			duration: 1000,
    		})
    	}).promise().done(function(){
    		//after *promising* and *doing* the fadeout animation we will bring the images back
    		storm();
    	})
    })

    //bringing back the images with style
    function storm()
    {
    	$(".image_wall").each(function(){
    		d = Math.random()*1000;
    		$(this).delay(d).animate({opacity: 1}, {
    			step: function(n){
    				//rotating the images on the Y axis from 360deg to 0deg
    				ry = (1-n)*360;
    				//translating the images from 1000px to 0px
    				tz = (1-n)*1000;
    				//applying the transformation
    				$(this).css("transform", "rotateY("+ry+"deg) translateZ("+tz+"px)");
    			},
    			duration: 3000,
    			//some easing fun. Comes from the jquery easing plugin.
    			easing: 'easeOutQuint',
    		})
    	})
    }
  }
}
module.exports = meetUs
