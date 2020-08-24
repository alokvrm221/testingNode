const User = require('../models/users.model')

const users =  {
    async create (req, res) {
        try {
            let user = new User(req.body)
            let result = await user.save();
            res.send( { status : 200 , "success" : true})
        }
        catch (err) {
            res.send( { status : 400 , "success" : true})
        }

    },
    async getUser(req , res) {
        try {
            let result = await User.find(req.params);
            res.send( { status : 200 , "success" : true , data : result})
        }
        catch (err) {
            res.send( { status : 400 , "success" : true  })
        }
    },
    async getUsersList (req, res){
        try {
            let result = await User.find({});
            res.send( { status : 200 , "success" : true , data :result })
        }
        catch (err) {
            res.send( { status : 400 , "success" : true})
        }
    },
    async update  (req, res) {
        try {
            let id = req.body
            let result = await User.find({ id : id});
            if(result) {

                let user = new User(req.body)
                let result = await user.save();
                res.send( { status : 200 , "success" : true})
            }
           else {
                res.send( { status : 400 , "success" : true})
            }
        }
        catch (err) {
            res.send( { status : 400 , "success" : true})
        }
    },

    async search(req, res) {
        try {
            let result = await User.find(req.query);

            res.send( { status : 200 , "success" : true , data :result })
        }
        catch (err) {
            res.send( { status : 400 , "success" : true})
        }
    }

}

module.exports = users
