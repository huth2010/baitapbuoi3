//steps install a project nodejs
//1. write "npm init" in terminal
//2. create index.js file
//3. install express
//4. write program in index.js file
//5. create ui => set views engine
//   => require modul {engine} form handlebars & path to change _dirname
//   => app set engine => app set endpoin views engine=> app set _dirname views 
//   => create layout/main.hbs
//6. share all of file => mvc =>routes in src, controller in src/app
//   => require(route)
//   => use route
//7. config mongoDB in src/config/db => require in src/index.js
//   => create model in src/app/models
//   => require model in classControllers to use
//   => create a file to support convert resutl of mongoose to json
//8. have to require 'method-override' modul to delete =>app.use(methodOverride('_method))
//9. do you want add a new product
//   => you have to enable urlencoded => app.use(express.ulrencoded)
//10. dow you want delete or update a product 
//   => you must create a form 
//   => set action and override '?_method=....', make sure action is correct with router
const express=require('express')
const app=express()
const path=require('path')
const {engine}= require('express-handlebars')
const Route=require('./routes/index')
const db=require('./Config/db/index')
const methodOverride=require('method-override')
const port=3000
//template engine
app.engine('.hbs',engine({
    extname: '.hbs',
    helpers: {
        sum: (a,b)=>a+b,
    }
}))
app.set('view engine','.hbs')
app.set('views',path.join(__dirname,'resources/views'))
//find _dirname by modul called "path" & use json(_dirname,".//..") function
//console.log('path',path.join(__dirname,'resources/views'))
// //use body
 app.use(express.urlencoded({extended: true}));
// app.use(express.json());
//connect db
db.connect()
//
app.use(methodOverride('_method'))

Route(app)

app.listen(port)