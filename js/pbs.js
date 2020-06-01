var container = document.createElement("div");
container.innerHTML = `<h4 class=\"feed-item-title\">
<a href=\"https://www.pbs.org/newshour/show/after-ferguson-st-louis-prosecutor-tries-to-bring-criminal-justice-reform" target=\"_blank\">
After Ferguson, St. Louis prosecutor tries to bring criminal justice reform<\/a>
<\/h4>
<p class=\"feed-item-desc\">The death of George Floyd in Minneapolis and the unrest that has followed has again put the spotlight on how 
police officers are prosecuted and how the justice system addresses racial bias and inequality. <\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.pbs.org/newshour/show/what-the-1960s-can-teach-us-about-modern-day-protests" target=\"_blank\">
What the 1960s can teach us about modern-day protests<\/a>
<\/h4>
<p class=\"feed-item-desc\">We know from history that both peaceful and violent demonstrations can change the political landscape. <\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.pbs.org/newshour/show/with-protests-minnesota-mayor-sees-both-sides-of-the-dividing-line" target=\"_blank\">
With protests, Minnesota mayor sees both sides of the dividing line<\/a>
<\/h4>
<p class=\"feed-item-desc\">Managing the lawful and peaceful protests that are continuing in Minnesota’s Twin Cities while 
preparing for the possibility of more violence is the job of state and local authorities. <\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.pbs.org/newshour/health/many-states-scrambling-to-update-hurricane-plans-for-virus" target=\"_blank\">
Many states scrambling to update hurricane plans for virus<\/a>
<\/h4>
<p class=\"feed-item-desc\">Officials across the U.S. South are still scrambling to adjust their hurricane plans to the 
coronavirus. The big unknown: Where will people fleeing storms go?<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.pbs.org/newshour/nation/us-cities-assess-protest-damage-await-another-day-of-unrest" target=\"_blank\">
US cities assess protest damage, await another day of unrest<\/a>
<\/h4>
<p class=\"feed-item-desc\">America’s cities boarded up windows, swept up glass and covered graffiti Sunday as the country’s 
most significant night of protests in a half-century promised to spill into another day of unrest fueled by killings of black 
people at the hands of police.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.pbs.org/newshour/world/world-uneasily-watches-us-protests-but-us-racism-seen-before" target=\"_blank\">
World uneasily watches US protests but US racism seen before<\/a>
<\/h4>
<p class=\"feed-item-desc\">Nations around the world have watched in horror at the five days of civil unrest in the United States 
following the death of a black man being detained by police. But they have not been surprised.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.pbs.org/newshour/nation/protesters-converge-on-white-house-for-second-straight-day" target=\"_blank\">
Protesters converge on White House for second straight day<\/a>
<\/h4>
<p class=\"feed-item-desc\">Police fired pepper spray at demonstrators near the White House and the D.C. National Guard was called 
in as pockets of violence and vandalism erupted during a second straight night of protests over the death of George Floyd in 
Minneapolis and President Donald Trump’s response to it.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.pbs.org/newshour/show/trump-responds-to-protests-using-really-interesting-language" target=\"_blank\">
How Trump has responded to outrage over police brutality<\/a>
<\/h4>
<p class=\"feed-item-desc\">Demonstrations turned violent in New York City Friday as crowds clashed with police for a second night in a row. 
In Washington, D.C., police tried to dispel hundreds who had gathered in front of the White House, some who threw bricks and bottles at 
U.S. Secret Service members.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.pbs.org/newshour/nation/us-cities-fear-protests-may-fuel-new-wave-of-virus-outbreaks" target=\"_blank\">
US cities fear protests may fuel new wave of virus outbreaks<\/a>
<\/h4>
<p class=\"feed-item-desc\">The massive protests sweeping across U.S. cities following the police killing of a handcuffed 
black man in Minnesota have elevated fears of a new surge in cases of the coronavirus.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.pbs.org/newshour/economy/us-food-prices-see-historic-jump-and-are-likely-to-stay-high" target=\"_blank\">
US food prices see historic jump and are likely to stay high<\/a>
<\/h4>
<p class=\"feed-item-desc\">As if trips to the grocery store weren’t nerve-wracking enough, U.S. shoppers lately have seen the 
costs of meat, eggs and even potatoes soar as the coronavirus has disrupted processing plants and distribution networks.<\/p>`

var nodes = [].slice.call(container.childNodes);
var script = document.scripts[document.scripts.length - 1];
var parent = script.parentNode;
while(nodes.length > 0) parent.insertBefore(nodes.shift(), script);
parent.removeChild(script);