import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: 1,
      username: "link.z",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.braceletbookcdn.com%2Fusers%2F000%2F000%2F009%2F076%2F000000009076%2Fimage.jpg&f=1&nofb=1&ipt=5c65b538c9355a0aa5e864a1466e97388ef011a65c41b4ae673528dc23166b39&ipo=images",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIF.625E7AlttKUQb2VeqJID8Q%26pid%3DApi&f=1&ipt=39252a8d657539305a37324b0231a13a86766a657dbf812e5b34e3825cf823f1&ipo=images",
      caption:
        "At least, I can try to save you Zelda ... again ! Here I come !",
    },
    {
      id: 2,
      username: "zelda@hyrule",
      userImg:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.fk4RchY9ODDcisfiT9evIgHaHa%26pid%3DApi&f=1&ipt=2cf9108359a66df1d1cd1dd31d5c613e387931483c6e24689e8d7ef05ed6715b&ipo=images",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.etF9n5dSAHnbVLeyBcdowAHaDt%26pid%3DApi&f=1&ipt=9c126ba9c277bfce037519d82277ee3baf83d38e3b7843487e5b6f099e0fbf06&ipo=images",
      caption: "No way !",
    },
  ];
  return (
    <div className="">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
