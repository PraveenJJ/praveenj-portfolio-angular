import { Component, OnInit } from '@angular/core';
import { IntroDataService } from '../../services/intro-data.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
  standalone: true,
  imports: []
})
export class IntroComponent implements OnInit {

  introData: any;

  constructor(private introDataService: IntroDataService) {}

  ngOnInit(): void {
    this.introDataService.getIntroData().subscribe((data) => {
      this.introData = data;
    });
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = this.introData.resumeLink;
    link.download = this.introData.resumePdfFileName;
    link.click();
  }

}
