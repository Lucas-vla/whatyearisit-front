fetch('https://whatyearisit-back-tau.vercel.app/years')
.then(response => response.json())
.then(data => { 
    document.querySelector("#year").textContent = data.year
    console.log(data)
    
})