let UTC = document.querySelector('.UTC')


const date = ()=>{
    const currentTime = new Date().toISOString();

    console.log(currentTime)
    
    const UtcTag = document.createElement('p')
    
    UtcTag.innerHTML = `UTC: ${currentTime}`
    
    UTC.appendChild(UtcTag)
}

date()