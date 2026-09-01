import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true
    },
    slug: {
      type: String,
      trim: true
    },
    category: {
      type: String,
      required: true,
      enum: ['Frontend', 'React', 'Backend', 'Full Stack', 'Node.js', 'MongoDB', 'All']
    },
    categories: [{
      type: String
    }],
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
    technologies: [{
      type: String,
      required: true
    }],
    frontendTechnologies: [{
      type: String
    }],
    backendTechnologies: [{
      type: String
    }],
    database: {
      type: String,
      default: 'MongoDB / Mongoose'
    },
    mainFeatures: [{
      type: String
    }],
    challengesAndSolutions: {
      challenge: { type: String, default: '' },
      solution: { type: String, default: '' }
    },
    image: {
      type: String,
      required: true
    },
    githubUrl: {
      type: String,
      default: 'https://github.com/deepakrathore'
    },
    liveUrl: {
      type: String,
      default: 'https://demo-deepakrathore.dev'
    },
    featured: {
      type: Boolean,
      default: false
    },
    order: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;
