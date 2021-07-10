import {first, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {BaseApiService} from './base-api.service';
import {Observable} from 'rxjs';
import {Equipments} from "../model/equipments";
import {Equipment} from "../model/equipment";

@Injectable({
  providedIn: 'root'
})
export class EquipmentAppService {

  public static readonly REST_URL = 'http://localhost:4200/equipment-app/equipment';

  constructor(private api: BaseApiService) {
  }

  getEquipments(numberOfEquipments: number): Observable<Equipments> {
    return this.api.get(EquipmentAppService.REST_URL + "/search" + this.getQueryParam(numberOfEquipments))
      .pipe(
        map((res: Equipments) => res),
        );
  }

  getEquipmentById(equipmentNumber: string): Observable<Equipment> {
    return this.api.getOne(EquipmentAppService.REST_URL, equipmentNumber);
  }

  getQueryParam(numberOfEquipments: number): string {
    return '?limit=' + numberOfEquipments;
  }
}
