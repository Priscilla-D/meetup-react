import classes from './MeetupItem.module.css';

function MeetupItem(props) {
    return (
    <li className={classes.item}>
        <div className={classes.images}>
            <img src={props.image} alt={props.title} />
        </div>
        <div classNames={classes.content}>
            <h3>{props.title}</h3>
            <adress>{props.address}</adress>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            <button>To Favorites</button>
        </div>
    </li>
    );
}

export default MeetupItem;