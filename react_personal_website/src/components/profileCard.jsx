
// TODO Get the mail button to open a mail popup and allow the user to send an
// email. This probably going to require an externallibrary.
function ProfileCard() {
  return (
    <div className="prof-card">
      <div className="text-center">
        <img src="/BadgePhoto.jpg" className="rounded-circle" id="profpic" />
      </div>
      <h2 className="text-center">
        <span>Henok Assalif</span>
      </h2>
      <div className="text-center">
        <a href="https://github.com/HenokA22" target="_blank"><i className="fab fa-github social-icon"></i></a>
        <a href="https://www.linkedin.com/in/henok206/" target="_blank"><i className="fab fa-linkedin social-icon"></i></a>
        <a href="mailto:henoka206@gmail.com"><i className="fas fa-envelope social-icon"></i></a>
        <a href="https://www.instagram.com/henok.206" target="_blank"><i className="fab fa-instagram social-icon"></i></a>
      </div>
    </div>
  )
}

export default ProfileCard
