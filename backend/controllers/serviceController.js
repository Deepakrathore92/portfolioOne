import Service from '../models/Service.js';
import { initialServices } from '../data/seedData.js';
import { memoryDb, getDbStatus } from '../config/db.js';

if (memoryDb.services.length === 0) {
  memoryDb.services = [...initialServices];
}

// @desc    Get all services
// @route   GET /api/services
// @access  Public
export const getServices = async (req, res, next) => {
  try {
    const dbStatus = getDbStatus();
    let services = [];

    if (dbStatus.connected) {
      try {
        services = await Service.find().sort({ order: 1 });
        if (services.length === 0) {
          await Service.insertMany(initialServices);
          services = await Service.find().sort({ order: 1 });
        }
      } catch (dbErr) {
        console.warn('MongoDB services fetch error, using memoryDb:', dbErr.message);
      }
    }

    if (!services || services.length === 0) {
      services = memoryDb.services;
    }

    return res.status(200).json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single service by ID
// @route   GET /api/services/:id
// @access  Public
export const getServiceById = async (req, res, next) => {
  try {
    const { id } = req.params;
    let service = null;
    const dbStatus = getDbStatus();

    if (dbStatus.connected) {
      try {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
          service = await Service.findById(id);
        }
      } catch (dbErr) {
        console.warn('MongoDB service by ID error:', dbErr.message);
      }
    }

    if (!service) {
      service = memoryDb.services.find(s => s._id === id || s.id === id);
    }

    if (!service) {
      return res.status(404).json({
        success: false,
        message: `Service not found with id: ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      data: service
    });
  } catch (error) {
    next(error);
  }
};
