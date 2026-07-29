import img1 from "../assets/images/couple1.jpg";
import img2 from "../assets/images/couple2.jpg";
import img3 from "../assets/images/couple3.jpg";
import img4 from "../assets/images/couple4.jpg";
import img5 from "../assets/images/couple5.jpg";
import img6 from "../assets/images/couple6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>💕 Our Beautiful Moments 💕</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Couple ${index + 1}`}
            className="gallery-image"
            />
        ))}
      </div>
    </section>
  );
}

export default Gallery;