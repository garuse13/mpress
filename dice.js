
function adjustBet(amount) {
  let bet = parseInt(document.getElementById("betAmount").innerText);
  bet = Math.max(0, bet + amount);
  document.getElementById("betAmount").innerText = bet;
}

function rollDice() {
  let balance = parseInt(localStorage.balance || "0");
  let bet = parseInt(document.getElementById("betAmount").innerText);
  if (bet > balance) return alert("잔액 부족!");

  let roll = Math.random() * 100;
  let win = roll < 50;
  let winnings = win ? bet * 2 : 0;

  localStorage.balance = balance - bet + winnings;
  document.getElementById("balance").innerText = localStorage.balance;
  document.getElementById("result").innerText = roll.toFixed(2) + (win ? ` → 승! +₩${winnings}` : " → 패!");
}

document.getElementById("balance").innerText = localStorage.balance || "0";
