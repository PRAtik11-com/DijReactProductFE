import axios from "axios";
import { setCards, setdetails, setError, setinfo, setLoading, setProducts } from "../actiontypefile/actiontype";


export function fetchdata() {
  return (dispatch) => {
    dispatch(setLoading());  // Dispatch loading state
    axios.get("https://dijreactproductbe.onrender.com/carouselData")
      .then((response) => {
        dispatch(setProducts(response.data));  // Dispatch products once data is fetched
        console.log(response.data);
      })
      .catch((error) => {
        dispatch(setError(error.message));  // Dispatch error if something goes wrong
      });
  };
}

  export function cardsdata() {
    return (dispatch) => {
      dispatch(setLoading());  // Dispatch loading state
      axios.get("https://dijreactproductbe.onrender.com/cards")
        .then((response) => {
          dispatch(setCards(response.data));  // Dispatch cards once data is fetched
          console.log(response.data);
        })
        .catch((error) => {
          dispatch(setError(error.message));  // Dispatch error if something goes wrong
        });
    };
  }

  export function Fetchdata(dispatch) {
    dispatch(setLoading())
    axios.get("https://dijreactproductbe.onrender.com/navItems")
      .then((response) => {
        dispatch(setdetails(response.data));
        console.log(response.data)
        
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  }

  export function fetchinfo(dispatch) {
    dispatch(setLoading())
    axios.get("https://dijreactproductbe.onrender.com/info")
      .then((response) => {
        dispatch(setinfo(response.data));
        console.log(response.data)
        
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  }

  export function FetchData(dispatch) {
    dispatch(setLoading())
    axios.get("https://dijreactproductbe.onrender.com/products")
      .then((response) => {
        dispatch(setProducts(response.data));
        console.log(response.data)
        
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
  }