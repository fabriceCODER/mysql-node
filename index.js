const express = require('express')
const mysql = require('mysql')

//create connection

const db = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: ''
})

//connect to mysql
db.connect(err => {
     if(err){
          throw err
     }
console.log('MySQL Connected')
     
})

const app = express()

//create database

app.get('/createdb', (req, res)=>{
     let sql = 'CREATE DATABASE nodemysql'
     db.query(sql, err =>{
          if(err){
               throw err
          }
          res.status(501).send('Database created')
     })
})
//create table 
app.get('/createemployee', (req, res)=>{
     let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(344), email VARCHAR(555), designation VARCHAR(255), PRIMARY KEY(id)'
     db.query(sql, err =>{
          if(err){
               throw err
          }
          res.status(303).send('Employee created')
     })
})

//insert into employee
app.get('/employee1', (req,res)=>{
     let post = {name: 'ish fab', designation:'CEO'}
     let sql = 'INSERT INTO employee SET ?'
     let query = db.query(sql, post, err)=>{
          if(err){
               throw err
          }
          res.status(501).send('Employee added')
     }
})

//select employee

app.get('/getemployee', (req, res)=>{
     let sql = 'SELECT * FROM employee'
     let query = db.query(sql, (err, result)=>{
          if(err){
               throw err
          }
          console.log(result)
          res.status(501).send('Employee details fetched')
     })
})

//update employee

app.get('/updateemployee', (req, res)=>{
     let newName = 'updated name'
     let sql = 'UPDATE employee SET' = `${newName} WHERE id = ${req.params.id}`

     let query = db.query(sql, err)=>{
          if(err){
               throw err
          }
          res.status(501).send('employee updated')
     }
})
//delete employee
app.get('/deleteemployee',(req, res)=>{
  let sql = `DELETE FROM employee WHERE id = ${req.params.id}`
  let query = db.query(sql, err)=>{
    if(err){
     throw err
    }
    res.status(501).send('employee deleted')
  }
})
 app.listen(2222, (req,res)=>{
     console.log('Server started on port 2222')
 })
