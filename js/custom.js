function switchVisible(x) {
            if (x==0) {
              if(document.getElementById('ops-capstone').style.display == 'block') {
                document.getElementById('ops-capstone').style.display = 'none';
              } else {
                document.getElementById('ops-capstone').style.display = 'block';
                document.getElementById('shiba-game').style.display = 'none';
              }
            }
            if (x==1) {
              if(document.getElementById('shiba-game').style.display == 'block') {
                document.getElementById('shiba-game').style.display = 'none';
              } else {
                document.getElementById('ops-capstone').style.display = 'none';
                document.getElementById('shiba-game').style.display = 'block';
              }
            }
}
