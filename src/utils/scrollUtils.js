/**
 * Scrolls to a specific section on the page
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Optional offset from the top (default: 80px for header height)
 */
export const scrollToSection = (sectionId, offset = 80) => {
  // Remove the # if it's included
  const id = sectionId.startsWith('#') ? sectionId.substring(1) : sectionId;
  
  // Find the element
  const element = document.getElementById(id);
  
  if (element) {
    // Get the element's position
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    // Scroll to the element
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
