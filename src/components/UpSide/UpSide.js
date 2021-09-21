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
  };

  return (
    <div id={styles.upSide}>
      <ul>
        <li className="up-side-sub">
          <div>
            <input placeholder="Search"></input>
            <img src={imageURL["search-icon"]} />
          </div>
          <img src={imageURL["voice-icon"]} />
        </li>
        <li className="up-side-sub"></li>
      </ul>
    </div>
  );
};

export default UpSide;
