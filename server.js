const app = require("./app.js"); 

require("dotenv").config();
const PORT = process.env.PORT || 2020;
app.listen(PORT, () => {
    console.log(`Players live on port: ${PORT}`)
});