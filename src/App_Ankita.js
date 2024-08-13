import logo from "./logo.svg";
import "./App.scss";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import profileImage from "./images/ankita.jpg";
import signature from "./images/signature.jpg";

function App() {
  const data = {
    "personal-info": {
      Name: "ANKITA KONER",
      Role: "IT Service Manager",
      Address: "16, Kailash Banerjee Lane, Bally, Howrah - 711201",
      Phone: "+91-6290027814",
      Email: "ankitakoner40@gmail.com",
      LinkedIn: "https://www.linkedin.com/ankita.koner",
      Desc: "Experienced in IT Service Management & Quality and having strong knowledge in Oracle, SOL.\n Quick learner with self-confidence, strong leadership qualities, and robust problem-solving skills.\n Seeking opportunities to contribute effectively to organizational goals in a collaborative or independent capacity.",
    },
    Skills: {
      "IT Service Management(ITSM)": "100%",
      "Project Quality Lead": "100%",
      "SQL": "70%",
      "PL/SQL": "70%",
      "Service Now": "70%",
      "Oracle DB": "70%",
      "Oracle SQL Developer": "70%",
    },
    Languages: {
      English: "100%",
      Hindi: "90%",
      Bengali: "100%",
    },
    "Employment History": [
      {
        Role: "IT Service Manager",
        Designation: "Senior Analyst/ Software Engineer",
        "Start Date": "Feb 2022",
        "End Date": "Present",
        Location: "Kolkata",
        Company: "Capgemini",
        about: [
          "Led the major Incident Management Process, coordinating the response to high-sevirity incidents & minimizing their impact on business.",
          "Established and maintained communication channels with- stakeholders, including senior management, technical teams, business units to provide regular updateson incident status, resolution efforts and impact assesment.",
          "Administered & customized ServiceNow for streamlined incident tracking and SLA monitoring.",
          "Achieved improvement in SLA compliance by automating routine tasks & optimizing workflows",
          "Conducted regular SLA reviews & made adjustment to meet evolving business needs.",
          "Coordinated with cross-functional teams to enhance incident management,problem managemen & request management processes, reducing resolution time.",
          "Held Weekly meetings for ticket review & determined escalations to relevant assignees or leads.",
          "Developed and maintained IT Service continuity plans to ensure business continuity during disruption.",
          "Successfully managed change management processes to minimize disruptions and maintain stakeholder satisfaction.",
          "Created Dahboards by using reports extracted from Service Now tool to track the status of the tickets to avoid SLA breach.",
          "Created Weekly & Monthly audit reports to showease the resolved tickets compliance to management.",
          "Ensure tickets are been worked on by the assignees and thus reduced the backlog tickets.",
        ],
      }
    ],
    Education: {
      Course: "B.Tech in Computer Science & Engineering.",
      "Passing Year": "2020",
      University: "MAKAUT",
      Score: "7.76",
    },
    Certification: [
      {
      name: "The Structured Query Language(SQL) | Coursera",
      desc:"Coursera",
    },
      {
      name: "Begining SQL server  | Coursera",
      desc:"Coursera",
    },
      {
      name: "Introduction to Scrum Master  | Coursera",
      desc:"Coursera",
    },
      {
      name: "Agile Software Development  | Coursera",
      desc:"Coursera",
    }
  ],
  Achievements:[
    "Implemented a new incident management process that reduced service disruption and improved customer satisfaction.",
    "Implemented a comprehensive change management process, reducing unauthorized changes.",
    "Received recognition from Senior management for consistently achieving high customer satisfaction scores."
  ]
  };
  const profileName = data["personal-info"]["Name"];
  const downloadPdf = () => {
    const input = document.getElementById("resumePreview");
    console.log(document);
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        //  const pdf = new jsPDF("p", "mm", "a4");
        //  var width = pdf.internal.pageSize.getWidth();
        //  var height = pdf.internal.pageSize.getHeight();
        //  pdf.addImage(imgData, 'JPEG', 0, 0,width,height);
        //  // pdf.output('dataurlnewwindow');
        //  pdf.save("resume.pdf");
        var imgWidth = 210;
        var pageHeight = 295;
        var imgHeight = (canvas.height * imgWidth) / canvas.width;
        var heightLeft = imgHeight;
        var doc = new jsPDF("p", "mm", "a4");
        var position = 0; // give some top padding to first page

        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position += heightLeft - imgHeight; // top padding for other pages
          doc.addPage();
          doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }
        doc.save("file.pdf");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <div class="resume-container" id="resumePreview">
        <div id="header">
          <div className="bg-grey"></div>
          <div className="bg-red"></div>
          <div className="img-container">
            <img src={profileImage} alt="" />
          </div>
        </div>
        <div className="flex-container d-flex">
          <div className="left-panel-container">
            <div className="personal-info-section">
              <h3 className="left-panel-heading">PERSONAL INFO</h3>
              {Object.entries(data["personal-info"]).map((info) => {
                return (
                  !["Name", "Desc", "Role"].includes(info[0]) && (
                    <div className="personal-info">
                      <h4 className="left-panel-subheading">{info[0]}</h4>
                      <p className="personal-info-detail">{info[1]}</p>
                    </div>
                  )
                );
              })}
            </div>
            <div className="skills-section">
              <h3 className="left-panel-heading mt-20">SKILLS</h3>
              {Object.entries(data["Skills"]).map((skill) => {
                return (
                  <div className="skill-container">
                    <p className="personal-info-detail">{skill[0]}</p>
                    <div className="progress-container">
                      <div
                        class="progress-bar"
                        style={{ width: skill[1] }}
                        id="progressBar"
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="languages-section">
              <h3 className="left-panel-heading mt-20">LANGUAGES</h3>
              {Object.entries(data["Languages"]).map((language) => {
                return (
                  <div className="languages-container">
                    <p className="personal-info-detail">{language[0]}</p>
                    <div className="progress-container">
                      <div
                        class="progress-bar"
                        style={{ width: language[1] }}
                        id="progressBar"
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="right-panel-container">
            <h3 className="profile-name">
              {profileName.split(" ")[0]}
              <br></br>
              {profileName.split(" ")[1]}
            </h3>
            <h4 className="role">{data["personal-info"]["Role"]}</h4>
            <p className="profile-about">{data["personal-info"].Desc}</p>
            <div className="emplyment-section">
              <h3 className="right-panel-heading">WORK EXPERIENCE </h3>
              {data["Employment History"].map((emp,index) => {
                return (
                  <div className={`emplyment`}>
                    <div className={"heading-flex"}>
                    <h4 className="company-role">
                      {emp.Role}
                    </h4>
                    <h4 className="company-role">
                      {emp["Start Date"]} - {emp["End Date"]}
                    </h4>
                    </div>
                    
                    <h4 className={`company ${index==3?"custom-mg":""}`}>
                      {emp.Designation !== "" && `${emp.Designation} | `}
                      {emp.Company} , {emp.Location}
                    </h4>
                    <ul>
                      {emp.about.map((point) => (
                        <li>{point}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="education-section">
              <h3 className="right-panel-heading">EDUCATION</h3>
              <h4>
                {data.Education.Course} | {data.Education["Passing Year"]}
              </h4>
              <h4>
                {data.Education.University} | DGPA {data.Education.Score}
              </h4>
            </div>
            <div className="certification-section mb-cs">
              <h3 className="right-panel-heading">CERTIFICATION</h3>
              {data.Certification.map((cert)=>{
                return <div className="certificate">
                  <h4>{cert.name}</h4>
                  {/* <div className="d-flex"><h5>Description:</h5><p>{cert.desc}</p></div> */}
                  {cert.hasOwnProperty("id")?
                   <div className="d-flex"><h5>Certificate Id:</h5><p>{cert.id}</p></div>:
                  //  <div className="d-flex"><h5>Certificate Link:</h5><p>{cert.link}</p></div>
                  <></>
                  }
                </div>
              })}
            </div>
            <div className="certification-section">
              <h3 className="right-panel-heading">Achievements</h3>
              <ul>
              {data.Achievements.map((ach)=>{
                return <li>
                  <p>{ach}</p>
                </li>
              })}
              </ul>
            </div>
            <div className="footer">
              <p>I hereby declare that all the information given above is true and correct to the best of my knowledge.</p>
              <div className="d-flex">
                <p>Kolkata, 10 Apr 2024</p>
                <div className="d-grid mt-20">
                  
                  <p>Ankita Koner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={downloadPdf}>Download</button>
    </div>
  );
}

export default App;
