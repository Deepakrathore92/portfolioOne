import Contact from '../models/Contact.js';
import { memoryDb, getDbStatus } from '../config/db.js';

// @desc    Submit a contact message
// @route   POST /api/contact
// @access  Public
export const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation checks
    const errors = [];
    if (!name || name.trim().length < 2) errors.push('Name must be at least 2 characters long');
    if (!email || !/^\S+@\S+\.\S+$/.test(email.trim())) errors.push('Please provide a valid email address');
    if (!phone || phone.trim().length < 7) errors.push('Please provide a valid phone number (at least 7 digits)');
    if (!subject || subject.trim().length < 3) errors.push('Subject must be at least 3 characters long');
    if (!message || message.trim().length < 10) errors.push('Message must be at least 10 characters long');

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    const newContactData = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date()
    };

    let savedContact = null;
    const dbStatus = getDbStatus();

    if (dbStatus.connected) {
      try {
        const contactDoc = new Contact(newContactData);
        savedContact = await contactDoc.save();
      } catch (dbErr) {
        console.warn('MongoDB save failed, falling back to memory log:', dbErr.message);
      }
    }

    // Also persist in memory store for session resilience
    if (!savedContact) {
      savedContact = {
        _id: `contact-${Date.now()}`,
        ...newContactData
      };
      memoryDb.contacts.unshift(savedContact);
    }

    console.log(`📩 New Contact Message from ${savedContact.name} (${savedContact.email}): "${savedContact.subject}"`);

    return res.status(201).json({
      success: true,
      message: 'Thank you Deepak! Your message has been received successfully. I will get back to you shortly.',
      data: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        subject: savedContact.subject,
        createdAt: savedContact.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact messages (for review/admin)
// @route   GET /api/contact
// @access  Public
export const getContacts = async (req, res, next) => {
  try {
    const dbStatus = getDbStatus();
    let contacts = [];

    if (dbStatus.connected) {
      try {
        contacts = await Contact.find().sort({ createdAt: -1 });
      } catch (dbErr) {
        console.warn('MongoDB query failed, reading memoryDb:', dbErr.message);
      }
    }

    if (!contacts || contacts.length === 0) {
      contacts = memoryDb.contacts;
    }

    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    next(error);
  }
};
