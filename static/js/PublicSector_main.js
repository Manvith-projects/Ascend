document.addEventListener('DOMContentLoaded', () => {
    const sectorsGrid = document.querySelector('.slider-track');
    const jobsSection = document.getElementById('jobs-section');
    const jobsGrid = document.getElementById('jobs-grid');
    const sectorTitle = document.getElementById('sector-title');
    const backButton = document.getElementById('back-button');
    const modal = document.getElementById('job-modal');
    const closeButton = document.querySelector('.close-button');
    const modalBody = document.getElementById('modal-body');

    // Display all sectors
    function displaySectors() {
        const sectorsList = [...jobData.sectors, ...jobData.sectors];
        sectorsGrid.innerHTML = '';

        sectorsList.forEach(sector => {
            const sectorCard = document.createElement('div');
            sectorCard.className = 'card sector-card';
            sectorCard.innerHTML = `
                <div class="card-image">
                    <img src="${sector.imageUrl}" alt="${sector.name}" />
                </div>
                <h3>${sector.name}</h3>
                <p>${sector.description}</p>
            `;
            sectorCard.addEventListener('click', () => showJobs(sector));
            sectorsGrid.appendChild(sectorCard);
        });
    }

    // Display jobs for selected sector
    function showJobs(sector) {
        jobsSection.classList.remove('hidden');
        document.getElementById('sectors-grid').classList.add('hidden');
        sectorTitle.textContent = sector.name;

        jobsGrid.innerHTML = '';
        const sectorJobs = jobData.jobs[sector.id] || [];
        const jobsList = [...sectorJobs, ...sectorJobs];

        jobsList.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'card job-card';
            jobCard.innerHTML = `
                <div class="card-image">
                    <img src="${job.imageUrl}" alt="${job.title}" />
                </div>
                <h3>${job.title}</h3>
                <p>${job.brief}</p>
            `;
            jobCard.addEventListener('click', () => showJobDetails(job));
            jobsGrid.appendChild(jobCard);
        });
    }

    // Show detailed job information in modal
    function showJobDetails(job) {
        modalBody.innerHTML = `
            <h2>${job.title}</h2>
            <div class="job-details">
                <div class="job-image">
                    <img src="${job.imageUrl}" alt="${job.title}" />
                </div>
                
                <h3>Description:</h3>
                <p>${job.description || 'Description not available'}</p>
                
                <h3>Key Duties:</h3>
                <ul>
                    ${job.duties ? job.duties.map(duty => `<li>${duty}</li>`).join('') : '<li>Not specified</li>'}
                </ul>
                
                <h3>Skills Required:</h3>
                <ul>
                    ${job.skills ? job.skills.map(skill => `<li>${skill}</li>`).join('') : '<li>Not specified</li>'}
                </ul>
                
                <h3>Qualifications & Requirements:</h3>
                <p>${job.qualifications || 'Not specified'}</p>
                
                <h3>Additional Information:</h3>
                <p><strong>Work Environment:</strong> Hybrid/On-site based on company policy</p>
            </div>
        `;
        modal.style.display = 'block';
    }

    // Event Listeners
    backButton.addEventListener('click', () => {
        jobsSection.classList.add('hidden');
        document.getElementById('sectors-grid').classList.remove('hidden');
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Initialize the page
    displaySectors();
});
