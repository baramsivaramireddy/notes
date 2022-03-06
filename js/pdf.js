window.addEventListener('DOMContentLoaded', (event) => {

   let window_height = window.innerHeight*0.9
   document.querySelector('.Link_button').addEventListener("click", function(event){
    event.preventDefault()
    let pdf_viewer = document.querySelector('#pdf_viewer')
    pdf_viewer.setAttribute("height",window_height)

    pdf_viewer.setAttribute("src",event.target.href.concat('/preview'))
  });
  
});