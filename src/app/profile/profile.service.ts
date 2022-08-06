import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  about2 = `Software Developer with 1 year of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Python, Bootstrap, MongoDB, aws, and MYSQL`;

  about1 =
    'Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.';

  experienceData: any = [
    {
      id: 1,
      timeline: 'SEP 2021 - MARCH 2022',
      company: 'Well Tech Solutions',
      role: 'Trainee Software Engineer',
      work: `Working on StageClip Project as a full stack developer.Responsible for handling the UI in React and Managing the api calls in Node.'`,
    },
  ];

  projects: any = [
    {
      id: 1,
      title: 'Online Food Ordering System',
      desc: '',
      livedemo: '',
      giturl: '',
      imgUrl: 'assets/images/project1.png',
      technologies: 'React, Node.js, MongoDB',
    },
    {
      id: 2,
      title: 'Library Management System',
      desc: '',
      livedemo: '',
      giturl: '',
      imgUrl: 'assets/images/project2.jpg',
      technologies: 'React, Node.js, MongoDB',
    },
    {
      id: 3,
      title: 'Sri Lanka Tourism',
      desc: '',
      livedemo: '',
      giturl: '',
      imgUrl: 'assets/images/project3.jpg',
      technologies: 'HTML, CSS, JavaScript',
    },
    {
      id: 4,
      title: 'University management System',
      desc: '',
      livedemo: '',
      giturl: '',
      imgUrl: 'assets/images/project4.jpg',
      technologies: 'Java, MYSQL',
    },
  ];

  experience(): Observable<any> {
    return this.experienceData;
  }

  getProjects(): Observable<any> {
    return this.projects;
  }
}
