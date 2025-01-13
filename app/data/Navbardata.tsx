type NavItem = {
    label: string; 
    link?: string; 
    children?: NavItem[]; 
  };
  
const menuItems: NavItem[] = [
  {
    label: "Khóa học",
    link: "#",
    children: [
      {
        label: "Chương trình học theo từng môn",
        link: "#",

        children: [
          {
            label: "Chương trình học theo từng môn",
            link: "#",
          },
          {
            label: "Chương trình học theo từng môn",
            link: "#",
          },
          {
            label: "Chương trình học theo từng môn",
            link: "#",
          },
        ],
      },
      {
        label: "Chương trình học theo lộ trình",
        link: "#",

      },
      {
        label: "Chương trình học chuyên ngành và đầy đủ",
        link: "#",
      },
    ],
  },

  {
    label: "Lich đào tạo",
    link: "#",
    children: [
      {
        label: "Chương trình học theo từng môn",
        link: "#",
      },
      {
        label: "Chương trình học theo lộ trình",
        link: "#",
      },
      {
        label: "Chương trình học chuyên ngành và đầy đủ",
        link: "#",
      },
    ],
  },
  {
    label: "Doanh nghiệp",
    link: "#",
    children: [
      {
        label: "Chương trình học theo từng môn",
        link: "#",
      },
      {
        label: "Chương trình học theo lộ trình",
        link: "#",
      },
      {
        label: "Chương trình học chuyên ngành và đầy đủ",
        link: "#",
      },
    ],
  },
  {
    label: "Lich đào tạo",
    link: "#",
    children: [
      {
        label: "Chương trình học theo từng môn",
        link: "#",
      },
      {
        label: "Chương trình học theo lộ trình",
        link: "#",
      },
      {
        label: "Chương trình học chuyên ngành và đầy đủ",
        link: "#",
      },
    ],
  },
  {
    label: "Blog",
    link: "#",
    
  },
  {
    label: "Về chúng tôi",
    link: "#",
    
  },
];

export default menuItems;
