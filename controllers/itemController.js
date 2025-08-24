const Item = require('../models/item');

exports.getItems = async (req, res) => {
    const items = await Item.findById(req.params.id);
    res.json(items);
};

exports.createItem = async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
};
