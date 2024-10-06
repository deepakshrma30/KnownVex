import { Calendar, FileText, Users } from "lucide-react";

export const COURSE_CONTANTS: any = {
  web: {
    words: [
      { text: "Web", className: "text-purple-500" },
      { text: "Development", className: "text-purple-500" },
    ],
    description:
      "We Can't Wait To Explore Creativity And Build Amazing Websites Together!",
    headerImgUrl: "/images/webDevelopment.svg",
    tabs: [
      {
        id: "tab1",
        heading: "Overview",
        content: "Overview content for Web Development.",
        description: "Description of the overview.",
      },
      {
        id: "tab2",
        heading: "Content",
        content: "Content details for Web Development.",
        description: "Description of the content.",
      },
      {
        id: "tab3",
        heading: "Details",
        content: "Detailed information for Web Development.",
        description: "Description of the details.",
      },
    ],
    highlights: [
      "Excellent",
      "Informative",
      "Comprehensive",
      "Engaging",
      "Innovative",
      "Resourceful",
      "Cutting-edge",
      "Practical",
      "Hands-on",
      "Interactive",
    ],
    programCurriculums: [
      {
        program: "Web Development Basic",
        subProgram: [
          "The design Process",
          "Introduction to User Experience (UX)",
          "Building and using Mockups",
        ],
      },
      {
        program: "Hyper Text Markup Language (HTML)",
        subProgram: [
          "The design Process",
          "Introduction to User Experience (UX)",
          "Building and using Mockups",
        ],
      },
      {
        program: "Web Design Basics",
        subProgram: [
          "The design Process",
          "Introduction to User Experience (UX)",
          "Building and using Mockups",
        ],
      },
    ],
  },
  android: {
    words: [
      { text: "Android", className: "text-green-500" },
      { text: "Development", className: "text-green-500" },
    ],
    headerImgUrl: "/images/android-img.svg",
    tabs: [
      {
        id: "tab1",
        heading: "Overview",
        content: "Overview content for Android Development.",
        description: "Description of the overview.",
      },
      {
        id: "tab2",
        heading: "Content",
        content: "Content details for Android Development.",
        description: "Description of the content.",
      },
      {
        id: "tab3",
        heading: "Details",
        content: "Detailed information for Android Development.",
        description: "Description of the details.",
      },
    ],
    highlights: [
      "User-Friendly",
      "Fast",
      "Modern UI",
      "Scalable",
      "Efficient",
      "Engaging",
      "Responsive",
      "Reliable",
      "Secure",
      "Customizable",
    ],
  },
  ai: {
    words: [
      { text: "Artificial", className: "text-red-500" },
      { text: "Intelligence", className: "text-red-500" },
    ],
    headerImgUrl: "/images/ai.svg",
    tabs: [
      {
        id: "tab1",
        heading: "Overview",
        content: "Overview content for Artificial Intelligence.",
        description: "Description of the overview.",
      },
      {
        id: "tab2",
        heading: "Content",
        content: "Content details for Artificial Intelligence.",
        description: "Description of the content.",
      },
      {
        id: "tab3",
        heading: "Details",
        content: "Detailed information for Artificial Intelligence.",
        description: "Description of the details.",
      },
    ],
    highlights: [
      "Innovative",
      "Cutting-edge",
      "Smart",
      "Efficient",
      "Reliable",
      "High-Performance",
      "Intelligent",
      "Adaptive",
      "Predictive",
      "Analytical",
    ],
  },
  devops: {
    words: [
      { text: "DevOps", className: "text-blue-500" },
      { text: "Engineering", className: "text-blue-500" },
    ],
    tabs: [
      {
        id: "tab1",
        heading: "Overview",
        content: "Overview content for DevOps Engineering.",
        description: "Description of the overview.",
      },
      {
        id: "tab2",
        heading: "Content",
        content: "Content details for DevOps Engineering.",
        description: "Description of the content.",
      },
      {
        id: "tab3",
        heading: "Details",
        content: "Detailed information for DevOps Engineering.",
        description: "Description of the details.",
      },
    ],
    highlights: [
      "Automated",
      "Scalable",
      "Efficient",
      "Reliable",
      "Secure",
      "Fast",
      "Continuous",
      "Managed",
      "Monitored",
      "Streamlined",
    ],
  },
  finance: {
    words: [
      { text: "Finance", className: "text-yellow-500" },
      { text: "Management", className: "text-yellow-500" },
    ],
    tabs: [
      {
        id: "tab1",
        heading: "Overview",
        content: "Overview content for Finance Management.",
        description: "Description of the overview.",
      },
      {
        id: "tab2",
        heading: "Content",
        content: "Content details for Finance Management.",
        description: "Description of the content.",
      },
      {
        id: "tab3",
        heading: "Details",
        content: "Detailed information for Finance Management.",
        description: "Description of the details.",
      },
    ],
    highlights: [
      "Strategic",
      "Accurate",
      "Analytical",
      "Efficient",
      "Risk-Aware",
      "Predictive",
      "Secure",
      "Transparent",
      "Scalable",
      "Dynamic",
    ],
  },
  hr: {
    words: [
      { text: "Human", className: "text-pink-500" },
      { text: "Resources", className: "text-pink-500" },
    ],
    tabs: [
      {
        id: "tab1",
        heading: "Overview",
        content: "Overview content for Human Resources.",
        description: "Description of the overview.",
      },
      {
        id: "tab2",
        heading: "Content",
        content: "Content details for Human Resources.",
        description: "Description of the content.",
      },
      {
        id: "tab3",
        heading: "Details",
        content: "Detailed information for Human Resources.",
        description: "Description of the details.",
      },
    ],
    highlights: [
      "Efficient",
      "Compliant",
      "Reliable",
      "Scalable",
      "Secure",
      "Transparent",
      "Supportive",
      "Engaging",
      "Inclusive",
      "Dynamic",
    ],
  },
};
;


export const PRICING_PLAN = [
  {
    title: "Self",
    description: "For Self",
    price: "10,000",
    originalPrice:"5,000",
    recommended:false,
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
    originalPrice:"6,000",
    recommended:true,
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
    originalPrice:"8,000",
    recommended:false,
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
]

export const SERVICES = [
  { label: "SOFT SKILL", src: "/images/soft.png" },
  { label: "Mock Interviews", src: "/images/mock.png" },
  { label: "Portfolio Building", src: "/images/porfolio.png" },
  { label: "Resume Building", src: "/images/cv.png" },
  { label: "Mock Tests", src: "/images/mtest.png" },
  { label: "Interview", src: "/images/interview.png" },
];

export const FEATURES = [
  {
    title: "Online Billing, Invoicing, & Contracts",
    description:
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
    icon: <FileText className="text-purple-500 w-6 h-6" />,
    // bgColor: "bg-blue-500",
  },
  {
    title: "Easy Scheduling & Attendance Tracking",
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
    icon: <Calendar className="text-purple-600 w-6 h-6" />,
    // bgColor: "bg-orange-500",
  },
  {
    title: "Customer Tracking",
    description:
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
    icon: <Users className="text-purple-700 w-6 h-6" />,
    // bgColor: "bg-cyan-500",
  },
]