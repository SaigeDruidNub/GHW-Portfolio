const projects = [
  {
    title: "Personal Portfolio Website",
    description: "A responsive website to showcase my projects and skills.",
    technologies: ["HTML", "CSS", "JavaScript"],
  }];

  function displayProjects() 
    {   
    const projectContainer = document.getElementById("project-container");
    projects.forEach((project) => {
      const projectElement = document.createElement("div");
      projectElement.classList.add("project"); 

        const titleElement = document.createElement("h2");
        titleElement.textContent = project.title;
        projectElement.appendChild(titleElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = project.description;
        projectElement.appendChild(descriptionElement);

        projectContainer.appendChild(projectElement);
    });
}