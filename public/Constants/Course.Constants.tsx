import { Calendar, FileText, Users } from "lucide-react";

export const COURSE_CONTANTS: any = {
  web: {
    words: [
      { text: "Web", className: "text-purple-500" },
      { text: "Development", className: "text-purple-500" },
    ],
    description: "We Can't Wait To Explore Creativity And Build Amazing Websites Together!",
    headerImgUrl: "/images/webDevelopment.svg",
    programOverview: "Web development is the process of creating and maintaining websites, involving both front-end and back-end work. Front-end development focuses on the visual and interactive aspects using HTML, CSS, and JavaScript, while back-end development handles server-side operations and databases with languages like Python and PHP. The goal is to create functional, user-friendly websites that work seamlessly across devices and browsers.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Web Development Basic",
        subProgram: ["Web Fundnamentals", "The Command Line"],
      },
      {
        program: "Hyper Text Markup Language (HTML)",
        subProgram: ["Introduction to HTML5", "HTML tags, Metadata,", "Forms", "HTML vs HTML5", "Developer Tools"],
      },
      {
        program: "Web Design Basics",
        subProgram: ["The design Process", "Introduction to User Experience (UX)", "Building and using Mockups"],
      },
      {
        program: "Cascading Style Sheets [CSS]",
        subProgram: ["Introduction to CSS3", "Syntax, Inline, Internal and External", "Media, Animations", "CSS Grid and CSS Layout", "CSS Grid and Flex box"],
      },
      {
        program: "Node Js",
        subProgram: ["Selector, Traversing", "Events, Ajax, DOM"],
      },
      {
        program: "Object Oriented Programming",
        subProgram: ["Inheritance,", "Constructors and Destructor", "Encapsulation", "Polymorphism"],
      },
      {
        program: "JQuery",
        subProgram: ["Selector, Traversing,", "Events, Ajax, DOM"],
      },
      {
        program: "Database Management",
        subProgram: ["SQL", "Data Modeling", "PHP"],
      },
      {
        program: "Java Script Programming",
        subProgram: ["The Fundamental of Code", "Data type, Flow Control, Looping", "Functional Programming", "Objects and Prototype", "Error Handling", "Refactoring and Debugging"],
      },
      {
        program: "Data Base With MongoDB",
        subProgram: ["Implementation of communication.", "Read and write data tothe database.", "Aggregation framework.", "Manage the configuration of the database."],
      },
    ],
    highlights: ["Excellent", "Informative", "Comprehensive", "Engaging", "Innovative", "Resourceful", "Cutting-edge", "Practical", "Hands-on", "Interactive"],
    productName: "WEB_DEVELOPMENT",
  },
  android: {
    words: [
      { text: "Android", className: "text-green-500" },
      { text: "Development", className: "text-green-500" },
    ],
    headerImgUrl: "/images/android-img.svg",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    highlights: ["User-Friendly", "Fast", "Modern UI", "Scalable", "Efficient", "Engaging", "Responsive", "Reliable", "Secure", "Customizable"],
    productName: "ANDROID",
  },
  ai: {
    words: [
      { text: "Artificial", className: "text-red-500" },
      { text: "Intelligence", className: "text-red-500" },
    ],
    headerImgUrl: "/images/ai.svg",
    programOverview: "AI refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. This encompasses the ability of machines to perform tasks commonly associated with human cognition, such as learning from experience, reasoning based on provided data, and adapting to new inputs to solve complex problems. AI can manifest in various forms, from basic rule-based systems to advanced neural networks capable of processing vast amounts of information and making decisions independently.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    highlights: ["Innovative", "Cutting-edge", "Smart", "Efficient", "Reliable", "High-Performance", "Intelligent", "Adaptive", "Predictive", "Analytical"],
    productName: "AI",
  },
  ml: {
    words: [
      { text: "Machine", className: "text-sky-500" },
      { text: "Learning", className: "text-sky-500" },
    ],
    headerImgUrl: "/images/ml.svg",
    programOverview: "This program provides a foundational introduction to Machine Learning (ML) over five sessions. Participants will explore key ML concepts such as supervised and unsupervised learning, regression, classification, and clustering. Practical sessions using Python and Scikit-Learn will focus on implementing and evaluating ML algorithms. By the end of the program, participants will have gained essential skills to apply ML techniques to real-world datasets and scenarios effectively.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Machine Learning Introduction",
        subProgram: ["Machine Learning Introduction."],
      },
      {
        program: "Python Data-Types",
        subProgram: ["Numbers – Integer, Float, Complex Numbers", "Boolean", "String, String operations and Methods", "Lists Methods", "Tuples", "Sets", "Dictionaries"],
      },
      {
        program: "Preprocessing",
        subProgram: ["Importing a dataset in python", "Resolving Missing Values", "Managing Category Variables", "Training and Testing Datasets", "Normalizing Variables", "Normalizing Variables – Python Code"],
      },
      {
        program: "Regression",
        subProgram: ["Simple Linear Regression", "Multiple Linear Regression", "Decision Trees", "Random Forest", "Decision Trees and Random Forest – Python Implementation"],
      },
      {
        program: "Classification",
        subProgram: ["kNN – How it works?", "kNN – Python Implementation", "Decision Tree Classifier and Random Forest Classifier in Python", "SVM – How it works?", "SVM – Python Implementation"],
      },
      {
        program: "Machine Learning Implementation",
        subProgram: ["Implementation of all the algorithms regarding major project"],
      },
    ],
    highlights: ["Predictive", "Innovative", "Efficient", "Data-driven", "Scalable", "Adaptive", "Dynamic", "Smart", "Analytical", "Automated"],
    productName: "ML",
  },
  dataScience: {
    words: [
      { text: "Data", className: "text-green-500" },
      { text: "Science", className: "text-green-500" },
    ],
    headerImgUrl: "/images/dataScience.svg",
    programOverview: "This program provides a foundational introduction to data science over five sessions. Participants will learn essential concepts such as data types, data cleaning, and exploratory data analysis using Python and visualization libraries. Statistical methods for data analysis and basic machine learning concepts will also be covered, offering participants practical skills to analyze data and make informed decisions in various domains.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Introduction to Data Science",
        subProgram: ["What is data science? Why is it important?", "Environmental Setup", "Python Basics", "Fundamentals of Python", "Python Data types", "Loops and Functions", "Numerical computing with Numpy", "Data manipulation using Pandas"],
      },
      {
        program: "Data Science and Analytics",
        subProgram: ["Data and its various classifications: Continuous & Discrete, Structured vs Unstructured", "Mathematics   for Data Science (Probability, Statistics,  Linear Algebra, Gradient Descent, calculus)"],
      },
      {
        program: "Machine Learning",
        subProgram: ["Forecasting and prediction using regression", "Linear Regression", "Logistic Regression"],
      },
      {
        program: "Data Analysis with Python",
        subProgram: ["Cleaning Data", "Data Manipulation", "Summarizing Data"],
      },
      {
        program: "Machine Learning implementation",
        subProgram: ["Implementation of Algorithms", "Analysis and evaluation", "Deploying/  Serving the model"],
      },
    ],
    highlights: ["Data-driven", "Innovative", "Predictive", "Efficient", "Scalable", "Analytical", "Smart", "Insightful", "Resourceful", "Comprehensive"],
    productName: "DATA_SCIENCE",
  },
  cyber: {
    words: [
      { text: "Cyber", className: "text-red-500" },
      { text: "Security", className: "text-red-500" },
    ],
    headerImgUrl: "/images/cyberSecurity.svg",
    programOverview: "This program is designed to introduce participants to essential concepts and practices in cybersecurity over the course of five sessions. Beginning with an overview of cybersecurity's importance and common threats, sessions progress to cover types of cyber threats and vulnerabilities, basic security measures like strong passwords and encryption, securing networks with firewalls and VPNs, and best practices for data management and incident response. By the end, participants will have gained foundational knowledge to enhance their personal and organizational cybersecurity practices effectively.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Introduction to Cyber Security",
        subProgram: ["Introductory classes", "Importance", "Applications", "Malicious  Codes and Terminologies", "Cyber Security Breaches"],
      },
      {
        program: "Information Security Concepts",
        subProgram: ["IS Services", "Attacks", "E-commerce", "Cyber forensics"],
      },
      {
        program: "Operating Systems",
        subProgram: ["Linux Basics", "LAN", "WAN", "Working of the www and Internet"],
      },
      {
        program: "Ethical Hacking Basics",
        subProgram: ["Hacking Techniques"],
      },
      {
        program: "Security Threats and Vulnerabilities",
        subProgram: ["Threats and Vulnerabilities", "Loopholes"],
      },
      {
        program: "Cryptography",
        subProgram: ["Symmetric/ asymmetric keys", "Concurrency", "Protocol Security"],
      },
    ],
    highlights: ["Secure", "Reliable", "Compliant", "Risk-aware", "Resilient", "Scalable", "Adaptive", "Monitored", "Protected", "Vigilant"],
    productName: "CYBER_SECURITY",
  },
  iot: {
    words: [
      { text: "IOT &", className: "text-blue-500" },
      { text: "Robotics", className: "text-blue-500" },
    ],
    headerImgUrl: "/images/robotics.svg",
    programOverview: "This program introduces participants to the fundamentals of Internet of Things (IoT) and Robotics in five sessions. Topics include sensor integration, microcontroller programming, robot design principles, and basic control algorithms. Practical exercises will cover building and programming simple IoT devices and robots, providing participants with foundational skills to explore and innovate in these exciting fields.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Introduction to Microcontroller",
        subProgram: ["What is microcontroller ATMEGA 328p Architecture of Microcontroller How is Microcontroller different from Microprocessor"],
      },
      {
        program: "Arduino IDE Platform",
        subProgram: ["What is Arduino", "Virtual simulator for Arduino", "Architecture of Arduino", "Working with Arduino IDE"],
      },
      {
        program: "Programming With Arduino",
        subProgram: ["Programming an Arduino using C++", "ArduinoCode Implementation", "Mini project discussion"],
      },
      {
        program: "Communication Protocols",
        subProgram: ["12C", "SPI", "Bluetooth"],
      },
      {
        program: "IOT Introduction",
        subProgram: ["Whatis IoT", "IoT Architecture", "What are the challenges and future ofIoT"],
      },
      {
        program: "IoT Wireless Protocols",
        subProgram: ["Zigbee", "Rfd", "Bluetooth", "Wifi", "Nfc", "Protocols-TCP,UDP,", "MQTT/MQTTS,HTTP/HTTPS"],
      },
      {
        program: "IoT Advance",
        subProgram: ["Weatherreporting system", "Social distancing alarm system", "Smart parking system", "Home automation", "Password doorlock system", "IFTTT App", "Sending notifications using various applications", "Smart agriculture system", "Remote controlrobotic system"],
      },
      {
        program: "Things SpeakAPI",
        subProgram: ["Introduction to Sensors", "Rules to react", "Esp8266Wifi Module", "Using Matlab for analysis", "Connection using HTTP"],
      },
    ],
    highlights: ["Automated", "Innovative", "Efficient", "Smart", "Reliable", "Scalable", "Connected", "Cutting-edge", "Adaptive", "Robust"],
    productName: "IOT_ROBOTICS",
  },
  cloudComputing: {
    words: [
      { text: "Cloud", className: "text-purple-500" },
      { text: "Computing", className: "text-purple-500" },
    ],
    headerImgUrl: "/images/cloudComputing.svg",
    programOverview: "This program introduces participants to the fundamentals of cloud computing in five sessions. Topics include cloud deployment models (public, private, hybrid), service models (IaaS, PaaS, SaaS), cloud architecture, virtualization, and security considerations. Practical exercises will cover using major cloud platforms (AWS, Azure, Google Cloud) to deploy applications and manage cloud resources. By the end of the program, participants will have gained essential skills to leverage cloud technologies effectively for various business and personal applications.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    programCurriculums: [
      {
        program: "Introduction to Cloud Computing",
        subProgram: ["The need for Cloud Computing", "Definition of Cloud Computing", "Evolution of Cloud History", "The 5 Characteristics of Cloud Computing Cloud Computing Benefits", "Cap EX vs Op Ex", "Cloud Data Centers"],
      },
      {
        program: "Models of Cloud Computing",
        subProgram: ["SAAS", "PAAS", "IAAS", "SLA( Service Level  Agreement)", "VPC(Virtual Private Cloud)", "Deployment  Models", "Virtualization", "Hypervisorlization", "Hypervisor"],
      },
      {
        program: "Scaling",
        subProgram: ["Horizontal  Scaling", "Vertical Scaling"],
      },
      {
        program: "Containers",
        subProgram: ["What are  Containers", "Advantages", "Virtual Machine vs  Containers"],
      },
      {
        program: "Roles",
        subProgram: ["Cloud Providers", "Cloud Consumer", "Cloud Service  Owner", "Cloud Resource Administrator", "Cloud Auditor", "Cloud Broker", "Cloud Carrier", "Organizational Boundaries", "Trust Boundaries"],
      },
      {
        program: "Cloud Architecture",
        subProgram: ["Definition", "Fundamentals of  Cloud Architecture", "Workload Distribution Architecture", "Resource Pooling  Architecture", "Dynamic Scalability Architecture", "Elastic Resource Architecture", "Service Load Balancing Architecture"],
      },
      {
        program: "Microsoft Azure",
        subProgram: ["Azure Fundamentals", "Azure Networking Azure", "Compute Storage", "Working with Azure"],
      },
      {
        program: "Amazon Web Services (AWS)",
        subProgram: ["Introduction to AWS", "AWS Fundamentals", "AWS Storage Security", "Working with AWS"],
      },
    ],
    highlights: ["Scalable", "Secure", "Efficient", "Reliable", "Cost-effective", "Innovative", "Flexible", "Dynamic", "Adaptable", "Global"],
    productName: "CLOUD_COMPUTING",
  },
  hybridElectricVehicle: {
    words: [
      { text: "Hybrid", className: "text-green-500" },
      { text: "Electric Vehicle", className: "text-green-500" },
    ],
    headerImgUrl: "/images/hybridElectricVehicle.svg",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    highlights: ["Sustainable", "Efficient", "Clean", "Innovative", "Reliable", "Future-Ready", "Advanced", "Energy-Efficient", "Cost-Effective", "Eco-Friendly"],
    productName: "HYBRID_ELECTRIC_VEHICLE",
  },
  autocad: {
    words: [
      { text: "Auto", className: "text-blue-500" },
      { text: "CAD", className: "text-blue-500" },
    ],
    headerImgUrl: "/images/autoCad.svg",
    programOverview: "This program introduces participants to AutoCAD, a leading software for 2D drafting and design, in five sessions. Topics include basic interface navigation, drawing tools, editing commands, and annotation features. Participants will learn to create technical drawings and layouts efficiently, incorporating industry standards. Practical exercises will cover tasks such as creating geometric shapes, applying dimensions, and organizing drawings using layers. By the end of the program, participants will have acquired foundational skills in AutoCAD essential for various design disciplines.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    highlights: ["Precision", "Design", "Innovation", "Efficient", "Reliable", "Professional", "Creative", "Detailed", "Comprehensive", "Effective"],
    productName: "AUTO_CAD",
  },
  devops: {
    words: [
      { text: "Dev", className: "text-orange-500" },
      { text: "Ops", className: "text-orange-500" },
    ],
    headerImgUrl: "/images/devOps.svg",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    highlights: ["Automation", "Scalability", "Agility", "Efficient", "Collaborative", "Innovative", "Reliable", "Continuous Delivery", "Optimized", "Flexible"],
    productName: "DEVOPS",
  },
  marketing: {
    words: [{ text: "Digital Marketing", className: "text-yellow-500" }],
    headerImgUrl: "/images/marketing.svg",
    programOverview: "This program introduces participants to digital marketing essentials in five sessions. Topics include digital channels (websites, social media, email, search engines), key strategies (SEO, SEM, content marketing), and campaign management. Practical exercises cover creating and optimizing digital campaigns, analyzing metrics, and understanding consumer behavior online. By the end of the program, participants will have acquired foundational skills to implement effective digital marketing strategies and enhance online presence for businesses.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    highlights: ["Creative", "Innovative", "Engaging", "Effective", "Strategic", "Scalable", "Global", "Resourceful", "Brand-Focused", "Data-driven"],
    productName: "MARKETING",
  },
  finance: {
    words: [{ text: "Finance", className: "text-yellow-500" }],
    headerImgUrl: "/images/marketing.svg",
    programOverview: "Finance program provides a thorough understanding of financial principles, markets, and instruments. Students will explore key areas such as corporate finance, investment strategies, financial analysis, and risk management. The curriculum combines theoretical knowledge with practical applications, using real-world case studies and financial tools. Graduates will be well-prepared for careers in banking, investment management, financial planning, and corporate finance, equipped with the skills needed to make informed financial decisions and strategies in a dynamic economic environment.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    highlights: ["Creative", "Innovative", "Engaging", "Effective", "Strategic", "Scalable", "Global", "Resourceful", "Brand-Focused", "Data-driven"],
    productName: "MARKETING",
  },
  hr: {
    words: [{ text: "Human Resources", className: "text-yellow-500" }],
    headerImgUrl: "/images/marketing.svg",
    programOverview: "This program introduces participants to fundamental concepts in Human Resources across five sessions. Topics include recruitment, employee relations, performance management, legal compliance, and workplace diversity. Practical exercises will involve applying HR strategies to scenarios, enhancing skills in hiring, managing, and developing talent. By the program's conclusion, participants will have gained essential knowledge and skills to contribute effectively to HR functions within organizations.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    highlights: ["Creative", "Innovative", "Engaging", "Effective", "Strategic", "Scalable", "Global", "Resourceful", "Brand-Focused", "Data-driven"],
    productName: "MARKETING",
  },
  python: {
    words: [{ text: "Python", className: "text-yellow-500" }],
    headerImgUrl: "/images/marketing.svg",
    programOverview: "Python program provides a thorough introduction to Python programming, focusing on key concepts such as syntax, data structures, algorithms, and object-oriented programming. Students will gain hands-on experience through practical projects, covering topics like web development, data analysis, and automation. The program also explores advanced areas such as machine learning and software engineering. Graduates will be equipped for careers in software development, data science, automation, and beyond.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    highlights: ["Creative", "Innovative", "Engaging", "Effective", "Strategic", "Scalable", "Global", "Resourceful", "Brand-Focused", "Data-driven"],
    productName: "PYTHON",
  },
  cplus: {
    words: [{ text: "C & C++", className: "text-yellow-500" }],
    headerImgUrl: "/images/marketing.svg",
    programOverview: "C/C++ program provides a solid foundation in both C and C++ programming languages. Students will learn core concepts such as syntax, data structures, algorithms, memory management, and object-oriented programming. The curriculum includes hands-on projects and real-world applications, ensuring practical experience in writing efficient and robust code. This program equips graduates with the skills necessary for careers in software development, systems programming, game development, and embedded systems.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    highlights: ["Creative", "Innovative", "Engaging", "Effective", "Strategic", "Scalable", "Global", "Resourceful", "Brand-Focused", "Data-driven"],
    productName: "C_CPLUSPLUS",
  },
  java: {
    words: [{ text: "Java", className: "text-yellow-500" }],
    headerImgUrl: "/images/marketing.svg",
    programOverview: "Java program offers comprehensive training in Java programming, covering essential concepts such as object-oriented programming, data structures, algorithms, and software development principles. Students will engage in hands-on projects, gaining practical experience in building robust, scalable applications. The curriculum also includes advanced topics like Java frameworks, web development, and mobile app development. Graduates will be well-prepared for careers in software development, enterprise solutions, web applications, and Android development.",
    deliveryMode: [
      {
        text: "Live virtual classroom",
        icon: "/images/onlineClassRoom.svg",
      },
      {
        text: "Self Paced Learning",
        icon: "/images/selfLearning.svg",
      },
    ],
    highlights: ["Creative", "Innovative", "Engaging", "Effective", "Strategic", "Scalable", "Global", "Resourceful", "Brand-Focused", "Data-driven"],
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
  { label: "SOFT SKILL", src: "/images/soft.png", summary: "Enhance your communication and interpersonal skills." },
  { label: "Mock Interviews", src: "/images/mock.png", summary: "Prepare for interviews with realistic practice sessions." },
  { label: "Portfolio Building", src: "/images/porfolio.png", summary: "Create a standout portfolio that showcases your skills." },
  { label: "Resume Building", src: "/images/cv.png", summary: "Build a professional resume that highlights your strengths." },
  { label: "Mock Tests", src: "/images/mtest.png", summary: "Take mock tests to assess and improve your knowledge." },
  { label: "Interview", src: "/images/interview.png", summary: "Ace your interview with targeted guidance and support." },
];


export const FEATURES = [
  {
    title: "Online Billing, Invoicing, & Contracts",
    description: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
    icon: <FileText className="text-purple-500 w-6 h-6" />,
    // bgColor: "bg-blue-500",
  },
  {
    title: "Easy Scheduling & Attendance Tracking",
    description: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
    icon: <Calendar className="text-purple-600 w-6 h-6" />,
    // bgColor: "bg-orange-500",
  },
  {
    title: "Customer Tracking",
    description: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
    icon: <Users className="text-purple-700 w-6 h-6" />,
    // bgColor: "bg-cyan-500",
  },
];
