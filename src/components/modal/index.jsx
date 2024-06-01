import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import propTypes from "prop-types";

export default function ModalComponent({
  children,
  title,
  open = false,
  handleOpen,
  handleSubmit,
}) {
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{title}</DialogHeader>
        <DialogBody>{children}</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

ModalComponent.propTypes = {
  children: propTypes.node,
  title: propTypes.string,
  open: propTypes.bool,
  handleOpen: propTypes.func,
  handleClose: propTypes.func,
  handleSubmit: propTypes.func,
};
