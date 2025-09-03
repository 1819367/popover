/* -------------------------------------------------
   TOP POPOVER – isolated in its own block scope
   ------------------------------------------------- */
{
// Find the trigger and the popover (top version)
const popoverTrigger = document.querySelector('.popover-trigger')
const popover = document.querySelector('.popover')

//Get geometry of both elements
const popoverTriggerRect = popoverTrigger.getBoundingClientRect()
const popoverRect = popover.getBoundingClientRect()

//Horizontal centering (top popover is centered above the trigger)
const triggerCenter = (popoverTriggerRect.left + popoverTriggerRect.right) /2
const leftPosition = triggerCenter - popoverRect.width /2 
popover.style.left = `${leftPosition}px`

//Vertical placement (above the trigger)
const space =  20 // breathing room between trigger & popover
const triggerTop = popoverTriggerRect.top
const topPosition = triggerTop - popoverRect.height - space
popover.style.top = `${topPosition}px`

//Start hidden
popover.setAttribute('hidden', true)

//Show / hide on click of its own trigger
popoverTrigger.addEventListener('click', _ => {
    if (popover.hasAttribute('hidden')) {
        popover.removeAttribute('hidden')
    } else {
        popover.setAttribute('hidden', true)
    }
})

//Click‑outside handling (still scoped to this popover)
document.addEventListener('click', e => {
    if (
        e.target.closest('.popover') ||
        e.target.closest('.popover-trigger')
    )
    return // click was inside a popover or a trigger → ignore
    popover.setAttribute('hidden', true)
})
}  // ← end of the top‑popover block

/* -------------------------------------------------
   LEFT POPOVER – isolated in its own block scope
   ------------------------------------------------- */
{   
   // Select the 'second' trigger / popover (index 1)
const popoverTrigger = document.querySelectorAll('.popover-trigger')[1]
const popover = document.querySelectorAll('.popover')[1]

//Geometry
const popoverTriggerRect = popoverTrigger.getBoundingClientRect()
const popoverRect = popover.getBoundingClientRect()

//Compute left position
const triggerLeft = popoverTriggerRect.left
const space = 20 // breathing room between trigger & popover
const leftPosition = triggerLeft - popoverRect.width - space
popover.style.left = `${leftPosition}px`

//Compute top position
const triggerCenter = (popoverTriggerRect.top + popoverTriggerRect.bottom) /2
const topPosition = triggerCenter - popoverRect.height/2
popover.style.top = `${topPosition}px`

//Start hidden
popover.setAttribute('hidden', true)

//Show / hide on click of its own trigger
popoverTrigger.addEventListener('click', _ => {
    if (popover.hasAttribute('hidden')) {
        popover.removeAttribute('hidden')
    } else {
        popover.setAttribute('hidden', true)
    }
})

//Click‑outside handling (still scoped to this popover)
document.addEventListener('click', e => {
    if (
        e.target.closest('.popover') ||
        e.target.closest('.popover-trigger')
    )
    return // click was inside a popover or a trigger → ignore
    popover.setAttribute('hidden', true)
})
}  // ← end of the left‑popover block