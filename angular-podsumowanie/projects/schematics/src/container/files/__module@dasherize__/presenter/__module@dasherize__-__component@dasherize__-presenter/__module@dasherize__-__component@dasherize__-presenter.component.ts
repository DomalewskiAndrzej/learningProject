import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-<%=module%>-<%=component%>-presenter',
  templateUrl: './<%=module%>-<%=component%>-presenter.component.html',
  styleUrls: ['./<%=module%>-<%=component%>-presenter.component.scss']
})
export class <%=classify(module)%><%=classify(component)%>PresenterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
