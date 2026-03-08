<!-- ---
title: "News"
layout: textlay
excerpt: "VIS2KNOW Lab SKKU."
sitemap: false
permalink: /allnews.html
---

# News

{% for article in site.data.news %}
<p>{{ article.date }} <br> {{ article.headline | markdownify}}</p>
{% endfor %} -->

---
title: "News"
layout: default
permalink: /allnews/
---

<div id="allnews" class="col-sm-12">
<h1>News</h1>

{% for article in site.data.news %}
  <div style="margin-bottom: 16px;">
    <div style="font-weight: 600;">{{ article.date }}</div>
    <div>{{ article.headline }}</div>
  </div>
{% endfor %}

</div>


