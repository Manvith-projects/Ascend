document.addEventListener('DOMContentLoaded', () => {
    const industryTypeSelect = document.getElementById('industry-type');
    const roleCategorySelect = document.getElementById('role-category');
    const departmentSelect = document.getElementById('department');
    const skillsPanel = document.getElementById('skills-panel');
    const jobForm = document.getElementById('job-form');
    const outputContainer = document.getElementById('output-container');

    // Populate dropdowns from dataset (example dataset provided as JSON)
    const dataset = {
        industryTypes: ["IT", "Healthcare", "Finance"],
        roleCategories: ["Developer", "Analyst", "Manager"],
        departments: ["Engineering", "Research", "Sales"],
        skills: {
            "IT": ["JavaScript", "Python", "HTML", "CSS"],
            "Healthcare": ["Nursing", "Pharmacy", "Patient Care"],
            "Finance": ["Accounting", "Taxation", "Investment"]
        }
    };

    // Populate dropdowns
    populateDropdown(industryTypeSelect, dataset.industryTypes);
    populateDropdown(roleCategorySelect, dataset.roleCategories);
    populateDropdown(departmentSelect, dataset.departments);

    function populateDropdown(dropdown, options) {
        options.forEach(option => {
            const opt = document.createElement('option');
            opt.value = option;
            opt.textContent = option;
            dropdown.appendChild(opt);
        });
    }

    // Check if all dropdowns have been selected
    function allDropdownsSelected() {
        return industryTypeSelect.value && roleCategorySelect.value && departmentSelect.value;
    }

    // Populate skills panel based on selections
    function populateSkillsPanel() {
        if (allDropdownsSelected()) {
            const industryType = industryTypeSelect.value;
            skillsPanel.innerHTML = '';
            if (dataset.skills[industryType]) {
                dataset.skills[industryType].forEach(skill => {
                    const checkboxContainer = document.createElement('div');
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.name = 'skills';
                    checkbox.value = skill;
                    const label = document.createElement('label');
                    label.textContent = skill;
                    checkboxContainer.appendChild(checkbox);
                    checkboxContainer.appendChild(label);
                    skillsPanel.appendChild(checkboxContainer);
                });
            }
        } else {
            skillsPanel.innerHTML = '';
        }
    }

    industryTypeSelect.addEventListener('change', populateSkillsPanel);
    roleCategorySelect.addEventListener('change', populateSkillsPanel);
    departmentSelect.addEventListener('change', populateSkillsPanel);

    // Handle form submission
    jobForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(jobForm);
        const data = {
            industryType: formData.get('industry-type'),
            roleCategory: formData.get('role-category'),
            department: formData.get('department'),
            skills: formData.getAll('skills')
        };

        // Concatenate inputs for backend processing
        const inputText = `${data.industryType} ${data.department} ${data.roleCategory} ${data.skills.join(' ')}`;

        // Send data to backend for ML model processing
        const response = await fetch('/api/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input: inputText })
        });

        const result = await response.json();
        displayOutput(result);
    });

    function displayOutput(result) {
        outputContainer.innerHTML = `<p>Recommended Job Role: ${result.predictedRole}</p>`;
    }
});
