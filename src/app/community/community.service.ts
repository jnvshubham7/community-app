

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Community } from './community.model';
 // Define this model based on your backend model
 import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
  
})
export class CommunityService {
  private apiUrl = 'http://localhost:8080/api/communities'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getAllCommunities(): Observable<Community[]> {
    return this.http.get<Community[]>(this.apiUrl);
  }

  getCommunityDetails(id: string): Observable<Community> {
    return this.http.get<Community>(`${this.apiUrl}/${id}`);
  }

  createCommunity(community: Community): Observable<Community> {
    return this.http.post<Community>(this.apiUrl, community);
  }

  
  joinCommunity(communityId: string, userId: string): Observable<Community> {
    return this.http.post<Community>(`${this.apiUrl}/${communityId}/join?userId=${userId}`, {});
  }
  
  
}