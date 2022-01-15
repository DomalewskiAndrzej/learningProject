import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { <%=classify(module)%>RoutingModule } from './<%=module%>-routing.module';
import { <%=classify(module)%><%=classify(component)%>ContainerComponent } from './container/<%=module%>-<%=component%>-container/<%=module%>-<%=component%>-container.component';
import { <%=classify(module)%><%=classify(component)%>PresenterComponent } from './presenter/<%=module%>-<%=component%>-presenter/<%=module%>-<%=component%>-presenter.component';

@NgModule({
  declarations: [
    <%=classify(module)%><%=classify(component)%>ContainerComponent,
    <%=classify(module)%><%=classify(component)%>PresenterComponent,
  ],
  imports: [<%=classify(module)%>RoutingModule, SharedModule],
})
export class <%=classify(module)%>Module {}

