const Events = require('../models/events');

module.exports = {};
  
module.exports.create = async (event) => {
  return await Events.create(event);
};

module.exports.getAll = async (calendarId) => {
  try {
    return await Events.find({calendarId: calendarId}).lean();
  } catch (e) {
    return null;
  }
};

module.exports.getById = async (id) => {
  try {
    const calendar = await Events.findOne({ _id: id }).lean();
    return calendar;
  } catch (e) {
    return null;
  }
};

module.exports.updateById = async (id, newData) => {
  try {
    const calendar = await Events.findOneAndUpdate({ _id: id }, newData, { new: true }).lean();
    return calendar;
  } catch (e) {
    return null;
  }
};

module.exports.removeById = async (id) => {
  try {
    return await Events.deleteOne({ _id: id });
  } catch (e) {
    return null;
  } 
};
