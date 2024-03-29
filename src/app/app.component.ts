import {Component} from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <div>
        <pm-product></pm-product>
      </div>
    </div>
  `
})
export class AppComponent{
  pageTitle: string = "ACME product manager.";
}
