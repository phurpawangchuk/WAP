"use strict";

class SavingsAccount extends Account {

    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    setInterest(interest) {
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    addInterest() {
        const interestAmount = (this._balance * this._interest) / 100;
        this.deposit(interestAmount);
    }

    toString() {
        return "Saving Account " + this._number + ": balance " + this._balance + ", Rate: " + this._interest;
    }

    endOfMonth() {
        this.addInterest();
        return `Interest added  Saving Account ${this._number} : balance: ${this._balance} interest: ${this._interest}`;
    }
}