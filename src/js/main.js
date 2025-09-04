//==================
// Variables
//==================
const popoverTriggers = document.querySelectorAll('.popover-trigger')

/****************
 * Functions
 ****************/
/**
 * Calculates top and left position of popover
 * @param {HTMLElement} popoverTrigger
 * @param {HTMLElement} popover
 * @returns {Object}  Top andleft values in px (without units)
 */
function calculatePopoverPosition(popoverTrigger, popover) {
    //Get geometry of both elements
    const popoverTriggerRect = popoverTrigger.getBoundingClientRect()
    const popoverRect = popover.getBoundingClientRect()
    const { position } = popover.dataset //find the position of the popover
    const space = 20 // breathing room between trigger & popover

    //if position is top
    if (position === "top") {
         return {
        top: popoverTriggerRect.top - popoverRect.height - space, 
        left: 
            (popoverTriggerRect.left + popoverTriggerRect.right) /2 - 
            popoverRect.width /2 ,
        }
    }

    if (position === "left") {
        return {
            left: popoverTriggerRect.left - popoverRect.width - space,
            top: (popoverTriggerRect.top + popoverTriggerRect.bottom) /2 - popoverRect.height/2, 
        }
    }

     if (position === "right") {
        return {
            left: popoverTriggerRect.right + space,
            top: (popoverTriggerRect.top + popoverTriggerRect.bottom) /2 - popoverRect.height / 2, 
        }
    }

     if (position === "bottom") {
        return {
            left: (popoverTriggerRect.left + popoverTriggerRect.right) /2 - popoverRect.width / 2,
            top: popoverTriggerRect.bottom + space, 
        }
    }
}

//===================
 // Execution
//===================
//Positions popover
popoverTriggers.forEach(popoverTrigger => {
    const popover = document.querySelector(`#${popoverTrigger.dataset.target}`)
    const popoverPosition = calculatePopoverPosition(popoverTrigger, popover)
   
   //set the popover top and left values
    popover.style.top = `${popoverPosition.top}px`
    popover.style.left = `${popoverPosition.left}px`

    //Hides popover once it is positioned
    popover.setAttribute('hidden', true)
})

//Event Listeners
//Show and hide popover when user clicks on the trigger
document.addEventListener('click', e => {
    const popoverTrigger = e.target.closest('.popover-trigger')
    if (!popoverTrigger) return

    const popover = document.querySelector(`#${popoverTrigger.dataset.target}`)
    if (popover.hasAttribute('hidden')) {
        popover.removeAttribute('hidden')
    } else {
        popover.setAttribute('hidden', true)
    }
})

//Hides popover when user clicks something other than trigger or popover
document.addEventListener('click', e => {
    if (
        !e.target.closest('.popover') &&
        !e.target.closest('.popover-trigger') 
    ) {
        const popovers = [...document.querySelectorAll('.popover')]
        popovers.forEach(popover => popover.setAttribute('hidden', true))
    }
})