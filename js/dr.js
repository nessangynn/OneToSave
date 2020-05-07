var container = document.createElement("div");
container.innerHTML = `<h4 class=\"feed-item-title\">
<a href=\"https://www.directrelief.org/about/" target=\"_blank\">About Direct Relief<\/a>
<p class=\"feed-item-desc\">Direct Relief is a humanitarian aid organization, active in all 50 states 
and more than 80 countries, with a mission to improve the health and lives of people affected 
by poverty or emergencies – without regard to politics, religion, or ability to pay.<\/p>
<\/h4>
<h4 class=\"feed-item-title\">
<a href=\"https://www.directrelief.org/about/principles/" target=\"_blank\">Guiding Principles<\/a>
<\/h4>
<p class=\"feed-item-desc\">Direct Relief's assistance programs are tailored to the particular 
circumstances and needs of the world's most vulnerable and at-risk populations. <\/p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.directrelief.org/emergency/coronavirus-outbreak/" target=\"_blank\">Active Emergencies<\/a>
<p class=\"feed-item-desc\">Direct Relief is equipping health workers responding to coronavirus (COVID-19) in China, 
the U.S. and around the world with protective gear and critical resources.<\/p>`

var nodes = [].slice.call(container.childNodes);
var script = document.scripts[document.scripts.length - 1];
var parent = script.parentNode;
while(nodes.length > 0) parent.insertBefore(nodes.shift(), script);
parent.removeChild(script);