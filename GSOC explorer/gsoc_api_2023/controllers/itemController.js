const Item = require('../models/item');

exports.getItems = async (req, res, next) => {
  try {
    const items = await Item.find();
    res.status(200).json({ success: true, data: items });
  } catch (err) {
    next(err);
  }
};

// @desc    Create a new item
// @route   POST /api/items
exports.createItem = async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};
