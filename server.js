const app = require("./app.js"); 

require("dotenv").config();
const PORT = process.env.PORT || 2020;
app.listen(PORT, () => {
    console.log(`Bookmarks live on port: ${PORT}`)
});