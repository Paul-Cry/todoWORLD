const modals = document.getElementsByClassName("modal")
const modalsTriggers = document.getElementsByClassName("modal-trigger")

console.log(modals)
console.log(modalsTriggers)

const modalAction = (modalId) => {
    modals.namedItem(modalId).classList.toggle('active')
}

for (let modalTrigger of modalsTriggers) {
    modalTrigger.onclick = () => {
        modalAction(modalTrigger.dataset.modalId)
    }
}

