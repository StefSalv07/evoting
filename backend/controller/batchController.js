// controllers/batchController.js

const BatchSchema = require("../model/batchModel");

exports.createBatch = (req, res) => {
  const batch = new BatchSchema(req.body);

  batch
    .save()
    .then((batch) =>
      res.status(201).json({ message: "Batch created", data: batch })
    )
    .catch((error) => res.status(400).json({ error: error.message }));
};

exports.getAllBatches = (req, res) => {
  BatchSchema.find()
    .then((batches) =>
      res.status(200).json({ message: "Batches retrieved", data: batches })
    )
    .catch((error) => res.status(400).json({ error: error.message }));
};

exports.getBatchById = (req, res) => {
  const id = req.params.id;
  BatchSchema.findById(id)
    .then((batch) => {
      if (!batch) {
        throw new Error("Batch not found");
      }
      res.status(200).json({ message: "Batch retrieved", data: batch });
    })
    .catch((error) => res.status(404).json({ error: error.message }));
};

exports.updateBatchById = (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  BatchSchema.findByIdAndUpdate(id, updateData, { new: true })
    .then((batch) => {
      if (!batch) {
        throw new Error("Batch not found");
      }
      res.status(200).json({ message: "Batch updated", data: batch });
    })
    .catch((error) => res.status(404).json({ error: error.message }));
};
89
exports.deleteBatchById = (req, res) => {
  const id = req.params.id;
  BatchSchema.findByIdAndDelete(id)
    .then((batch) => {
      if (!batch) {
        throw new Error("Batch not found");
      }
      res.status(200).json({ message: "Batch deleted" });
    })
    .catch((error) => res.status(404).json({ error: error.message }));
};
