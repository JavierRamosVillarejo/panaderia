import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { UserService } from 'src/app/servicios/user.service';
import { dniValido2 } from 'src/app/validaciones/dni-valido';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: User = {}
  mostrarEditar: boolean = false
  formPerfil = this.fb.group({
    nombre: [''],
    apellidos: [''],
    password: ['', [, Validators.minLength(4)]],
    email: ['', [ Validators.email]],
    dni: ['', [Validators.required,dniValido2()]],
    
  })

  get dniN(){return this.formPerfil.get("dni")}
  get emailN(){return this.formPerfil.get("email")}
  get passN(){return this.formPerfil.get("password")}
  

  

  formImage = this.fb.group({
    imagen:["",Validators.required]
  })
  foto: File
  mensaje = ""
  visible = false
  contador


  constructor(private servicioUsuario: UserService, private fb: FormBuilder, private irHacia: Router) { }

  ngOnInit(): void {
    this.cargarPerfil()
    
  }

  cargarPerfil():void{
    this.servicioUsuario.obtenerPerfil().subscribe(
      respuesta =>{
        console.log(respuesta)
        this.perfil= respuesta
        this.formPerfil.patchValue(respuesta)

      },
      error => {
        
        console.log(error)
        this.mensaje= error.error.error
      }
    )
  }
  editarPerfil():void{
    this.servicioUsuario.editarPerfil(this.formPerfil.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
        this.mostrarEditar = false
      },
      error => {
        console.log(error)
      
        this.mensaje= error.error.error
      }
    )
  }
  eliminarUsuario():void{
    this.servicioUsuario.eliminarPerfil().subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.logout()
        this.irHacia.navigate(["login"])
        
      },
      error => {
        console.log(error)
        this.mensaje= error.error.error}
    )
  }
  cambiaImagen(evento): void{
    if(evento.taget.files){
      this.formImage.get("imagen").setValue(evento.target.files[0])
    }
  }

  subirImagen():void{
    const formData = new FormData()
    formData.append("imagen", this.formImage.get("imagen").value)
    this.servicioUsuario.subirImagen(formData).subscribe(
      respuesta => {
        console.log(respuesta)

      },
      error => {
        console.log(error)
        this.mensaje= error.error.error
      }
    )
  }
  
  tengoFoto(evento): void{
    if(evento.target.files){
      this.foto = evento.target.files[0]
    }
  }

  subirFoto():void{
    const formData = new FormData()
    formData.append("imagen", this.foto)
    this.servicioUsuario.subirImagen(formData).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()

      },
      error => {
        console.log(error)
        this.mensaje= error.error.error
      }
    )

  }
  

}
