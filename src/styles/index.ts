export enum Colors {
  WHITE100 = '#FFFFFF',
  WHITE200 = '#FBFBFB',
  WHITE300 = '#F5F5F5',
  WHITE400 = '#F6F6F6',
  WHITE900 = '#D6D6D6',
  ACCENT_PRIMARY = '#852CF5',
  ACCENT_SECONDARY = '#252237',
  ACCENT_SUCCESS = '#2AD245',
  ACCENT_WARNING = '#FCBD44',
  ACCENT_DANGER = '#F34F4F',
  TEXT_COMMON = '#121212',
  TEXT_DISABLED = '#898989',
  TEXT_HEADING = '#333333',
  TEXT_SECONDARY = '#666666',
  DISABLED_ICON = '#7A7979',
  SMOOTH_PRIMARY = '#4b326b',
  TRANSPARENT = 'transparent',
}

export enum ColorsDark {
  WHITE100 = '#222025',
  WHITE200 = '#252329',
  WHITE300 = '#2A282F',
  WHITE400 = '#302E36',
  WHITE900 = '#464552',
  ACCENT_PRIMARY = '#8000FF',
  ACCENT_SECONDARY = '#E6E5EF',
  ACCENT_SUCCESS = '#2AD245',
  ACCENT_WARNING = '#FCBD44',
  ACCENT_DANGER = '#F34F4F',
  TEXT_COMMON = '#F1F1F1',
  TEXT_DISABLED = '#FDFDFD',
  TEXT_HEADING = '#898989',
  TEXT_SECONDARY = '#DADADA',
  DISABLED_ICON = '#7A7979',
  SMOOTH_PRIMARY = '#4b326b',
  TEXT_PRIMARY = '#A954FF',
  TRANSPARENT = 'transparent',
}

export interface MainColors {
  WHITE: {
    C100: Colors | ColorsDark;
    C200: Colors | ColorsDark;
    C300: Colors | ColorsDark;
    C400: Colors | ColorsDark;
    C900: Colors | ColorsDark;
  };
  ACCENT: {
    PRIMARY: Colors | ColorsDark;
    SECONDARY: Colors | ColorsDark;
    SUCCESS: Colors | ColorsDark;
    WARNING: Colors | ColorsDark;
    DANGER: Colors | ColorsDark;
  };
  GRADIENT: {
    PRIMARY: string;
  };
  TEXT: {
    COMMON_TEXT: Colors | ColorsDark;
    DISABLED: Colors | ColorsDark;
    HEADING: Colors | ColorsDark;
    SECONDARY: Colors | ColorsDark;
    PRIMARY: Colors | ColorsDark;
  };
  TRANSPARENT: Colors;
}

export const MainColorsLight: MainColors = {
  WHITE: {
    C100: Colors.WHITE100,
    C200: Colors.WHITE200,
    C300: Colors.WHITE300,
    C400: Colors.WHITE400,
    C900: Colors.WHITE900,
  },
  ACCENT: {
    PRIMARY: Colors.ACCENT_PRIMARY,
    SECONDARY: Colors.ACCENT_SECONDARY,
    SUCCESS: Colors.ACCENT_SUCCESS,
    WARNING: Colors.ACCENT_WARNING,
    DANGER: Colors.ACCENT_DANGER,
  },
  GRADIENT: {
    PRIMARY: 'linear-gradient(89.55deg, #252237 0%, #6D30BA 100%)',
  },
  TEXT: {
    COMMON_TEXT: Colors.TEXT_COMMON,
    DISABLED: Colors.TEXT_DISABLED,
    HEADING: Colors.TEXT_HEADING,
    SECONDARY: Colors.TEXT_SECONDARY,
    PRIMARY: Colors.ACCENT_PRIMARY,
  },
  TRANSPARENT: Colors.TRANSPARENT,
};

export const MainColorsDark: MainColors = {
  WHITE: {
    C100: ColorsDark.WHITE100,
    C200: ColorsDark.WHITE200,
    C300: ColorsDark.WHITE300,
    C400: ColorsDark.WHITE400,
    C900: ColorsDark.WHITE900,
  },
  ACCENT: {
    PRIMARY: ColorsDark.ACCENT_PRIMARY,
    SECONDARY: ColorsDark.ACCENT_SECONDARY,
    SUCCESS: ColorsDark.ACCENT_SUCCESS,
    WARNING: ColorsDark.ACCENT_WARNING,
    DANGER: ColorsDark.ACCENT_DANGER,
  },
  GRADIENT: {
    PRIMARY: 'linear-gradient(89.55deg, #252237 0%, #6D30BA 100%)',
  },
  TEXT: {
    COMMON_TEXT: ColorsDark.TEXT_COMMON,
    DISABLED: ColorsDark.TEXT_DISABLED,
    HEADING: ColorsDark.TEXT_HEADING,
    SECONDARY: ColorsDark.TEXT_SECONDARY,
    PRIMARY: ColorsDark.TEXT_PRIMARY,
  },
  TRANSPARENT: Colors.TRANSPARENT,
};

export enum Sizes {
  BORDER_RADIUS = '4px',
  BORDER_RADIUS_SM = '2px',
}
