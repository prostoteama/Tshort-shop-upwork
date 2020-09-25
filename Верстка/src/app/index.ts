import 'materialize-css';

const tiles = document.querySelectorAll<HTMLDivElement>('.tile');
document.addEventListener('DOMContentLoaded', (e: Event) => {
  let val = tiles.length % 3;
  val = val ? val : 3;
  console.log(val);
  if (val > 0) {
    console.log(window.innerWidth);
    let last = 1;
    while (val) {
      tiles[tiles.length - last].style.borderBottom = '0';
      val--;
      last++;
    }
  }
});
