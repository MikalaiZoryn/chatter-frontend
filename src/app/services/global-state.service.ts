import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface AppState {
  user: { name: string } | null;
}

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private initialState: AppState = {
    user: null,
  }

  private stateSource = new BehaviorSubject<AppState>(this.initialState);
  state$ = this.stateSource.asObservable();

  get currentState(): AppState {
    return this.stateSource.getValue();
  }

  updateState(newState: Partial<AppState>) {
    this.stateSource.next({ ...this.currentState, ...newState });
  }
}
