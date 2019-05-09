require('./models/user');

var mongoose = require('mongoose');
const ObjectId = mongoose.ObjectId;
var express = require('express');

const User = mongoose.model('User');
var database = require('../config/database');
const moment = require('moment');

var router = express.Router();


//api without authentication



function configureRoutes(router) {

    router.post('/api/user', function (req, res) {
        var user = new User(req.body);
        user.save(function (err, data) {
            if (err) {
                res.status(400).send(err);
            } else {
                res.status(200).send(data);
            }
        })
    });

    router.put('/api/:userId/user/:friendId', function (req, res) {
        User.findOne({"_id": req.params.userId}).exec().then(data => {
            var friends = [];
            if(data.friends.indexOf(req.params.friendId) == -1){
                data.friends.forEach(function(element){
                    friends.push(element.toString())
                })
                friends.push(req.params.friendId);
                data.friends = friends;
                data.save(function (err, info) {
                    if (err) {
                        console.log('err',err)
                        res.status(400).send(err);
                    } else {
                        User.findOne({"_id": req.params.friendId}).exec().then(data => {
                            console.log(data);
                            var friends = [];
                            if(data.friends.indexOf(req.params.userId) == -1){
                                data.friends.forEach(function(element){
                                    friends.push(element.toString())
                                })
                                friends.push(req.params.userId);
                                data.friends = friends;
                                data.save(function (err, info) {
                                    if (err) {
                                        console.log('err',err)
                                        res.status(400).send(err);
                                    } else {
                                        res.status(200).send(info);
                                    }
                                })
                            } else {
                                res.status(400).send("already friends");
                            }
                        })
                    }
                })
            }else{
                res.status(400).send("already friends");
            }
        })
    });

    router.get('/api/users', function (req, res) {
        User.find({}).exec().then(data => {
            res.status(200).send(data);
        })
    });

    router.get('/api/user/:userId', function (req, res) {
        User.findOne({"_id": req.params.userId}).populate('friends').exec().then(data => {
            console.log('data---',data);
            res.status(200).send({firstName : data.firstName, friends : data.friends});
        })
    });


}

module.exports = configureRoutes;
