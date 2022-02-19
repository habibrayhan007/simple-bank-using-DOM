document.getElementById('deposite-button').addEventListener('click', function(){

    //get the amount deposited
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);
    //console.log(depositeAmount);

    //Update Deposite Total
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);
    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;
    
    depositeTotal.innerText = newDepositeTotal;

    //Update Account Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposite input field
    depositeInput.value = '';
});

//Handle Withdraw with event handler
document.getElementById('Withdraw-button').addEventListener('click', function(){
    const WithdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = WithdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    //console.log(newWithdrawAmount);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawtotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawtotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear withdraw input
    WithdrawInput.value = '';

});