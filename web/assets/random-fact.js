(function () {
  var facts = document.querySelectorAll('#random-facts li')
  var display = document.getElementById('random-fact')
  var counter = document.getElementById('fact-counter')
  var reroll = document.getElementById('fact-reroll')
  if (!facts.length || !display) return

  var lastIndex = -1
  var digits = String(facts.length).length

  function pad(n) {
    var s = String(n)
    while (s.length < digits) s = '0' + s
    return s
  }

  function showRandomFact() {
    var index = Math.floor(Math.random() * facts.length)
    while (facts.length > 1 && index === lastIndex) {
      index = Math.floor(Math.random() * facts.length)
    }
    lastIndex = index

    display.innerHTML = facts[index].innerHTML
    if (counter) counter.textContent = '(' + pad(index + 1) + '/' + facts.length + ')'
  }

  showRandomFact()

  if (reroll) {
    reroll.addEventListener('click', function () {
      showRandomFact()
      reroll.classList.remove('spinning')
      void reroll.offsetWidth
      reroll.classList.add('spinning')
    })

    reroll.addEventListener('animationend', function () {
      reroll.classList.remove('spinning')
    })
  }
})()
