function showOnly(id) {
  // buttons
  document.getElementById('btn1').classList.remove('btn-primary')
  document.getElementById('btn3').classList.remove('btn-primary')
  document.getElementById('btn2').classList.remove('btn-primary')

  document.getElementById(id).classList.add('btn-primary')
}