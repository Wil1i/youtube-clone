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
    "https://yt3.ggpht.com/IRe9GhidmsIYK3sfAU50dUApa5YFvN2C9PyqZd_nNytpGteFHjGMl2k_Hu5C2YJ0xqcLZrbfMw=s88-c-k-c0x00ffffff-no-rj",
  "cup-icon":
    "https://yt3.ggpht.com/HIz__YctiR1UDbWxNPpQTaulelfwgnaORLR300HX7XnFIahGzUd0F9-zYOrKukoAu0rvVbWvng=s88-c-k-c0x00ffffff-no-rj",
  "loveGame-icon":
    "https://yt3.ggpht.com/4BP4S6EvNPKIIsne8Tq32rjRbMO-ZjQ6DItUbbZ5jAbPv_3tdAZOAMGSP4ALNQBnhWtK3wn7FcU=s88-c-k-c0x00ffffff-no-rj",
  "movies-icon":
    "https://yt3.ggpht.com/6lo97rUTO7xhIBXZqLiaW2kA_eMBIEmqc27EqlKLyE4nAY-yzcKBG0Hs0YdUka3gJ629HcwgyzQ=s88-c-k-c0x00ffffff-no-rj",
  "news-icon":
    "https://yt3.ggpht.com/xY-iZkAGrcD6-pO6g1GSIGemh0U1lr2ZuZDj6t87YExIP6G0lUWOgIEJ6NyJuAy7lefGLgCGwg=s88-c-k-c0x00ffffff-no-rj",
  "live-icon":
    "https://yt3.ggpht.com/8D6JlsnvwDZFMdcbjqVji82kggP3aXXbO-yBD0RFrKlp4G1zNt9wcqcVTSPnAI8GuUAbDYQwsg=s88-c-k-c0x00ffffff-no-rj",
  "360-icon":
    "https://yt3.ggpht.com/KYGaP099oSulAMvSlpilxDmeiVAr2m3mE3huO7geFXsH_5HQ1xGd5YWw1Bq49eorLXi7JXwWkg=s88-c-k-c0x00ffffff-no-rj",
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
  const showMoreHandler = () => {
    const showText = document.getElementById("showMoreText");
    const showImage = document.getElementById("showMoreImg");
    var isShowing = showText.innerHTML == "Show fewer";
    if (isShowing) {
      showText.innerHTML = "Show more";
      showImage.style.transform = "rotate(0)";
    } else {
      showText.innerHTML = "Show fewer";
      showImage.style.transform = "rotate(180deg)";
    }
  };

  const menuHandler = () => {};

  return (
    <div id={styles.leftMenu}>
      <div id={styles.upSide}>
        <img
          src={imageURL["hamburger-icon"]}
          id={styles.hamburgerIcon}
          onClick={menuHandler}
        />
        <a href="./" id={styles.youtubeIcon}>
          <img src={imageURL["youtube-icon"]} />
          <p>YouTube</p>
        </a>
      </div>
      <div id={styles.fixMenu}></div>
      <ul className={styles.subMenu}>
        <li className={styles.subMenuItem} id={styles.active}>
          <div>
            <img src={imageURL["home-icon"]} />
            <p>Home</p>
          </div>
        </li>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["explore-icon"]} />
            <p>Explore</p>
          </div>
        </li>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["subscription-icon"]} />
            <p>Subscriptions</p>
          </div>
        </li>
      </ul>
      <ul className={styles.subMenu}>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["library-icon"]} />
            <p>Library</p>
          </div>
        </li>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["history-icon"]} />
            <p>History</p>
          </div>
        </li>
        <li className={styles.subMenuItem}>
          <div onClick={showMoreHandler}>
            <img
              src={imageURL["showMore-icon"]}
              id="showMoreImg"
              className={styles.arrow}
            />
            <p id="showMoreText">Show more</p>
          </div>
        </li>
      </ul>
      <div className={styles.signinBox}>
        <div>
          <p className={styles.signinText}>
            Sign in to like videos, comment, and subscribe.
          </p>
          <button className={styles.signinButton}>
            <img src={imageURL["signin-icon"]} />
            sign in
          </button>
        </div>
      </div>
      <ul className={styles.subMenu}>
        <p className={styles.subMenuTitle}>best of youtube</p>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["music-icon"]} className={styles.BOYIcon} />
            <p>Music</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["cup-icon"]} className={styles.BOYIcon} />
            <p>Sports</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["loveGame-icon"]} className={styles.BOYIcon} />
            <p>Gaming</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["movies-icon"]} className={styles.BOYIcon} />
            <p>movies</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["news-icon"]} className={styles.BOYIcon} />
            <p>news</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["live-icon"]} className={styles.BOYIcon} />
            <p>live</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["360-icon"]} className={styles.BOYIcon} />
            <p>360° Video</p>
          </div>
        </li>
      </ul>
      <ul className={styles.subMenu}>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["browseChannels-icon"]} />
            <p>Browse Channels</p>
          </div>
        </li>
      </ul>
      <ul className={styles.subMenu}>
        <p className={styles.subMenuTitle}>more from youtube</p>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["youtube-min-icon"]} />
            <p>YouTube Premium</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["live-transparent-icon"]} />
            <p>Live</p>
          </div>
        </li>
      </ul>

      <ul className={styles.subMenu}>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["setting-icon"]} />
            <p>setting</p>
          </div>
        </li>

        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["flag-icon"]} />
            <p>Report history</p>
          </div>
        </li>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["help-icon"]} />
            <p>help</p>
          </div>
        </li>
        <li className={styles.subMenuItem}>
          <div>
            <img src={imageURL["feedback-icon"]} />
            <p>feedback icon</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
