//your JS code here. If required.
const changeBtn = document.getElementById('change_button');
    const resetBtn = document.getElementById('reset_button');

    function resetColors() {
      for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).style.backgroundColor = 'transparent';
      }
    }

    changeBtn.addEventListener('click', () => {
      const blockId = document.getElementById('block_id').value;
      const color = document.getElementById('colour_id').value;

      resetColors();

      const target = document.getElementById(blockId);
      if (target) {
        target.style.backgroundColor = color;
      } else {
        alert("Invalid Block ID");
      }
    });

    resetBtn.addEventListener('click', resetColors);