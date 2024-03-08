document.addEventListener('DOMContentLoaded', function() {
  
  const subjectCells = document.querySelectorAll('td');

  subjectCells.forEach(cell => {
      cell.addEventListener('click', function() {
          
          const subjectCode = this.getAttribute('data-subject');

          const subjectInfoDiv = document.getElementById('subject-info-' + subjectCode);

          const computedStyle = getComputedStyle(this);

          
          const boxShadowColor = computedStyle.boxShadow;

          
          const boxShadowColorParts = boxShadowColor.match(/rgba?\((\d+), (\d+), (\d+)/);

          if (boxShadowColorParts) {
              
              const backgroundColor = `rgba(${boxShadowColorParts[1]}, ${boxShadowColorParts[2]}, ${boxShadowColorParts[3]}, 0.8)`;

              
              if (subjectInfoDiv) {
                  if (subjectInfoDiv.style.display === 'block') {
                      subjectInfoDiv.style.display = 'none';
                  } else {
                      
                      const allSubjectInfoDivs = document.querySelectorAll('.subject-info');
                      allSubjectInfoDivs.forEach(infoDiv => {
                          infoDiv.style.display = 'none';
                      });

                      subjectInfoDiv.style.backgroundColor = backgroundColor;
                      subjectInfoDiv.style.display = 'block';
                  }
              } else {
                  console.error('Subject info div not found for ' + subjectCode);
              }
          } else {
              console.error('Unable to extract box shadow color');
          }
      });
  });
});
