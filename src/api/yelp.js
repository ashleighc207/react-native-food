import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer METu58Swm0bSq98Z1FUGJg_vQw7XjRmH52S6Rz-UMOJRJvLZS83C8x_QZGszm_ebFspHEKA8M4UU62T0ER_HmkapnP06uz-JqCEyNmlAJoaKaeyihKTVWC8UiReuXXYx"
  }
});
