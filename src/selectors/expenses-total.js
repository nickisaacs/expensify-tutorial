// import getVisibleExpenses from './expenses';

const getTotalExpense = (expenses) => {
// const getTotalExpense = (expenses,{text,sortBy,startDate,endDate}) =>{
    // const visibleExpenses = getVisibleExpenses(expenses,{text,sortBy,startDate,endDate});
    // return visibleExpenses.reduce((total,expense) => total + expense.amount);
    return expenses
    .map((expense) => expense.amount)
    .reduce((sum,value)=>sum+value,0);
};

export default getTotalExpense;