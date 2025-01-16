import ky from "ky";

//Creating an API Instance
// api: This is the expoted instance of ky configured with specific options. It can be reused across the application for making
export const api = ky.create({
  prefixUrl: process.env.API_BASE_URL, //TGIS PREAPENDS A BASE URL to every request made with this API instance
  timeout: 60000, //Set the maximum time (in miliseconds) a request can take before beign aborted
  retry: 0,
});
