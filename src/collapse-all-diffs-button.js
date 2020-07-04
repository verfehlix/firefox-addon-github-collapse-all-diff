const SINGLE_FILE_COLLAPSE_SELECTOR = ".btn-octicon.js-details-target"

const BUTTON_PARENT_SELECTOR = "#toc"

const BUTTON_TEXT_ALL_OPEN = "Collapse All Diffs"
const BUTTON_TEXT_ALL_COLLAPSED = "Un-Collapse All Diffs"


const toggleAllFileCollapses = () => {
    document.querySelectorAll(SINGLE_FILE_COLLAPSE_SELECTOR).forEach(btn => { btn.click() })
}

const updateButtonText = (allCollapsed) => {
    if (allCollapsed) {
        myButton.innerHTML = BUTTON_TEXT_ALL_COLLAPSED
    } else {
        myButton.innerHTML = BUTTON_TEXT_ALL_OPEN
    }
}

let allCollapsed = false

const createCollapseButton = () => {
    const myButton = document.createElement('button')
    myButton.innerHTML = BUTTON_TEXT_ALL_OPEN

    myButton.classList.add("btn")
    myButton.setAttribute("style", "margin-top: 10px")

    myButton.addEventListener("click", () => {
        toggleAllFileCollapses()

        allCollapsed = !allCollapsed

        updateButtonText(allCollapsed)
    })

    return myButton
}

const parentContainer = document.querySelector(BUTTON_PARENT_SELECTOR)
const collapseAllButton = createCollapseButton()
parentContainer.appendChild(collapseAllButton)