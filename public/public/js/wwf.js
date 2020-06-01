var container = document.createElement("div");
container.innerHTML = `<h4 class=\"feed-item-title\">
<a href=\"https://www.worldwildlife.org/magazine/issues/summer-2020/articles/how-wwf-is-helping-threatened-species-adapt-to-climate-change" target=\"_blank\">
How WWF is helping threatened species adapt to climate change<\/a>
<\/h4>
<p class=\"feed-item-desc\">Climate change-related threats to biodiversity are not decades, or even years, away. 
In recent assessments, the International Union for Conservation of Nature (IUCN) emphasized the alarming impact of climate change 
on species right now: shorttail nurse sharks are threatened due to coral reef bleaching and degradation; imperial parrot habitats 
are being destroyed by increasingly violent hurricanes; and many Australian freshwater fish species are in danger from extreme droughts caused by declining rainfall.<\/p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.worldwildlife.org/blogs/sustainability-works/posts/mexican-renewable-energy-market-forges-ahead-despite-political-uncertainty" target=\"_blank\">
Mexican Renewable Energy Market Forges Ahead Despite Political Uncertainty<\/a>
<\/h4>
<p class=\"feed-item-desc\">Foro Ren mx, the first-ever renewable energy event in Mexico focusing on the role of corporate energy buyers 
in the renewables market was held in Mexico City on February 5, 2020. Over 200 corporate electricity buyers, renewable energy suppliers, and service 
providers took part in a day of lively discussions, focused on the state of market, procurement options, and regulatory outlook.<\/p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.worldwildlife.org/blogs/sustainability-works/posts/unlocking-early-stage-investment-for-climate-innovation-a-model-from-wwf-india" target=\"_blank\">
Unlocking Early-Stage Investment for Climate Innovation: A Model from WWF India<\/a>
<\/h4>
<p class=\"feed-item-desc\">Clean technology innovation is a key opportunity to grow businesses around the world while protecting the 
planet, but entrepreneurs need more than a great idea to create a market-ready, final product and a viable business model. Access to incubation 
support and early stage investment are key ingredients for launching a product out of R&D and towards commercialization at scale. <\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.worldwildlife.org/stories/a-landmark-snow-leopard-collaring-in-nepal" target=\"_blank\">
A landmark snow leopard collaring in Nepal<\/a>
<\/h4>
<p class=\"feed-item-desc\">Known as “ghosts of the mountains” due to their elusive and solitary nature, snow leopards are rarely spotted 
and even less frequently studied within their rugged and harsh habitat. However last November, two snow leopards were captured, 
fitted with satellite-GPS collars, and successfully released back into their rocky homeland in Western Nepal.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.worldwildlife.org/stories/blood-free-honey-how-a-safer-harvesting-program-is-reducing-deadly-human-tiger-conflicts" target=\"_blank\">
Blood-free honey — How a safer harvesting program is reducing deadly human-tiger conflicts<\/a>
<\/h4>
<p class=\"feed-item-desc\">The Sundarbans, the only coastal mangrove tiger habitat in the world, runs from southern Bangladesh into India's West Bengal State. It is a unique ecosystem 
where tigers have become excellent swimmers and can swim from one mangrove island to another in search of territory and prey.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.unicefusa.org/stories/doctor-parents%E2%80%99-questions-about-coronavirus-answered/37118" target=\"_blank\">The Doctor Is In: Parents’ Questions About Coronavirus Answered<\/a>
<\/h4>
<p class=\"feed-item-desc\">Dr. Ronald Kleinman, Chief of the Department of Pediatrics at Massachusetts General Hospital, on everything from the COVID-related inflammatory syndrome affecting 
children to the importance of virtual playdates.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.worldwildlife.org/stories/rosebud-sioux-tribe-will-create-the-largest-native-owned-and-managed-bison-herd-in-north-america" target=\"_blank\">
Rosebud Sioux Tribe will create the largest native-owned and managed bison herd in North America<\/a>
<\/h4>
<p class=\"feed-item-desc\">In the Lakota creation story, beings emerged from the Wind Cave in South Dakota’s Black Hills—some in human form and some in buffalo form. 
There’s no difference between people and buffalo in this worldview.
“We’re Lakota people and that means we’re buffalo people,” said Wizipan Little Elk, the CEO of the Rosebud Economic Development Corporation 
(REDCO), the economic arm of the Rosebud Sioux Tribe. “They’ve always taken care of us and we need to take care of them.”<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.worldwildlife.org/stories/in-the-arctic-places-once-protected-are-now-exposed" target=\"_blank\">
In the Arctic, places once protected are now exposed<\/a>
<\/h4>
<p class=\"feed-item-desc\">A decade after the worst oil spill in US history, the federal government is attempting to revoke broad protections that prevent 
offshore oil and gas development in the Arctic, and the future of these places remains in legal limbo. Additionally, 
longer ice-free periods in northern waters have led to a dramatic increase in commercial shipping, which increases the risk of oil spills.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.worldwildlife.org/pages/how-to-help-the-amazon-right-now-wwf-s-emergency-fund-for-amazon-fires" target=\"_blank\">
WWF's Emergency Fund for Amazon Fires<\/a>
<\/h4>
<p class=\"feed-item-desc\">In August, the Amazon burned at an alarming rate. Home to more indigenous people than anywhere else, 
habitat for 10% of all known species, and critical to the health of everyone on Earth, it was an environmental disaster of global 
proportions.The fires—fueled by an uptick in deforestation and illegal burning combined with dry weather conditions—wreaked
havoc as they cross national borders and jump rivers, consuming the incredible ecosystem as they moved.
We had to act.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.worldwildlife.org/blogs/sustainability-works/posts/a-vision-for-us-climate-policy" target=\"_blank\">
A Vision for US Climate Policy<\/a>
<\/h4>
<p class=\"feed-item-desc\">The United States must achieve net-zero greenhouse gas emissions by no later than 2050, if the world has any 
hope of limiting warming to 1.5 degrees - the level at which the world can likely avoid the most catastrophic impacts of climate change.<\/p>`

var nodes = [].slice.call(container.childNodes);
var script = document.scripts[document.scripts.length - 1];
var parent = script.parentNode;
while(nodes.length > 0) parent.insertBefore(nodes.shift(), script);
parent.removeChild(script);