const Company = require("../models/Company");

const getCompanyInfo = async (req, res) => {
    try {
        const companyInfo = await Company.findOne();
        console.log(companyInfo)
        if (!companyInfo) {
            return res.status(404).json({ message: "Company info not found" });
        }
        res.status(200).json(companyInfo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const someOtherFunction = () => {};

module.exports = {
    getCompanyInfo,
    someOtherFunction,
};
