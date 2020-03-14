var format = "cv";
var resumeData = data();
var sectionHeader = "h3";
function data() {

    let data =
        {

            header: {
                name: "Edmund Cheng",
                tel: "(917) 615-3235",
                email: "ec3219@nyu.edu"

            },
            education: {
                college: {
                    institution: "New York University",
                    major: "B.S., Mechanical Engineering with Aerospace Specialization, 2021",
                    honors: ["GPA: 3.10, NYU Tandon Scholarship, NYU Trio Scholar"]

                    /*notableCourses: [
                        "SolidWorks 3D Modeling",
                        "Finite Element Analysis"
                ] */                  
                }
            },
            schoolProjects: [
                {
                    duration: "Jan. 2018-Jan. 2019",
                    title: "Soft Robotics Student Researcher",
                    responsibilities: [
                        "Simulation, material selection, design, construction and test of soft robotic structures.",
                        "Designed and programmed a soft robot wheel that contains pneumatically actuated channels",
                        "Designed and programmed a soft robot gripper which utilizes GeckSkin to grip flat surfaces"
   
                    ]
                },
                {
                    duration: "Feb.2018-May 2018",
                    title: "Robotic Car Design",
                    responsibilities: [
                        "Developed and programmed a cost effective robotic vehicle capable of traversing a predetermined route",
                        "Corrdinated with team, set goals, and implemented a plan to achieve those goals"
   
                    ]
                }





            ],
            work: [
                {
                    duration: "July 2019-Present",
                    title: "Engineering Project Assistant",
                    company: "NYU Tandon School of Engineering",
                    responsibilities: [
                        "Coordinate and prepare construction drawings and construction detailing for construction/renovation proects, and/or furniture installations",
                        "Coordinate scope and procurement of proposals from outside conultants or contractors",
                        "Review building codes to assure that design complies with the minimum legal standards",
                        "Survey TSoE facilities; develop and/or update existing or proposed plans using AutoCAD",
                        "Prepare designs for space planning layouts, including blocking and other duties as assigned by supervisors"
                    ]
                },
                {
                    duration: "June 2019-July 2019",
                    title: "Research Intern",
                    company: "Eisele Research Group",
                    responsibilities: [
                        "Worked alongside researchers in developing new material synthesis protocols",
                        "Carried out experiments relating to the development of nanoparticles",
                        "Collected and analyzed relevant data"
                    ]
                },
                {
                    duration: "Feb. 2019-May 2019",
                    title: "Software Engineering Intern",
                    company: "WILD Technologies AI Limited",
                    responsibilities: [
                        "Worked on back-end programming using the Django Framework",
                        "Worked on Front-end programming using the Angular framework",
                        "Interacted with developers and assist by writing code in Python 3.7 (Spyder IDE), HTML, CSS, Javascript, and TypeScript",
                        "Scraped relevant data using the Scrapy tool",
                        "Worked on building REST API using platforms such as node.js"
                     
                    ],
                  //  hideForResume: true
                },
                {
                    duration: "Aug. 2017-Present",
                    title: "Student Assistant",
                    company: "Bern Dibner Library of Science and Technology",
                    responsibilities: [
                        "Assist patrons in regard to locating and accessing library resources",
                        "Process books and keep track of library materials using the library’s databases",
                        "Perform clerical activities such as answering phones and sorting books",
                        "Assist in diagnosing and resolving minor technical issues faced by patrons at the library"
                    ]
                }
              //  {
              //      duration: "-",
               //     title: "-",
               //     company: "NYU Tandon School of Engineering",
               //     responsibilities: [
              //          "-",
              //          "-"
              //      ],
              //      hideForResume: true
              //  }
            ],
            
            skills: [
                {
                    category: "Programming Languages (Relevant Frameworks and Libraries)",
                    items: [
                        "JavaScript/TypeScript (Angular, node.js)",
                        "Python (Django)",
                        "Matlab",
                        "Simulink",
                        "HTML/CSS"
         
                    ]
                },
                {
                    category: "Software Tools, Version Control and Suites",
                    items: [
                        "SolidWorks",
                        "AutoCAD",
                        "ANSYS",
                        "Git",
                        "Microsoft Office",
                        "Scrapy"
                    ]
                },
                {
                    category: "Miscellaneous",
                    items: [
                        "Fluent in Cantonese and English"
                        
                    ]
                }
            ]
        };
    return data;
}

function cv() {
    d3.selectAll(".hide-for-resume")
        .attr("hidden", null);
}

function resume() {
    d3.selectAll(".hide-for-resume")
        .attr("hidden", true);
}

function generateHeader() {
    let section = d3.select("div.mainBody").append("section").attr("class", "introduction");
    section.append("h1").text(resumeData.header.name)
        .attr("id", "name");
    section.append("h3")
        .text(`Tel: ${resumeData.header.tel}`)
        .attr("id", "tel");
    section.append("h3")
        .text(`Email: ${resumeData.header.email}`)
        .attr("id", "email");
}

function generateEducation() {
    let section = d3.select("div.mainBody").append("section").attr("class", "education");
    section.append(sectionHeader)
        .text("Education")
        .attr("id", "header");
    let college = section.append("div")
        .attr("id", "college");
    college.append("div").append("strong")
        .text(resumeData.education.college.institution)
        .attr("id", "institution");
    college.append("div")
        .text(resumeData.education.college.major)
        .attr("id", "major");
    college.append("div")
        .text(`Honors: ${resumeData.education.college.honors.join(", ")}`)
        .attr("id", "honors");
        /*
    college.append("div")
        .text(`Notable Courses: ${resumeData.education.college.notableCourses.join(", ")}`)
        .attr("id", "courses");
        */
}
function generateSchoolProjects() {
    let section = d3.select("div.mainBody").append("section").attr("class", "school-projects");
    section.append(sectionHeader)
        .text("Projects")
        .attr("id", "header")
    let projects = section.append("div")
        .attr("id", "project-container");
    let projectsData = projects.selectAll("div")
        .data(resumeData.schoolProjects)
        .enter().append("div")
        .attr("id", "single-project")
        .attr("class", function(d) { return hideForResume(d); });
    let projectHeader = projectsData.append("div")
        .attr("id", "item-header");
    projectHeader.append("span")
        .attr("id", "project-name")
        .append("strong")
        .text(function(d) {
            return d.title;
        });
    projectHeader.append("span")
        .attr("id", "duration")
        .append("strong")
        .text(function(d) {
            return d.duration;
        });
    projectsData.append("div").append("ul")
        .selectAll("li")
        .data(function(d) {
            return d.responsibilities;
        }).enter().append("li")
        .text(function(d) {
            return d;
        }); 
}

function generateWork() {
    let section = d3.select("div.mainBody").append("section").attr("class", "work");
    section.append(sectionHeader)
        .text("Work Experience")
        .attr("id", "header");
    let workExperience = section.append("div")
        .attr("id", "work-container");
    let workData = workExperience.selectAll("div")
        .data(resumeData.work)
        .enter().append("div")
        .attr("id", "single-work")
        .attr("class", function(d) { return hideForResume(d); });
    let itemHeader = workData.append("div")
        .attr("id", "item-header");
    itemHeader.append("span")
        .attr("id", "company-role")
        .append("strong")
        .text(function (d) {
            return `${d.company}, ${d.title}`;
        });
    itemHeader.append("span")
        .attr("id", "duration")
        .append("strong")
        .text(function (d) {
            return d.duration;
        });
    workData.append("div").append("ul")
        .selectAll("li")
        .data(function (d) {
            return d.responsibilities;
        }).enter().append("li")
        .text((function (d) {
            return d;
        }));
}


function generateSkills() {
    let section = d3.select("div.mainBody").append("section").attr("class", "skills");
    section.append(sectionHeader)
        .text("Skills")
        .attr("id", "header");
    
    let skills = section.append("div")
        .attr("id", "container")
        .selectAll("div")
        .data(resumeData.skills).enter().append("div")
        .attr("id", "skills");
    skills.append("span")
        .attr("id", "category")
        .append("strong")
        .text(function(d) {
            return `${d.category}: `;
        });
    skills.append("span")
        .text(function(d) {
            return d.items.join(", ");
        })
        .attr("id", "skill");
}

function hideForResume(d) {
    if (d.hideForResume === true) {
        return "hide-for-resume";
    }
    return "always-display";

}

function toggleFormat() {
    if (format === "resume") {
        format = "cv";
        cv();
    } else {
        format = "resume";
        resume();
    }
    console.log(`Viewing ${format} mode`);
}

function dumpToConsole() {
    console.log(format);
    console.log(data());
}

function initialLoad() {
    format = "cv";
    generateHeader();
    generateEducation();
    generateSchoolProjects();
    generateWork();
    generateSkills();
    cv();
}

initialLoad();

            
