var container = document.createElement("div");
container.innerHTML = `<h4 class=\"feed-item-title\">
<a href=\"https://www.unicef.org/press-releases/covid-19-number-children-living-household-poverty-soar-86-million-end-year" target=\"_blank\">COVID-19: Number of children living in household poverty to soar by up to 86 million by end of year<\/a>
<\/h4>
<p class=\"feed-item-desc\">The economic fallout of the COVID-19 pandemic could push up to 86 million more children into household poverty by the end of 2020, an increase of 15 per cent, 
according to a new analysis released today by Save the Children and UNICEF.<\/p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.unicef.org/press-releases/un-humanitarian-flight-arrives-venezuela-nutrition-water-hygiene-and-sanitation" target=\"_blank\">UN Humanitarian Flight Arrives in Venezuela with Nutrition, Water, Hygiene and Sanitation Supplies<\/a>
<\/h4>
<p class=\"feed-item-desc\">A plane carrying 12 tonnes of humanitarian aid, aimed at providing nutritional support and improving access to 
safe water for thousands of families, has landed in the country to support the United Nations humanitarian response. With this shipment, 
the United Nations has brought more than 100 tons of humanitarian assistance to Venezuela since the beginning of the COVID-19 pandemic, 
thanks to generous funding from the international community.<\/p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.unicef.org/press-releases/unicef-airlifts-essential-supplies-respond-covid-19-yemen-cases-increase" target=\"_blank\">UNICEF airlifts essential supplies to respond to COVID-19 in Yemen as cases increase<\/a>
<\/h4>
<p class=\"feed-item-desc\">In response to the increase in the number of cases of COVID-19 in Yemen, a UNICEF chartered plane landed at Sana’a airport on Saturday 30 May with 
lifesaving supplies to help curb the spread of the disease in the conflict-hit country. The supplies are a range of medical assistance, including Personal Protective Equipment 
(PPE) items such as aprons, boots, face masks and gloves for frontline health workers<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.unicefusa.org/stories/protecting-kids-effects-covid-19-honduras/37338" target=\"_blank\">Protecting Kids From the Effects of COVID-19 in Honduras<\/a>
<\/h4>
<p class=\"feed-item-desc\">UNICEF Honduras Representative Mark Connolly on stomping out misinformation about the novel coronavirus, shielding deported children from stigma and using TV to keep kids learning.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.unicefusa.org/stories/pandemic-puts-polio-fight-pause-stoking-fears-comeback/37327" target=\"_blank\">Pandemic Puts Polio Fight on Pause, Stoking Fears of a Comeback<\/a>
<\/h4>
<p class=\"feed-item-desc\">The global response to COVID-19 has disrupted polio immunization efforts in dozens of countries — putting children at risk and threatening to undermine 
decades of progress against the crippling disease.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.unicefusa.org/stories/doctor-parents%E2%80%99-questions-about-coronavirus-answered/37118" target=\"_blank\">The Doctor Is In: Parents’ Questions About Coronavirus Answered<\/a>
<\/h4>
<p class=\"feed-item-desc\">Dr. Ronald Kleinman, Chief of the Department of Pediatrics at Massachusetts General Hospital, on everything from the COVID-related inflammatory syndrome affecting 
children to the importance of virtual playdates.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.unicefusa.org/stories/how-unicef-supporters-can-help-speed-supplies-front-lines/37211" target=\"_blank\">How UNICEF Supporters Can Help Speed Supplies to the Front Lines<\/a>
<\/h4>
<p class=\"feed-item-desc\">Since the start of the coronavirus pandemic, UNICEF has been working with partners around the clock to get 
masks, gloves and other personal protective equipment (PPE) to families and frontline health workers. With UNICEF USA's newly launched Fast Fund, 
supporters can provide the upfront capital UNICEF needs to expedite production and shorten wait times for these lifesaving items.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.unicefusa.org/press/releases/food-crisis-likely-worsen-middle-east-and-north-africa-covid-19-continues/37344" target=\"_blank\">
Food Crisis Likely To Worsen In The Middle East And North Africa As COVID-19 Continues<\/a>
<\/h4>
<p class=\"feed-item-desc\">“Governments and partners across the Middle East and North Africa Region (MENA) are working around the clock to 
protect communities from the Coronavirus Disease (COVID-19). While these efforts are saving many lives, they are having a 
critical impact on food supply chains and the availability, access and affordability of better varieties of safe and nutritious foods. <\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.unicefusa.org/press/releases/forced-returns-migrants-must-be-suspended-times-covid-19/37316" target=\"_blank\">
Forced Returns Of Migrants Must Be Suspended In Times Of COVID-19<\/a>
<\/h4>
<p class=\"feed-item-desc\">The United Nations Network on Migration is concerned by reports of States in many regions using forced return 
of migrants as a measure in response to COVID-19. The Network calls on States to suspend forced returns during the pandemic, 
in order to protect the health of migrants and communities, and uphold the human rights of all migrants, regardless of status.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.unicefusa.org/press/releases/covid-19-dangers-mount-migrant-children-forcibly-returned-northern-central-america" target=\"_blank\">
Dangers Mount For Migrant Children Forcibly Returned To Northern Central America And Mexico During Pandemic<\/a>
<\/h4>
<p class=\"feed-item-desc\">Since early March, at least 1,000 unaccompanied migrant children have been returned from the United States to 
Mexico and northern Central America – El Salvador, Guatemala and Honduras – despite serious protection risks in their communities 
of origin aggravated by COVID-19, UNICEF reported today.<\/p>`

var nodes = [].slice.call(container.childNodes);
var script = document.scripts[document.scripts.length - 1];
var parent = script.parentNode;
while(nodes.length > 0) parent.insertBefore(nodes.shift(), script);
parent.removeChild(script);