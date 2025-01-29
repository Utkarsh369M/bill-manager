const initialState = {
    bills: [],
    filteredCategory: "All",
  };
  
  const billReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_BILL":
        return { ...state, bills: [...state.bills, action.payload] };
  
      case "EDIT_BILL":
        return {
          ...state,
          bills: state.bills.map((bill) =>
            bill.id === action.payload.id ? action.payload : bill
          ),
        };
  
      case "DELETE_BILL":
        return { ...state, bills: state.bills.filter((bill) => bill.id !== action.payload) };
  
      case "FILTER_BILLS":
        return { ...state, filteredCategory: action.payload };
  
      default:
        return state;
    }
  };
  
  export default billReducer;
  