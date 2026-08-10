(function () {
  var bgImage = document.querySelector('.bg-image')
  if (!bgImage) return

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var maxOffset = 0.25
    var targetX = 0, targetY = 0
    var curX = 0, curY = 0

    window.addEventListener('mousemove', function (e) {
      var nx = e.clientX / window.innerWidth
      var ny = e.clientY / window.innerHeight
      targetX = -(nx - 0.5) * 2 * maxOffset
      targetY = -(ny - 0.5) * 2 * maxOffset
    })

    ;(function animate() {
      curX += (targetX - curX) * 0.05
      curY += (targetY - curY) * 0.05
      bgImage.style.transform = 'scale(1.15) translate(' + curX + '%, ' + curY + '%)'
      requestAnimationFrame(animate)
    })()
  }
})()
