import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "hats",
    // imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    imageUrl:
      "https://unsplash.com/photos/V0OsHPIh4To/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8aGF0cyUyMGNvbGxlY3Rpb258ZW58MHx8fHwxNjU1OTY4NjI3&force=true&w=640ntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    // imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    imageUrl:
      "https://unsplash.com/photos/jddw6iA31sE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8amFja2V0cyUyMGNvbGxlY3Rpb258ZW58MHx8fHwxNjU1OTY4NzM1&force=true&w=640",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "women",
    imageUrl:
      "https://unsplash.com/photos/xXJ6utyoSw0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTV8fGNsb3RoaW5nfGVufDB8fHx8MTY1NTk2ODM4OA&force=true&w=640",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "men",
    // imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    imageUrl:
      "https://unsplash.com/photos/5hDqrxz5Rpc/download?force=true&w=640",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
