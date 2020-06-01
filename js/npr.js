var container = document.createElement("div");
container.innerHTML = `<h4 class=\"feed-item-title\">
<a href=\"https://www.npr.org/2020/05/31/866279321/la-county-under-state-of-emergency-amid-saturdays-george-floyd-protests" target=\"_blank\">
Grief, Outrage Over George Floyd Spreads Further<\/a>
<\/h4>
<p class=\"feed-item-desc\">Police and demonstrators clashed in dozens of cities across the U.S. on Saturday 
during another night of protests in response to the death of George Floyd.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.npr.org/sections/goatsandsoda/2020/05/31/865932474/should-i-get-tested-for-coronavirus-just-for-the-heck-of-it" target=\"_blank\">
Should I Get Tested For Coronavirus Just For The Heck Of It?<\/a>
<\/h4>
<p class=\"feed-item-desc\">Earlier in this pandemic, the shortage of tests for the coronavirus was a major problem in fighting the 
spread of COVID-19. The shortage was such that many hospitals and clinics would test only someone 
who had traveled to a country with an outbreak, had a known exposure to a positive case or showed symptoms of the disease.<\/p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.npr.org/sections/goatsandsoda/2020/03/30/822491838/coronavirus-world-map-tracking-the-spread-of-the-outbreak" target=\"_blank\">Coronavirus World Map: Tracking The Spread Of The Outbreak<\/a>
<\/h4>
<p class=\"feed-item-desc\">Since the new coronavirus was first reported in Wuhan, China, in December, the infectious respiratory disease COVID-19 
has spread rapidly within China and to neighboring countries and beyond.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.npr.org/2020/05/30/866094145/minnesota-to-deploy-record-guard-force-to-contain-unrest-over-death-of-george-fl" target=\"_blank\">
Minnesota To Deploy Record Guard Force To Contain Unrest Over Death Of George Floyd<\/a>
<\/h4>
<p class=\"feed-item-desc\">Faced with a fourth straight night of massive protests over the death of George Floyd, Minnesota on 
Friday deployed its largest law enforcement operation in state history, including more than 700 members of the National Guard.
<\/p>
<h4 class=\"feed-item-title\">
<a href=\"https://www.npr.org/2020/05/30/864477016/as-hero-pay-ends-essential-workers-wonder-what-they-are-worth" target=\"_blank\">
As 'Hero' Pay Ends, Essential Workers Wonder What They Are Worth<\/a>
<\/h4>
<p class=\"feed-item-desc\">The global response to COVID-19 has disrupted polio immunization efforts in dozens of countries — putting children at risk and threatening to undermine 
decades of progress against the crippling disease.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.npr.org/2020/05/31/866390952/former-naacp-head-cornell-brooks-blames-derek-chauvin-for-violence-at-protests" target=\"_blank\">
Former NAACP Head Cornell Brooks Blames Derek Chauvin For Violence At Protests<\/a>
<\/h4>
<p class=\"feed-item-desc\">Protests have erupted across the nation in response to the death of George Floyd, and some of the demonstrations have 
turned violent, leading political leaders and activists to debate over who is responsible.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.npr.org/sections/health-shots/2020/05/30/865413079/what-do-coronavirus-racial-disparities-look-like-state-by-state" target=\"_blank\">
What Do Coronavirus Racial Disparities Look Like State By State?<\/a>
<\/h4>
<p class=\"feed-item-desc\">In April, New Orleans health officials realized their drive-through testing strategy for the coronavirus wasn't 
working. The reason? Census tract data revealed hot spots for the virus were located in predominantly low-income African-American neighborhoods 
where many residents lacked cars.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.npr.org/2020/05/30/865310478/i-find-myself-very-seriously-feeling-hollow-documenting-a-pandemic-experience" target=\"_blank\">
'I Find Myself Very Seriously Feeling Hollow': Documenting A Pandemic Experience<\/a>
<\/h4>
<p class=\"feed-item-desc\">At 85, Margaret Sullivan felt that she had a comfortable life and was being well taken care of in a retirement 
home in Northern Virginia. "Living in a bubble," she said. But then she shared a piece of sad news: "My brother died about two weeks ago of the virus."
He lived a few states away.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.npr.org/2020/05/29/865261916/a-decade-of-watching-black-people-die" target=\"_blank\">
A Decade Of Watching Black People Die<\/a>
<\/h4>
<p class=\"feed-item-desc\">The last few weeks have been filled with devastating news — stories about the police killing black people. At this point, 
these calamities feel familiar — so familiar, in fact, that their details have begun to echo each other.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.npr.org/2020/05/31/866347278/ohio-congresswoman-pepper-sprayed-while-demonstrating-against-death-of-george-fl" target=\"_blank\">
Ohio Congresswoman Pepper Sprayed While Demonstrating Against Death Of George Floyd<\/a>
<\/h4>
<p class=\"feed-item-desc\">Rep. Joyce Beatty, the Ohio Democrat who was pepper-sprayed at a demonstration in Columbus on Saturday, says 
property destruction accompanying protests over the death of George Floyd is a "distraction to the message."<\/p>`

var nodes = [].slice.call(container.childNodes);
var script = document.scripts[document.scripts.length - 1];
var parent = script.parentNode;
while(nodes.length > 0) parent.insertBefore(nodes.shift(), script);
parent.removeChild(script);