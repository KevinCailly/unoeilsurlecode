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
time: 15 min
image: /images/articles/lR24Rwt1Zin2/cover.webp
---

## Contexte

J’ai travaillé dans le domaine des gaz industriels pendant un peu moins de 10 ans.<br>
Certes, ça commence à dater et certaines parties ne sont que des lointains souvenirs. Le contenu de cet article reprend mes notes, photos et documents accumulés durant cette période, et il me permet avant tout de ne pas perdre toutes ces connaissances.

## Comprendre ce qui nous entoure

Un gaz est un ensemble d’atomes ou de molécules très faiblement liés (à l’inverse d’un solide).
L’air est composé de 78 % d’azote, et de 21 % d’oxygène, le pourcent restant contient du dioxyde de carbone, de l’eau et une multitude d’autres éléments.
Dans le milieu industriel, ces éléments sont mélangés dans des bouteilles qui ont été conditionnées (étuvage, tirage au vide, passivation).
Le mélange se fait par pesée ce qui permet de doser précisément les quantités requises.<br>
Il y a cependant des contraintes à prendre en compte. Les gaz réagissent entre eux, mais également avec leur environnement, l’influence de la température et de la pression atmosphérique est importante. De plus, ils peuvent réagir avec les traces d’humidité présentes dans les bouteilles, ou avec la paroi de la bouteille ou du robinet si celle-ci n’est pas bien conditionnée.

Les techniques analytiques sont vraiment intéressantes et si vous lisez cet article c’est que vous êtes suffisamment curieu.x.se pour vouloir en savoir plus. Je vais donc les vulgariser également.


### Généralité

Il faut savoir que tout est quantifiable. Que ce soit solide, liquide ou gazeux, sur Terre ou à des millions d’années-lumière, il existe de nombreuses propriétés physiques et chimiques qui permettent d’identifier et quantifier la matière.<br>
Le but étant de provoquer une interaction entre la matière et son environnement pour transformer une propriété physique en un signal mesurable.

Petite précision, dans la plupart des cas, on se sert d'ordinateur pour afficher les valeurs de capteurs. Il existe des capteurs avec un signal électrique de base qui va être altéré par un comportement physique, ou alors c'est le comportement physique qui va créer un courant électrique que le capteur va mesurer.

On pourrait regrouper les interactions physiques en famille telles que : la lumière, la chimie, et la manipulation de la matière.<br>
Pour les gaz voici quelques techniques analytiques que j’ai catégorisé par rapport à ces familles.


## Les interactions avec un rayonnement

### Infrarouge

#### Principe

Lorsque les molécules d’un gaz sont soumises à un rayonnement infrarouge, les liaisons chimiques entre 2 atomes différents vont vibrer.<br>
On parle alors d’absorption du rayonnement.<br>
Dans ce cas, l'analyse se fera par comparaison entre un rayonnement émis et le rayonnement mesuré en sortie de l’échantillon.<br>

C'est un peu plus compliquer à vulgariser, mais cette comparaison permet de quantifier l'absorption, selon la formule suivante : 

	loi de Beer-Lambert :
        I = I0 e-k(λ).e.x
	
	Avec :
    	I0 = intensité initiale du rayonnement
    	I = intensité du rayonnement après absorption
    	k(λ) = coefficient d’extinction, fonction de la longueur d’onde de la radiation
    	e = épaisseur de la substance à doser
   		x = concentration de la substance à doser

#### Capteurs et analyseurs

Nous avions des capteurs NDIR (infrarouge non dispersif), le principe étant de cibler une longueur d’onde dans le domaine de l'infrarouge et spécifique à l’élément à analyser, et de mesurer l’absorption infrarouge en sortie de l’échantillon. La mesure est également faite en parallèle sur un échantillon de référence.<br>
Cette technique est plutôt simple et rapide, et elle permet de mesurer la quantité des gaz tels que : CO et CO<sub>2</sub>

Nous avions également un IRTF (infrarouge à transformée de Fourier), le principe est le même mais un petit peu plus complexe et long à utiliser.<br>
L’échantillon gazeux va remplir une cuve plaquée or, à travers laquelle un faisceau infrarouge va circuler et rebondir de nombreuses fois sur les parois, jusqu'à ressortir de la cuve pour être mesuré. Le faisceau est pulsé à différentes longueurs d’ondes.<br>
Je préfère vous épargner la formule de la transformation de Fourier, bien que ce soit un sujet intéressant, vous risquez de fuir...<br>
Pour faire simple, les différentes valeurs mesurées en sortie donnent un interférogramme qui sera converti en un spectre IR.<br>
On peut ainsi mesurer la quantité de différents composants tels que de l’ammoniac NH<sub>3</sub> ou des hydrocarbures (C<sub>x</sub>H<sub>y</sub>)

<!-- IMAGE:image1|IRTF -->

<!-- IMAGE:image2|Exemple de spectre IR -->


### Fluorescence UV

#### Principe

Ce principe est assez similaire au précédent. On parle ici de l’absorption d’un rayonnement ultraviolet. Certaines molécules absorbent se rayonnement puis réémettent une lumière mesurable.<br>
L’intensité de cette lumière est proportionnelle à la quantité du gaz mesuré.<br>
Cette technique est très sensible est permet de mesurer de très petite quantité de gaz.<br>
Avec cette technique, on peut mesurer des gaz tels que le dioxyde de soudre SO<sub>2</sub>. Le sulfure d'hydrogène H<sub>2</sub>S est également mesurable en passant par une étape préalable qui va être l’oxydation : cela consiste à le soumettre à une forte température et à de l'oxygène (présent dans l'air à 21%), la réaction sera la suivante et formera de l'eau et du dioxyde de soufre :

	H2S + O2 → H2O + SO2

Ces gaz sont très corrosifs, et il faut savoir que le H<sub>2</sub>S est incolore, toxique et inflammable, il a une odeur d’œuf pourri caractéristique du soufre et on peut le sentir pour quelques dizaines de ppm (ppm = partie par million, soit 1mg pour 1kg ou 1mL dans 1000L), au-delà de cette très faible quantité les muqueuses sont attaquées et si on dépasse les 500ppm cela peut entraîner la mort.<br>

#### Anecdotes

* Ce gaz est généralement produit par les volcans. D’ailleurs je suis allé visiter une soufrière au Japon, dans la région de Hakone. L’odeur est assez forte, et pour le tourisme ils jouent dessus avec comme spécialité les œufs noirs cuits dans l’eau soufrée.

<!-- IMAGE:image3|Soufrière de Hakone -->

* En France, le sulfure d’hydrogène est essentiellement industriel.<br>
On le retrouve principalement sur le site de Lacq (64) à quelques kilomètres de Pau (ma région natale).<br>
Il est d’ailleurs un des composants du THT ([Tétrahydrothiophène](https://fr.wikipedia.org/wiki/Tétrahydrothiophène)), produit mélangé aux réseaux de gaz Français pour repérer les fuites à l’odeur. C’est pour cela que lorsque vous traversez Lacq il y a régulièrement des odeurs d’œufs pourris.

<div style="display: flex; justify-content: center;">
	<iframe width="425" height="350" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.680379867553711%2C43.384965139025674%2C-0.5670833587646485%2C43.43883566662347&amp;layer=mapnik&amp;marker=43.41190639248755%2C-0.6237316131591797" style="border: 1px solid black"></iframe>
</div>


#### Information complémentaire

Pour un projet perso, j’ai découvert qu’il existe des petits capteurs SPS30 Sensirion, qui reposent sur un principe voisin.<br>
Un petit ventilateur permet de faire circuler l'air ambiant à l'intérieur du capteur. Un laser passe au travers de ce flux d'air, et les particules touchées par le laser vont diffuser la lumière qui va être mesurée par une photodiode.<br>
Ce petit capteur permet d’agrémenter une station météo en mesurant la quantité de particules fines dans l’air.

<!-- IMAGE:image4|Capteur SPS30 -->

## Les transformations chimiques

### Chimiluminescence

#### Principe

Il fonctionne de la même façon que pour la fluorescence UV sur l'aspect analytique.<br>
On va mesurer la quantité de lumière émise. Mais il s’agit cette fois de lumière directement produite par réaction chimique.<br>
Pour ce type d’analyse, on va cibler les oxydes d’azote « NOx » (à savoir du monoxyde d’azote NO et du dioxyde d’azote NO<sub>2</sub>).<br>
Si on cherche à mesurer des NOx, il faut forcer la génération de NO<sub>2</sub> excité qui, en se stabilisant, va produire de la lumière directement mesurée.

Donc pour les NO présents dans l'échantillon, mélangés à de l'ozone O<sub>3</sub> ils vont générer du NO<sub>2</sub> excité.<br>
pour les NO<sub>2</sub> déjà présents dans les NOx, il faut les chauffer pour les réduire en NO, puis procéder à la même opération qu'avant.

#### Information complémentaire

Pour info, les NOx sont majoritairement issus par la combustion de carburant ou par biomasse, mais aussi par les incendies.<br>
Dernièrement il y a eu un incendie dans un élevage de volaille au sud du Cher, le surlendemain matin une odeur désagréable se répandait sur le sud de Bourges. En regardant les cartes telles que « [https://aqicn.org/map/france/fr/](https://aqicn.org/map/france/fr/) », il était possible de suivre le nuage de fumée emportée par les vents.<br>
Les valeurs telles que les particules lourdes augmentaient, mais également les NO2 et O3, en alternance selon la réaction dominante :<br>

	NO + O3 <=> NO2 + O2

Les pluies acides sont généralement causées par le NO2


### L’électrochimie

Il s’agit ni plus ni moins qu’une pile, composée d’une anode et d’une cathode. On cherche à produire une réaction qui va induire un courant électrique. Par exemple lorsqu’on fait passer de l’oxygène sur une cathode recouverte d’un gel de KOH.


## La manipulation physique des molécules

### Chromatographie en phase gazeuse

#### Principe

Cette partie devient techniquement intéressante de par la complexité mécanique et théorique pour séparer et quantifier les composants d’un échantillon.<br>
Le gaz à analyser va être poussé par un gaz vecteur, à travers un réseau de colonnes remplies ou de colonnes capillaires.<br>
Par un jeu de vannes, pendant que l’échantillon passe dans une colonne, les autres colonnes sont purgées par passage du gaz vecteur en sens inverse.
Les colonnes vont jouer sur différentes propriétés physiques pour interagir et donc ralentir les différentes molécules de l’échantillon.<br>
Une fois les composants séparés, ils vont être poussés vers un capteur.<br>

#### Capteurs et analyseurs

Là aussi il en existe plusieurs. Chez Messer nous utilisions des :
* FID (détecteur à ionisation de flamme),
* TCD (détecteur de conductivité thermique)
* DID (détecteur à ionisation par décharge voir photo).

<!-- IMAGE:image5|Intérieur du chromato DID -->

<!-- IMAGE:image6|Plasma -->


### Spectrométrie de masse

#### Principe

L’échantillon va être ionisé, c’est-à-dire que les molécules du gaz vont être chargées électriquement.<br>
Ces ions vont être propulsés à travers un quadripole qui va permettre de les sélectionner pour atteindre un détecteur d’ions Faraday.<br>
Ce détecteur va mesurer le courant généré par ces ions. Mais lorsque ce courant est trop faible pour être mesuré, il est possible de propulser les ions vers un multiplicateur d’électrons, ou Channeltron.<br>
Lorsque les ions viennent frapper ce détecteur, cela va entraîner une réaction en chaine qui va générer des électrons et donc un courant que l’on pourra mesurer.

#### Capteurs et analyseurs

<!-- IMAGE:image7|GAM300 ouvert -->

<!-- IMAGE:image8|GAM300 ouvert vu du dessus -->

#### Anecdote

Cette appareil est vraiment fascinant et j'ai passé de nombreuses heures dessus, ainsi que sur les chromato indiqués plus haut, surtout celui avec le plasma.<br>
Sur la fin de ma carrière chez Messer, j'ai participé à la mise en place du petit frère du GAM300: le GAM500.<br>
Sur cette partie là j'ai fait mes premiers vrais pas dans le développement professionnel, et vous pourrez retrouver cette aventure dans cet [article]().


<!-- lang:en -->

*This article is not yet available in English. Please check back soon.*