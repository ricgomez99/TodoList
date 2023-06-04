import { toast } from "react-toastify";

export const displayMessage = (message: string) => {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
  });
};
