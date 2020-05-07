var container = document.createElement("div");
container.innerHTML = `<br><h4 class=\"feed-item-title\">
<a href=\"https://www.redcross.org/about-us.html" target=\"_blank\">About the Red Cross<\/a>
<p class=\"feed-item-desc\">Each day, thousands of people – people just like you – provide compassionate care to those in need. Our network of generous donors,
volunteers and employees share a mission of preventing and relieving suffering, here at home and around the world.<\/p>
<\/h4>
<br>
<br>
<h4 class=\"feed-item-title\">
<a href=\"https://www.redcross.org/about-us/our-work/disaster-relief.html" target=\"_blank\">Disaster Relief<\/a>
<\/h4>
<p class=\"feed-item-desc\">Red Cross volunteers and staff work to deliver vital services – from providing relief and 
support to those in crisis, to helping you be prepared to respond in emergencies.<\/p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.redcross.org/about-us/who-we-are/mission-and-values.html" target=\"_blank\">Mission and Values<\/a>
<p class=\"feed-item-desc\">The American Red Cross prevents and alleviates human suffering in the face of emergencies
by mobilizing the power of volunteers and the generosity of donors.​ The American Red Cross is part of the world's largest 
volunteer network found in nearly 200 countries.<\/p>`

var nodes = [].slice.call(container.childNodes);
var script = document.scripts[document.scripts.length - 1];
var parent = script.parentNode;
while(nodes.length > 0) parent.insertBefore(nodes.shift(), script);
parent.removeChild(script);

