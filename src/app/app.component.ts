import {Component, ViewChild, ViewChildren} from '@angular/core';
import { ButtonTypeEnum } from './planhub-button/planhub-button.component';
import { RadioButtonOption } from './planhub-radio-button/planhub-radio-button.component';
import {ChipColorEnum, ChipTypeEnum, IPlanhubChipConfig} from './planhub-chip-list/planhub-chip-list.component';
import {PlanhubInputComponent} from './planhub-input/planhub-input.component';

class SelectOption {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

class AutcompleteOption {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export enum LayoutEnum {
  'Row',
  'Column'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectOptions: Array<SelectOption> = [
    new SelectOption(1, 'Option 1'),
    new SelectOption(2, 'Option 2'),
    new SelectOption(3, 'Option 3')
  ];

  public radioOptions: Array<RadioButtonOption> = [
    new RadioButtonOption(1, 'Option 1'),
    new RadioButtonOption(2, 'Option 2'),
    new RadioButtonOption(3, 'Option 3')
  ];

  public autoCompleteOptionsStrings: Array<string> = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five'
  ];

  public autoCompleteOptionsObjects: Array<AutcompleteOption> = [
    new AutcompleteOption(1, 'Six'),
    new AutcompleteOption(2, 'Seven'),
    new AutcompleteOption(3, 'Eight'),
    new AutcompleteOption(4, 'Nine'),
    new AutcompleteOption(5, 'Ten')
  ];

  public largeChipConfigs: Array<IPlanhubChipConfig> = [
    { label: 'Planhub Chip 1' },
    { label: 'Planhub Chip 2' },
    { label: 'Planhub Chip 3', disabled: true }
  ];

  public smallBlueChipConfigs: Array<IPlanhubChipConfig> = [
    { label: 'Planhub Chip 1' },
    { label: 'Planhub Chip 2' },
    { label: 'Planhub Chip 3' }
  ];

  public smallWhiteChipConfigs: Array<IPlanhubChipConfig> = [
    { label: 'Planhub Chip 1' },
    { label: 'Planhub Chip 2' },
    { label: 'Planhub Chip 3' }
  ];

  get buttonTypeEnum(): typeof ButtonTypeEnum {
    return ButtonTypeEnum;
  }

  get layoutEnum(): typeof LayoutEnum {
    return LayoutEnum;
  }

  get chipTypeEnum(): typeof ChipTypeEnum {
    return ChipTypeEnum;
  }

  get chipColorEnum(): typeof ChipColorEnum {
    return ChipColorEnum;
  }

  public buttonClicked(): void {
    console.log('Button Clicked!');
  }

  public selectionChange($event: any): void {
    console.log('Selection Changed!');
    console.log($event);
  }

  public addSmallBlueChip(chipLabel: string, input: PlanhubInputComponent): void {
    this.smallBlueChipConfigs.push({label: chipLabel});
    // @ts-ignore
    input.formControl.setValue('');
  }

  public addSmallWhiteChip(chipLabel: string, input: PlanhubInputComponent): void {
    this.smallWhiteChipConfigs.push({label: chipLabel});
    // @ts-ignore
    input.formControl.setValue('');
  }
}
