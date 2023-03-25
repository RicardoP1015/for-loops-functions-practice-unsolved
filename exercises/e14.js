
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  const accountsWithWrongBalance = [];

  for (let i = 0; i < array.length; i++) {
    const deposits = array[i].deposits || [];
    const withdrawals = array[i].withdrawals || [];

    let depositSum = 0;
    for (let j = 0; j < deposits.length; j++) {
      depositSum += deposits[j];
    }

    let withdrawalSum = 0;
    for (let k = 0; k < withdrawals.length; k++) {
      withdrawalSum += withdrawals[k];
    }

    const calculatedBalance = depositSum - withdrawalSum;

    if (Math.abs(calculatedBalance - array[i].balance) > 0.001) {
      accountsWithWrongBalance.push(array[i]);
    }
  }

  return accountsWithWrongBalance;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
