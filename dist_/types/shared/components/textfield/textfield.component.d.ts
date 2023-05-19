import { EventEmitter } from '../../../stencil-public-runtime';
export declare class TextfieldViviComponent {
  el: HTMLElement;
  label: string;
  placeholder: string;
  maxlength: number;
  textfieldAccess: string;
  error: boolean | null;
  bottomsheetStatus: boolean;
  normal: string;
  filledOut: string;
  divNgClass: string;
  changeValue: EventEmitter<string>;
  value: string;
  disabled: boolean;
  onChange: any;
  onTouched: any;
  input: HTMLInputElement;
  onInput(e: Event): void;
  writeValue(value: string): void;
  get counterLength(): number;
  onFocus(): void;
  onBlur(): void;
  validateStyle(): {
    border: string;
  };
  displayBottomSheet(): void;
  openSheet(): void;
  closeWithStatus(): void;
  closeSheet(e: any): void;
  registerOnTouched(onTouched: any): void;
  write(): void;
  render(): any;
}
