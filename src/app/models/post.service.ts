import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postList = [
    { 'id': '1', 'titre': "Premier post", 'contenu': 'détails premier post' },
    { 'id': '2', 'titre': "Deuxième post", 'contenu': 'détails deuxième post' },
    { 'id': '3', 'titre': "Troisième post", 'contenu': 'détails troisième post' },
    { 'id': '4', 'titre': "Quatriéme post", 'contenu': 'détails quatriéme post' },
  ];
/*  getPosts() {
    return this.postList;
  }
*/
  constructor(private http:HttpClient) { }
  getPosts():Observable <any[]>
  {return this.http.get<any[]>('http://localhost:3000/post');}
 

}







