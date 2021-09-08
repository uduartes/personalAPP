import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  usuario: any = {};
  lista_roles: any[];
  @ViewChild('div_body', { static: true }) body: ElementRef;

  constructor(ElementRef: ElementRef) {
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

    this.lista_roles = [];
    this.addRol('Administrador'); // estas son las primeras lineas seleciconaod con scroll del mouse
    this.addRol('Certificador'); // estas son las primeras lineas seleciconaod con scroll del mouse
    this.addRol('Operador'); // estas son las primeras lineas seleciconaod con scroll del mouse o con Ctrol + D n veces las lineas que quieras
    this.addRol('Cliente');

    this.body = ElementRef;
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
    console.log(this.body);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
  imprimirUsuario() {
    alert(this.usuario.nombre);
  }

  addRol(rol: string) {
    this.lista_roles.push(rol);
  }

  recibirUsuario(usaurio:Usuario){
    console.log("Agregado "+this.usuario);
    this.lista_usuarios.push(usuario)
  }

}
