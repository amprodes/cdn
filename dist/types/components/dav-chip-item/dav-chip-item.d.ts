export declare class DavChipItem {
  /**
   * Indicates whether the chip item is an option for a bubble.
   * @prop {boolean} optionForBubble - Set to `true` if the chip item is an option for a bubble, `false` otherwise. Defaults to `false`.
   */
  optionForBubble: boolean;
  /**
   * Indicates whether the chip item should be wrapped.
   * @prop {boolean} isWraped - Set to `true` if the chip item should be wrapped, `false` otherwise. Defaults to `true`.
   */
  isWraped: boolean;
  /**
   * The text displayed on the chip item.
   * @prop {string} text - The text to be displayed.
   */
  text: string;
  /**
   * Configures the chip item based on the prop values.
   * @returns {string} - The configuration string based on the prop values.
   */
  private config;
  render(): any;
}
