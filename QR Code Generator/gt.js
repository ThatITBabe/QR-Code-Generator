<!DOCTYPE html>
<html>
<head>
  <title>QR Code Generator</title>
  <style>
    #qrCode {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>QR Code Generator</h1>
  <input type="text" id="textInput" placeholder="Enter text"/>
  <button onclick="generateQRCode()">Generate QR Code</button>
  <div id="qrCode"></div>

  <script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>
  <script>
    function generateQRCode() {
      var text = document.getElementById('textInput').value;
      var qrCodeElement = document.getElementById('qrCode');

      if (text === '') {
        qrCodeElement.innerHTML = 'Please enter text.';
        return;
      }

      qrCodeElement.innerHTML = '';

      var qrCode = new QRCode(qrCodeElement, {
        text: text,
        width: 128,
        height: 128
      });
    }
  </script>
</body>
</html>
