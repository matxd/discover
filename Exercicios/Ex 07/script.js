const abreModal = document.getElementById("openModal")
const encapsulaModal = document.querySelector(".modal-wrapper")

abreModal.addEventListener("click", () => {
    encapsulaModal.classList.remove("invisible")
})

document.addEventListener("keydown", (event) => {
    const verificaESC = event.key === "Escape"
    if(verificaESC) {
        encapsulaModal.classList.add("invisible")
    }
})