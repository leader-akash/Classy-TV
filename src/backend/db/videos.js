/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

import { v4 as uuid } from "uuid";


export const videos = [
  // {
//_id: "Wo5dMEP_BbI",
  //   title: "Awesome Video about Coding",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  //   creator: "Soham Shah",
  // },
  // {

  // _id: "F_Riqjdh2oM",
  //   title: "Neural Networks from Scratch - P.1 Intro and Neuron Code",
  //   creator: "Sentdex",
  //   description:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
  // },
  {
    category: 'Tech',
    _id: "1fhfnjd",
    videoLink: "https://www.youtube.com/watch?v=r_y9vk1L7KE&t=63s",
    image: "https://i.ytimg.com/vi/r_y9vk1L7KE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIr8EC_Etd14_1fIZLWIpsLkUREA",
    logo: "https://yt3.googleusercontent.com/ytc/AOPolaQOnwD18xcHvQtSpw8mYQX3gZ_9Fdy-NLlRHfPBP3k=s176-c-k-c0x00ffffff-no-rj",
    description: "How Semiconductors Are Manufactured -  Mohali🔥🔥🔥",
    channelName: "Technical Guruji",
    content: "Namaskaar Dosto, yeh ek bahut hi interesting video jaha pe maine aapse baat ki hai Semiconductor Laboratory ke baare mein jo Mohali mein hai. Yaha pe yeh ek exclusive tour hai SCL, Mohali ka jaha pe humne Semiconductor Chips ko banane ki pppri process ko ekdum paas se dikhaya hai. Mujhe umeed hai ki aapko yeh video pasand aayegi."
},
{
  category: 'Music', 
  _id: "jgjhutj2",
   videoLink: "https://www.youtube.com/watch?v=SMKPKGW083c",
  image: "https://i.ytimg.com/vi/PdCRXbXucrY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_aNqNouooeZCWRrlVtmRA-F8kDA",
  logo: "https://yt3.ggpht.com/7nPsd19AYxUnbcKoAqhFNSRyqr1OB8_mt0XZ-fTBWTw-Wv0Y9QY17t6lrTDzLg8c-aetSbNouQ=s48-c-k-c0x00ffffff-no-rj",
  description: "Relaxing Music Along With Beautiful Nature Videos",
  channelName: "Piano Relaxing ",
  content: "Mongolia, the full name is the Kingdom of Mongolia, or the official political name is the State of Mongolia, is a sovereign mainland country located at the intersection between the three regions of Central, North and East Asia.",
},
{
  category: 'Tech', 
  _id: "hjdfg949",
   videoLink: "https://www.youtube.com/watch?v=tdUwWOZPn1M",
  image: "https://imageio.forbes.com/specials-images/imageserve/61d66f8dbbb58ffd41f3d174/AI-and-robotics/960x0.jpg?fit=bounds&format=jpg&width=960",
  logo: "https://yt3.ggpht.com/neUz7AkcCV6k1eJgvH7kaTOQioCO8cOlzBw28c3l25-4NFedYzCyGa8T3Elg3VefnX-736wahWI=s68-c-k-c0x00ffffff-no-rj",
  description: "ICRA 2023: The best robots that will change the world! ",
  channelName: "Pro Robots",
  content: "The ICRA 2023 Robot Exhibition, held in London, showcased some of the most innovative developments in robotics and artificial intelligence. In this report, we highlight some of the most interesting inventions that are changing our world today.",
},
{
   _id: "fgjfdgjhfg",
  category: 'Tech', 
   videoLink: "https://www.youtube.com/watch?v=Ic-Y3osvnFk",
  image: "https://www.mobimaniak.pl/wp-content/uploads/mobimaniak/2020/10/Razer-Deathadder-V2-Pro-1.jpg",
  logo: "https://yt3.ggpht.com/Vsjtlp7g17l2Jhc5aKC_Z9a3Ho9bqpg_G6aARVTmcIeqENw9vsYYWLetKatzz0VIr2az-yDocA=s48-c-k-c0x00ffffff-no-rj",
  channelName: "Hardware Canucks",
  description: "Razer DeathAdder V2 - STILL The Best Gaming Mouse",
  content: "The DeathAdder may be the best Razer gaming mouse ever made since its built for a wide variety of grip styles and hand sizes.  In this Razer DeathAdder review we look at the DeathAdder V2 and compare it to the original DeathAdder in gaming."
},
{
   _id: "eyruiey8",
  category: 'Tech', 
   videoLink: "https://www.youtube.com/watch?v=mstlDn8MxF8",
  image: "https://i.ytimg.com/vi/mstlDn8MxF8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABqbmYZSRAUMmD82Pei-nW4YG4ow",
  logo: "https://yt3.ggpht.com/0op3NrEEmhcR4jwkCnSNv4PWvHE6kj7He8C2aocxyLfx1Tx-hN1JwmxaUj5O626ooqnWSrCJ=s68-c-k-c0x00ffffff-no-rj",
  description: "I Bought a ₹50 Lakh Screen !",
  channelName: "Tech Burner",
  content: "Bhai kangle ho gaye"
},
{
  _id: "945dbjgdfg",
  category: 'Tech', 
  videoLink: "https://www.youtube.com/watch?v=-at8bWRPqw0",
 image: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
 logo: "https://yt3.ggpht.com/gU4o71ZnYWnTY6NxFvgWh2e7bG-kYF752ck0eANQ-uje7w9iKfFNV2oLD89wi3ZCfGHlq2xH6Lc=s68-c-k-c0x00ffffff-no-rj",
 description: "Top 6 Crazy Android Apps You Must Use ⚡ August 2023",
 channelName: "Trakin Tech",
 content: "Hello Friends, Aaj Ke Video Me Aapko Kuch Aise Apps Bataye Hain Jo Aapne Jaroor Download Karne Chahiye Aur Use Karne Chahiye. Aapko Kaunsa App Pasand Aaya Ye Comments Me Jaroor Bataye.Agar Aapko Ye Video Accha Laga To Video Ko Like Aur Share Karna Na Bhoole."
},
{
  _id: "948jjfgfd",
  category: 'World', 
  videoLink: "https://www.youtube.com/watch?v=es4x5R-rV9s",
 image: "https://i.ytimg.com/vi/es4x5R-rV9s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiEFilCm5E58Uy1qA9xRC0c9_Rjg",
 logo: "https://yt3.ggpht.com/-Weca7gZCAF0tBcPwbpITNNyT8Rp2omE9U4Puf8L2JmG7k7eF5hkfA74fFftt-NR4A-ajJcbwFM=s68-c-k-c0x00ffffff-no-rj",
 description: "Amazon 4k The World’s Largest Rainforest| Jungle Sounds",
 channelName: "Scenic Scenes",
 content: "In this Scenic Relaxation Film you'll be witness to The World's Largest Tropical Rainforest - The Amazon! Sit back and relax while enjoying this film with jungle sounds captured on 4K ULTRA HD footage along with relaxing music.",
},
{
  _id: "quweie84",
  category: 'World',
  videoLink: "https://www.youtube.com/watch?v=GcHYr-ciQ2E&pp=ygUGbmF0dXJl",
 image: "https://i.ytimg.com/vi/GcHYr-ciQ2E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBAPFAFyMzsK70y6Co_yAkWul_ujA",
 logo: "https://yt3.ggpht.com/ytc/AOPolaRTmZsaPLj-LSfkNW98E6z4NTFinAIFuLi4W3eOsA=s68-c-k-c0x00ffffff-no-rj",
 description: "FLYING OVER AUSTRALIA (4K UHD) Beautiful Nature",
 channelName: "Amerikano"
},
];
