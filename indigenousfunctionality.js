

document.addEventListener("DOMContentLoaded", () => {
    // Handle Tour Guide Sign-Up Submission
    const guideForm = document.querySelector(".signup-section form");
    guideForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const availability = document.getElementById("availability").value;
      const experience = document.getElementById("experience").value;
  
      const newGuide = {
        name,
        email,
        availability,
        experience,
      };
  
      console.log("New Tour Guide Signup:", newGuide);
      console.log("New Tour Promotion:", newGuide);
      const customAlert = document.getElementById("guide-alert");
const closeAlert = document.getElementById("guide-alert");

customAlert.classList.remove("hidden");

closeAlert.addEventListener("click", () => {
  customAlert.classList.add("hidden");
});
      guideForm.reset();
    });
  
    // Handle Trail Description Edit Submission
    const descriptionForm = document.querySelector(".edit-description-section form");
    descriptionForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const editedDescription = document.getElementById("trail-description").value;
  
      console.log("Edited Trail Description:", editedDescription);
      console.log("New Tour Promotion:", editedDescription);
      const customAlert = document.getElementById("description-alert");
const closeAlert = document.getElementById("description-alert");

customAlert.classList.remove("hidden");

closeAlert.addEventListener("click", () => {
  customAlert.classList.add("hidden");
});

      descriptionForm.reset();
    });
  
    // Handle Tour Promotion Submission
    const promotionForm = document.querySelector(".tour-promotion-section form");
    promotionForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const tourTitle = document.getElementById("tour-title").value;
      const tourDetails = document.getElementById("tour-details").value;
  
      const tourPost = {
        tourTitle,
        tourDetails,
      };
  
      console.log("New Tour Promotion:", tourPost);
      const customAlert = document.getElementById("custom-alert");
const closeAlert = document.getElementById("close-alert");

customAlert.classList.remove("hidden");

closeAlert.addEventListener("click", () => {
  customAlert.classList.add("hidden");
});

      promotionForm.reset();
    });
  });
  