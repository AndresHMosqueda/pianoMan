//Asignar evento a un elemento

    const buttons =  document.querySelectorAll('button')
    console.log(buttons);
    

    buttons.forEach( button => button.addEventListener('click',  playSound) )


    function playSound(event){
        const button = event.target;
        const note = button.innerText
        console.log(note);
        
        
       const audio =  document.getElementById(`audio${note}`);
       audio.pause();
       audio.currentTime = 0
       audio.play();

    }