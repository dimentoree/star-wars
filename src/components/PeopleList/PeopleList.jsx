import styles from './PeopleList.module.css';

const PeopleList = ({people}) => {
    return (
        <ul className={styles.list}>
            {people.map(({id, name, image}) =>
                <li className={styles.list__element} key={id}>
                    <a className={styles.element__link} href="#">
                        <img className={styles.element__image} src={image} alt={name}/>
                        <p className={styles.element__title}>{name}</p>
                    </a>
                </li>
            )}
        </ul>
    )
};

export default PeopleList;