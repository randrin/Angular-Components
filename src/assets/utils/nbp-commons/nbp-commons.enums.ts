/**
 * Enum per la definizione del colore dei componenti della libreria
 * PRIMARY - Green
 * SECONDARY - White
 * THIRD - Blue
 * DEFAULT - Grey
 * OUTLINE - Background transparent
 * LEFT - Background + Float left
 * RIGHT - Background + Float right
 */
export enum NbpStyle {
  INFO = "INFO",
  INFOHOVER = "INFOHOVER",
  SUCCESS = "SUCCESS",
  SUCCESSHOVER = "SUCCESSHOVER",
  PRIMARY = "PRIMARY",
  PRIMARYHOVER = "PRIMARYHOVER",
  DANGER = "DANGER",
  DANGERHOVER = "DANGERHOVER",
  TOMATO = "TOMATO",
  TOMATOHOVER = "TOMATOHOVER",
  WHITE = "WHITE",
  WHITE_SMOKE = "WHITE_SMOKE",
  WARM_GRAY_20 = "WARM_GRAY_20",
  NIGHT_RIDER = "NIGHT_RIDER",
  SLIVER = "SLIVER",
  BLACK = "BLACK",
  SECONDARY = "SECONDARY",
  WARNING = "WARNING",
  WARNINGHOVER = "WARNINGHOVER",
  EGYPTIAN_BLUE = "EGYPTIAN_BLUE",
  FLORAL_WHITE = "FLORAL_WHITE",
  MINT_CREAM = "MINT_CREAM",
  MISTY_ROSE = "MISTY_ROSE",
  DEFAULT = "DEFAULT",
  DEFAULTHOVER = "DEFAULTHOVER",
  FILLED = 6,
  OUTLINE = "OUTLINE",
  ROUNDED = "ROUNDED",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  CENTER = "CENTER",
  JUSTIFIED = 12,
  CHECK = 13,
  CIRCLE = 14,
  BACKGROUNDGRAY = 15,
  BACKGROUNDGREEN = 16,
  BACKGROUNDBLACK = 17,
  PROFILE = 18,
}
/**
 * Enum per la definizione della dimensione dei componenti della libreria
 * LG - Large
 * MD - Medium
 * SM - Small
 */
export enum NbpSize {
  SM = "SM",
  LG = "LG",
  MD = "MD",
}
/**
 * Enum per la definizione della grandezza del font da utilizzare
 */
export enum NbpFontSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

/**
 * Enum per la definizione del tipo del cta da utilizzare
 */
export enum NbpCtaType {
  BUTTON = "BUTTON",
  ARROW = "ARROW",
  DEEP = "DEEP",
}

/**
 * Enum per la definizione del tipo del border da utilizzare
 */
export enum NbpBorder {
  BORDER = "BORDER",
  COLOR = "COLOR",
  LEFT = "LEFT",
  TOP = "TOP",
}

export enum NbpPipe {
  CURRENCY = 0,
  DATE = 1,
  DECIMAL = 2,
  LOWERCASE = "LOWERCASE",
  PERCENT = 4,
  UPPERCASE = "UPPERCASE",
  CONTO = 6,
}
export enum NbpModalPosition {
  TOP = "TOP",
  CENTER = "CENTER",
}
/**
 * Enum per la definizione del canale applicativo
 */
export declare enum NbpChannel {
  ABC = 0,
  INTRANET = 1,
  IB = 2,
}
export declare enum NbpLoadingStatus {
  START = 0,
  STOP = 1,
}
export declare enum NbpClientType {
  PG = 0,
  PF = 1,
}
export enum NbpAlertType {
  GENERIC = "GENERIC",
  POSITIVE = "POSITIVE",
  PROMOTIONAL = "PROMOTIONAL",
  WARNING = "WARNING",
  ERROR = "ERROR",
}
export enum NbpTooltipType {
  CLICK = "click",
  HOVER = "hover",
}
export enum NbpTooltipPosition {
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
  LEFT = "left",
  CENTER = "center",
}
export enum NbpTooltipTheme {
  DARK = "dark",
  LIGHT = "light",
}
export declare enum NbpSwitchType {
  ICON = 0,
  TEXT = 1,
  SMALLTEXT = 2,
  TEXTICON = 3,
  SMALLTEXTICON = 4,
}
export declare enum NbpStepDimension {
  SMALL = 1,
  MEDIUM = 2,
  LARGE = 3,
}
/**
 * Enum dei tipi di Eventi/Messaggi gestiti per NDCE
 */
export declare enum NbpEmbeddingMessageType {
  CJ_READY = 1,
  CJ_STEP = 2,
  ERROR = 3,
  FLOATING_MENU_ON = 4,
  FLOATING_MENU_OFF = 5,
  GOTO = 6,
  LOADING_WINDOW_START = 7,
  LOADING_WINDOW_STOP = 8,
  MODAL_WINDOW_SHOW = 9,
  MODAL_WINDOW_HIDE = 10,
  PAGE_SCROLL = 11,
  PAGE_SIZE = 12,
  SET_CONTRAST_OFF = 13,
  SET_CONTRAST_ON = 14,
  SET_FONT_SIZE = 15,
}
/**
 * enum descrizioni firma
 */
export declare enum SignDescription {
  ALTRO = 0,
  ALTRO_REMOTA = 1,
  CARTACEA = 2,
  DIGITALE_REMOTA = 3,
  GRAFOMETRICA = 4,
}
/**
 * Elenco Sign Type censiti
 */
export declare enum SignType {
  CARTA = 2,
  FEA = 1,
  FDR = 0,
  FEA_RIATTIVAZIONE = 3,
}
export declare enum NbpTabBarType {
  DEFAULT = 0,
  ICON = 1,
  ICON_WITH_BG = 2,
}
export declare enum NbpDividinLineColor {
  DEFAULT = 0,
  GRAY = 1,
}
export declare enum NbpAccordionType {
  DEFAULT = 0,
  OUTER = 1,
  INNER = 2,
}
