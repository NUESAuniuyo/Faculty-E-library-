//const { Client, Databases, ID } = Appwrite;

document.getElementById("redirectForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get selected values
  const semester = document.getElementById("semester").value;
  const level = document.getElementById("level").value;
  const department = document.getElementById("department").value;

  // Get the file name from the mapping
  const fileName = `${department}/${level}/${semester}.html`

  if (fileName) {
    // Display a redirection message
    alert(`Redirecting to ${level} Level ${semester} Semester - ${department.charAt(0).toUpperCase() + department.slice(1)} Materials`);

    // Redirect to the file
    window.location.href = fileName; 
    
  
  } else {
    alert("Invalid selection. Please choose valid options.");
  }


});


