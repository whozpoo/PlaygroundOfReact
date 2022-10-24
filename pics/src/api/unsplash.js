import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID KpEw1x1VtxBDtUIZB_ASXhUPsHenAoYFEaWl3DCPYBQ",
  },
});
