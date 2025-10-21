const course = [
    {name : "HTML", level : "Beginner"},
    {name : "Python", level : "Intermediate"},
    {name : "MERN", level : "Beginner"},
    {name : "JAVA", level : "Advanced"},
    {name : "React", level : "Intermediate"},
]

course.push({name : "CSS",level :"Advanced"});
const filtered = course.filter(c => c.level === "Advanced");
const names = course.map(c => c.name);
console.log("Courses Name :" , names) ;

// display in home page
  const courseContainer = document.getElementById("course-Container");

  if(courseContainer){
    course.forEach(courses =>{
        const div = document.createElement("div");
        div.classList.add("courses");
        div.innerHTML=`
        <h3>${courses.name}</h3>
        <p>Level :${courses.level}</p>
        `;
        courseContainer.appendChild(div);
    });
  }