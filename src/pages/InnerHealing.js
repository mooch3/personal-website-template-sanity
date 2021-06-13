import Calendar from '../components/calendar/Calendar'
import TextBanner from '../components/content/TextContent/TextBanner';
import classes from './InnerHealing.module.css';

const InnerHealing = () => {
    return (
        <>
            <TextBanner
                title="Inner Healing"
                content="An inner healing session is a private 1:1 or 2:1 prayer appointment for divine heart-healing with a trained inner healing prayer minister and/or a team of 2 ministers - one who facilitates and one who intercedes. It is a transformative time for incredible healing with Jesus that most often leads to a powerful breakthrough. You are not only prayed for, but prayed with. The bible-based, Spirit-led session will guide you into an encounter with the Lord and often reveal hidden wounds or lies/ungodly beliefs that are replaced with Truth and inspired revelation."
            />
            <h2 className={classes.appointment}>Schedule an Appointment through Calendly</h2>
            <Calendar/>

        </>
    )
}

export default InnerHealing;