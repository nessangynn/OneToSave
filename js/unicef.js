var container = document.createElement("div");
container.innerHTML = `<h4 class=\"feed-item-title\">
<a href=\"https://www.unicefusa.org/about" target=\"_blank\">Working in the U.S. to Help the World's Children<\/a>
<p class=\"feed-item-desc\">UNICEF works with governments, civic leaders, celebrities, corporations, campus groups, 
churches, teachers and people just like you; anyone willing to help us advocate for the 
survival and well-being of every child.<\/p>
<\/h4>
<br>
<h4 class=\"feed-item-title\">
<a href=\"https://www.unicefusa.org/mission" target=\"_blank\">Putting children first all over the world<\/a>
<\/h4>
<p class=\"feed-item-desc\">The United Nations Children’s Fund (UNICEF) works in more than 190 countries and 
territories to put children first. UNICEF has helped save more children’s lives than any other humanitarian organization by providing
health care and immunizations, safe water and sanitation, nutrition, education, emergency relief and more.<\/p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.unicefusa.org/related-content/Our%20Mission" target=\"_blank\">Stories about Unicef's Mission<\/a>
<p class=\"feed-item-desc\">Unicef's vision is a better world for children everywhere. 
UNICEF USA receives the highest ratings for transparency, accountability and administration. 
Of every dollar spent, 89 cents goes toward helping children. 8.1 cents goes to fundraising costs, 
and 2.9 cents on administration.<\/p>`

var nodes = [].slice.call(container.childNodes);
var script = document.scripts[document.scripts.length - 1];
var parent = script.parentNode;
while(nodes.length > 0) parent.insertBefore(nodes.shift(), script);
parent.removeChild(script);