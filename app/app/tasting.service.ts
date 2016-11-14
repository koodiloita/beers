import {Injectable} from '@angular/core';
import {Tasting, Beer} from './entities';
import {mockTastings} from './mock-tastings';

@Injectable()
export class TastingService {
  getTastings(): Promise<Tasting[]> {
    return new Promise<Tasting[]>(resolve =>
      setTimeout(resolve, 1000))
      .then(() => {return Promise.resolve(mockTastings);});
  }
}
