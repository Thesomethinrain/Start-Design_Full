![TheSomethinRain](http://thesomethinrain.work/assets/images/logo.svg)

# Bienvenue sur TheSomethinRain !
StartDesignFull est un thème front-end HTML5 conçu par [Sebastien Pasquier](http://thesomethinrain.work) pour l’édition de sites web statiques adaptatifs (smartphones, tablettes, écrans larges). Il intègre des styles SCSS de base, [Grunt](http://gruntjs.com/) pour la gestion de tâches et l’optimisation et [Assemble](https://github.com/assemble/assemble) pour la génération de sites web statiques.

## Contenu

* **Grille de mise en page** - 
	* adaptée aux tablettes et smartphones
	* 3 systèmes possibles au choix : Flexbox, Susy, Masonry
* **SCSS** - inclue les styles de base,  les variables pour la configuration générale, et des mixins pour une automatisation des styles courants.
* **Vertical Rythm** - avec Gridlover, Skeleton ou Compass (au choix)
* **Generateur de site statique** - Avec [Assemble](https://github.com/assemble/assemble) permettant de générer rapidement un site prêt à mettre en ligne.
* **Grunt** - Pour l’automatisation des tâches : compilation SCSS, JSHint, minification JavaScript, optimisation des images, rendu en direct sur un serveur d’évaluation.

## Démarrage rapide

Récupérez la dernière version du thème :

	git clone git clone git@github.com:Thesomethinrain/Start-Design-Full.git

Installez les paquets Node:

	cd [racine-du-site]
	npm install	

Lancez Grunt :
	
- grunt dist
- grunt

Admirez votre site sur http://localhost:3000
Editez les fichiers :
- .hps pour le HTML
- .scss pour le formatage
- .js pour l’interface utilisateur (Masonry, Lightbox, fenêtre modale,…)

## Structure

Voici les fichiers principaux ci-dessous : 

* _site	- version compilée statique du site web prêt à déployer
* src/
	* assets			- Sources 
		* |- images	- Images
		* |- js			- Fichiers JavaScript
		* |- fonts		- Fontes
		* |- scss		- Fichiers Scss
	  * content 			- Calques pour la génération du site statique
		* |- _includes 	- Composants  (header, footer, modal, box,…)
		* |- _layouts	- Gabarits (Default)
		* |- _pages	- Pages du site (Index, Blog, Single,…)
* Gruntfile.js		- Pour la compilation et l’automatisation des tâches
* package.json	- Pour l’installation des paquets Node
* .gitignore		- Pour l’exclusion de fichiers des dépôts Git

