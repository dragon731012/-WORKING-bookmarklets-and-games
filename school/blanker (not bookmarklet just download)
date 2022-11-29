<!DOCTYPE html>
<html lang="en">
<font color="#FFFFFF">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Blanker</title>
</head>
<Body background="https://cdn.pixabay.com/photo/2014/05/27/23/32/matrix-356024_960_720.jpg"> 
<body style="font-family: Helvetica, Verdana, Arial; text-align: center;">
  <h1>Blanker!</h1>
  About:blank cloak any site you want!<br><br>
  <label>
    Site to about:blank cloak:
    <input type="url" onkeydown="if(event.key==='Enter') go()" size="25" autofocus>
  </label>
  <button onclick="go()">Blank!</button>
  <br>
  <img src="https://www.google.com/favicon.ico" alt="Google" style="width:25px;height:25px;" onclick="document.querySelector('input').value = 'https://www.google.com/?igu=1'"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/115px-Firefox_logo%2C_2019.svg.png" alt="firefox" style="width:25px;height:25px;" onclick="document.querySelector('input').value = 'https://replit.com/@cooleddie001/firefox?v=1'"> <img src="https://cdn2.iconfinder.com/data/icons/the-circle-icons/512/Chrome.png" alt="Chrome" style="width:25px;height:25px;" onclick="document.querySelector('input').value = 'https://cold-silly-coriander.glitch.me/'">
  <br>
  <details>
    <summary>What is the benefit to about:blank?</summary>
About:blank cloaks will hide the pages that use it from your history, prevent a teacher from seeing the contents of them in a GoGuardian/Securly portal, and more! This all works because about:blank isn't technically a tab. I don't have all the info but I believe you can look it up.
</details>
    <details>
    <summary>Why does Google say "google.com refused to connect"?</summary>
      Because your URL doesn't have <code>?igu=1</code> added to it.
    </details>
  <details>
    <summary>Why does YouTube say "youtube.com refused to connect"?</summary>
      I know this, you can use Invidious or a proxy for YouTube
    </details>
  <!-- footer css from https://stackoverflow.com/a/59997588 -->
  <a href="https://www.linktr.ee/largomc" style="position: absolute; bottom: 0; left: 0; width: 100%;">By LargoMC</p>
<script src="https://cdn.jsdelivr.net/gh/FogNetwork/ABC/index.js"></script>
  <script>
    function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}
    function go() {
      var page = new ABC({
        "type": "blank",
        "url": validURL(document.querySelector('input').value) ? document.querySelector('input').value : window.location.origin + "/invalid.html"
      })
      page.open()
    }
  </script>
</body>
</font>
</html>
