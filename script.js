<script src="https://smtpjs.com/v3/smtp.js">
</script>

var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var body = 'reason for rating: ' +name + '<br/> Products the customer was looking for and did Sports Hub help them to find the product: '
    +email + '<br/> Best part liked about SportsHub: ' +subject;

    Email.send({
        Host : "smtp.gmail.com",
        Username : "munasinghehiruka@gmail.com",
        Password : "Hirukasoftwareengineer",
        To : 'munasinghehiruka@gmail.com',
        From : "munasinghehiruka@gmail.com",
        Subject : "This is the subject",
        Body : body
    }).then(
      message => alert(message)
    );
})