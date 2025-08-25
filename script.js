// Example jobs
const jobs = [
  {
    title: "Data Scientist",
    company: "Tech Corp",
    location: "Remote",
    description: "Work on ML pipelines, NLP models, and production data science solutions.",
    link: "#"
  },
  {
    title: "GenAI Engineer",
    company: "AI Labs",
    location: "Bangalore, India",
    description: "Develop and deploy LLM, RAG systems, and AI apps.",
    link: "#"
  },
  {
    title: "Azure Databricks Specialist",
    company: "CloudWorks",
    location: "Hyderabad, India",
    description: "Optimize big data pipelines using Spark & Databricks on Azure.",
    link: "#"
  }
];

const jobsSection = document.getElementById("jobs");

jobs.forEach(job => {
  const card = document.createElement("div");
  card.className = "job-card";
  card.innerHTML = `
    <h2>${job.title}</h2>
    <p><strong>${job.company}</strong> - ${job.location}</p>
    <p>${job.description}</p>
    <a href="${job.link}" class="apply-btn">Apply</a>
  `;
  jobsSection.appendChild(card);
});
