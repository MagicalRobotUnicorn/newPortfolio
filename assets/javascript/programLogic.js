// Television with animation in center

// Television with test pattern
// <iframe src="https://giphy.com/embed/Ph0oIVQeuvh0k" width="480" height="355" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/static-color-bars-Ph0oIVQeuvh0k">via GIPHY</a></p>

// Feature Presentation
// <iframe src="https://giphy.com/embed/12fe74oo9zZRFm" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/movie-film-animated-12fe74oo9zZRFm">via GIPHY</a></p>

// VHS 1
// <iframe src="https://giphy.com/embed/NM23QmRnxKuDm" width="480" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/vhs-NM23QmRnxKuDm">via GIPHY</a></p>

// Tunnel
// <iframe src="https://giphy.com/embed/p6ChtGYFqq1X2" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/glitch-vhs-max-capacity-p6ChtGYFqq1X2">via GIPHY</a></p>

// Man
// <iframe src="https://giphy.com/embed/6uxKt0JLcctnW" width="480" height="273" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/glitch-art-gif-6uxKt0JLcctnW">via GIPHY</a></p>

// Aerobics
// <iframe src="https://giphy.com/embed/148KUyaYNoaxuE" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/glitch-vhs-max-capacity-148KUyaYNoaxuE">via GIPHY</a></p>

// Max Headroom
// <iframe src="https://giphy.com/embed/bxp4iK1zetgVq" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/glitch-vhs-max-capacity-bxp4iK1zetgVq">via GIPHY</a></p>
// Table with channels listed (not scrolling)
// Dr Strangelove
// <iframe src="https://giphy.com/embed/7Qysjg6y5CZI4" width="480" height="261" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/off-tube-missile-7Qysjg6y5CZI4">via GIPHY</a></p>
// <iframe src="https://giphy.com/embed/YlG5O6U1XfnShXbkpM" width="480" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/CBSAllAccess-cbs-the-twilight-zone-all-access-YlG5O6U1XfnShXbkpM">via GIPHY</a></p>

{/* <iframe src="https://giphy.com/embed/tlIYzSkrcDlao" width="480" height="375" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/fireball-xl5-colonel-steve-zodiac-world-space-patrol-tlIYzSkrcDlao">via GIPHY</a></p> */}
// On click
// Image on channel changes to static/test image
// Then changes to the image of the assignment
// as the test pattern comes on, the animation of the table comes down

// All other channels ids are given class active, current channel inactive

// Header image -> One of the Glitch fonts float left
// Github and linkedin float right

// Selected Channel
// Description, live website, and github repo

$('.container #channelTable #channelTableBody .channel').on('click', function () {
  var $panel = $(this).closest('.tab-panels');

  $panel.find('.tabs li.active').removeClass('active');
  $(this).addClass('active');

  //figure out which panel to show
  var channelToShow = $(this).attr('rel');

  //hide current panel
  $panel.find('.channel.active').slideUp(300, showNextChannel);

  //show next panel
  function showNextChannel() {
    $(this).removeClass('active');

    $('#' + channelToShow).slideDown(300, function () {
      $(this).addClass('active');
    });
  }
});