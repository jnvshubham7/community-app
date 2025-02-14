import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityCardComponent } from "../community-card/community-card.component";
import { Community } from './community.model';
import { CommunityService } from './community.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { CreateCommunityDialogComponent } from '../create-community-dialog/create-community-dialog.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [CommonModule, HttpClientModule, CommunityCardComponent], // Ensure standalone usage
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'] // Fix typo
})


export class CommunityComponent {

    communities: Community[] = [];
  
    constructor(private communityService: CommunityService, private dialog : MatDialog ) {}
  
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

    onJoinCommunity(communityId :string) : void{
      this.communityService.joinCommunity(communityId, 'user123').subscribe(
        (response) => 
        {
          console.log('Joined community:', response);
          this.fetchCommunities();
        },
        (error) => 
        {
          console.error('Error joining community:', error);
        }
      )

    }

    createCommunity(): void {
      const dialogRef = this.dialog.open(CreateCommunityDialogComponent, {
        // width: '600px'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.communityService.createCommunity(result).subscribe(() => {
            this.fetchCommunities();
          });
        }
      });
    }



  }