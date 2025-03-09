import { userFailure, 
        userStart, 
        loginSuccess, 
        userSuccess, 
        updateUserSuccess, 
        deleteUserSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../apiRequest";
import { deleteProductFailure, deleteProductStart, deleteProductSuccess, 
         getProductFailure, 
         getProductStart, 
         getProductSuccess,
         updateProductStart,
         updateProductSuccess,
         updateProductFailure,
         addProductStart,
         addProductSuccess,
         addProductFailure,
        } from "./productRedux";


export const login = async (dispatch,user) => {
    dispatch(userStart());
    try {
        const res = await publicRequest.post('/auth/login',user);
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(userFailure())
    }
}

export const userList = async (dispatch) => {
  dispatch(userStart());
    try {
        const res = await userRequest.get('/users/');
        dispatch(userSuccess(res.data))
    } catch (error) {
        dispatch(userFailure())
    }
}

export const updateUser = async ({dispatch, newUser, userId}) => {
  dispatch(userStart());
  try {
      const res = await userRequest.put(`/users/${userId}`, newUser);
      dispatch(updateUserSuccess(res.data))
      console.log(res.data);
  } catch (error) {
      dispatch(userFailure())
  }
}

export const deleteUser = async ({dispatch, userId}) => {
  dispatch(userStart());
  try {
      const res = await userRequest.delete(`/users/${userId}`);
      dispatch(deleteUserSuccess(res.data))
      console.log(res.data);
  } catch (error) {
      dispatch(userFailure())
  }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get('/products');
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailure())
    }
}

export const deleteProducts = async (id,dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        dispatch(deleteProductFailure())
    }
}

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
      const res = await userRequest.put(`/products/${id}`)
      dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
      dispatch(updateProductFailure());
    }
  };
export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await userRequest.post(`/products`, product);
      dispatch(addProductSuccess(res.data));
    } catch (err) {
      dispatch(addProductFailure());
    }
  };