// Get current year and last modified date
const currYear = (new Date()).getFullYear();
const lastModified = document.lastModified;

document.getElementById("lastModified").textContent += lastModified;
document.getElementById("currentYear").textContent = currYear;

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});



// Toggle navigation menu
// const hamburger = document.querySelector(".hamburger");
// const navigation = document.querySelector(".navigation");

// hamburger.addEventListener("click", () => {
//     if (navigation.style.display === "block") {
//         navigation.style.display = "none";
//     } else {
//         navigation.style.display = "block";
//     }
// });

// Course data
const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
        technology: ["Python"],
        completed: false
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
        technology: ["HTML", "CSS"],
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
        technology: ["Python"],
        completed: false
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
        technology: ["C#"],
        completed: true
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: true
    }
];

// Buttons
const btnAll = document.getElementById("btn-all");
const btnCse = document.getElementById("btn-cse");
const btnWdd = document.getElementById("btn-wdd");

// Function to display course list
async function showCourseList(filteredCourses) {
    const courseGrid = document.getElementById("grid-course");
    let totalCredits = 0;

    // Clear previous content
    courseGrid.innerHTML = "";

    // Calculate total credits of completed courses
    totalCredits = filteredCourses.reduce((sum, course) => 
        course.completed ? sum + course.credits : sum, 0
    );

    // Update total credits display
    document.getElementById("total-credits").textContent = `Total Credits: ${totalCredits}`;

    // Display courses
    filteredCourses.forEach((course) => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");
        if (course.completed) {
            courseDiv.classList.add("completed");
        }
        courseDiv.textContent = `${course.subject} ${course.number}`;
        courseGrid.appendChild(courseDiv);
    });
}

// Event listeners for filtering courses
btnAll.addEventListener("click", () => {
    showCourseList(courses);
});

btnCse.addEventListener("click", () => {
    showCourseList(courses.filter(course => course.subject === "CSE"));
});

btnWdd.addEventListener("click", () => {
    showCourseList(courses.filter(course => course.subject === "WDD"));
});

// Show all courses initially
showCourseList(courses);
