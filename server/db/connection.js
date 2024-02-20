const mongoose = require('mongoose');

// Update the URI to include the database name after the '@'
const url = "mongodb+srv://pft:pft@2024@pft-db.p0oqhkc.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))
