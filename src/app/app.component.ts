import { Component } from '@angular/core';
import { TimeoutError } from 'rxjs';
import { timeout } from 'rxjs-compat/operator/timeout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon projet Angular';
  isAuth = false;

  appareils = [
    {
      name: "Machine à laver",
      status: "éteint"
    },
    {
      name: "Télévision",
      status: "allumé"
    },
    {
    name: "Ordinateur",
      status: "éteint"
    }
  ]

  constructor() {
    // modifier dynamiquement propriété
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    console.log("On allume tout")
  }
}
