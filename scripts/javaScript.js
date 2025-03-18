/*
const currYear=(new Date).getFullYear(),lastModified=document.lastModified;document.getElementById("lastModified").textContent+=lastModified,document.getElementById("currentYear").textContent=currYear;const hamburger=document.querySelector(".hamburger"),navigation=document.querySelector(".navigation");hamburger.addEventListener("click",(()=>{"block"===navigation.style.display?navigation.style.display="none":navigation.style.display="block"}));const courses=[{subject:"CSE",number:110,title:"Introduction to Programming",credits:2,certificate:"Web and Computer Programming",description:"This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",technology:["Python"],completed:!1},{subject:"WDD",number:130,title:"Web Fundamentals",credits:2,certificate:"Web and Computer Programming",description:"This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",technology:["HTML","CSS"],completed:!0},{subject:"CSE",number:111,title:"Programming with Functions",credits:2,certificate:"Web and Computer Programming",description:"CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",technology:["Python"],completed:!1},{subject:"CSE",number:210,title:"Programming with Classes",credits:2,certificate:"Web and Computer Programming",description:"This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",technology:["C#"],completed:!0},{subject:"WDD",number:131,title:"Dynamic Web Fundamentals",credits:2,certificate:"Web and Computer Programming",description:"This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",technology:["HTML","CSS","JavaScript"],completed:!0},{subject:"WDD",number:231,title:"Frontend Web Development I",credits:2,certificate:"Web and Computer Programming",description:"This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",technology:["HTML","CSS","JavaScript"],completed:!0}],btnAll=document.getElementById("btn-all"),btnCse=document.getElementById("btn-cse"),btnWdd=document.getElementById("btn-wdd");async function showCourseList(e){const t=document.getElementById("grid-course");let n=0;t.innerHTML="",n=e.reduce(((e,t)=>t.completed?e+t.credits:e),0);document.getElementById("total-credits").textContent=`Total Credits: ${n}`,e.forEach((e=>{const n=document.createElement("div");n.classList.add("course"),e.completed&&n.classList.add("completed"),n.textContent=`${e.subject} ${e.number}`,t.appendChild(n)}))}btnAll.addEventListener("click",(()=>{showCourseList(courses)})),btnCse.addEventListener("click",(()=>{showCourseList(courses.filter((e=>"CSE"===e.subject)))})),btnWdd.addEventListener("click",(async()=>{showCourseList(courses.filter((e=>"WDD"===e.subject)))})),showCourseList(courses,"all");
*/

// Get current year and last modified date
const currYear = new Date().getFullYear();
const lastModified = document.lastModified;

// Update the footer with current year and last modified date
document.getElementById("lastModified").textContent += lastModified;
document.getElementById("currentYear").textContent = currYear;

// Hamburger menu toggle functionality
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
  if (navigation.style.display === "block") {
    navigation.style.display = "none";
  } else {
    navigation.style.display = "block";
  }
});


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navigation a"); // Select all nav links

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove("active"));

            // Add active class to the clicked link
            this.classList.add("active");
        });
    });
});


// // to keep a menu active in the screen
// document.addEventListener("DOMContentLoaded", function () {
//   const links = document.querySelector(".navigation a");
//   const currentUrl = window.location.pathname;

// //    links.forEach((links) => {
// //      links.classList.add("active");
// //    });

// if (link.getAttribute("href") === currentUrl || (currentUrl === "" && link.getAttribute("href") === "index.html")) {
//     link.classList.add("active"); // Add active class to the matching link
//   } else {
//     link.classList.remove("active"); // Remove active class from others
//   }

// });

// Course data
const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands-on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: false,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
];

// Get buttons for filtering courses
const btnAll = document.getElementById("btn-all");
const btnCse = document.getElementById("btn-cse");
const btnWdd = document.getElementById("btn-wdd");

// Function to display course list
async function showCourseList(filteredCourses) {
  const courseGrid = document.getElementById("grid-course");
  let totalCredits = 0;

  // Clear previous courses
  courseGrid.innerHTML = "";

  // Calculate total completed credits
  totalCredits = filteredCourses.reduce(
    (sum, course) => (course.completed ? sum + course.credits : sum),
    0
  );

  // Update total credits display
  document.getElementById(
    "total-credits"
  ).textContent = `Total Credits: ${totalCredits}`;

  // Render courses
  filteredCourses.forEach((course) => {
    const courseElement = document.createElement("div");
    courseElement.classList.add("course");
    if (course.completed) {
      courseElement.classList.add("completed");
    }
    courseElement.textContent = `${course.subject} ${course.number}`;
    courseGrid.appendChild(courseElement);
  });
}

// Event listeners for filtering courses
btnAll.addEventListener("click", () => {
  showCourseList(courses);
});

btnCse.addEventListener("click", () => {
  showCourseList(courses.filter((course) => course.subject === "CSE"));
});

btnWdd.addEventListener("click", async () => {
  showCourseList(courses.filter((course) => course.subject === "WDD"));
});

// Show all courses by default on page load
showCourseList(courses);
