const Service = require("../models/ServiceModel");

async function createService(req, res, next) {
  try {
    const { serviceTitle, subtitle, price, description } = req.body;
    if (!serviceTitle || !price || !description) {
      return res.status(400).json({ message: "Missing required failed." });
    }

    const existingService = await Service.findOne({
      serviceTitle: { $regex: `^${serviceTitle}$`, $options: "i" },
    });
    if (existingService) {
      return res
        .status(409)
        .json({ message: "Service Title already created." });
    }

    const createdService = await Service.create({
      serviceTitle,
      subtitle,
      price: Number(price),
      description,
    });
    return res.status(201).json({
      message: "Service created",
      _id: createdService._id,
      serviceTitle: createdService.serviceTitle,
      subtitle: createdService.subtitle,
      price: createdService.price,
      description: createdService.description,
      image: createdService.image,
      createdAt: createdService.createdAt,
      updatedAt: createdService.updatedAt,
    });
  } catch (err) {
    next(err);
  }
}

async function getServices(req, res, next) {
  const serviceId = req._service._id;
  Service.findById(serviceId)
    .then((service) => res.status(200).send(service))
    .catch((err) => {
      if (err.name === "CastError") {
        err.statusCode = 400;
      } else {
        next(err);
      }
    });
}

module.exports = { createService, getServices };
