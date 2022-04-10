import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

const SetupInterceptors = ({ navigate }: any) => {
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error: AxiosError) {
      const { data, status } = error.response!;
      const location = {
        pathname: "/server-error",
        state: { error: data }
      };
      switch (status) {
        case 400:
          if (data.errors) {
            const modelStateErrors: string[] = [];
            for (const key in data.errors) {
              if (data.errors[key]) {
                modelStateErrors.push(data.errors[key]);
              }
            }
            throw modelStateErrors.flat();
          }
          toast.error(data.title);
          break;
        case 401:
          toast.error(data.title);
          break;
        case 500:
          navigate(location);
          break;
        default:
          break;
      }

      return Promise.reject(error.response);
    }
  );
};

export default SetupInterceptors;
