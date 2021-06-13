import TextBanner from "../components/content/TextContent/TextBanner";
import Banner from "../components/content/ImageContainers/Banner";
import TextContent from "../components/content/TextContent/TextContent";
import Image from "../components/content/ImageContainers/Image";
import Book from "../assets/images/book.jpg";
import Aurora from "../assets/images/aurora.jpg";
import Card from "../components/ui/Card";

const Publications = () => {
  const bookText = (
    <>
      <p>
        While a variety of sources address apocalypse preparedness, one aspect
        flies under the radar: wardrobe preparedness. This book addresses how
        the right clothes make a difference when the apocalypse comes. You must
        start now as the global supply chain is broken, making it harder to get
        clothing from China.
      </p>
      <p>
        In <em>How to Dress for Success</em>, Kevin Smith shows you step-by-step
        how to build a wardrobe over time by:{" "}
      </p>
      <ul>
        <li>Getting the silver bullet for your wardrobe</li>
        <li>Prepacking your wardrobe </li>
        <li>Preparing for the layered approach</li>
        <li>Having good summer wear, winter wear, shoes, and headwear</li>
        <li>Putting together a minimalist hygiene kit</li>
      </ul>
      <p>
        Apocalypses, small and large, are happening around you. These wardrobe
        items have been field-tested in harsh conditions over the past ten
        years—and they work, because I have used them many times. They will keep
        you clean, smelling good, and prepared for all conditions.{" "}
      </p>
      <p>Please contact me to order a copy today.</p>
    </>
  );
  return (
    <>
      <Banner image={Aurora} alt="the aurora borealis" />
      <TextBanner
        title="Publications"
        content="It’s easy to live in denial, to think disasters won’t happen to you, to drink the normalcy bias Kool-Aid. But with those thoughts, you won’t prepare yourself, and then when—not if, but when—disaster strikes, you will be swimming in that denial river upstream without a paddle. Time is of the essence as the four horsemen of the apocalypse are running, and our time to prepare is almost over. Do something today."
      />
      <Card>
        <Image image={Book} alt="A book" />
        <TextContent
          header="The Coming Apocalypse: How to Dress for Success"
          content={bookText}
          noBtn={true}
        />
      </Card>
    </>
  );
};

export default Publications;
