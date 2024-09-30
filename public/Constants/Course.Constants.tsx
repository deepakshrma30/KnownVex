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
    title: "Basic",
    description: "For individuals and small teams",
    price: "$9",
    recommended:false,
    features: [
      { name: "Up to 5 projects", included: true },
      { name: "Up to 10 users", included: true },
      { name: "Basic analytics", included: true },
      { name: "24/7 support", included: true },
      { name: "Custom integrations", included: false },
      { name: "Dedicated account manager", included: false },
      { name: "AI-powered insights", included: false },
    ],
  },
  {
    title: "Pro",
    description: "For growing businesses",
    price: "$29",
    recommended:true,
    features: [
      { name: "Unlimited projects", included: true },
      { name: "Up to 50 users", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority support", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated account manager", included: false },
      { name: "AI-powered insights", included: false },
    ],
  },
  {
    title: "Enterprise",
    description: "For large organizations",
    price: "$99",
    recommended:false,
    features: [
      { name: "Unlimited projects", included: true },
      { name: "Unlimited users", included: true },
      { name: "Advanced analytics", included: true },
      { name: "24/7 premium support", included: true },
      { name: "Custom integrations", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "AI-powered insights", included: true },
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
    icon: <FileText className="text-white w-6 h-6" />,
    bgColor: "bg-blue-500",
  },
  {
    title: "Easy Scheduling & Attendance Tracking",
    description:
      "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
    icon: <Calendar className="text-white w-6 h-6" />,
    bgColor: "bg-orange-500",
  },
  {
    title: "Customer Tracking",
    description:
      "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
    icon: <Users className="text-white w-6 h-6" />,
    bgColor: "bg-cyan-500",
  },
]