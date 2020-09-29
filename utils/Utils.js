// Dependencies
import * as _ from "underscore";

import txtFile from "~/config/CPdescarga.txt";

export const getItemByAttr = (list, item) => {
  return _.findWhere(list, item);
};

export const getItemsByString = (list, item) => {
  return _.filter(list, (element) => {
    return element.includes(item);
  });
};

export const searchMunicipalities = (cp) => {
  const postalCodes = txtFile.split("\n");

  return getItemsByString(postalCodes, cp).map((element, index) => {
    const [
      codigoPostal,
      colonia,
      tipoAsentamiento,
      delegacionMunicipio,
      estado,
      ciudad,
    ] = element.split("|");

    return {
      id: index.toString(),
      label: colonia,
      codigoPostal,
      tipoAsentamiento,
      delegacionMunicipio,
      estado,
      ciudad,
    };
  });
};

export const removeItem = (list, item) => {
  const elements = _.where(list, item);

  if (elements && elements.length > 0) {
    let listElements = list;

    elements.forEach((e) => {
      listElements = _.without(listElements, e);
    });
    return listElements;
  }
  return list;
};

export const removeItems = (list, items) => {
  return _.filter(list, (value) => {
    return !items.includes(value.id);
  });
};

export const includesItems = (list, items) => {
  return _.filter(list, (value) => {
    return items.includes(value.id);
  });
};
