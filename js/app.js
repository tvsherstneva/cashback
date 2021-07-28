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

const cashback = calculateCashback(5000, 10000);
console.log(cashback);



