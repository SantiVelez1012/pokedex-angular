import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-menu',
  templateUrl: './general-menu.component.html',
  styleUrls: ['./general-menu.component.css']
})
export class GeneralMenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirectToPokedex(){
    this.router.navigate(['/general-info'])
    return 0;
  }

}
