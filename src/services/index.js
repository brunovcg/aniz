import axios from "axios";

export const endpoints = {
  baseurl: "http://localhost:8001/api/",
  user: {
    login: "login/",
    signup: "signup/",
    getData: (id)=>`users/${id}/`,
  },
  category: {
    patch: (id)=>`categories/${id}/`,
    delete: (id)=>`categories/${id}/`,
    post: "categories/",
  },
  item:{
    patch: (id)=>`items/${id}/`,
    delete: (id)=>`items/${id}/`,
    post: "items/",
  },
  massiveLoad:{
    post: "massive-load/"
  }
} 


export const api = () => {
  
  return axios.create({ baseURL: endpoints.baseurl});
};

