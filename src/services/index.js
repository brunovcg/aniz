import axios from "axios";

export const endpoints = {
  baseurl: "https://menu-manager-backend.herokuapp.com/api/",
  user: {
    login: "login/",
    signup: "signup/",
    getData: (id)=>`users/${id}/`,
    patch: (id)=> `users/${id}/`,
    images: (id)=> `users/images/${id}/`
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

//"https://menu-manager-backend.herokuapp.com/api/"

