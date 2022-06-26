const SHOP_DATA = [
  {
    title: "Hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25,
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 18,
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 35,
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 25,
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 18,
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 14,
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18,
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14,
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 16,
      },
      {
        id: 50,
        name: "Blak Snapback",
        imageUrl:
          "https://unsplash.com/photos/ai5E0zE7S_E/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjZ8fGhhdHN8ZW58MHx8fHwxNjU1OTgwODk5&force=true&w=640",
        price: 18,
      },
      {
        id: 51,
        name: "Blak Kint Cap",
        imageUrl:
          "https://unsplash.com/photos/jlschz0iV7Q/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjN8fGhhdHN8ZW58MHx8fHwxNjU1OTgwODk5&force=true&w=640",
        price: 25,
      },
      {
        id: 52,
        name: "Grey Cap",
        imageUrl:
          "https://unsplash.com/photos/FwVnAY_xMaY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MzN8fGhhdHN8ZW58MHx8fHwxNjU1OTgwODk5&force=true&w=640",
        price: 25,
      },
    ],
  },
  {
    title: "Sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 50,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 40,
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 40,
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 60,
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 50,
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 60,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 45,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 50,
      },
    ],
  },
  {
    title: "Jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 75,
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 90,
      },
      {
        id: 20,
        name: "Green Hooodie",
        imageUrl:
          "https://unsplash.com/photos/nYnwq0iN2jI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MzB8fGphY2tldHN8ZW58MHx8fHwxNjU2MjM5MTg0&force=true&w=640",
        price: 90,
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 65,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 85,
      },
      {
        id: 43,
        name: "Outstanding Trench",
        imageUrl:
          "https://unsplash.com/photos/Hng0RpHDgHI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8amFja2V0c3xlbnwwfHx8fDE2NTU5ODA0NjI&force=true&w=640",
        price: 65,
      },
      {
        id: 44,
        name: "Black Jacket",
        imageUrl:
          "https://unsplash.com/photos/EvxwJ6ls2vc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8amFja2V0c3xlbnwwfHx8fDE2NTU5ODA0NjI&force=true&w=640",
        price: 70,
      },
      {
        id: 45,
        name: "Dark Blue",
        imageUrl:
          "https://unsplash.com/photos/Lss2BdwBKho/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8amFja2V0c3xlbnwwfHx8fDE2NTU5ODA0NjI&force=true&w=640",
        price: 50,
      },
      {
        id: 46,
        name: "Grey Jacket",
        imageUrl:
          "https://unsplash.com/photos/CjB-8NY5at8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fGphY2tldHN8ZW58MHx8fHwxNjU1OTgwNDYy&force=true&w=640",
        price: 70,
      },
      {
        id: 47,
        name: "Black and Brown Jacket",
        imageUrl:
          "https://unsplash.com/photos/WIWVM_Z1x7c/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTN8fGphY2tldHN8ZW58MHx8fHwxNjU1OTgwNDYy&force=true&w=640",
        price: 70,
      },
      {
        id: 48,
        name: "Blue Jeans Jacket",
        imageUrl:
          "https://unsplash.com/photos/i49yJtWD57w/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTZ8fGphY2tldHN8ZW58MHx8fHwxNjU1OTgwNDYy&force=true&w=640",
        price: 70,
      },
      {
        id: 49,
        name: "Dark Green Jacket",
        imageUrl:
          "https://unsplash.com/photos/9wM5SCjhsOM/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mjl8fGphY2tldHN8ZW58MHx8fHwxNjU1OTgwNjAz&force=true&w=640",
        price: 60,
      },
      {
        id: 77,
        name: "Blue Jacket",
        imageUrl:
          "https://unsplash.com/photos/GIJilzvYLP8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8amFja2V0c3xlbnwwfHx8fDE2NTYyMzg2NDM&force=true&w=640",
        price: 70,
      },
      {
        id: 78,
        name: "Brown Hooodie Jacket",
        imageUrl:
          "https://unsplash.com/photos/6TIoPIpMvLc/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTF8fGphY2tldHN8ZW58MHx8fHwxNjU2MjM4NjQz&force=true&w=640",
        price: 50,
      },
      {
        id: 79,
        name: "Dark Green Jacket",
        imageUrl:
          "https://unsplash.com/photos/qQB04yQdosk/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTV8fGphY2tldHN8ZW58MHx8fHwxNjU2MjM4NjQz&force=true&w=640",
        price: 70,
      },
      {
        id: 80,
        name: "Brown Coat",
        imageUrl:
          "https://unsplash.com/photos/hwLiTFTGJCY/download?force=true&w=640",
        price: 70,
      },
    ],
  },
  {
    title: "Womens",
    items: [
      {
        id: 23,
        name: "Black Dress",
        imageUrl: "https://i.ibb.co/vQ6BRgQ/Black-Dress.jpg",
        price: 45,
      },
      {
        id: 25,
        name: "Blue Dress",
        imageUrl: "https://i.ibb.co/T145CDT/Blue-Dress.webp",
        price: 45,
      },
      {
        id: 69,
        name: "Green Dress",
        imageUrl: "https://i.ibb.co/YtFQzmF/Green-Dress.webp",
        price: 45,
      },
      {
        id: 74,
        name: "Purple Dress",
        imageUrl: "https://i.ibb.co/7Wmjwk3/Purple-Dress.jpg ",
        price: 45,
      },
      {
        id: 28,
        name: "Dark Red Dress",
        imageUrl: "https://i.ibb.co/zVj5GCf/Dark-Red-Dress.jpg",
        price: 45,
      },
      {
        id: 24,
        name: "Black Sleeve Dress",
        imageUrl: "https://i.ibb.co/2ZS2j86/Black-Sleeve-Dress.webp",
        price: 50,
      },
      {
        id: 27,
        name: "Brown Sleeve Dress",
        imageUrl: "https://i.ibb.co/XVHFxqH/Brown-Sleeve-Dress.jpg",
        price: 50,
      },
      {
        id: 42,
        name: "Gray Sleeve Dress",
        imageUrl: "https://i.ibb.co/y87Mns6/Gray-Sleeve-Dress.webp",
        price: 50,
      },
      {
        id: 26,
        name: "Blue Geometric",
        imageUrl: "https://i.ibb.co/pRHN7Qf/Blue-Geometric.webp",
        price: 50,
      },
      {
        id: 29,
        name: "Dark Red Geometric",
        imageUrl: "https://i.ibb.co/HtS2v7J/Dark-Red-Geometric.webp",
        price: 50,
      },
      {
        id: 70,
        name: "Green Short Sleeve",
        imageUrl: "https://i.ibb.co/JBWctDk/Green-Short-Sleeve.webp",
        price: 45,
      },
      {
        id: 71,
        name: "Maxi Dress 1",
        imageUrl: "https://i.ibb.co/gVGSdcz/Maxi-Dress-1.webp",
        price: 60,
      },
      {
        id: 72,
        name: "Maxi Dress 2",
        imageUrl: "https://i.ibb.co/xXfL3mb/Maxi-Dress-2.webp",
        price: 60,
      },
      {
        id: 73,
        name: "Maxi Dress 3",
        imageUrl: "https://i.ibb.co/MktqWFy/Maxi-Dress-3.webp",
        price: 60,
      },

      {
        id: 75,
        name: "Swing Dress Maxi 1",
        imageUrl: "https://i.ibb.co/JWYc1c1/Swing-Dress-Maxi-1.webp",
        price: 25,
      },
      {
        id: 76,
        name: "Swing Dress Maxi 1",
        imageUrl: "https://i.ibb.co/tx9Pj8J/Swing-Dress-Maxi.webp ",
        price: 25,
      },
    ],
  },
  {
    title: "Mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 25,
      },
      {
        id: 31,
        name: "Floral Shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20,
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25,
      },
      {
        id: 33,
        name: "Pink Shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25,
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40,
      },
      {
        id: 35,
        name: "Burgundy Shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25,
      },
      {
        id: 36,
        name: "Blue Shirt",
        imageUrl:
          "https://unsplash.com/photos/2O1EUSTRBrY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjB8fG1lbiUyMHNoaXJ0c3xlbnwwfHx8fDE2NTU5NzczMjA&force=true&w=640",
        price: 30,
      },
      {
        id: 37,
        name: "Blak Shirt",
        imageUrl:
          "https://unsplash.com/photos/t8yimzM2bEY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjJ8fG1lbiUyMHNoaXJ0c3xlbnwwfHx8fDE2NTU5NzczMjg&force=true&w=640",
        price: 30,
      },
      {
        id: 38,
        name: "Standing Shirt",
        imageUrl:
          "https://unsplash.com/photos/KAPRQjlSzCA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8bWVuJTIwc2hpcnRzfGVufDB8fHx8MTY1NTk3NzMyMA&force=true&w=640",
        price: 18,
      },
      {
        id: 39,
        name: "Brown Shirt",
        imageUrl:
          "https://unsplash.com/photos/vKnRYW-mtek/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTN8fG1lbiUyMHNoaXJ0c3xlbnwwfHx8fDE2NTU5NzczMjA&force=true&w=640",
        price: 25,
      },
      {
        id: 40,
        name: "White Shirt",
        imageUrl:
          "https://unsplash.com/photos/hAMJpesMeDE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjR8fG1lbiUyMHNoaXJ0c3xlbnwwfHx8fDE2NTU5NzczMjg&force=true&w=640",
        price: 20,
      },
      {
        id: 41,
        name: "Mixed colors Shirt",
        imageUrl:
          "https://unsplash.com/photos/1u5NxJITm0E/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDR8fG1lbiUyMHNoaXJ0c3xlbnwwfHx8fDE2NTU5Nzc5OTE&force=true&w=640",
        price: 25,
      },
      {
        id: 81,
        name: "Dark Green Shirt",
        imageUrl:
          "https://unsplash.com/photos/4V4t0JcOM5E/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8bWVuJTIwc2hpcnRzfGVufDB8fHx8MTY1NjIzOTQyNg&force=true&w=640",
        price: 35,
      },
      {
        id: 82,
        name: "Black Shirt",
        imageUrl:
          "https://unsplash.com/photos/6RTha8KJEqI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTZ8fG1lbiUyMHNoaXJ0c3xlbnwwfHx8fDE2NTYyMzk0MjY&force=true&w=640",
        price: 35,
      },
      {
        id: 83,
        name: "Grey T-shirt",
        imageUrl:
          "https://unsplash.com/photos/sYhUhse5uT8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDZ8fG1lbiUyMHNoaXJ0c3xlbnwwfHx8fDE2NTYyMzk1NDE&force=true&w=640",
        price: 18,
      },
      {
        id: 84,
        name: "Black T-shirt",
        imageUrl:
          "https://unsplash.com/photos/wzRKn-AjKf4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NTB8fG1lbiUyMHNoaXJ0c3xlbnwwfHx8fDE2NTYyMzk1NDE&force=true&w=640",
        price: 22,
      },
    ],
  },

  {
    title: "Kids",
    items: [
      {
        id: 53,
        name: "Sweater",
        imageUrl:
          "https://unsplash.com/photos/JZ51o_-UOY8/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8Y2hpbGR8ZW58MHx8fHwxNjU1OTkwMjA2&force=true&w=640",
        price: 20,
      },
      {
        id: 54,
        name: "White Polka",
        imageUrl:
          "https://unsplash.com/photos/e6lWMBIgNso/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OHx8Y2hpbGQlMjBjbG90aGVzfGVufDB8fHx8MTY1NTk5MDIyNA&force=true&w=640",
        price: 25,
      },
      {
        id: 55,
        name: "Black T-shirt",
        imageUrl:
          "https://unsplash.com/photos/fwJMG9zm3dI/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTV8fGNoaWxkJTIwY2xvdGhlc3xlbnwwfHx8fDE2NTU5OTAyMjQ&force=true&w=640",
        price: 20,
      },
      {
        id: 56,
        name: "White T-shirt",
        imageUrl:
          "https://unsplash.com/photos/tRSOnb_SBvk/download?force=true&w=640",
        price: 15,
      },
      {
        id: 57,
        name: "Yellow dress",
        imageUrl:
          "https://unsplash.com/photos/luvoSGWkyX0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NzV8fGNoaWxkJTIwY2xvdGhlc3xlbnwwfHx8fDE2NTU5OTA4MDg&force=true&w=640",
        price: 30,
      },
      {
        id: 58,
        name: "Full clothes set",
        imageUrl:
          "https://unsplash.com/photos/2rIxe0j1wi4/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDR8fGNoaWxkJTIwY2xvdGhlc3xlbnwwfHx8fDE2NTU5OTA4MDQ&force=true&w=640",
        price: 80,
      },
      {
        id: 59,
        name: "Full clothes set",
        imageUrl:
          "https://unsplash.com/photos/zhikqyvJrmY/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NTJ8fGNoaWxkJTIwY2xvdGhlc3xlbnwwfHx8fDE2NTU5OTA4MDQ&force=true&w=640",
        price: 80,
      },
      {
        id: 60,
        name: "Full clothes set",
        imageUrl:
          "https://unsplash.com/photos/NV_IPwv0Saw/download?force=true&w=640",
        price: 90,
      },
      {
        id: 61,
        name: "Pink Jersey bow",
        imageUrl:
          "https://sa.hm.com/sites/g/files/hm/styles/product_zoom_medium_606x504/brand/assets-shared/HNM/13988025/47bb833ee7a3b1c96e68ce7762a0f8f335257c99/1/47bb833ee7a3b1c96e68ce7762a0f8f335257c99.jpg?itok=KIj-ICSb",
        price: 15,
      },
      {
        id: 62,
        name: "Blue Jersey bow",
        imageUrl:
          "https://sa.hm.com/sites/g/files/hm/styles/product_zoom_medium_606x504/brand/assets-shared/HNM/13993933/a9c2457635c5f115e531fd0c1a02a22a3f96e239/1/a9c2457635c5f115e531fd0c1a02a22a3f96e239.jpg?itok=NsFC_FQU",
        price: 15,
      },
      {
        id: 63,
        name: "Black Jersey bow",
        imageUrl:
          "https://sa.hm.com/sites/g/files/hm/styles/product_zoom_medium_606x504/brand/assets-shared/HNM/13989061/54fe3cecb55ed0e001ecf1b417745b007b2efe0f/1/54fe3cecb55ed0e001ecf1b417745b007b2efe0f.jpg?itok=dFPTaX_a",
        price: 15,
      },
      {
        id: 64,
        name: "Red cotton dress",
        imageUrl:
          "https://sa.hm.com/sites/g/files/hm/styles/product_zoom_medium_606x504/brand/assets-shared/HNM/13652747/70b288b45c9ada7672e7c01f0049e9e5e06e4968/1/70b288b45c9ada7672e7c01f0049e9e5e06e4968.jpg?itok=7tkN9_7a",
        price: 50,
      },
      {
        id: 65,
        name: "Beige cotton dress",
        imageUrl:
          "https://sa.hm.com/sites/g/files/hm/styles/product_zoom_medium_606x504/brand/assets-shared/HNM/13645301/3e5d305bc68fcf9b3ad9b56a08451bcba65a350f/1/3e5d305bc68fcf9b3ad9b56a08451bcba65a350f.jpg?itok=DEQ6gqAq",
        price: 50,
      },
      {
        id: 66,
        name: "Dark beige cotton dress",
        imageUrl:
          "https://sa.hm.com/sites/g/files/hm/styles/product_zoom_medium_606x504/brand/assets-shared/HNM/14316661/4a66994da2afe6c27968f8c7ff37ea7a314dd08d/1/4a66994da2afe6c27968f8c7ff37ea7a314dd08d.jpg?itok=JDGyc8K3",
        price: 50,
      },
      {
        id: 67,
        name: "Full clothes set",
        imageUrl:
          "https://sa.hm.com/sites/g/files/hm/styles/product_zoom_medium_606x504/brand/assets-shared/HNM/13989127/0d50e4a499b26507b0444b8331c01c241d60b796/1/0d50e4a499b26507b0444b8331c01c241d60b796.jpg?itok=lkxPrDoN",
        price: 35,
      },
      {
        id: 68,
        name: "Full clothes set",
        imageUrl:
          "https://sa.hm.com/sites/g/files/hm/styles/product_zoom_medium_606x504/brand/assets-shared/HNM/13689140/190f831be0a5a847ff6deca40e35eee31f7e4ba0/1/190f831be0a5a847ff6deca40e35eee31f7e4ba0.jpg?itok=TxPbhbeK",
        price: 35,
      },
    ],
  },
];

export default SHOP_DATA;
