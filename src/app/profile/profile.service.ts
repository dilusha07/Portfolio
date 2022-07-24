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

  experience(): Observable<any> {
    return this.experienceData;
  }
}
