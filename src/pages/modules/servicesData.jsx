
import webImg from "../../assets/images/webdev.avif";
import mobileImg from "../../assets/images/appdev.png";
import softwareImg from "../../assets/images/custom.webp";
import aiImg from "../../assets/images/diven.jpg";
import cloudImg from "../../assets/images/salesforce_Service-Cloud.png";
import cyberImg from "../../assets/images/cyber.png";
import uiuxImg from "../../assets/images/UI-UX-design-Blog.webp";
import socialImg from "../../assets/images/social-media-2.webp";
import marketingImg from "../../assets/images/digitalmarketing.jpg";

const services = [
  
  // 🔹 KEEP YOUR EXISTING 3 SERVICES ABOVE THIS LINE

  {
   id: "ai-software-development",
    title: "ai-software-development",
    image: aiImg,
    shortDesc:
      "Leverage artificial intelligence and machine learning to automate processes and unlock business intelligence.",
    fullDesc:
      "Our AI-driven software development services help organizations integrate intelligent automation, predictive analytics, and machine learning capabilities into their digital ecosystem. We design scalable AI solutions that enhance decision-making, improve efficiency, and drive innovation across business operations.",

    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI APIs",
      "Node.js",
      "FastAPI",
      "AWS AI Services",
    ],

    features: [
      "Machine Learning Models",
      "Predictive Analytics",
      "AI Automation",
      "Natural Language Processing",
      "Computer Vision Integration",
      "Real-Time Data Processing",
      "Scalable AI Pipelines",
      "API-Based AI Services",
    ],

    benefits: [
      "Smarter business decisions",
      "Process automation",
      "Improved operational efficiency",
      "Data-driven insights",
      "Competitive innovation advantage",
    ],

    process: [
      "AI Opportunity Assessment",
      "Data Collection & Preparation",
      "Model Design & Training",
      "AI Integration Development",
      "Testing & Validation",
      "Deployment & Monitoring",
      "Continuous Model Improvement",
    ],

    success: "Delivered intelligent AI solutions for multiple industries.",

    faqs: [
      {
        q: "What is AI-driven software development?",
        a: "It involves integrating artificial intelligence and machine learning capabilities into software to automate tasks and generate insights.",
      },
      {
        q: "Do I need large data for AI solutions?",
        a: "While more data improves accuracy, we can work with moderate datasets and apply optimization techniques.",
      },
      {
        q: "Can AI integrate with my existing system?",
        a: "Yes. We design AI modules that seamlessly integrate with your current infrastructure.",
      },
      {
        q: "Is AI secure for business use?",
        a: "Yes. We implement enterprise-grade security and data protection practices.",
      },
      {
        q: "Do you provide ongoing AI model support?",
        a: "Yes. We monitor, retrain, and optimize models for continuous improvement.",
      },
    ],
  },

  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    image: cloudImg,
    shortDesc:
      "Transform your infrastructure with scalable, secure, and cost-optimized cloud solutions.",
    fullDesc:
      "We help businesses migrate, modernize, and manage their infrastructure on the cloud. Our cloud solutions focus on high availability, security, and cost efficiency while enabling rapid scalability and improved system reliability.",

    technologies: [
      "AWS",
      "Microsoft Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
    ],

    features: [
      "Cloud Migration",
      "Infrastructure Automation",
      "Auto Scaling",
      "High Availability Setup",
      "Cost Optimization",
      "Disaster Recovery",
      "Containerization",
      "Cloud Monitoring",
    ],

    benefits: [
      "Reduced infrastructure cost",
      "Improved scalability",
      "Better system reliability",
      "Faster deployment cycles",
      "Enhanced security posture",
    ],

    process: [
      "Cloud Readiness Assessment",
      "Architecture Planning",
      "Migration Execution",
      "Security Configuration",
      "Performance Optimization",
      "Monitoring Setup",
      "Ongoing Management",
    ],

    success: "Successfully migrated and optimized multiple enterprise workloads.",

    faqs: [
      {
        q: "What are cloud solutions?",
        a: "Cloud solutions involve hosting and managing applications and infrastructure on cloud platforms instead of on-premise servers.",
      },
      {
        q: "Is cloud migration risky?",
        a: "With proper planning and phased migration, risks are minimal and manageable.",
      },
      {
        q: "Which cloud platform is best?",
        a: "It depends on your workload, budget, and scalability needs. We help you choose the right platform.",
      },
      {
        q: "Do you provide cloud cost optimization?",
        a: "Yes. We continuously monitor and optimize resource usage to reduce costs.",
      },
      {
        q: "Do you manage cloud after deployment?",
        a: "Yes. We offer full cloud management and support services.",
      },
    ],
  },

  {
    id: "cybersecurity-services",
    title: "Cybersecurity Services",
    image: cyberImg,
    shortDesc:
      "Protect your digital assets with advanced threat detection and enterprise-grade security solutions.",
    fullDesc:
      "Our cybersecurity services safeguard your applications, infrastructure, and data against evolving cyber threats. We implement multi-layered security frameworks, continuous monitoring, and compliance-driven protection strategies.",

    technologies: [
      "SIEM Tools",
      "Firewall Systems",
      "Zero Trust Security",
      "Endpoint Protection",
      "AWS Security",
      "Azure Security",
      "Penetration Testing Tools",
    ],

    features: [
      "Threat Detection & Response",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Data Encryption",
      "Identity & Access Management",
      "Security Compliance",
      "24/7 Monitoring",
      "Incident Response",
    ],

    benefits: [
      "Reduced cyber risk",
      "Data protection",
      "Regulatory compliance",
      "Business continuity",
      "Improved customer trust",
    ],

    process: [
      "Security Assessment",
      "Risk Analysis",
      "Security Implementation",
      "Penetration Testing",
      "Monitoring Setup",
      "Incident Response Planning",
      "Continuous Improvement",
    ],

    success: "Protected multiple organizations from critical security threats.",

    faqs: [
      {
        q: "Why is cybersecurity important?",
        a: "It protects sensitive data, prevents breaches, and ensures business continuity.",
      },
      {
        q: "Do small businesses need cybersecurity?",
        a: "Yes. Small businesses are frequent targets of cyber attacks.",
      },
      {
        q: "What is penetration testing?",
        a: "It is simulated hacking to identify vulnerabilities before attackers do.",
      },
      {
        q: "Do you provide compliance support?",
        a: "Yes. We help meet industry security and compliance standards.",
      },
      {
        q: "Is monitoring included?",
        a: "Yes. We offer continuous security monitoring services.",
      },
    ],
  },

  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    image: uiuxImg,
    shortDesc:
      "Create intuitive, engaging, and conversion-focused digital experiences.",
    fullDesc:
      "Our UI/UX design services focus on crafting visually compelling and user-centric interfaces that enhance usability and drive engagement. We combine research, wireframing, prototyping, and modern design principles to deliver impactful digital experiences.",

    technologies: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "Framer",
      "InVision",
      "Zeplin",
    ],

    features: [
      "User Research",
      "Wireframing",
      "Interactive Prototyping",
      "Mobile-First Design",
      "Design Systems",
      "Usability Testing",
      "Conversion Optimization",
      "Accessibility Compliance",
    ],

    benefits: [
      "Better user engagement",
      "Higher conversion rates",
      "Stronger brand identity",
      "Improved usability",
      "Reduced bounce rate",
    ],

    process: [
      "User Research",
      "Information Architecture",
      "Wireframing",
      "Visual Design",
      "Prototyping",
      "Usability Testing",
      "Design Handoff",
    ],

    success: "Delivered modern UX solutions for web and mobile platforms.",

    faqs: [
      {
        q: "What is the difference between UI and UX?",
        a: "UI focuses on visual design, while UX focuses on user experience and usability.",
      },
      {
        q: "Do you redesign existing products?",
        a: "Yes. We provide complete UI/UX modernization services.",
      },
      {
        q: "Will I get design files?",
        a: "Yes. Final editable design files are provided.",
      },
      {
        q: "Do you follow mobile-first design?",
        a: "Yes. All designs are optimized for mobile-first experiences.",
      },
      {
        q: "Do you conduct usability testing?",
        a: "Yes. We validate designs through structured usability testing.",
      },
    ],
  },

  {
    id: "social-media-management",
    title: "Social Media Management",
    image: socialImg,
    shortDesc:
      "Strengthen your brand presence with strategic social media management and content optimization.",
    fullDesc:
      "Our social media management services help businesses build a strong digital presence through strategic content planning, audience engagement, and performance analytics across major platforms.",

    technologies: [
      "Meta Business Suite",
      "Hootsuite",
      "Buffer",
      "Canva",
      "Google Analytics",
      "Social Listening Tools",
    ],

    features: [
      "Content Strategy",
      "Post Scheduling",
      "Audience Engagement",
      "Performance Analytics",
      "Brand Monitoring",
      "Hashtag Strategy",
      "Creative Design",
      "Monthly Reporting",
    ],

    benefits: [
      "Improved brand awareness",
      "Higher audience engagement",
      "Consistent brand voice",
      "Better lead generation",
      "Stronger online community",
    ],

    process: [
      "Account Audit",
      "Content Planning",
      "Creative Design",
      "Scheduling & Publishing",
      "Community Management",
      "Performance Tracking",
      "Optimization",
    ],

    success: "Boosted social engagement for multiple growing brands.",

    faqs: [
      {
        q: "Which platforms do you manage?",
        a: "We manage Facebook, Instagram, LinkedIn, Twitter, and more.",
      },
      {
        q: "Do you create content as well?",
        a: "Yes. We handle complete content creation and design.",
      },
      {
        q: "How often will you post?",
        a: "Posting frequency is customized based on your package and strategy.",
      },
      {
        q: "Do you provide reports?",
        a: "Yes. We provide detailed monthly performance reports.",
      },
      {
        q: "Can you run paid campaigns?",
        a: "Yes. We manage both organic and paid social campaigns.",
      },
    ],
  },

  {
    id: "digital-marketing",
    title: "Digital Marketing",
    image: marketingImg,
    shortDesc:
      "Accelerate growth with data-driven digital marketing strategies that maximize ROI.",
    fullDesc:
      "Our digital marketing services combine SEO, PPC, content marketing, and performance analytics to help businesses attract qualified traffic, generate leads, and improve conversion rates in competitive digital environments.",

    technologies: [
      "Google Ads",
      "Google Analytics",
      "Search Console",
      "SEMrush",
      "Ahrefs",
      "Meta Ads",
    ],

    features: [
      "Search Engine Optimization",
      "Pay-Per-Click Advertising",
      "Content Marketing",
      "Conversion Optimization",
      "Marketing Analytics",
      "Keyword Research",
      "Campaign Management",
      "ROI Tracking",
    ],

    benefits: [
      "Increased website traffic",
      "Higher quality leads",
      "Better conversion rates",
      "Improved brand visibility",
      "Measurable ROI",
    ],

    process: [
      "Market Research",
      "Strategy Development",
      "Campaign Setup",
      "Content Creation",
      "Performance Tracking",
      "Optimization",
      "Reporting",
    ],

    success: "Generated measurable growth and ROI for diverse clients.",

    faqs: [
      {
        q: "How long does SEO take to show results?",
        a: "SEO typically shows noticeable results within 3–6 months depending on competition.",
      },
      {
        q: "Do you run Google Ads campaigns?",
        a: "Yes. We manage and optimize high-performing PPC campaigns.",
      },
      {
        q: "Can you guarantee rankings?",
        a: "No ethical agency guarantees rankings, but we follow proven best practices for strong growth.",
      },
      {
        q: "Do you provide monthly reports?",
        a: "Yes. Transparent performance reports are included.",
      },
      {
        q: "Is digital marketing suitable for small businesses?",
        a: "Yes. We tailor strategies specifically for small and growing businesses.",
      },


    ],
  },
{
    id: "website-development",
    title: "Website Development",
    image: webImg,
    shortDesc:
      "Design and develop high-performance, responsive websites that elevate your digital presence.",
    fullDesc:
      "Our website development services focus on building fast, secure, and scalable web solutions tailored to your business objectives. We combine modern UI/UX principles with robust backend architecture to deliver websites that drive engagement, improve conversions, and support long-term growth.",

    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],

    features: [
      "Fully Responsive Design",
      "SEO-Friendly Structure",
      "High-Speed Performance",
      "Secure Architecture",
      "Cross-Browser Compatibility",
      "CMS Integration",
      "Scalable Codebase",
      "Analytics Integration",
    ],

    benefits: [
      "Improved online visibility",
      "Higher user engagement",
      "Better conversion rates",
      "Future-ready architecture",
      "Enhanced brand credibility",
    ],

    process: [
      "Requirement Analysis",
      "UI/UX Wireframing",
      "Frontend & Backend Development",
      "Quality Assurance Testing",
      "Deployment & Optimization",
      "Ongoing Maintenance",
    ],

    success: "Delivered 150+ high-performance websites globally.",

    faqs: [
      {
        q: "How long does it take to develop a website?",
        a: "A standard business website typically takes 2–6 weeks depending on complexity, features, and content readiness.",
      },
      {
        q: "Will my website be mobile-friendly?",
        a: "Yes. Every website we build is fully responsive and optimized for mobile, tablet, and desktop devices.",
      },
      {
        q: "Do you provide SEO optimization?",
        a: "Yes. We implement technical SEO best practices including clean code, fast loading, and proper meta structure.",
      },
      {
        q: "Can I update the website content myself?",
        a: "Yes. We can integrate a user-friendly CMS so you can easily manage content without technical knowledge.",
      },
      {
        q: "Do you provide post-launch support?",
        a: "Absolutely. We offer ongoing maintenance, security updates, and performance monitoring.",
      },
    ],
  },

  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    image: mobileImg,
    shortDesc:
      "Build scalable, high-performance mobile applications for Android and iOS platforms.",
    fullDesc:
      "We develop feature-rich native and cross-platform mobile applications designed for performance, security, and exceptional user experience. Our team focuses on scalable architecture, intuitive UI/UX, and seamless integrations to help businesses succeed in the mobile-first world.",

    technologies: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Firebase",
      "Dart",
      "Java",
    ],

    features: [
      "Cross-Platform Compatibility",
      "High Performance Optimization",
      "Modern UI/UX Design",
      "Push Notifications",
      "Offline Mode Support",
      "Secure Authentication",
      "API Integrations",
      "App Store & Play Store Deployment",
    ],

    benefits: [
      "Stronger customer engagement",
      "Increased brand reach",
      "Real-time user interaction",
      "Scalable mobile architecture",
      "Faster time to market",
    ],

    process: [
      "Business Requirement Analysis",
      "App Architecture Planning",
      "UI/UX Prototyping",
      "Agile Development",
      "Comprehensive Testing",
      "Store Deployment",
      "Continuous Support",
    ],

    success: "Successfully launched 80+ mobile applications.",

    faqs: [
      {
        q: "How much does mobile app development cost?",
        a: "The cost depends on features, complexity, and platform requirements. Basic apps start lower, while enterprise apps require larger investment.",
      },
      {
        q: "Can one app work on both Android and iOS?",
        a: "Yes. Using cross-platform frameworks like Flutter or React Native, we can build a single codebase for both platforms.",
      },
      {
        q: "Do you handle Play Store and App Store submission?",
        a: "Yes. We provide complete deployment support including store compliance and publishing.",
      },
      {
        q: "Will my app be scalable for future growth?",
        a: "Absolutely. We design apps using scalable architecture to support future feature expansion and user growth.",
      },
      {
        q: "Do you provide maintenance after launch?",
        a: "Yes. We offer ongoing support, updates, bug fixes, and performance optimization.",
      },
    ],
  },

  {
    id: "custom-software-development",
    title: "Custom Software Development",
    image: softwareImg,
    shortDesc:
      "Develop enterprise-grade custom software tailored to your unique business workflows.",
    fullDesc:
      "Our custom software development services deliver secure, scalable, and high-performance enterprise solutions designed specifically for your operational needs. We focus on automation, system integration, and cloud-ready architecture to help organizations improve efficiency and achieve digital transformation.",

    technologies: [
      "Node.js",
      "Python",
      "Microservices",
      "Docker",
      "AWS",
      "PostgreSQL",
      ".NET Core",
    ],

    features: [
      "Enterprise-Grade Security",
      "Scalable Microservices Architecture",
      "Custom Workflow Automation",
      "Third-Party Integrations",
      "Cloud-Ready Deployment",
      "High Availability",
      "Role-Based Access Control",
      "Advanced Reporting",
    ],

    benefits: [
      "Streamlined business operations",
      "Improved productivity",
      "Reduced manual workload",
      "Better data visibility",
      "Long-term scalability",
    ],

    process: [
      "Business Process Analysis",
      "Solution Architecture Design",
      "Custom Development",
      "Integration & Testing",
      "Cloud Deployment",
      "Performance Monitoring",
      "Long-Term Support",
    ],

    success: "Trusted by multiple enterprise clients worldwide.",

    faqs: [
      {
        q: "What is custom software development?",
        a: "It is the process of building software specifically tailored to a company’s unique business requirements and workflows.",
      },
      {
        q: "How is custom software different from off-the-shelf solutions?",
        a: "Custom software is fully tailored, scalable, and flexible, whereas off-the-shelf software is generic and limited in customization.",
      },
      {
        q: "Is custom software scalable?",
        a: "Yes. We design modular and scalable systems that grow with your business needs.",
      },
      {
        q: "Do you provide cloud deployment?",
        a: "Yes. We support deployment on AWS, Azure, and Google Cloud platforms.",
      },
      {
        q: "What kind of support do you offer after delivery?",
        a: "We provide long-term maintenance, monitoring, upgrades, and technical support.",
      },
    ],
  },
  
];

export default services;