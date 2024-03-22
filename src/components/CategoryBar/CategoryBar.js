import styles from './CategoryBar.module.scss';

const CategoryBar = ({ allCategories }) => {
  return (
    <div className={styles.categoryBar}>
      {allCategories.map((item, i) => (
        <a href={`http://localhost:3000/category/${item.slug}`} key={i}>
          <span className={`${''} subtitleStrong uppercase`}>{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export default CategoryBar;
