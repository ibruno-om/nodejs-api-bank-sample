const app = require('./app');
const cors = require("cors")

app.user(cors);

app.listen(process.env.PORT || 3000);