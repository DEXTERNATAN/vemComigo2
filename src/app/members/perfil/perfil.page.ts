import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {

  myForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {
    this.myForm = this.createMyForm();
  }

  saveData() {
    console.log(this.myForm.value);
  }

  private createMyForm() {
    return this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      turma: ['', Validators.required],
      horario: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required]
      // passwordRetry: this.formBuilder.group({
      //   password: ['', Validators.required],
      //   passwordConfirmation: ['', Validators.required]
      // }),
      // gender: ['', Validators.required]
    });
  }

}
