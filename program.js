//Submit
document.getElementById('sub').addEventListener('click', function(e) {
    e.preventDefault()
    document.getElementById('napojnica').innerHTML = ''
    let iznosNapojnice;
    let kn = document.getElementById('cifra').value

    if(document.getElementById('jedan').checked === true) {iznosNapojnice = kn * 0.02} 
    else if(document.getElementById('dva').checked === true) {iznosNapojnice = kn * 0.04}
    else if(document.getElementById('tri').checked === true) {iznosNapojnice = kn * 0.06}
    else if(document.getElementById('četiri').checked === true) {iznosNapojnice = kn * 0.08}
    else if(document.getElementById('pet').checked === true) {iznosNapojnice = kn * 0.1}

    document.getElementById("napojnica").style.color = "#f0494f";
    let napojnicaDom = document.createElement('h1')
    napojnicaDom.innerText = Math.floor(iznosNapojnice)
    document.getElementById('napojnica').appendChild(napojnicaDom)
    
})

//Reset
document.getElementById('res').addEventListener('click', function() {
    document.getElementById('napojnica').innerHTML = ''
})


