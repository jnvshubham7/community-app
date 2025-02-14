import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-community-card',
  standalone: true,
  imports: [CommonModule], // Standalone needs CommonModule for built-in directives
  templateUrl: './community-card.component.html',
  styleUrls: ['./community-card.component.css'] // Fix typo
})
export class CommunityCardComponent {
  @Input() community: any;

  @Output() joingCommunityEvent = new EventEmitter<string>();

  joinCommunity(): void {
    this.joingCommunityEvent.emit(this.community.id);
  }
}
