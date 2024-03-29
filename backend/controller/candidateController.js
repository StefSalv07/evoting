// controllers/candidateController.js

const Candidate = require("../model/candidateModel");

exports.addCandidate = (req, res) => {
  const candidate = new Candidate(req.body);
  candidate
    .save()
    .then((candidate) =>
      res.status(200).json({ message: "Candidate Added", data: candidate })
    )
    .catch((err) =>
      res.status(400).json({ message: "Candidate not added", err: err })
    );
};

exports.getAllCandidates = (req, res) => {
  Candidate.find()
    .then((candidates) =>
      res
        .status(200)
        .json({ message: "Candidates Retrieved", data: candidates })
    )
    .catch((err) =>
      res.status(400).json({ error: "No Candidate found", err: err })
    );
};

exports.getCandidateById = (req, res) => {
  Candidate.findById(req.params.id)
    .then((candidate) => {
      if (!candidate) {
        return res.status(404).json({ error: "No Candidate found" });
      }
      res.status(200).json({ message: "Candidate Retrieved", data: candidate });
    })
    .catch((err) =>
      res.status(400).json({ error: "No Candidate found", err: err })
    );
};

exports.updateCandidateById = (req, res) => {
  Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((candidate) => {
      if (!candidate) {
        return res.status(404).json({ error: "No Candidate found" });
      }
      res.status(200).json({ message: "Candidate Updated", data: candidate });
    })
    .catch((err) =>
      res.status(400).json({ error: "No Candidate found", err: err })
    );
};

exports.deleteCandidateById = (req, res) => {
  Candidate.findByIdAndDelete(req.params.id)
    .then((candidate) => {
      if (!candidate) {
        return res.status(404).json({ error: "No Candidate found" });
      }
      res.status(200).json({ message: "Candidate Deleted" });
    })
    .catch((err) =>
      res.status(400).json({ error: "No Candidate found", err: err })
    );
};
