---
id: zqeLESoIxdFC
slugFR: site-portfolio
slugEN: portfolio-website
titleFR: Projet Web : Site UnOeilsurleCode
titleEN: Web project : UnOeilsurleCode Website
excerptFR: Dans cet article, je détaille mon premier vrai projet : ce site. Et j'explique son évolution et ce que ça m'a apporté.
excerptEN: In this article, I detail my first real project : this website. I explain its evolution and the experience I gained. 
date: 2026-07-05
tagsFR: [projet, dev, web]
tagsEN: [project, dev, web]
time: 10 min
image: /images/articles/zqeLESoIxdFC/cover.webp
---

## Contexte

Dans le cadre de ma reconversion, il était vivement recommandé de faire son propre site portfolio.<br>
Comme je suis passé par une période autodidacte après la fin de ma carrière de métrologue, j'ai pu faire ma reconversion sans aucune réelle difficulté. C'est pourquoi j'ai voulu faire ce site et gagner en expérience sur des aspects qu'il n'est pas possible de voir en si peu de temps. Car oui, 1 an ça passe très vite.<br>
J'envisageais également de me mettre à mon compte dans l'éventualité où je n'aurais pas trouvé d'emploi à l'issue de ma reconversion.

Comme indiqué en introduction du site vitrine, je ne voulais pas mettre mon nom et prénom comme nom de domaine pour ce site.<br>
Je voulais contribuer à mon petit niveau, à l'édifice qu'est Internet en posant quelques lignes de code sur un espace mémoire accessible à tous.<br>
Le principal but n'étant pas de démontrer mes compétences ou de me vendre à des entreprises, mais d'être dans le partage, car c'est grâce à ça que je me suis forgé !

Le but secondaire, basé sur la partie blog, sera démontré dans le prochain article ;)


## Première version

J'ai tout d'abord commencé une ébauche en PHP à partir du **micro-framework Slim**.<br>
Oui, oui, en **PHP**, vous avez bien lu !

Je ne suis pas du tout pour les débats du genre :<br>
"tabulation vs espace",<br>
"PHP vs JavaScript",<br>
"langage typé vs langage non typé"...<br>
Je pars du principe que s'il y a besoin de faire quelque chose, il suffit de le faire avec ce qui est maîtrisé, plutôt que de se torturer pour trouver la techno la plus optimisée aujourd'hui, mais qui ne le sera plus demain...

<!-- IMAGE:image1|Première version du site Un Oeil sur le Code -->


### Choix de la stack

Alors pour commencer je ne suis pas graphiste ou designer. Oui, bon ça va, je sais très bien que vous l'aviez remarqué... De toute façon je ne comptais pas devenir expert front-end.<br>
En réalité je n'envisageais pas vraiment d'évoluer dans le web, et ça ne devait être qu'une roue de secours pour moi.<br>
Mon but était uniquement d'obtenir rapidement un diplôme reconnu qui me permettrait de me faire embaucher, car le CPF ne me permet pas de faire une école d'ingé ou un Master.

Pour l'ébauche de ce site, je suis donc resté sur PHP pour le back-end et HTML/CSS/Bootstrap pour le front-end.<br>
Puis j'ai attendu environ 1 an, l'obtention du titre et d'un emploi, avant de poursuivre le site et de le mettre réellement en production.<br>
Pour se faire, j'ai eu besoin de l'héberger. Je me suis donc tourné vers **OVH**.<br>
J'ai loué un **VPS (Virtual Private Server)** ainsi qu'un **nom de domaine** qui n'a pas changé depuis tout ce temps.


## Mise en place du serveur

J'ai découvert la gestion d'un serveur en autodidacte.<br>
Il a fallu que j'apprenne à le sécuriser, et pour cela j'ai dû rapidement monter en compétences en apprenant à mettre en place une authentification via certificat, imposer des restrictions (connexions root ou par mot de passe interdites etc), et à changer le port de connexion.<br>

C'est d'ailleurs impressionnant le nombre d'attaques qu'un serveur subit aussitôt qu'il est accessible en ligne !<br>

J'ai également appris à configurer un pare-feu (ufw), un framework de prévention contre les intrusions (fail2ban), et à gérer le backup du serveur par des scripts perso exécutés via le plannificateur de tâches du système, ainsi que la récupération de ces sauvegardes depuis mon réseau local.<br>


### Gestion du site

Une fois le serveur configuré et sécurisé j'ai pu mettre en place mon site.<br>
Pour ça il a été nécessaire de maîtriser Apache pour rendre accessible le site sans donner trop de permissions aux utilisateurs, et pour cette partie rien de plus intéressant que de découvrir le **hacking** et la **sécurité informatique** via des plateformes comme [Root Me](https://www.root-me.org/)<br>

Au fil des années, ce site a évolué.<br>
Bon OK, "ça fonctionnait sur mon PC" mais la plupart des versions n'ont jamais été déployées...

La seconde version a été développée sous Symfony avec Twig pour le front-end. Je ne l'ai pas publié car je la trouvais beaucoup trop lourde pour un simple site vitrine.<br>
L'utilisation de Symfony n'apportait rien du tout.<br>
J'ai tout de même testé certaines choses dont une que j'ai rajoutée au site déployé sur le VPS. Il s'agissait d'un **web service** [SOAP](https://fr.wikipedia.org/wiki/SOAP) pour compter le nombre de visite du site et me permettre de récupérer l'information depuis mon smartphone. À ce moment-là, je ne connaissais pas **Symfony API Platform** qui utilise l'architecture [REST](https://fr.wikipedia.org/wiki/Representational_state_transfer), mais je voulais comprendre et tester les web services, toujours dans un souci de pouvoir trouver un emploi dans le web si jamais j'avais du mal à poursuivre dans le secteur des systèmes embarqués.<br>
Cet outil s'interfaçait avec un système de surveillance de l'état du serveur.

<!-- IMAGE:image2|Extrait du fichier JSON avec le nombre de visite du site -->

Une autre version consistait à refaire intégralement le site en... **Python** via **Django** ! Pourquoi ? Parce que... pourquoi pas en fait !<br>
Initialement, j'étais en train de commencer à gérer un serveur domotique, j'utilisais beaucoup de Python et je souhaitais naïvement combiner l'aspect admin du site avec la gestion de ma domotique.<br>
Je ne suis jamais allé jusqu'à la mise en production du site par manque de temps et parce que l'aspect DevOps me semblait plus complexe qu'un site PHP. D'autre part, il n'était pas fini.<br>
Avec cette version j'ai quand même pu mettre en place l'animation du logo que ma femme m'avait dessiné, et qui est toujours présent.

<!-- IMAGE:image3|Site Python -->


#### Auto-entrepreneur

En 2023, pour le besoin de l'association [FilMédia Créations](https://www.facebook.com/FilmediaCreations/) je me suis déclaré en tant qu'**auto-entrepreneur**. L'idée était de commencer une activité qui me permettrait ~~d'arrondir les fins de mois~~ d'officialiser professionnellement mes compétences dans le dev web et d'en acquérir de nouvelles en réalisant des sites pro.<br>
J'avais réalisé une maquette, et bien qu'elle tournait et avait plus de visites que mon site perso, le projet est resté sans suite de l'association car ça nécessitait d'avoir un community manager.<br>

J'ai quand même réalisé que déployer plusieurs sites sur le même serveur Apache n'étaient pas très pratique.<br>
Et c'est comme ça qu'on entre dans le domaine de l'**architecture IT**.

#### Début de la mise en place du DevBlog

Pour l'avant dernière version du site (à date de rédaction de cet article), je suis revenu sur Symfony, que j'avais décidé de vraiment exploiter avec la mise en place de ce blog.

De vous à moi, j'avoue que c'est uniquement parce que j'ai raté la hype des Skyblogs... Non, je plaisante bien sûr !

En tout cas cette fois j'utilisais Symfony API Platform pour récupérer les articles. Le back-end du site me permettait de gérer les articles mais également l'expérience et les projets affichés sur le site vitrine.<br>
Le site était décomposé en 3 parties :
* front-end en **Vue.js**
* back-end en **PHP Symfony**
* API via **Symfony API Platform**


### Gestion du service mail

Lors de la préparation du VPS, je me suis également essayé à la gestion d'un mail perso.<br>
En toute honnêté, je pense l'avoir fait trop tôt et avec mon niveau de compétence à ce moment-là c'était la chose la plus ardue que j'ai eu à faire avec ce serveur.<br>
Et malheureusement, je ne pense pas que ce soit une expérience qui aura été très bénéfique. Dans le sens où, à cause des géants de l'informatique notamment Google et son Gmail ou Microsoft et son Outlook, il est assez difficile de sécuriser, de lutter contre les courriers indésirables et de maintenir un mail perso pour ne pas finir dans les spams.

Avec cette expérience, on se rend vraiment compte que l'ensemble de nos mails est stocké en clair sur les serveurs des géants.<br>
C'est à dire que la totalité des mails peuvent être lu sans aucun problème. C'est d'ailleurs comme ça que les outils des GAMAM (Google, Amazon, Meta, Apple, Microsoft) sont développés aussi efficacement...<br>
Vous savez ? Les assistants qui vous font des suggestions à la moindre interaction sociale, ou qui détectent les rendez-vous dans vos mails et vous proposent de les enregistrer dans votre agenda préféré.<br>
Si on veut un minimum de sécurité, et de monopole de nos données et bien il faut passer par d'autres solutions. Sauf que ces autres solutions sont généralement payantes, et qui irait payer alors que Google et Microsoft le propose gratuitement ?<br>Je ne juge pas, je fais pareil... puis de toute façon si on veut chiffrer un mail il faut que ça fonctionne dans les 2 sens, donc cela ne sert à rien d'envoyer un mail chiffré qui sera déchiffré et stocké en clair sur un Gmail ou un Outlook.

Bref !<br>
En 2024-2025, j'ai découvert et mis en place **Docker**. Et avec j'ai pu remplacer ma gestion des mails par [Mailu](https://mailu.io/2024.06/), ce qui m'a permis d'optimiser et simplifier un peu cette gestion.

Et par la force des choses, et surtout l'arrêt du VPS, je me suis tourné vers le service de gestion de mail d'OVH basé sur [Zimbra](https://docs.ovhcloud.com/fr/guides/web-cloud/email-and-collaborative-solutions/zimbra/landing-page-zimbra).


### Gestion du service de statistiques des sites

Le web service SOAP que j'ai précédemment évoqué, et qui me permettait de remonter le nombre de visite par jour a été remplacé par [Matomo](https://fr.matomo.org/), l'alternative éthique à Google Analytics.<br>
Sur le même principe que Google Analytics, dès que le site observé et ouvert depuis un navigateur, un message sera envoyé au site Matomo que vous avez déployé.<br>
Ces informations peuvent être anonymisées et il y a d'autres avantages comme la gestion du fameux bandeaux **RGPD** pour la protection des données.<br>
Vous savez ? le truc que personne ne lit mais qui prend trop de place à l'ouverture du site donc qu'on s'empresse de répondre au premier bouton disponible, tout en évitant de payer un abonnement, parce que bon faut pas abuser non plus !!!<br>
Oui oui, littéralement on vous dit que vos informations sont revendues et qu'on se fait de l'argent sur votre dos ! Mais bon, pas grave ils peuvent bien se faire de l'argent comme ils veulent tant que ce n'est pas le notre ;)


## Version actuelle

Sur cette année 2026, j'ai souhaité modifier ma formule du VPS chez OVH pour passer sur un serveur plus "performant".<br>
Je parle ici de :<br>
* un VPS monocoeur avec 2Go de RAM, et 20Go de stockage à 70€/an sur lequel je faisais tourner Docker avec mon site, Matomo, Mailu, et Nginx pour gérer l'architecture réseau,
* à un VPS 4 coeurs avec 8Go de RAM et 75Go de stockage SSD et certainement une bande passante plus élevée.

Cependant un problème de gestion côté OVH, qu'ils n'ont pas su résoudre, m'a contraint d'arrêter d'utiliser leurs services après 8 ans sans aucun problème.<br>
Il a donc fallu que je trouve une autre solution pour gérer mon site.

J'ai vraiment apprécié gérer mon serveur de A à Z, apprendre et découvrir de nouvelle chose et découvrir la puissance de la conteneurisation.<br>
J'aurai pu me relancer dedans, mais ça demandait de repasser du temps sur quelque chose que j'avais déjà fait, et dans le domaine de l'informatique personne n'aime refaire la même chose encore et encore...

Je reprendrais peut-être sur mes vieux jours.

En attendant, j'ai dû chercher une autre solution, et j'ai appris qu'il était possible de faire tourner un site directement depuis Github, via **Github Pages**.

<!-- IMAGE:image4|Page d'accueil du site Un Oeil sur le Code en 2026 -->

Alors certes je n'ai plus la possibilité de gérer Docker, et d'héberger d'autres sites ou web services. En plus c'est Github, donc Copilot et Microsoft, mais concrètement je ne traite aucune donnée car ce n'est qu'un site vitrine accompagné d'un modeste blog avec lequel j'espère pouvoir vous apprendre 2 ou 3 trucs :)<br>


<!-- lang:en -->

*This article is not yet available in English. Please check back soon.*