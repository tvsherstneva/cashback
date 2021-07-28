'use strict'

function calculateCashback(specialCategoryPurchases, otherCategoryPurchases) {
    /*specialCategoryPurchases – траты за месяц в специальных категориях (в рублях)
    specialCategoryPercent – процент кешбэка в специальных категориях (0.03 – это 3%)
    otherCategoryPurchases – траты за месяц в остальных (не специальных) категориях (в рублях)
    otherCategoryPercent – процент кешбэка в остальных (не специальных категориях)
    limit – лимит кешбэка в рублях
    totalCashback – итоговый кешбэк в рублях*/

    const specialCategoryPercent = 0.03;
    const otherCategoryPercent = 0.01;

    const specialCategoryCashback = specialCategoryPurchases * specialCategoryPercent;
    const otherCategoryCashback = otherCategoryPurchases * otherCategoryPercent;
    const totalCashback = specialCategoryCashback + otherCategoryCashback;
    const limit = 10000;

    return {
        specialCategoryCashback,
        otherCategoryCashback,
        totalCashback: totalCashback > limit ? limit : totalCashback,
    };
}

//const cashback = calculateCashback(5000, 10000);
//console.log(cashback);

function handleSubmit(evt) {
    evt.preventDefault();

    const specialAmountInputEl = document.getElementById('special-amount-input');
    const otherAmountInputEl = document.getElementById('other-amount-input');
    const specialAmountErrorEl = document.getElementById('special-amount-error');
    const otherAmountErrorEl = document.getElementById('other-amount-error');
    const specialCashbackEl = document.getElementById('special-cashback');
    const otherCashbackEl = document.getElementById('other-cashback');
    const totalCashbackEl = document.getElementById('total-cashback');

    specialAmountErrorEl.textContent = '';
    otherAmountErrorEl.textContent = '';
    specialCashbackEl.textContent = '';
    otherCashbackEl.textContent = '';
    totalCashbackEl.textContent = '';

    const specialAmount = Number(specialAmountInputEl.value);
    if (Number.isNaN(specialAmount)) {
        specialAmountErrorEl.textContent = ` Неверное значение. Введите число, например 10000`;
        return;
    }
    if (!Number.isFinite(specialAmount)) {//Number.isFinite – если true то это бесконечность(ввод символов без чисел)
        alert(Number.isFinite(specialAmount));
        specialAmountErrorEl.textContent = ` Слишком большое значение. Введите число, например: 10000`;
        return;
    }

    const otherAmount = Number(otherAmountInputEl.value);
    if (Number.isNaN(otherAmount)) {
        otherAmountErrorEl.textContent = ` Неверное значение. Введите число, например 10000`;
        return;
    }
    if (!Number.isFinite(otherAmount)) {
        otherAmountErrorEl.textContent = ` Слишком большое значение. Введите число, например: 10000`;
        return;
    }

    const result = calculateCashback(specialAmount, otherAmount);
    specialCashbackEl.textContent = ` ${result.specialCategoryCashback} руб.`;

    otherCashbackEl.textContent = ` ${result.otherCategoryCashback} руб.`;
    totalCashbackEl.textContent = ` ${result.totalCashback} руб.`;
    ///debugger;
}

const formEl = document.getElementById('cashback-form');
formEl.onsubmit = handleSubmit;



