express = require('express')
app = express()
port = 3000
Student = require('./database.js')

app.listen(port, ()=> {console.log(`running on ${port}`)})

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async(req, res) => {
    Students = await  Student.find();
    res.render('index.ejs', {
        page: "CRUD with express & Mongoose",
        title : "Read, & Delete Operations ",
        Students: Students})
})

app.post('/register', async(req, res)=>{
    const {name, mail, age} = req.body;
    newstudent = new StudentModel({
        name, mail, age 
    });
    studentsave = await newstudent.save();
    res.redirect('/');
})

app.get('/register', (req,res) => {
    res.render('register')
})

