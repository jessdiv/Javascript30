const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

const handleCheck = function(e) {
 // check if the shift key was down
 // check if they are checking not unchecking
 let inBetween = false;
  if (e.shiftKey && this.checked){
    // loop over every checkboxes
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween
      }

      if (inBetween){
        checkbox.checked = true;
      }
    })
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
