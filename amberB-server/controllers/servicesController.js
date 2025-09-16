const Service = require("../models/ServiceModel");

async function createService(req, res, next) {
  try {
    console.log("BODY:", req.body); // <-- should have text fields
    console.log("FILE:", req.file);

    const serviceTitle = req.body.serviceTitle?.trim();
    const subtitle = req.body.subtitle?.trim();
    const priceRaw = req.body.price;
    const description = req.body.description?.trim();

    if (!serviceTitle || priceRaw === undefined || !description) {
      return res.status(400).json({ message: "Missing required failed." });
    }

    const price = Number(priceRaw);
    if (Number.isNaN(price) || price < 0) {
      return res
        .status(400)
        .json({ message: "Number should be a non-negative number" });
    }

    const existingService = await Service.findOne({
      serviceTitle: { $regex: `^${serviceTitle}$`, $options: "i" },
    });

    if (existingService) {
      return res
        .status(409)
        .json({ message: "Service Title already created." });
    }

    const imageUrl = req.file 
      ? {
          url: `/uploads/${req.file.filename}`,
          publicId: req.file.filename,
          format: req.file.mimetype.split('/')[1],
          size: req.file.size.toString(),
        }
      : null;

    const createdService = await Service.create({
      serviceTitle,
      subtitle,
      price,
      description,
      imageUrl,
    });
    return res.status(201).json({
      message: "Service created",
      _id: createdService._id,
      serviceTitle: createdService.serviceTitle,
      subtitle: createdService.subtitle,
      price: createdService.price,
      description: createdService.description,
      imageUrl: createdService.imageUrl,
      createdAt: createdService.createdAt,
      updatedAt: createdService.updatedAt,
    });
  } catch (err) {
    if (err && err.code === 11000) {
      return res
        .status(409)
        .json({ message: "Serivce Title already existed." });
    }
    next(err);
  }
}

async function getServices(req, res, next) {
  try {
    const service = await Service.find().sort({ createdAt: -1 }).lean();
    return res.status(200).json({ service });
  } catch (err) {
    next(err);
  }
}

async function getServiceById(req, res, next) {
  try {
    const { id } = req.params;
    const service = await Service.findById(id).lean();
    if (!service) {
      return res.status(400).json({ message: "Service not found" });
    }
    return res.status(200).json({ service });
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid service id" });
    }
    next(err);
  }
}

module.exports = { createService, getServices, getServiceById };
