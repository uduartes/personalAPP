import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  usuario: any = {};

  constructor() {
    // opcion 1 para trabajar variables
    // this.usuario['nombre'] = 'Ulises';
    // this.usuario['apellido'] = 'Duarte';
    // this.usuario['nacionalidad'] = 'Mexicana';

    // opcion 2
    this.usuario = {
      nombre: 'Ulises',
      apellido: 'Duarte',
      nacionalidad: 'Mexicana',
    };

    let usuario_temp = JSON.parse(JSON.stringify(this.usuario));
    console.log('Constructor', this.usuario);
    // alt + shift + f
  }

  ngOnInit() {
    this.usuario.nombre = 'Otro';
    let usuario_temp = JSON.parse(JSON.stringify(this.usuario));
    console.log('Oninit', usuario_temp);
  }

  ngAfterViewInit() {
    this.usuario.nombre = 'Uno Mas';
    let usuario_temp = JSON.parse(JSON.stringify(this.usuario));
    console.log('OnAfterViewInit', usuario_temp);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
