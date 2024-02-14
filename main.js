let card_num = document.getElementById("card_num");
let warn_name = document.getElementById("warn_name");
card_num.innerHTML = "0000 0000 0000 0000";
let input_card_num = document.getElementById("input_card_num");
input_card_num.onkeyup = function () {
  // on key up deh ya3ny lma ados 3la zorar ya3ny awl ma arf3 2edy w aseb alzorar hwa hy4l al function
  input_card_num = document.getElementById("input_card_num").value;
  if (document.getElementById("input_card_num").value == "") {
    // le al input fady w y3ny al user ms7 aly feh hrg3o tany le al defualt
    card_num.innerHTML = "0000 0000 0000 0000";
  } else if (!isNaN(input_card_num)) {
    // deh lw al input kolo argam tdy true 8er kda tdy false w ah ana ana 7att ! fe al2wl
    card_num.innerHTML = input_card_num;
  }
};
let input_card_name = document.getElementById("input_card_name");
let card_name = document.getElementById("card_name");
input_card_name.onkeyup = function () {
  input_card_name = document.getElementById("input_card_name").value;
  //kol ma alfunction t4t8l h8er gemt al input_card_name w akhleh = al value of input
  let only_letters = input_card_name.match(/[A-Za-z]/g);
  // dah regular expression betl3 al7rof w al spicial char aly fe al input field w lw ml2a4 7aga fehom ya3ny la2a argam bs hyrg3 null
  if (only_letters != null && only_letters.length == input_card_name.length) {
    // awl check dah 34an lw asln hwa ms7 kol aly fe al input feild fa hyrg3 null
    // tany check b4of lw fe fe al inout field mix 7rof w argam fa al reg exp hyrg3 al 7rof bs fa al length hy5tlf fa kda al user md5l argam
    card_name.innerHTML = input_card_name;
  } else if (input_card_name == "") card_name.innerHTML = "Omar Khaled";
};
let input_MM = document.getElementById("input_MM");
let input_YY = document.getElementById("input_YY");
let month = document.getElementById("MM");
let year = document.getElementById("YY");
function expire_date(e) {
  if (e == "MM") {
    if (input_MM.value == "") month.innerHTML = "00";
    else if (!isNaN(input_MM.value)) month.innerHTML = input_MM.value;
  }
  if (e == "YY") {
    if (input_YY.value == "") year.innerHTML = "00";
    else if (!isNaN(input_YY.value)) year.innerHTML = input_YY.value;
  }
}
let input_CVS = document.getElementById("input_CVS");
let CVS = document.getElementById("CVS");
input_CVS.addEventListener("keyup", () => {
  if (input_CVS.value == "") CVS.innerHTML = "000";
  else if (!isNaN(input_CVS.value)) CVS.innerHTML = input_CVS.value;
});
//
let confirm_btn = document.getElementById("confirm_btn");
confirm_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let check_num = /\d{16}/g;
  let check_MM = /\d{2}/g;
  let check_YY = /\d{2}/g;
  let check_CVS = /\d{3}/g;
  if (
    check_num.test(card_num.innerHTML) &&
    check_MM.test(month.innerHTML) &&
    month.innerHTML != "00" &&
    check_YY.test(year.innerHTML) &&
    year.innerHTML != "00" &&
    check_CVS.test(CVS.innerHTML) &&
    input_CVS.value != "" &&
    input_card_name.value != "Omar Khaled"
  ) {
    document.getElementById("thank_u_page").style.display = "flex";
    document.getElementById("content_page").style.display = "none";
  }
});
document.getElementById("edit_btn").addEventListener("click", () => {
  document.getElementById("thank_u_page").style.display = "none";
  document.getElementById("content_page").style.display = "flex";
});
document.getElementById("Continue_btn").addEventListener("click", () => {
  location.reload(); //hy3ml reload fa al page trg3 le al2wl
});
