let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const getChange = (change, cid) => {
  const denominations = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];

  let changeDue = change;
  const changeArr = [];

  for (let i = denominations.length - 1; i >= 0; i--) {
    const denomName = denominations[i][0];
    const denomValue = denominations[i][1];
    let cidValue = cid[i][1];

    let amountFromThisDenom = 0;

    while (changeDue >= denomValue && cidValue >= denomValue) {
      changeDue = parseFloat((changeDue - denomValue).toFixed(2));
      cidValue = parseFloat((cidValue - denomValue).toFixed(2));
      amountFromThisDenom += denomValue;
    }

    if (amountFromThisDenom > 0) {
      changeArr.push([denomName, amountFromThisDenom]);
    }
  }

  if (changeDue > 0) {
    return "INSUFFICIENT_FUNDS";
  }

  return changeArr;
};

const formatChange = (changeArray) => {
  return changeArray
    .map((change) => `<p>${change[0]}: $${change[1].toFixed(2)}</p>`)
    .join("");
};

const purchaseBtn = document.getElementById("purchase-btn");

const changeDue = document.getElementById("change-due");

purchaseBtn.onclick = (e) => {
  e.preventDefault();
  const priceInput = parseFloat(document.getElementById("price").value);

  const cash = parseFloat(document.getElementById("cash").value);

  price = priceInput || price;
  changeDue.textContent = "";
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  if (cash === price) {
    changeDue.textContent = "No change due - customer paid with exact cash";
    return;
  }
  if (cash > price) {
    const change = parseFloat((cash - price).toFixed(2));

    let cidTotal = 0;
    cid.forEach((elem) => {
      cidTotal += elem[1];
    });

    cidTotal = parseFloat(cidTotal.toFixed(2));

    if (cidTotal < change) {
      changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
      return;
    }

    if (cidTotal === change) {
      const changeArray = getChange(change, cid);
      changeDue.innerHTML = `<p>Status: CLOSED</p> ${formatChange(
        changeArray
      )}`;
      return;
    }

    if (cidTotal > change) {
      const changeArray = getChange(change, cid);
      if (changeArray === "INSUFFICIENT_FUNDS") {
        changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
      } else {
        changeDue.innerHTML = `<p>Status: OPEN</p> ${formatChange(
          changeArray
        )}`;
      }
    }
  }
};
