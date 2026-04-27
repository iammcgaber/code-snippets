//Remove NewYorker subscription blocker
javascript:(function(){let el = document.getElementById("failsafe-clickthrough");el.parentNode.removeChild(el);})();

//Remove NewYorker Subscription Alternate
javascript:(function(){let el = document.getElementsByClassName("paywall-registration-gate-container")[0];el.parentNode.removeChild(el);})();

// Remove New Yorker Compaign
javascript:(function(){let el = document.getElementById("bx-campaign-1398600");el.parentNode.removeChild(el);el = document.getElementsByClassName("paywall-registration-gate")[0];el.parentNode.removeChild(el);})();