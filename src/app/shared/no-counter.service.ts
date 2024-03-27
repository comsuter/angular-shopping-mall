import { Injectable, EventEmitter, numberAttribute } from '@angular/core';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Domain } from './shared-util';

@Injectable()
export class NoCounterService {

  // constructor(private db: AngularFireDatabaseModule) { }

  // get(domain: Domain): Observable<number> {
    // return this._getNumber$(domain).snapshotChanges().map(action => action.payload.val() || 0);
  // }

  incAndGet(domain: Domain): Observable<number> {
    const id$ = new EventEmitter<number>();

    const onComplete = (err:any, comitted:any, dataSnapshot:any) => {
      if (err) throw new Error(`failed to increase number`);

      if (comitted) {
        id$.emit(dataSnapshot.val());
        id$.complete();
      }
    };
    // this.db.object(`/numbers/${domain}`).query.ref.transaction(num => (num || 0) + 1, onComplete);
    return id$;
  }

  private _getNumber$(domain: Domain) {
    // return this.db.object(`/numbers/${domain}`);
  }
}
