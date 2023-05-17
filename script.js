document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Retrieve username and password values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Validation
    if (username.trim() === "" && password.trim() === "") {
      alert("Username or password is empty");
    } else if (username.trim() === "") {
      alert("Please enter your username/email");
    } else if (password.trim() === "") {
      alert("Please enter your password");
    } else {

      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }
  });
  

  document.getElementById("signupLink").addEventListener("click", function(event) {
    event.preventDefault();
    var modal = document.getElementById("signupModal");
    modal.style.display = "block";
  
    var closeButton = document.getElementsByClassName("close")[0];
    closeButton.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  });
  
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    // Get form field values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var newPassword = document.getElementById('newPassword').value;
    var dateOfBirth = document.getElementById('dateOfBirth').value;
    var gender = document.getElementById('gender').value;
  
  
    if (!firstName || !lastName || !email || !newPassword || !dateOfBirth || !gender) {
      alert('Please fill in all the required fields.');
      return;
    }
  
    // Showing the submitted details in the modal
    var signupDetails = document.getElementById('signupDetails');
    signupDetails.innerHTML = `
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
      <p><strong>Gender:</strong> ${gender}</p>
    `;
  
   
    var modal = document.getElementById('signupModal');
    modal.style.display = 'block';
  });
  
  document.getElementById('signupLink').addEventListener('click', function(event) {
    event.preventDefault(); 
  
   
    var modal = document.getElementById('signupModal');
    modal.style.display = 'block';
  });
  
  document.getElementsByClassName('close')[0].addEventListener('click', function() {
 
    
    var modal = document.getElementById('signupModal');
    modal.style.display = 'none';
  });
  
  
  