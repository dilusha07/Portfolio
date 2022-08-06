import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  workexp: any = '';

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.workexp = this.profileService.experience();
  }
}
