document.addEventListener("DOMContentLoaded", () => {
  const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent); // Detect mobile devices
  const elements = document.querySelectorAll(".teste");

  if (isMobile) {
    elements.forEach((element) => {
      element.addEventListener("touchstart", () => {
        // Add the hover-active class
        console.log("ovo");
        element.classList.add("hover-active");

        // Remove the class after 2 seconds
        setTimeout(() => {
          element.classList.remove("hover-active");
        }, 2000);
      });
    });
  }
});
