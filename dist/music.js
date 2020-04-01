const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [
    {
      name: "100Ways",
      artist: '周硕歌',
      url: 'https://sharefs.yun.kugou.com/202004020005/3c76c3a9c248f1548533de4b88340862/G210/M06/0F/03/spQEAF59OpuAJdxrACmEvu7C0FA044.mp3',
      cover: 'https://picsum.photos/100/100?image=1005',
    },
    {
      name: 'Sugar',
      artist: 'Maroon 5',
      url: 'https://sharefs.yun.kugou.com/202004020020/5f1d97bc6eafde38886b9ee3af508374/G001/M08/11/18/QQ0DAFSNJ82AC5u1ADmF9ThzQkw563.mp3',
      cover: 'https://picsum.photos/100/100?image=1082',
    },
    {
      name: '玻璃之情',
      artist: '张国荣',
      url: 'https://sharefs.yun.kugou.com/202004020039/fc9a1ce2e3e36476a1d3cb8d271b8290/G146/M01/03/07/0g0DAFveztmAHfDGAEW3ISchZ3M444.mp3',
      cover: 'https://picsum.photos/100/100?image=12',
    }
  ]
});
