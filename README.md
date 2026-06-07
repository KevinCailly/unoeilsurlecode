# Un Oeil sur le Code

Bonjour et bienvenue sur le site "Un Oeil sur le Code".

## Historique
Je suis développeur depuis une dizaine d'année maintenant. J'avais commencé ce site il y a environ 9 ans.
Site portfolio, il me permettait de garder des compétences en dev web, bien que je me sois spécialisé professionnellement dans le dev de systèmes embarqués.

Ce site est passé par plusieurs étapes, dont la première était la découverte des langages web. Une première version tournait sur un micro-framework (Slim).
Un micro-framework est une version allégée d'un framework à partir duquel il faut tout rajouter manuellement.
Ce site est resté plusieurs années dans cet état.

J'ai ensuite fait des tests avec le framework PHP *Symfony*, puis avec le framework Python *Django*. C'était très intéressant à faire.
Mais je ne les ai jamais mis en ligne.

J'ai tout de même souhaité faire évoluer le site vers une version un peu plus complète, notamment avec une partie Blog de dev.
C'est pourquoi j'avais mis en ligne une version découpée en plusieurs parties :
- Front-end : Vue.js
- Back-end : Symfony
- API : Symfony API

Cette version était presque finalisée.

Cependant j'ai eu une mésaventure avec l'hébergeur OVH.
Depuis 8 ans, mon site était hébergé sur un VPS (serveur virtuel), sur lequel j'ai développé énormément de compétences réseaux.
Ce serveur était extrèmement limité en ressource, donc j'ai opté pour un VPS plus récent donc plus performant.
Lors de l'achat, petit cadeau d'OVH qui m'a rajouté l'option backup automatique standard en cadeau.
Sauf qu'un week-end le serveur est devenu totalement inaccessible, sans manipulation spécifique de ma part puisque je ne faisais que des build Docker.
Seule option possible à priori, réinstaller l'OS puis restaurer le serveur avec la super option fournie par OVH.
La restauration a fonctionnée mais a instantanément fait crash le serveur le rendant encore une fois inaccessible...
L'utilisation de la restauration a supprimé cette dernière pour en regénérer une sur l'OS vierge.

J'ai donc perdu 1 mois de dev grace à OVH (et moi qui leur ait fait confiance et n'avait pas remis en place mon script de sauvegarde).

C'est pourquoi, j'ai décidé d'arrêter la gestion du VPS, et je me suis tourné vers Github Pages.

Après tout ce site n'est qu'un site vitrine, et les articles du blog peuvent très bien être stockés avec le code.

## Stack
Le fait de passer par Github Pages fait que le site n'utilise plus de back-end et de requêtes API pour la gestion du blog.
Le front-end reste en Vue.js.

La gestion de l'expérience se fait par parsing d'un fichier JSON.

La gestion des articles se fait par lecture de fichiers Markdown dans un dossier.
Des tags sont ajoutés pour différencier les projets (visible sur le site vitrine) des articles uniquement lisibles depuis le blog.

## Evolution
Peut-être qu'un jour je reprendrais un serveur, ou j'achèterai du matériel suffisant pour l'auto-héberger.
Mais pour l'instant le site va rester comme ça un petit moment je pense.
Je rajouterai les articles au fur et à mesure du temps libre que j'ai.

## Licences

### Code source
Le code source de ce projet est disponible sous licence [MIT](LICENSE).

Vous avez le droit d’utiliser, de copier, de modifier, de fusionner, de distribuer, de publier, d’accorder des sous-licences et de vendre des copies du logiciel.
Mais vous devez obligatoirement garder la mention de copyright si vous le faites.

### Contenu des articles
Les articles, textes et médias publiés sur ce site sont protégés par la licence
[Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/).

Cela signifie que vous ne pouvez pas réutiliser, modifier ou redistribuer le contenu des articles sans mon accord explicite.