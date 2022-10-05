import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from '../../ui/confirm-dlg/confirm-dlg.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  title: string = 'Lista de usuários';
  usuarios: any = [];
  displayedColumns: string[] = ['username','email','editar', 'excluir'];

  async ngOnInit() {
    try{
      this.usuarios = await this.userService.listar();
      this.usuarios = this.usuarios.allUsers;
    }catch(erro){
      console.error(erro);
    }
  }

  async excluir(id: string){
    try{
      const dialogRef = this.dialog.open(ConfirmDlgComponent, {
        width: '50%',
        data: {question: 'Deseja realmente excluir este usuário?'}
      });

      let result = await dialogRef.afterClosed().toPromise();
      
      if(result) {
        await this.userService.excluir(id);
        this.ngOnInit(); // Força o recarregamento dos dados
        this.snackBar.open('Exclusão efetuada com sucesso.', 'Entendi', {
          duration: 4000,
        });            
      }

    }catch(error){
      console.error(error);
    }
  }

}
