import * as Dialog from "@ariakit/react";

export const DeleteDialog = ({ handleDelete, productName, isDeleting }) => {
  const dialog = Dialog.useDialogStore();

  return (
    <>
      <Dialog.Button onClick={dialog.show} className="dailog-button">
        Delete Product
      </Dialog.Button>
      <Dialog.Dialog
        // open={open}
        // onClose={}
        store={dialog}
        className="dialog"
      >
        {isDeleting ? (
          <div className="dialog-loading">
            <Dialog.Heading>Deleting Product...</Dialog.Heading>
            <p>You will be redirected once complete.</p>
          </div>
        ) : (
          <>
            <Dialog.DialogHeading className="dialog-heading">
              Delete this product?
            </Dialog.DialogHeading>
            <p className="dialog-heading">
              Are you sure you want to delete {productName}? This action cannot
              be undone.
            </p>
            <div>
              <button onClick={handleDelete} className="delete-confirm-button">
                Yes, delete product.
              </button>

              <Dialog.DialogDismiss className="dialog-button">
                Cancel
              </Dialog.DialogDismiss>
            </div>
          </>
        )}
      </Dialog.Dialog>
    </>
  );
};

export default DeleteDialog;
