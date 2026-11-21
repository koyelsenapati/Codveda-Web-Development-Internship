
function NotFound({ onBack }) {
  return (
    <section className="not-found-page">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The page you are looking for doesn't exist.</p>
      <button className="submit-button" onClick={onBack}>
        Back to Dashboard
      </button>
    </section>
  );
}

export default NotFound;
