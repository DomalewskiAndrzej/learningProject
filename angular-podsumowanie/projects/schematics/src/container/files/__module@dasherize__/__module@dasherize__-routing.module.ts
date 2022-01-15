import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { <%=classify(module)%><%=classify(component)%>ContainerComponent } from './container/<%=module%>-<%=component%>-container/<%=module%>-<%=component%>-container.component';


const routes: Routes = [
  {
    path: '',
    component: <%=classify(module)%><%=classify(component)%>ContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class <%=classify(module)%>RoutingModule {}
