import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Service title is required'],
      trim: true
    },
    shortDescription: {
      type: String,
      required: true,
      trim: true
    },
    detailedDescription: {
      type: String,
      required: true,
      trim: true
    },
    icon: {
      type: String,
      required: true
    },
    features: [{
      type: String
    }],
    deliverables: [{
      type: String
    }],
    technologies: [{
      type: String
    }],
    order: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);

export default Service;
