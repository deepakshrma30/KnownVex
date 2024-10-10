import { Calendar, FileText, Users } from "lucide-react";

export const COURSE_CONTANTS: any = {
  web: {
    words: [
      { text: "Web", className: "text-purple-500" },
      { text: "Development", className: "text-purple-500" },
    ],
    description: "We Can't Wait To Explore Creativity And Build Amazing Websites Together!",
    headerImgUrl: "/images/WebBanner.svg",
    programOverview: "Web development is the process of creating and maintaining websites, involving both front-end and back-end work. Front-end development focuses on the visual and interactive aspects using HTML, CSS, and JavaScript, while back-end development handles server-side operations and databases with languages like Python and PHP. The goal is to create functional, user-friendly websites that work seamlessly across devices and browsers.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/virtualClass.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfStudy.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Introduction to Web Development",
        subProgram: ["Fundamentals of Web Technologies", "Using the Command Line"],
      },
      {
        program: "Hypertext Markup Language (HTML)",
        subProgram: ["Getting Started with HTML5", "Understanding HTML Tags and Metadata", "Creating Forms", "HTML vs. HTML5", "Utilizing Developer Tools"],
      },
      {
        program: "Basics of Web Design",
        subProgram: ["The Design Process Overview", "Introduction to User Experience (UX)", "Creating and Using Mockups"],
      },
      {
        program: "Cascading Style Sheets (CSS)",
        subProgram: ["Introduction to CSS3", "Understanding CSS Syntax: Inline, Internal, and External", "Working with Media and Animations", "CSS Grid and Layout Techniques", "CSS Grid and Flexbox"],
      },
      {
        program: "Node.js",
        subProgram: ["Selectors and DOM Traversing", "Handling Events, AJAX, and DOM Manipulation"],
      },
      {
        program: "Object-Oriented Programming (OOP)",
        subProgram: ["Understanding Inheritance", "Constructors and Destructors", "Concept of Encapsulation", "Polymorphism in OOP"],
      },
      {
        program: "jQuery",
        subProgram: ["Selectors and DOM Traversing", "Event Handling, AJAX, and DOM Manipulation"],
      },
      {
        program: "Database Management",
        subProgram: ["Introduction to SQL", "Data Modeling Techniques", "Working with PHP"],
      },
      {
        program: "JavaScript Programming",
        subProgram: ["Fundamentals of Coding in JavaScript", "Data Types, Flow Control, and Looping", "Understanding Functional Programming", "Working with Objects and Prototypes", "Error Handling Techniques", "Refactoring and Debugging Practices"],
      },
      {
        program: "Database with MongoDB",
        subProgram: ["Establishing Communication with MongoDB", "Reading and Writing Data to the Database", "Utilizing the Aggregation Framework", "Managing Database Configuration"],
      },
    ],
    highlights: ["Web Fundamentals", "HTML & HTML5", "Web Design Basics", "CSS", "JavaScript", "Node.js", "jQuery", "Object-Oriented Programming", "Error Handling", "SQL", "Data Modeling", "Database Management", "MongoDB"],
    productName: "WEB_DEVELOPMENT",
  },
  ai: {
    words: [
      { text: "Artificial", className: "text-red-500" },
      { text: "Intelligence", className: "text-red-500" },
    ],
    headerImgUrl: "/images/AIBanner.svg",
    programOverview: "AI refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. This encompasses the ability of machines to perform tasks commonly associated with human cognition, such as learning from experience, reasoning based on provided data, and adapting to new inputs to solve complex problems. AI can manifest in various forms, from basic rule-based systems to advanced neural networks capable of processing vast amounts of information and making decisions independently.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/virtualClass.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfStudy.svg",
      },
    ],

    programCurriculums: [
      {
        program: "Python Basics",
        subProgram: ["Data Structures", "Loops and Arrays", "Introduction to Pandas and Data Visualization"],
      },
      {
        program: "AI Fundamentals",
        subProgram: ["Overview and Stages of Artificial Intelligence", "Applications of AI"],
      },
      {
        program: "Machine Learning Basics",
        subProgram: ["Machine Learning Workflow", "Key Machine Learning Algorithms", "Introduction to Regression"],
      },
      {
        program: "Deep Learning Introduction",
        subProgram: ["Deep Learning Concepts", "Techniques in Deep Learning", "Introduction to Artificial Neural Networks"],
      },
      {
        program: "Neural Networks",
        subProgram: ["Perceptron Model", "Multilayer Networks", "Backpropagation Algorithm"],
      },
      {
        program: "Statistics and Probability",
        subProgram: ["Understanding Random Variables", "Bayesian Inference", "Linear and Logistic Regression"],
      },
      {
        program: "Basics of Image Processing",
        subProgram: ["Introduction to Image Processing", "Histogram Equalization", "Introduction to OpenCV"],
      },
      {
        program: "Advanced Image Processing",
        subProgram: ["Image Filters", "Edge Detection Techniques", "Corner Detection Methods"],
      },
      {
        program: "Certifications",
        subProgram: ["Certificate of Training Completion", "Internship Completion Certificate", "Excellence Performance Certificate"],
      },
    ],
    highlights: ["Definition & Types", "ML", "Deep Learning", "NLP", "Computer Vision", "Knowledge Representation", "Reinforcement Learning", "Ethics & Bias", "Future Trends", "Problem Space", "AI Tools", "Frameworks"],
    productName: "AI",
  },
  ml: {
    words: [
      { text: "Machine", className: "text-blue-500" },
      { text: "Learning", className: "text-blue-500" },
    ],
    headerImgUrl: "/images/MLBanner.svg",
    programOverview: "This program provides a foundational introduction to Machine Learning (ML) over five sessions. Participants will explore key ML concepts such as supervised and unsupervised learning, regression, classification, and clustering. Practical sessions using Python and Scikit-Learn will focus on implementing and evaluating ML algorithms. By the end of the program, participants will have gained essential skills to apply ML techniques to real-world datasets and scenarios effectively.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/virtualClass.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfStudy.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Introduction to Machine Learning",
        subProgram: ["Overview of Machine Learning"],
      },
      {
        program: "Data Types in Python",
        subProgram: ["Numeric Types – Integer, Float, Complex", "Boolean Type", "Strings, String Operations, and Methods", "List Methods", "Tuples", "Sets", "Dictionaries"],
      },
      {
        program: "Data Preprocessing",
        subProgram: ["Loading Datasets in Python", "Handling Missing Values", "Managing Categorical Variables", "Splitting Datasets into Training and Testing", "Feature Normalization", "Feature Normalization – Python Code Examples"],
      },
      {
        program: "Regression Techniques",
        subProgram: ["Simple Linear Regression", "Multiple Linear Regression", "Decision Trees", "Random Forests", "Python Implementation of Decision Trees and Random Forests"],
      },
      {
        program: "Classification Techniques",
        subProgram: ["k-Nearest Neighbors (kNN) – Concept and Implementation", "Decision Tree Classifier and Random Forest Classifier in Python", "Support Vector Machine (SVM) – Concept and Implementation"],
      },
      {
        program: "Machine Learning Project Implementation",
        subProgram: ["Implementation of Algorithms for a Major Project"],
      },
    ],
    highlights: ["Supervised", "Unsupervised", "Semi-supervised", "Reinforcement", "Linear Regression", "Logistic Regression", "Algorithms", "Data Preparation", "Model Evaluation", "Overfitting", "Underfitting", "Tools & Frameworks", "Ethics & Challenges", "Future Trends"],
    productName: "ML",
  },
  dataScience: {
    words: [
      { text: "Data", className: "text-green-500" },
      { text: "Science", className: "text-green-500" },
    ],
    headerImgUrl: "/images/DSBanner.svg",
    programOverview: "This program provides a foundational introduction to data science over five sessions. Participants will learn essential concepts such as data types, data cleaning, and exploratory data analysis using Python and visualization libraries. Statistical methods for data analysis and basic machine learning concepts will also be covered, offering participants practical skills to analyze data and make informed decisions in various domains.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/virtualClass.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfStudy.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Introduction to Data Science",
        subProgram: ["Understanding Data Science and Its Importance", "Setting Up the Environment", "Basics of Python Programming", "Core Python Concepts", "Python Data Types", "Control Structures: Loops and Functions", "Numerical Computing with NumPy", "Data Manipulation with Pandas"],
      },
      {
        program: "Data Science and Analytics",
        subProgram: ["Classification of Data: Continuous vs. Discrete, Structured vs. Unstructured", "Mathematics for Data Science: Probability, Statistics, Linear Algebra, Gradient Descent, and Calculus"],
      },
      {
        program: "Machine Learning",
        subProgram: ["Forecasting and Predictions Using Regression", "Introduction to Linear Regression", "Introduction to Logistic Regression"],
      },
      {
        program: "Data Analysis with Python",
        subProgram: ["Data Cleaning Techniques", "Data Manipulation Methods", "Summarizing Data Effectively"],
      },
      {
        program: "Machine Learning Implementation",
        subProgram: ["Algorithm Implementation Techniques", "Analysis and Model Evaluation", "Deploying and Serving the Model"],
      },
    ],
    highlights: ["Statistics", "ML", "Data Engineering", "Data Collection", "Data Cleaning & Preparation", "Exploratory Data Analysis", "Data Visualization", "Statistical Analysis", "Predictive Modeling", "Big Data", "Applications", "Ethics and Data Privacy", "Tools & Languages", "Career Paths"],
    productName: "DATA_SCIENCE",
  },
  cyber: {
    words: [
      { text: "Cyber", className: "text-red-500" },
      { text: "Security", className: "text-red-500" },
    ],
    headerImgUrl: "/images/CyberBanner.svg",
    programOverview: "This program is designed to introduce participants to essential concepts and practices in cybersecurity over the course of five sessions. Beginning with an overview of cybersecurity's importance and common threats, sessions progress to cover types of cyber threats and vulnerabilities, basic security measures like strong passwords and encryption, securing networks with firewalls and VPNs, and best practices for data management and incident response. By the end, participants will have gained foundational knowledge to enhance their personal and organizational cybersecurity practices effectively.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/virtualClass.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfStudy.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Introduction to Cybersecurity",
        subProgram: ["Foundational Classes", "Significance of Cybersecurity", "Real-world Applications", "Understanding Malicious Codes and Terminology", "Overview of Cybersecurity Breaches"],
      },
      {
        program: "Information Security Principles",
        subProgram: ["Information Security Services", "Types of Cyber Attacks", "E-commerce Security", "Cyber Forensics Techniques"],
      },
      {
        program: "Operating Systems Fundamentals",
        subProgram: ["Introduction to Linux", "Local Area Network (LAN) Concepts", "Wide Area Network (WAN) Basics", "Understanding the World Wide Web and Internet Operations"],
      },
      {
        program: "Basics of Ethical Hacking",
        subProgram: ["Overview of Hacking Techniques"],
      },
      {
        program: "Understanding Security Threats and Vulnerabilities",
        subProgram: ["Identifying Threats and Vulnerabilities", "Understanding Security Loopholes"],
      },
      {
        program: "Introduction to Cryptography",
        subProgram: ["Symmetric and Asymmetric Keys", "Concurrency in Cryptography", "Ensuring Protocol Security"],
      },
    ],
    highlights: ["Malware", "Phishing", "Denial-of-Service", "Security Measures", "Network Security", "Application Security", "Endpoint Security", "Incident Response", "Compliance", "Regulations", "Risk Management", "Cyber Security Frameworks", "Education & Awareness", "Career Paths", "Emergency Technologies"],
    productName: "CYBER_SECURITY",
  },
  iot: {
    words: [
      { text: "IOT &", className: "text-sky-500" },
      { text: "Robotics", className: "text-sky-500" },
    ],
    headerImgUrl: "/images/IotBanner.svg",
    programOverview: "This program introduces participants to the fundamentals of Internet of Things (IoT) and Robotics in five sessions. Topics include sensor integration, microcontroller programming, robot design principles, and basic control algorithms. Practical exercises will cover building and programming simple IoT devices and robots, providing participants with foundational skills to explore and innovate in these exciting fields.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/virtualClass.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfStudy.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Introduction to Microcontrollers",
        subProgram: ["Overview of Microcontrollers", "ATMEGA 328p Microcontroller Architecture", "Differences between Microcontrollers and Microprocessors"],
      },
      {
        program: "Arduino IDE Platform",
        subProgram: ["Introduction to Arduino", "Virtual Simulation for Arduino Projects", "Arduino Architecture", "Using Arduino IDE for Development"],
      },
      {
        program: "Programming with Arduino",
        subProgram: ["Programming Arduino using C++", "Implementing Arduino Code", "Discussion on Mini Projects"],
      },
      {
        program: "Communication Protocols",
        subProgram: ["I2C Protocol", "SPI Protocol", "Bluetooth Protocol"],
      },
      {
        program: "Introduction to IoT (Internet of Things)",
        subProgram: ["Understanding IoT", "IoT Architecture", "Challenges and Future Trends in IoT"],
      },
      {
        program: "IoT Wireless Protocols",
        subProgram: ["Zigbee Protocol", "RFID Protocol", "Bluetooth Protocol", "WiFi Protocol", "NFC Protocol", "TCP/UDP Protocols", "MQTT/MQTTS Protocols", "HTTP/HTTPS Protocols"],
      },
      {
        program: "Advanced IoT Applications",
        subProgram: ["Weather Reporting System", "Social Distancing Alarm System", "Smart Parking System", "Home Automation Systems", "Password Door Lock System", "IFTTT (If This Then That) Application Integration", "Sending Notifications via Various Applications", "Smart Agriculture System", "Remote-Controlled Robotic Systems"],
      },
      {
        program: "ThingSpeak API",
        subProgram: ["Introduction to Sensors", "Reacting to Sensor Data Rules", "ESP8266 WiFi Module", "Data Analysis using MATLAB", "Connecting via HTTP"],
      },
    ],
    highlights: ["Data Processing", "User Interface", "Components", "Application", "Challenges", "Scalability", "Sensors", "Actuators", "Control Systems", "Types of Robots", "Applications of Robotics", "Challenges of Robotics", "Integration of IoT & Robotics"],
    productName: "IOT_ROBOTICS",
  },
  cloudComputing: {
    words: [
      { text: "Cloud", className: "text-purple-500" },
      { text: "Computing", className: "text-purple-500" },
    ],
    headerImgUrl: "/images/CloudComputingBanner.svg",
    programOverview: "This program introduces participants to the fundamentals of cloud computing in five sessions. Topics include cloud deployment models (public, private, hybrid), service models (IaaS, PaaS, SaaS), cloud architecture, virtualization, and security considerations. Practical exercises will cover using major cloud platforms (AWS, Azure, Google Cloud) to deploy applications and manage cloud resources. By the end of the program, participants will have gained essential skills to leverage cloud technologies effectively for various business and personal applications.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/virtualClass.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfStudy.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Introduction to Cloud Computing",
        subProgram: ["Why Cloud Computing is Needed", "Cloud Computing Defined", "History and Evolution of Cloud Computing", "Five Key Characteristics of Cloud Computing", "Benefits of Cloud Computing", "Capital Expenditure (CapEx) vs Operational Expenditure (OpEx)", "Cloud Data Centers Overview"],
      },
      {
        program: "Cloud Computing Models",
        subProgram: ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)", "Service Level Agreement (SLA)", "Virtual Private Cloud (VPC)", "Cloud Deployment Models", "Introduction to Virtualization", "Understanding Hypervisors"],
      },
      {
        program: "Scaling in Cloud Computing",
        subProgram: ["Horizontal Scaling", "Vertical Scaling"],
      },
      {
        program: "Containers in Cloud",
        subProgram: ["Introduction to Containers", "Advantages of Containers", "Difference between Virtual Machines and Containers"],
      },
      {
        program: "Cloud Roles",
        subProgram: ["Cloud Providers", "Cloud Consumers", "Cloud Service Owners", "Cloud Resource Administrators", "Cloud Auditors", "Cloud Brokers", "Cloud Carriers", "Organizational Boundaries", "Trust Boundaries"],
      },
      {
        program: "Cloud Architecture",
        subProgram: ["What is Cloud Architecture?", "Fundamentals of Cloud Architecture", "Workload Distribution", "Resource Pooling Architecture", "Dynamic Scalability Architecture", "Elastic Resource Architecture", "Service Load Balancing Architecture"],
      },
      {
        program: "Microsoft Azure",
        subProgram: ["Azure Fundamentals", "Azure Networking", "Azure Compute Services", "Azure Storage Solutions", "Working with Microsoft Azure"],
      },
      {
        program: "Amazon Web Services (AWS)",
        subProgram: ["Introduction to AWS", "AWS Core Concepts", "AWS Storage and Security", "Working with Amazon Web Services"],
      },
    ],
    highlights: ["Service Models", "PaaS", "SaaS", "Public Cloud", "Private Cloud", "Hybrid Cloud", "Benefits of Cloud", "Security & Compliance", "Challenges", "Application", "Emerging Tools", "Serverless Computing", "Edge Computing"],
    productName: "CLOUD_COMPUTING",
  },
  hybridElectricVehicle: {
    words: [
      { text: "Hybrid", className: "text-green-500" },
      { text: "Electric Vehicle", className: "text-green-500" },
    ],
    headerImgUrl: "/images/VehicleBanner.svg",
    programOverview: "This course provides a comprehensive introduction to hybrid electric vehicles (HEVs), exploring their design, operation, and environmental impact. Students will learn about the fundamental principles of hybrid systems, including powertrains, energy management strategies, and the integration of traditional and electric propulsion systems.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/virtualClass.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfStudy.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Introduction to Vehicles",
        subProgram: ["Forces Acting on Vehicles", "Vehicle Traction", "Vehicle Resistance Types", "Powertrain Structure Overview"],
      },
      {
        program: "Introduction to Electric & Hybrid Vehicles",
        subProgram: ["Electric Vehicle Topologies", "Hybrid Vehicles Overview", "HEV Drivetrain Structure and Design"],
      },
      {
        program: "Electric Power Systems",
        subProgram: ["Basics of Batteries", "EV Motors and Controllers", "Battery Pack Design", "Introduction to Battery Parameters"],
      },
      {
        program: "Battery Management Systems (BMS)",
        subProgram: ["BMS Architecture and Layout", "State of Power (SOP) Estimation", "State of Health (SOH) Estimation"],
      },
      {
        program: "EV Charging Systems",
        subProgram: ["EV Standards and Functions Overview", "Bulk Chargers and Swap Stations", "Public Charging Infrastructure", "On-Board Chargers"],
      },
      {
        program: "Software Workshop & Training",
        subProgram: ["Introduction to Drive Cycle Data", "Computation of EV Powertrain Behavior", "Matlab-Based Numerical Computation for EV Powertrain"],
      },
    ],
    highlights: ["Powertrain Components", "Energy Management Systems", "Battery Technologies", "Regenerative Braking", "Emissions & Environmental Impacts", "Vehicle Design", "Integration", "Regulations", "Standards", "Future Trends", "Vehicle Dynamics", "Control Strategies"],
    productName: "HYBRID_ELECTRIC_VEHICLE",
  },
  autocad: {
    words: [
      { text: "Auto", className: "text-blue-500" },
      { text: "CAD", className: "text-blue-500" },
    ],
    headerImgUrl: "/images/AutoCadBanner.svg",
    programOverview: "This program introduces participants to AutoCAD, a leading software for 2D drafting and design, in five sessions. Topics include basic interface navigation, drawing tools, editing commands, and annotation features. Participants will learn to create technical drawings and layouts efficiently, incorporating industry standards. Practical exercises will cover tasks such as creating geometric shapes, applying dimensions, and organizing drawings using layers. By the end of the program, participants will have acquired foundational skills in AutoCAD essential for various design disciplines.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/virtualClass.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfStudy.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Features of the Ribbon",
        subProgram: ["The Application Menu", "The Quick Access Toolbar", "The Command Line", "Keyboard Shortcuts", "Creating Basic Commands"],
      },
      {
        program: "Creating Basic Objects",
        subProgram: ["Working with Lines", "Working with Arcs", "Working with Polylines", "Using Grips", "Using Object Snaps", "Using Object Snap Tracking", "Using Polar Tracking"],
      },
      {
        program: "Altering Objects",
        subProgram: ["Trimming and Extending Objects to Defined Boundaries", "Creating Parallel and Offset Geometry", "Joining Objects", "Filleting Corners Between Two Objects", "Chamfering Corners Between Two Objects", "Stretching Objects"],
      },
      {
        program: "Drawing Organization",
        subProgram: ["Using Layers", "Changing Object Properties", "Matching Object Properties", "Using the Properties Palette"],
      },
      {
        program: "Working with Layouts",
        subProgram: ["Using Page Setups", "Using Layouts", "Scaling Drawing Views"],
      },
      {
        program: "Annotating the Drawing",
        subProgram: ["Creating Multiline Text", "Creating Single Line Text", "Using Text Styles", "Editing Text"],
      },
      {
        program: "Dimensioning",
        subProgram: ["Creating Dimensions", "Using Dimension Styles", "Editing Dimensions", "Using Multileaders"],
      },
      {
        program: "Hatching Objects",
        subProgram: ["Hatching Objects", "Editing Hatch Objects"],
      },
      {
        program: "Working with Reusable Content",
        subProgram: ["Creating and Inserting Blocks and Symbols", "Editing Blocks and Symbols", "Using Tool Palettes", "Working with Groups"],
      },
      {
        program: "Drawing Templates",
        subProgram: ["Creating Drawing Templates", "Using Drawing Templates"],
      },
      {
        program: "Plotting Your Drawings",
        subProgram: ["Plotting Drawings", "PDF Output", "Multiple Sheet Drawings", "Using Plot Styles"],
      },
      {
        program: "One AutoCAD",
        subProgram: ["AutoCAD Toolsets", "AutoCAD Web App", "AutoCAD Mobile App"],
      },
    ],
    highlights: ["AutoCAD", "2D Drawing", "Layer Management", "Dimensioning", "Annotation", "Object Modification", "Blocks", "Attributes", "Hatching & Gradients", "3D Modeling", "Rendering Techniques", "File Management", "Plotting or Printing"],
    productName: "AUTO_CAD",
  },
  marketing: {
    words: [{ text: "Digital Marketing", className: "text-purple-300" }],
    headerImgUrl: "/images/MarketingBanner.svg",
    programOverview: "This program introduces participants to digital marketing essentials in five sessions. Topics include digital channels (websites, social media, email, search engines), key strategies (SEO, SEM, content marketing), and campaign management. Practical exercises cover creating and optimizing digital campaigns, analyzing metrics, and understanding consumer behavior online. By the end of the program, participants will have acquired foundational skills to implement effective digital marketing strategies and enhance online presence for businesses.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/virtualClass.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfStudy.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Digital Marketing an Overview",
        subProgram: ["Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication. This includes not only email, social media, and web based advertising, but also text and multimedia messages as a marketing channel."],
      },
      {
        program: "Introduction to WordPress",
        subProgram: ["What Is WordPress? WordPress is a content management system (CMS) that allows you to host and build websites. WordPress contains plugin architecture and a template system, so you can customize any websites to fit your business, blog, portfolio, or online store."],
      },
      {
        program: "WordPress Development",
        subProgram: ["WordPress Setup", "Plugin Themes", "Domain Extensions", "EMD", "Content Management System", "Website Marketing", "Blog Marketing"],
      },
      {
        program: "E-Mail Marketing",
        subProgram: ["Learn how to build an effective email marketing strategy as part of your inbound efforts.", "Master the fundamentals of email marketing.", "Invest in yourself and your career by learning one of the most in-demand skills in digital marketing.", "Create and launch email campaigns as needed."],
      },
      {
        program: "Online Reputation Management",
        subProgram: ["Manage an organization’s online reputation.", "Apply reputational management principles to manage online issues and crises.", "Build a strong participatory culture to engage your audience."],
      },
      {
        program: "Google Ads & Pay Per Click",
        subProgram: ["Understand all of the common PPC terms.", "Completely understand SEM & how to profit from it.", "Leverage psychology in your SEM strategy.", "Quickly & easily reverse engineer your competitors PPC strategy."],
      },
      {
        program: "Google Analytics",
        subProgram: ["Google Analytics", "Segmentation", "Campaign Tracking", "Analytics Intelligence", "Website Tracking"],
      },
      {
        program: "Inbound Marketing",
        subProgram: ["Effective inbound marketing strategy specific to your business.", "One of the most effective marketing strategies today.", "Learn to correctly use KPI."],
      },
      {
        program: "Search Engine Optimization",
        subProgram: ["Understanding Search Engine Algorithms", "SEO Ranking Factors", "PPC foundations and Analytics", "Robot", "Spider", "Crawler"],
      },
      {
        program: "Social Media Marketing",
        subProgram: ["Understand the landscape of traditional, digital, and social media marketing.", "Understand the major social media platforms, how they function, and what role they play in marketing.", "Understand the risks of social media.", "Understand the wide scope of social media."],
      },
    ],
    highlights: ["Search Engine Optimization", "Content Marketing", "Social Media Marketing", "Email Marketing", "Pay-per-Click", "Analytics & Data Measurement", "Conversion Rate Optimization", "Affiliate & Influencer Marketing", "Mobile Marketing", "Digital Marketing", "Trends & Innovation", "Legal & Ethical Considerations"],
    productName: "MARKETING",
  },
  finance: {
    words: [{ text: "Finance", className: "text-yellow-500" }],
    headerImgUrl: "/images/FinanceBanner.svg",
    programOverview: "Finance program provides a thorough understanding of financial principles, markets, and instruments. Students will explore key areas such as corporate finance, investment strategies, financial analysis, and risk management. The curriculum combines theoretical knowledge with practical applications, using real-world case studies and financial tools. Graduates will be well-prepared for careers in banking, investment management, financial planning, and corporate finance, equipped with the skills needed to make informed financial decisions and strategies in a dynamic economic environment.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/virtualClass.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfStudy.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Fundamentals and Treasury",
        subProgram: ["What is the Treasury?", "Functions and roles of Treasury", "Treasury as an activity", "How Treasury management is implemented in Banks, NBFCs, Micro-Financial", "Corporations and other corporates."],
      },
      {
        program: "Corporate Finance",
        subProgram: ["Basics of financing decisions and their importance", "Capital Structure", "Capital Ratios", "Credit Assessment for Financing Decision"],
      },
      {
        program: "Corporate Portfolio Management",
        subProgram: ["Basics and Introduction", "Why do corporations Invest in other businesses?", "Liquidity, Credit and Market Risk", "Investment Management", "Formulation and application of Investment Policy"],
      },
      {
        program: "Application of Financial Ratio in day-to-day Operations",
        subProgram: ["Three financial management decisions", "Quantitative modeling", "Analysis of financial models and statements", "Techniques of taking data-driven decisions"],
      },
      {
        program: "SCM – Supply Chain Management",
        subProgram: ["Working Capital Management", "Cash Conversion Cycle", "Receipts and Payables outstanding/indents and requisitions outstanding", "Letter of Credit, Bank Guarantee, Discounting, Factoring and Forfeiting", "Legal terms, Regulatory and Compliances"],
      },
      {
        program: "Cash and Liquidity Management",
        subProgram: ["Liquidity management", "Cash forecasting", "Physical and Notional sash pools", "POBO/ROBO models", "Clearing and Settlement systems"],
      },
    ],
    highlights: ["Financial Statements", "Time Value of Money", "Investment Analysis", "Risk & Return", "Capital Budgeting", "Financial Strategy", "Financial Markets", "Corporate Finance", "Personal Finance", "Financial Ratios", "Valuation Methods", "Macroeconomics", "Behavioral Finance", "Ethics in Finance"],
    productName: "MARKETING",
  },
  hr: {
    words: [{ text: "Human Resources", className: "text-teal-500" }],
    headerImgUrl: "/images/HrBanner.svg",
    programOverview: "This program introduces participants to fundamental concepts in Human Resources across five sessions. Topics include recruitment, employee relations, performance management, legal compliance, and workplace diversity. Practical exercises will involve applying HR strategies to scenarios, enhancing skills in hiring, managing, and developing talent. By the program's conclusion, participants will have gained essential knowledge and skills to contribute effectively to HR functions within organizations.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/virtualClass.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfStudy.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Human Resources Basics",
        subProgram: ["HR Fundamentals", "Employee Onboarding process", "Company policies", "Employee records"],
      },
      {
        program: "Creating Basic Objects",
        subProgram: ["Payroll processing", "Conducting Seminars", "Conduct Benefit Analysis", "Work conflicts and Solutions"],
      },
      {
        program: "Human Resource Planning",
        subProgram: ["Analyzing supply and demand", "Enterprise Resource Planning", "Forecasting and Balancing", "Hard and Soft HRP"],
      },
      {
        program: "Recruitment and Selection",
        subProgram: ["Sourcing and Attracting Talent", "Background verification Tools", "Conversion Protocols Screening and Onboarding"],
      },
      {
        program: "Compensation and Employee Tax",
        subProgram: ["Compensation structure planning", "Incentive and bonus management", "Professional and employee Tax", "Provident Fund and Employee Benefits"],
      },
      {
        program: "Training and Development",
        subProgram: ["Employee training and development", "Talent Acquisition Understanding", "Resource Deployment", "Training Reinforcement"],
      },
    ],
    highlights: ["Recruitment and Selection", "Employee Onboarding", "Training and Development", "Performance Management", "Compensation & Benefits", "Labor Law", "Compliance", "Employee Relations", "Diversity", "Inclusion", "HR Metrics & Analytics", "Organization Development", "Succession Planning", "Workplace Health & Safety"],
    productName: "MARKETING",
  },
  python: {
    words: [{ text: "Python", className: "text-rose-500" }],
    headerImgUrl: "/images/PythonBanner.svg",
    programOverview: "Python program provides a thorough introduction to Python programming, focusing on key concepts such as syntax, data structures, algorithms, and object-oriented programming. Students will gain hands-on experience through practical projects, covering topics like web development, data analysis, and automation. The program also explores advanced areas such as machine learning and software engineering. Graduates will be equipped for careers in software development, data science, automation, and beyond.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/virtualClass.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfStudy.svg",
      },
    ],
    highlights: ["Basic Syntax & Structure", "Data Types", "Variables", "Control Flow (if, else, loops)", "Functions", "Lists & Tuples", "Dictionaries", "File Handling", "Exception Handling", "Modules & Packages", "Object-Oriented Programming", "Classes & Objects", "Inheritance & Polymorphism", "Decorators", "Generators", "Lambda Functions"],
    productName: "PYTHON",
  },
  cplus: {
    words: [{ text: "C & C++", className: "text-indigo-500" }],
    headerImgUrl: "/images/CplusBanner.svg",
    programOverview: "C/C++ program provides a solid foundation in both C and C++ programming languages. Students will learn core concepts such as syntax, data structures, algorithms, memory management, and object-oriented programming. The curriculum includes hands-on projects and real-world applications, ensuring practical experience in writing efficient and robust code. This program equips graduates with the skills necessary for careers in software development, systems programming, game development, and embedded systems.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/virtualClass.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfStudy.svg",
      },
    ],
    programCurriculums: [
      {
        program: "",
        subProgram: [""],
      },
    ],
    highlights: ["Basic Syntax & Structure", "Data Types", "Variables", "Control Structures", "Functions", "Arrays", "Pointers", "Object-Oriented Programming", "Constructors", "Templates", "Exception Handling", "Inheritance", "Polymorphism"],
    productName: "C_CPLUSPLUS",
  },
  java: {
    words: [{ text: "Java", className: "text-violet-500" }],
    headerImgUrl: "/images/JavaBanner.svg",
    programOverview: "Java program offers comprehensive training in Java programming, covering essential concepts such as object-oriented programming, data structures, algorithms, and software development principles. Students will engage in hands-on projects, gaining practical experience in building robust, scalable applications. The curriculum also includes advanced topics like Java frameworks, web development, and mobile app development. Graduates will be well-prepared for careers in software development, enterprise solutions, web applications, and Android development.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/virtualClass.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfStudy.svg",
      },
    ],
    highlights: ["Basic Syntax & Structure", "Primitive Data Types", "Variables & Operators", "Control Flow (if, else, switch, loops)", "Methods", "Arrays", "Object-Oriented Programming", "Classes & Objects", "Inheritance & Polymorphism", "Interfaces & Abstract Classes", "Exception Handling", "Collections Framework", "File I/O", "Multithreading", "Generics", "Java Virtual Machine (JVM)"],
    productName: "JAVA",
  },
};

export const PRICING_PLAN = [
  {
    title: "Self",
    description: "For Self",
    price: "10,000",
    originalPrice: "5,000",
    plan: "SELF",
    recommended: false,
    features: [
      { name: "Recorded sessions", included: true },
      { name: "Hands-on internship", included: true },
      { name: "Hands-on project", included: true },
      { name: "Certifications", included: true },
      { name: "Doubt clearing", included: false },
      { name: "Live sessions", included: false },
      { name: "Mentor guidance", included: false },
      { name: "Placement", included: false },
      { name: "Mock interview", included: false },
    ],
  },
  {
    title: "Mentor",
    description: "For Mentorship",
    price: "12,000",
    originalPrice: "6,000",
    recommended: true,
    plan: "MENTOR",
    features: [
      { name: "Recorded sessions", included: true },
      { name: "Hands-on internship", included: true },
      { name: "Hands-on project", included: true },
      { name: "Certifications", included: true },
      { name: "Doubt clearing", included: true },
      { name: "Live sessions", included: true },
      { name: "Mentor guidance", included: true },
      { name: "Placement", included: false },
      { name: "Mock interview", included: false },
    ],
  },
  {
    title: "Professional",
    description: "For working Professional",
    price: "16,000",
    originalPrice: "8,000",
    recommended: false,
    plan: "PROFESSIONAL",
    features: [
      { name: "Recorded sessions", included: true },
      { name: "Hands-on internship", included: true },
      { name: "Hands-on project", included: true },
      { name: "Certifications", included: true },
      { name: "Doubt clearing", included: true },
      { name: "Live sessions", included: true },
      { name: "Mentor guidance", included: true },
      { name: "Placement", included: true },
      { name: "Mock interview", included: true },
    ],
  },
];

export const SERVICES = [
  { label: "SOFT SKILL", src: "/images/softSkill.svg", summary: "Enhance your communication and interpersonal skills." },
  { label: "Mock Interviews", src: "/images/mock.svg", summary: "Prepare for interviews with realistic practice sessions." },
  { label: "Portfolio Building", src: "/images/portfolio.svg", summary: "Create a standout portfolio that showcases your skills." },
  { label: "Resume Building", src: "/images/resume.svg", summary: "Build a professional resume that highlights your strengths." },
  { label: "Mock Tests", src: "/images/mtest.svg", summary: "Take mock tests to assess and improve your knowledge." },
  { label: "Interview", src: "/images/interview.svg", summary: "Ace your interview with targeted guidance and support." },
];

export const FEATURES = [
  {
    title: "Online Billing, Invoicing, & Contracts",
    description: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
    icon: <FileText className="text-gray-50 w-6 h-6" />,
    bgColor: "bg-green-500",
  },
  {
    title: "Easy Scheduling & Attendance Tracking",
    description: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
    icon: <Calendar className="text-gray-50 w-6 h-6" />,
    bgColor: "bg-orange-500",
  },
  {
    title: "Customer Tracking",
    description: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
    icon: <Users className="text-gray-50 w-6 h-6" />,
    bgColor: "bg-cyan-500",
  },
];
