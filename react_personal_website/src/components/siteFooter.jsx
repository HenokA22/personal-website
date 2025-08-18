
function SiteFooter(props) {
  return (
    <footer className={`site-footer ${props.show ? 'show-footer' : ''}`}>
      <div className="container">
        <p>&copy; 2025 Henok Assalif</p>
      </div>
    </footer>
  )
}

export default SiteFooter
