(function () {
  var imgs = [
    '01.png', '02.png', '03.png', '04.png', '05.png',
    '06.png', '07.png', '08.png', '09.png', '10.png',
  ]
  var chosen = imgs[Math.floor(Math.random() * imgs.length)]
  document.documentElement.style.setProperty('--bg-url', "url('assets/bg/" + chosen + "')")
})()
