<script>
  
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent page reload

    // Send form data to Formspree
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    // Show popup messages
    if (response.ok) {
      alert("✅ Message sent successfully! I'll get back to you soon, Manideep.");
      form.reset();
    } else {
      alert("❌ Failed to send message. Please check your internet or try again later.");
    }
  });
</script>
