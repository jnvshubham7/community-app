import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-community-card',
  standalone: true,
  imports: [CommonModule], // Standalone needs CommonModule for built-in directives
  templateUrl: './community-card.component.html',
  styleUrls: ['./community-card.component.css'] // Fix typo
})
export class CommunityCardComponent {
  @Input() community: any;
}
