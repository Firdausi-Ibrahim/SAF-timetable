// Local Dataset (Can be expanded by you)
const timetable = [
  { day: "Monday", subject: "Math", time: "9:00 AM", teacher: "Mr. Ali" },
  { day: "Monday", subject: "English", time: "11:00 AM", teacher: "Mrs. Jones" },
  { day: "Tuesday", subject: "Biology", time: "10:00 AM", teacher: "Dr. Musa" },
  { day: "Wednesday", subject: "Chemistry", time: "9:00 AM", teacher: "Mr. Khan" },
  { day: "Thursday", subject: "Physics", time: "2:00 PM", teacher: "Dr. James" },
  { day: "Friday", subject: "Math", time: "12:00 PM", teacher: "Mr. Ali" }
];

// Subject color coding
const subjectColors = {
  Math: "#e3f2fd",
  English: "#e8f5e9",
  Biology: "#fff3e0",
  Chemistry: "#f3e5f5",
  Physics: "#e0f7fa"
};

// Filtering Logic
function filterTimetable(dayFilter, subjectFilter) {
  return timetable.filter(item => {
    return (
      (dayFilter === "All" || item.day === dayFilter) &&
      (subjectFilter === "All" || item.subject === subjectFilter)
    );
  });
}

// UI Update Function
function updateUI(data) {
  const body = document.getElementById("table-body");
  body.innerHTML = "";

  data.forEach(item => {
    const row = document.createElement("tr");
    row.classList.add("class-row");
    row.dataset.time = item.time;

    // Color coding
    row.style.background = subjectColors[item.subject] || "white";

    row.innerHTML = `
      <td>${item.day}</td>
      <td title="Teacher: ${item.teacher}">${item.subject}</td>
      <td>${item.time}</td>
      <td>${item.teacher}</td>
    `;

    body.appendChild(row);
  });

  highlightCurrentPeriod();
}

// Highlight current period
function highlightCurrentPeriod() {
  const now = new Date();
  const currentHour = now.getHours();

  document.querySelectorAll(".class-row").forEach(row => {
    const timeText = row.dataset.time;
    const periodHour = new Date("1970-01-01 " + timeText).getHours();

    if (periodHour === currentHour) {
      row.classList.add("highlight");
    }
  });
}

// Apply filters
function applyFilters() {
  const day = document.getElementById("day-select").value;
  const subject = document.getElementById("subject-select").value;
  const filtered = filterTimetable(day, subject);
  updateUI(filtered);
}

// Event Listeners
document.getElementById("day-select").addEventListener("change", applyFilters);
document.getElementById("subject-select").addEventListener("change", applyFilters);

// Load full timetable on page load
window.onload = () => updateUI(timetable);
