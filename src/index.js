import 'normalize.css' // to clear all exotic browser style
import './style/style.scss'

import SVG from 'svg.js'

import ScrollMagic from 'scrollmagic'


if (document.getElementById('drawing')) { // check if drawing element is present
  if (SVG.supported) { // check if SVG is supported by this browser

    const draw = SVG('drawing').size(800, 600) // draw the main workspace

    // create a group to include laptop images
    const group = draw.group()
    const laptopBorder = draw.image('/assets/laptop-1x.png', 800, 600)
    group.add(laptopBorder)
    const laptopContent = draw.image('/assets/product-ui-1x.png', 600, 600).move(100, -15)
    group.add(laptopContent)

    // create a radial gradient
    const radial = draw.gradient('radial', function(stop) {
      stop.at(0.25, '#fff')
       stop.at(0.5, '#000')
    }).radius(1)

    // create a circle and color it with the gradient
    const circle = draw.circle(100).center(700, 100).fill({ color: radial })

    // apply the mask on the laptop group
    const mask = draw.mask().add(circle)
    group.maskWith(mask)

    // uncomment next lines to activate animation after 5 seconds
    // setTimeout(() => {
    //   circle.animate('2s').radius(10000)
    // }, 5000)

    if (document.getElementById('main')) {
      // init controller
      var controller = new ScrollMagic.Controller();

      // create a scene
      new ScrollMagic.Scene({
          duration: 3000,	// the scene should last for a scroll distance of 100px
          offset: 0,		// start this scene after scrolling 0px
        })
        .setPin("#main") // pins the element for the the scene's duration
        .addTo(controller) // assign the scene to the controller
        .on("progress", function (e) {
          circle.radius(100 + e.progress * 2500)
    		});
    }

  } else {
    console.log('SVG not supported')
  }
}
