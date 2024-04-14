// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()

   
  //  INCREAMENT COUNTER 


  const counters = document.querySelectorAll('.counter')

  counters.forEach((counter) =>{
    counter.innerHTML = 0;

    const updateCounter = () => {
      const targetCount = +counter.getAttribute('data-target')
      // console.log(targetCount)

      const startingCount = Number(counter.innerHTML);

      const incr = targetCount/100;

      if (startingCount < targetCount) {
        counter.innerHTML = `${Math.round(startingCount + incr)}`;
        setTimeout(updateCounter, 500)
        
      } else {
        counter.innerHTML = targetCount;
      }
    }

    updateCounter();
  })
  
// 

document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('video');
  video.removeAttribute('autoplay');
  
  // Custom video controls functionality
  var playPauseButton = document.getElementById('play-pause');
  var volumeControl = document.getElementById('volume');
  var fullscreenButton = document.getElementById('fullscreen');
  
  playPauseButton.addEventListener('click', function() {
      if (video.paused) {
          video.play();
          playPauseButton.textContent = 'Pause';
      } else {
          video.pause();
          playPauseButton.textContent = 'Play';
      }
  });
  
  volumeControl.addEventListener('input', function() {
      video.volume = volumeControl.value;
  });
  
  fullscreenButton.addEventListener('click', function() {
      if (video.requestFullscreen) {
          video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { /* Safari */
          video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE11 */
          video.msRequestFullscreen();
      }
  });
});


// Video Play Button 
document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('video');
  video.removeAttribute('autoplay');
  
  var playButton = document.getElementById('play-button');
  playButton.addEventListener('click', function() {
      video.play();
      playButton.style.display = 'none'; // Hide the play button once video starts playing
  });

  
});

