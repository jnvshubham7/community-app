import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityCardComponent } from "../community-card/community-card.component";
import { Community } from './community.model';
import { CommunityService } from './community.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, CommunityCardComponent, HttpClientModule], // Ensure standalone usage
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'] // Fix typo
})


export class CommunityComponent {
  // communities = [
  //   { name: 'Angular Devs', description: 'A community for Angular developers', members: 1200 },
  //   { name: 'Java Spring Boot', description: 'Backend developers community', members: 900 },
  //   { name: 'React Developers', description: 'Building powerful UIs with React', members: 1500 },
  //   { name: 'AI & Machine Learning', description: 'Exploring AI, ML, and Data Science', members: 1800 },
  //   { name: 'Full Stack Developers', description: 'End-to-end development discussions', members: 1300 },
  //   { name: 'Cloud Computing', description: 'AWS, Azure, and Google Cloud experts', members: 1000 },
  //   { name: 'Cybersecurity', description: 'Discussing security, hacking, and encryption', members: 1100 },
  //   { name: 'Flutter & Dart', description: 'Building cross-platform apps with Flutter', members: 1400 },
  //   { name: 'DevOps & CI/CD', description: 'Automation, Kubernetes, Docker, and more', members: 1250 },
  //   { name: 'Python Enthusiasts', description: 'All about Python programming and frameworks', members: 2000 },
  //   { name: 'Data Structures & Algorithms', description: 'DSA discussions and problem-solving', members: 1600 },
  //   { name: 'Blockchain & Web3', description: 'Decentralized apps and smart contracts', members: 950 }
  // ];
    communities: Community[] = [];
  
    constructor(private communityService: CommunityService) {}
  
    ngOnInit(): void {
      this.fetchCommunities();
    }
  
    fetchCommunities(): void {
      this.communityService.getAllCommunities().subscribe(
        (data: Community[]) => {
          this.communities = data;
        },
        (error) => {
          console.error('Error fetching communities:', error);
        }
      );
    }
  }