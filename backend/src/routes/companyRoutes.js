const express = require("express");
const router = express.Router();

const companyController = require("../controllers/companyController");

router.get("/info", companyController.getCompanyInfo);

module.exports = router;