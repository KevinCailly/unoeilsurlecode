---
id: UDiOkMqtQ383
slugFR: interface-utilisation-spectrometre-de-masse
slugEN: user-interface-mass-spectrometer
titleFR: Projet QSL : interface d'utilisation d'un spectromètre de masse
titleEN: QSL project : user interface for a mass spectrometer
excerptFR: Ceci est mon tout premier projet professionnel dans le monde du developpement informatique. Je ne connaissais pas du tout le langage et la programmation.
excerptEN: This is my first professionnal project in the world of IT development. I didn't know the language and programming at all.
date: 2026-06-14
tagsFR: [physique-chimie, laboratoire, métrologie, projet, dev]
tagsEN: [physical-chemistry, laboratory, metrology, project, dev]
time: 8 min
image: /images/articles/UDiOkMqtQ383/cover.webp
---

## Contexte

Pour les besoins du laboratoire dans lequel je travaillais, nous avions acheté un spectromètre de masse GAM500 de chez InProcess Instruments.<br>
Ce gros jouet nous avait été livré sur palette, et il avait fallu lui faire une installation complète afin d'optimiser au mieux son utilisation physique.<br>
Mais je ne vais pas détailler cette partie-là car ce n'est pas le but de cet article.<br>
Le logiciel est fourni presque nu, et il a fallu mettre en place une interface d'utilisation qui répondait à nos besoins.


## Principe de fonctionnement

Je ne vais pas détailler le principe du fonctionnement d'un spectromètre de masse ici, car je l'ai déjà fait dans un autre article que vous pouvez retrouver [ici](https://unoeilsurlecode.fr/fr/article/lR24Rwt1Zin2/vulgarisation-techniques-analytiques).


## Historique

Il y a eu énormément de mouvement industriel concernant les spectromètres de masse et les entreprises liées.<br>

<!-- IMAGE:image1|Histoire de BALZERS, PFEIFFER et INFICON -->

En version simplifiée, aujourd'hui il existe :
- Pfeiffer Vacuum qui s'était détaché de Balzers et a poursuivi son activité dans le domaine de la spectrométrie de masse,
- Inficon qui a également poursuivi dans le domaine des spectromètres de masse en plus de se diversifier,
- OC Oerlikon qui est un conglomérat d'entreprises issu de Unaxis, et spécialisés dans les matériauxs et technologies de surface
- InProcess Instruments est arrivé plus tard (1997) et a commencé son activité avec le rachat et le transfert de process des spectromètres de masse GAM de Balzers AG.

Ils ont continué à le faire évoluer, et aujourd'hui on retrouve de nouvelles versions portant le même nom et utilisant le même logiciel.


## Logiciel

Le logiciel a connu quelques évolutions également :
- QuadStar 420 (1987), 
- QuadStar 421/422 (1992), -> nous l'utilisions pour un OMNISTAR, spectromètre de masse de Pfeiffer  
- QuadStar 32-bit (2002), -> nous l'utilisions pour le GAM300 de Balzers et le GAM500 de IPI

Je n'ai pas trouvé d'information concernant le langage utilisé initialement pour le logiciel.<br>
Cependant, celui-ci est un regroupement de plusieurs executables dont la documentation nous dit :

	Measure : Measure is the actual measure program. It provides all kinds of measurements and storage of the acquired data. From here, sequences are started as well.
	Dispsav : Dispsav (Display Saved Values) is the analyzing program. Stored data can be represented in different ways, magnified and processed.
	Parset : Parset (Parameter Setup) is the setup program. All kinds of settings for measurements, QMS, communication and the working environment can be done here. You can program sequences here.
	Tune Up : Tune Up is the tuning program. You can tune the ion source, adjust the RF generator and optimize the peak shape or degas the filament.
	Service : Service is the service program. You can test for leaks, measure total pressure and operate analog or digital inputs and outputs manually.
	Utility : Utility is an additional program. It contains functions for the spectra library.
	Accessc : Accessc is the administration program. You can allow or prohibit access to Quadstar 32-bit components for individual users.

L'outil "Detect it Easy" permet de déterminer que ces exécutables sont écrits en C/C++ avec la version 2003 de Visual Studio.


## Séquences

Comme indiqué ci-dessus, l'outil Parset permet de programmer des séquences.<br>
Ces séquences permettent de réaliser dans l'ordre défini des opérations pré-programmées.

Initialement, l'outil Measure permet d'effectuer manuellement des mesures avec ou sans enregistrement des données, utilisation d'un multiplicateur d'électrons, etc.<br>
Il implique de connaître parfaitement l'analyseur et de savoir comment le configurer et l'utiliser.<br>
C'est pourquoi nous avons utilisés les séquences pour créer un menu qui permet d'automatiser le process analyses.<br>

Ainsi, dès le démarrage, il suffit d'ouvrir la séquence du menu, puis de sélectionner les opérations souhaitées, par des boutons qui appelleront d'autres séquences.


## Interface générée

Voici un exemple de menu interface que j'ai créé :

<!-- IMAGE:image2|Interface d'utilisation du GAM500 -->

Et voici un exemple de code correspondant à cette interface :

	LoopDialog( Box="Analyse Gaz Spéciaux - MESSER FRANCE - MENU GENERAL";5;5;620;420, ReturnVar=i[0], EnterVal=0, EscapeVal=-1, Button="AJUSTAGE %";20;10;260;30;1, Button="AJUSTAGE PPM";20;50;260;30;2, Button="AJUSTAGE BINAIRES";20;90;260;30;3, Button="AJUSTAGE COFRAC";20;170;260;30;4, Button="AJUSTAGE CORROSIFS";20;240;260;30;5, Button="DILUTEUR par P9";20;310;260;30;6, Button="ANALYSE %";330;10;260;30;7, Button="ANALYSE PPM";330;50;260;30;8, Button="ANALYSE BINAIRES";330;90;260;30;9, Button=" ANALYSE COFRAC";330;170;260;30;10, Button="ANALYSE CORROSIFS";330;240;260;30;11, Button=" FONCTIONS";327;306;260;30;12, Button="QUITTER";330;370;260;30;-1 )
	Begin

		IfVar( i[0] = 1 )
		Begin
			Message( Text="Ajustage mélanges % ", Time=on, Disp=both )
			Sequence( Par="c:\qs32bit\par\01_menu_a.seq" )
		End

		IfVar( i[0] = 2 )
		Begin
			Message( Text="Ajustage mélanges ppm ", Time=on, Disp=both )
			Sequence( Par="c:\qs32bit\par\02_menu.seq" )
		End

		[...]
		
		IfVar( i[0] = -1 )
			Error( Text="QUITTER" )

	End

Ce bout de code est la définition du menu, si l'utilisateur clique :
- sur le bouton 1 il lancera la séquence "01_menu_a.seq" 
- sur le bouton 2 ça lancera la séquence "02_menu.seq"

Une autre exemple un peu plus complexe :

	//Sélection de la platine :
	Sequence( Par="c:\qs32bit\par\select_platine.seq" )

	//Si le numéro de platine est correct :
	IfVar( gi[100] > 0 )
	Begin

		//Définition du fichier et des informations sur l'échantillon, avant ajustage :
		Sequence( Par="c:\qs32bit\par\ident_fichier.seq" )

		//Purge du système en fonction de la platine sélectionnée :
		Sequence( Par="c:\qs32bit\par\purge.seq" )

		//Ouverture des vannes en fonction de la platine sélectionnée :
		Sequence( Par="c:\qs32bit\par\open_valves.seq" )

		//Lancement des runs avant ajustage, premier cycle de 5 runs non sauvegardé, second cycle de 10 runs sauvegardé :
		Loop( i[0]=1;5 )
			MCD( Par="c:\qs32bit\par\bin-c4h10-n2.mcp" )

		Loop( i[0]=1;10 )
			MCD( Par="c:\qs32bit\par\bin-c4h10-n2.mcp", SaveCyc=gs[0] )

		//Vérification d'intensité sur les masses sélectionnées :
		Loop( i[0]=1;3 )
			MSC( Par="c:\qs32bit\par\bin-c4h10-n2.msp", CalMode=coarse, Disp=on )

		//Lancement de l'ajustage des teneurs enregistrées dans le Parset, en fonction des masses sélectionnées :
		Loop( i[0]=1;5 )
			GSC( Par="c:\qs32bit\par\bin-c4h10-n2.gcp", Disp=on, Mean=3 )

		//Définition du fichier et des informations sur l'échantillon, après ajustage :
		Sequence( Par="c:\qs32bit\par\ident_fichier.seq" )

		//Lancement des runs après ajustage, premier cycle de 5 runs non sauvegardé, second cycle de 10 runs sauvegardé :
		Loop( i[0]=1;5 )
			MCD( Par="c:\qs32bit\par\bin-c4h10-n2.mcp" )

		Loop( i[0]=1;10 )
			MCD( Par="c:\qs32bit\par\bin-c4h10-n2.mcp", SaveCyc=gs[0] )

		//Finalisation de l'analyse
		Sequence( Par="c:\qs32bit\par\fin_analyse.seq" )

	End

Cette séquence permet d'effectuer une analyse complète. Ainsi le technicien de laboratoire peut simplement brancher son échantillon et suivre les instructions données par les différentes séquences, jusqu'à l'analyse finale.<br>
La séquence de fin permet de revenir sur le menu initial.


## Conclusion

Pour rappel, je ne connaissais pas le développement informatique.<br>J'avais des bases sur Excel, avec lequel je faisais quelques macros en VBA, mais c'est tout<br>
J'étais toujours dans ma période métrologue, mais ce logiciel et cet analyseur me passionnaient.<br>
La documentation était relativement basique, elle ne parlait pas d'un langage en particulier, mais fournissait quelques contraintes et éléments de syntaxe.<br>
Pour les besoins de cet article, je l'ai appelé QuadStart Sequence Language (QSL).<br>
J'avais un challenge, et je me suis adapté. Et je pense avoir répondu au besoin !<br>
J'ai vraiment pris plaisir à faire ce projet, et il m'avait fait prendre conscience que j'étais fait pour le développement informatique :)


<!-- lang:en -->

*This article is not yet available in English. Please check back soon.*