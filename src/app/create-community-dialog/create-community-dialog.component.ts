import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-community-dialog',
  imports: [FormsModule],
  templateUrl: './create-community-dialog.component.html',
  styleUrl: './create-community-dialog.component.css'
})
export class CreateCommunityDialogComponent {

  communityName: string = '';
  communityDescription: string = '';

  constructor( private dialogRef: MatDialogRef<CreateCommunityDialogComponent>)  {}

  createCommunity()
  {
    if(this.communityName && this.communityDescription)
    {
      this.dialogRef.close
      ({
        name: this.communityName,
        description: this.communityDescription
        
      })
    }


    

  }

  closeDialog(): void {
    this.dialogRef.close();
  }



}
