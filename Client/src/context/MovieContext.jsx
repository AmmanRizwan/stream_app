import React, { createContext, useState } from "react";
import faq from '../assets/data/faq.js';
import { CgPhone, CgMail, CgTwitter, CgFacebook, CgInbox, CgInstagram, CgArrowLeft, CgArrowRight } from "react-icons/cg";
import movieData from '../assets/data/movie_image/movieImage.js';

export const MovieContext = createContext(null);

const MovieContextProvider = (props) => {

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState([]);

  const privacy_info = [
    {
      id: 0,
      title: "Personal Identification Information",
      description: "IAStream collects personal data necessary for account creation and service optimization:",
      points: ["Full Name", "Email Address", "Date of Birth", "Account Credentials", "Profile Preferences"],
    },
    {
      id: 1,
      title: "Technical and Usage Data",
      description: "We automatically collect technical information to enhance user experience:",
      points: [
        "IP Address",
        "Device Type",
        "Browser Information",
        "Operating System",
        "Viewing History",
        "Streaming Preferences",
        "Interaction Patterns",
        "Geographic Location",
      ],
    },
    {
      id: 2,
      title: "Direct Collection",
      description: "",
      points: [
        "User Registration",
        "Profile Creation",
        "Voluntary Information Submission",
        "Account Settings",
      ],
    },
    {
      id: 3,
      title: "Automated Collection",
      description: "",
      points: [
        "Cookies",
        "Web Beacons",
        "Local Storage Technologies",
        "Network Traffic Analysis",
      ],
    },
    {
      id: 4,
      title: "Primary Usage Objectives",
      description: "",
      points: [
        "User Account Management",
        "Personalized Content Recommendations",
        "Service Improvement",
        "Technical Support",
        "Security Monitoring",
        "Fraud Prevention",
      ],
    },
    {
      id: 5,
      title: "Data Access and Management",
      description: "Users possess comprehensive rights regarding their personal information:",
      points: [
        "View Collected Data",
        "Request Data Deletion",
        "Update Personal Information",
        "Restrict Data Processing",
        "Export Personal Data",
        "Withdraw Consent",
      ],
    },
  ]

  const notice_info = [
    {
      id: 0,
      title: "Term of Service",
      description: "By Accessing and using IAStream, you agree to the following terms:",
      points: [
        "Users must be 18 years or older or have parental consent",
        "Content is for personal, non-commercial use",
        "Prohibited from redistributing, reproducing, or reselling content",
        "Account sharing is strictly forbidden"
      ]
    },
    {
      id: 1,
      title: "Copyright and Intellectual Property",
      description: "All content on IAStream is protected by copyright laws. We respect intellectual property rights and:",
      points: [
        "Do not own or claim ownership of third-party content",
        "Provide content through legal licensing agreements",
        "Comply with Digital Millennium Copyright Act (DMCA)",
        "Respond to legitimate copyright infringement claims",
      ],
    },
    {
      id: 2,
      title: "Privacy Policy",
      description: "IAStream is committed to protecting user privacy:",
      points: [
        "Personal data collected is used for service improvement",
        "We do not sell user data to third parties",
        "Secure encryption protects user information",
        "Users can request data deletion at any time"
      ],
    },
    {
      id: 3,
      title: "Liability and Disclaimer",
      description: "IAStream provides content \"as is\" with no warranties:",
      points: [
        "Not responsible for content accuracy or availability",
        "No guarantee of uninterrupted service",
        "Limited liability for damages",
        "Right to modify services without prior notice"
      ],
    },
    {
      id: 4,
      title: "Content Restrictions",
      description: "Users agree to:",
      points: [
        "Not upload harmful or illegal content",
        "Respect community guidelines",
        "Maintain appropriate conduct",
        "Comply with local and international laws"
      ],
    },
    {
      id: 5,
      title: "Contact Information",
      description: "For legal inquiries, contact:",
      points: [
        "Legal Department: IAStream Corporation",
        "Email: legal@iastream.com"
      ],
    },
  ]

  const startSpeedTest = () => {
    const downloadSpeed = (Math.random() * 50 + 10).toFixed(2);
    const uploadSpeed = (Math.random() * 25 + 5).toFixed(2);
    setLoading(true);
    setValue(["Testing..."]);
    
    setTimeout(() => {
      setValue([`Download: ${downloadSpeed} Mbps`, `Upload: ${uploadSpeed} Mbps`, `Ping: ${(Math.random() * 50 + 10).toFixed(2)} ms`]);
    }, 2000);
  }


  const account_info = [
    {
      id: 0,
      title: "Subscription",
      detail: "Free Tier",
      setting: "Manage",
    },
    {
      id: 1,
      title: "Viewing Preferences",
      detail: "Customize your experience",
      setting: "Edit Preferences",
    },
    {
      id: 2,
      title: "Privacy Settings",
      detail: "Control your data",
      setting: "Manage Privacy",
    },
    {
      id: 3,
      title: "Parental Controls",
      detail: "Manage Content restrictions",
      setting: "Set Controls",
    }
  ]

  const help_center_info = [
    {
      id: 0,
      title: "Welcome to IAStream: Your Free Streaming Destination",
      description: "IAStream is a revolutionary free streaming platform offering unlimited access to movies, TV shows, and web series across multiple genres and languages. Our mission is to provide high-quality entertainment without any subscription fees, making world-class content accessible to everyone. Whether you're a movie enthusiast, series binger, or casual viewer, iaStream delivers an extensive library of content tailored to diverse preferences.",
    },
    {
      id: 1,
      title: "Getting Started",
      description: "Launching IAStream is simple and straightforward. Navigate to our website, create a free account using your email address, and instantly gain access to thousands of titles. No credit card required, no hidden charges, and no complicated signup processes. Our user-friendly interface ensures you can start streaming within minutes, with personalized recommendations based on your viewing history and preferences.",
    },
    {
      id: 2,
      title: "Content Variety",
      description: "Our extensive content library spans multiple categories including Hollywood blockbusters, independent films, international cinema, trending TV shows, classic series, documentaries, anime, and exclusive web series. We continuously update our collection, ensuring fresh and exciting content is always available. From action-packed adventures to heartwarming dramas, romantic comedies to gripping thrillers, IAStream has something for every mood and taste.",
    },
    {
      id: 3,
      title: "Streaming Quality",
      description: "IAStream is committed to delivering superior streaming experiences. Our platform supports multiple video qualities ranging from standard definition to full HD 1080p, adapting seamlessly to your internet connection. Advanced streaming technology ensures minimal buffering, smooth playback, and an immersive viewing experience across devices including smartphones, tablets, laptops, and smart TVs.",
    },
    {
      id: 4,
      title: "Device Compatibility",
      description: "Access IAStream anywhere, anytime. Our platform is fully compatible with multiple operating systems and devices. Whether you're using Windows, macOS, Android, iOS, or smart TV platforms, our responsive design guarantees optimal performance. Simply log in through our website or download our dedicated mobile apps to enjoy uninterrupted streaming on your preferred device.",
    },
    {
      id: 5,
      title: "Account Management",
      description: "Manage your IAStream experience effortlessly. Create personalized watchlists, track viewing history, receive content recommendations, and customize your profile settings. Our intuitive account dashboard allows you to control privacy settings, manage notifications, and explore personalized content suggestions tailored to your viewing habits.",
    },
    {
      id: 6,
      title: "Customer Support",
      description: "Our dedicated support team is available 24/7 to address any queries or technical issues. Contact us through multiple channels including live chat, email support, and comprehensive FAQ sections. We're committed to ensuring a seamless and enjoyable streaming experience for all our users.",
    },
    {
      id: 7,
      title: "Legal and Privacy",
      description: "IAStream prioritizes user privacy and content legality. We adhere to strict copyright regulations, partnering with content creators and distributors to provide legitimate streaming options. Our robust privacy policy ensures your personal information remains secure and confidential, with transparent data handling practices.",
    },
  ]
  
  const contact_info = [
  {
    id: 0,
    title: "Phone",
    icon: <CgPhone size={30} />,
    description: "000-800-919-1694"
  },
  {
    id: 1,
    title: "Email",
    icon: <CgMail size={30} />,
    description: "ammanrizwan00007@gmail.com",
  },
  {
    id: 2,
    title: "Twitter",
    icon: <CgTwitter size={30} />,
    description: "@amman_rizwan47",
  },
  {
    id: 3,
    title: "Facebook",
    icon: <CgFacebook size={30} />,
    description: "@amman_rizwan47",
  },
  {
    id: 4,
    title: "LinkedIn",
    icon: <CgInbox size={30} />,
    description: "AmmanRizwan",
  },
  {
    id: 5, 
    title: "Instagram",
    icon: <CgInstagram size={30} />,
    description: "@amman_rizwan47",
  }
]

  const waystowatch_data = [
    {
      id: 0,
      title: "Introduction to IAStream Accessibility",
      description: "IAStream is designed to provide seamless, universal access to your favorite movies, TV shows, and web series across multiple devices and platforms. Our mission is to ensure that high-quality entertainment is just a click away, regardless of your preferred viewing device or location. With comprehensive compatibility and user-friendly interfaces, IAStream transforms how you consume digital content.",
      point: [],
    },
    {
      id: 1,
      title: "Web Browsers",
      description: "IAStream offers full-featured streaming directly through web browsers, ensuring accessibility without additional software downloads. Compatible with:",
      point: [
        "Google Chrome",
        "Mozilla Firefox",
        "Microsoft Edge",
        "Safari",
        "Opera"
      ]
    },
    {
      id: 2,
      title: "Mobile Devices",
      description: "IAStream's mobile experience is optimized for smartphones and tablets across major operating systems:",
      point: []
    },
    {
      id: 3,
      title: "iOS Devices",
      description: "",
      point: [
        "iPhone (iOS 13 and above)",
        "iPad (iPadOS 13 and above)",
        "Available through mobile web browser",
        "Future plans for dedicated App Store application"
      ]
    },
    {
      id: 4,
      title: "Android Devices",
      description: "",
      point: [
        "Smartphones running Android 8.0 (Oreo) and higher",
        "Tablets with Android 8.0 and above",
        "Accessible via mobile web browser",
        "Compatibility with various screen sizes and resolutions"
      ]
    },
    {
      id: 5,
      title: "Desktop and Laptop Computers",
      description: "IAStream ensures comprehensive support for desktop and laptop users:",
      point: [],
    },
    {
      id: 6,
      title: "Windows Computers",
      description: "",
      point: [
        "Windows 10 and 11",
        "Minimum screen resolution: 1280x720",
        "Compatible with most modern web browsers",
        "No additional software installation required",
      ]
    },
    {
      id: 7,
      title: "Mac Computers",
      description: "",
      point: [
        "macOS 10.15 (Catalina) and newer",
        "Minimum screen resolution: 1280x720",
        "Full browser compatibility",
        "Seamless streaming experience",
      ]
    },
    {
      id: 8,
      title: "Security and Privacy",
      description: "All streaming occurs through encrypted connections, ensuring user data protection and secure content delivery. IAStream implements robust security protocols to safeguard user information and prevent unauthorized access.",
      point: []
    },
    {
      id: 9,
      title: "Continuous Improvement",
      description: "We are committed to expanding device compatibility, improving streaming technologies, and enhancing user experience. Regular updates will introduce new features, support additional devices, and optimize performance.",
      point: []
    },
  ]

  const termofuse_data = [
    {
      id: 0,
      title: "Introduction and Acceptance of Terms",
      description: "IAStream provides a free streaming platform designed to offer users access to movies, TV shows, and web series through an online streaming service. By accessing or using IAStream, you agree to be bound by these comprehensive Terms of Service, which govern your use of our platform. These terms establish the legal framework for your interaction with our service, outlining rights, responsibilities, and conditions of usage.",
    },
    {
      id: 1,
      title: "User Eligibility and Account Registration",
      description: "Users must be at least 13 years of age to create an account and access IAStream. By registering, you affirm that you are of legal age or have parental consent. During registration, you agree to provide accurate, current, and complete information. IAStream reserves the absolute right to verify user information and suspend accounts found to contain false or misleading details. Each user is responsible for maintaining the confidentiality of their account credentials and accepts full responsibility for all activities conducted under their account.",
    },
    {
      id: 2,
      title: "Content Usage and Streaming Rights",
      description: "IAStream offers a diverse library of streaming content, including movies, television shows, and web series. Users acknowledge and understand that the platform provides access to content for personal, non-commercial entertainment purposes only. Downloading, reproducing, distributing, modifying, or transmitting any content without explicit written permission from IAStream or the respective content owners is strictly prohibited. The platform does not guarantee continuous, uninterrupted access to any specific content and reserves the right to modify, remove, or add content without prior notice.",
    },
    {
      id: 3,
      title: "Privacy and Data Management",
      description: "By using IAStream, you consent to our data collection, storage, and processing practices as outlined in our Privacy Policy. We collect user information to provide personalized streaming experiences, improve service quality, and comply with legal requirements. Personal data is handled with strict confidentiality, employing industry-standard encryption and security protocols to protect user information.",
    },
    {
      id: 4,
      title: "Content Licensing and Intellectual Property",
      description: "All content available on IAStream is provided through licensing agreements with content creators and distributors. Users acknowledge that IAStream does not own most streaming content and serves as a platform facilitating content access. Intellectual property rights remain with their respective owners. Users are prohibited from claiming ownership or rights to any content accessed through the platform.",
    },
    {
      id: 5,
      title: "Modification of Terms",
      description: "IAStream reserves the right to modify these Terms of Service at any time. Users will be notified of significant changes, and continued platform usage after modifications constitutes acceptance of the updated terms.",
    },
    {
      id: 6,
      title: "Termination of Service",
      description: "IAStream may terminate or suspend user access immediately and without notice for violations of these terms, suspicious activities, or at its sole discretion. Users may also voluntarily terminate their account by following the designated account deletion process.",
    },
    {
      id: 7,
      title: "Governing Law and Jurisdiction",
      description: "These Terms of Service are governed by the laws of [Relevant Jurisdiction], with any disputes subject to resolution through arbitration or appropriate legal channels in the specified jurisdiction.",
    },
    {
      id: 8,
      title: "Contact Information",
      description: "For inquiries, concerns, or clarifications regarding these Terms of Service, users can contact IAStream's support team at ammanrizwan00007@gmail.com.",
    }
  ]

  const termofuse_point = [
    {
      id: 0,
      title: "User Conduct and Platform Regulations",
      description: "Users are expected to engage with IAStream responsibly and ethically. Prohibited activities include, but are not limited to:",
      point: [
        "Attempting to gain unauthorized access to the platform's systems",
        "Uploading malicious software or content",
        "Harassing or threatening other users",
        "Violating intellectual property rights",
        "Engaging in fraudulent activities",
        "Circumventing platform security mechanisms",
      ]
    },
    {
      id: 1,
      title: "Disclaimer of Warranties",
      description: "IAStream provides its streaming service \"as is\" and \"as available\" without any explicit or implied warranties. The platform does not guarantee:",
      point: [
        "Continuous, uninterrupted service",
        "Absolute content availability",
        "Perfect video or audio quality",
        "Complete elimination of technical issues"
      ],
    },
    {
      id: 2,
      title: "Limitation of Liability",
      description: "IAStream shall not be held liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from platform usage. This includes potential losses related to:",
      point: [
        "Content unavailability",
        "Technical malfunctions",
        "User data breaches",
        "Third-party actions",
        "Streaming interruptions"
      ],
    }
  ]

  const faqpage_data = [
    {
      id: 0,
      title: "What is IASTREAM?",
      image: "",
      description: ["IASTREAM is a revolutionary free streaming platform designed to provide unlimited entertainment access to users worldwide.", "Our platform offers a comprehensive collection of TV shows, movies, and web series without any financial barriers, ensuring that high-quality entertainment is accessible to everyone.", "We aim to break traditional streaming boundaries by eliminating subscription costs and providing a seamless viewing experience."],
    },
    {
      id: 1,
      title: "How is IASTREAM completely free?",
      image: "",
      description: ["Unlike traditional streaming services that charge monthly subscriptions, IASTREAM operates on an innovative model that allows free content streaming.", "We generate revenue through strategic advertising partnerships and sponsorships, which enables us to offer our entire content library without charging viewers. ", "This approach ensures that users can enjoy unlimited entertainment without worrying about monthly bills or hidden charges."],
    },
    {
      id: 2,
      title: "What types of content are available?",
      image: "",
      description: ["IASTREAM boasts a diverse and extensive content library spanning multiple genres, languages, and categories.", "Our collection includes the latest blockbuster movies, trending international and regional TV shows, critically acclaimed web series, classic films, independent productions, documentaries, and content catering to various audience preferences.", "Whether you enjoy action, comedy, drama, romance, thriller, or niche genres, IASTREAM has something for everyone."],
    },
    {
      id: 3,
      title: "What about streaming quality?",
      image: "",
      description: ["We understand the importance of visual experience and offer adaptive streaming technologies.", "IASTREAM provides multiple quality options ranging from standard definition to high-definition and 4K resolution, depending on your internet connection speed.", "Our advanced streaming algorithms automatically adjust video quality to ensure smooth playback and minimal buffering."],
    },
    {
      id: 4,
      title: "Content update frequency?",
      image: "",
      description: ["Our content library is dynamically updated weekly, ensuring fresh and engaging entertainment options.", "We continuously negotiate with content creators, production houses, and distributors to expand our collection.", "Users can expect new releases, latest episodes of ongoing series, and diverse content additions to keep the streaming experience exciting and current."],
    },
    {
      id: 5,
      title: "Geographical restrictions?",
      image: "",
      description: ["IASTREAM aims to provide global accessibility.", "While we strive to make content available worldwide, some regional limitations might exist due to licensing agreements.","We continuously work on expanding our global reach and negotiating broader content distribution rights to minimize geographical restrictions."],
    },
    {
      id: 6,
      title: "Content recommendation system?",
      image: "",
      description: ["IASTREAM incorporates advanced recommendation algorithms that analyze your viewing history and preferences.", "These intelligent suggestions help users discover new content aligned with their interests, enhancing overall entertainment exploration and user engagement."],
    },
    {
      id: 7,
      title: "Privacy and data protection?",
      image: "",
      description: ["We implement stringent data protection protocols, ensuring user privacy and secure browsing.", "Our platform adheres to international data protection standards, with transparent privacy policies that safeguard user information and viewing preferences."],
    }
  ]
  
  const footer_data = [
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "Help Center",
      link: "/helpcenter",
    },
    {
      name: "Account",
      link: "/account",
    },
    {
      name: "Media Center",
      link: "/mediacenter",
    },
    {
      name: "Investor Relations",
      link: "/investor",
    },
    {
      name: "Jobs",
      link: "/jobs",
    },
    {
      name: "Ways to Watch",
      link: "/waystowatch",
    },
    {
      name: "Terms of Use",
      link: "/termofuse",
    },
    {
      name: "Privacy",
      link: "/privacy",
    },
    {
      name: "Cookie Preferences",
      link: "/cookie",
    },
    {
      name: "Corporate Information",
      link: "/corporate_info",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Speed Test",
      link: "/speedtest",
    },
    {
      name: "Legal Notice",
      link: "/legalnotice",
    },
    {
      name: "Only on IAStream",
      link: "/onlyiastream",
    },
  ]
  
  const [CardPopUp, setCardPopUp] = useState(false);
  const [Id, setId] = useState(null);
  const [select, setSelect] = useState(null);
  
  const handleSelect = (id) => {
    setSelect(id === select ? null : id);
  }

  const handlePopUp = () => {
    setCardPopUp(!CardPopUp);
  }
  
  const CloseBtn = () => {
    setCardPopUp(false);
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slideToScroll: 4,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 5,
          slideToScroll: 4,
          infinite: false,
          dots: false,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slideToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slideToScroll: 1,
          infinite: false,
          dots: false
        }
      },
    ]
  };

  const ContextValue = {
    faq,
    settings, 
    CardPopUp, 
    Id, 
    setId, 
    handlePopUp, 
    CloseBtn,
    select,
    handleSelect,
    footer_data,
    faqpage_data,
    termofuse_data,
    termofuse_point,
    waystowatch_data,
    contact_info,
    movieData,
    help_center_info,
    account_info,
    loading,
    value,
    startSpeedTest,
    notice_info,
    privacy_info,
  };


  return (
    <MovieContext.Provider value={ContextValue}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider;