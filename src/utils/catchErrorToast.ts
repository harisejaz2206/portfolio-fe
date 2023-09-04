import { Toast } from "./toast";

export const handleError = (error: any) => {
  Toast.fire({
    icon: "error",
    title: "Something went wrong!",
  });
};
