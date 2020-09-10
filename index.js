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
  var deep

  while (grandNode.children != 0) {
    deep = grandNode.children
  }

  return deep

}
