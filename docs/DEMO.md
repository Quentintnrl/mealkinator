# Mealkinator — rôle dans la démo

## Feature fil rouge
**Automatic shopping list** : un bouton « Shopping list » dans l'en-tête et un panneau « The chef’s list »
qui regroupe les ingrédients des repas de la semaine. Changement de design net, code court, angle de post évident.

## Maquette Figma
- Fichier (équipe Figma « Mealkinator ») : `hhuTYravSy587lUvUmX1Zc`
  https://www.figma.com/design/hhuTYravSy587lUvUmX1Zc
- Écran « avant » (`Week - before`) : nœud `3:2`.
- Écran « après » (`Week - after (shopping list)`) : nœud `3:102`.
- Base de design : variables de couleur (collection « Brasserie »), styles de texte « Mealkinator/* », composants
  DayCard, Button/Primary, Button/Secondary, ChecklistRow, Logo.

## Rôle vis-à-vis de Ripple_handoff
1. L'app existe à l'état « avant » (planificateur de la semaine).
2. Ripple_handoff lit l'écran « après », planifie, construit la feature sur une branche, compare avec la maquette.
3. L'agent de contenu rédige le teasing puis l'annonce, en voix de marque (voir `BRAND.md`).

## Espace Figma
