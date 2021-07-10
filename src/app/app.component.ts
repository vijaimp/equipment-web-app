import {Component} from '@angular/core';
import {EquipmentAppService} from "./services/equipment-app.service";
import {Equipment} from "./model/equipment";
import {ErrorService} from "./services/error.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'equipment-web-app';
  type: string = "";
  service: EquipmentAppService;
  equipments: Equipment[] = [];
  errorMessage: string;
  form: FormGroup = new FormGroup({});

  constructor(private equipmentAppService: EquipmentAppService,
              private errorService: ErrorService,
              private fb: FormBuilder) {
    this.service = equipmentAppService;
    this.form = fb.group({
      inputNumber: ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    })
  }

  showInput(type: string): void {
    this.type = type;
  }

  getEquipments(numberOfEquipments: string) {
    this.service.getEquipments(Number(numberOfEquipments)).subscribe(res => {
        this.equipments = res.equipments;
        this.type = "";
      },
      err => {
        this.errorMessage = this.errorService.handleError(err);
      });
  }

  getEquipment(equipmentId: string) {
    this.service.getEquipmentById(equipmentId).subscribe(res => {
        this.equipments[0] = res;
        this.type = "";
      },
      err => {
        this.errorMessage = this.errorService.handleError(err);
      });
  }
}
