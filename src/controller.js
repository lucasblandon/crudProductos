//var Sequelize = require('sequelize');

const controller= {}
var Products = require('./models/Products');


controller.index = (req,res)=>{
    const data = {
        name : "Daniel B",
        age : 21,
        city : "Medellin"
    }
    res.json(data); 
};

controller.list= async(req,res)=>{
    try{
        const response = await Products.findAll()
        .then(function(data){
            const res = {success:true, data:data }
            return res;
        })
        .catch(error=>{
            const res = {sucess: false, error: error}
            return res;
        })
        return res.json(response);
    }catch(e){
        console.log("Error controller.list");
    }
};

controller.create = async ( req, res) =>{

    try {
  
      const response = await Products.create({
        name:"Daniel Perez",
        email:"Daniel@smith.com",
        address:"Cll 300 Malibu",
        phone:"98765432"
      })
      .then(function(data){
        const res = { success: true, data: data, message:"created successful, ok" }
        return res;
      })
      .catch(error=>{
        const res = { success: false, error: error }
        return res;
      })
      res.json(response);
  
    } catch (e) {
      console.log(e);
    }
  }

module.exports = controller;