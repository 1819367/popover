//finds a popover
const popoverTrigger = document.querySelector('.popover-trigger')
const popover = document.querySelector('.popover')

//finds the position of the popover
const popoverTriggerRect = popoverTrigger.getBoundingClientRect()
const popoverRect = popover.getBoundingClientRect()

//Finds and set the left position
const triggerCenter = (popoverTriggerRect.left + popoverTriggerRect.right) /2
const leftPosition = triggerCenter - popoverRect.width /2 
popover.style.left = `${leftPosition}px`

//Finds and set the top position
const space =  20
const triggerTop = popoverTriggerRect.top
const topPosition = triggerTop - popoverRect.height - space
popover.style.top = `${topPosition}px`

//Hides popover once it is positioned
popover.setAttribute('hidden', true)

//Allows users to show/hide the popover
popoverTrigger.addEventListener('click', _ => {
    if (popover.hasAttribute('hidden')) {
        popover.removeAttribute('hidden')
    } else {
        popover.setAttribute('hidden', true)
    }
})

//Hides popover if user clicks outside of the trigger and the popover
document.addEventListener('click', e => {
    if (
        e.target.closest('.popover') ||
        e.target.closest('.popover-trigger')
    )
    return
    popover.setAttribute('hidden', true)
})
