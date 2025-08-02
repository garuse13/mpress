
let crashTimer;
function startCrash() {
  let balance = parseInt(localStorage.balance || "0");
  let bet = parseInt(document.getElementById("betAmount").innerText);
  if (bet > balance) return alert("잔액 부족!");

  let crashPoint = (Math.random() * 3 + 1).toFixed(2);
  let counter = 1.00;
  document.getElementById("result").innerText = counter.toFixed(2) + "x";

  crashTimer = setInterval(() => {
    counter += 0.05;
    document.getElementById("result").innerText = counter.toFixed(2) + "x";
    if (counter >= crashPoint) {
      clearInterval(crashTimer);
      let winnings = Math.floor(bet * crashPoint);
      localStorage.balance = balance - bet + winnings;
      document.getElementById("balance").innerText = localStorage.balance;
      document.getElementById("result").innerText += ` -> +₩${winnings}`;
    }
  }, 100);
}

document.getElementById("balance").innerText = localStorage.balance || "0";
