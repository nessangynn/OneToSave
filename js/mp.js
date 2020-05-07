var container = document.createElement("div");
container.innerHTML = `<h4 class=\"feed-item-title\">
<a href=\"https://www.marysplaceseattle.org/about-us-2" target=\"_blank\">Mission and Vision<\/a>
<\/h4>
<p class=\"feed-item-desc\">A community where all families have safety, stability, and housing.
<\/p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.marysplaceseattle.org/about-us" target=\"_blank\">Mary's Place Believes that no one's child should sleep outside<\/a>
<p class=\"feed-item-desc\">Since 1999, Mary’s Place has helped hundreds of women and families move out of homelessness into more stable situations. We provide safe, inclusive shelter and
services that support women, children and families on their journey out of homelessness. <\/p>
<\/h4>
<h4 class=\"feed-item-title\">
<a href=\"https://www.marysplaceseattle.org/programs" target=\"_blank\">Programs<\/a>
<p class=\"feed-item-desc\">Mary's Place provides assessment and treatment for more than 1,000 medical conditions each year. Housing Specialists  work with families 
in shelter to help them develop and meet financial and housing goals and quickly transition into permanent housing.<\/p>`

var nodes = [].slice.call(container.childNodes);
var script = document.scripts[document.scripts.length - 1];
var parent = script.parentNode;
while(nodes.length > 0) parent.insertBefore(nodes.shift(), script);
parent.removeChild(script);