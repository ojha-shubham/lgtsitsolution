const express = require("express");
const router = express.Router();

const companyRoutes = require('../src/routes/companyRoutes');

router.use('/company', companyRoutes);

module.exports = router;
