import styles from "./LeftMenu.module.css";

const imageURL = {
  "youtube-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889692602746671154/youtube-icon.png",
  "hamburger-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889696724464070656/hamburger-icon.png",
  "home-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889700547790274680/home-icon.png",
  "explore-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889705479511625768/explore-icon.png",
  "subscription-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889710134329213028/subscription-icon.png",
  "library-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889711021244182648/video-library-1781676-1518357.png",
  "history-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889712256567349258/history-icon.png",
  "showMore-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889715489822081024/showmore.png",
  "signin-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889719207510560768/SignIn_Icon.png",
  "music-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/890924300742311997/channels4_profile.jpg",
  "cup-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/890924301933482014/cup.jpg",
  "loveGame-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/890924303355355166/LoveGame.jpg",
  "movies-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/890924305133740042/Movie.jpg",
  "news-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/890924305825816617/News.jpg",
  "live-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/890924307163779132/Live.jpg",
  "360-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/890924300276731904/360.jpg",
  "browseChannels-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889771163000115220/browserChannels-icon.png",
  "youtube-min-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889772385484566539/youtube-min-icon.png",
  "live-transparent-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889773552570605578/live-transparent-icon.png",
  "setting-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889774052128989184/setting-icon.png",
  "flag-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889774542665420830/flag_icon.png",
  "help-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889774957691801610/help_icon.png",
  "feedback-icon":
    "https://cdn.discordapp.com/attachments/832316191309430835/889775449364910080/feedback_icon.png",
};

const LeftMenu = () => {
  let isHamburgerOpen = true;

  const showMoreHandler = () => {
    const showText = document.getElementById("showMoreText");
    const showImage = document.getElementById("showMoreImg");
    var isShowing = showText.innerHTML === "Show fewer";
    if (isShowing) {
      showText.innerHTML = "Show more";
      showImage.style.transform = "rotate(0)";
    } else {
      showText.innerHTML = "Show fewer";
      showImage.style.transform = "rotate(180deg)";
    }
  };

  const menuHandler = () => {
    const leftSide = document.getElementById(styles.leftMenu);
    const signinLeft = document.getElementById("signinLeftMenu_000");
    const closedHamburger = document.getElementById(styles.closedHamburger);
    console.log(signinLeft);
    if (isHamburgerOpen) {
      const childs = leftSide.getElementsByTagName("ul");
      for (const tag of childs) {
        tag.style.display = "none";
      }

      signinLeft.style.display = "none";
      closedHamburger.style.display = "flex";

      leftSide.style.overflow = "auto";
      leftSide.style.width = "80px";

      const closedChilds = closedHamburger.getElementsByTagName("li");
      for (const tag of closedChilds) {
        tag.style.display = "flex";
      }

      document.getElementById("Videos_videoShower__284lY").style.maxWidth =
        "88%";
      isHamburgerOpen = false;
    } else {
      leftSide.style.width = "240px";
      leftSide.style.overflow = "scroll";

      setTimeout(() => {
        closedHamburger.style.display = "none";
        const childs = leftSide.getElementsByTagName("ul");
        signinLeft.style.display = "flex";
        for (const tag of childs) {
          tag.style.display = "block";
        }

        const closedChilds = closedHamburger.getElementsByTagName("li");
        for (const tag of closedChilds) {
          tag.style.display = "none";
        }
      }, 300);

      document.getElementById("Videos_videoShower__284lY").style.maxWidth =
        "82%";
      isHamburgerOpen = true;
    }
  };

  return (
    <div id={styles.leftMenu}>
      <div id={styles.upSide}>
        <img
          src={imageURL["hamburger-icon"]}
          id={styles.hamburgerIcon}
          onClick={menuHandler}
          alt="Hamburger Menu"
        />
        <a href="./" id={styles.youtubeIcon}>
          <img src={imageURL["youtube-icon"]} alt="YouTube Icon" />
          <p>YouTube</p>
        </a>
      </div>
      <div id={styles.fixMenu}></div>
      <ul className={styles.subMenu}>
        <li className={styles.subMenuItem} id={styles.active}>
          <div>
            <img src={imageURL["home-icon"]} alt="Home Icon" />
            <p>Home</p>
          </div>
        </li>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["explore-icon"]} alt="Explore Icon" />
            <p>Explore</p>
          </div>
        </li>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["subscription-icon"]} alt="Subscription Icon" />
            <p>Subscriptions</p>
          </div>
        </li>
      </ul>
      <ul className={styles.subMenu}>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["library-icon"]} alt="Library Icon" />
            <p>Library</p>
          </div>
        </li>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["history-icon"]} alt="History Icon" />
            <p>History</p>
          </div>
        </li>
        <li className={styles.subMenuItem}>
          <div onClick={showMoreHandler}>
            <img
              src={imageURL["showMore-icon"]}
              id="showMoreImg"
              className={styles.arrow}
              alt="Show-More Icon"
            />
            <p id="showMoreText">Show more</p>
          </div>
        </li>
      </ul>
      <div className={styles.signinBox} id="signinLeftMenu_000">
        <div>
          <p className={styles.signinText}>
            Sign in to like videos, comment, and subscribe.
          </p>
          <button className={styles.signinButton}>
            <img src={imageURL["signin-icon"]} alt="Signin Icon" />
            sign in
          </button>
        </div>
      </div>
      <ul className={styles.subMenu}>
        <p className={styles.subMenuTitle}>best of youtube</p>
        <li className={styles.subMenuItem}>
          <div>
            <img
              src={imageURL["music-icon"]}
              className={styles.BOYIcon}
              alt="Music Icon"
            />
            <p>Music</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img
              src={imageURL["cup-icon"]}
              className={styles.BOYIcon}
              alt="Cup Icon for sports"
            />
            <p>Sports</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img
              src={imageURL["loveGame-icon"]}
              className={styles.BOYIcon}
              alt="LoveGame Icon"
            />
            <p>Gaming</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img
              src={imageURL["movies-icon"]}
              className={styles.BOYIcon}
              alt="Movies Icon"
            />
            <p>movies</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img
              src={imageURL["news-icon"]}
              className={styles.BOYIcon}
              alt="News Icon"
            />
            <p>news</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img
              src={imageURL["live-icon"]}
              className={styles.BOYIcon}
              alt="Live Icon"
            />
            <p>live</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img
              src={imageURL["360-icon"]}
              className={styles.BOYIcon}
              alt="VR Icon"
            />
            <p>360° Video</p>
          </div>
        </li>
      </ul>
      <ul className={styles.subMenu}>
        <li className={styles.subMenuItem}>
          <div>
            <img
              src={imageURL["browseChannels-icon"]}
              alt="Browse Channels Icon"
            />
            <p>Browse Channels</p>
          </div>
        </li>
      </ul>
      <ul className={styles.subMenu}>
        <p className={styles.subMenuTitle}>more from youtube</p>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["youtube-min-icon"]} alt="YouTube Mini Icon" />
            <p>YouTube Premium</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img
              src={imageURL["live-transparent-icon"]}
              alt="Live Transparent Icon"
            />
            <p>Live</p>
          </div>
        </li>
      </ul>

      <ul className={styles.subMenu}>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["setting-icon"]} alt="Setting Icon" />
            <p>setting</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["flag-icon"]} alt="Flag Icon for report" />
            <p>Report history</p>
          </div>
        </li>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["help-icon"]} alt="Help Icon" />
            <p>help</p>
          </div>
        </li>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["feedback-icon"]} alt="FeedBack Icon" />
            <p>feedback icon</p>
          </div>
        </li>
      </ul>

      <ul id={styles.closedHamburger}>
        <li>
          <img src={imageURL["home-icon"]} alt="Home Icon" />
          <p>Home</p>
        </li>

        <li>
          <img src={imageURL["explore-icon"]} alt="Explore Icon" />
          <p>Explore</p>
        </li>

        <li>
          <img src={imageURL["subscription-icon"]} alt="Subscription Icon" />
          <p>Subscriptions</p>
        </li>

        <li>
          <img src={imageURL["library-icon"]} alt="Library Icon" />
          <p>Library</p>
        </li>

        <li>
          <img src={imageURL["history-icon"]} alt="History Icon" />
          <p>History</p>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
