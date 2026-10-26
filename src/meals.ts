export interface Meal {
  day: string;
  name: string;
  ingredients: Array<{ name: string; quantity: number; unit: string }>;
}

// Static week for the demo: the feature under test reads from this.
export const week: Meal[] = [
  { day: 'Mon', name: 'Croque-monsieur', ingredients: [{ name: 'Bread', quantity: 4, unit: 'slice' }, { name: 'Ham', quantity: 2, unit: 'slice' }, { name: 'Gruyère', quantity: 80, unit: 'g' }] },
  { day: 'Tue', name: 'Ratatouille', ingredients: [{ name: 'Zucchini', quantity: 2, unit: 'pc' }, { name: 'Tomato', quantity: 4, unit: 'pc' }, { name: 'Eggplant', quantity: 1, unit: 'pc' }] },
  { day: 'Wed', name: 'Steak frites', ingredients: [{ name: 'Beef steak', quantity: 2, unit: 'pc' }, { name: 'Potato', quantity: 600, unit: 'g' }] },
  { day: 'Thu', name: 'Omelette', ingredients: [{ name: 'Egg', quantity: 6, unit: 'pc' }, { name: 'Gruyère', quantity: 40, unit: 'g' }] },
  { day: 'Fri', name: 'Moules marinières', ingredients: [{ name: 'Mussels', quantity: 1, unit: 'kg' }, { name: 'White wine', quantity: 20, unit: 'cl' }] },
  { day: 'Sat', name: 'Quiche lorraine', ingredients: [{ name: 'Egg', quantity: 3, unit: 'pc' }, { name: 'Bacon', quantity: 150, unit: 'g' }, { name: 'Cream', quantity: 20, unit: 'cl' }] },
  { day: 'Sun', name: 'Roast chicken', ingredients: [{ name: 'Chicken', quantity: 1, unit: 'pc' }, { name: 'Potato', quantity: 500, unit: 'g' }] },
];
