import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000'; 

  constructor(private http: HttpClient) { }

  getAlumnos(grado: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('usuario:contrasenia') // Autenticación básica
    });
    return this.http.get(`${this.apiUrl}/consultar-alumno/${grado}/`, { headers });
  }

  createAlumno(alumno: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('usuario:contrasenia') // Autenticación básica
    });
    return this.http.post(`${this.apiUrl}/crear-alumno/`, alumno, { headers });
  }
}
