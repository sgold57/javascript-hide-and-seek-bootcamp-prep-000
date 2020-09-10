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

  let current = grandNode
  let next = []

  while (current || current === 0) {
    if (current.children === 0){
      return current.innerHTML
    }
  if (grandNode.children != 0) {
    for (let i = 0; i < grandNode.length; i++) {
      next.push(current[i])
    }
  }
  current = next.shift()
}
}
