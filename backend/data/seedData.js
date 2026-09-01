export const initialProjects = [
  {
    id: 'proj-1',
    _id: '64f1a2b3c4d5e6f7a8b9c001',
    title: 'E-Commerce Web Application',
    slug: 'e-commerce-web-application',
    category: 'Full Stack',
    categories: ['Full Stack', 'React', 'Node.js', 'MongoDB'],
    shortDescription: 'Modern full-stack e-commerce platform with product browsing, shopping cart, dynamic search, and order processing.',
    detailedDescription: 'A complete full-stack e-commerce web application engineered with React.js on the client and Node.js + Express + MongoDB on the server. Features dynamic category filtering, responsive cart management, instant product search, Mongoose data models for products and orders, and RESTful API endpoints.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Tailwind CSS', 'Axios'],
    frontendTechnologies: ['React 18', 'Tailwind CSS', 'Context API', 'Axios', 'Lucide Icons'],
    backendTechnologies: ['Node.js', 'Express.js', 'Mongoose ODM', 'RESTful API Architecture'],
    database: 'MongoDB (Collections for Products, Orders, Users)',
    mainFeatures: [
      'Interactive product catalog with category & price range filtering',
      'Real-time shopping cart with quantity management and local persistence',
      'Secure REST API endpoints for fetching products and recording customer orders',
      'Full responsive UI optimized for mobile, tablet, and desktop viewports',
      'Mongoose schema validation for inventory integrity and data consistency'
    ],
    challengesAndSolutions: {
      challenge: 'Handling complex state synchronization between client shopping cart and server inventory updates without unnecessary re-renders.',
      solution: 'Structured a centralized React Context with optimistic UI updates and implemented robust backend validation to ensure consistent stock counts.'
    },
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/deepakrathore/ecommerce-mern-app',
    liveUrl: 'https://demo-deepakrathore.dev/ecommerce',
    featured: true,
    order: 1
  },
  {
    id: 'proj-2',
    _id: '64f1a2b3c4d5e6f7a8b9c002',
    title: 'Contact Management System',
    slug: 'contact-management-system',
    category: 'Full Stack',
    categories: ['Full Stack', 'React', 'Node.js', 'MongoDB'],
    shortDescription: 'Full-featured contact organization suite with complete CRUD operations, real-time search, tag grouping, and phone validation.',
    detailedDescription: 'A comprehensive contact directory application providing instantaneous create, read, update, and delete (CRUD) capabilities. Incorporates regex-based phone/email validation, interactive grouping by relations or company, and seamless MongoDB persistence via Express REST API.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API'],
    frontendTechnologies: ['React.js', 'Tailwind CSS', 'Lucide React', 'Custom Form Hooks'],
    backendTechnologies: ['Node.js', 'Express.js', 'Mongoose', 'CORS Middleware'],
    database: 'MongoDB (Contact documents with timestamps & categorization tags)',
    mainFeatures: [
      'Comprehensive CRUD operations with instant UI feedback',
      'Debounced multi-criteria search by name, phone number, and email',
      'Tag-based grouping (Work, Personal, Family, Favorites)',
      'Backend validation with sanitized MongoDB inputs',
      'CSV / vCard data export preview capability'
    ],
    challengesAndSolutions: {
      challenge: 'Preventing duplicate contact entries and ensuring international phone format compatibility.',
      solution: 'Crafted dual-layer validation with frontend regex masks and Mongoose unique index constraints alongside trim sanitizers.'
    },
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/deepakrathore/contact-manager-mern',
    liveUrl: 'https://demo-deepakrathore.dev/contacts',
    featured: true,
    order: 2
  },
  {
    id: 'proj-3',
    _id: '64f1a2b3c4d5e6f7a8b9c003',
    title: 'Student Management System',
    slug: 'student-management-system',
    category: 'Full Stack',
    categories: ['Full Stack', 'React', 'Backend', 'MongoDB'],
    shortDescription: 'Academic record dashboard for managing student enrollments, course assignments, semester grades, and attendance tracking.',
    detailedDescription: 'An administrative web dashboard tailored for educational institutions. Facilitates student profile creation, course registration, semester grade calculations, attendance summaries, and structured academic reports with clean visual charts.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS3', 'REST API'],
    frontendTechnologies: ['React.js', 'Tailwind CSS', 'Responsive Grid Layouts', 'Modal Forms'],
    backendTechnologies: ['Express.js', 'Node.js', 'Mongoose Schemas', 'Aggregation Pipelines'],
    database: 'MongoDB (Relational references between Students, Courses, and Grades)',
    mainFeatures: [
      'Interactive student directory with status badges and GPA computations',
      'Course enrollment manager with seat limit validation',
      'Grade entry matrix with automated average and grade letter calculators',
      'Filtered views by semester, department, and academic standing',
      'REST API architecture with robust error handling middleware'
    ],
    challengesAndSolutions: {
      challenge: 'Calculating aggregate grade averages across dynamic course sets efficiently.',
      solution: 'Utilized MongoDB aggregation pipelines to process averages server-side, reducing frontend computational load.'
    },
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/deepakrathore/student-management-system',
    liveUrl: 'https://demo-deepakrathore.dev/students',
    featured: true,
    order: 3
  },
  {
    id: 'proj-4',
    _id: '64f1a2b3c4d5e6f7a8b9c004',
    title: 'File Upload & Storage System',
    slug: 'file-upload-management-system',
    category: 'Backend',
    categories: ['Backend', 'Node.js', 'Full Stack', 'MongoDB'],
    shortDescription: 'Secure asset management pipeline supporting drag-and-drop uploads, MIME-type verification, and metadata indexing in MongoDB.',
    detailedDescription: 'A robust file management solution built with Node.js, Express, and Multer. Supports multi-file uploading, strict MIME-type and size security limits, thumbnail generation preview, and MongoDB storage of file metadata, upload history, and download URLs.',
    technologies: ['Node.js', 'Express.js', 'Multer', 'MongoDB', 'React.js', 'REST API'],
    frontendTechnologies: ['React.js', 'Drag-and-Drop API', 'Upload Progress Bars', 'File Previews'],
    backendTechnologies: ['Node.js', 'Express.js', 'Multer Storage Engine', 'File Stream Handlers'],
    database: 'MongoDB (File Metadata, MIME Types, Byte Sizes, Upload Timestamps)',
    mainFeatures: [
      'Drag-and-drop file upload with animated progress tracking',
      'Server-side MIME verification and size ceiling restrictions (e.g. 10MB)',
      'Searchable file repository with category filters (Images, Documents, Archives)',
      'One-click file preview and instant download stream generator',
      'Metadata indexing in MongoDB with delete and cleanup lifecycle'
    ],
    challengesAndSolutions: {
      challenge: 'Handling corrupted uploads and preventing malicious executable file injections.',
      solution: 'Configured Multer fileFilter with strict extension white-listing and magic byte validation on the Express route.'
    },
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/deepakrathore/file-upload-manager',
    liveUrl: 'https://demo-deepakrathore.dev/file-manager',
    featured: false,
    order: 4
  },
  {
    id: 'proj-5',
    _id: '64f1a2b3c4d5e6f7a8b9c005',
    title: 'CRUD REST API Architecture',
    slug: 'crud-rest-api',
    category: 'Backend',
    categories: ['Backend', 'Node.js', 'MongoDB'],
    shortDescription: 'Scalable RESTful API service with modular routing, Mongoose validation, query pagination, and Postman documentation.',
    detailedDescription: 'A clean, production-grade REST API service built with Express.js and MongoDB. Adheres to MVC architecture principles with isolated controllers, modular routes, custom middleware for centralized error management, query-based pagination, sorting, and field limiting.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API', 'Postman'],
    frontendTechnologies: ['API Playground Explorer', 'Interactive Request Simulator'],
    backendTechnologies: ['Node.js', 'Express.js Router', 'Mongoose ODM', 'Status Code Standards'],
    database: 'MongoDB (Normalized relational documents with index optimizations)',
    mainFeatures: [
      'Standardized HTTP status codes (200, 201, 400, 404, 500) and consistent JSON responses',
      'Advanced querying: pagination (?page=1&limit=10), field projection, and sorting',
      'Centralized Express error handling middleware with async/await wrapper',
      'CORS configuration with strict origin whitelisting',
      'Exhaustive Postman test collection with sample payloads'
    ],
    challengesAndSolutions: {
      challenge: 'Ensuring asynchronous errors never crash the Node.js server thread.',
      solution: 'Created an expressAsyncHandler wrapper and global error middleware to gracefully capture and format exceptions.'
    },
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/deepakrathore/express-mongodb-crud-api',
    liveUrl: 'https://demo-deepakrathore.dev/api/docs',
    featured: false,
    order: 5
  },
  {
    id: 'proj-6',
    _id: '64f1a2b3c4d5e6f7a8b9c006',
    title: 'Dynamic Form Validation App',
    slug: 'form-validation-application',
    category: 'Frontend',
    categories: ['Frontend', 'React'],
    shortDescription: 'Interactive multi-step form engine featuring real-time regex validation, accessibility attributes, and dynamic error prompts.',
    detailedDescription: 'A modern, highly accessible client-side form validation application built with React.js. Implements real-time input verification for passwords (strength meter), phone numbers, email addresses, credit cards, and multi-step registration steps without external heavy libraries.',
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    frontendTechnologies: ['React 18', 'Custom Validation Hooks', 'ARIA Attributes', 'CSS Transitions'],
    backendTechnologies: ['Mock Verification Endpoints', 'Express Form Ingest'],
    database: 'Local State / MongoDB Ingest Schema',
    mainFeatures: [
      'Instant real-time validation feedback on blur and change events',
      'Interactive password strength gauge with security requirement checklist',
      'Dynamic multi-step wizard with step state restoration',
      'Full ARIA accessibility compliant labels, roles, and error alerts',
      'Zero external validation dependencies – purely custom reactive JavaScript logic'
    ],
    challengesAndSolutions: {
      challenge: 'Preventing form lag during intensive regex checks on rapid typing.',
      solution: 'Applied debounced validation checks and optimized React state updates using memoized validation schemas.'
    },
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
    githubUrl: 'https://github.com/deepakrathore/react-form-validator',
    liveUrl: 'https://demo-deepakrathore.dev/form-validator',
    featured: false,
    order: 6
  }
];

export const initialServices = [
  {
    id: 'srv-1',
    _id: '64f1a2b3c4d5e6f7a8b9c101',
    title: 'Full Stack Web Development',
    icon: 'Layers',
    shortDescription: 'End-to-end web application architecture from interactive React frontends to robust Node/Express backends and MongoDB databases.',
    detailedDescription: 'Complete development lifecycle for web applications. I design responsive user interfaces, establish scalable Express server architectures, model efficient MongoDB database schemas, and deliver secure, production-ready systems tailored to business needs.',
    deliverables: [
      'Single Page Application (SPA) in React.js',
      'Express.js RESTful backend architecture',
      'MongoDB database schemas and Mongoose models',
      'End-to-end testing and responsive QA',
      'Deployment configuration and documentation'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JavaScript'],
    order: 1
  },
  {
    id: 'srv-2',
    _id: '64f1a2b3c4d5e6f7a8b9c102',
    title: 'Frontend Development',
    icon: 'Layout',
    shortDescription: 'Modern, clean, and intuitive user interfaces built with HTML5, CSS3, JavaScript, and responsive design systems.',
    detailedDescription: 'Specialized in turning wireframes and design requirements into pixel-perfect, accessible, and high-performance web pages. Focused on semantic HTML, clean CSS architecture, and smooth user interactions.',
    deliverables: [
      'Semantic and SEO-friendly HTML5 markup',
      'Modular CSS3 / Tailwind utility styling',
      'Mobile-first responsive layouts for all device sizes',
      'Interactive animations and transitions',
      'Cross-browser compatibility testing'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Bootstrap'],
    order: 2
  },
  {
    id: 'srv-3',
    _id: '64f1a2b3c4d5e6f7a8b9c103',
    title: 'React.js Development',
    icon: 'Code2',
    shortDescription: 'Component-driven Single Page Applications with efficient state management, custom hooks, and React Router navigation.',
    detailedDescription: 'Building dynamic, modular React applications using modern React patterns, functional components, hooks, Context API, and seamless asynchronous API integration with Axios.',
    deliverables: [
      'Reusable, modular React JSX components',
      'State management with Context API & Hooks',
      'Client-side routing with React Router DOM',
      'Optimized re-renders and clean code structure',
      'Axios API integration and error boundary handling'
    ],
    technologies: ['React.js', 'JSX', 'React Router', 'Axios', 'Context API'],
    order: 3
  },
  {
    id: 'srv-4',
    _id: '64f1a2b3c4d5e6f7a8b9c104',
    title: 'Backend Development',
    icon: 'Server',
    shortDescription: 'Scalable server-side applications engineered with Node.js and Express.js, featuring structured MVC design patterns.',
    detailedDescription: 'Building dependable server logic, controllers, models, and middleware. Focused on high concurrency, asynchronous event-driven flows, structured routing, and clean error handling mechanisms.',
    deliverables: [
      'Express.js server architecture and routing',
      'Middleware implementation (CORS, Error handling, Logging)',
      'Secure request validation and sanitization',
      'Asynchronous task processing',
      'Environment variable configuration (.env)'
    ],
    technologies: ['Node.js', 'Express.js', 'JavaScript ES6+', 'dotenv', 'CORS'],
    order: 4
  },
  {
    id: 'srv-5',
    _id: '64f1a2b3c4d5e6f7a8b9c105',
    title: 'REST API Development',
    icon: 'Cpu',
    shortDescription: 'Standardized, secure, and well-documented RESTful APIs with full CRUD operations and JSON response consistency.',
    detailedDescription: 'Designing and implementing clean REST endpoints following industry best practices. Ensuring standard HTTP status codes, query filtering, pagination, structured payload validation, and Postman API documentation.',
    deliverables: [
      'Full CRUD REST API endpoints (GET, POST, PUT, DELETE)',
      'Standardized JSON response schemas',
      'Pagination, search, and sorting query handlers',
      'Input validation and custom error middleware',
      'Postman collection documentation'
    ],
    technologies: ['Express.js', 'Node.js', 'REST Architecture', 'Postman', 'JSON'],
    order: 5
  },
  {
    id: 'srv-6',
    _id: '64f1a2b3c4d5e6f7a8b9c106',
    title: 'MongoDB Integration',
    icon: 'Database',
    shortDescription: 'Flexible NoSQL database modeling, Mongoose schemas, index optimization, and aggregation queries.',
    detailedDescription: 'Architecting schema models with Mongoose ODM for MongoDB. Implementing schema validation, default values, pre-save middleware, indexes for fast query execution, and relational referencing.',
    deliverables: [
      'Mongoose schema definitions and data validation',
      'Database connection handling and retry logic',
      'CRUD database operations & aggregation pipelines',
      'Index configuration for optimized querying',
      'Data backup and migration scripts'
    ],
    technologies: ['MongoDB', 'Mongoose ODM', 'NoSQL', 'MongoDB Compass'],
    order: 6
  },
  {
    id: 'srv-7',
    _id: '64f1a2b3c4d5e6f7a8b9c107',
    title: 'Responsive Web Development',
    icon: 'Smartphone',
    shortDescription: 'Flawless multi-device layouts adapting seamlessly across mobile phones, tablets, laptops, and 4K displays.',
    detailedDescription: 'Ensuring your web application looks and performs exceptionally across every screen size. Using fluid typography, responsive grid systems, touch-friendly navigation, and adaptive image rendering.',
    deliverables: [
      'Mobile-first responsive CSS styling',
      'Touch-friendly mobile navigation and menus',
      'Device breakpoint optimizations (320px to 1440px+)',
      'Zero layout shifts or horizontal overflows',
      'Adaptive image and font scaling'
    ],
    technologies: ['Tailwind CSS', 'CSS Flexbox/Grid', 'Media Queries', 'Mobile UX'],
    order: 7
  },
  {
    id: 'srv-8',
    _id: '64f1a2b3c4d5e6f7a8b9c108',
    title: 'Website Maintenance & Optimization',
    icon: 'Wrench',
    shortDescription: 'Bug fixes, performance optimization, dependency updates, and feature enhancements for existing web applications.',
    detailedDescription: 'Ongoing technical support to keep applications secure, swift, and updated. Includes diagnosing and resolving bugs, refactoring legacy code to modern standards, and boosting loading speeds.',
    deliverables: [
      'Code refactoring and bug resolution',
      'Performance audit and load time optimization',
      'NPM package updates and security vulnerability fixes',
      'Cross-browser bug fixes and CSS adjustments',
      'Feature expansions and UI enhancements'
    ],
    technologies: ['Git', 'GitHub', 'NPM', 'DevTools', 'JavaScript'],
    order: 8
  }
];
