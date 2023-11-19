import { toast } from "react-toastify";

export const successToast = (text: string, options: object) => toast.success(text, {...options});

export const failedToast = (text: string, options: object) => toast.error(text, {...options});