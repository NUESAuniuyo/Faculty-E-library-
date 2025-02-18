
//const { Client, Databases, ID } = Appwrite;

document.getElementById("redirectForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission
  // Get selected values
  const semester = document.getElementById("semester").value;
  const level = document.getElementById("level").value;
  const department = document.getElementById("department").value;

  // Mapping object for file names
  const fileMapping = {
    "100": {
      "first": {
        "mechanical": "Mech_Yr1_100L/100level_firstsemestermechanical.html",
        "computer": "Com_Yr1_100L/100level_firstsemestercomputer.html",
        "civil": "Civil_Yr1_100L/100level_firstsemestercivil.html",
        "agric": "Agric_Yr1_100L/100level_firstsemesteragric.html",
        "chemical": "Chm_Yr1_100/100evel_secondsemesterchemical.html",
        "food": "Food_Yr1_100L/100level_firstsemesterfood.html",
        "electrical": "Elect_Yr1_100L/100level_firstsemesterelectrical.html",
        "petroleum": "Pet_Yr1_100L/100level_firstsemesterpetrolume.html"
      },
      "second": {
        "mechanical": "Mech_Yr1_100L/100level_secondsemestermechanical.html",
        "computer": "Com_Yr1_100L/100level_seconsemestercomputer.html",
        "civil": "Civil_Yr1_100L/100level_secondsemestercivil.html",
        "agric": "Agric_Yr1_100L/100level_secondsemesteragric.html",
        "chemical": "Chm_Yr1_100/100level_firstsemesterchemical.html",
        "food": "Food_Yr1_100L/100level_secondsemesterfood.html",
        "electrical": "Elect_Yr1_100L/100level_secondsemesterelectrical.html",
        "petroleum": "Pet_Yr1_100L/100level_secondsemesterpetrolume.html"
      }
    },
    "200": {
      "first": {
        "mechanical": "Mech_Yr2_200l/200level_firstsemestermechanical.html",
        "computer": "Com_Yr2_200L/200level_firstsemestercomputer.html",
        "civil": "Civil_Yr2_200L/200level_firstsemestercivil.html",
        "agric": "Agric_Yr2_200L/200level_firstsemesteragric.html",
        "chemical": "Chm_Yr2_200l/200level_firstsemesterchemical.html",
        "food": "Food_Yr2_200L/200level_firstsemesterfood.html",
        "electrical": "Elect_Yr2_200L/200level_firstsemesterelectrical.html",
        "petroleum": "Pet_Yr2_200L/200level_firstsemesterpetroleum.html"
      },
      "second": {
        "mechanical": "Mech_Yr2_200l/200level_secondsemestermechanical.html",
        "computer": "Com_Yr2_200L/200level_secondsemestercomputer.html",
        "civil": "Civil_Yr2_200L/200level_secondsemesterCivil.html",
        "agric": "Agric_Yr2_200L/200level_firstsemesteragric.html",
        "chemical": "Chm_Yr2_200l/200level_secondsemesterchemical.html",
        "food": "Food_Yr2_200L/200level_secondsemesterfood.html",
        "electrical": "Elect_Yr2_200L/200level_secondsemesterelectrical.html",
        "petroleum": "Pet_Yr2_200L/200level_secondsemesterpetroleum.html"
      }
    }
  };

  // Get the file name from the mapping
  const fileName = fileMapping[level]?.[semester]?.[department];

  if (fileName) {
    // Display a redirection message
    alert(`Redirecting to ${level} Level ${semester} Semester - ${department.charAt(0).toUpperCase() + department.slice(1)} Materials`);

    // Redirect to the file
    window.location.href =fileMapping[level]?.[semester]?.[department]; 

  } else {
    alert("Invalid selection. Please choose valid options.");
  }


});


