import styles from "./UpSide.module.css";

const UpSide = () => {
  const imageURL = {
    "search-icon":
      "https://cdn.discordapp.com/attachments/832316191309430835/889692599135375441/search-icon.png",
    "youtube-icon":
      "https://cdn.discordapp.com/attachments/832316191309430835/889692602746671154/youtube-icon.png",
    "hamburger-icon":
      "https://cdn.discordapp.com/attachments/832316191309430835/889692597893873705/hamburger-icon.png",
    "voice-icon":
      "https://cdn.discordapp.com/attachments/832316191309430835/889692600024584232/voice-icon.png",
    "signin-icon":
      "https://cdn.discordapp.com/attachments/832316191309430835/889719207510560768/SignIn_Icon.png",
    "dottedMenu-icon":
      "https://cdn.discordapp.com/attachments/832316191309430835/889891715186581554/dotted.png",
    "moreApps-icon":
      "https://cdn.discordapp.com/attachments/832316191309430835/889950141652561920/moreApps_ICon.png",
  };

  return (
    <div id={styles.upSide}>
      <div id={styles.rightSide}>
        <img
          src={imageURL["moreApps-icon"]}
          className={styles.subMenuTop}
          alt="More Apps Icon"
          title="More Apps"
        />

        <img
          src={imageURL["dottedMenu-icon"]}
          className={styles.subMenuTop}
          alt="DottedMenu Icon"
          title="Settings"
        />

        <button className={styles.signinButton}>
          <img src={imageURL["signin-icon"]} alt="Signin Icon" />
          sign in
        </button>
      </div>
      <div id={styles.leftSide}>
        <input id={styles.searchInput} placeholder="Search"></input>
        <div id={styles.searchIcon} title="Search">
          <img src={imageURL["search-icon"]} alt="Search Icon" />
        </div>
        <div id={styles.searchVoiceIcon} title="Search with Voice">
          <img src={imageURL["voice-icon"]} alt="Voice Icon" />
        </div>
      </div>
    </div>
  );
};

export default UpSide;
