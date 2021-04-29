import {Component, Input, OnInit, ViewChildren} from '@angular/core';
import {LayoutEnum} from '../app.component';

export interface IPlanhubChipConfig {
  label: string;
  selected?: boolean;
  disabled?: boolean;
}

export enum ChipTypeEnum {
  'Large',
  'Small'
}

export enum ChipColorEnum {
  'Blue',
  'White'
}

@Component({
  selector: 'planhub-chip-list',
  templateUrl: './planhub-chip-list.component.html',
  styleUrls: ['./planhub-chip-list.component.scss']
})
export class PlanhubChipListComponent implements OnInit {

  @Input() chipConfigs: Array<IPlanhubChipConfig>;
  @Input() layout: LayoutEnum;
  @Input() chipType: ChipTypeEnum;
  @Input() chipColor: ChipColorEnum;

  get chipTypeEnum(): typeof ChipTypeEnum {
    return ChipTypeEnum;
  }

  get chipColorEnum(): typeof ChipColorEnum {
    return ChipColorEnum;
  }

  get fxLayout(): string {
    return this.layout === LayoutEnum.Row ? 'row' : 'column';
  }

  constructor() {
    this.chipConfigs = [];
    this.layout = LayoutEnum.Row;
    this.chipType = ChipTypeEnum.Large;
    this.chipColor = ChipColorEnum.Blue;
  }

  ngOnInit(): void {
  }

  public selectionChange($event: any): void {
    console.log($event);
  }

  public clicked(chipConfig: IPlanhubChipConfig): void {
    if (!chipConfig.disabled){
      chipConfig.selected = !chipConfig.selected;
    }
  }

  public removeChip(index: number): void {
    this.chipConfigs.splice(index, 1);
  }

}
