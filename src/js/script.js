document.querySelectorAll(".kanban-card").forEach(card => {
    card.addEventListenerAll("dragstart", e => {
        e.currentTarget.classList.add("dragging");
    })

    card.addEventListener("dragend", e => {
        e.currentTarget.classList.remove("dragging");
    })
})


document.querySelectorAll(".kanban-cards").forEach(column => {
    column.addEventListener("dragover", e => {
        e.preventDefault();
        e.currentTarget.classList.add("cards-hover");
    })

    column.addEventListener("dragleve", e => {
        e.currentTarget.classList.add("cards-hover");
    })
})
