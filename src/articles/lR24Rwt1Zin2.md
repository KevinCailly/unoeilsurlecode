---
id: lR24Rwt1Zin2
slugFR: vulgarisation-techniques-analytiques
slugEN: popularization-analytical-techniques
titleFR: Wiki du technicien de laboratoire
titleEN: Laboratory technician's Wiki
excerptFR: Cet article me permet de capitaliser mes connaissances dans les techniques analytiques et de les partager en les vulgarisant.
excerptEN: This article allows me to capitalize on my knowledge in the field of analytical techniques, and to share it by popularizing them.
date: 2026-06-12
tagsFR: [physique-chimie, laboratoire, métrologie, connaissances]
tagsEN: [physical-chemistry, laboratory, metrology, knowledge]
time: 10 min
image: /images/articles/lR24Rwt1Zin2/cover.webp
---

## Contexte

J’ai travaillé dans le domaine des gaz industriels pendant un peu moins de 10 ans.
Certes, ça commence à dater et certaines parties ne sont que des lointains souvenirs, mais le contenu de cet article reprend mes notes, documents et photos accumulés durant cette période, et me permet avant tout de ne pas perdre toutes ces connaissances.

## Comprendre ce qui nous entoure

Un gaz est un ensemble d’atomes ou de molécules très faiblement liés (à l’inverse d’un solide).
L’air est composé de 78 % d’azote, et de 21 % d’oxygène, le pourcent restant contient du dioxyde de carbone, de l’eau et une multitude d’autres éléments.
Dans le milieu industriel, ces éléments sont mélangés dans des bouteilles qui ont été conditionnées (étuvage, tirage au vide, passivation).
Le mélange se fait par pesée ce qui permet de doser précisément les quantités requises.
Il y a cependant des contraintes à prendre en compte. Les gaz réagissent entre eux, mais également avec leur environnement, l’influence de la température et de la pression atmosphérique est importante des masses. De plus, ils peuvent réagir avec les traces d’humidité présentes dans les bouteilles, ou avec la paroi de la bouteille ou du robinet si celle-ci n’est pas bien conditionnée.
Les techniques analytiques sont vraiment intéressantes et si vous lisez cet article c’est que vous êtes suffisamment curieux(se) pour vouloir en savoir plus. Je vais donc les vulgariser un peu.

### Généralité

Il faut savoir que tout est quantifiable. Que ce soit solide, liquide ou gazeux, sur Terre ou à des millions d’années-lumière, il existe de nombreuses propriétés physiques et chimiques qui permettent d’identifier et quantifier la matière.
Le but étant de provoquer une interaction entre la matière et son environnement pour transformer une propriété invisible en un signal mesurable.
On pourrait regrouper les interactions en famille telles que : la lumière, la chimie, et la manipulation de la matière.
Pour les gaz voici quelques techniques analytiques que j’ai catégorisé par rapport à ces familles.

## Les interactions avec un rayonnement

### Infrarouge

Lorsque les molécules d’un gaz sont soumises à un rayonnement infrarouge, les liaisons chimiques entre 2 atomes différents vont vibrer. On parle alors d’absorption du rayonnement.
Par comparaison entre le rayonnement émis et le rayonnement sortant de l’échantillon, on peut quantifier cette absorption, selon la loi de Beer-Lambert : I = I0 e-k(λ) e.x
Avec : I = intensité du rayonnement après absorption ; I0 = intensité initiale du rayonnement
	k(λ) = coefficient d’extinction, fonction de la longueur d’onde de la radiation
	e = épaisseur de la substance à doser
	x = concentration de la substance à doser
On avait des capteurs NDIR (infrarouge non dispersif), le principe étant de cibler une longueur d’onde spécifique à l’élément à analyser, et de mesurer l’absorption infrarouge en sortie de l’échantillon. Généralement la mesure est également faite en parallèle sur pour un gaz de référence.
Cette technique est plutôt simple et rapide, et elle permet de mesurer la quantité des gaz tels que : CO et le CO2
Une autre méthode un peu plus complexe et longue consiste à utiliser un IRTF (infrarouge à transformée de Fourier). L’échantillon va remplir une cuve plaquée or, à travers laquelle un faisceau infrarouge va circuler à différentes longueurs d’ondes. Les différentes valeurs mesurées en sortie vont être converties en un spectre par transformation de Fourier. On peut ainsi mesurer la quantité de différents composants tels que de l’ammoniac NH3 ou des hydrocarbures (CxHy)



J’ai récemment découvert qu’il est possible d’acheter des petits capteurs SPS30 Sensirion, qui reposent sur ce principe, et qui permettent d’agrémenter une station météo avec la quantité de particules fines pour définir la qualité de l’air.
					Photo capteur

### Fluorescence UV

Ce principe est assez similaire au précédent. On parle ici de l’absorption d’un rayonnement ultraviolet. Certaines molécules absorbent se rayonnement puis réémettent une lumière mesurable.
L’intensité de cette lumière est proportionnelle à la quantité du gaz mesuré.
Cette technique est très sensible est permet de mesurer de très petite quantité de gaz.
Avec cette technique, on peut mesurer des gaz tels que le SO2. Le H2S est également mesurable en passant par une étape préalable qui va être l’oxydation. En le soumettant à une forte température, la réaction suivante s’effectue : H2S + O2 → H2O + SO2
Ces gaz sont très corrosifs, et il faut savoir que le sulfure d’hydrogène est incolore, toxique et inflammable, il a une odeur caractéristique d’œuf pourri que l’on peut sentir pour quelques dizaines de ppm, au-delà de cette faible quantité les muqueuses sont attaquées et passé les 500 ppm cela peut entraîner la mort.
Ce gaz est généralement produit par les volcans. D’ailleurs je suis allé visiter une soufrière au Japon, dans la région de Hakone. L’odeur est assez forte, et pour le tourisme il joue dessus avec comme spécialité les œufs noirs cuits dans l’eau soufrée.



En France, le sulfure d’hydrogène est essentiellement industriel. On le retrouve sur le site de Lacq (64) à quelques kilomètres de Pau (ma région natale). Il est d’ailleurs un des composants du THT (Tétrahydrothiophène), produit mélangé aux réseaux de gaz Français pour repérer les fuites à l’odeur. C’est pour cela que lorsque vous traversez Lacq il y a régulièrement des odeurs d’œufs pourris.


## Les transformations chimiques

### Chimiluminescence

Même principe que pour la fluorescence UV pour la partie analytique. On va mesurer la quantité de lumière émise. Mais il s’agit de lumière directement produite par réaction chimique. Pour ce type d’analyse, on va cibler les oxydes d’azote « NOx » (à savoir du monoxyde d’azote NO + du dioxyde d’azote NO2). Si on cherche à mesurer du NO2, une fois chauffé il va se réduire en NO. Le NO mélangé à l’ozone (O3) va générer du NO2 excité et du dioxygène (O2). Très rapidement le NO2 excité va se stabiliser en perdant de l’énergie et donc en émettant de la lumière.
Pour info, les NOx sont majoritairement issus par la combustion de carburant ou par biomasse, mais aussi par les incendies. Dernièrement il y a eu un incendie dans un élevage de volaille au sud du Cher, le surlendemain matin une odeur désagréable se répandait sur le sud de Bourges. En regardant les cartes telles que « https://aqicn.org/map/france/fr/ », il était possible de suivre le nuage de fumée emportée par le vent. Les valeurs telles que les particules lourdes augmentaient, mais également les NO2 et O3 en fonction du jour ou de la nuit. Les pluies acides sont généralement causées par le NO2

### L’électrochimie

Il s’agit ni plus ni moins qu’une pile, composée d’une anode et d’une cathode. On cherche à produire une réaction qui va induire un courant électrique. Par exemple lorsqu’on fait passer de l’oxygène sur une cathode recouverte d’un gel de KOH.

La manipulation physique des molécules

### Chromatographie en phase gazeuse

Cette partie devient techniquement intéressante de par la complexité mécanique et théorique pour séparer et quantifier les composants d’un échantillon.
Le gaz à analyser va être poussé par un gaz vecteur, à travers un réseau de colonnes remplies ou de colonnes capillaires. Par un jeu de vannes, pendant que l’échantillon passe dans une colonne, les autres colonnes sont purgées par passage du gaz vecteur en sens inverse.
Les colonnes vont jouer sur différentes propriétés physiques pour interagir et donc ralentir les différentes molécules de l’échantillon.
Une fois les composants séparés, ils vont être poussés vers un capteur.
Là aussi il en existe plusieurs. Chez Messer nous utilisions des FID (détecteur à ionisation de flamme), des TCD (détecteur de conductivité thermique) et même des DID (détecteur à ionisation par décharge voir photo).


	
### Spectrométrie de masse

L’échantillon va être ionisé, c’est-à-dire que les molécules du gaz vont être chargées électriquement.
Ces ions vont être propulsés à travers un quadripole qui va permettre de les sélectionner pour atteindre un détecteur d’ions Faraday. Ce détecteur va mesurer le courant généré par ces ions. Mais lorsque ce courant est trop faible pour être mesuré, il est possible de propulser les ions vers un multiplicateur d’électrons, ou Channeltron. Lorsque les ions viennent frapper ce détecteur, cela va entraîner une réaction en cascade qui va générer des électrons et donc un courant que l’on pourra mesurer.

<!-- lang:en -->

*This article is not yet available in English. Please check back soon.*