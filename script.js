const form = document.querySelector('form');

 function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ufreelancer.moaz124@gmail.com",
        Password : "B099D7466C8DFC995F0A277FCD3E46D066CC",
        To : 'freelancer.moaz124@gmail.com',
        From : "freelancer.moaz124@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
 }

 form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
 });