var toggler = document.querySelector('.toggler');

toggler.addEventListener('click' ,(e) => {
    DarkMode(e)
})

function DarkMode(e){
    
    var body = document.querySelector('body');
        
        // SETS TO WHITE
        if(body.style.backgroundColor === 'var(--dark)'){
            body.style.backgroundColor = 'var(--white)';
            body.style.color = 'var(--dark)'

            // Style and Inner text button
            e.target.innerText = 'Toggle Dark'
            e.target.style.backgroundColor = 'var(--dark)'
            e.target.style.color = 'var(--white)'
           
      
        } 
        // SETS TO DARK MODE
        else{
            body.style.backgroundColor = 'var(--dark)';
            body.style.color = 'white'
           
            // Style and Inner text button
            e.target.innerText = 'Toggle White'
            e.target.style.backgroundColor = 'var(--white)'
            e.target.style.color = 'var(--dark)'
           
        }
  

   



    
}