document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName');

      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput.value || "a course"; // Fallback to "a course" if no input

      if (studentName.trim() === '' || personalMessage.trim() === '') {
          alert('Please fill in all fields');
          return;
      }

      // Generate certificate content dynamically
      certificateContent.innerHTML = `
      <h3>Certificate of Achievement</h3>
      <p>This is to certify that</p>
      <p><strong>${studentName}</strong></p>
      <p>has almost completed the</p>
      <p><strong>${courseName}</strong></p>
      <p>with legendary perseverance.</p>
      <img src="logo.png" alt="Codespace Logo">
      <p>${personalMessage}</p>
  `;
  

      // Display the modal
      modal.style.display = 'block';

      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      courseNameInput.value = '';

      // Log for debugging
      console.log('Certificate generated:', studentName, courseName, personalMessage);
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  });

  // Close the modal if the user clicks outside the modal content
  window.addEventListener('click', function (e) {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });
});




