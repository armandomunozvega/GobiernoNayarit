// Dependencies
import * as _ from "underscore";

// core-components
import {
  WarningMessageTitle,
  WarningMessageContent,
} from "~/components/Modal/WarningMessage";

import {
  InfoMessageTitle,
  InfoMessageContent,
} from "~/components/Modal/QuestionMessage";

export const getItemByAttr = (list, item) => {
  return _.findWhere(list, item);
};

export const getItemsByString = (list, item) => {
  return _.filter(list, (element) => {
    return element.includes(item);
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

export const createWarningMessage = (title, message) => {
  return {
    title: <WarningMessageTitle title={title} />,
    body: <WarningMessageContent message={message} />,
    size: "small",
  };
};

export const createQuestionMessage = (title, message, cancelClick, okClick) => {
  return {
    title: <InfoMessageTitle title={title} />,
    body: <InfoMessageContent message={message} />,
    size: "small",
    footer: [
      {
        color: "info",
        handler: cancelClick,
        label: "Cancelar",
      },
      {
        color: "transparent",
        handler: okClick,
        label: "Aceptar",
      },
    ],
  };
};

export const formatError = (errorObj) => {
  let errorMessage;
  if (!errorObj || !Object.keys(errorObj).length) {
    errorMessage = "Ocurrió un error, intente más tarde";
  }

  if (errorObj && errorObj.data) {
    const { message, error } = errorObj.data;
    errorMessage = message || error;
  }

  return errorMessage;
};
