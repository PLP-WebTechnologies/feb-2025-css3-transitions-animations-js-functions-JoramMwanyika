// Get DOM elements
const lightThemeBtn = document.querySelector('.light-theme');
const darkThemeBtn = document.querySelector('.dark-theme');
const body = document.body;

// Function to set theme
function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        darkThemeBtn.classList.add('active');
        lightThemeBtn.classList.remove('active');
    } else {
        body.classList.remove('dark-mode');
        lightThemeBtn.classList.add('active');
        darkThemeBtn.classList.remove('active');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', isDark);
}

// Function to load saved theme preference
function loadThemePreference() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setTheme(isDark);
}

// Event listeners
lightThemeBtn.addEventListener('click', () => setTheme(false));
darkThemeBtn.addEventListener('click', () => setTheme(true));

// Load saved preference when page loads
document.addEventListener('DOMContentLoaded', loadThemePreference);
