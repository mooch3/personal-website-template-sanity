import Banner from '../components/content/ImageContainers/Banner';
import Backsplash from '../assets/images/backsplash.jpg';
import TextBanner from '../components/content/TextContent/TextBanner';
import Card from '../components/ui/Card';
import TextContent from '../components/content/TextContent/TextContent';
import { Texts } from '../assets/text/text';
import Image from '../components/content/ImageContainers/Image';
import AboutText from '../components/content/TextContent/AboutText';

const Home = () => {

    return (
        <>
            <Banner image={Backsplash} alt="river rocks img" />
            <TextBanner
                title="Kevin Carter Smith, J.D."
                content="An experienced manager, author, and lawyer, with a successful career in software management and a history of using faith and intellect to solve modern problems."
            />
            <AboutText />
            {Texts.map(text => (
                text.alt ?
                        <Card key={text.id}>
                            <TextContent
                                key={text.id}
                                header={text.header}
                                content={text.content}
                            />
                            <Image
                                key={text.id + "img"}
                                image={text.img}
                            />
                        </Card> :
                        <Card key={text.id}>
                            <Image
                                key={text.id + "img"}
                                image={text.img}
                            />
                            <TextContent
                                key={text.id}
                                header={text.header}
                                content={text.content}
                            />
                        </Card>

            ))}

        </>
    )
}

export default Home;