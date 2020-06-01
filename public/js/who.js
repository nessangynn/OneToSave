var container = document.createElement("div");
container.innerHTML = `<h4 class=\"feed-item-title\">
<a href=\"https://www.who.int/news-room/detail/29-05-2020-international-community-rallies-to-support-open-research-and-science-to-fight-covid-19" target=\"_blank\">
International community rallies to support open research and science to fight COVID-19<\/a>
<\/h4>
<p class=\"feed-item-desc\">Thirty countries and multiple international partners and institutions have signed up to support the COVID-19 Technology Access Pool (C-TAP) an initiative aimed at 
making vaccines, tests, treatments and other health technologies to fight COVID-19 accessible to all.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.who.int/news-room/detail/22-05-2020-at-least-80-million-children-under-one-at-risk-of-diseases-such-as-diphtheria-measles-and-polio-as-covid-19-disrupts-routine-vaccination-efforts-warn-gavi-who-and-unicef" target=\"_blank\">
At least 80 million children under one at risk of diseases such as diphtheria, measles and polio as COVID-19 disrupts routine vaccination efforts<\/a>
<\/h4>
<p class=\"feed-item-desc\">COVID 19 is disrupting life-saving immunization services around the world, putting millions of children – 
in rich and poor countries alike – at risk of diseases like diphtheria, measles and polio. This stark warning comes from the World 
Health Organization, UNICEF and Gavi, the Vaccine Alliance ahead of the Global Vaccine Summit on 4 June, at which world leaders 
will come together to help maintain immunization programmes and mitigate the impact of the pandemic in lower-income countries.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.who.int/news-room/detail/27-05-2020-the-world-health-organization-un-foundation-and-illumination-partner-on-health-messages" target=\"_blank\">
The World Health Organization, UN Foundation and Illumination partner on health messages<\/a>
<\/h4>
<p class=\"feed-item-desc\">WHO, the United Nations Foundation and Illumination have partnered to launch a Public Service Announcement (PSA) that reinforces safe and healthy 
practices during these challenging times, featuring Illumination’s globally beloved Gru and the Minions.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.who.int/news-room/detail/27-05-2020-who-foundation-established-to-support-critical-global-health-needs" target=\"_blank\">
WHO Foundation Established to Support Critical Global Health Needs<\/a>
<\/h4>
<p class=\"feed-item-desc\">The World Health Organization (WHO) welcomes the creation of the WHO Foundation, an independent grant-making entity, that will support the 
Organization’s efforts to address the most pressing global health challenges.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.who.int/news-room/detail/21-05-2020-who-and-unhcr-join-forces-to-improve-health-services-for-refugees-displaced-and-stateless-people" target=\"_blank\">
WHO and UNHCR join forces to improve health services for refugees, displaced and stateless people<\/a>
<\/h4>
<p class=\"feed-item-desc\">The World Health Organization (WHO) and UNHCR, the UN Refugee Agency today signed a new agreement to strengthen and advance 
public health services for the millions of forcibly displaced people around the world.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.who.int/news-room/feature-stories/detail/a-new-who-study-reveals-covid-19-makes-a-soft-landing-in-africa-but-cases-are-still-rising" target=\"_blank\">
A new WHO study reveals COVID-19 makes a soft landing in Africa but cases are still rising<\/a>
<\/h4>
<p class=\"feed-item-desc\">Despite the relatively lower number of COVID-19 cases in Africa compared to Europe, the pandemic remains a 
major threat to the continent’s health systems. A new study by WHO predicts that if containment measures fail, even with a 
lower number of cases requiring hospitalization than elsewhere, the medical capacity in much of Africa would be overwhelmed. <\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.who.int/csr/don/28-May-2020-ebola-drc/en/" target=\"_blank\">
Ebola virus disease – Democratic Republic of the Congo<\/a>
<\/h4>
<p class=\"feed-item-desc\">From 20 to 26 May 2020, no new cases of Ebola virus disease 
(EVD) have been reported from the Democratic Republic of the Congo (Figure 1).<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.who.int/news-room/feature-stories/detail/facing-mental-health-fallout-from-the-coronavirus-pandemic" target=\"_blank\">
Facing mental health fallout from the coronavirus pandemic<\/a>
<\/h4>
<p class=\"feed-item-desc\">“Mental health repercussions regarding what is happening during this pandemic for people, today and beyond, will really be a problem 
in general,” Dr Petsanis says. “In general, stress behaviour for many, many people brings a lot of problems.”<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.who.int/news-room/feature-stories/detail/who-recommends-considering-cultural-factors-to-develop-more-inclusive-health-systems" target=\"_blank\">
WHO recommends considering cultural factors to develop more inclusive health systems<\/a>
<\/h4>
<p class=\"feed-item-desc\">World Day for Cultural Diversity for Dialogue and Development on May 21st marked an opportunity to remember 
the importance of cultural competency and intercultural dialogue within health-care systems. 
This becomes especially crucial during a worldwide pandemic like COVID-19 when migrants and refugees risk being marginalized.<\/p>

<h4 class=\"feed-item-title\">
<a href=\"https://www.who.int/news-room/detail/08-04-2020-who-timeline---covid-19" target=\"_blank\">
WHO Timeline - COVID-19<\/a>
<\/h4>
<p class=\"feed-item-desc\">This statement is updated on an ongoing basis, in response to evolving events and common media queries.<\/p>`

var nodes = [].slice.call(container.childNodes);
var script = document.scripts[document.scripts.length - 1];
var parent = script.parentNode;
while(nodes.length > 0) parent.insertBefore(nodes.shift(), script);
parent.removeChild(script);