import 'normalize.css' // to clear all exotic browser style
import SVG from 'svg.js'

import './style/style.scss'

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
  const circle = draw.circle(200).center(700, 100).fill({ color: radial })

  // apply the mask on the laptop group
  const mask = draw.mask().add(circle)
  group.maskWith(mask)
} else {
  console.log('SVG not supported')
}

setTimeout(() => {
  circle.animate('2s').radius(10000)
}, 5000)
