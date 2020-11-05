const express = require('express');
const bodyparser = require('body-parser')

const app = express();

let items = [];

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US",options);


    res.render('list', { KindOfDay: day, NewListItems: items });
});

app.post("/", function(req,res){
    let item = req.body.newitem;

    items.push(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("server is running at port 3000");
});
