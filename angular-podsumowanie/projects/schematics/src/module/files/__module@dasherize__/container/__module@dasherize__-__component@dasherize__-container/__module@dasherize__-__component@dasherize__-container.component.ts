import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-<%=module%>-<%=component%>-container',
  templateUrl: './<%=module%>-<%=component%>-container.component.html',
  styleUrls: ['./<%=module%>-<%=component%>-container.component.scss']
})
export class <%=classify(module)%><%=classify(component)%>ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
