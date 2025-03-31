// Main JavaScript file for Career Compass

// Get DOM elements
const tabButtons = document.querySelectorAll('.tab-btn');
const levelDescription = document.getElementById('level-description');
const pathsContainer = document.getElementById('paths-container');
const pathDetails = document.getElementById('path-details');
const subpathDetails = document.getElementById('subpath-details');

// Current level and selected path/subpath
let currentLevel = '10th';
let selectedPath = null;
let selectedSubpath = null;

// Career data (replaced with data from dataaa.js equivalent)
const careerData = {
    tenthGradeCareers: {
        level: "10th",
        description: "Comprehensive career options after completing 10th grade in India.",
        paths: [
            {
                id: "10p1_science_mpc",
                path: "Further Education (Science - MPC)",
                skills: ["Mathematics", "Physics", "Chemistry", "Analytical Skills"],
                qualification: "10th Pass",
                details: "Pursue 11th and 12th in Science stream with Mathematics, Physics, and Chemistry (MPC). Opens doors to engineering, architecture, and related fields.",
                subPaths: [
                    {
                        id: "10sp1_mpc_eng",
                        path: "Engineering",
                        skills: ["Advanced Math", "Problem Solving", "Technical Skills"],
                        details: "Various engineering disciplines like Computer Science, Mechanical, Civil, etc."
                    },
                    {
                        id: "10sp2_mpc_arch",
                        path: "Architecture",
                        skills: ["Spatial Reasoning", "Design", "Drawing"],
                        details: "Bachelor of Architecture (B.Arch)."
                    },
                    {
                        id: "10sp3_mpc_defense",
                        path: "Defense Services (Technical)",
                        skills: ["Physics", "Math", "Fitness"],
                        details: "Technical entries in Indian Armed Forces."
                    },
                    {
                        id: "10sp4_mpc_nautical",
                        path: "Nautical Science",
                        skills: ["Physics", "Navigation", "Maritime Knowledge"],
                        details: "Merchant Navy, Naval Architecture."
                    },
                    {
                        id: "10sp5_mpc_data",
                        path: "Data Science",
                        skills: ["Statistics", "Programming", "Data Analysis"],
                        details: "Data Analyst, Data Scientist, Machine Learning Engineer."
                    }
                ]
            },
            {
                id: "10p2_science_bipc",
                path: "Further Education (Science - BiPC)",
                skills: ["Biology", "Physics", "Chemistry", "Observation Skills"],
                qualification: "10th Pass",
                details: "Pursue 11th and 12th in Science stream with Biology, Physics, and Chemistry (BiPC). Leads to medical, paramedical, and related fields.",
                subPaths: [
                    {
                        id: "10sp6_bipc_med",
                        path: "Medicine",
                        skills: ["Biology", "Anatomy", "Patient Care"],
                        details: "MBBS, BDS, AYUSH courses."
                    },
                    {
                        id: "10sp7_bipc_paramed",
                        path: "Paramedical",
                        skills: ["Biology", "Medical Techniques"],
                        details: "Nursing, Pharmacy, Physiotherapy."
                    },
                    {
                        id: "10sp8_bipc_biotech",
                        path: "Biotechnology",
                        skills: ["Biology", "Genetics", "Research"],
                        details: "Research and development in life sciences."
                    },
                    {
                        id: "10sp9_bipc_agriculture",
                        path: "Agriculture",
                        skills: ["Biology", "Soil Science", "Farming Techniques"],
                        details: "BSc Agriculture, related fields."
                    },
                    {
                        id: "10sp10_bipc_pharmacy",
                        path: "Pharmacy",
                        skills: ["Chemistry", "Pharmacology", "Drug Knowledge"],
                        details: "Pharmacist, Pharmaceutical Research."
                    }
                ]
            },

            // ... (including all other 10th grade paths from careerOpportunities.tenthGrade.paths)
            {
                id: "10p3_science_pcmb",
                path: "Further Education (Science - PCMB)",
                skills: ["Mathematics", "Physics", "Chemistry", "Biology", "Analytical Skills"],
                qualification: "10th Pass",
                details: "Pursue 11th and 12th in Science stream with Physics, Chemistry, Mathematics, and Biology (PCMB). Offers flexibility for both engineering and medical careers.",
                subPaths: [
                    {
                        id: "10sp11_pcmb_both",
                        path: "Dual Options",
                        skills: ["Versatility", "Broad Knowledge"],
                        details: "Allows keeping both medical and engineering options open."
                    }
                ]
            },
            {
                id: "10p4_science_mpcs",
                path: "Further Education (Science - MPC with Computer Science)",
                skills: ["Mathematics", "Physics", "Chemistry", "Programming", "Logical Reasoning"],
                qualification: "10th Pass",
                details: "Pursue 11th and 12th with MPC and Computer Science. Prepares for IT, software development, and AI.",
                subPaths: [
                    {
                        id: "10sp12_mpcs_it",
                        path: "IT & Software Development",
                        skills: ["Coding", "Algorithms", "Software Design"],
                        details: "Software Engineer, Web Developer, App Developer."
                    },
                    {
                        id: "10sp13_mpcs_ai",
                        path: "Artificial Intelligence",
                        skills: ["Machine Learning", "Data Science", "Programming"],
                        details: "AI Engineer, Machine Learning Specialist."
                    },
                    {
                        id: "10sp_mpcs_cyber",
                        path: "Cybersecurity",
                        skills: ["Network Security", "Ethical Hacking", "System Administration"],
                        details: "Security Analyst, Penetration Tester, Security Consultant."
                    }
                ]
            },
            {
                id: "10p5_science_bipc_psych",
                path: "Further Education (Science - BiPC with Psychology/Home Science)",
                skills: ["Biology", "Physics", "Chemistry", "Psychology", "Nutrition"],
                qualification: "10th Pass",
                details: "Pursue 11th and 12th with BiPC and Psychology/Home Science. Leads to careers in psychology, nursing, and nutrition.",
                subPaths: [
                    {
                        id: "10sp14_bipc_psych",
                        path: "Psychology",
                        skills: ["Counseling", "Therapy", "Mental Health"],
                        details: "Psychologist, Counselor."
                    },
                    {
                        id: "10sp15_bipc_nutrition",
                        path: "Nutrition",
                        skills: ["Dietetics", "Health Science", "Food Science"],
                        details: "Dietitian, Nutritionist."
                    },
                    {
                        id: "10sp_bipc_healthcare",
                        path: "Healthcare Management",
                        skills: ["Patient Care", "Health Administration", "Medical Ethics"],
                        details: "Hospital Administrator, Healthcare Manager."
                    }
                ]
            },

            // Educational Paths for Commerce Streams
            {
                id: "10p6_commerce",
                path: "Further Education (Commerce)",
                skills: ["Accounting", "Economics", "Business Studies", "Financial Literacy"],
                qualification: "10th Pass",
                details: "Pursue 11th and 12th in Commerce stream. Opens opportunities in finance, accounting, and business management.",
                subPaths: [
                    {
                        id: "10sp16_commerce_acc",
                        path: "Accounting",
                        skills: ["Bookkeeping", "Auditing", "Taxation"],
                        details: "Chartered Accountancy (CA), Company Secretary (CS)."
                    },
                    {
                        id: "10sp17_commerce_fin",
                        path: "Finance",
                        skills: ["Financial Analysis", "Investment", "Banking"],
                        details: "Banking, Insurance, Financial Analyst."
                    },
                    {
                        id: "10sp18_commerce_bus",
                        path: "Business Management",
                        skills: ["Marketing", "Sales", "HR"],
                        details: "Business Administration, Management Studies."
                    },
                    {
                        id: "10sp_commerce_analytics",
                        path: "Business Analytics",
                        skills: ["Data Analysis", "Statistical Methods", "Business Intelligence"],
                        details: "Business Analyst, Data-driven Decision Making."
                    }
                ]
            },
            {
                id: "10p7_commerce_mec",
                path: "Further Education (Commerce - MEC)",
                skills: ["Mathematics", "Economics", "Commerce", "Financial Literacy"],
                qualification: "10th Pass",
                details: "Pursue 11th and 12th with Mathematics, Economics, and Commerce (MEC). Prepares for finance, CA, and banking.",
                subPaths: [
                    {
                        id: "10sp19_mec_finance",
                        path: "Finance",
                        skills: ["Accounting", "Financial Analysis", "Banking"],
                        details: "Chartered Accountant (CA), Financial Analyst, Banker."
                    }
                ]
            },
            {
                id: "10p8_commerce_cec",
                path: "Further Education (Commerce - CEC)",
                skills: ["Civics", "Economics", "Commerce", "Legal Studies"],
                qualification: "10th Pass",
                details: "Pursue 11th and 12th with Civics, Economics, and Commerce (CEC). Prepares for business, law, and UPSC.",
                subPaths: [
                    {
                        id: "10sp20_cec_law",
                        path: "Law",
                        skills: ["Legal Reasoning", "Communication", "Civics"],
                        details: "Lawyer, Legal Advisor."
                    },
                    {
                        id: "10sp21_cec_upsc",
                        path: "UPSC",
                        skills: ["General Knowledge", "Civics", "Economics"],
                        details: "Civil Services, Government Jobs."
                    }
                ]
            },
            {
                id: "10p9_commerce_compsci",
                path: "Further Education (Commerce - Commerce with Computer Science)",
                skills: ["Commerce", "Programming", "Digital Literacy"],
                qualification: "10th Pass",
                details: "Commerce with Computer Science prepares for E-Commerce and FinTech.",
                subPaths: [
                    {
                        id: "10sp22_ecommerce",
                        path: "E-Commerce",
                        skills: ["Digital Marketing", "Web Development"],
                        details: "Online Retailer, E-Commerce Manager."
                    },
                    {
                        id: "10sp23_fintech",
                        path: "Fintech",
                        skills: ["Financial Technology", "Data Analysis"],
                        details: "Financial Analyst, Digital Banking Specialist."
                    },
                    {
                        id: "10sp_digital_marketing",
                        path: "Digital Marketing",
                        skills: ["SEO", "Social Media Marketing", "Content Strategy"],
                        details: "Digital Marketing Specialist, Social Media Manager."
                    }
                ]
            },
            {
                id: "10p10_commerce_entre",
                path: "Further Education (Commerce - Commerce with Entrepreneurship)",
                skills: ["Commerce", "Business Planning", "Marketing"],
                qualification: "10th Pass",
                details: "Commerce with Entrepreneurship prepares for Startups and Business Management.",
                subPaths: [
                    {
                        id: "10sp24_startup",
                        path: "Startups",
                        skills: ["Business Planning", "Financial Management"],
                        details: "Entrepreneur, Business Owner."
                    },
                    {
                        id: "10sp25_management",
                        path: "Business Management",
                        skills: ["Leadership", "Strategic Planning"],
                        details: "Business Manager, Operations Manager."
                    }
                ]
            },

            // Educational Paths for Arts Streams
            {
                id: "10p11_arts",
                path: "Further Education (Arts/Humanities)",
                skills: ["Social Studies", "Languages", "History", "Geography", "Critical Thinking"],
                qualification: "10th Pass",
                details: "Pursue 11th and 12th in Arts/Humanities stream. Leads to careers in social sciences, literature, and journalism.",
                subPaths: [
                    {
                        id: "10sp26_arts_soc",
                        path: "Social Sciences",
                        skills: ["Sociology", "Political Science", "Psychology"],
                        details: "Research, teaching, social work."
                    },
                    {
                        id: "10sp27_arts_lit",
                        path: "Literature",
                        skills: ["Languages", "Writing", "Communication"],
                        details: "Journalism, content writing, teaching."
                    },
                    {
                        id: "10sp28_arts_geo",
                        path: "Geography",
                        skills: ["Mapping", "Environmental Studies"],
                        details: "Cartography, environmental consulting."
                    },
                    {
                        id: "10sp_arts_philo",
                        path: "Philosophy",
                        skills: ["Critical Thinking", "Ethics", "Reasoning"],
                        details: "Academic research, education, ethics consulting."
                    }
                ]
            },
            {
                id: "10p12_arts_hec",
                path: "Further Education (Arts - HEC)",
                skills: ["History", "Economics", "Civics", "Analytical Skills"],
                qualification: "10th Pass",
                details: "Pursue 11th and 12th with History, Economics, and Civics (HEC). Prepares for law, UPSC, and journalism.",
                subPaths: [
                    {
                        id: "10sp29_hec_journalism",
                        path: "Journalism",
                        skills: ["Writing", "Communication", "Current Affairs"],
                        details: "Journalist, Content Writer."
                    }
                ]
            },
            {
                id: "10p13_arts_hpc",
                path: "Further Education (Arts - HPC)",
                skills: ["History", "Political Science", "Civics", "Critical Thinking"],
                qualification: "10th Pass",
                details: "Pursue 11th and 12th with History, Political Science, and Civics (HPC). Prepares for Civil Services and law.",
                subPaths: [
                    {
                        id: "10sp30_hpc_civil",
                        path: "Civil Services",
                        skills: ["General Knowledge", "Analytical Skills", "Political Awareness"],
                        details: "IAS, IPS, IFS."
                    }
                ]
            },
            {
                id: "10p14_arts_languages",
                path: "Further Education (Arts - Languages & Literature)",
                skills: ["Language Proficiency", "Critical Analysis", "Writing"],
                qualification: "10th Pass",
                details: "Pursue 11th and 12th with focus on languages and literature. Prepares for careers in teaching, translation, and content creation.",
                subPaths: [
                    {
                        id: "10sp31_arts_teaching",
                        path: "Teaching",
                        skills: ["Communication", "Pedagogy", "Subject Knowledge"],
                        details: "Language Teacher, Literature Professor."
                    },
                    {
                        id: "10sp32_arts_writing",
                        path: "Content Creation",
                        skills: ["Copywriting", "Editing", "Storytelling"],
                        details: "Author, Content Writer, Editor."
                    },
                    {
                        id: "10sp_arts_translation",
                        path: "Translation & Interpretation",
                        skills: ["Bilingual Proficiency", "Cultural Knowledge", "Communication"],
                        details: "Translator, Interpreter, Localization Specialist."
                    }
                ]
            },
            {
                id: "10p15_arts_psychology",
                path: "Further Education (Arts - Psychology)",
                skills: ["Human Behavior", "Research Skills", "Empathy"],
                qualification: "10th Pass",
                details: "Pursue 11th and 12th with Psychology as a major subject. Leads to careers in counseling and human resources.",
                subPaths: [
                    {
                        id: "10sp33_arts_counseling",
                        path: "Counseling",
                        skills: ["Therapy Techniques", "Active Listening", "Problem-Solving"],
                        details: "School Counselor, Mental Health Professional."
                    },
                    {
                        id: "10sp34_arts_hr",
                        path: "Human Resources",
                        skills: ["Recruitment", "Training", "Employee Relations"],
                        details: "HR Manager, Corporate Trainer."
                    }
                ]
            },
            {
                id: "10p_arts_massmedia",
                path: "Mass Media & Journalism",
                skills: ["Communication", "Writing", "Media Production"],
                qualification: "10th Pass",
                details: "Pursue studies in mass communication and journalism.",
                subPaths: [
                    {
                        id: "10sp_media_advertising",
                        path: "Advertising",
                        skills: ["Creativity", "Marketing", "Design"],
                        details: "Advertising Executive, Creative Director."
                    },
                    {
                        id: "10sp_media_content",
                        path: "Content Creation",
                        skills: ["Writing", "Editing", "Storytelling"],
                        details: "Content Creator, Digital Media Producer."
                    },
                    {
                        id: "10sp_media_digital",
                        path: "Digital Media",
                        skills: ["Social Media", "Video Production", "SEO"],
                        details: "Digital Media Specialist, Social Media Manager."
                    }
                ]
            },

            // Vocational and Technical Paths
            {
                id: "10p16_iti",
                path: "ITI (Industrial Training Institute)",
                skills: ["Technical Skills", "Trade-Specific Knowledge", "Practical Application"],
                qualification: "10th Pass",
                details: "Gain vocational training in various trades like electrician, fitter, and mechanic.",
                subPaths: [
                    {
                        id: "10sp35_iti_elec",
                        path: "Electrician",
                        skills: ["Wiring", "Electrical Repair", "Maintenance", "Solar Panel Installation", "Home Automation"],
                        details: "Electrical technician, maintenance electrician, NSQF Level 4 + NCVT certification"
                    },
                    {
                        id: "10sp36_iti_fit",
                        path: "Fitter",
                        skills: ["Mechanical Fitting", "Precision Measurement", "CNC Machine Operation", "Precision Engineering"],
                        details: "Machine fitter, assembly technician, Aerospace/automotive sectors"
                    },
                    {
                        id: "10sp37_iti_mech",
                        path: "Mechanic",
                        skills: ["Engine Repair", "Vehicle Maintenance", "Battery Maintenance", "Charging Systems"],
                        details: "Automotive mechanic, diesel mechanic, Electric Vehicle specialization"
                    },
                    {
                        id: "10sp38_iti_plumb",
                        path: "Plumber",
                        skills: ["Pipe Fitting", "Water Conservation Tech"],
                        details: "Smart plumbing systems training"
                    }
                ]
            },
            {
                id: "10p17_diploma",
                path: "Diploma Courses",
                skills: ["Specific Technical/Vocational Skills", "Practical Application", "Industry Readiness"],
                qualification: "10th Pass",
                details: "Pursue diploma courses in engineering, technology, or other specialized fields. AICTE-approved polytechnic programs.",
                subPaths: [
                    {
                        id: "10sp39_diploma_eng",
                        path: "Diploma in Engineering",
                        skills: ["Technical Skills", "AutoCAD", "Project Management"],
                        details: "Diploma in Civil, Mechanical, Electrical, etc. Lateral entry to B.Tech"
                    },
                    {
                        id: "10sp40_diploma_comp",
                        path: "Diploma in Computer Applications",
                        skills: ["Programming", "Software"],
                        details: "Computer operator, programmer assistant."
                    },
                    {
                        id: "10sp41_diploma_hotel",
                        path: "Diploma in Hotel Management",
                        skills: ["Hospitality", "Customer Service"],
                        details: "Hotel staff, catering services."
                    },
                    {
                        id: "10sp42_diploma_agri",
                        path: "Diploma in Agriculture",
                        skills: ["Organic Farming", "Soil Science"],
                        details: "NABARD-supported programs"
                    },
                    {
                        id: "10sp43_diploma_marine",
                        path: "Diploma in Marine Engineering",
                        skills: ["Ship Systems", "Navigation Basics"],
                        details: "IMU CET eligibility"
                    }
                ]
            },
            {
                id: "10p_diploma_aviation",
                path: "Diploma in Aviation",
                skills: ["Air Safety", "Customer Service", "Operational Procedures"],
                qualification: "10th Pass",
                details: "Aviation industry training programs",
                subPaths: [
                    {
                        id: "10sp_aviation_cabin",
                        path: "Cabin Crew",
                        skills: ["Communication", "Safety Procedures", "Customer Service"],
                        details: "Flight attendant, ground staff"
                    },
                    {
                        id: "10sp_aviation_ground",
                        path: "Ground Staff",
                        skills: ["Check-in Processes", "Baggage Handling", "Passenger Assistance"],
                        details: "Ground handling, passenger services"
                    },
                    {
                        id: "10sp_aviation_services",
                        path: "Airline Services",
                        skills: ["Ticketing", "Reservations", "Airport Operations"],
                        details: "Airline representative, airport operations staff"
                    }
                ]
            },
            {
                id: "10p18_vocational",
                path: "Vocational Skill Training",
                skills: ["Industry-Specific Skills", "Practical Expertise"],
                qualification: "10th Pass",
                details: "NSDC-certified skill development programs",
                subPaths: [
                    {
                        id: "10sp44_skill_beauty",
                        path: "Beauty & Wellness",
                        skills: ["Bridal Makeup", "Spa Management"],
                        details: "CIDESCO certification"
                    },
                    {
                        id: "10sp45_skill_retail",
                        path: "Retail Management",
                        skills: ["Visual Merchandising", "Inventory Control"],
                        details: "QCI-certified programs"
                    },
                    {
                        id: "10sp46_skill_construction",
                        path: "Construction Supervisor",
                        skills: ["Quality Control", "Safety Protocols"],
                        details: "NCO-approved training"
                    },
                    {
                        id: "10sp_skill_fashion",
                        path: "Fashion Designing",
                        skills: ["Pattern Making", "Garment Construction", "Fashion Illustration"],
                        details: "Fashion designer, pattern maker"
                    }
                ]
            },
            {
                id: "10p19_emerging",
                path: "Emerging Technology Fields",
                skills: ["Tech Adaptability", "Digital Literacy"],
                qualification: "10th Pass",
                details: "Future-ready technical skills",
                subPaths: [
                    {
                        id: "10sp47_tech_drone",
                        path: "Drone Pilot Technician",
                        skills: ["Aerial Mapping", "Drone Maintenance"],
                        details: "DGCA-certified training"
                    },
                    {
                        id: "10sp48_tech_ai",
                        path: "AI Assistant Training",
                        skills: ["Chatbot Development", "ML Basics"],
                        details: "NASSCOM FutureSkills program"
                    },
                    {
                        id: "10sp49_tech_cyber",
                        path: "Cybersecurity Basics",
                        skills: ["Network Security", "Ethical Hacking"],
                        details: "EC-Council entry courses"
                    }
                ]
            },
            {
                id: "10p20_creative",
                path: "Creative & Design Fields",
                skills: ["Creativity", "Visual Communication"],
                qualification: "10th Pass",
                details: "Artistic career pathways",
                subPaths: [
                    {
                        id: "10sp50_creative_anim",
                        path: "2D/3D Animation",
                        skills: ["Blender", "Motion Graphics"],
                        details: "Arena Animation certified"
                    },
                    {
                        id: "10sp51_creative_photo",
                        path: "Professional Photography",
                        skills: ["Photo Editing", "Studio Lighting"],
                        details: "Wedding/Commercial photography"
                    },
                    {
                        id: "10sp52_creative_culinary",
                        path: "Culinary Arts",
                        skills: ["Food Presentation", "Kitchen Safety"],
                        details: "NCHMCT foundation courses"
                    }
                ]
            },
            {
                id: "10p21_health",
                path: "Healthcare Paramedical",
                skills: ["Patient Care", "Medical Basics"],
                qualification: "10th Pass",
                details: "Allied health services training",
                subPaths: [
                    {
                        id: "10sp53_health_nursing",
                        path: "Nursing Assistant",
                        skills: ["Patient Hygiene", "Basic Care"],
                        details: "INC-recognized programs"
                    },
                    {
                        id: "10sp54_health_lab",
                        path: "Lab Technician",
                        skills: ["Sample Collection", "Equipment Handling"],
                        details: "DMLT certification"
                    },
                    {
                        id: "10sp55_health_opt",
                        path: "Optical Technician",
                        skills: ["Lens Grinding", "Frame Repair"],
                        details: "Optical shops/hospitals"
                    }
                ]
            },
            {
                id: "10p22_business",
                path: "Entrepreneurship & Trades",
                skills: ["Business Management", "Financial Literacy"],
                qualification: "10th Pass",
                details: "Skill-based business opportunities",
                subPaths: [
                    {
                        id: "10sp56_biz_agri",
                        path: "Agricultural Entrepreneurship",
                        skills: ["Organic Farming", "Food Processing"],
                        details: "NABARD-supported ventures"
                    },
                    {
                        id: "10sp57_biz_food",
                        path: "Food Truck Business",
                        skills: ["Menu Planning", "Mobile Kitchen Mgmt"],
                        details: "FSSAI certification required"
                    },
                    {
                        id: "10sp58_biz_tailor",
                        path: "Boutique Management",
                        skills: ["Fashion Design", "Inventory Control"],
                        details: "NSDC textile programs"
                    }
                ]
            },
            {
                id: "10p23_global",
                path: "Global Opportunities",
                skills: ["Language Skills", "Cultural Adaptability"],
                qualification: "10th Pass",
                details: "International vocational pathways",
                subPaths: [
                    {
                        id: "10sp59_global_gulf",
                        path: "Gulf Countries Technical Jobs",
                        skills: ["HVAC", "Plumbing"],
                        details: "NSDC International collaborations"
                    },
                    {
                        id: "10sp60_global_japan",
                        path: "Technical Intern Training (Japan)",
                        skills: ["Japanese N5", "Precision Work"],
                        details: "3-5 year contracts"
                    },
                    {
                        id: "10sp61_global_cruise",
                        path: "Cruise Ship Staff",
                        skills: ["Hospitality", "Safety Training"],
                        details: "STCW certification required"
                    }
                ]
            },
            {
                id: "10p24_jobs",
                path: "Entry-Level Jobs",
                skills: ["Basic Computer Skills", "Communication", "Customer Service"],
                qualification: "10th Pass",
                details: "Enter the workforce with entry-level positions in various sectors.",
                subPaths: [
                    {
                        id: "10sp62_jobs_retail",
                        path: "Retail & Sales",
                        skills: ["Customer Service", "Sales"],
                        details: "Cashier, Store Assistant, Sales Executive"
                    },
                    {
                        id: "10sp63_jobs_data",
                        path: "Office & Data Entry Jobs",
                        skills: ["Typing", "Computer Skills"],
                        details: "Data Entry Operator, Clerk, Typist"
                    },
                    {
                        id: "10sp64_jobs_helper",
                        path: "Technician & Helper Jobs",
                        skills: ["Basic Labor", "Manual Skills"],
                        details: "Electrician, Mechanic Assistant, Factory Worker"
                    }
                ]
            },
            {
                id: "10p25_govt",
                path: "Government Jobs",
                skills: ["Basic Aptitude", "General Knowledge"],
                qualification: "10th Pass",
                details: "Various government positions across departments",
                subPaths: [
                    {
                        id: "10sp65_govt_rail",
                        path: "Railways & Banking",
                        skills: ["Basic Math", "General Awareness"],
                        details: "RRB Group D, SSC MTS, Post Office Jobs"
                    },
                    {
                        id: "10sp66_govt_defense",
                        path: "Defense & Police",
                        skills: ["Physical Fitness", "Discipline"],
                        details: "Army (Soldier GD), Navy (MR, SSR), CISF, State Police"
                    },
                    {
                        id: "10sp67_govt_other",
                        path: "Other Govt Jobs",
                        skills: ["Basic Aptitude", "Local Governance"],
                        details: "Forest Guard, Gram Sachiv, Clerk, Peon"
                    }
                ]
            }
        ]
    },
    twelfthGradeCareers: {
        level: "12th",
        description: "Comprehensive career options after completing 12th grade in India.",
        paths: [
            {
                id: "12p1_science_mpc",
                path: "Science Stream - MPC (Mathematics, Physics, Chemistry)",
                skills: ["Mathematics", "Physics", "Chemistry", "Analytical Skills"],
                qualification: "12th Science (MPC)",
                details: "For Engineering, Technology, Aviation, Defense, and related fields.",
                subPaths: [
                    {
                        id: "12sp1_mpc_btech",
                        path: "B.Tech/B.E. (CSE, IT, AI, ECE, Mechanical, Civil, etc.)",
                        skills: ["Programming", "Problem Solving", "Technical Skills"],
                        details: "Engineering degrees in various specializations."
                    },
                    {
                        id: "12sp2_mpc_barch",
                        path: "B.Arch (Bachelor of Architecture)",
                        skills: ["Design", "Spatial Reasoning", "Drawing"],
                        details: "Architecture degree."
                    },
                    {
                        id: "12sp3_mpc_bca",
                        path: "BCA (Bachelor of Computer Applications)",
                        skills: ["Programming", "Database Management", "Software Development"],
                        details: "Computer Applications degree."
                    },
                    {
                        id: "12sp4_mpc_bsc_math",
                        path: "B.Sc. in Mathematics/Physics/Chemistry",
                        skills: ["Research", "Analytical Skills", "Scientific Knowledge"],
                        details: "Bachelor of Science in core science subjects."
                    },
                    {
                        id: "12sp5_mpc_bsc_datasci",
                        path: "B.Sc. in Data Science & AI",
                        skills: ["Data Analysis", "Machine Learning", "Programming"],
                        details: "Bachelor of Science in Data Science and Artificial Intelligence."
                    },
                    {
                        id: "12sp6_mpc_pilot",
                        path: "Commercial Pilot Training",
                        skills: ["Aviation Knowledge", "Physical Fitness", "Navigation"],
                        details: "Commercial Pilot License."
                    },
                    {
                        id: "12sp7_mpc_nautical",
                        path: "B.Sc. in Nautical Science (Merchant Navy)",
                        skills: ["Navigation", "Maritime Knowledge", "Physics"],
                        details: "Merchant Navy degree."
                    },
                    {
                        id: "12sp8_mpc_nda",
                        path: "NDA (National Defence Academy)",
                        skills: ["Physics", "Mathematics", "General Knowledge", "Physical Fitness"],
                        details: "Officer in Indian Armed Forces."
                    },
                    {
                        id: "12sp9_mpc_bhm",
                        path: "Hotel Management (BHM)",
                        skills: ["Hospitality", "Management", "Customer Service"],
                        details: "Bachelor of Hotel Management."
                    },
                    {
                        id: "12sp10_mpc_fashion",
                        path: "Fashion Designing (NIFT, B.Des)",
                        skills: ["Design", "Creativity", "Fashion Knowledge"],
                        details: "Bachelor of Design in Fashion."
                    },
                    {
                        id: "12sp11_mpc_actuarial",
                        path: "Actuarial Science",
                        skills: ["Mathematics", "Statistics", "Risk Assessment"],
                        details: "Actuarial Science courses."
                    },
                    {
                        id: "12sp12_mpc_aviation",
                        path: "Aviation & Aerospace Engineering",
                        skills: ["Aerodynamics", "Aircraft Systems", "Flight Mechanics"],
                        details: "Specialized engineering for aviation industry."
                    },
                    {
                        id: "12sp13_mpc_statistics",
                        path: "B.Stat (Bachelor of Statistics)",
                        skills: ["Statistical Analysis", "Probability", "Data Modeling"],
                        details: "Statistics degree from institutions like ISI."
                    }
                ]
            },
            {
                id: "12p2_science_bipc",
                path: "Science Stream - BiPC (Biology, Physics, Chemistry)",
                skills: ["Biology", "Physics", "Chemistry", "Medical Knowledge"],
                qualification: "12th Science (BiPC)",
                details: "For Medical, Allied Healthcare, and related fields.",
                subPaths: [
                    {
                        id: "12sp14_bipc_mbbs",
                        path: "MBBS (Bachelor of Medicine & Surgery)",
                        skills: ["Clinical Skills", "Diagnostics", "Pharmacology"],
                        details: "Medical degree."
                    },
                    {
                        id: "12sp15_bipc_bds",
                        path: "BDS (Bachelor of Dental Surgery)",
                        skills: ["Dental Procedures", "Oral Health", "Surgery"],
                        details: "Dental degree."
                    },
                    {
                        id: "12sp15_bipc_bds",
                        path: "BDS (Bachelor of Dental Surgery)",
                        skills: ["Dental Procedures", "Oral Health", "Surgery"],
                        details: "Dental degree."
                    },
                    {
                        id: "12sp16_bipc_ayush",
                        path: "BAMS/BHMS (Ayurveda/Homeopathy)",
                        skills: ["Traditional Medicine", "Holistic Healing", "Alternative Therapies"],
                        details: "Ayurvedic/Homeopathic degree."
                    },
                    {
                        id: "12sp17_bipc_bpt",
                        path: "BPT (Bachelor of Physiotherapy)",
                        skills: ["Rehabilitation", "Therapeutic Exercises", "Anatomy"],
                        details: "Physiotherapy degree."
                    },
                    {
                        id: "12sp18_bipc_nursing",
                        path: "B.Sc. Nursing",
                        skills: ["Patient Care", "Medical Procedures", "Healthcare Management"],
                        details: "Nursing degree."
                    },
                    {
                        id: "12sp19_bipc_bpharm",
                        path: "B.Pharm (Bachelor of Pharmacy)",
                        skills: ["Drug Knowledge", "Pharmacology", "Dispensing"],
                        details: "Pharmacy degree."
                    },
                    {
                        id: "12sp20_bipc_biotech",
                        path: "B.Sc. Biotechnology",
                        skills: ["Genetics", "Microbiology", "Research"],
                        details: "Biotechnology degree."
                    },
                    {
                        id: "12sp21_bipc_mlt",
                        path: "B.Sc. in Medical Lab Technology (MLT)",
                        skills: ["Lab Techniques", "Diagnostics", "Microbiology"],
                        details: "Medical Lab Technology degree."
                    },
                    {
                        id: "12sp22_bipc_radiology",
                        path: "B.Sc. in Radiology, Optometry, Cardiology, etc.",
                        skills: ["Medical Imaging", "Eye Care", "Cardiovascular Science"],
                        details: "Degrees in various healthcare specializations."
                    },
                    {
                        id: "12sp23_bipc_genetics",
                        path: "B.Sc. in Genetics & Microbiology",
                        skills: ["Genetics", "Microbiology", "Research"],
                        details: "Genetics and Microbiology degrees."
                    },
                    {
                        id: "12sp24_bipc_veterinary",
                        path: "B.V.Sc (Veterinary Science)",
                        skills: ["Animal Care", "Surgery", "Pathology"],
                        details: "Veterinary degree for animal healthcare."
                    },
                    {
                        id: "12sp23_bipc_genetics",
                        path: "B.Sc. in Genetics & Microbiology",
                        skills: ["Genetics", "Microbiology", "Research"],
                        details: "Genetics and Microbiology degrees."
                    },
                    {
                        id: "12sp24_bipc_veterinary",
                        path: "B.V.Sc (Veterinary Science)",
                        skills: ["Animal Care", "Surgery", "Pathology"],
                        details: "Veterinary degree for animal healthcare."
                    },
                    {
                        id: "12sp25_bipc_nutrition",
                        path: "B.Sc. Nutrition & Dietetics",
                        skills: ["Nutritional Assessment", "Diet Planning", "Health Promotion"],
                        details: "Degree in nutrition science."
                    }
                ]
            },
            {
                id: "12p3_science_pcmb",
                path: "Science Stream - PCMB (Physics, Chemistry, Maths, Biology)",
                skills: ["Mathematics", "Physics", "Chemistry", "Biology"],
                qualification: "12th Science (PCMB)",
                details: "Eligible for both Engineering and Medical fields. Good for research-oriented careers.",
                subPaths: [
                    {
                        id: "12sp26_pcmb_both",
                        path: "Eligible for both Engineering & Medical fields",
                        skills: ["Versatility", "Broad Knowledge"],
                        details: "Allows keeping both medical and engineering options open."
                    },
                    {
                        id: "12sp27_pcmb_research",
                        path: "Research-oriented careers (B.Sc. Biotech, B.Sc. AI, B.Sc. Neuroscience)",
                        skills: ["Research Skills", "Analytical Skills", "Scientific Knowledge"],
                        details: "Research-focused degrees."
                    },
                    {
                        id: "12sp28_pcmb_biomedical",
                        path: "B.Tech Biomedical Engineering",
                        skills: ["Medical Technology", "Biomedical Instrumentation", "Biomaterials"],
                        details: "Engineering applied to medical science."
                    },
                    {
                        id: "12sp29_pcmb_environmental",
                        path: "B.Sc./B.Tech Environmental Science",
                        skills: ["Ecosystem Analysis", "Pollution Control", "Sustainable Development"],
                        details: "Environmental protection and management."
                    },
                    {
                        id: "12sp30_pcmb_bioinformatics",
                        path: "B.Sc./B.Tech Bioinformatics",
                        skills: ["Computational Biology", "Genomics", "Algorithm Development"],
                        details: "Intersection of biology and information technology."
                    }
                ]
            },

            // COMMERCE STREAMS
            {
                id: "12p4_commerce",
                path: "Commerce Stream",
                skills: ["Accounting", "Economics", "Business Studies", "Financial Literacy"],
                qualification: "12th Commerce",
                details: "For Finance, Business, Economics, Data Analysis, E-Commerce, and Marketing.",
                subPaths: [
                    {
                        id: "12sp31_commerce_bcom",
                        path: "B.Com (General/Computers/Banking/Taxation, etc.)",
                        skills: ["Accounting", "Auditing", "Taxation"],
                        details: "Bachelor of Commerce in various specializations."
                    },
                    {
                        id: "12sp32_commerce_bba",
                        path: "BBA (Bachelor of Business Administration)",
                        skills: ["Management", "Marketing", "Finance"],
                        details: "Business Administration degree."
                    },
                    {
                        id: "12sp33_commerce_ca",
                        path: "CA (Chartered Accountant)",
                        skills: ["Accounting", "Auditing", "Taxation", "Financial Law"],
                        details: "Chartered Accountancy."
                    },
                    {
                        id: "12sp34_commerce_cs",
                        path: "CS (Company Secretary)",
                        skills: ["Corporate Law", "Governance", "Compliance"],
                        details: "Company Secretary certification."
                    },
                    {
                        id: "12sp35_commerce_cma",
                        path: "CMA (Cost & Management Accountant)",
                        skills: ["Cost Accounting", "Financial Management", "Analysis"],
                        details: "Cost and Management Accountancy."
                    },
                    {
                        id: "12sp36_commerce_bsc_eco",
                        path: "B.Sc./BA Economics",
                        skills: ["Economics", "Statistics", "Data Analysis"],
                        details: "Economics degrees."
                    },
                    {
                        id: "12sp37_commerce_bstat",
                        path: "B.Stat (Bachelor of Statistics - ISI, IISc)",
                        skills: ["Statistics", "Probability", "Data Analysis"],
                        details: "Statistics degree."
                    },
                    {
                        id: "12sp38_commerce_actuarial",
                        path: "Actuarial Science",
                        skills: ["Mathematics", "Statistics", "Risk Assessment"],
                        details: "Actuarial Science courses."
                    },
                    {
                        id: "12sp39_commerce_digital",
                        path: "BBA in Digital Marketing",
                        skills: ["Digital Marketing", "SEO", "Social Media Marketing"],
                        details: "Digital Marketing degree."
                    },
                    {
                        id: "12sp40_commerce_ecommerce",
                        path: "B.Com in E-Commerce",
                        skills: ["E-Commerce", "Online Business", "Marketing"],
                        details: "E-Commerce degree."
                    },
                    {
                        id: "12sp41_commerce_investment",
                        path: "Investment Banking & Portfolio Management",
                        skills: ["Financial Markets", "Investment Analysis", "Wealth Management"],
                        details: "Investment and portfolio management courses."
                    },
                    {
                        id: "12sp42_commerce_fintech",
                        path: "FinTech (Financial Technology)",
                        skills: ["Digital Banking", "Payment Systems", "Blockchain"],
                        details: "Financial technology specializations."
                    }
                ]
            },

            // ARTS/HUMANITIES STREAM
            {
                id: "12p5_arts",
                path: "Arts / Humanities Stream",
                skills: ["Social Sciences", "Literature", "Communication", "Critical Thinking"],
                qualification: "12th Arts",
                details: "For Law, Civil Services, Social Sciences, Psychology, Media, Journalism, and Design.",
                subPaths: [
                    {
                        id: "12sp43_arts_law",
                        path: "BA LLB / BBA LLB (Law - CLAT Exam)",
                        skills: ["Legal Reasoning", "Communication", "Research"],
                        details: "Law degrees."
                    },
                    {
                        id: "12sp44_arts_upsc",
                        path: "UPSC Civil Services (IAS, IPS, IFS, etc.)",
                        skills: ["General Knowledge", "Analytical Skills", "Political Awareness"],
                        details: "Civil Services exams."
                    },
                    {
                        id: "12sp45_arts_statepsc",
                        path: "State PSC, SSC CGL",
                        skills: ["General Knowledge", "Aptitude", "Reasoning"],
                        details: "State Public Service Commission and SSC Combined Graduate Level exams."
                    },
                    {
                        id: "12sp46_arts_psych",
                        path: "BA Psychology / Sociology / Social Work",
                        skills: ["Psychology", "Sociology", "Social Work", "Counseling"],
                        details: "Degrees in social sciences."
                    },
                    {
                        id: "12sp47_arts_poli",
                        path: "BA Political Science / History / International Relations",
                        skills: ["Political Theory", "Historical Analysis", "International Relations"],
                        details: "Degrees in political science, history, and international relations."
                    },
                    {
                        id: "12sp48_arts_media",
                        path: "BA Mass Communication / Journalism",
                        skills: ["Writing", "Communication", "Media Knowledge"],
                        details: "Mass Communication and Journalism degrees."
                    },
                    {
                        id: "12sp49_arts_film",
                        path: "BA Film & Television Production",
                        skills: ["Film Production", "Direction", "Editing"],
                        details: "Film and Television Production degree."
                    },
                    {
                        id: "12sp50_arts_design",
                        path: "B.Des (Bachelor of Design - Fashion, Interior, Graphic, etc.)",
                        skills: ["Design", "Creativity", "Visual Communication"],
                        details: "Bachelor of Design in various specializations."
                    },
                    {
                        id: "12sp51_arts_languages",
                        path: "BA in Foreign Languages",
                        skills: ["Language Proficiency", "Translation", "Cultural Studies"],
                        details: "Degree in foreign languages."
                    },
                    {
                        id: "12sp52_arts_literature",
                        path: "BA in English/Hindi Literature",
                        skills: ["Literary Analysis", "Creative Writing", "Critical Thinking"],
                        details: "Literature degrees focusing on language and texts."
                    }
                ]
            },

            // VOCATIONAL & SKILL-BASED COURSES
            {
                id: "12p6_vocational",
                path: "Vocational & Skill-Based Courses",
                skills: ["Practical Skills", "Industry Knowledge", "Technical Skills"],
                qualification: "12th Pass",
                details: "For Diploma courses and computer/tech certifications.",
                subPaths: [
                    {
                        id: "12sp53_vocational_aviation",
                        path: "Diploma in Aviation & Cabin Crew Training",
                        skills: ["Aviation Knowledge", "Customer Service"],
                        details: "Aviation and Cabin Crew diplomas."
                    },
                    {
                        id: "12sp54_vocational_hotel",
                        path: "Diploma in Hotel Management & Catering",
                        skills: ["Hospitality", "Catering", "Management"],
                        details: "Hotel Management and Catering diplomas."
                    },
                    {
                        id: "12sp55_vocational_fashion",
                        path: "Diploma in Fashion Design, Interior Design",
                        skills: ["Design", "Creativity", "Technical Skills"],
                        details: "Fashion and Interior Design diplomas."
                    },
                    {
                        id: "12sp56_vocational_event",
                        path: "Diploma in Event Management",
                        skills: ["Event Planning", "Management", "Communication"],
                        details: "Event Management diploma."
                    },
                    {
                        id: "12sp57_vocational_fullstack",
                        path: "Full Stack Development Course",
                        skills: ["Programming", "Web Development", "Database Management"],
                        details: "Full Stack Development certification."
                    },
                    {
                        id: "12sp58_vocational_datascience",
                        path: "Data Science & AI Certification",
                        skills: ["Data Analysis", "Machine Learning", "Programming"],
                        details: "Data Science and AI certification."
                    },
                    {
                        id: "12sp59_vocational_cybersecurity",
                        path: "Cybersecurity & Ethical Hacking",
                        skills: ["Cybersecurity", "Ethical Hacking", "Network Security"],
                        details: "Cybersecurity and Ethical Hacking certification."
                    },
                    {
                        id: "12sp60_vocational_media",
                        path: "Multimedia & Animation",
                        skills: ["3D Modeling", "Animation", "Visual Effects"],
                        details: "Multimedia and animation courses."
                    },
                    {
                        id: "12sp61_vocational_beauty",
                        path: "Beauty & Wellness Courses",
                        skills: ["Cosmetology", "Spa Therapy", "Hair Styling"],
                        details: "Beauty industry certifications."
                    },
                    {
                        id: "12sp62_vocational_culinary",
                        path: "Culinary Arts & Bakery",
                        skills: ["Cooking", "Food Presentation", "Baking"],
                        details: "Culinary and bakery courses."
                    }
                ]
            },

            // GOVERNMENT JOB OPPORTUNITIES
            {
                id: "12p7_govt_jobs",
                path: "Government Job Opportunities",
                skills: ["Aptitude", "General Knowledge", "Physical Fitness"],
                qualification: "12th Pass",
                details: "For Defense, Police, Railways, Banking, and other government exams.",
                subPaths: [
                    {
                        id: "12sp63_govt_nda",
                        path: "NDA (Army, Navy, Air Force)",
                        skills: ["Physics", "Mathematics", "General Knowledge", "Physical Fitness"],
                        details: "National Defence Academy."
                    },
                    {
                        id: "12sp64_govt_coastguard",
                        path: "Indian Coast Guard (Navik, Yantrik)",
                        skills: ["Technical Skills", "Physical Fitness", "General Knowledge"],
                        details: "Indian Coast Guard positions."
                    },
                    {
                        id: "12sp65_govt_sscgd",
                        path: "SSC GD Constable",
                        skills: ["Physical Fitness", "General Knowledge", "Aptitude"],
                        details: "Staff Selection Commission General Duty Constable."
                    },
                    {
                        id: "12sp66_govt_rrbntpc",
                        path: "RRB NTPC (Railway Clerk, Ticket Collector, etc.)",
                        skills: ["General Awareness", "Mathematics", "General Intelligence"],
                        details: "Railway Recruitment Board Non-Technical Popular Categories."
                    },
                    {
                        id: "12sp67_govt_ibpsclerk",
                        path: "IBPS Clerk / SBI Clerk (Banking Jobs)",
                        skills: ["Aptitude", "Reasoning", "English"],
                        details: "Banking jobs."
                    },
                    {
                        id: "12sp68_govt_sscchsl",
                        path: "SSC CHSL (LDC, DEO, Postal Assistant, etc.)",
                        skills: ["Aptitude", "English", "Reasoning"],
                        details: "Staff Selection Commission Combined Higher Secondary Level."
                    },
                    {
                        id: "12sp69_govt_statejobs",
                        path: "State Government Jobs (Police, Forest Guard, Revenue Dept.)",
                        skills: ["Aptitude", "Physical Fitness", "General Knowledge"],
                        details: "Various state government jobs."
                    },
                    {
                        id: "12sp70_govt_defcivilian",
                        path: "Defense Civilian Posts",
                        skills: ["Technical Knowledge", "Administrative Skills"],
                        details: "Civilian positions in defense establishments."
                    },
                    {
                        id: "12sp71_govt_postofficer",
                        path: "Postal Officer",
                        skills: ["General Knowledge", "Mathematics", "Reasoning"],
                        details: "India Post positions."
                    }
                ]
            },

            // GLOBAL EDUCATION PATHS
            {
                id: "12p8_global",
                path: "Global Education Paths",
                skills: ["Language Proficiency", "Cultural Adaptability", "International Exposure"],
                qualification: "12th Pass",
                details: "International education options for Indian students",
                subPaths: [
                    {
                        id: "12sp72_global_usa",
                        path: "USA University Programs (SAT/ACT Required)",
                        skills: ["Critical Thinking", "English Proficiency", "Standardized Testing"],
                        details: "Bachelor's degrees at US universities."
                    },
                    {
                        id: "12sp73_global_uk",
                        path: "UK Foundation & Bachelor's Programs",
                        skills: ["Academic English", "Research Skills", "Specialized Knowledge"],
                        details: "Undergraduate education in UK universities."
                    },
                    {
                        id: "12sp74_global_australia",
                        path: "Australian Higher Education",
                        skills: ["English Proficiency", "Academic Writing", "Independent Study"],
                        details: "Bachelor's programs in Australian universities."
                    },
                    {
                        id: "12sp75_global_canada",
                        path: "Canadian University & College Programs",
                        skills: ["Applied Learning", "Research", "Practical Skills"],
                        details: "Education with pathway to PR in Canada."
                    },
                    {
                        id: "12sp76_global_germany",
                        path: "German Public Universities (Studienkolleg)",
                        skills: ["German Language", "Technical Knowledge", "Academic Skills"],
                        details: "Tuition-free education in Germany."
                    },
                    {
                        id: "12sp77_global_singapore",
                        path: "Singapore Universities & Polytechnics",
                        skills: ["Technical Skills", "English Proficiency", "Mathematics"],
                        details: "Education in Singapore's education hub."
                    },
                    {
                        id: "12sp78_global_medicalmbbsabroad",
                        path: "MBBS Abroad (Russia, China, Philippines, etc.)",
                        skills: ["Medical Knowledge", "Language Adaptation", "Clinical Skills"],
                        details: "Medical education at international universities."
                    }
                ]
            },

            // ENTREPRENEURSHIP PATHS
            {
                id: "12p9_entrepreneurship",
                path: "Entrepreneurship & Startup Paths",
                skills: ["Business Acumen", "Innovation", "Risk Management", "Leadership"],
                qualification: "12th Any Stream",
                details: "For students interested in creating their own ventures",
                subPaths: [
                    {
                        id: "12sp79_entre_startupind",
                        path: "Startup India Programs",
                        skills: ["Business Model Creation", "Product Development", "Marketing"],
                        details: "Government-supported startup initiatives."
                    },
                    {
                        id: "12sp80_entre_ecommerce",
                        path: "E-Commerce Business",
                        skills: ["Digital Marketing", "Supply Chain", "Customer Service"],
                        details: "Online retail and service businesses."
                    },
                    {
                        id: "12sp81_entre_content",
                        path: "Content Creation & Digital Media",
                        skills: ["Content Strategy", "Video Production", "Audience Building"],
                        details: "YouTube, Instagram, and other digital platforms."
                    },
                    {
                        id: "12sp82_entre_social",
                        path: "Social Entrepreneurship",
                        skills: ["Community Development", "Sustainable Business Models", "Impact Assessment"],
                        details: "Businesses addressing social challenges."
                    },
                    {
                        id: "12sp83_entre_rural",
                        path: "Rural & Agri-Entrepreneurship",
                        skills: ["Agricultural Innovation", "Rural Markets", "Value Chain Development"],
                        details: "Businesses focusing on rural development and agriculture."
                    }
                ]
            }
        ]
    },
    // ... (all other 12th grade paths)
    degreeCareers: {
        level: "Degree",
        description: "Comprehensive educational opportunities for Indian students after completing a bachelor's degree.",
        paths: [
            {
                id: "adp1_masters",
                path: "Master's Degrees (Postgraduate Courses)",
                skills: ["Advanced Research", "Specialized Knowledge", "Analytical Skills"],
                qualification: "Bachelor's Degree",
                details: "Pursue a Master's degree in a specialized field for higher studies and research.",
                subPaths: [
                    {
                        id: "adsp1_mtech_me",
                        path: "M.Tech / ME",
                        skills: ["Advanced Technical Skills", "Research", "Problem Solving"],
                        details: "For B.Tech/B.E. graduates. Specializations: AI, Robotics, Data Science, Civil, Mechanical, etc."
                    },
                    {
                        id: "adsp2_msc",
                        path: "M.Sc.",
                        skills: ["Research", "Lab Skills", "Scientific Knowledge"],
                        details: "For B.Sc. graduates. Specializations: Physics, Chemistry, Mathematics, Biotechnology, Environmental Science, etc."
                    },
                    // ... (all other master's subpaths)
                    {
                        id: "adsp3_mcom",
                        path: "M.Com",
                        skills: ["Accounting", "Finance", "Management"],
                        details: "For B.Com graduates. Specializations: Taxation, Financial Accounting, Banking & Insurance."
                    },
                    {
                        id: "adsp4_mba",
                        path: "MBA (Master of Business Administration)",
                        skills: ["Leadership", "Strategic Thinking", "Business Analytics"],
                        details: "Specializations: Digital Marketing, Healthcare Management, Entrepreneurship, International Business, Supply Chain Management, Business Analytics."
                    },
                    {
                        id: "adsp5_ma",
                        path: "MA",
                        skills: ["Critical Analysis", "Writing", "Cultural Awareness"],
                        details: "For Arts students. Specializations: History, Economics, Journalism, Public Administration, Linguistics."
                    },
                    {
                        id: "adsp6_llm",
                        path: "LLM (Master of Laws)",
                        skills: ["Legal Drafting", "Constitutional Law", "International Law"],
                        details: "For LLB graduates. Specializations: Corporate Law, Human Rights, Intellectual Property."
                    },
                    {
                        id: "adsp7_mca",
                        path: "MCA (Master of Computer Applications)",
                        skills: ["Programming", "Cloud Computing", "Cybersecurity"],
                        details: "For BCA/B.Sc. CS graduates."
                    },
                    {
                        id: "adsp28_mdes",
                        path: "M.Des (Master of Design)",
                        skills: ["Creative Design", "User Experience", "Visual Communication"],
                        details: "For design graduates. Specializations: Product Design, Fashion Technology."
                    },
                    {
                        id: "adsp29_mpharm",
                        path: "M.Pharm",
                        skills: ["Pharmaceutical Research", "Drug Development", "Clinical Trials"],
                        details: "For B.Pharm graduates."
                    },
                    {
                        id: "adsp36_mph",
                        path: "MPH (Master of Public Health)",
                        skills: ["Epidemiology", "Health Policy", "Biostatistics"],
                        details: "For graduates in medicine, life sciences, or social sciences. Focus on public health management and policy."
                    },
                    {
                        id: "adsp37_mha",
                        path: "MHA (Master of Hospital Administration)",
                        skills: ["Healthcare Operations", "Hospital Management", "Health Informatics"],
                        details: "For graduates interested in healthcare management. Growing field in India's expanding healthcare sector."
                    },
                    {
                        id: "adsp53_mib",
                        path: "MIB (Master of International Business)",
                        skills: ["Global Business Strategy", "Cross-cultural Management", "International Trade"],
                        details: "Focus on global business operations and international market strategies."
                    },
                    {
                        id: "adsp54_mhrd",
                        path: "MHRD (Master of Human Resource Development)",
                        skills: ["Talent Management", "Organizational Development", "HR Analytics"],
                        details: "Specialized HR program focusing on modern workforce management and development."
                    }
                ],
            },
            {
                id: "adp2_professional_certifications",
                path: "Professional Courses & Certifications",
                skills: ["Industry-Specific Skills", "Technical Expertise", "Validation"],
                qualification: "Bachelor's Degree",
                details: "Pursue professional certifications for specialized skills and career advancement.",
                subPaths: [
                    {
                        id: "adsp8_ca",
                        path: "CA (Chartered Accountant)",
                        skills: ["GST Compliance", "Auditing", "Corporate Finance"],
                        details: "Offered by ICAI. Requires IPCC and Final exams."
                    },
                    {
                        id: "adsp9_cs",
                        path: "CS (Company Secretary)",
                        skills: ["Corporate Governance", "Legal Compliance", "Company Law"],
                        details: "Offered by ICSI."
                    },
                    // ... (all other professional certification subpaths)
                    {
                        id: "adsp10_cfa",
                        path: "CFA (Chartered Financial Analyst)",
                        skills: ["Portfolio Management", "Equity Research", "Derivatives"],
                        details: "Globally recognized finance certification (Levels I-III)."
                    },
                    {
                        id: "adsp11_frm",
                        path: "FRM (Financial Risk Management)",
                        skills: ["Risk Management", "Financial Modeling", "Quantitative Analysis"],
                        details: "Risk Management in Banking."
                    },
                    {
                        id: "adsp12_cpa",
                        path: "CPA (Certified Public Accountant)",
                        skills: ["Accounting", "Auditing", "Financial Reporting", "Taxation"],
                        details: "International Accounting Certification."
                    },
                    {
                        id: "adsp13_actuarial",
                        path: "Actuarial Science",
                        skills: ["Mathematics", "Statistics", "Risk Assessment"],
                        details: "For Finance & Insurance Sector."
                    },
                    {
                        id: "adsp14_pgd",
                        path: "PGD (Postgraduate Diploma) in Digital Marketing, Data Science, AI, Cybersecurity",
                        skills: ["Specialized Skills", "Industry Knowledge", "Practical Application"],
                        details: "Postgraduate diplomas in various specialized fields."
                    },
                    {
                        id: "adsp30_pmp",
                        path: "PMP (Project Management Professional)",
                        skills: ["Agile Methodology", "Risk Management", "Stakeholder Engagement"],
                        details: "For project managers (PMI certification)."
                    },
                    {
                        id: "adsp31_digital_marketing",
                        path: "Digital Marketing Certifications",
                        skills: ["SEO/SEM", "Social Media Marketing", "Content Strategy"],
                        details: "Google Analytics, HubSpot, Meta Blueprint certifications."
                    },
                    {
                        id: "adsp32_pgdm",
                        path: "PGDM (Post Graduate Diploma in Management)",
                        skills: ["Business Strategy", "Operations Management", "Marketing"],
                        details: "Offered by autonomous institutes like IIMs and XLRI."
                    },
                    {
                        id: "adsp38_aws_azure",
                        path: "Cloud Certifications (AWS/Azure/GCP)",
                        skills: ["Cloud Architecture", "DevOps", "Infrastructure Management"],
                        details: "Industry-recognized certifications for cloud computing professionals."
                    },
                    {
                        id: "adsp39_six_sigma",
                        path: "Six Sigma Certification",
                        skills: ["Process Improvement", "Quality Management", "Data-Driven Decision Making"],
                        details: "Green Belt, Black Belt certifications for quality management professionals."
                    },
                    {
                        id: "adsp40_cfp",
                        path: "CFP (Certified Financial Planner)",
                        skills: ["Financial Planning", "Wealth Management", "Retirement Planning"],
                        details: "For finance professionals focusing on personal financial planning."
                    },
                    {
                        id: "adsp55_cma",
                        path: "CMA (Certified Management Accountant)",
                        skills: ["Cost Accounting", "Financial Planning", "Strategic Management"],
                        details: "Global certification for accounting and financial management professionals."
                    },
                    {
                        id: "adsp56_cissp",
                        path: "CISSP (Certified Information Systems Security Professional)",
                        skills: ["Cybersecurity", "Risk Management", "Security Architecture"],
                        details: "Premier certification for cybersecurity professionals."
                    },
                    {
                        id: "adsp57_hr_certifications",
                        path: "HR Certifications (SHRM, HRCI)",
                        skills: ["HR Management", "Employee Relations", "Talent Development"],
                        details: "Internationally recognized certifications for HR professionals."
                    }
                ],
            },
            // ... (all other after degree paths)
            {
                id: "adp8_mba_specialized",
                path: "Specialized MBA Programs",
                skills: ["Business Leadership", "Domain Expertise", "Strategic Management"],
                qualification: "Bachelor's Degree",
                details: "MBA programs with industry-specific focus and specializations.",
                subPaths: [
                    {
                        id: "adsp58_emba",
                        path: "Executive MBA",
                        skills: ["Leadership Development", "Strategic Decision Making", "Organizational Management"],
                        details: "For working professionals with 5+ years experience. Weekend/modular format at IIMs, ISB, XLRI, etc."
                    },
                    {
                        id: "adsp59_mba_tech",
                        path: "MBA in Technology Management",
                        skills: ["Tech Strategy", "Innovation Management", "Digital Transformation"],
                        details: "Programs at NITIE Mumbai, IITs, and specialized tech-focused business schools."
                    },
                    {
                        id: "adsp60_mba_rural",
                        path: "MBA in Rural Management",
                        skills: ["Social Entrepreneurship", "Development Economics", "Community Management"],
                        details: "Programs at IRMA, XISS, TISS focusing on rural development and agribusiness."
                    },
                    {
                        id: "adsp61_mba_luxury",
                        path: "MBA in Luxury Management",
                        skills: ["Brand Management", "Retail Operations", "Consumer Behavior"],
                        details: "Specialized programs for luxury retail, hospitality, and fashion business."
                    },
                    {
                        id: "adsp62_mba_pharma",
                        path: "MBA in Pharmaceutical Management",
                        skills: ["Pharma Marketing", "Healthcare Economics", "Regulatory Affairs"],
                        details: "Programs at NIPER, Manipal, and other specialized institutes."
                    },
                    {
                        id: "adsp63_mba_analytics",
                        path: "MBA in Business Analytics",
                        skills: ["Data Visualization", "Predictive Modeling", "Business Intelligence"],
                        details: "Programs at IIM Calcutta, Great Lakes, ISB, and other analytics-focused institutes."
                    },
                    {
                        id: "adsp64_mba_agri",
                        path: "MBA in Agribusiness",
                        skills: ["Agricultural Economics", "Supply Chain Management", "Food Processing"],
                        details: "Programs at IIM-A FABM, MANAGE Hyderabad, focusing on agricultural business."
                    }
                ],
            },
            {
                id: "adp3_research_higher",
                path: "Research & Higher Studies",
                skills: ["Advanced Research", "Specialized Knowledge", "Academic Writing"],
                qualification: "Master's Degree (or equivalent)",
                details: "Pursue advanced research and academic careers.",
                subPaths: [
                    {
                        id: "adsp15_phd",
                        path: "Ph.D.",
                        skills: ["Thesis Writing", "Data Analysis", "Peer Review"],
                        details: "Duration: 3-5 years. Requires UGC-NET/JRF for funding."
                    },
                    {
                        id: "adsp16_mphil",
                        path: "M.Phil.",
                        skills: ["Qualitative Research", "Hypothesis Testing", "Literature Review"],
                        details: "Pre-Ph.D. research program."
                    },
                    {
                        id: "adsp17_integrated_mtech_phd",
                        path: "Integrated M.Tech + Ph.D.",
                        skills: ["Interdisciplinary Research", "Innovation", "Technical Publications"],
                        details: "For engineering aspirants at IISc/IITs."
                    },
                    {
                        id: "adsp41_post_doctoral",
                        path: "Post-Doctoral Fellowships",
                        skills: ["Advanced Research", "Grant Writing", "Collaborative Research"],
                        details: "Further specialization after Ph.D. Available at premier institutes like IISc, IITs, and through schemes like NPDF."
                    },
                    {
                        id: "adsp42_research_scientist",
                        path: "Research Scientist Positions",
                        skills: ["Applied Research", "R&D", "Industry Collaboration"],
                        details: "Positions in government research labs (DRDO, ISRO, CSIR) and corporate R&D centers."
                    },
                    {
                        id: "adsp65_dst_inspire",
                        path: "DST-INSPIRE Faculty Fellowship",
                        skills: ["Independent Research", "Lab Development", "Mentoring"],
                        details: "Prestigious fellowship for young researchers to establish independent research."
                    }
                ],
            },
            {
                id: "adp4_govt_competitive",
                path: "Government & Competitive Exam-Based Courses",
                skills: ["General Knowledge", "Aptitude", "Reasoning"],
                qualification: "Bachelor's Degree",
                details: "Prepare for various government and competitive exams.",
                subPaths: [
                    {
                        id: "adsp18_upsc",
                        path: "UPSC Civil Services",
                        skills: ["Essay Writing", "Current Affairs", "Ethics"],
                        details: "Exams: Prelims, Mains, Interview."
                    },
                    {
                        id: "adsp19_statepsc",
                        path: "State PSC (Group 1, Group 2, etc.)",
                        skills: ["General Knowledge", "Aptitude", "Reasoning"],
                        details: "State Public Service Commission exams."
                    },
                    {
                        id: "adsp20_ssc_cgl",
                        path: "SSC CGL (Government Jobs in Central Departments)",
                        skills: ["Aptitude", "Reasoning", "English"],
                        details: "Staff Selection Commission Combined Graduate Level exams."
                    },
                    {
                        id: "adsp21_banking_exams",
                        path: "Banking Exams (IBPS PO, SBI PO, RBI Grade B, etc.)",
                        skills: ["Aptitude", "Reasoning", "Financial Knowledge"],
                        details: "Banking exams."
                    },
                    {
                        id: "adsp22_gate",
                        path: "GATE (For M.Tech & PSU Jobs)",
                        skills: ["Technical Knowledge", "Problem Solving", "Analytical Skills"],
                        details: "Graduate Aptitude Test in Engineering."
                    },
                    {
                        id: "adsp23_ugc_net",
                        path: "UGC NET (For Assistant Professor & JRF)",
                        skills: ["Subject Knowledge", "Research Aptitude", "Teaching Skills"],
                        details: "University Grants Commission National Eligibility Test."
                    },
                    {
                        id: "adsp33_ssc_je",
                        path: "SSC JE (Junior Engineer)",
                        skills: ["Technical Aptitude", "Engineering Concepts", "Problem Solving"],
                        details: "For civil/mechanical/electrical engineers."
                    },
                    {
                        id: "adsp34_teaching_exams",
                        path: "Teaching Exams (CTET, TET)",
                        skills: ["Pedagogy", "Child Psychology", "Curriculum Design"],
                        details: "For school-level teaching jobs."
                    },
                    {
                        id: "adsp43_defence_exams",
                        path: "Defence Services Exams",
                        skills: ["Physical Fitness", "Leadership", "Strategic Thinking"],
                        details: "CDS, AFCAT, NDA for officer-level positions in armed forces."
                    },
                    {
                        id: "adsp44_railways_exams",
                        path: "Railway Recruitment Exams",
                        skills: ["Technical Knowledge", "General Awareness", "Aptitude"],
                        details: "RRB, RRC for various technical and non-technical positions in Indian Railways."
                    },
                    {
                        id: "adsp66_psu_exams",
                        path: "PSU Recruitment Exams",
                        skills: ["Technical Knowledge", "Aptitude", "Domain Expertise"],
                        details: "ONGC, NTPC, BHEL and other public sector undertakings recruitment tests."
                    }
                ],
            },
            {
                id: "adp5_international_study",
                path: "International Study Opportunities",
                skills: ["Language Proficiency", "Cultural Awareness", "Adaptability"],
                qualification: "Bachelor's Degree",
                details: "Pursue higher studies abroad.",
                subPaths: [
                    {
                        id: "adsp24_gre",
                        path: "GRE",
                        skills: ["Verbal Reasoning", "Quantitative Reasoning", "Analytical Writing"],
                        details: "Required for STEM programs in the USA/Europe. Score validity: 5 years."
                    },
                    {
                        id: "adsp25_gmat",
                        path: "GMAT",
                        skills: ["Quantitative Reasoning", "Verbal Reasoning", "Integrated Reasoning", "Analytical Writing"],
                        details: "Average score for top MBA programs: 700+."
                    },
                    {
                        id: "adsp26_ielts_toefl",
                        path: "IELTS / TOEFL",
                        skills: ["Language Proficiency", "Communication Skills"],
                        details: "For studying in English-speaking countries."
                    },
                    {
                        id: "adsp27_scholarships",
                        path: "Scholarship Programs (Chevening, Fulbright, DAAD, etc.)",
                        skills: ["Academic Excellence", "Leadership", "Communication Skills"],
                        details: "Various international scholarship programs."
                    },
                    {
                        id: "adsp35_work_and_study",
                        path: "Work-Study Programs (Germany, Canada)",
                        skills: ["Part-Time Work", "Visa Compliance"],
                        details: "Countries like Germany offer low-tuition education with part-time jobs."
                    },
                    {
                        id: "adsp45_student_exchange",
                        path: "Student Exchange Programs",
                        skills: ["Cross-Cultural Communication", "Global Networking", "International Exposure"],
                        details: "Short-term (1-2 semesters) study opportunities through university partnerships."
                    },
                    {
                        id: "adsp46_masters_specialized",
                        path: "Specialized Masters Abroad",
                        skills: ["International Curriculum", "Global Best Practices", "Networking"],
                        details: "Niche programs like MSc in Sustainable Development (Netherlands), Sports Management (UK), or Wine Business (France)."
                    },
                    {
                        id: "adsp67_double_degree",
                        path: "Double Degree Programs",
                        skills: ["Multidisciplinary Learning", "Global Perspective", "Adaptability"],
                        details: "Programs offering degrees from two universities, often in different countries."
                    }
                ],
            },
            {
                id: "adp6_entrepreneurship",
                path: "Entrepreneurship & Startup",
                skills: ["Business Planning", "Innovation", "Risk Management"],
                qualification: "Bachelor's Degree",
                details: "Launch your own venture or join the startup ecosystem.",
                subPaths: [
                    {
                        id: "adsp47_incubation",
                        path: "Incubation Programs",
                        skills: ["Product Development", "Market Validation", "Pitching"],
                        details: "Startup India, T-Hub, IIM/IIT incubators providing mentorship and seed funding."
                    },
                    {
                        id: "adsp48_accelerators",
                        path: "Accelerator Programs",
                        skills: ["Scaling", "Investment Readiness", "Growth Hacking"],
                        details: "Y Combinator, Microsoft Accelerator, etc. for scaling startups."
                    },
                    {
                        id: "adsp49_edpreneurship",
                        path: "Entrepreneurship Development Programs",
                        skills: ["Design Thinking", "Business Strategy", "Financial Planning"],
                        details: "Short-term programs by NSRCEL (IIM-B), CIIE (IIM-A), etc."
                    },
                    {
                        id: "adsp68_govt_startup",
                        path: "Government Startup Programs",
                        skills: ["Policy Navigation", "Grants Management", "Regulatory Compliance"],
                        details: "Programs like Startup India, Atal Innovation Mission, and state-specific startup initiatives."
                    },
                    {
                        id: "adsp69_social_entrepreneurship",
                        path: "Social Entrepreneurship Programs",
                        skills: ["Impact Assessment", "Sustainable Business Models", "Community Engagement"],
                        details: "Programs at TISS, Ashoka University focusing on creating social impact."
                    }
                ],
            },
            {
                id: "adp7_creative_media",
                path: "Creative & Media Arts",
                skills: ["Creative Expression", "Technical Proficiency", "Portfolio Development"],
                qualification: "Bachelor's Degree",
                details: "Pursue careers in creative industries and media.",
                subPaths: [
                    {
                        id: "adsp50_film_studies",
                        path: "Film & Animation Courses",
                        skills: ["Visual Storytelling", "Technical Production", "Post-Production"],
                        details: "Programs at FTII Pune, Whistling Woods, NID for film direction, cinematography, etc."
                    },
                    {
                        id: "adsp51_design_programs",
                        path: "Advanced Design Programs",
                        skills: ["UI/UX Design", "Product Design", "Creative Direction"],
                        details: "Specialized design courses at NID, IDC-IIT Bombay, Srishti, etc."
                    },
                    {
                        id: "adsp52_content_creation",
                        path: "Content Creation & Digital Media",
                        skills: ["Content Strategy", "Video Production", "Audience Building"],
                        details: "Programs focused on new media, YouTube content creation, podcast production, etc."
                    },
                    {
                        id: "adsp70_gaming_vfx",
                        path: "Gaming & VFX Programs",
                        skills: ["Game Design", "3D Modeling", "Animation", "Visual Effects"],
                        details: "Specialized courses in game development, VFX, and animation at institutes like DSK Supinfocom, Arena Animation."
                    }
                ],
            },
            {
                id: "adp9_healthcare_allied",
                path: "Healthcare & Allied Sciences",
                skills: ["Medical Knowledge", "Patient Care", "Clinical Skills"],
                qualification: "Bachelor's Degree (relevant)",
                details: "Advanced studies in healthcare and allied sciences.",
                subPaths: [
                    {
                        id: "adsp71_md_ms",
                        path: "MD/MS (Medical Postgraduation)",
                        skills: ["Clinical Expertise", "Diagnostic Skills", "Medical Research"],
                        details: "For MBBS graduates. Entrance through NEET-PG."
                    },
                    {
                        id: "adsp72_dnb",
                        path: "DNB (Diplomate of National Board)",
                        skills: ["Clinical Practice", "Hospital Training", "Medical Knowledge"],
                        details: "Alternative to MD/MS, conducted by National Board of Examinations."
                    },
                    {
                        id: "adsp73_mds",
                        path: "MDS (Master of Dental Surgery)",
                        skills: ["Advanced Dental Procedures", "Specialized Care", "Oral Health Management"],
                        details: "For BDS graduates through NEET-MDS."
                    },
                    {
                        id: "adsp74_mph",
                        path: "MPH (Master of Public Health)",
                        skills: ["Epidemiology", "Health Policy", "Program Management"],
                        details: "For graduates interested in public health administration and policy."
                    },
                    {
                        id: "adsp75_allied_health",
                        path: "Allied Health Science Programs",
                        skills: ["Clinical Specialization", "Healthcare Technology", "Patient Management"],
                        details: "Advanced studies in Physiotherapy, Occupational Therapy, Speech Therapy, etc."
                    }
                ],
            },
            {
                id: "adp10_civil_services_prep",
                path: "Civil Services & Law Career Paths",
                skills: ["Public Administration", "Legal Knowledge", "Policy Analysis"],
                qualification: "Bachelor's Degree",
                details: "Career paths in governance, administration and law.",
                subPaths: [
                    {
                        id: "adsp76_upsc_coaching",
                        path: "UPSC Coaching Programs",
                        skills: ["Current Affairs", "Essay Writing", "Interview Preparation"],
                        details: "Structured coaching programs for civil services at institutes like Vajiram & Ravi, Vision IAS."
                    },
                    {
                        id: "adsp77_judicial_services",
                        path: "Judicial Services Examination",
                        skills: ["Legal Knowledge", "Judgment Writing", "Constitutional Law"],
                        details: "State-level exams for becoming a judge in district courts."
                    },
                    {
                        id: "adsp78_law_firm_training",
                        path: "Law Firm Training Programs",
                        skills: ["Corporate Law", "Legal Documentation", "Client Management"],
                        details: "Training programs at top law firms for law graduates."
                    }
                ],
            }
        ]
    }
}


// Initialize the app
function initApp() {
    // Set up tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Update current level
            currentLevel = button.getAttribute('data-level');
            // Reset selected path and subpath
            selectedPath = null;
            selectedSubpath = null;
            // Update UI
            updateUI();
        });
    });

    // Initial UI update
    updateUI();
}

// Update the UI based on current state
function updateUI() {
    if (selectedSubpath) {
        showSubpathDetails();
    } else if (selectedPath) {
        showPathDetails();
    } else {
        showPaths();
    }
}

// Show all paths for the current level
function showPaths() {
    // Get the data for the current level
    let levelData;
    if (currentLevel === '10th') {
        levelData = careerData.tenthGradeCareers;
    } else if (currentLevel === '12th') {
        levelData = careerData.twelfthGradeCareers;
    } else {
        levelData = careerData.degreeCareers;
    }

    // Update level description
    levelDescription.innerHTML = `
        <h2>Career Options After ${levelData.level} Grade</h2>
        <p>${levelData.description}</p>
    `;

    // Show paths container, hide details
    pathsContainer.style.display = 'grid';
    pathDetails.style.display = 'none';
    subpathDetails.style.display = 'none';

    // Clear paths container
    pathsContainer.innerHTML = '';

    // Add each path to the container
    levelData.paths.forEach(path => {
        const pathCard = document.createElement('div');
        pathCard.className = 'card fade-in';
        pathCard.innerHTML = `
            <div class="card-header">
                <div>
                    <h3 class="card-title">${path.path}</h3>
                    <p class="card-qualification">${path.qualification}</p>
                </div>
                <div class="card-icon">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            <p class="card-details">${path.details}</p>
            <div class="skills-container">
                ${path.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        `;

        // Add click event to show path details
        pathCard.addEventListener('click', () => {
            selectedPath = path;
            updateUI();
        });

        pathsContainer.appendChild(pathCard);
    });
}

// Show details for the selected path
function showPathDetails() {
    // Hide paths container, show path details
    pathsContainer.style.display = 'none';
    pathDetails.style.display = 'block';
    subpathDetails.style.display = 'none';

    // Create back button
    const backButton = `
        <button class="back-btn" id="path-back-btn">
            <i class="fas fa-arrow-left"></i> Back to All Paths
        </button>
    `;

    // Create path info
    const pathInfo = `
        <div class="path-info">
            <h2>${selectedPath.path}</h2>
            <p>${selectedPath.details}</p>
            <p class="qualification"><strong>Qualification:</strong> ${selectedPath.qualification}</p>
            <h3>Key Skills</h3>
            <div class="skills-container">
                ${selectedPath.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `;

    // Create subpaths section
    let subpathsSection = '';
    if (selectedPath.subPaths && selectedPath.subPaths.length > 0) {
        subpathsSection = `
            <h3>Specializations & Career Paths</h3>
            <div class="subpaths-container">
                ${selectedPath.subPaths.map(subpath => `
                    <div class="subpath-card" data-id="${subpath.id}">
                        <div class="subpath-card-content">
                            <div>
                                <h4 class="subpath-title">${subpath.path}</h4>
                                <p class="subpath-details">${subpath.details}</p>
                            </div>
                            <div class="card-icon">
                                <i class="fas fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Update path details
    pathDetails.innerHTML = backButton + pathInfo + subpathsSection;

    // Add event listener to back button
    document.getElementById('path-back-btn').addEventListener('click', () => {
        selectedPath = null;
        updateUI();
    });

    // Add event listeners to subpath cards
    if (selectedPath.subPaths && selectedPath.subPaths.length > 0) {
        document.querySelectorAll('.subpath-card').forEach(card => {
            card.addEventListener('click', () => {
                const subpathId = card.getAttribute('data-id');
                selectedSubpath = selectedPath.subPaths.find(subpath => subpath.id === subpathId);
                updateUI();
            });
        });
    }
}

// Show details for the selected subpath
function showSubpathDetails() {
    // Hide paths container and path details, show subpath details
    pathsContainer.style.display = 'none';
    pathDetails.style.display = 'none';
    subpathDetails.style.display = 'block';

    // Create back button
    const backButton = `
        <button class="back-btn" id="subpath-back-btn">
            <i class="fas fa-arrow-left"></i> Back to ${selectedPath.path}
        </button>
    `;

    // Create subpath info
    const subpathInfo = `
        <div class="path-info">
            <h2>${selectedSubpath.path}</h2>
            <p>${selectedSubpath.details}</p>
            <h3>Key Skills</h3>
            <div class="skills-container">
                ${selectedSubpath.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `;

    // Update subpath details
    subpathDetails.innerHTML = backButton + subpathInfo;

    // Add event listener to back button
    document.getElementById('subpath-back-btn').addEventListener('click', () => {
        selectedSubpath = null;
        updateUI();
    });
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);