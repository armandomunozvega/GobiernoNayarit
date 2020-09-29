/*!

=========================================================
* NextJS Material Kit PRO v1.1.0 based on Material Kit PRO - v2.0.2 (Bootstrap 4.0.0 Final Edition) and Material Kit PRO React v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/nextjs-material-kit-pro
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################

const hexToRgb = (input) => {
  input += "";
  input = input.replace("#", "");
  const hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    const first = input[0];
    const second = input[1];
    const last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase(input);
  const first = input[0] + input[1];
  const second = input[2] + input[3];
  const last = input[4] + input[5];
  return `${parseInt(first, 16)}, ${parseInt(second, 16)}, ${parseInt(
    last,
    16
  )}`;
};

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const primaryColor = [
  "#3DB49E",
  "#55C098",
  "#6ECB97",
  "#87D69B",
  "#A1E0A5",
  "#C0E9BB",
  "#21646D",
];
const secondaryColor = ["#fafafa"];
const warningColor = [
  "#ff9800",
  "#ffa726",
  "#fb8c00",
  "#ffa21a",
  "#fcf8e3",
  "#faf2cc",
  "#ffe0b2",
  "#ffb74d",
];
const dangerColor = [
  "#f44336",
  "#ef5350",
  "#e53935",
  "#f55a4e",
  "#f2dede",
  "#ebcccc",
  "ef9a9a",
  "#ef5350",
];
const successColor = [
  "#4caf50",
  "#66bb6a",
  "#43a047",
  "#5cb860",
  "#dff0d8",
  "#d0e9c6",
  "#a5d6a7",
  "#66bb6a",
];
const infoColor = [
  "#00acc1",
  "#26c6da",
  "#00acc1",
  "#00d3ee",
  "#d9edf7",
  "#c4e3f3",
  "#b2ebf2",
  "#4dd0e1",
];

const grayColor = [
  "#999",
  "#3C4858",
  "#eee",
  "#343434",
  "#585858",
  "#232323",
  "#ddd",
  "#6c757d",
  "#333",
  "#212121",
  "#777",
  "#D2D2D2",
  "#AAA",
  "#495057",
  "#e5e5e5",
  "#555",
  "#f9f9f9",
  "#ccc",
  "#444",
  "#f2f2f2",
  "#89229b",
  "#c0c1c2",
  "#9a9a9a",
  "#f5f5f5",
  "#505050",
  "#1f1f1f",
];

const whiteColor = "#FFF";
const blackColor = "#000";

const primaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(" +
    hexToRgb(primaryColor[0]) +
    ", 0.28), 0 4px 20px 0px rgba(" +
    hexToRgb(blackColor) +
    ", 0.12), 0 7px 8px -5px rgba(" +
    hexToRgb(primaryColor[0]) +
    ", 0.2)",
};

const title = {
  color: grayColor[1],
  textDecoration: "none",
  fontWeight: "700",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`,
};

export {
  hexToRgb,
  primaryColor,
  secondaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  grayColor,
  whiteColor,
  blackColor,
  primaryBoxShadow,
  title,
};
