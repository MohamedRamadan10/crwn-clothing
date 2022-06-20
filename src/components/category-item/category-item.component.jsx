import "./category-item.styles.scss";

const CategoryItem = ({ category: { imgUrl, title } }) => {
   return (
      <div className="category__container">
         <div
            className="background__image"
            style={{ backgroundImage: `url(${imgUrl})` }}
         />
         <div className="category__body__container">
            <h2>{title}</h2>
         </div>
      </div>
   );
};

export default CategoryItem;
