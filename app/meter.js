/**
 * @param {string} selector
 * @constructor
 */
const Meter = function(selector) {
  this.$root = document.querySelector(selector)
  this.$pointer = this.$root.querySelector('.meter-pointer')
 // const $active = self.$notesList.querySelector('.active')
  this.init()
}

Meter.prototype.init = function() {
  for (let i = 0; i <= 10; i += 1) {
    const $scale = document.createElement('div')
    $scale.className = 'meter-scale'
    $scale.style.transform = 'rotate(' + (i * 9 - 45) + 'deg)'
    if (i % 5 === 0) {
      $scale.classList.add('meter-scale-strong')
    }
    this.$root.appendChild($scale)
  }
}

/**
 * @param {number} deg
 */
Meter.prototype.update = function(deg) {
  this.$pointer.style.transform = 'rotate(' + deg + 'deg)'
 // console.log(this.$notes);
  if (deg === 0) {
    //$active.style.color = 'green';
    this.$pointer.style.background = 'green';
  } else if (deg < 0 && deg > -25 || deg > 0 && deg < 25) {
    //$active.style.color = 'yellow';
    this.$pointer.style.background = 'yellow';
  } else {
    //$active.style.color = 'red';
    this.$pointer.style.background = 'red';
  }
}
