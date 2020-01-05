// this import statement tells webpack to include styles.css in the build

function send_to_google_analytics () {
  let tracker_id = INSTALL_OPTIONS.tracker_id;

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', tracker_id, 'auto');
  ga('send', 'pageview');
}

send_to_google_analytics()
