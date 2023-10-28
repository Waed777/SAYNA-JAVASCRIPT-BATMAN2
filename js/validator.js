window.onload = () => {
    let myForm = document.getElementById("myForm");
    myForm.addEventListener("submit", function (e) {
      let email = document.getElementById("email");
      if (email.value == "") {
        e.preventDefault();
  
        let invalid = document.getElementById("invalid");
        invalid.innerHTML = "le champ email ne peut pas etre vide";
        invalid.style.color = "red";
      } else {
        e.preventDefault();
  
        document.getElementById("popupbox").style.display = "block";
        // window.scrollTo(top);
      }
    });
  };