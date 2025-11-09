---
title: "VIS2KNOW Lab - Professor"
layout: professor
excerpt: "VIS2KNOW Lab: Professor"
sitemap: false
permalink: /professor/
---

# Professor

{% assign p = site.data.professor %}

<div class="row">
<div class="col-sm-6 clearfix">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ p.photo }}"
     alt="{{ p.name }} portrait"
     class="media-object img-thumbnail"
     style="width:200px; max-width:100%; margin-right:20px;">
<h4>{{ p.name }}</h4>

<p><em>{{ p.info }}{% if p.email %}<br>Email: <a href="mailto:{{ p.email }}">{{ p.email }}</a>{% endif %}</em></p>


<ul style="overflow: hidden">

{% if p.number_educ == 1 %}
<li>{{ p.education1 }}</li>
{% endif %}

{% if p.number_educ == 2 %}
<li>{{ p.education1 | markdownify }}</li>
<li>{{ p.education2 | markdownify }}</li>
{% endif %}

{% if p.number_educ == 3 %}
<li>{{ p.education1 | markdownify }}</li>
<li>{{ p.education2 | markdownify }}</li>
<li>{{ p.education3 | markdownify }}</li>
{% endif %}

{% if p.number_educ == 4 %}
<li>{{ p.education1 | markdownify }}</li>
<li>{{ p.education2 | markdownify }}</li>
<li>{{ p.education3 | markdownify }}</li>
<li>{{ p.education4 | markdownify }}</li>
{% endif %}

{% if p.number_educ == 5 %}
<li>{{ p.education1 | markdownify }}</li>
<li>{{ p.education2 | markdownify }}</li>
<li>{{ p.education3 | markdownify }}</li>
<li>{{ p.education4 | markdownify }}</li>
<li>{{ p.education5 | markdownify }}</li>
{% endif %}

</ul>
</div>
</div>
