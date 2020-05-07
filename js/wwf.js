var container = document.createElement("div");
container.innerHTML = `<h4 class=\"feed-item-title\">
<a href=\"https://www.worldwildlife.org/initiatives?_ga=2.191446250.1959163089.1588836970-1646971618.1586726128&_gac=1.127995390.1587539014.CjwKCAjw1v_0BRAkEiwALFkj5r6qgL01i4OvhXGI-0ovsDoBTfaL9rH46sIG6Aej6V_T1WMe7Yww1RoCWA0QAvD_BwE" 
target=\"_blank\">A Future for People and Nature<\/a>
<p class=\"feed-item-desc\">The WWF's mission is to conserve nature and reduce the most pressing threats to the diversity of life on Earth. Together we can challenge the threats to nature, and help ensure 
its ability to provide—for the sake of every living thing, including ourselves.<\/p>
<\/h4>
<h4 class=\"feed-item-title\">
<a href=\"https://www.worldwildlife.org/initiatives/climate" target=\"_blank\">Climate Change<\/a>
<\/h4>
<p class=\"feed-item-desc\">
WWF’s work has evolved from saving species and landscapes to addressing the larger global threats and forces that impact them.
WWF works to educate and influence people into making sustainable choices and decisions, including those who work in business
and make decisions around the use of natural resources, and those who work in government and set policy that impacts nature.<\/p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.worldwildlife.org/initiatives/influencing-policy" target=\"_blank\">Influencing Policy<\/a>
<p class=\"feed-item-desc\">WWF works to secure transformative change at all levels of government in the U.S. and overseas. We partner with and advocate for the U.S. government, 
foreign governments and international institutions to protect wildlife and their habitats.<\/p>`

var nodes = [].slice.call(container.childNodes);
var script = document.scripts[document.scripts.length - 1];
var parent = script.parentNode;
while(nodes.length > 0) parent.insertBefore(nodes.shift(), script);
parent.removeChild(script);