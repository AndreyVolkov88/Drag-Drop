const item = document.querySelector('.item')

const placeholders = document.querySelectorAll('.placeholder')

const dragstart = (event) => {
  const elementDrag = event.target
  elementDrag.classList.add('hold')
  setTimeout(() =>  elementDrag.classList.add('hide'), 0)
}

const dragrend = (event) => {
  const elementDrag = event.target
  elementDrag.classList.remove('hold', 'hide')
}

const dragover = (event) => {
  event.preventDefault()

}
const dragenter = (event) => {
  const elementDrag = event.target
  elementDrag.classList.add('hovered')

}
const dragleave = (event) => {
  const elementDrag = event.target
  elementDrag.classList.remove('hovered')

}
const dragDrop = (event) => {
  const elementDrag = event.target
  elementDrag.classList.remove('hovered')
  elementDrag.append(item)
}

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragDrop)
}


item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragrend)

