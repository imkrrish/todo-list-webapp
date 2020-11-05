const express = require('express');
const bodyparser = require('body-parser')

const app = express();

var items = [];

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US",options);


    res.render('list', { KindOfDay: day, NewListItems: items });
});

app.post("/", function(req,res){
    var item = req.body.newitem;

    items.push(item);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("server is running at port 3000");
});
