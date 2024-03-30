const express = require("express");
const router = express.Router();
const batchController = require("../controller/batchController");

router.post("/batches", batchController.createBatch);
router.get("/batches", batchController.getAllBatches);
router.get("/batches/:id", batchController.getBatchById);
router.post("/batches/:id", batchController.updateBatchById);
router.delete("/batches/:id", batchController.deleteBatchById);

module.exports = router;
