// Dependencies
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

// @material-ui/icons
import Close from "@material-ui/icons/Close";

// core components
import Button from "~/components/CustomButtons/Button";

// actions
import { closeModal } from "~/reducers/modal";

import modalStyle from "~/assets/jss/components/modalStyle";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(modalStyle);

const Modal = () => {
  const { show, content } = useSelector(({ root }) => root.modal);
  const dispatch = useDispatch();
  const classes = useStyles();

  const modalClasses = classNames({
    [classes.modal]: true,
    [classes.modalLarge]: content.size === "large",
    [classes.modalSmall]: content.size === "small",
  });

  return (
    <Dialog
      classes={{
        root: classes.modalRoot,
        paper: modalClasses,
      }}
      open={show}
      TransitionComponent={Transition}
      aria-labelledby="custom-modal-title"
      aria-describedby="custom-modal"
    >
      <DialogTitle
        id="custom-modal-title"
        disableTypography
        className={classes.modalHeader}
      >
        {content.closeButton && (
          <Button
            simple
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={() => dispatch(closeModal())}
          >
            {" "}
            <Close className={classes.modalClose} />
          </Button>
        )}
        {content.title}
      </DialogTitle>
      <DialogContent id="custom-modal-content" className={classes.modalBody}>
        {content.body}
      </DialogContent>
      <DialogActions
        className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
      >
        {content.footer &&
          content.footer.map((actionButton, key) => {
            return (
              <Button
                key={key} // eslint-disable-line react/no-array-index-key
                color={actionButton.color}
                size={content.size === "small" ? "sm" : "medium"}
                onClick={actionButton.handler}
              >
                {actionButton.label}
              </Button>
            );
          })}
        {!content.footer && (
          <Button
            color="primary"
            size={content.size === "small" ? "sm" : "medium"}
            onClick={() => dispatch(closeModal())}
          >
            Aceptar
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
