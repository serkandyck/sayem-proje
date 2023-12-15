const express = require('express');
let app = express();


require('dotenv').config()

// Env üzerinden çalıştırılan port numarasını alıyor belirtilen yoksa 3000 portunu kullanıyor
const PORT = process.env.PORT || 3000;

// NodeJS view engine ejs
app.set("view engine", "ejs");


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
