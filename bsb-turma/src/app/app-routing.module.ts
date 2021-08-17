import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './views/components/template/home/home.component';


import {ResponsavelListarComponent} from './views/components/responsavel-crud/responsavelListar/responsavel-listar.component';
import {ResponsavelSalvarComponent} from "./views/components/responsavel-crud/responsavelSalvar/responsavel-salvar.component";
import {ResponsavelDeletarComponent} from "./views/components/responsavel-crud/responsavelDeletar/responsavel-deletar.component";
import {ResponsavelAtualizarComponent} from "./views/components/responsavel-crud/responsavelAtualizar/responsavel-atualizar.component";

import {TipoTarefaListarComponent} from "./views/components/tipoTarefa-crud/tipoTarefaListar/tipoTarefa-listar.component";
import {TipoTarefaAtualizarComponent} from "./views/components/tipoTarefa-crud/tipoTarefaAtualizar/tipoTarefa-atualizar.component";
import {TipoTarefaSalvarComponent} from "./views/components/tipoTarefa-crud/tipoTarefaSalvar/tipoTarefa-salvar.component";
import {TipoTarefaDeletarComponent} from "./views/components/tipoTarefa-crud/tipoTarefaDeletar/tipoTarefa-deletar.component";



const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'responsavel',
    component: ResponsavelListarComponent
  },
  {
    path:'responsavel/salvar',
    component: ResponsavelSalvarComponent
  },
  {
    path: 'responsavel/delete',
    component: ResponsavelDeletarComponent
  },

  {
     path: 'responsavel/delete/:id',
        component: ResponsavelDeletarComponent
      },
    {
    path:'responsavel/update/:id',
    component: ResponsavelAtualizarComponent
  },
  {
    path:'responsavel/update',
    component: ResponsavelAtualizarComponent
  }



  ,
  {
    path:'tipotarefas',
    component: TipoTarefaListarComponent
  },
  {
    path:'tipotarefas/salvar',
    component: TipoTarefaSalvarComponent
  },
  {
    path: 'tipotarefas/delete',
    component: TipoTarefaDeletarComponent
  },

  {
    path: 'tipotarefas/delete/:id',
    component: TipoTarefaDeletarComponent
  },
  {
    path:'tipotarefas/update/:id',
    component: TipoTarefaAtualizarComponent
  },
  {
    path:'tipotarefas/update',
    component: TipoTarefaAtualizarComponent
  }

  ,
  // {
  //   path:'tarefa',
  //   component: TarefaListarComponent
  // },
  // // {
  //   path:'tarefa/salvar',
  //   component: TarefaSalvarComponent
  // },
  // {
  //   path: 'tarefa/delete',
  //   component: TarefaDeletarComponent
  // },
  //
  // {
  //   path: 'tarefa/delete/:id',
  //   component: TarefaDeletarComponent
  // },
  // {
  //   path:'tarefa/update/:id',
  //   component: TarefaAtualizarComponent
  // },
  // {
  //   path:'tarefa/update',
  //   component: TarefaAtualizarComponent
  // }
  //
  // ,
  // {
  //   path:'comentario',
  //   component: ComentarioListarComponent
  // },
  // {
  //   path:'comentario/salvar',
  //   component: ComentarioSalvarComponent
  // },
  // {
  //   path: 'comentario/delete',
  //   component: ComentarioDeletarComponent
  // },
  //
  // {
  //   path: 'comentario/delete/:id',
  //   component: ComentarioDeletarComponent
  // },
  // {
  //   path:'comentario/update/:id',
  //   component: ComentarioAtualizarComponent
  // },
  // {
  //   path:'comentario/update',
  //   component: ComentarioAtualizarComponent
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
