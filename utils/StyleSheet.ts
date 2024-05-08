'use strict';

// Interface definition for Styles
interface Style {
  [key: string]: any;
}

// Creates a style object
export const create = (styles: Style): Style => styles;

// Like StyleSheet.compose, but concatenates shared keys' values into arrays.
export const compose = (style1: Style | undefined, style2: Style | undefined): any => {
  const res: Style = { ...style1 };
  if (!style1) {
    return style2 || {};
  }
  if (!style2) {
    return style1;
  }
  Object.entries(style2).forEach(([k, v]) => {
    const resV = res[k];
    if (resV === undefined) {
      res[k] = v;
    } else if (Array.isArray(resV) && Array.isArray(v)) {
      res[k] = resV.concat(v);
    } else if (Array.isArray(resV)) {
      res[k] = resV.concat([v]);
    } else if (Array.isArray(v)) {
      res[k] = [resV].concat(v);
    } else {
      res[k] = [resV, v];
    }
  });
  return res;
};

// Utility function to check if the style value is valid
const isValidStyleValue = (value: any): boolean =>
  value === null ||
  value === undefined ||
  (value !== '' && ['string', 'number'].includes(typeof value));

// Applies width specific styles by filtering and selecting based on minWidth
export const applyWidth = (style: Style | undefined, width: number, styleKeys?: string[]): Style => {
  const res: Style = {};
  if (!style) {
    return {};
  }
  Object.entries(style).forEach(([k, v]) => {
    if (Array.isArray(styleKeys) && !styleKeys.includes(k)) {
      return;
    }
    let resV: any;
    if (Array.isArray(v)) {
      let maxMinWidth = 0;
      v.forEach((innerV: any) => {
        const minWidth = innerV?.minWidth ?? 0;
        const value = innerV?.value ?? innerV;
        if (isValidStyleValue(value) && minWidth <= width && minWidth >= maxMinWidth) {
          resV = value;
          maxMinWidth = minWidth;
        }
      });
    } else {
      const minWidth = v?.minWidth ?? 0;
      const value = v?.value ?? v;
      if (isValidStyleValue(value) && minWidth <= width) {
        resV = value;
      }
    }
    if (resV !== undefined) {
      res[k] = resV;
    }
  });
  return res;
};
