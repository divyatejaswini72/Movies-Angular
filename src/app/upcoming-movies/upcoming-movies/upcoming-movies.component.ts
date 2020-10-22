import { analyzeAndValidateNgModules } from '@angular/compiler';
import { asNativeElements, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { __asyncGenerator } from 'tslib';
import { MovieService } from '../../services/movies.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {
  details;
  name;
  ailment;
  age;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, public service: MovieService) {


    this.Form = fb.group({
      name: '',
      ailment: '',
      age: ''
    });
  }

  Form: FormGroup;
  id;
  ngOnInit(): void {


  }





}
