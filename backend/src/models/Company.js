const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    company_id: {type: String, required: true},
    address: String,
    phone: String,
    email: String,
    about: String
}, {timestamps: true, collection: "company_info"});

module.exports = mongoose.model("Company", companySchema)