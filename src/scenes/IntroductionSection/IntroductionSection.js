import ReadMoreBtn from 'components/ReadMoreBtn/ReadMoreBtn';
import styles from './IntroductionSection.module.scss';

const IntroductionSection = () => {
  return (
    <div className={styles.main}>
      <h2 className={`${''} headingH1`}>Hi, I&rsquo;m Ola</h2>
      <p className={` textS`}>
        Thank you for that smile on your face, thank your for inviting me so close to you, thank you for your trust.
      </p>
      <p className={` textS`}>
        Lorem ipsum dolor sit amet consectetur. Amet arcu vitae ligula sed nec augue mauris fermentum. Fusce at proin
        ultricies quis tellus est gravida nunc. Gravida urna non mi proin fames euismod sed ligula purus. Enim dolor
        volutpat tempor est eros. Mattis ut nec in nibh est eget. Malesuada urna aliquet fermentum pellentesque. Et
        tortor accumsan netus non vel sed ipsum tincidunt. Nibh tincidunt viverra amet morbi nibh augue. Enim sit nisl
        nulla et.
      </p>
      <ReadMoreBtn to="/about" className={styles.linkBtn} />
    </div>
  );
};

export default IntroductionSection;
