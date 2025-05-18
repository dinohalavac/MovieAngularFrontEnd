import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieApiResponse {
  results: Movie[];
}

export interface Show {
  backdrop_path: string;
  id: number;
  name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  original_language: string;
  original_name: string;
  genre_ids: number[];
}

export interface TVApiResponse {
  results: Show[];
}

@Injectable({ providedIn: 'root' })
export class MovieService {
  getTVPopular() {
    throw new Error('Method not implemented.');
  }
  private apiBase = 'http://localhost:5142/api'; // your API URL

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<MovieApiResponse>(`${this.apiBase}/movies/popular`)
      .pipe(map(res => res.results));
  }

  getTopRatedMovies(): Observable<Movie[]> {
    return this.http.get<MovieApiResponse>(`${this.apiBase}/movies/top_rated`)
      .pipe(map(res => res.results));
  }

  getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get<MovieApiResponse>(`${this.apiBase}/movies/upcoming`)
      .pipe(map(res => res.results));
  }

  getNowPlayingMovies(): Observable<Movie[]> {
    return this.http.get<MovieApiResponse>(`${this.apiBase}/movies/now_playing`)
      .pipe(map(res => res.results));
  }

  getPopularTVShows(): Observable<Show[]> {
    return this.http.get<TVApiResponse>(`${this.apiBase}/movies/tv/popular`)
      .pipe(map(res => res.results));
  }
}