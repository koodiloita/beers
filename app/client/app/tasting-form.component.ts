import {Component} from '@angular/core';
import {TastingService} from './tasting.service';
import {TastingForm, Tasting} from './entities';
import {formToTasting} from './mapper';
import {Router} from '@angular/router';

@Component({
  selector: 'tasting-form',
  template: `
    <h2>Create new tasting</h2>
    <form action="/tasting" method="post">
      <div class="form-group">
        <label>Title</label>
        <input class="form-control" type="text" name="tastingFormTitle" [(ngModel)]="tastingForm.title" placeholder=""/>
      </div>
      <div class="form-group">
        <label>Grade (1-10)</label>
        <input class="form-control" type="text" name="tastingFormGrade" [(ngModel)]="tastingForm.grade" placeholder="0"/>
      </div>
      <div class="form-group">
        <label>Date</label>
        <input class="form-control" type="text" name="tastingFormDate" [(ngModel)]="tastingForm.date" placeholder="yyyy-mm-dd"/>
      </div>
      <div class="form-group">
        <label>Notes</label>
        <textarea class="form-control" name="tastingFormNotes" rows="4" cols="50" [(ngModel)]="tastingForm.notes">
        </textarea>
      </div>
      <div class="form-group">
        <label>Food</label>
        <input class="form-control" type="text" name="tastingFormFood" [(ngModel)]="tastingForm.food" placeholder=""/>
      </div>
      <h3>Beer details</h3>
      <div class="form-group">
        <label>Beer name</label>
        <input class="form-control" type="text" name="tastingFormBeerName" [(ngModel)]="tastingForm.beerName" placeholder=""/>
      </div>
      <div class="form-group">
        <label>Beer type</label>
        <input class="form-control" type="text" name="tastingFormBeerType" [(ngModel)]="tastingForm.beerType" placeholder=""/>
      </div>
      <div class="form-group">
        <label>Brewery</label>
        <input class="form-control" type="text" name="tastingFormBeerBrewery" [(ngModel)]="tastingForm.beerBrewery" placeholder=""/>
      </div>
      <div class="form-group">
        <label>Country</label>
        <input class="form-control" type="text" name="tastingFormBeerCountry" [(ngModel)]="tastingForm.beerCountry" placeholder=""/>
      </div>
      <div class="form-group">
        <label>Wort strength</label>
        <input class="form-control" type="text" name="tastingFormBeerWortStrength" [(ngModel)]="tastingForm.beerWortStrength" placeholder=""/>
      </div>
      <div class="form-group">
        <label>Alcohol %</label>
        <input class="form-control" type="text" name="tastingFormBeerAlcohol" [(ngModel)]="tastingForm.beerAlcohol" placeholder="1.2"/>
      </div>
      <div class="form-group">
        <label>Color</label>
        <input class="form-control" type="text" name="tastingFormBeerColor" [(ngModel)]="tastingForm.beerColor" placeholder="123"/>
      </div>
      <div class="form-group">
        <label>EBU</label>
        <input class="form-control" type="text" name="tastingFormBeerEbu" [(ngModel)]="tastingForm.beerEbu" placeholder="12"/>
      </div>
      <div class="form-group">
          <a class="btn btn-default btn-success" (click)="submitTasting(tastingForm)" role="button">Submit tasting</a>
          <a class="btn btn-default" href="/" role="button">Cancel</a>
      </div>
    </form>
  `,
  providers: [TastingService]
})

export class TastingFormComponent {
  tastingForm: TastingForm;

  constructor(private router: Router, private tastingService: TastingService) {}

  initializeForm(): TastingForm {
    const emptyForm: TastingForm = new TastingForm();
    return emptyForm;
  }

  submitTasting(filledForm: TastingForm): void {
    const newTasting: Tasting = formToTasting(filledForm);
    if (this.tastingService.insertTasting(newTasting)) {
      this.router.navigate(['/tastings']);
    }
  }

  ngOnInit(): void {
    this.tastingForm = this.initializeForm();
  }
}
