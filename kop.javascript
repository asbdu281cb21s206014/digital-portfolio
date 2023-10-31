// Define your projects as an array of objects
const projects = [
    {
        title: "Project 1",
        description: "Description of Project 1.",
        imageUrl: "project1.jpg",
    },
    {
        title: "Project 2",
        description: "Description of Project 2.",
        imageUrl: "project2.jpg",
    },
    // Add more projects as needed
];

// Function to populate the portfolio section with projects
function populatePortfolio() {
    const projectList = document.getElementById("project-list");
    
    projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        
        const projectImage = document.createElement("img");
        projectImage.src = project.imageUrl;
        projectImage.alt = project.title;
        
        const projectTitle = document.createElement("h3");
        projectTitle.textContent = project.title;
        
        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;
        
        projectDiv.appendChild(projectImage);
        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        
        projectList.appendChild(projectDiv);
    });
}

// Call the populatePortfolio function when the page loads
window.addEventListener("load", populatePortfolio);
