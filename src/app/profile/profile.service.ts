import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  about1 =
    'Lover of innovation and everything related to generate new knowledge. Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.';

  about2 = `Software Developer with 1 year of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Python, Bootstrap, MongoDB, aws, and MYSQL`;

  resumeUrl = '';

  experienceData: any = [
    {
      id: 1,
      timeline: 'SEP 2021 - MARCH 2022',
      company: 'Well Tech Solutions',
      role: 'Trainee Software Engineer',
      work: `Carried out diverse development tasks including frontend and backend development by ensuring highest quality of the code .
      Working on StageClip Project as a full stack developer .
      Responsible for handling the UI in React and Managing the api calls in Node .
      Technologies: React.js, TypeScript, Node.js, PostgreSQL `,
    },
  ];

  projects: any = [
    {
      id: 1,
      title: 'Online Food Ordering System',
      desc: '',
      livedemo: '',
      giturl: 'https://github.com/dilusha07/Online-Food-Order-System.git',
      imgUrl: 'assets/images/project1.jpg',
      technologies: 'React, Node.js, MongoDB',
    },
    {
      id: 2,
      title: 'Library Management System',
      desc: '',
      livedemo: '',
      giturl: 'https://github.com/dilusha07/lms-frontend.git',
      imgUrl: 'assets/images/project2.jpg',
      technologies: 'React, Node.js, MongoDB',
    },
    {
      id: 3,
      title: 'Sri Lanka Tourism',
      desc: '',
      livedemo: 'https://dilusha07.github.io/Sri-Lanka-Tourism/',
      giturl: 'https://github.com/dilusha07/Sri-Lanka-Tourism.git',
      imgUrl: 'assets/images/project3.jpg',
      technologies: 'HTML, CSS, JavaScript',
    },
    {
      id: 4,
      title: 'University management System',
      desc: '',
      livedemo: '',
      giturl: 'https://github.com/dilusha07/University_Management-system.git',
      imgUrl: 'assets/images/project4.jpg',
      technologies: 'Java, MYSQL',
    },
  ];

  skillsData: any = [
    {
      id: '1',
      skill: 'React',
      progress: '80%',
    },
    {
      id: '1',
      skill: 'Node.js',
      progress: '75%',
    },
    {
      id: '1',
      skill: 'Angular',
      progress: '60%',
    },
    {
      id: '1',
      skill: 'JavaScript JQuery',
      progress: '80%',
    },
    {
      id: '1',
      skill: 'SQL, MYSQL, MONGODB, ProstgreSQL',
      progress: '70%',
    },
    {
      id: '1',
      skill: 'Phython, Java',
      progress: '60%',
    },
  ];

  educationData: any = [
    {
      id: '1',
      from_to_year: '2019 - 2023',
      education: "Bachelor's Degree",
      stream: 'Bachelor of Software Engineering',
      info: 'Specialized Domains: Data Science and Engineering, Net-centric Applications,Business Engineering',
      institution: 'University of kelaniya',
    },
    {
      id: '2',
      from_to_year: '2013 - 2015',
      education: 'Advanced Level',
      stream: 'Advanced level Examination - 2017',
      info: 'The High School was mainly focus on the bases of science, mathematics, and Chemistry. There was also a good base on physics, mathematics and chemistry.Completed my Advanced Level examination  with 2A and 1B passes',
      institution: 'MR/Mahingha Rajapaksha college, Matara',
    },
    {
      id: '3',
      from_to_year: '2002 - 2012',
      education: 'Ordinary Level',
      stream: 'Ordinary Level Examination - 2012',
      info: 'The Secondary aims at Maths , English , Science, Sinhala, Litrature and Languages.Completed my Secondary school with 8A and 1B passes.',
      institution: 'MR/Godapitiya Central college',
    },
  ];

  experience(): Observable<any> {
    return this.experienceData;
  }

  getProjects(): Observable<any> {
    return this.projects;
  }

  skills(): Observable<any> {
    return this.skillsData;
  }

  education(): Observable<any> {
    return this.educationData;
  }
}
