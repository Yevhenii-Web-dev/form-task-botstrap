document.addEventListener('DOMContentLoaded', () => {



   const form = document.querySelector('#form__body');
   const email = document.querySelector('#form__mail');
   const phone = document.querySelector('#form__phone');
   const checkbox = document.querySelector('#check');
   const userName = document.getElementById('form__name');
   const submit = document.querySelector('#form__submit');









   form.addEventListener('submit', (event) => {
      if (checkInput()) {
         
      } else {
         event.preventDefault()
      }
   })




   function checkInput() {
      const userNameValue = userName.value.trim()
      const emailValue = email.value.trim()
      const phoneValue = phone.value.trim()

// validateUserName===================================================================================================
      if (userNameValue === "") {
         setErrorFor(userName)
         return false
      } else {
         setSuccessFor(userName)
      }



// validateEmail===================================================================================================
      if (emailValue === "") {
         setErrorFor(email)
         return false
      } else if (!validateEmail(emailValue)) {
         setErrorFor(email)
         return false
      }
      else {
         setSuccessFor(email)
      }



// validatePhone===================================================================================================
      if (phoneValue === "") {
         setErrorFor(phone)
         return false
      } else if (!validatePhone(phoneValue)) {
         setErrorFor(phone)
         return false
      }
      else {
         setSuccessFor(phone)
      }



// checkedCheckBox===================================================================================================
      if (checkbox.checked) {
      } else {
         setErrorFor(checkbox)
         validcheckbox = false
         checkbox.addEventListener('click', () => {
            checkbox.classList.remove('is-invalid')
         })
         return false
      }


      
      return true
   }




   function setErrorFor(input) {
      input.classList.add('is-invalid')
   }
   function setSuccessFor(input) {
      input.classList.add('is-valid')
      input.classList.remove('is-invalid')
   }




   function validateEmail(email) {
      return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)
   }
   function validatePhone(phone) {
      return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone)
   }


})