function getFormvalue() {
    //Write your code here
  event.preventDefault(); // Prevent form from submitting
  
  // Get form elements
  const form = document.getElementById('form1');
  const firstName = form.elements['fname'].value;
  const lastName = form.elements['lname'].value;

  // Show the full name
  alert(firstName + " " + lastName);
}



