//Remove Washington Post subscription blocker
javascript:(function(){Array.from(document.getElementsByClassName("paywall-overlay"))[0].remove();Array.from(document.getElementsByTagName("body"))[0].style="overflow: visible;position: relative;";Array.from(document.getElementsByTagName("html"))[0].style="overflow: visible;"})();