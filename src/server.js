const app = require('./app');
const cors = require("cors")

app.use(cors);

app.listen(process.env.PORT || 3000);