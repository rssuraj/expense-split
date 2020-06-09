var express = require(`express`),
    bodyParser = require(`body-parser`);

var indexRoutes = require(`./routes/index`);

var app = express();

//app Sets
app.set(`view engine`, `ejs`);

//App uses
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(`/`, indexRoutes);

const PORT = process.env.BPORT || 5000;

app.listen(PORT, process.env.IP, () => {
    console.log(`Server started on port ${PORT}`);
});
