import { Component, OnInit } from '@angular/core';

export interface Oferta {
  ciudad: string,
  descripcion: string,
  imgUrl: string,
  nombre: string,
  salario: number,
  skills: Array<string>
}

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  ofertas: Array<Oferta> = [
    {
      ciudad: 'Madrid',
      nombre: 'Senior Employee Services Generalist',
      imgUrl: 'https://s3-eu-west-1.amazonaws.com/www.jobfluent.com/company_logos/2/7/1/2715_170_60.png',
      salario: 100000,
      skills: ['Spanish', 'Human Resources', 'HR', 'English'],
      descripcion: 'This Madrid-based position is part of the Employee Services team (ES), which designs and runs the infrastructure to deliver an outstanding employee experience from (pre-)onboarding and beyond. This hire will be a key player, interacting with employees and the business daily to predict and address the needs of those stakeholders and will partner with the larger EMEA Employee Services, HRBP & Talent Acquisition teams to provide on the ground support and advice. The role supports experience, benefits, mobility, contingent workforce, operations, and compliance across Spain. You will be expected to be highly independent and proactive in identifying and implementing positive change and improvements, and you will strategize to create an amazing employee experience, aligned to our culture.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
