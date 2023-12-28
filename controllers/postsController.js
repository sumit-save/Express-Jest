const postsModel = require("../models/postsModel");

module.exports.add = async (req, res) => {
    try {
        const newPost = new postsModel({
            title: req.body.title,
            description: req.body.description,
            isActive: req.body.isActive
        });
        const savedPost = await newPost.save();
        return res.status(201).json({ message: "post added successfully", data: savedPost });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

module.exports.all = async (req, res) => {
    try {
        const allPosts = await postsModel.find({});
        return res.status(200).json({ message: "posts fetched successfully", data: allPosts });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

module.exports.show = async (req, res) => {
    try {
        const specificPost = await postsModel.findOne({ _id: req.params._id });
        return res.status(200).json({ message: "post fetched successfully", data: specificPost });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

module.exports.update = async (req, res) => {
    try {
        const updatePost = await postsModel.updateOne({ _id: req.params._id }, { $set: { title: req.body.title, description: req.body.description, isActive: req.body.isActive } });
        return res.status(200).json({ message: "post updated successfully", data: updatePost });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

module.exports.remove = async (req, res) => {
    try {
        const removePost = await postsModel.deleteOne({ _id: req.params._id });
        return res.status(200).json({ message: "post removed successfully", data: removePost });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};
