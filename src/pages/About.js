import TextBanner from '../components/content/TextContent/TextBanner';
import Banner from '../components/content/ImageContainers/Banner';
import TextContent from '../components/content/TextContent/TextContent';
import Image from '../components/content/ImageContainers/Image';
import Rainier from '../assets/images/rainier.jpg';
import Preparation from '../assets/images/preparation.jpg';
import Card from '../components/ui/Card';

const About = () => {
    return (
        <>
            <Banner
                image={Rainier}
                alt="picture of rainier mountain"
            />
            <TextBanner
                title="About"
                content="I enjoy managing software, preparing for the future, and staying ahead of problems. My belief is that it's better to have something and need it, than need it and not have it. This menality of preparation always keeps me a step ahead of any challenges I face."
            />
            <Card>
                <TextContent
                    header="A Step Ahead"
                    content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                    noBtn={true}
                />
                <Image
                    image={Preparation}
                />
            </Card>

        </>
    )
}

export default About;