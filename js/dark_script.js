// Note: CodePen does not allow use of local
// storage (for sensible security reasons).
// If you're adding this code to your own site,
// reinstate the commented-out lines and the
// code will work fully.

const setDarkMode = (active = false) => {
    const wrapper = document.querySelector(":root");
    if (active) {
      wrapper.setAttribute("data-theme", "dark");
      // localStorage.setItem("theme", "dark");
    } else {
      wrapper.setAttribute("data-theme", "light");
      // localStorage.setItem("theme", "light");
    }
  };
  
  const toggleDarkMode = () => {
    const theme = document.querySelector(":root").getAttribute("data-theme");
    // If the current theme is "light", we want to activate dark
    setDarkMode(theme === "light");
  };
  
  const initDarkMode = () => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    // const themePreference = localStorage.getItem("theme");
  
    let active = false; // Start with light mode always
  
    setDarkMode(active);
  
    query.addListener(e => setDarkMode(e.matches));
  
    const toggleButton = document.querySelector(".js__dark-mode-toggle");
    toggleButton.addEventListener("click", toggleDarkMode);
  };
  
  initDarkMode();
  