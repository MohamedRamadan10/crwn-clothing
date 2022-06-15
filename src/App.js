import "./categories.styles.scss";

const App = () => {
   const catagories = [
      {
         id: "1",
         title: "Hats",
      },
      {
         id: "2",
         title: "Jackets",
      },
      {
         id: "3",
         title: "Sneakers",
      },
      {
         id: "4",
         title: "Women",
      },
      {
         id: "5",
         title: "Men",
      },
   ];
   return (
      <div className="categories">
         {catagories.map(({ title, id }) => (
            <div key={id} className="category__container">
               <div className="background__image" />
               <div className="category__body__container">
                  <h2>{title}</h2>
               </div>
            </div>
         ))}
      </div>
   );
};

export default App;
