import { Icons } from "@/components/icons";
import { Facebook, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Phuoc Pham Van",
  initials: "PP",
  url: "https://www.facebook.com/phuoc3003",
  location: "VietNam, TP.Ho Chi Minh",
  locationLink: "https://maps.app.goo.gl/AKhhMejmG2ynStcF7",
  description:
    "Chào mừng đến với trang web của tôi!!!",
  summary:
    "Tôi là một chàng trai trẻ, với lòng nhiệt huyết với ngành công nghệ thông tin. Sinh ra và lớn lên ở Phú Yên!",
  avatarUrl: "/me.jpg",
  skills: [
    "Next.js",
    "Flutter",
    "JavaScript",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "phuoc3003pham@gmail.com",
    tel: "0363976331",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Phuocpvp",
        icon: Icons.github,

        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/phuoc3003",
        icon: Icons.facebook,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "https://dub.sh/dillion-twitter",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Làm web",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Thiết kế các trang web đơn giản",
      logoUrl: "/atomic.png",
      start: "May 2022",
      end: "Oct 2023",
      description:
        "Thiết kế web bán hàng, hoặc web đơn giản của các đồ án môn học! có kinh nghiệm về web quản lý công việc nhóm...",
    },
    {
      company: "Ứng Dụng",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2023",
      end: "April 2024",
      description:
        "Lập trình ứng dụng di động chủ yếu cho android. Từng làm ứng dụng theo dõi sức khẻo, ứng dụng nhắn tin...",
    },
    // {
    //   company: "Nvidia",
    //   href: "https://nvidia.com/",
    //   badges: [],
    //   location: "Santa Clara, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/nvidia.png",
    //   start: "January 2020",
    //   end: "April 2020",
    //   description:
    //     "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    // },
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  certificate: [
    {
      name: "Networking Basics",
      href: "https://www.credly.com/badges/18ab2065-49a2-4512-a262-35e29b45c2c5/public_url",
      degree: "Chứng chỉ về Networking Basics",
      logoUrl: "/networking-basics.png",
      start: "2024",
    },
    {
      name: "JavaScript Essentials 1",
      href: "https://www.credly.com/badges/20b8fc77-3d99-4762-8be2-b870a1ba7882/public_url",
      degree: "Chứng chỉ về JavaScript",
      logoUrl: "/networking-basics.png",
      start: "2024",
    },
    {
      name: "JavaScript Essentials 2",
      href: "https://www.credly.com/badges/f142e2d6-058c-4806-bf3c-371a65b4cd95/public_url",
      degree: "Chứng chỉ về JavaScript",
      logoUrl: "/javascript-essentials-2.png",
      start: "2024",
    },
  ],
  education: [
    {
      school: "HUTECH",
      href: "https://www.hutech.edu.vn/",
      degree: "Trường Đại Học Công Nghệ Thành Phố Hồ Chí Minh",
      logoUrl: "/logo_HUTECH.webp",
      start: "2021",
      end: "2025",
    },
    // {
    //   school: "University of Waterloo",
    //   href: "https://uwaterloo.ca",
    //   degree: "Bachelor's Degree of Computer Science (BCS)",
    //   logoUrl: "/waterloo.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    {
      title: "Mảng",
      href: "/Mang",
      dates: "Nov 2024 - Jan 2025",
      active: true,
      description:
        "Giới thiệu về mảng!",
      technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Stripe",
      //   "Shadcn UI",
      //   "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "/Mang",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "data:image/png;base64,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",
      video:"",
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Biến",
      href: "/Bien",
      dates: "June 2024 - Jan 2025",
      active: true,
      description:
        "Tìm Hiểu về biến trong javascript",
      technologies: [
        // "Next.js",
        // "Typescript",
        // "PostgreSQL",
        // "Prisma",
        // "TailwindCSS",
        // "Stripe",
        // "Shadcn UI",
        // "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "/Bien",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "https://i.pinimg.com/736x/33/9a/c6/339ac67ea1cc43da33c95690ecf2fda7.jpg",
      video:"",
    },
    {
      title: "Hàm",
      href: "/Hamso",
      dates: "Nov 2024 - Nov 2024",
      active: true,
      description:
        "Hàm và cách dùng hàm",
      technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Shadcn UI",
      //   "Magic UI",
      //   "Stripe",
      //   "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "/Hamso",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/dillionverma/llm.report",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhQWFhUXGBgZFhcWGBsXHhcXFxgYFxYXGBgaHyggGBslGxcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLTAtNTArLS0tLS0tLi0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKsBJgMBEQACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAgMEBQEGB//EAEwQAAEDAgMEBAYOCAUEAwAAAAEAAhEDEgQhMQVBUWETInGRMkJSgaGxBhQWIzNTYoKSk8HR0uFDY3JzorLC4hU0VPDxBzV0sySDw//EABsBAQACAwEBAAAAAAAAAAAAAAACBAEDBQYH/8QAPREAAgECBAMFBQgBAgYDAAAAAAECAxEEEiExBUFRExRhcZEiMlKBoQYVM7HB0eHwQiOSNFNyosLxJGJj/9oADAMBAAIRAxEAPwD6SV3LHkrsSlhdiUsLsSlhdiUsLsSlhdiUsLsSlhdiUsLsSlhdiUsLsSlhdiUsLsSlhdiUsLsSlhdiUsLsSlhdiUsLsSlhdiUsLsSlhdiUsLsSlhdiUsLsSlhdiUsLsSlhdiUsLsSlhdiUsLsSlhdiUsLsSlhdiUsLsSlhdiUsLs8QBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQHiAm6m4AEggHQkGD2HesKSvYk4ySu0RWSIQBAEAQBAEAQBAEAQBAEAQBAEAQF+DwVSqYptJ4ncO06BQnUjDdm2lRnVdoo34zD4TBtuxtYTGVNsyewDrHtyCpVMW37uh1KPDYrWo7nCwWMbVYKjJDXTF2sAkZxlu3K5SnnimczEUnSqOJethpCGVufU1tlYY1OgDXNeWXBwJI7iVz1WqqOe+lzryw1Bz7NKztc44wjfarqhHXFS2ZOkDKNFY7R9qo8rFPsY93c+d7Etk4WmWVKtUFzWQA0GJJ59yVpyzKEeYw1OnklUmrpcjVV2RTdWohktp1W3QcyABJE93pWtV5KEr7o3SwsJVYZdpalWPwlF1PpKLSy2p0ZDjM/K1MahSp1JqVpa6XI1aVKUM1NWs7G1+y8Pc6gA4VGsu6QnInLdMbxuWpVallPlfY3PD0Lukt0tzHh8BTNPDOLc6lS1+ZzEnLl5ltlUkpTXRGmFCDhTdt3qanbHpjEvYW9Toi9ok5EFo1mTnPetarydNO+tzc8JBVnG2lroz4DCUG0qT6rXPNV1ogwG5xORCnOc3JqLtY1UqVKNOMqivmfoc7aeFFOq9gMgHI8iJHrW+lNzgmypiKap1HFbGVbDSajhGta19WqymHCQM3OI4hrVp7VttRTZZWHSipTkkn6lNTaGFZoyrVPyiKbT2RLlJRqy6L6mHPDx2Tl9Dyhtt5u6JtKjDSQQy92XynT6lGVFK2ZthYp65Eo/IngMdUr0awqvL3MLKjbjuMsfHAZgrEoRp1IuK30JwqSrUpqTu1ZlK3lQIAgCAIAgCAIAgCAIAgLaeGe4S1riOMZd+ihKcY7s2RpTlqkeVKDmiTETGTmuzGcG0mDnoUjUjJtLkJUpQV3+5WpmsIC/D47C0Wuq4sugQGNaCbnGcsuzeQFWxNScEspfwFGnUk85Sz2Q7Rx/U2dQ9r0NOldAy5OiB2MDiOK5rberO7FJKyNuF/wCntOix9etOMxEXWvJDXO7My8/tEzwCzFJuzIVpSjBuCu+SN22KDzh6NSs1tOqOo5jYi3MtgDgBpukq5h5JTcY7HJxUZyoxqVVaXM4avHMCwzK3Pt6mJBxHQ2gF1L4QeENeWmXeuXk/089+ex6B1E63Z23W/M4LmW4J44V47gArSd66fgc+SthWv/sRwH+UxHaz1hSqfjRIUf8AhanyOtQ+Fwf7o/yBVn7s/MvR9+l5foc6xhw5dY0PbXtLt5zuzPzo8y3Xkqlr6WK1oujmtqpW+p0nMY/FVmPptd1A4EiYhoEDv9C03kqUWmWbQliJxlG+hkwnwOD/AHv2lbJe/U8jTD8Oj/1fudSg4PdVcfCp9Kzta+1w9RC0NZVHxsy3F53J81dfI5FJzRRwdzQ8FzgQdOsSPRM+Zb2nnnZ2KaaVOlmV9TnbepNbXe1oAAiAMgOqFYw7bppsqYyKjWaRgW4qk9rMD8NScf0dR1N0a2vh4PoctUPZqNdVcsVPaoRb5O3yZnpbTo9LTZZFGmXEOfm43ZkODQbgTu9KjKM0nrqzSsVTVSMWvZj1Me0Dh7v/AI5qRJm8AQN0HXjqt1Jza9uxrnKjJ/6bfzOh7H67DVp0w23pGPpPMzcXjqnlmAq9SnVWeUpXV014Iu4adNyjBRs2mn4vqe9uu9WE7q5Vas7BZMBAWYeg57g1jS4ncPWeAUZTUVeTJwpym8sVdnVo0KVLUCq/fPgN4geUea8hxH7TRhLJQV7bs9Lg+CpLNVOdjsNY7LNpEsPFvPmND2L02CxcMVRjUhzODjMNLD1HB/Izq2VQgCAID1jSTABJOgGcrDaSuzKTbsi44YtPvhFMb7iAY5NJkngIWt1U/d1ZuVBp+3ojlbSrdIZiAMmN8lo0HbvJ3klbaccqNVaed3W3Iv2RUtBa/wAB+vyfJf5j6CQvKYzikKXEM0NlpL9/kX8NSvRcZ8zTVplpLTqMj/veF6mMlJKS2KE4OEnFkVIiesDJb0jG1GggljgHB0GYg5KFSGeLibaNV0pqSP0N+MpMYHlzWsIFu6RGQA35bguQoSbskekdWCjmb0OBtD2UnSi357/sb9/crdPCc5HOrcSW1NHztas55ue4uPEmf+ByV2MIx0SOVOpKbvJ3IKRAIDsP9klYgwKbSRFwaZ7ySqqwkPEvviFVrZIz4Ha76TCwNY4E3dcE55cxwU6lCM5XNVLFzpxypJ+YobYqNe94DIfFzI6uQgQJy/NHh4uKTvoZhjJxm5JLXlyIV9q1XVG1ZAc3wYGQHCOeazGhFRy9SM8VUlUU+a2JbR2s+sA0hrRMkNES7iUp0IwdzNbFTqqz0XgXVPZBVLC3qyRaXgdYjtmFFYWCdybx9Vxtp58zOzabw2m0BsUnXNyOZzOeeYz5KboptvqaliZKMUrey7r+SdHbFRr6jwGzU8IEGPNnzPesOhFpLoSji5xlKSt7W57s/bNSk2wBrgDLbhNp5QQsVMPGbuZpYydKOVWfnyMNes57i5xkkyStsYqKsitObnJyZBSIlzWl9GvTaJJa1wAEmWPBMDjaStU7RnGT/tyxTvKnOC8H6M5bPY7iDm5gpt8qq4Ux3OM+hYlWhfTXyKXcK8ndqy8XY00dh0m51MRdxbRYXdz3wPQinU/xj6m6GDp03edS/hFfqzbQNCmQ6lRlwIIfVeXGRmDY21so4VJq0paeBYjUo03eENerf6IpqvLnFx1JJMcSZMLbFWVjROWaTZFZImvZ2DFQuuda1ol0CXETHVH27pVPHYuOFpOpJaIt4PC94qZb2NOO2lTo0zmKVPfnm88zq48gvn+K4li+J1Ozpp26L9T19DCUMJC58NifZZVe8Gm21jDcROb2g5hx3SNw474XWofZ6jCm1N3k18l5FafEJyknHRL6n2ezMXTxVKGHUyyciypvY7hOQ+iVX4RiavDcV3av7r26fLz/ADM4+hDGUM8N0YSIyORGo4HgvfXvqeOaadmEMBAEBPEVOjpiPCqAgHyWAw75xMjkJ4rX787cl+Zv/Dp35v8AI4T6cHLerFyo46mrDNu1XN4pip4ag5wV3t5eJZw9NTlZmmo2OxfPainKV2ndnW0S0NGGxAqtI8emMvlUx9rf5SPJXvOGUauHw8I1ef06L0OfWnGs247r6r+PyPF1CoEB61pJAAJO7fzMLDstSSvLQ8cIMHI8Cs3MNWCGAgCAIAgCAIAgCAIAgCAIAgJU6haZaSDxBg58wovK9GTi5xd4kXGTJzPE5nvWVZbGHme9zxLoxlYS6GV9Al0LM9WQW4WuWODm6jduI3g8iFrq041IOMloydKrKlNTjyPfZPsttaibBMtLqJ3hw1Z2z1T5l88dOpwnHpf4N/T+D2kakMZhsy3/AFPy9xn0buC9kjkNnc9h+KqNxDWU2ueKmTmtEmNz+Vs68CVzOK4FYqjp7y2/Ys4Ss6U/B7n6Vt/Zb2tbWMSYFSOOgd58gefaulwqpVVGNOv71jm8Uw8czq09uZw11jjhAEBdRaHjonbzLDwfw7HaHnB3KpjI1OzlKl71izh5Rk8k9uXn/Jjr0Jy0I/2QV5DAcVq4SbzXkuab5l2th1NdGYHNLDxBXquHcShj4ytGzW5zKtF0WvEscQRyV9043u0vQjm0sjThNn1WPDrqbHNIMPeCexzGy4SDBBG9RnVhJNWb8kbadCpCSk2l5v8AQ24oNuNhluo1ynUZgExxSm5Zfa3I1VFS9h6FSmazys+2m93INHztf4WuHnVbFV40abnLZalrC4aeJqKlDeTt+/ojMatemBcCGnQO6w9MgehebocaruvFVYJRk7abq56vFfZzDwwspYeo3OKu76p2305fIhiNtUacdL1SdLZPntM+sBennPs92eOoRnX92Hp/JtoOY8A03h0iQNCRr+yfMSpqel2Ryq+VPXo9wpkSjFVy22ACXEDMxqsN2Nc5ONkubsXvweIDrXMYD1Mi4+PdboD5Lu5ae8Rsb3Qrp2aXr/BWKVaQCKYJJGb+FTotw3vyWe2RHs6t9bepECqTADD72KmTj4BiDmM5uB7+CdsrXI5KreVJbX35EujrTEU8i0HrHK+LZy3z6CnbR3M9nVvay5c+uxRicS6nbeGkOnwXTkCWzmOIPcpxmpGqpKVO2ZLXozRRqhwlpkKZOMlJXRNCQQBAatlmKkjUNqR9W5aa/ufNfmWML+J8n+TNntup5bu8qvlRv7WfUhWx72guL35cCezisqmm7EZ15RV2zL/jp8qp3/mtndzR3/zNGH2i94kPfrGZ/Na5U1Hc3U8RKaumW+26nlu7ysZUT7WfUybSeSWEkk2an9t630FZPzNOJbbi30/VmRbysb9l1xnScYa49UnxX7j2HQ+bguPxnhscZQaXvLVHV4XjXh6tnszin/p5Vr4hzgRToONznHNwdPWaxu/POTkJ3xC5vCsRVnh1GrFpx087HYxNBKpeL0ep93gcBhNnUoYA2dSetUqEcTqfQBO5dKMJVHZGmdSnRjeTOHtbbdStLfAp+SNT+0d/Zp2q/Sw0YavVnGxONnV0WiOWrJRCAIAgLcdUuaKg1ybU7fFf54g8xO9cHEcEpVqzlmcb9LHR71Ls1K2q3/Q5vtR9UlwtAESXENAnQSdSYOQzyXTwuHo4KGSC39WU5Kdd5v8A0a8FhBTNznseRm1rQ4i7cXFzQCBrG+BuW+UpTVkrEoRjS9ptN8kupL7cyTvJ1J5qaVtEaW23dhZMGWjWe97mMDernmSMrmt9bgoTnlNcHOc3GKRRtHEOFjH2x4csN0h8WnPLwQHDk5c/HYTvlLKpW1/I6PD+KvhtdTnBS068nzXjY3bWx4qCmGOBaczxDhucNy4KwtSGMpUprS9/Q9dPiNCrw2tXpO7tb15FmD2XQqUnGtSaZyLnCDAzEO1aBnpG9XsfWc8QuylfydzmcEpwhg26qtZu99DHsnBspB4pzYLgyf1jjA+hf3LtUYSjTjGW+7PPVqsauInVhtsvy/K5rVk0HP2w5ga2+o1meV2/LcoTlGK9pmO7zraQ5Hj/AGSAuLnYmi4m3UHxS9w0P6x/eq3+j1LnZY1vM19P5IHbzf8AUUfCvMNiXXtfJjmxo7As3o9SDoYtq1ud9v5PKe3Wt8HEUh1BTmDmwC0DPkjdF8xHD4tbLlbbl6ntTbzSSfbFESWkw2PAi3zCPSUTo/EJUMW9bdOXTbmZ620aLw1rq9KGlx6ogkuiSeeQ7lKM6SekjXPA4iaSlHRX5dTTS2rhWiG1WDzrZ29PqTjgqqVlBljds4cmBVaSdACsPEUl/kS7pX+FnQpsLhIBjmC31wqNTjOCp6Oom/DU2x4bipf4W89A5sGCr2Hrwr01Uhs9UVatKVKbhLdGnZvh/Mqf+tyV/c9PzNmG9/5P8mSqVQNSJ5mFqSbMymo7leIcC2CRB4OGcZ5ZLMU0yFRqUbMze02a3Zcbhr3LZ2kjR2EN+XmaMLa0Q0gjUy4fcoSu3qbqWWKsvzLWVmnKRPbKi4tE4zTI4/xP2P63rZQ2fmMR/j5fqzKt5XPEB9CPZO4UmtDffAILjploY3lUnhE5t8jqLiLVNJL2jhVqrnuLnkucdSf95DkMlbjFRVkc6dSU3mk7kFIgEAQBAEBZQeAesJaRDhyO8cxkRzChOLa03NlKSjLXbme1rQAxhlrd+lzj4TyPQOAHasQi/eluTqzjpCGy+r6lS2GgIAgMlOg9j3PY8AuBBls5Eg794IBnkoSgpbmuEZQm5Re/gQxGDfUcC94MADJsdUTA80wOQA3JGCjsRqU5VJXk/odDCPNNtrYtmYIBk8eMrVXwtKvFxmty5h8ROhpDY1DFtOTmkTrGY7j9681W+y0YvPhqjizuU+O5llrQujM5jWi1hkEl28agANM8Id9Jejwkayprt7ZkrO3Px+ZxKypRk1R91u/8fLUgrRoOXjqTXYzBNcA5pqOBBEgjq5EHVUMdsjr8K3Z9hj6GAo29LQotumPeWmYidG8wqFOnOp7p0sRiqOHt2jtcqa/ZpzFKj9QPwrZ3er0NC4lhn/kW4ajs95tZRokwTHQjQCT4qjKjUirs2U8bQqPLF6l/+G4L/T0vqR+FQySN3bQ/qH+G4L/T0vqR+FZySHbQ/qY/w3Bf6el9SPwpkkO2h/UydLZeDJFuHpTu95aIjnbkoTptxafMlCrFvQ4GKwxDiIJzOcXct5gZzu4LyVOvGKcZO1nbpr8ld+ptrUJZrxV7/PT5uyI4odZew+zlSUsElJPRvf1ODxmKWJuuaRbs3w/mVP8A1uXYr+581+ZSw3v/ACf5MzY7o7hdMwNOEn81inmtoV6/Z5vaI1+jsbN0QbfzWY5rsxU7LLG97cj1vRdGfCtuz4zCe3mC7Ls3va55hujh0XeCZ7OSTzaXFLsrO19tTzCmleLbp3T2f8pPPbUxS7LOstzZj/E/Y/resUNn5lrEf4+X6syreVwgCAIAgCAIAgCAIAgCA37GwPS1IM2gEkjuAntPoVbEYhU1ZPXoXMHhe2nr7pIYGi59jK0PzilWaaTzGRIa8AvHMCOaoVsdiEl2UU+t77eHidCPC6V3eT8P5MuKwVSn4bC3nu7xkupTqxmtGcmrQqUnaSKFsNIQBAEAQHOxH+dwP7139KoY7ZHY4Vuzs+z79B/9n/5rXgP8it9oN4fM+Vp1C3QroWR56Mmtj6D2LYoGuAcjY/fA8E79yq4lWgdbhdS9e3gz6q/mPrvyVK39sd+/9zC/mPrvyS39sL+P/cL+Y+u/JLf2wv4/9xbhXdYZ8f0t3oUZ7fwbKT9r+bnxm36hG1HMk2+12utkxcXZmNJ5qWAw9JVMyir+Rp4pOXZWu90XLtWPPFdfFOptL2xMRmJyd1T6CVGcVJWZiVWVNZo7/voNl9LXBN9NsGM2TPg6Zjyp8xWiclDQzh1UrpybSt4Gmng6z2tLX0zcJaDTA1aXAeEdYAkZZ66TB1EuRuVCpJaSXp/Idg6oIaXs6zy0RTESDVgnrcKU6eOE7RP/ANmHRqJaten8mLab6tC3Nhvu0ZEW25ET8rRTg1M0Yh1KFtU7+Bp2Vi6b29Yta8ai094gFJxnyVzbhqlOcfaaT8i/G1GkttMgNiYIzucd/aFOjFpO5sryi2srvZfqzLUeGguOgBJ7BmtrdldmmMXJpIzPwNQxV6RweB8CCLCN7NJu+XOvJUO3lnzX+R2O6QVPLbXqaaLrg0tzuiPPor99LnIyvNlNT8RDTTAaW7iQJmc3NOon1QoRhd5mbJVLLIkrCjV6pZa3MON1ouyFwF2sdX0lJx1zX6eRmnK6yWXPzM62GgIAgIVKrW6kBZsYuZamPHijvWcpjMMJiiXQ6M9EkrCLubVEkdLBvLGkAxcCDIDsjxacjluK+cY7i8lxKVSOsV7NvBfzdntsBg1HCRi93r82QxmFNOnDix1I+KxzSw8vauJJa0DhTqAr0UcVScFUzKzIqhUlLLGLbGO2jTdSp0aTgbc32tc1sx4ocSQJLspMZCclb4biadarJQ1styhxrC1aFGLnpd7czAu0eaOhQqYcNAeA528y77Mlol2jejLkOxS9pXJmthfJH0nBRtV6km6HQ5rhnkQeY3qwik1ZniyYOdiP87gf3rv6VQx2yOvwrdn13sh2Yyt0d7nttuixt03WzOWWgVTD1ZQvYs8RwlOvlztq3RHH9zND4yt9X+Ss96qdF6nM+6aHxS9DXs3Y9Ki+9r6pMOGdPyhE6LXUrTmrNL1LGGwNGhPOpS26HUbVjx3/AFQ/CtVn0+pezLq/9v8ABa2qD4z/AKofhWLPp9TKa6v/AGntw8p/1Y/ClvD6mbrq/T+C3DHrDrOOurA30woz2/knSazb/Q+I9kH/AHZ3/jN/mVjA++VuKfhfNGhdU4Bl2mPez5vWEZqre4Z9mVKIYekuuuyi7wbCN3FxB+b36Kik3oYw0qUY+3e9/HaxrrYjDBpsHWgxlUjU2gA6ZQteSf8AbFjtKC2/8thVxGGvyEtu4VZi9oJkx+jkcZnlOcs/7Yi6lHl/5FW0qmHNM9HN8jM38cyJy0jhos01NPUjiZUJRfZ7/Mq2Xho658w5cVYRpoU7e0zorJYOdtNlWqw06I3w50wcj1msnIu3SYG7WYqYirf2EdLB4e3+rLlsaqVWo+nbc205OcGlryNC05w124mOMAbswoLroYrYuV3damik60gjcQR5tFZaurHPUrO5KqwDTwTm3s4do08yxF6WJTVndbMk1toJOpENHI6nsiR5+Sw3mdkSSyq757FSmaggMG0KjgQAYEblKKISZiUyAbmYaC48Ggk9wUHNIjnu7R1NTcDVaHPcAywXWum5wDg0wAOJGsag71pddN2Rs7Oqk5S0tr4nRaZE8VsNhezFOGsH0Ly2L+yuHqtypScX6o7uH47VgkqiuvRnHxtJxe5xGp3cNy4tfgWLoLRZl4fsey4fx/A1IKGbK/H9zRs+nDZ4r0/AcK6OGzSVnJ3PJ/abGrEYvJB3jFW+fM0uGS7h5wxMHONeO7dl3I3YzFXND8NBA6Rhy3Fcj72laT7CejtstfE6HcFdLtY6o9ww6q65zi1Ac7Ef53A/vXf0qhjtkdfhW7PuNq1g22Q4zPguLeGsaqjRi3ex0MXUjG17/JldFrXUzU98ynK87lKTall09CEFCVPtNfUrwdRtR1vvgyn4QlSqKUFfT0NdCUKssqv6kcTWYx5bFQxGfSHeAftWYxlKN9PQxVnCE8vtepdjmtpx8IZn9IRooU80+nobMQoUkt9fEswrmuYX9eBOV53CViTcZZdCVJRnTc9fUlgMS1zhF2/VxO7gpVINR1sRw9WMp6X9T472Qf8Adnf+M3+ZbcD75r4p+EvNGhdU4B5KGbAFAeoYCi5RW7JKLeyYhY7SHVeqM5J9H6BZUovZmHFrdHhndrunipPYwrX1M2y8Q+nTY2pSde3IlpaQ6AcwZyk5mQNVz+xmndo7LxVKSaTsrF1BhAz1JLnRpLiXGOWavQjljY5NWeeTZeynOeg4nTs5nkEcraGIwb15EzWAADRpJuOucTA0Gg4nmo5Lu7JdokrR9Skmcyp2tsa276sLJgIDJtJktnSDqdwORS9ka6l7aGnDbGohzuke54Y8h2tMQ0XOEQSeq2qQQ6Oo3iYqTrzZYp4Km287bs/JGivXpUSaRczozGQbxa+nVDw2CS2o1ronQuAMKCUpa8zbOpSotwusv76NadHqc/G7aL2taG3WtLb3iC5rmdG4FoO8BrtZBG9boUHuVquLlUSSV7c3z0t/I2c+WAHUZfcrFrEKfupM1ITCAIAgKatGcxks3BFmG4pcWNCwCJeJhUp8Qw8KyoOXtM2KlJxzJaGPGYHEvrUKuGpdKaLi4gua0ZxbNxGsHTgsY1bHT4W9ZHUrY7ab4u2dTMae/N3/AD1QinHZnVnGM/eVw3HbTDbRs6nbw6Zu/Xx1hpt3bCjFRypaEaWL2k0y3Z1MH9838azK8tGzEKcIO8VYVMTtJxk7Npk8emb+NZWZKyZiVKnJ5nHUlWx203+Fs6mY/XN/GsRTjsyU4xn7yuesx20wC0bOpgGZHTN36+OsNNu7YioxjlS0IUcXtJpluzqYPHpm/jUm5NWbIwpwg7xjY59bCYx+LOKxOHFEGmKeT2uEgyNHE559ys4NWmU+Ju9L5o6GHphzg0uDQTBJ3LozdldK5xIRUpJN2OxVrGnRhjj1YALC0RLtXBtRw4jTWM1ThHPU9pbnRqSVOjaL28jj167nmXuLjpJ4K5GKjojmynKbvJlakRPOkLTIMGFweMygnFTgpeZ6j7O4R14z9txSa2PfbT/KPeVw70P+TH6/uej+6f8A9ZfT9jx2IcciSRMxO/SV1OF4iMaypwgop9Dk8Z4UqeFlVzybVt7dT1emPFBATpMk56ASez7yYHnUZOxKEbvXY8qPk+ocBwCzGNkJSbZFZIhAEAQEajJBB0IhDDV1Y5lfF1nC11QwBYQ3qyMgQ6PC0Gs6KMaMVqa5Tqy0lLwMzWALckkQUIrYkskzpYPCVGC9zS1pIaLhEkgnIHOIBz5haHVhKWVPUsdhUjDPJWRZiq4Y2SJzjJSZpnPKrk4qzHRGQbT1mZGJM57t53b1r7WPUnlq/D9UVuqvAJNJwAJBzGRDOkI18kgp2kWRedJtxenl5kg6pbd0RtgGS5oEODXDMneHN707WHUko1Gr5dPNCuajLrqThaCTm0wBbJyPy29/aiqxezMSVSN7xeivy2I4bFNfprwOq2EIVIy2L0NhQ7wl4TH3+9Hl3zL8kdOlbsF5HT2RtDobsrro3xpP3r1VHAyhTyynd3bv5mujjFTk2o6HS90f6v8Ai/JT7n4lj70Xw/Ue6P8AV/xfknc31H3ovh+pdg9tGo8MFOJnO7SBPBa6mGyRzXN1DH9rNQUTa7DA1G1SwXta5gdccmuLS4RpmWt7lVOgZtobVNJwBZMiQbvyVijh+0V7lLE4zsZJWuZfdH+r/i/Jbu5vqVvvRfD9R7o/1f8AF+SdzfUfei+H6mPaW1ulaG225zrPHlzW2jh+zle5WxON7aGW1jiY89Tzhc/j0pRwbcXbVHS+zMIzx6UlfRnOFQ8T3leF7xV+J+rPpXdqPwL0R1MO86HgD5j9uS+hcPrTlFU6lrqMXp0f66HyzimGpRm6tK9nOSafJp8vDUuXROQRpU2OqBtSoabbHGRA6wLQ0Z9p7lUxVGFSzlG5bwmLq0ZOMKjgmr6c7HjqNIR76TIb47MiXMafF+U4/N4ZqosHR+BFyXFcSn+PL1XgMTQptLbKt8vjwmnK0nQCcjGa24fD0ozUlBJmnFY/ETjkdZyT5XXmTXROcAJyGqPQyk3ojS0BrHT1jLZE5DwtSNc405ZrU25SXI3pKMHzZAEOnqgECQRO7cZJ/wCYUtY8yCtK+hSpmoIAgCAIDG/AuqVQ1kS4TmYGQz+9JVFCOaRmFGVWeWJoZs6gz4Wr0jvIoZ97zl6itHbVZ+5G3i/2LSw9Cn+JO76R/c1U8XZ8BSZS+UffH9509Kj2Dl+JJv6Il3qMPwoJfVlNRznG57nPO646dg0C3QpxhpFFapVnUd5u5nx1Avba3WVJmipBzVolzsRWzmjTg6yX5gtDSCZzmBnrktCpLqb3UrW1ivqBVrllvQsLeAuH6M0tRp1fUsdkk73MZ60o5cit8yXtjE9GKRpi0MDMi4GAGiSR+yPNksdlG97klUxGVRyqy8z3EYnEuDx0TAHBwPhZB4AIE8wD5kVKCd7iVTESi45VqrczDhdnWEF/hbhw+9WVYqQw/Z+9ubm6hacVHNRmvB/kW6Dy1YvxRv6JvAL4/wBrNu7ep9EyxtsYq3hFfU+CprA0r72PC8Td8VO3UguoUAgJ0azmmWktOkgxkoTgp6MnCo4O8dy//Eavxj+9au7QN3e6vxMqr4hz4vcXRpJmJU4UlDY1zrSn72pUtpqCAIDPjmksMclx+OU51MHJQV9Ud77N1YUsfFzdlZrU5kcl4RYeq37r9GfS3iqCV3NeqOrh2QJmTAHZG71r6JgcM6UFKbblZLytyPlPEsZGtNxppKKlJ6X1be+vWxcr5zCDqNxybceyVweMzmpQUG9nset+zVKjOFR1Unqt/I89ou+KP0D9y43aV+rPT93wXww+h6MIW59GRG+2OWsK7w6dV4mKk3bX8jlcao4WOCm4KN9NrX3RNeqPAFpNojxjqeAPijnGvdxUF7TvyNr9hWW5BjyNOzjI4EKTSe5CMnHYl0hPVaAJ3NBk7+ZPYo2S1ZLM3okHUHASWnny7eHnWVOPUx2clyK1IgEAQBARfTByIB7UB6BGiAsZSJz3cTkO9UsTj6GH0k7y5Jat/Is0MJVraxWnV6Ii8QSAQeY396tQk5Ru1Y0zioysnc0YKu5l7mGHBojTe9g39q5vGakqeFcob3X5lrAu1RtdDfUr1rXB7paWv8k5hpO5cXAVsRLEQU3p8jpVnLs5X6MubVLaNGCRk7fzVb7S1qlKrHI2t+Z0uEQUqCujXs9j6h1cBnnJ13dq52AhXxT96SXW7LtZwprZXKOkdxdw1OoyKrTqV6c3GUndeLNmSNtkZPZK4F7IM9Xt0cZX0XA+4eQ4m05qxyFdOYe3Hie8qp3DC/8ALj/tX7G/vVf45erPFZjFRVoqyNMpOTuyzCsBewHQuaD2EgFJu0WydKKlNJ9T7J2z6Iy6JmnALj9vU6s9H3Wj8KPPaNH4lmnkj7k7ep1ZnulH4V6A4Cj8Szd4o3+ZO3qdWO6UfhXoPaFH4lmseCPuTt6nVjutH4V6AYCj8SzXyR9ydvU6sd1o/CvQ+f29hA2uGU2xc1sAeUSRlw0C6OGm3TvJnGxtFRrKMFvYqxmyH02l1zHWkB4aZLSYInvHes08TGcsqI1sDUpQzM56sFI9YwnRVcXjaGFip1pWT0+ZvoYarXk401dok+kRmQq+G4thMTU7OlO78mbq3D8RRjnqRsiC6RSNWFwVZwuptdvEtMcyJkKrXdBySqb8i9he9Ri5Ub25m92yqsloxDTUAk0xVddpMRKq/wDxr+6dB99tfPr/AHwOdiqNVvwl8T4ziYMdpgwrFBYZyfZ2uvoUcTVxmS1W9n9SqgBcJ01PMDMjuCtT0iUqavJXIEk5nMnMniTqVJKxFtt3PWtJMDMnRYbtqwk27Im98C1vzj5X9vLfqd0RSb1ZOUrK0fmW08M5pa4lo0dro06F0eCNdea1zqx1RthQkmn8/kVYmiWPc07j/wAehbYSzRTNVWDhNxZWpGsIAgCAlTeBMiTunTzjeqOKo4itLJCWWPNr3vJdC5QqUKcM0lml0fu/yHvJ1P5dgU8NgaGH9xa829W/ma6+Kq1vfenRaL0Iq2VzTgqDn3tZm4tEbtHsO/sXK4zSnUwrjDe6LuBTc2l0NNPDVg15eBa1rxkW5G0iOquHw7DYmGJi6i0OlVUuzlfozS4e80ex3rCqfamLdSNl1OnwZ/6CJUtoVmNaxh6ondnmZ1O4TouZT4nXjRVNJxa2dvodSVCjNuUt/oevxBeZcMzwESqsq9StPNOOr8GRUFBWTM3sipNa9gaABaTAEZlxJPaSSvpmCbcNfD8jxvEoqM0o/wB1OSVaqZsry78ijSyZ12nu318uYonrNum2RdHCc1yYfeOZXtb5Ho6n3JkeXNfluWV7bjZ4O6V1oZsqzbnnKuTO8mxPA/CU/wBtv8wSp7jM0fxI+aPt6up7Fwz1ZE+bQfYsA8J+z0BASn1oA3d2/cgOFth4GMpEmAOjk8Ou5dGgr0JLzOLi2liot+B1NukChU0Ex5zI7zA9CrYdN1EXsa0qEj4xdg82XYR0HPgvK/ayLeGhb4v0Z3uAfjy8v1Rbingt13rgfZqElj43XJ/kdbjX/CPzRkX0k8WU1KFcuBptqluWbQ4tmc9F4/jMavfk4p5bR2Pf/Z6dFcOak45rytex87QwWI6a2x/SZENtd0jamrnnKdZJdMHnK705wyPX2bbczyFKhV7WPsvtM2suVr+lj6KlRqgk1G1A3deHAea7fC43AI1FXnnva2lz1H2olReHp5Gr31tboaKb4IPD08QvVSV1Y8TGWV3Jmj5JEcyAR2g/YoqT5olkT2aPC4AQ3MnV3LgOXP8A2STerDairRK1M1nVw+La0CHAza4yXNhwpimWuAab2QJidVRnSk5PQ6VOtCMUk/7tr1RzsTbdDTc0BoB0m1obMbtFapJqOpSrNObyu6K1sNQQBAEAQBAEB6x5BkEg8QY9Sw0nuSjJxd0yb8Q8iC9xHAuJWFCK1SJOrNqzbPWYl4EB7wOAcR6JWHTi90ZjWqRVk2e+3Knxj/pu+9Y7KHRGe8VfiY9uVPjH/Td96dlDoh3ir8TK6lRzs3Ek8yT61NRUdjXKcpaydyKyRCAICVJ5aQ4aggjtBlYaurEoyytNcjue6Y/FD6X5Kj3FdTqfej+H6j3TH4ofS/tTuS6j70fw/Ue6U/FN+l/ancV1M/er+H6j3TH4ofS/tTuS6mPvV/D9R7pj8UPpf2p3FdR96v4fqcraWNNZ95AGQAAzyE79+pVqlSVONihiK7rTzNWM7nkwCSQNJMx2cFsUUtkanKT0bPFkieKMoxlurklJx2YhYVOC1SXoHOT0bZ6pkSbKzhkHOA5Ej1KLjF7okpyWibJe2qnlv+kfvTs4dF6Eu1n8T9WQfVc7wnE9pJ9ayopbIi5ylu7kVkiEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQE7VgyLUAtQC1ALUAtQC1ALUAtQC1ALUAtQC1ALUAtQC1ALUAtQC1ALUAtQC1ALUAtQC1ALUAtQC1ALUAtQC1ALUAtQC1ALUAtQC1Af/Z",
      video:"",
    },
    {
      title: "Đối Tượng",
      href: "/Doituong",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Đối tượng là gì? Tìm hiểu thôi nào",
      technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Shadcn UI",
      //   "Magic UI",
      //   "Stripe",
      //   "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "/Doituong",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "https://i.pinimg.com/736x/5c/55/6d/5c556d8c7ea409bd4ad2c49f4a38c29e.jpg",
      video:"",
        // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Module",
      href: "/Moduleaa",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Module?",
      technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Shadcn UI",
      //   "Magic UI",
      //   "Stripe",
      //   "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "/Moduleaa",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "data:image/jpeg;base64,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",
      video:"",
        // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Xử Lý Lỗi",
      href: "/XuLyLoi",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Lỗi sao, nghe thôi đã sợ rồi",
      technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Shadcn UI",
      //   "Magic UI",
      //   "Stripe",
      //   "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "/XuLyLoi",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "data:image/jpeg;base64,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",
      video:"",
        // "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Điều Kiện",
      href: "/Dieukien",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Let's go",
      technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Shadcn UI",
      //   "Magic UI",
      //   "Stripe",
      //   "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "/Dieukien",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "data:image/jpeg;base64,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",
      video:"",
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Bất Đồng Bộ",
      href: "/BatDongBo",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Xử lý bất đồng bộ, cùng tìm hiểu nào:))",
      technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Shadcn UI",
      //   "Magic UI",
      //   "Stripe",
      //   "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "/BatDongBo",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "data:image/jpeg;base64,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",
      video:"",
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Vòng Lặp",
      href: "/Vonglap",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "Vòng lặp vô tận ư, thú vị đó!",
      technologies: [
      //   "Next.js",
      //   "Typescript",
      //   "PostgreSQL",
      //   "Prisma",
      //   "TailwindCSS",
      //   "Shadcn UI",
      //   "Magic UI",
      //   "Stripe",
      //   "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "/Vonglap",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "data:image/jpeg;base64,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",
      video:"",
      //   "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
