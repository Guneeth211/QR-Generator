document.getElementById("generate-btn").addEventListener("click", () => {
    const text = document.getElementById("text-input").value;
  
    if (!text) {
      alert("Please enter text or a URL!");
      return;
    }
  
    const qrCodeContainer = document.getElementById("qr-code");
    qrCodeContainer.innerHTML = ""; // Clear any existing QR Code
  
    const qrCode = new QRCode(qrCodeContainer, {
      text: text,
      width: 256,
      height: 256,
    });
  });
  