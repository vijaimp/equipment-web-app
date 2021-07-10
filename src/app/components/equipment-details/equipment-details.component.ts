import {Component, Input, OnInit} from '@angular/core';
import {EquipmentAppService} from "../../services/equipment-app.service";
import {Equipment} from "../../model/equipment";

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.css']
})
export class EquipmentDetailsComponent implements OnInit {
  service: EquipmentAppService;
  @Input() resultEquipments: Equipment[];

  constructor(private equipmentAppService: EquipmentAppService) {
    this.service = equipmentAppService;
  }

  ngOnInit(): void {
  }
}
