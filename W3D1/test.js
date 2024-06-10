"use strict";

describe("Bank", function () {

    let bank;

    beforeEach(function () {
        bank = new Bank();
    });

    it("Get Account", function () {
        const account = new Account(1001);
        assert.equal(1001, account.getNumber());
    })

    it("Get Balalnce", function () {
        const account = new Account(1001);
        assert.equal(10.0, account.getBalance());
    })

    it("Saving Account Balance", function () {
        let savingAcct = new SavingsAccount(1001, 2.5);
        savingAcct.addInterest();
        console.log(savingAcct.toString());
        assert.equal(10.25, savingAcct.getBalance());
    })

    it("Add Account to the bank", function () {
        assert.equal(1, bank.addAccount());
    })

    it("Add Saving Account number to the bank accounts", function () {
        assert.equal(2, bank.addSavingsAccount(2.5));
    })

    it("Add checking Account number to the bank accounts", function () {
        assert.equal(3, bank.addCheckingAccount(15));
    })

    it("Close account", function () {
        const accountNumber1 = bank.addAccount();
        bank.addSavingsAccount(2.5);
        bank.addCheckingAccount(5);

        assert.equal(3, bank.closeAccount(accountNumber1).length);
    })

    it("Report of all account", function () {
        bank.addAccount();
        bank.addSavingsAccount(2);
        bank.addCheckingAccount(500);
        const report = bank.accountReport();
        console.log(report)

        assert.equal(report, 'Account 7: balance 10\n' +
            'Saving Account 8: balance 10, Rate: 2\n' +
            'Checking Account 9: balance 10, Withdraw: 500');
    })

    it('Process end of month for all accounts', function () {
        bank.addSavingsAccount(2);
        bank.accounts[0].deposit(100);
        bank.addCheckingAccount(500);
        const endOfMonthReport = bank.endOfMonth();
        console.log(endOfMonthReport)

        assert.equal(endOfMonthReport, 'Interest added  Saving Account 10 : balance: 112.2 interest: 2\nWarning, low balance 11: balance: 10 overdraft limit: 500');
    });

})
