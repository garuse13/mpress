
function adjustBet(amount) {
  let bet = parseInt(document.getElementById("betAmount").innerText);
  bet = Math.max(0, bet + amount);
  document.getElementById("betAmount").innerText = bet;
}

function playPlinko() {
  let balance = parseInt(localStorage.balance || "0");
  let bet = parseInt(document.getElementById("betAmount").innerText);
  if (bet > balance) return alert("잔액 부족!");

  let multipliers = [0, 0.2, 0.5, 1, 2, 4, 8];
  let result = multipliers[Math.floor(Math.random() * multipliers.length)];
  let winnings = Math.floor(bet * result);

  localStorage.balance = balance - bet + winnings;
  document.getElementById("balance").innerText = localStorage.balance;
  document.getElementById("result").innerText = `${result}x -> +₩${winnings}`;
}

document.getElementById("balance").innerText = localStorage.balance || "0";
