import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { AddressesService } from '../addresses.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from '../../ui/confirm-dlg/confirm-dlg.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    private addressesService: AddressesService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  id: number = 0;
  title: string = 'Adicionar novo usuário';
  usuario: any = {
    username: null,
    email: null,
    firstName: null,
    lastName: null,
    isActive: true,
    password: null,
    address_id: null
  }; // Objeto vazio
  addresses: any = [];

  async ngOnInit() { 
    try {
      let params = this.actRoute.snapshot.params;
      this.addresses = await this.addressesService.listar();
      this.addresses = this.addresses.allAddress;
      
      if(params['id']) { // Se houver um parâmetro "id" na rota
        // Busca o professor do id passado
        this.id = params['id'];
        this.usuario = await this.userService.obterUm(this.id);
        this.usuario.password = null;
        // Alterar o título da página
        this.title = 'Editar usuário';
      }
    }
    catch(error) {
      console.log(error);
    }
  }

  async salvar(form: NgForm) {
    if(form.valid) {
      try {
        let msg = 'Novo usuário criado com sucesso.'
        
        if(this.id) { // Se tem _id, é edição
          this.usuario.id = this.id;
          await this.userService.atualizar(this.id, this.usuario);
          msg = 'Usuário atualizado com sucesso.'
        }
        else {
          await this.userService.novo(this.usuario);
        }
        
        this.snackBar.open(msg, 'Entendi', {
          duration: 4000,
        });
        this.router.navigate(['/users']); // Volta à página de listagem
      }
      catch(error) {
        console.error(error);
        this.snackBar.open('ERRO: não foi possível salvar os dados!', 'Entendi', {
          duration: 4000,
        });
      }
    }
  }

  async voltar(form: NgForm) {
    let result = true;
    // form.dirty: o formulário foi alterado via código (está "sujo")
    // form.touched: o formulário foi alterado pelo usuário
    if(form.dirty && form.touched) {
      try {
        const dialogRef = this.dialog.open(ConfirmDlgComponent, {
          width: '50%',
          data: {question: 'Há dados não salvos. Deseja realmente voltar?'}
        });
        result = await dialogRef.afterClosed().toPromise();
      }
      catch(error) {
        console.error(error);
      }
    }
    if(result) {
      this.router.navigate(['/users']); // Volta para a listagem
    }
  }

}
