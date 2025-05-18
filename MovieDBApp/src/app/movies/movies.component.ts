import { Component, OnInit } from '@angular/core';
import { MovieService, Movie, Show } from '../movie.service';
import { NgIf,NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';
import { response } from 'express';


@Component({
  standalone:true,
  selector: 'app-movies',
  imports:[NgIf,NgFor],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(private movieService: MovieService) {}
  popularMovies: Movie[] = [];
  searchedMovies: Movie[] = [];
  searchQuery: string = '';
  tvShows: Show[] = [];
  nowPlayingMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  

  ngOnInit() {
    this.loadPopularMovies();
    this.loadNowPlaying();
    this.loadUpcoming();
    this.loadTopRated();
    this.loadTVShows();
  }
  loadTVShows() {
    this.movieService.getPopularTVShows().subscribe({
      next: (response) => {
        this.tvShows = response;
        console.log('TV Shows loaded:', response);
      },
      error: (err) => console.error('Error fetching TV shows:', err)
    });
  }

 loadPopularMovies() {
  this.movieService.getPopularMovies().subscribe({
    next: (response) => {
      console.log('API response:', response);
      this.popularMovies = response; // assign the 'results' array
    },
    error: (err) => console.error('Error:', err)
  });
}
  

/*   searchMovies() {
    this.movieService.searchdMovies(this.searchQuery).subscribe(
      movies => this.searchedMovies = movies,
      error => console.error('Error:', error)
    );

    loadTVShows() {
    this.movieService.getTVPopular().subscribe({
      next: (response) => {
        console.log('TV Shows:', response);
        this.tvShows = response.results;
      },
      error: (err) => console.error('Error:', err)
    });
  }
}
  } */
  

loadPopularTVShows() {
  this.movieService.getPopularTVShows().subscribe({
    next: (response) => {
      this.tvShows = response;
      console.log('TV Shows loaded:', response);
    },
    error: (err) => console.error('Error fetching TV shows:', err)
  });
}
loadNowPlaying() {
  this.movieService.getNowPlayingMovies().subscribe({
    next: (response) => {
      console.log('Now playing response:', response);
      this.nowPlayingMovies = response;
    },
    error: (err) => console.error('Error:', err)
  });
}

loadUpcoming() {
  this.movieService.getUpcomingMovies().subscribe({
    next: (response) => {
      console.log('Upcoming movies:', response);
      this.upcomingMovies = response;
    },
    error: (err) => console.error('Error:', err)
  });
}

loadTopRated() {
  this.movieService.getTopRatedMovies().subscribe({
    next: (response) => {
      console.log('Top rated movies:', response);
      this.topRatedMovies = response;
    },
    error: (err) => console.error('Error:', err)
  });
}
}