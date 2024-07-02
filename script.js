document.addEventListener("DOMContentLoaded", () => {
    // Function to update time and day
    function updateTimeAndDay() {
      const now = new Date();
      const utcTime = now.toUTCString().slice(17, 25);
      const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
  
      document.getElementById('time').textContent = utcTime;
      document.getElementById('day').textContent = dayOfWeek;
    }
  
    // Update time and day immediately and then every second
    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
  });
  