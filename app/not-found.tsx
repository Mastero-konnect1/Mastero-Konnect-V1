export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', padding: 24 }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Page not found</h1>
        <p style={{ color: '#666' }}>Sorry, we couldn’t find the page you’re looking for.</p>
      </div>
    </div>
  )
}