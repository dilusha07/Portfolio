import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  about1: any = '';
  about2: any = '';
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.about1 = this.profileService.about1;
    this.about2 = this.profileService.about2;
  }
}
