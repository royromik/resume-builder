import logo from "./logo.svg";
import "./App.scss";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import profileImage from "./images/IMG_1799.jpg";
import signature from "./images/signature.jpg";

function App() {
  const data = {
    "personal-info": {
      Name: "ROMIK ROY",
      Role: "ReactJs Developer",
      Address: "343, Garagacha Patuli Connector, Kol - 700084",
      Phone: "+91-7980835368",
      Email: "royromik@gmail",
      LinkedIn: "https://www.linkedin.com/romik.roy",
      Desc: "I am an enthusiastic software developer with 3+ years having knowledge and understanding of languages & frameworks such as experience in developing User Interfaces with a track record of implementing Agile methodologies to facilitate on-time product delivery . As I am a quick learner and innovative person, I can quickly adapt new technology thereby enhacning my skills and capabilities. I pride myself on optimizing functions and providing solutions that are intuitive, user-friendly, adaptable and effective.",
    },
    Skills: {
      HTML: "90%",
      CSS: "90%",
      "Fundamental of JavaScript": "100%",
      "JavaScript Xml": "100%",
      React: "100%",
      Redux: "80%",
      "Node + NPM": "80%",
      Express: "80%",
      MongoDB: "70%",
      "UI/UX": "100%",
      Git: "100%",
      ChatGPT: "100%",
    },
    Languages: {
      English: "100%",
      Hindi: "90%",
      Bengali: "100%",
    },
    "Employment History": [
      {
        Role: "ReactJs Developer",
        Designation: "Associate Consultant",
        "Start Date": "May 2021",
        "End Date": "Present",
        Location: "Kolkata",
        Company: "Capgemini",
        about: [
          "Developed and maintainer applications using ReactJs for HSBC Client.",
          "Worked closely with back-end developers to integrate front-end components with server-side logic",
          "Capturing User activites in the application and sent those data for audit report",
          "Created customised table component and making each field editable in the table.",
          "Converting all the data from table component to excel in the final report and make it downloadable for user.",
          "Conducted unit testing and integration testing using Jest and Enzyme",
          "Working within an agile team environment building new features.",
          "Accurately compretending business requirements and code creative solutions to satisfy those requirements to deliver the best experience.",
        ],
      },
      {
        Role: "Backend Developer",
        Designation: "Software Development Engineer",
        "Start Date": "Feb 2021",
        "End Date": "April 2021",
        Location: "Bangalore",
        Company: "Vymo Technologies",
        about: [
          "Developed and maintained server-side logic using Node.js for scalable and high-performance applications.",
          "Designed and implemented RESTful APIs for seamless communication between the front-end and back-end systems.",
          "Maintained and monitored backend services and databases to ensure optimal performance.",
        ],
      },
      {
        Role: "Frontend Developer",
        Designation: "Software Development Engineer",
        "Start Date": "Nov 2019",
        "End Date": "Nov 2020",
        Location: "Bangalore",
        Company: "Great Learning",
        about: [
          "Developed Dynamic Program pages and Static landing pages based on the requirements of their courses.",
          "Developed and maintained View layer of MVC framework using jQuery, HTML, CSS and sass framework.",
          "Improved pagespeed score for many pages by removing bootstrap and using lazyload in the website.",
          "Implemented charts to show dynamic data of testimonials on the website by using chart.js.",
          "Collaborated with UX designers and back-end developers to create visually appealing and user-friendly interfaces",
          "Optimized web applications for performance and cross-browser compatibility."
        ]
      },
      {
        Role: "Full Stack Trainee",
        Designation: "",
        "Start Date": "Aug 2019",
        "End Date": "Nov 2019",
        Location: "Bangalore",
        Company: "Mountblue Technologies Private Limited",
        about: [
          "Worked on various project based on Html, css, javascript, jQuery, DOM, react, redux , mongodb, mysql. After training in Full-stack software development for three months, Got deployed to Great Learning to work as a Software developer.",
        ],
      },
    ],
    Education: {
      Course: "B.Tech in Computer Science",
      "Passing Year": "2019",
      University: "MAKAUT",
      Score: "8.11",
    },
    Certification: [{
      name: "Hackerrank Problem Solving (Basic)",
      desc:"It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).",
      id:"C1DA91EB3D1D"
    },
    {
      name: "Freecodecamp JavaScript Algorithms and Data Structures",
      desc:"It covers basic to advance concepts of JavaScript",
      link:"https://www.freecodecamp.org/certification/royromik/javascript-algorithms-and-data-structures"
    }
  ],
  Achievements:[
    "Based on performance and contibrutions, got promoted to associate consultant in capgemini",
    "Recognized by senior management for delivering projects with 100% on-time record and only minimal updates.",
    // "Awarded best performer of the quarter by the senior management in Capgemini."
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
            <div className="certification-section">
              <h3 className="right-panel-heading">CERTIFICATION</h3>
              {data.Certification.map((cert)=>{
                return <div className="certificate">
                  <h4>{cert.name}</h4>
                  <div className="d-flex"><h5>Description:</h5><p>{cert.desc}</p></div>
                  {cert.hasOwnProperty("id")?
                   <div className="d-flex"><h5>Certificate Id:</h5><p>{cert.id}</p></div>:
                   <div className="d-flex"><h5>Certificate Link:</h5><p>{cert.link}</p></div>
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
                <p>Kolkata, 06 Dec 2023</p>
                <div className="d-grid">
                  <img src={signature} alt="signature" />
                  <p>Signature</p>
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
