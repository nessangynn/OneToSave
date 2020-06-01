var container = document.createElement("div");
container.innerHTML = `<h4 class=\"feed-item-title\">
<a href=\"https://www.seattletimes.com/seattle-news/health/big-downtown-protests-might-complicate-seattles-coronavirus-recovery/?utm_source=RSS&utm_medium=Referral&utm_campaign=RSS_seattle-news" target=\"_blank\">
Big downtown protests might complicate Seattle’s coronavirus recovery<\/a>
<\/h4>
<p class=\"feed-item-desc\">For many protesters in Seattle over the weekend, the outrage over racial injustices outweighed the risk of contracting COVID-19.<\/p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.seattletimes.com/seattle-news/homeless/major-encampment-removal-in-little-saigon-draws-protesters-during-coronavirus-pandemic/" target=\"_blank\">
Major encampment removal in Little Saigon draws protesters during coronavirus pandemic<\/a>
<\/h4>
<p class=\"feed-item-desc\">A homeless encampment removal Thursday morning in Little Saigon drew roughly 20 protesters to police barricades, as debate flares in Seattle 
over whether the city should break up camps during the coronavirus pandemic.  <\/p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.seattletimes.com/seattle-news/health/uw-medicine-furloughs-1500-staffers-with-more-on-the-table-500-million-shortfall-could-hamper-coronavirus-response/" target=\"_blank\">
UW Medicine furloughs 1,500 staffers, with more on the table; could $500 million shortfall hamper coronavirus response?<\/a>
<\/h4>
<p class=\"feed-item-desc\">UW Medicine has been at the forefront of the battle against COVID-19 locally and globally, with an array of efforts that includes creating widely used outbreak 
models and processing a majority of Washington state’s diagnostic tests.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.seattletimes.com/seattle-news/seattle-protest-updates-on-day-2-of-curfew-the-city-reacts-to-the-death-of-george-floyd/" target=\"_blank\">
Seattle protest updates: On Day 2 of curfew, the city reacts to the death of George Floyd<\/a>
<\/h4>
<p class=\"feed-item-desc\">In the aftermath of protests in Seattle and across the country, questions abounded Sunday for organizers, businesses and public officials over how the meaningful demonstrations
aimed at spotlighting the treatment of Black people by police devolved into scenes of destruction and mayhem.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.seattletimes.com/seattle-news/health/coronavirus-daily-news-updates-may-31-what-to-know-today-about-covid-19-in-the-seattle-area-washington-state-and-the-world/" target=\"_blank\">
Coronavirus daily news updates, May 31: What to know today about COVID-19 in the Seattle area, Washington state, and the world<\/a>
<\/h4>
<p class=\"feed-item-desc\">On Saturday, representatives with the Seattle parks and neighborhoods departments handed out hundreds of single-use use masks to people taking part in the day’s demonstrations. 
Several groups at the protests handed out masks, water and sanitizing wipes to participants.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.seattletimes.com/seattle-news/homeless/for-front-line-homeless-service-workers-coronavirus-brings-a-whole-other-layer-of-trauma/" target=\"_blank\">
Coronavirus brings ‘a whole other layer of trauma’ for workers who serve homeless people<\/a>
<\/h4>
<p class=\"feed-item-desc\">Joy Estill is a listener.
As the office manager at the St. Martin de Porres Shelter on Alaskan Way, she has kept her door open during the coronavirus pandemic to shelter residents who want to 
talk — though now, they wait outside her office to abide by social distancing guidelines.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.seattletimes.com/seattle-news/homeless/coronavirus-pushed-seattle-to-treat-homelessness-differently-will-those-changes-last/" target=\"_blank\">
Coronavirus pushed Seattle to treat homelessness differently. Will those changes last?<\/a>
<\/h4>
<p class=\"feed-item-desc\">Lola Anderson-Najera finally has a door that locks.

After years of weaving in and out homelessness, sleeping “elbow-to-elbow” in shelters and sometimes outside, she’s found a tiny, temporary home. It’s small, but it has a chair to read in, 
an end table to hold her things, and fresh sheets. Above all, she said, there’s a new feeling of security.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.seattletimes.com/seattle-news/homeless/seattle-officials-feud-over-the-future-of-tent-encampments-during-coronavirus-pandemic/" target=\"_blank\">
Seattle officials feud over the future of tent encampments during coronavirus pandemic<\/a>
<\/h4>
<p class=\"feed-item-desc\">An emergency city council bill to restrict homeless encampment removals has generated harsh backlash from Mayor Jenny Durkan’s office and 
neighborhood organizations as tent encampments have grown during the spread of the novel coronavirus.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.seattletimes.com/seattle-news/politics/my-job-has-changed-pressure-mounts-as-seattle-mayor-jenny-durkan-juggles-coronavirus-other-crises/" target=\"_blank\">
Mayor Jenny Durkan in crisis mode as Seattle confrontscoronavirus, homelessness, failing West Seattle Bridge<\/a>
<\/h4>
<p class=\"feed-item-desc\">As Seattle tentatively enters coronavirus recovery mode, Jenny Durkan is scrambling to boost testing capacity, 
drawing sharp criticism for her approach to homelessness, straddling a...<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.seattletimes.com/education-lab/as-washington-considers-reopening-schools-emerging-research-hints-that-closures-help-contain-the-coronavirus/a" target=\"_blank\">
As Washington considers reopening schools, emerging research hints that closures helped contain the coronavirus<\/a>
<\/h4>
<p class=\"feed-item-desc\">As schools in Washington and across the U.S. (remotely) wind down for summer break, many families, teachers and state decision makers 
are hoping for an answer: Did closing school buildings ultimately help curb spread of the novel coronavirus?<\/p>`

var nodes = [].slice.call(container.childNodes);
var script = document.scripts[document.scripts.length - 1];
var parent = script.parentNode;
while(nodes.length > 0) parent.insertBefore(nodes.shift(), script);
parent.removeChild(script);