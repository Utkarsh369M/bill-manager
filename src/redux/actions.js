export const addBill = (bill) => ({
    type: "ADD_BILL",
    payload: bill,
  });
  
  export const editBill = (bill) => ({
    type: "EDIT_BILL",
    payload: bill,
  });
  
  export const deleteBill = (id) => ({
    type: "DELETE_BILL",
    payload: id,
  });
  
  export const filterBills = (category) => ({
    type: "FILTER_BILLS",
    payload: category,
  });
  