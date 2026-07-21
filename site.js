const artifacts = [
  {
    path: "/quarter-pounder/", key: "quarter-pounder", nav: "Quarter Pounder", number: "01", date: "1975–1990",
    title: "Naming a Larger Portion", subtitle: "The Quarter Pounder made size part of the product’s name.",
    image: "https://ids.si.edu/ids/deliveryService?id=NMAH-AHB2010q73246&max=1200",
    alt: "Yellow McDonald’s Quarter Pounder polystyrene clam shell container",
    citation: "McDonald’s Corporation. “McDonald’s Quarter Pounder Clam Shell Container.” 1975–1990. National Museum of American History, Smithsonian Institution.",
    source: "https://americanhistory.si.edu/collections/object/nmah_1200814",
    description: [
      "McDonald’s used this yellow polystyrene container between 1975 and 1990 to hold and advertise the Quarter Pounder with cheese. The package displays the McDonald’s logo and says that the burger contained a quarter pound of beef before cooking.",
      "The Smithsonian explains that the Quarter Pounder was introduced nationally in 1973 for customers who wanted a larger hamburger patty than the standard McDonald’s hamburger."
    ],
    analysis: [
      "What stands out is that the portion measurement became the product’s actual name. Customers did not have to compare the burger to anything else to know it was supposed to be larger. The words “Quarter Pounder” made size the first thing people noticed.",
      "This container connects to Nielsen and Popkin’s research showing that hamburger portions grew during this same general period. The numbers show that portion growth really happened, while the package shows how McDonald’s presented that growth to customers."
    ],
    takeaway: "A larger serving was no longer only an amount of food. It became the feature customers were supposed to notice and remember."
  },
  {
    path: "/big-mac/", key: "big-mac", nav: "Big Mac", number: "02", date: "1975–1990",
    title: "Size as a Product Identity", subtitle: "The Big Mac made a stacked, larger burger instantly recognizable.",
    image: "https://ids.si.edu/ids/deliveryService?id=NMAH-AHB2010q73252&max=1200",
    alt: "Pink McDonald’s Big Mac polystyrene clam shell container",
    citation: "McDonald’s Corporation. “McDonald’s Big Mac Clam Shell Container.” 1975–1990. National Museum of American History, Smithsonian Institution.",
    source: "https://americanhistory.si.edu/collections/object/nmah_1200817",
    description: [
      "This pink polystyrene container held and advertised the Big Mac. The package displays the Big Mac name and McDonald’s logo. The burger used two beef patties and an extra middle bun, giving it the stacked appearance that people still recognize.",
      "The Big Mac was introduced nationally in 1968 and was originally created to compete with a similar sandwich sold by Big Boy."
    ],
    analysis: [
      "The words “Big Mac” made size part of the burger’s identity, just like the Quarter Pounder used its weight as a selling point. Its separate container also helped it feel like a special product instead of a regular hamburger with more food added to it.",
      "Placing these containers beside each other shows that McDonald’s offered more than one larger burger. When customers repeatedly saw different large options with their own names and packaging, bigger meals could begin to feel like normal menu choices."
    ],
    takeaway: "Offering several specially named large burgers helped make bigger meals feel like standard choices."
  },
  {
    path: "/mcdlt/", key: "mcdlt", nav: "McD.L.T.", number: "03", date: "ca. 1980s",
    title: "Packaging Bigger as Better", subtitle: "The McD.L.T. used an oversized package to sell convenience and novelty.",
    image: "https://ids.si.edu/ids/deliveryService?id=NMAH-JN2012-0711&max=1200",
    alt: "White two-part McDonald’s McD.L.T. clam shell container",
    citation: "McDonald’s Corporation. “McDonald’s McD.L.T. Double Clam Shell Container.” ca. 1980s. National Museum of American History, Smithsonian Institution.",
    source: "https://americanhistory.si.edu/collections/object/nmah_1200811",
    description: [
      "McDonald’s created this double polystyrene container for the McD.L.T. One side held the quarter-pound beef patty and bottom bun so they stayed hot. The other side kept the lettuce, tomato, cheese, pickles, sauce, and top bun cold.",
      "The package was much wider than a normal burger box because it separated the hot and cold parts. The Smithsonian notes that the product was later removed and that fast-food chains moved away from polystyrene packaging after environmental controversy."
    ],
    analysis: [
      "The container made the meal feel new and more valuable instead of simply being another hamburger. Its large two-part design turned the way the food was packaged into part of the experience customers were buying.",
      "This artifact shows that companies did more than increase portions. They used size, convenience, and new packaging to make larger products feel special. Marketing choices like these may have helped customers connect getting more food with getting a better deal."
    ],
    takeaway: "Creative packaging helped make a bigger burger seem more valuable and special instead of simply excessive."
  }
];

function header(active) {
  const links = [["home","Home","/"], ...artifacts.map(a => [a.key,a.nav,a.path]), ["works","Works Cited","/works-cited/"]];
  return `<header><div class="top"><div class="shell"><span>English 102 · Archival Exhibit</span><a href="/about/">About this project</a></div></div><nav aria-label="Main navigation"><div class="shell">${links.map(([k,l,h]) => `<a class="${active===k?'active':''}" href="${h}">${l}</a>`).join('')}</div></nav></header>`;
}

function footer() { return `<footer><div class="shell"><span>Mary Slankard · English 102 · July 2026</span><a href="/works-cited/">View all sources →</a></div></footer>`; }

function home() {
  return `${header('home')}<main>
  <section class="hero shell"><div class="hero-copy"><p class="eyebrow">Portion size in America · 1973–2021</p><h1>Bigger Became Normal</h1><div class="rule"></div><p class="subtitle">How Fast-Food Portions Changed American Expectations and Eating Habits</p><p class="hook">A bigger burger once felt new. Over time, larger portions became familiar—and familiar became normal.</p><a class="cta" href="#introduction">Enter the exhibit →</a></div>
  <div class="hero-objects"><p class="tiny">Archival object study</p><div class="lineup">${artifacts.map(a => `<a href="${a.path}"><span>${a.number}</span><img src="${a.image}" alt="${a.alt}"><small>${a.nav}</small></a>`).join('')}</div><p class="object-note">Packaging, portions, and the making of “normal”</p></div></section>
  <section class="intro" id="introduction"><div class="shell intro-grid"><aside><p class="eyebrow">Homepage introduction</p><h2>The Question Behind the Exhibit</h2><small>311 words</small></aside><div class="copy">
  <p>A hamburger, fries, and a drink may seem like a simple meal, but the meaning of a “normal” fast-food order has changed a lot over time. Beginning in the 1970s, restaurants increasingly introduced bigger burgers, larger drinks, and oversized fries. These products were not only sold as more food. Through names, packaging, and advertising, companies presented size as exciting, convenient, and a better value. After decades of seeing these choices, customers could begin to view larger portions as ordinary rather than excessive.</p>
  <p>Research shows that this shift was measurable. Samara Joy Nielsen and Barry M. Popkin found that American portion sizes increased from 1977 to 1998, with fast-food restaurants serving some of the largest portions. Average soft drinks grew from 13.1 to 19.9 ounces, while hamburgers increased from 5.7 to 7.0 ounces. Larger servings can also affect how much people actually consume. In a study by Barbara J. Rolls, Erin L. Morris, and Liane S. Roe, participants ate 30 percent more energy when served the largest portion than when served the smallest, even though they could decide how much to eat.</p>
  <p>The trend did not simply end when McDonald’s discontinued Supersize. Lisa R. Young and Marion Nestle found that between 2002 and 2021, companies made little progress in reducing portions. Some items remained several times larger than their original sizes, and new large options sometimes replaced ones that had been removed. This does not mean fast-food portions alone caused the obesity epidemic. However, routinely being offered more food can increase calorie intake and shape eating habits over time.</p>
  <p>This exhibit looks at McDonald’s containers for the Quarter Pounder, Big Mac, and McD.L.T. as evidence of that change. The artifacts show how larger burgers received their own names, designs, and identities. Together with research on portion growth and consumption, they reveal how the fast-food industry helped turn “bigger” into something familiar, desirable, and eventually normal.</p></div></div></section>
  <section class="question"><div class="shell"><p class="eyebrow">Research question</p><p>How did the growth and marketing of portion sizes in American fast-food restaurants between the 1970s and 2021 influence what customers considered a normal serving size?</p></div></section>
  <section class="explore shell"><p class="eyebrow">Three objects, one change</p><h2>Explore the Artifacts</h2><div class="cards">${artifacts.map(a => `<a class="card" href="${a.path}"><div><span>Object ${a.number}</span><img src="${a.image}" alt="${a.alt}"></div><small>${a.date}</small><h3>${a.title}</h3><b>View artifact →</b></a>`).join('')}</div></section></main>${footer()}`;
}

function artifactPage(a) {
  return `${header(a.key)}<main><section class="page-head"><div class="shell"><p class="eyebrow">Artifact ${a.number} · ${a.date}</p><h1>${a.title}</h1><p>${a.subtitle}</p></div></section><section class="detail shell"><figure><img src="${a.image}" alt="${a.alt}"><figcaption>${a.citation} Image courtesy of the National Museum of American History.</figcaption></figure><article><h2>What is this?</h2>${a.description.map(p=>`<p>${p}</p>`).join('')}<h2>Why it matters</h2>${a.analysis.map(p=>`<p>${p}</p>`).join('')}<blockquote>${a.takeaway}</blockquote><a class="source" href="${a.source}" target="_blank" rel="noreferrer">View the original Smithsonian record ↗</a></article></section></main>${footer()}`;
}

function works() {
  return `${header('works')}<main><section class="page-head"><div class="shell"><p class="eyebrow">Research behind the exhibit</p><h1>Works Cited</h1><p>Peer-reviewed research gives the historical artifacts a larger academic context.</p></div></section><section class="citations shell"><h2>Secondary Sources</h2>
  <p>Nielsen, Samara Joy, and Barry M. Popkin. “Patterns and Trends in Food Portion Sizes, 1977–1998.” <em>JAMA</em>, vol. 289, no. 4, 2003, pp. 450–453. <a href="https://doi.org/10.1001/jama.289.4.450">https://doi.org/10.1001/jama.289.4.450</a></p>
  <p>Rolls, Barbara J., Erin L. Morris, and Liane S. Roe. “Portion Size of Food Affects Energy Intake in Normal-Weight and Overweight Men and Women.” <em>The American Journal of Clinical Nutrition</em>, vol. 76, no. 6, 2002, pp. 1207–1213. <a href="https://doi.org/10.1093/ajcn/76.6.1207">https://doi.org/10.1093/ajcn/76.6.1207</a></p>
  <p>Young, Lisa R., and Marion Nestle. “Portion Sizes of Ultra-Processed Foods in the United States, 2002 to 2021.” <em>American Journal of Public Health</em>, vol. 111, no. 12, 2021, pp. 2223–2226. <a href="https://doi.org/10.2105/AJPH.2021.306513">https://doi.org/10.2105/AJPH.2021.306513</a></p>
  <h2>Primary Sources</h2>${artifacts.map(a=>`<p>${a.citation} <a href="${a.source}">${a.source}</a></p>`).join('')}</section></main>${footer()}`;
}

function about() { return `${header('about')}<main><section class="page-head"><div class="shell"><p class="eyebrow">About this project</p><h1>Why Portion Size?</h1><p>This exhibit asks how bigger portions became expected instead of unusual.</p></div></section><section class="about shell"><div><h2>The focus</h2><p>This project began with research showing that fast-food and packaged-food portions have remained much larger than their original sizes. That research explains what changed, but I became interested in how those changes became so popular in the first place.</p><p>Historical packaging gives another way to answer that question. The Quarter Pounder, Big Mac, and McD.L.T. containers show how McDonald’s gave larger burgers their own names, designs, and identities.</p></div><aside><p class="eyebrow">The exhibit’s message</p><h2>Bigger did not become normal overnight.</h2><p>Customers saw larger portions repeatedly presented as exciting, convenient, and worth the money. Over time, those choices became familiar enough to feel standard.</p></aside></section></main>${footer()}`; }

const route = location.pathname.replace(/\/+$/, '') || '/';
let html = route === '/' ? home() : route === '/works-cited' ? works() : route === '/about' ? about() : null;
if (!html) { const artifact = artifacts.find(a => a.path.replace(/\/+$/, '') === route); html = artifact ? artifactPage(artifact) : home(); }
document.getElementById('app').innerHTML = html;
