import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Marian";
  fullName = "marIan caPOte paCAreu";
  array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  money = 1234.5;
  video = "MD246ViCD3s";
  active: boolean = true ;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: 19
    }
  };

  valueOfPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Llego la data!"), 3500);
  });

  date = new Date();
}
