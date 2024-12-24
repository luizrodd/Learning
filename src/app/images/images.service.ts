import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(
    private http: HttpClient
  ) { }
  getImage(userId: string, postId: string, fileId: string): Observable<Blob> {
    const url = `https://localhost:7193/api/Storage?userId=${userId}&postId=${postId}&fileId=${fileId}`;
    return this.http.get<Blob>(url, { responseType: 'blob' as 'json' }); // Aqui garantimos que o tipo de resposta é Blob
  }

  getPosts(){
    return this.http.get('https://localhost:7193/api/Posts');
  }

}
