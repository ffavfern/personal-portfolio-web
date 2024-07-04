import "./EducationExperience.css";
import { motion } from "framer-motion";

const EducationExperience = () => {
  const education = [
    {
      period: "2021 - present",
      institution: "ST THERESA INTERNATIONAL COLLEGE",
      degree: "Graduate Diploma Program in Teaching Profession",
      location: "Nakhon Nayok, Thailand",
      logo: "https://upload.wikimedia.org/wikipedia/th/0/01/St_theresa.jpg",
    },
    {
      period: "2010 - 2013",
      institution: "Beijing Languages University",
      degree: "Master of Education in Curriculum & Methodology",
      location: "Beijing, China",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hNQwWbETJ6lKQndo_FHDg3zUftB0q1_75Q&s",
    },
    {
      period: "2010 - 2012",
      institution: "Assumption University",
      degree: "Master of Arts in Chinese Teaching as a Second Language",
      location: "Bangkok, Thailand",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Assumption_University_seal.svg/1200px-Assumption_University_seal.svg.png",
    },
    {
      period: "2005 - 2009",
      institution: "Mae Fah Luang University",
      degree: "Bachelor's of Arts in Business Chinese",
      location: "Chiang Rai, Thailand",
      logo: "https://archives.mfu.ac.th/wp-content/uploads/2019/06/Mae-Fah-Luang-University-2.png",
    },
  ];

  const experience = [
    {
      period: "2014 - Present",
      position: "TCL Expert",
      company: "Beijing Languages University",
      responsibilities: [
        "Curriculum design and prepare volunteer teachers to perform teaching duties in Thailand.",
        "Plan a workshop and design Learning Processes.",
        "Study and research together to develop Chinese language teaching for foreigners.",
      ],
      logo: "https://static.wixstatic.com/media/8fc1f4_2d4cf37317154ec7a5c6b014d2c10609~mv2.jpg",
    },
    {
      period: "2016 - Present",
      position: "Consultant & Assessor",
      company:
        "Thailand Professional Qualification Institute (Public Organization)",
      responsibilities: [
        "Established a professional standard for Chinese language teachers in Thailand.",
        "Managed the organization to certify the vocational competence of Chinese language teachers in Thailand.",
        "Appointed to be a committee for encouraging the professional standards of Chinese language teachers in Thailand.",
        "Planned strategies and workshops to promote professional competence for Thai people.",
        "Coordinated with government and private agencies in Thailand to promote the professional competencies of Chinese language teachers in Thailand.",
      ],
      logo: "https://catalog-tpqi.data.go.th/uploads/admin/2022-12-15-045347.331807Logo2.png",
    },
    {
      period: "2019 - 2020",
      position: "General Manager",
      company: "General Manager, Central Garden Co., Ltd.",
      responsibilities: [
        "Planned and oversaw the overall management of manpower, service, budget, building new customer base and retaining existing customers.",
        "Provided advice and build a business network in the form of business partners in conjunction with the marketing team as well as promotions with various departments on various platforms.",
        "Promoted a good image for society for the organization.",
      ],
      logo: "https://static.wixstatic.com/media/1615f4_5aa54d44246a4b0685639eb5b57be192~mv2.png/v1/fill/w_90,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1614826461.png",
    },
    {
      period: "2016 - 2019",
      position:
        "Assistant Director of Office of Customer Experience Management",
      company: "Siam Gems Group",
      responsibilities: [
        "Establish managing plans and strategies for the department in accordance with the company’s missions.",
        "Design and implement the Standard Operation Procedures (S.O.P) for all business units in the group.",
        "Research and analyze customer behavior for establishing customer experience.",
        "Design and develop internal service auditing System.",
        "Develop customer satisfaction survey along with spread sheet / database. From the spread sheet / database, produce findings of the customer satisfaction in report / graph form.",
      ],
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd8tFHL1xMExCg-XTl5JouGN88gb3VIVxKA&s",
    },
  ];

  const skillset = [
    "Proficient in organizing strategies and plans for organizational management for sustainable development and covering budget management, finance, HR, corporate goals and missions, as well as building corporate image towards society.",
    "Proficient in management, workforce management, KPIs, monitoring, coaching and team building for common goals.",
    "Proficient in building relationships and doing business with organizations both public and private.",
    "Creating and developing training and evaluating management system for the enhancement of personnel performance in the organization.",
    "Design and develop courses and manage training according to the individual competency framework.",
    "Strategies and layout planning to support Academy Center (Make relationships with School/Colleges/University) to find out Internships, Corporate Projects and New talents.",
    "Planning and managing customer experience creation (CXM + Internal Service Audit)",
    "Determination of service standards of the organization and front desk positions (SOP).",
    "Research design on service behavior and consumer behavior for to develop and create customer experience including analyzing customer satisfaction.",
  ];

  const languages = [
    { language: "Thai", proficiency: "Native" },
    { language: "English", proficiency: "Good" },
    { language: "Chinese", proficiency: "Excellent" },
  ];

  return (
    <section className="text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          {/* Education Column */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-500 uppercase mb-2">Qualification</h2>
            <h3 className="text-3xl font-bold mb-4">My Education</h3>
            <ul className="timeline timeline-vertical ">
              {education.map((edu, index) => (
                <li key={index}>
                  {index !== 0 && <hr />}
                  <div className="timeline-start">{edu.period}</div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box bg-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 mr-2">
                        <img
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{edu.institution}</h4>
                        <p className="text-sm text-gray-400">{edu.location}</p>
                      </div>
                    </div>
                    <p className="text-lg">{edu.degree}</p>
                  </div>
                  <hr />
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Work Experience Column */}
          <motion.div
            className="mb-12 "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-500 uppercase mb-2 ">Work Experience</h2>
            <h3 className="text-3xl font-bold mb-4">My Experience</h3>
            <ul className="timeline timeline-vertical">
              {experience.map((exp, index) => (
                <li key={index}>
                  {index !== 0 && <hr />}
                  <div className="timeline-start">{exp.period}</div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box bg-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 mr-2">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{exp.position}</h4>
                        <p className="text-sm text-gray-400">{exp.company}</p>
                      </div>
                    </div>
                    <ul className="text-lg list-disc ml-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                  <hr />
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Professional Skillset and Languages Section */}
          <motion.div
            className="mb-12 flex flex-col md:flex-row gap-8 "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-1">
              <h2 className="text-blue-500 uppercase mb-2">
                Professional Skillset
              </h2>
              <h3 className="text-3xl font-bold mb-4">My Skills</h3>
              <ul className="list-disc pl-6">
                {skillset.map((skill, index) => (
                  <motion.li
                    key={index}
                    className="mb-2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex-1 ">
              <h3 className="text-3xl font-bold mb-4">Languages</h3>
              <ul>
                {languages.map((lang, index) => (
                  <motion.li
                    key={index}
                    className="mb-2 flex items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="bg-blue-500 py-1 px-2 rounded-full text-white mr-2">
                      {lang.language}
                    </span>
                    <span>{lang.proficiency}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
