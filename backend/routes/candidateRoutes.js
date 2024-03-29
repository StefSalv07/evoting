const express = require("express");
const router = express.Router();
const candidateController = require("../controller/candidateController");

router.post("/candidate", candidateController.addCandidate);
router.get("/candidate", candidateController.getAllCandidates);
router.get("/candidate/:id", candidateController.getCandidateById);
router.put("/candidate/:id", candidateController.updateCandidateById);
router.delete("/candidate/:id", candidateController.deleteCandidateById);

module.exports = router;
