// listing elements
document.getElementById(`resumeform`)?.addEventListener(`submit`,function(event) {
    event.preventDefault();
    // type assertion
    const nameElement=document.getElementById(`name`)as HTMLInputElement;
    const emailElement=document.getElementById(`email`)as HTMLInputElement;
    const phoneElement=document.getElementById(`phone`)as HTMLInputElement;
    const educationElement=document.getElementById(`education`)as HTMLInputElement;
    const expirenceElement=document.getElementById(`expirence`)as HTMLInputElement;
    const skillsElement=document.getElementById(`skills`)as HTMLInputElement;
    if (nameElement && emailElement && phoneElement && educationElement&& expirenceElement&& skillsElement){
      
        const name=nameElement.value;
        const email=emailElement.value;
        const phone=phoneElement.value;
        const education=educationElement.value;
        const expirence=expirenceElement.value;
        const skills=skillsElement.value;
        

        // create output
        const resumeOutput =`
        <h2>resume</h2>
        <p><strong>Name</strong>${name} </p>
        <p><strong>email</strong>${email} </p>
        <p><strong>phone</strong>${phone} </p>
        
        <h3>education</h3>
        <p>${education}<p/>

        <h3>exprience</>
        <p>${expirence}<p/>

        <h3>skills</h3>
        <p>${skills}<p/>
        `;

         const resumeOutputElement=document.getElementById(`resumeoutput`)
         if(resumeOutputElement){
            resumeOutputElement.innerHTML=resumeOutput
         }   else{
            console.error(`the resume output element are missing`);
         } 

         
        }
          
})