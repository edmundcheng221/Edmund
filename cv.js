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
                    major: "Bachelor of Science, Mechanical Engineering, Aerospace Specialization",
                    honors: ["GPA: 3.10, NYU Tandon Scholarship, NYU Trio Scholar"]

               /*     notableCourses: [
                        "SolidWorks 3D Modeling",
                        "Finite Element Analysis"
                ]   */                
                }
            },
            work: [
                {
                    duration: "-",
                    title: "-",
                    company: "-",
                    responsibilities: [
                        "-"
                    ]
                },
                {
                    duration: "-",
                    title: "-",
                    company: "-",
                    responsibilities: [
                        "-"
                    ]
                },
                {
                    duration: "-",
                    title: "-",
                    company: "-",
                    responsibilities: [
                        "-",
                        "-",
                        "-"
                     
                    ],
                  //  hideForResume: true
                },
                {
                    duration: "",
                    title: "",
                    company: "",
                    responsibilities: [
                        "",
                        ""
                    ]
                },
                {
                    duration: "-",
                    title: "-",
                    company: "-",
                    responsibilities: [
                        "-",
                        "-"
                    ],
                 //   hideForResume: true
                }
            ],
            schoolProjects: [
                {
                    duration: "-",
                    title: "-",
                    responsibilities: [
                        "-",
                        "-"
   
                    ]
                }
               





            ],
            skills: [
                {
                    category: "Programming Languages (Relevant Frameworks and Libraries)",
                    items: [
                        "JavaScript/TypeScript (Angular)",
                        "Python (Django)",
                        "Matlab",
                        "Simulink",
                        "HTML/CSS"
                    ]
                },
                {
                    category: "Software Tools and Suites",
                    items: [
                        "SolidWorks",
                        "AutoCAD",
                        "ANSYS",
                        "Microsoft Office"
                    ]
                },
                {
                    category: "Miscellaneous",
                    items: [
                        "Fluent in Cantonese and English",
                        "Weightlifter"
                        
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
    generateWork();
    generateSchoolProjects();
    generateSkills();
    cv();
}

initialLoad();
