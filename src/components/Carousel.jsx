import { useCallback, useEffect, useState } from 'react';
import img1 from '../images/allef-vinicius-IvQeAVeJULw-unsplash.jpg';
import img2 from '../images/hai-phung-m4Pd_e-4zKs-unsplash.jpg';

function Carousel() {
  const images = [img1, img2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setOffsetX(0); // Reseta o deslocamento após a transição
  }, [images.length]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
    setOffsetX(0); // Reseta o deslocamento após a transição
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    setOffsetX(0); // Reseta o deslocamento após a transição
  };

  const handleTouchStart = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const diffX = clientX - startX; // diffX é positivo ao arrastar para a direita
    setOffsetX(diffX); // Atualiza o deslocamento com base no movimento
  };

  const handleTouchEnd = () => {
    if (offsetX > 100) {
      // Arrastou para a direita (muda para a imagem anterior)
      prevImage();
    } else if (offsetX < -100) {
      // Arrastou para a esquerda (muda para a próxima imagem)
      nextImage();
    } else {
      // Retorna à posição original se o deslocamento for pequeno
      setOffsetX(0);
    }
    setIsDragging(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentImageIndex, nextImage]);

  return (
    <div className="w-full h-fit flex flex-col items-center justify-center relative overflow-hidden">
      <div
        className="w-full h-[450px] overflow-hidden flex items-center justify-center relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
      >
        <div
          className="w-full h-full flex transition-transform duration-900 ease-in-out"
          style={{
            transform: `translateX(calc(-${
              currentImageIndex * 100 // 100% da largura da imagem
            }% - ${currentImageIndex * 8}px + ${offsetX}px))`, // 8px é a margem (gap-2)
          }}
        >
          {/* Renderiza todas as imagens lado a lado */}
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full shrink-0 mr-2" // mr-2 adiciona margem à direita de cada imagem
            >
              <img
                src={image}
                alt={`imagem ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
