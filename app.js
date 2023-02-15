const daysText = document.querySelector("#Days")
const hoursText = document.querySelector("#Hours")
const minutesText = document.querySelector("#Minutes")
const secondsText = document.querySelector("#Seconds")

const newYearsDate = new Date("1 jan 2024")

setInterval(()=>{
    const currentDate = new Date()
    const totalSeconds = (newYearsDate - currentDate)/1000

    const days = Math.floor((totalSeconds/3600)/24)
    let hours = Math.floor((totalSeconds/3600)%24)
    const minutes = Math.floor((totalSeconds/60)%60)
    const seconds = Math.floor(totalSeconds%60)

    // if (hours<10) {
    //     hours = `0${hours}`
    // }

    renderCountdown({ days, hours, minutes, seconds})
    
}, 1000)

function addPadStart(value) {
    return value < 10 ? `0${value}`: value
}

function renderCountdown({days, hours, minutes, seconds}) {

    daysText .innerText = addPadStart(days)
    hoursText .innerText = addPadStart(hours)
    minutesText .innerText = addPadStart(minutes)
    secondsText .innerText = addPadStart(seconds)



}