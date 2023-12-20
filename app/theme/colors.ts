// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#F2F4F7",
  neutral200: "#E4E7EC",
  neutral300: "#D0D5DD",
  neutral400: "#98A2B3",
  neutral500: "#667085",
  neutral600: "#475467",
  neutral700: "#344054",
  neutral800: "#1D2939",
  neutral900: "#101828",

  primary100: "#FCF7C4",
  primary200: "#FBF29D",
  primary300: "#F9ED76",
  primary400: "#F7E858",
  primary500: "#F5E33A",
  primary600: "#F5D337",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#D1E9FF",
  accent200: "#B2DDFF",
  accent300: "#84CAFF",
  accent400: "#53B1FD",
  accent500: "#2E90FA",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",



} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
  /**
   * Button
   * 
   */
  primaryButton: palette.primary600,
}
