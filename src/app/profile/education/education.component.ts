import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  education: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.education = this.profileService.education;
  }
}
