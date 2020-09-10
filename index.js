function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("div#nested").querySelector(".target")
}

function increaseRankBy(n) {
  const ranks = document
                .getElementById("app")
                .querySelectorAll("ul.ranked-list li")

      for (let i = 0; i < ranks.length; i++) {
        ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + n).toString()
      }
  return
}

function deepestChild() {
  const grandNode = document
                    .getElementById("app")
                    .querySelector("div#grand-node")


  for (let i = 0; i < grandNode.length; i++) {
    var element = grandNode.item[i]
    if (element.children === 1) {
      return element.innerHTML
    }
  }
}
