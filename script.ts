// script.ts

// Get the button and the skills section
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

// Add a click event listener to the button
toggleButton.addEventListener('click', () => {
    // Toggle the visibility of the skills section
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});
