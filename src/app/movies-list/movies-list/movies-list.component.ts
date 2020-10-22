import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Movies } from '../../models/movies';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patients-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  searchText;
  displayedColumns: string[] = ['Name', 'Ailment', 'Age', 'Actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  movies: any = [];
  upcomingMovies: any = [];

  constructor(public service: MovieService, public route: Router) { }

  ngOnInit(): void {
    this.getMovies();

  }

  getUpcomingMovies() {
    this.service.getUpcomingMovies().subscribe((res: {}) => {
      this.movies = res;
    })
  }

  getMovies() {
    this.service.getTopRatedMoviesList().subscribe((data: {}) => {
      this.movies = data;
    });
  }

}
