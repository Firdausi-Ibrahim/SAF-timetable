## Virtual Class Timetable

A simple, interactive timetable viewer built using HTML, CSS, and JavaScript as part of my Generative AI course project.
The application allows users to filter virtual class schedules by day or subject, dynamically updates the timetable from a local dataset, and highlights the current class period.

### Features
1. Filter by Day & Subject

- Users can view:

- All classes

- Classes for a specific day

- Classes for a specific subject

2. Dynamic Updates from Local Data

All timetable data comes from a JavaScript array (no backend required).
The page updates instantly when filters are applied.

3. Highlight Current Class Period

The system automatically highlights the class occurring during the current hour.

4. Responsive Layout

Built using CSS Grid & responsive design so it works on:

- Mobile

- Tablet

- Desktop

5. Tooltips for Teacher Information

Hovering over subjects displays teacher details.

Project Structure
virtual-timetable/
│── index.html     # Main interface
│── style.css      # Page styling & responsive layout
│── script.js      # Dynamic logic + filtering
│── README.md      # Project documentation

Technologies Used

- HTML5

- CSS3

- JavaScript (ES6)

- GitHub Pages (deployment)

### How to Run
- Open Locally

- Download the project ZIP or clone the repo

- Open index.html in any web browser

Everything loads instantly (no server required)

### How It Works
Filtering Logic

Filtering is handled by a JavaScript function that matches:

item.day === selectedDay
item.subject === selectedSubject

Dynamic Rendering

Table rows are generated using:

innerHTML += `<tr>...</tr>`;

Highlight Current Period

JavaScript compares the current hour to the class time.

### License

This project is for educational purposes as part of a Generative AI course project.

### Author

Firdausi Ibrahim
