import styles from "./aboutproject.module.css";

const AboutProject = () => {
  return (
    <>
      <div className={styles.textwrapper}>
        <h1 className={styles.header}>About this fictional shop</h1>
        <p>
          This is a mini eCommerce project where a fakestore is used to have
          products. It is mainly a 4 step process.
        </p>
        <ol className={styles.orderedlist}>
          <li>Select item or items.</li>
          <li>
            Overview of shoppingcart. Also possible to edit item amount in cart.
          </li>
          <li>Checkout section where you enter your fake creditcard info.</li>
          <li>Shop gives you a visual verification that its a success.</li>
        </ol>
      </div>
    </>
  );
};

export default AboutProject;
