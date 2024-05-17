import { Component, OnInit } from '@angular/core';
import { NaveService } from '../nave.service';
import { Nave } from '../nave';

@Component({
  selector: 'app-nave-list',
  templateUrl: './nave-list.component.html',
  styleUrls: ['./nave-list.component.css']
})
export class NaveListComponent implements OnInit {
  constructor(private naveService: NaveService) {}

  naves: Array<Nave> = [];
  rebelion!: string;
  imperio!: string;
  neutral!: string;
  selected: boolean = false;
  selectedNave!: Nave;

  getNaves() {
    this.naveService.getNaves().subscribe((naves) => {
      this.naves = naves;
    });
  }

  getBandos() {
    let rebeliones = 0;
    let imperios = 0;
    let neutrales = 0;
    this.naveService.getNaves().subscribe((naves) => {
      naves.forEach((n) => {
        let bando = n.bando;
        if (bando == "Imperio") {
          imperios += 1;
        }
        if (bando == "Rebelión") {
          rebeliones += 1;
        }
        if (bando == "Neutral") {
          neutrales += 1;
        }
        this.rebelion = rebeliones.toString();
        this.imperio = imperios.toString();
        this.neutral = neutrales.toString();
      });
    });
  }

  onSelected(nave: Nave): void {
    this.selected = true;
    this.selectedNave = nave;
  }

  ngOnInit() {
    this.getNaves();
  }

}
