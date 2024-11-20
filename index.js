function updateBatch() {
    const selectedBatch = document.getElementById("batchDropdown").value;
    alert(`Batch changed to: ${selectedBatch}`);
    
    // Example: Logic to update dashboard content dynamically
    // Replace this with real data loading from a database or API
    document.getElementById("dashboardContent").innerHTML = `
      <a href="my-profile.html" class="grid-item">
        <i class="fas fa-user"></i>
        <p>My Profile (${selectedBatch})</p>
      </a>
      <a href="change-password.html" class="grid-item">
       <i class="fas fa-key"></i>
       <p>Change Password (${selectedBatch})</p>
      </a>
      <a href="notifications.html" class="grid-item">
       <i class="fas fa-bell"></i>
       <p>Notifications (${selectedBatch})</p>
      </a>
      <a href="admit-card.html" class="grid-item">
        <i class="fas fa-id-card"></i>
        <p>Admit Card (${selectedBatch})</p>
      </a>
      <a href="attendance.html" class="grid-item">
       <i class="fas fa-calendar-check"></i>
       <p>Attendance (${selectedBatch})</p>
      </a>
      <a href="homework.html" class="grid-item">
       <i class="fas fa-book"></i>
       <p>Assignment (${selectedBatch})</p>
      </a>
      <a href="view-fees.html" class="grid-item">
        <i class="fas fa-wallet"></i>
        <p>View Fees (${selectedBatch})</p>
      </a>
      <a href="exam.html" class="grid-item">
       <i class="fas fa-edit"></i>
       <p>Exam (${selectedBatch})</p>
      </a>
      <a href="results.html" class="grid-item">
       <i class="fas fa-chart-bar"></i>
       <p>Results (${selectedBatch})</p>
      </a>
      <a href="syllabus.html" class="grid-item">
       <i class="fas fa-file"></i>
       <p>Syllabus (${selectedBatch})</p>
      </a>
      <a href="time-table.html" class="grid-item">
       <i class="fas fa-clock"></i>
       <p>Time Table (${selectedBatch})</p>
      </a>
      <a href="image-gallery.html" class="grid-item">
       <i class="fas fa-image"></i>
       <p>Image Gallery (${selectedBatch})</p>
      </a>
      <a href="my-teacher.html" class="grid-item">
       <i class="fas fa-chalkboard-teacher"></i>
       <p>Faculty (${selectedBatch})</p>
      </a>
      <a href="calendar.html" class="grid-item">
       <i class="fas fa-calendar"></i>
       <p>Calendar (${selectedBatch})</p>
      </a>
      <a href="my-classmate.html" class="grid-item">
       <i class="fas fa-users"></i>
       <p>My Classmate (${selectedBatch})</p>
      </a>
      <a href="notice.html" class="grid-item">
        <i class="fas fa-poll"></i>
        <p>Notice (${selectedBatch})</p>
     </a>
     <a href="feedback.html" class="grid-item">
       <i class="fas fa-comments"></i>
       <p>Feedback for Teacher (${selectedBatch})</p>
      </a>
    `;
  }
  