import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ReserveLinksComponent } from "./reserve-links/reserve-links.component";
import { NewSuvComponent } from "./new-suv/new-suv.component";
import { NewSedanComponent } from "./new-sedan/new-sedan.component";
import { NewEvComponent } from "./new-ev/new-ev.component";
import { NewGearComponent } from "./new-gear/new-gear.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ReserveLinksComponent, NewSuvComponent, NewSedanComponent, NewEvComponent, NewGearComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bmw_officialsite_practice';
}
