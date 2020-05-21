var container = document.createElement("div");
container.innerHTML = `<h4 class=\"feed-item-title\">
<a href=\"https://www.directrelief.org/2020/05/what-an-aid-group-learned-from-fighting-covid-19/" target=\"_blank\">Learning and Adapting as the Covid-19 Pandemic Evolves<\/a>
<\/h4>
<p class=\"feed-item-desc\">Delivering supplies, distributing aid, and tracking data have taught Direct Relief a lot about responding to a pandemic.
Since late January, Direct Relief has delivered more than 10,000 shipments across all 50 U.S. states and 62 countries. These deliveries have included a wide range of protective gear,
oxygen concentrators and ventilators, and more than 40 million doses of medication.
</p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.directrelief.org/2020/05/as-covid-19-cases-rise-critical-medical-supplies-reach-hospitals-in-lebanon/" target=\"_blank\">As Covid-19 Cases Rise, Critical Medical Supplies Reach Hospitals in Lebanon<\/a>
<\/h4>
<p class=\"feed-item-desc\">
Anera recently distributed a shipment of critical medical supplies, donated by Direct Relief, to Rafik Hariri 
University Hospital in Lebanon. The shipment included oxygen concentrators, N95 respirator masks, gloves, shoe covers, surgical caps, soap bars, and face shields.
This shipment is helping to ease the huge need for medical supplies in Lebanon.
</p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.directrelief.org/emergency/coronavirus-outbreak/" target=\"_blank\">Active Emergencies<\/a>
<p class=\"feed-item-desc\">Direct Relief working in overdrive to get protective gear and critical care medications to as many health workers as possible, as quickly as possible, with emergency deliveries 
leaving daily for medical facilities across the U.S.
</p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.directrelief.org/2020/05/as-states-reopen-covid-19-death-rate-expected-to-climb/" target=\"_blank\">Monitoring Population Movement as States Reopen<\/a>
<p class=\"feed-item-desc\">
With about half of states lifting their shelter-in-place orders and reopening to varying degrees, many Americans are stepping out of quarantine for the first time in weeks. 
Restaurants are serving in-house diners, storefronts are opening their doors to shoppers, and people are going back to their workplaces, creating scenes of pre-pandemic life 
and stirring hopes for a return to ‘normal.’ 
But without a vaccine, the threat of transmitting Covid-19 still remains, despite policy cues otherwise.
</p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.directrelief.org/2020/04/how-vulnerable-is-your-community-in-this-pandemic/" target=\"_blank\">How Vulnerable Is Your Community In This Pandemic?<\/a>
<p class=\"feed-item-desc\">
More than 57,000 people in the United States have been killed by Covid-19. And though the disease does not discriminate, society is rife with underlying conditions 
that have led some groups to be more at-risk than others.
</p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.directrelief.org/2020/05/mental-health-providers-are-caring-for-frontline-workers-sometimes-in-just-one-phone-call/" target=\"_blank\">Mental Health Providers are Caring for Frontline Workers, Sometimes in Just One Phone Call<\/a>
<p class=\"feed-item-desc\">
Doctors were saying that they felt like quitting. They were afraid of infecting their families. They couldn’t sleep at night. Were other group members starting to make wills?
In short, said Dr. Masood, a psychiatrist, there was a marked increase in posts indicating mental distress. “It was starting to become a very obvious issue,” she said.
</p>`
var nodes = [].slice.call(container.childNodes);
var script = document.scripts[document.scripts.length - 1];
var parent = script.parentNode;
while(nodes.length > 0) parent.insertBefore(nodes.shift(), script);
parent.removeChild(script);