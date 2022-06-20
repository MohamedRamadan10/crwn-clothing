import Directory from "../../components/directory/directory.component";

const Home = () => {
   const categories = [
      {
         id: "1",
         title: "Hats",
         imgUrl:
            "https://img1.goodfon.com/wallpaper/nbig/d/b9/shlyapy-fokus-fon-razmytost.jpg",
      },
      {
         id: "2",
         title: "Jackets",
         imgUrl:
            "https://www.bigbiketours.com/wp-content/uploads/2020/01/Leather-Jacket.jpg",
      },
      {
         id: "3",
         title: "Sneakers",
         imgUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHu_WmPvGOItB8Rl6MPqJdFNvSqkkJHcf8gnz9natqKpKQ_nr6bOXYywLisQBjJbpfNs&usqp=CAU",
      },
      {
         id: "4",
         title: "Women",
         imgUrl: "https://wallpapercave.com/wp/wp6130531.jpg",
      },
      {
         id: "5",
         title: "Men",
         imgUrl: "https://wallpaperaccess.com/full/1448061.jpg",
      },
   ];
   return <Directory categories={categories} />;
};

export default Home;
