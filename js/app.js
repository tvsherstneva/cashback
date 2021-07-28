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
    const specialAmountInputEl = document.getElementById("special-amount-input");
    const specialAmount = specialAmountInputEl.value;
    alert(specialAmount);
    alert(Number.isNaN(specialAmount));
    alert(Number.isFinite(specialAmount));
    if(Number.isNaN(specialAmount)){
        //TODO: вывод ошибки
        return;
    }
    if(!Number.isFinite(specialAmount)){//Number.isFinite – если true то это бесконечность(ввод символов без чисел)
        //TODO: вывод ошибки

        return;
    }
    const otherAmountInputEl = document.getElementById("other-amount-input");
    const otherAmount = otherAmountInputEl.value;
    if(Number.isNaN(otherAmount)){
        //TODO: вывод ошибки
        return;
    }
    if(!Number.isFinite(otherAmount)){
        //TODO: вывод ошибки
        return;
    }

    const result = calculateCashback(specialAmount,otherAmount);
    const specialCashbackEl = document.getElementById('special-cashback');
    specialCashbackEl.textContent = ` ${result.specialCategoryCashback} руб.`;

    const otherCashbackEl = document.getElementById('other-cashback');
    otherCashbackEl.textContent = ` ${result.otherCategoryCashback} руб.`;

    const totalCashbackEl = document.getElementById('total-cashback');
    totalCashbackEl.textContent = ` ${result.totalCashback} руб.`;


    ///debugger;
}

const formEl = document.getElementById('cashback-form');
formEl.onsubmit = handleSubmit;



