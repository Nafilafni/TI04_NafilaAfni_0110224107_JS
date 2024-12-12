document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous errors
    const errors = document.querySelectorAll(".error");
    errors.forEach(error => error.textContent = "");
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.classList.remove("invalid", "valid"));

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const departureTime = document.getElementById("departureTime").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const ticketCount = document.getElementById("ticketCount").value.trim();

    // Validation flags
    let isValid = true;

    // Validasi nama pelanggan
    if (!name || name.length > 30) {
        isValid = false;
        const error = "Nama pelanggan harus diisi dan maksimal 30 karakter.";
        document.getElementById("nameError").textContent = error;
        document.getElementById("name").classList.add("invalid");
    } else {
        document.getElementById("name").classList.add("valid");
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        isValid = false;
        const error = "Email tidak valid.";
        document.getElementById("emailError").textContent = error;
        document.getElementById("email").classList.add("invalid");
    } else {
        document.getElementById("email").classList.add("valid");
    }

    // Validasi jam keberangkatan
    const timeRegex = /^([01]\d|2[0-3])\.[0-5]\d$/;
    if (!departureTime || !timeRegex.test(departureTime)) {
        isValid = false;
        const error = "Jam harus dalam format HH.MM (00.00 - 23.59).";
        document.getElementById("timeError").textContent = error;
        document.getElementById("departureTime").classList.add("invalid");
    } else {
        document.getElementById("departureTime").classList.add("valid");
    }

    // Validasi tujuan
    if (!destination) {
        isValid = false;
        const error = "Tujuan Keberaangkatan harus diisi.";
        document.getElementById("destinationError").textContent = error;
        document.getElementById("destination").classList.add("invalid");
    } else {
        document.getElementById("destination").classList.add("valid");
    }

    // Validasi jumlah tiket
    const ticket = parseInt(ticketCount, 10);
    if (!ticketCount || isNaN(ticket) || ticket < 1 || ticket > 10) {
        isValid = false;
        const error = "Jumlah tiket harus bilangan bulat antara 1 dan 10.";
        document.getElementById("ticketError").textContent = error;
        document.getElementById("ticketCount").classList.add("invalid");
    } else {
        document.getElementById("ticketCount").classList.add("valid");
    }

    // Display form data if valid
    if (isValid) {
        const result = `
            <p>Nama Pelanggan: ${name}</p>
            <p>Email: ${email}</p>
            <p>Jam Keberangkatan: ${departureTime}</p>
            <p>Tujuan Keberangkatan: ${destination}</p>
            <p>Jumlah Tiket: ${ticket}</p>
        `;
        document.getElementById("result").innerHTML = result;
    }
});