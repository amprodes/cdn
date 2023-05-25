export declare class ButtonComponent {
  /**
   * The CSS class for the button.
   * @prop {string} classButton - The class name of the button. Defaults to 'primary'.
   */
  classButton: string;
  /**
   * Indicates whether the button is disabled.
   * @prop {boolean} disabled - Set to `true` to disable the button, `false` otherwise. Defaults to `false`.
   */
  disabled: boolean;
  /**
   * The type of the button.
   * @prop {string} buttonType - The type attribute of the button. Defaults to 'button'.
   */
  buttonType: string;
  /**
   * The Y position of the mouse cursor.
   * @state {number} mouseY - The Y position of the mouse cursor.
   */
  mouseY: number;
  /**
   * The X position of the mouse cursor.
   * @state {number} mouseX - The X position of the mouse cursor.
   */
  mouseX: number;
  /**
   * Indicates whether to show the button effect.
   * @state {boolean} showEffect - Set to `true` to show the button effect, `false` otherwise.
   */
  showEffect: boolean;
  /**
   * Sets the position of the button effect based on the mouse event.
   * @param {MouseEvent} e - The mouse event.
   */
  private setPosition;
  render(): any;
}
