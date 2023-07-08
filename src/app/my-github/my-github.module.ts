import { MyGithubRoutingModule } from './my-github-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyGithubComponent } from './my-github.component';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [MyGithubComponent],
  imports: [
    CommonModule,
    MyGithubRoutingModule,
    FormsModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzIconModule,
  ],
})
export class MyGithubModule {}
