// ----- Navbar toggle -----
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("site-nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
    navToggle.setAttribute("aria-expanded", !expanded);
    siteNav.classList.toggle("open");
  });
}

// ----- Reserva form validation -----
const bookingForm = document.getElementById("bookingForm");
const formMsg = document.getElementById("formMsg");

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(bookingForm);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const date = formData.get("date");
    const time = formData.get("time");
    const guests = formData.get("guests");

    if (!name || !email || !date || !time || !guests) {
      formMsg.textContent = "Por favor completa todos los campos.";
      formMsg.style.color = "#e63946";
      formMsg.hidden = false;
      return;
    }
    formMsg.textContent = "¡Tu solicitud de reserva fue enviada con éxito! Te contactaremos pronto.";
    formMsg.style.color = "#4caf50";
    formMsg.hidden = false;

    bookingForm.reset();
  });
}

// ----- Año dinámico en footer -----
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
