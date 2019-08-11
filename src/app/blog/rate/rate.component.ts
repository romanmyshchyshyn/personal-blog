import { Component, OnInit, Input } from '@angular/core';
import { faStar, faInfinity } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';
import { RateService } from './rate.service';
import { RateModel } from './rate-model';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  faStar = faStar;
  faInfinity = faInfinity;

  @Input() postId: string;
  @Input() userRate: RateModel;
  @Input() globalRateValue: number;

  public userRateValue: number;

  constructor(private auth: AuthService, private rateService: RateService) { }

  ngOnInit() {
    this.userRateValue = this.userRate == null ? 0 : this.userRate.value;
  }

  private updateRate(value: number) {
    this.userRate.value = value;
    this.rateService.update(this.userRate).subscribe(
      (data) => this.userRateValue = value,
      (error) => console.log(error)
    );
  }

  private addRate(value: number) {
    this.userRate = {
      id: undefined,
      postId: this.postId,
      userId: this.auth.user.id,
      value: value
    }

    this.rateService.add(this.userRate).subscribe(
      (rateId) => {
        this.userRateValue = value;
        this.userRate.id = rateId;
      },
      (error) => console.log(error)
    );
  }

  sliderChange($event) {    
    if (this.userRate != null)
    {
      console.log('update');
      
      this.updateRate($event.value);
    }
    else {
      console.log('add');
      
      this.addRate($event.value);
    }    
  }
}
