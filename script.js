document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const contactList = document.getElementById("contact-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!name | !email | !phone) {
      alert("لطفاً همه فیلدها را پر کنید.");
      return;
    }

    const contactCard = document.createElement("div");
    contactCard.className = "contact-card";
    contactCard.innerHTML = `
      <p><strong>نام:</strong> ${name}</p>

      <p><strong>ایمیل:</strong> ${email}</p>

      <p><strong>شماره:</strong> ${phone}</p>

      <button class="delete-btn">حذف</button>
    `;

    contactCard.querySelector(".delete-btn").addEventListener("click", () => {
      contactCard.remove();
    });

    contactList.appendChild(contactCard);
    form.reset();
  });
});