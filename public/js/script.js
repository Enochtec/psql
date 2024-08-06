function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
  document.getElementById("mySidenav").style.width ="0";
  }
  
  function openSection(sectionId) {
    var section = document.getElementById(sectionId);
    var sections = document.querySelectorAll('#main > div');
  
    // Close all sections except the one to be opened
    sections.forEach(function(element) {
      if (element.id === sectionId) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    });
  
    // Open the sidebar
    openNav();
  }
  
  document.getElementById('withdrawForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the input value
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
      // Get the current balance
      let balance = parseFloat(document.getElementById('balance').textContent);
      
      // Check if withdrawal amount is less than or equal to balance
      if (withdrawAmount <= balance) {
        // Update balance
        balance -= withdrawAmount;
        document.getElementById('balance').textContent = balance.toFixed(2);
        
        // Add withdrawal to the list
        const withdrawList = document.getElementById('withdrawList');
        const li = document.createElement('li');
        li.textContent = '- $' + withdrawAmount.toFixed(2);
        withdrawList.appendChild(li);
        
        // Clear input field
        document.getElementById('withdrawAmount').value = '';
      } else {
        alert('Insufficient funds!');
      }
    } else {
      alert('Please enter a valid amount!');
    }
  });
  // referral
  document.getElementById("referralForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let referralCode = document.getElementById("referralCode").value.trim();
    
    if (referralCode === "") {
      alert("Please enter a referral code.");
    } else {
      alert("Referral code submitted: " + referralCode);
      // Here you can add further actions, like sending the referral code to a server, etc.
    }
  });
  // available tasks
  function bidTask(bidConfirmationId) {
      var bidConfirmation = document.getElementById(bidConfirmationId);
      bidConfirmation.style.display = "block";
      alert("Task bid successfully!");
  }
  
  function cancelBid(bidConfirmationId) {
      var bidConfirmation = document.getElementById(bidConfirmationId);
      bidConfirmation.style.display = "none";
      alert("Bid canceled successfully!");
  }
// upgarde to  premium
      // Predefined list of valid M-Pesa codes and amounts (for demonstration purposes)


  // submission panel
  document.getElementById('pdfForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let pdfFile = document.getElementById('pdfFile').files[0];
    if (!pdfFile) {
        showMessage('Please select a PDF file.', 'error');
        return;
    }
  
    if (pdfFile.type !== 'application/pdf') {
        showMessage('Please select a valid PDF file.', 'error');
        return;
    }

    // Check current time
    let now = new Date();
    let startHour = 8; // 8 AM
    let endHour = 21; // 9 PM

    if (now.getHours() >= startHour && now.getHours() < endHour) {
        // Within allowed time
        // Handle the file upload here, for example:
        // const formData = new FormData();
        // formData.append('pdf', pdfFile);
        // Then, send formData to your server using AJAX or fetch
        
        showMessage('File uploaded successfully: ' + pdfFile.name + '. Wait For Review', 'success');
    } else {
        // Outside allowed time
        showMessage('Submission time expired. Please submit your file between 8 AM and 9 PM.', 'error');
    }
});
  
function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
    messageDiv.style.color = type === 'error' ? 'red' : 'green';
}


  // Set the date we're counting down to in the dashboard
  var countDownDate = new Date("August 10, 2024 18:37:25").getTime();
      
      // Update the count down every 1 second
      var x = setInterval(function() {
      
        // Get today's date and time
        var now = new Date().getTime();
          
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
          
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
        // Output the result in an element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
          
        // If the count down is over, write some text 
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);

 // Set the date we're counting down to submission of tasks
 var countDownDate = new Date("August 10, 2024 18:37:25").getTime();
      
 // Update the count down every 1 second
 var x = setInterval(function() {
 
   // Get today's date and time
   var now = new Date().getTime();
     
   // Find the distance between now and the count down date
   var distance = countDownDate - now;
     
   // Time calculations for days, hours, minutes and seconds
   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
   // Output the result in an element with id="demo"
   document.getElementById("due").innerHTML = "DUE IN:" + days + "d " + hours + "h "
   + minutes + "m " + seconds + "s ";
     
   // If the count down is over, write some text 
   if (distance < 0) {
     clearInterval(x);
     document.getElementById("due").innerHTML = "SESSION EXPIRED";
   }
 }, 1000);

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date();

  // Set the next 9 PM
  var nextNinePM = new Date();
  nextNinePM.setHours(21, 0, 0, 0);
  if (now.getHours() >= 21) {
      nextNinePM.setDate(nextNinePM.getDate() + 1);
  }

  // Find the distance between now and the count down date
  var distance = nextNinePM.getTime() - now.getTime();

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in elements with class="due"
  var dueElements = document.getElementsByClassName("due");
  for (var i = 0; i < dueElements.length; i++) {
      dueElements[i].innerHTML = "DUE IN: " + days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
  }

  // If the count down is over, write some text
  if (distance < 0) {
      clearInterval(x);
      for (var i = 0; i < dueElements.length; i++) {
          dueElements[i].innerHTML = "SESSION EXPIRED";
      }
  }
}, 1000);

      // referral copy text
      function copyText() {
        var copyText = document.getElementById("textToCopy");
        copyText.select();
        copyText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyText.value).then(function() {
          alert("Copied the Code: " + copyText.value);
        }, function(err){
          console.error('Async:Could not copy the code:',err);
        });
      }

      // autogenerate code
       // Function to generate a random referral code
    function generateReferralCode() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let referralCode = '';
      for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          referralCode += characters[randomIndex];
      }
      return referralCode;
  }

  // Function to copy the referral code to the clipboard
  function copyText() {
      const textToCopy = document.getElementById('textToCopy');
      textToCopy.select();
      textToCopy.setSelectionRange(0, 99999); // For mobile devices
      document.execCommand('copy');
      alert('Referral code copied: ' + textToCopy.value);
  }

  // Set the generated referral code on page load
  document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('textToCopy').value = generateReferralCode();
  });


   // Predefined list of valid M-Pesa codes and amounts (for demonstration purposes)
   const validMpesaCodes = {
    'QWRSSWFT': 1000,
    'ZXCVBNML': 1500,
    'ASDFGHJK': 2000
};

function verifyMpesaCode() {
    const codeInput = document.getElementById('mpesaCode').value.trim();
    const verificationMessage = document.getElementById('verificationMessage');

    if (validMpesaCodes.hasOwnProperty(codeInput)) {
        const amountPaid = validMpesaCodes[codeInput];
        if (amountPaid >= 1000) { // Set the minimum required amount
            showMessage(`Transaction successful! Amount paid: KSH ${amountPaid}`, 'success');
        } else {
            showMessage(`Transaction code is valid but the amount paid (KSH ${amountPaid}) is insufficient.`, 'error');
        }
    } else {
        showMessage('Invalid M-Pesa transaction code.', 'error');
    }
}

function showMessage(message, type) {
    const messageDiv = document.getElementById('verificationMessage');
    messageDiv.innerHTML = `<div class="alert ${type}">${message}<span class="close-btn" onclick="this.parentElement.style.display='none';">&times;</span></div>`;
}