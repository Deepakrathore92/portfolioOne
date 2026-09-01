import Project from '../models/Project.js';
import { initialProjects } from '../data/seedData.js';
import { memoryDb, getDbStatus } from '../config/db.js';

// Initialize in-memory projects with initial seed data
if (memoryDb.projects.length === 0) {
  memoryDb.projects = [...initialProjects];
}

// @desc    Get all projects with optional category filter
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req, res, next) => {
  try {
    const { category, search } = req.query;
    const dbStatus = getDbStatus();
    let projects = [];

    if (dbStatus.connected) {
      try {
        let query = {};
        if (category && category !== 'All') {
          query = {
            $or: [
              { category: category },
              { categories: category }
            ]
          };
        }
        projects = await Project.find(query).sort({ order: 1, createdAt: -1 });

        // If mongo is connected but collection is empty, seed it
        if (projects.length === 0) {
          await Project.insertMany(initialProjects);
          projects = await Project.find(query).sort({ order: 1, createdAt: -1 });
        }
      } catch (dbErr) {
        console.warn('MongoDB query error, using memoryDb:', dbErr.message);
      }
    }

    if (!projects || projects.length === 0) {
      projects = [...memoryDb.projects];
      if (category && category !== 'All') {
        const catLower = category.toLowerCase();
        projects = projects.filter(p => 
          p.category.toLowerCase() === catLower ||
          (p.categories && p.categories.some(c => c.toLowerCase() === catLower)) ||
          p.technologies.some(t => t.toLowerCase().includes(catLower))
        );
      }
    }

    if (search) {
      const s = search.toLowerCase();
      projects = projects.filter(p =>
        p.title.toLowerCase().includes(s) ||
        p.shortDescription.toLowerCase().includes(s) ||
        p.technologies.some(t => t.toLowerCase().includes(s))
      );
    }

    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single project by ID or Slug
// @route   GET /api/projects/:id
// @access  Public
export const getProjectById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dbStatus = getDbStatus();
    let project = null;

    if (dbStatus.connected) {
      try {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
          project = await Project.findById(id);
        }
        if (!project) {
          project = await Project.findOne({ slug: id });
        }
      } catch (dbErr) {
        console.warn('MongoDB single project fetch error:', dbErr.message);
      }
    }

    if (!project) {
      project = memoryDb.projects.find(p => p._id === id || p.id === id || p.slug === id);
    }

    if (!project) {
      return res.status(404).json({
        success: false,
        message: `Project not found with id or slug: ${id}`
      });
    }

    return res.status(200).json({
      success: true,
      data: project
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new project
// @route   POST /api/projects
// @access  Public
export const createProject = async (req, res, next) => {
  try {
    const {
      title,
      category,
      categories,
      shortDescription,
      detailedDescription,
      technologies,
      frontendTechnologies,
      backendTechnologies,
      database,
      mainFeatures,
      challengesAndSolutions,
      image,
      githubUrl,
      liveUrl,
      featured
    } = req.body;

    if (!title || !shortDescription) {
      return res.status(400).json({
        success: false,
        message: 'Title and short description are required'
      });
    }

    const newProjectData = {
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category: category || 'Full Stack',
      categories: categories || [category || 'Full Stack'],
      shortDescription,
      detailedDescription: detailedDescription || shortDescription,
      technologies: technologies || ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      frontendTechnologies: frontendTechnologies || [],
      backendTechnologies: backendTechnologies || [],
      database: database || 'MongoDB',
      mainFeatures: mainFeatures || [],
      challengesAndSolutions: challengesAndSolutions || { challenge: '', solution: '' },
      image: image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
      githubUrl: githubUrl || 'https://github.com/deepakrathore',
      liveUrl: liveUrl || 'https://demo-deepakrathore.dev',
      featured: Boolean(featured),
      order: memoryDb.projects.length + 1,
      createdAt: new Date()
    };

    let createdProject = null;
    const dbStatus = getDbStatus();

    if (dbStatus.connected) {
      try {
        const projectDoc = new Project(newProjectData);
        createdProject = await projectDoc.save();
      } catch (dbErr) {
        console.warn('MongoDB create failed, saving to memory:', dbErr.message);
      }
    }

    if (!createdProject) {
      createdProject = {
        _id: `proj-${Date.now()}`,
        id: `proj-${Date.now()}`,
        ...newProjectData
      };
      memoryDb.projects.push(createdProject);
    }

    return res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: createdProject
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Public
export const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    let updatedProject = null;
    const dbStatus = getDbStatus();

    if (dbStatus.connected) {
      try {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
          updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        }
      } catch (dbErr) {
        console.warn('MongoDB update failed, updating memory store:', dbErr.message);
      }
    }

    if (!updatedProject) {
      const idx = memoryDb.projects.findIndex(p => p._id === id || p.id === id || p.slug === id);
      if (idx !== -1) {
        memoryDb.projects[idx] = { ...memoryDb.projects[idx], ...req.body };
        updatedProject = memoryDb.projects[idx];
      }
    }

    if (!updatedProject) {
      return res.status(404).json({
        success: false,
        message: `Project with id ${id} not found`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Project updated successfully',
      data: updatedProject
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Public
export const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    let deleted = false;
    const dbStatus = getDbStatus();

    if (dbStatus.connected) {
      try {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
          const resDoc = await Project.findByIdAndDelete(id);
          if (resDoc) deleted = true;
        }
      } catch (dbErr) {
        console.warn('MongoDB delete failed:', dbErr.message);
      }
    }

    const idx = memoryDb.projects.findIndex(p => p._id === id || p.id === id || p.slug === id);
    if (idx !== -1) {
      memoryDb.projects.splice(idx, 1);
      deleted = true;
    }

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: `Project with id ${id} not found`
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Project removed successfully'
    });
  } catch (error) {
    next(error);
  }
};
