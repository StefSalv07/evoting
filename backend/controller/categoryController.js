const categorySchema = require("../model/categoryModel");

exports.addCategory = (req, res) => {
  const categories = new categorySchema(req.body);
  categories
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Category Added",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Failed to add category",
        error: err.message,
      });
    });
};

exports.getAllCategories = (req, res) => {
  categorySchema
    .find()
    .then((data) => {
      res.status(200).json({
        message: "Data Retrieved",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Failed to retrieve categories",
        error: err.message,
      });
    });
};

exports.deleteCategoryById = (req, res) => {
  const categoryId = req.params.id;
  categorySchema
    .findByIdAndDelete(categoryId)
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: "Category Not Found",
        });
      } else {
        res.status(200).json({
          message: "Category Deleted",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Failed to delete category",
        error: err.message,
      });
    });
};

exports.updateCategorybyId = (req, res) => {
  const categoryId = req.params.id;
  categorySchema
    .findByIdAndUpdate(categoryId, req.body, { new: true })
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: "Category Not Found",
        });
      } else {
        res.status(200).json({
          message: "Category Updated",
          data: data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Failed to update category",
        error: err.message,
      });
    });
};

exports.getCategoryById = (req, res) => {
  const categoryId = req.params.id;
  categorySchema
    .findById(categoryId)
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: "Category Not Found",
        });
      } else {
        res.status(200).json({
          message: "Category retrieved successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Failed to retrieve category",
        error: err.message,
      });
    });
};
