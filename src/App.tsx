import { week } from './meals';

export function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <img src="/logo.svg" alt="" width={56} height={56} />
          <span className="wordmark">Mealkinator</span>
        </div>
      </header>

      <section className="banner">
        <h1>Your week at the table</h1>
        <p>Seven dinners, no thinking.</p>
      </section>

      <main className="grid">
        {week.map(meal => (
          <article className="day" key={meal.day}>
            <span className="day-name">{meal.day}</span>
            <h2>{meal.name}</h2>
            <p>{meal.ingredients.length} ingredients</p>
          </article>
        ))}
      </main>
    </div>
  );
}
