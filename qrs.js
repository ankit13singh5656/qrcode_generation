const express = require("express");
const qr = require('qrcode');
const app = express();

// Define QR code generation route
app.get("/qrcode", async (req, res) => {
    // Define the URL that you want to convert into a QR code
    const url = "https://ankit13singh5656.github.io/portfolio/";

    try {
        // Convert URL to QR code image representation
        const qrCodeUrl = await qr.toDataURL(url);

        // Respond with an HTML page containing the QR code
        res.send(`
            <html>
                <head>
                </head>
                <body>
                    <img src="${qrCodeUrl}" alt="QR Code">
                    <p>Scan the QR code to visit the website</p>
                </body>
            </html>
        `);
    } catch (err) {
        // Handle QR code generation error
        console.error(err);
        res.status(500).send("Internal server error");
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
