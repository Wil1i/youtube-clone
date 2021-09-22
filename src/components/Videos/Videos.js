import styles from "./Videos.module.css";
import { useState } from "react";

const Videos = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      video: {
        title: "آموزش ساخت بات دیسکورد | Discord.JS Tutorial",
        thumbnail:
          "https://i.ytimg.com/vi/93bI927as_U/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAI7CNGy2Lcx6mWczKqI9NrotMWXw",
        views: "1K",
        publishTime: "2 hours ago",
        url: "https://www.youtube.com/watch?v=93bI927as_U",
      },
      channel: {
        name: "Code Williams",
        avatar:
          "https://cdn.discordapp.com/attachments/832316191309430835/890289906180583464/New_Logo.jpg",
        url: "https://www.youtube.com/channel/UCbsIcnPkzFosSL-T8moeDAw",
      },
    },
    {
      id: 2,
      video: {
        title: "آموزش ساخت بات دیسکورد | Discord.JS Tutorial",
        thumbnail:
          "https://i.ytimg.com/vi/93bI927as_U/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAI7CNGy2Lcx6mWczKqI9NrotMWXw",
        views: "1K",
        publishTime: "2 hours ago",
        url: "https://www.youtube.com/watch?v=93bI927as_U",
      },
      channel: {
        name: "Code Williams",
        avatar:
          "https://cdn.discordapp.com/attachments/832316191309430835/890289906180583464/New_Logo.jpg",
        url: "https://www.youtube.com/channel/UCbsIcnPkzFosSL-T8moeDAw",
      },
    },
    {
      id: 3,
      video: {
        title: "آموزش ساخت بات دیسکورد | Discord.JS Tutorial",
        thumbnail:
          "https://i.ytimg.com/vi/93bI927as_U/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAI7CNGy2Lcx6mWczKqI9NrotMWXw",
        views: "1K",
        publishTime: "2 hours ago",
        url: "https://www.youtube.com/watch?v=93bI927as_U",
      },
      channel: {
        name: "Code Williams",
        avatar:
          "https://cdn.discordapp.com/attachments/832316191309430835/890289906180583464/New_Logo.jpg",
        url: "https://www.youtube.com/channel/UCbsIcnPkzFosSL-T8moeDAw",
      },
    },
    {
      id: 4,
      video: {
        title: "آموزش ساخت بات دیسکورد | Discord.JS Tutorial",
        thumbnail:
          "https://i.ytimg.com/vi/93bI927as_U/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAI7CNGy2Lcx6mWczKqI9NrotMWXw",
        views: "1K",
        publishTime: "2 hours ago",
        url: "https://www.youtube.com/watch?v=93bI927as_U",
      },
      channel: {
        name: "Code Williams",
        avatar:
          "https://cdn.discordapp.com/attachments/832316191309430835/890289906180583464/New_Logo.jpg",
        url: "https://www.youtube.com/channel/UCbsIcnPkzFosSL-T8moeDAw",
      },
    },
    {
      id: 5,
      video: {
        title: "آموزش ساخت بات دیسکورد | Discord.JS Tutorial",
        thumbnail:
          "https://i.ytimg.com/vi/93bI927as_U/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAI7CNGy2Lcx6mWczKqI9NrotMWXw",
        views: "1K",
        publishTime: "2 hours ago",
        url: "https://www.youtube.com/watch?v=93bI927as_U",
      },
      channel: {
        name: "Code Williams",
        avatar:
          "https://cdn.discordapp.com/attachments/832316191309430835/890289906180583464/New_Logo.jpg",
        url: "https://www.youtube.com/channel/UCbsIcnPkzFosSL-T8moeDAw",
      },
    },
  ]);

  return (
    <div id={styles.videoShower}>
      <ul>
        {videos.map((video) => {
          return (
            <li key={video.id} className={styles.video}>
              <a href={video.video.url}>
                <img
                  src={video.video.thumbnail}
                  alt={video.video.title}
                  className={styles.videoThumbnail}
                />

                <div className={styles.videoInformationDiv}>
                  <div className={styles.channelAvatarSupport}>
                    <img
                      src={video.channel.avatar}
                      alt={video.channel.name}
                      className={styles.videoChannelAvatar}
                    />
                  </div>

                  <p className={styles.videoTitle}>{video.video.title}</p>
                  <p className={styles.videoChannelName}>
                    <a href={video.channel.url}>{video.channel.name}</a>
                  </p>
                  <ul className={styles.videoInformation}>
                    <li className={styles.videoView}>
                      {video.video.views} viewes
                    </li>
                    <li className={styles.videoPublishTime}>
                      {video.video.publishTime}
                    </li>
                  </ul>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Videos;
