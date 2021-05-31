import TextBanner from '../components/content/TextContent/TextBanner';
import Banner from '../components/content/ImageContainers/Banner';
import TextContent from '../components/content/TextContent/TextContent';
import Image from '../components/content/ImageContainers/Image';
import Book from '../assets/images/book.jpg';
import Aurora from '../assets/images/aurora.jpg';
import Card from '../components/ui/Card';

const Publications = () => {
    return (
        <>
            <Banner
                image={Aurora}
                alt="the aurora borealis"
            />
            <TextBanner
                title="Publications"
                content="My love for writing and preparation in the 21st century inspired me to write a book that could help people stay ahead of potential challenges."
            />
            <Card>
            <Image
                image={Book}
                alt="A book"
            />
            <TextContent
                header="Book Title"
                content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            />
            </Card> 

        </>
    )
}

export default Publications;