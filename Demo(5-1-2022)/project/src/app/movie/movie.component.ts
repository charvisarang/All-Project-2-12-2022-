import { Component } from '@angular/core';
import { MovieserviceService } from '../movieservice.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  public moviedata: any = [];

  constructor(private movieService: MovieserviceService) {
  }
  ngOnInit() {
    this.getMovieData();
  }

  getMovieData() {
    this.movieService.getData().subscribe((result) => {
      console.log(result);
      this.moviedata = result;
    })
  }

}



