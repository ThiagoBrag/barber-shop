import {
  CalendarDots,
  Clock,
  DeviceMobileCamera,
  MapPin,
  PaintBrushHousehold,
  Scissors,
  Swatches,
} from '@phosphor-icons/react';
import Carousel from '../../components/Carousel';
import Header from '../../components/Header';
import InfoBlock from './Components/InfoBlock';

import img from '../../images/map.jpg';
import ServiceCard from './Components/ServiceCard';

const services = [
  {
    icon: <Scissors size={32} weight="regular" className="text-orange" />,
    title: 'CORTE DE CABELO',
    description:
      'Nosso corte de cabelo combina técnica profissional e estilo moderno. Trabalhamos com todos os tipos de cabelo, oferecendo desde cortes clássicos até os mais atuais, sempre buscando realçar sua personalidade e garantir um visual impecável.',
  },
  {
    icon: <Swatches size={32} weight="regular" className="text-orange" />,
    title: 'CORTE DE BARBA',
    description:
      'A barba merece atenção especial. Aqui, ela é aparada e alinhada com precisão, trazendo mais definição ao rosto. Utilizamos técnicas tradicionais e produtos de qualidade para deixar sua barba macia, simétrica e com acabamento perfeito.',
  },
  {
    icon: (
      <PaintBrushHousehold size={32} weight="regular" className="text-orange" />
    ),
    title: 'PINTURA',
    description:
      'Realizamos pinturas capilares e de barba com tonalizantes e produtos de alta performance. Seja para cobrir fios brancos ou mudar o visual, nossa pintura proporciona cor uniforme, natural e duradoura, preservando a saúde dos fios.',
  },
];

export default function Home() {
  return (
    <div className="w-full color-bg">
      <Header />
      <div className="flex w-full max-h-80 overflow-hidden">
        <Carousel />
      </div>
      <div className="flex flex-col w-full rounded-l-lg justify-center items-center px-8 py-15 gap-5">
        <div className="w-full text-center items-center justify-center flex gap-2">
          <p className="font-semibold text-2xl text-primary">NOSSOS</p>
          <p className="font-semibold text-2xl text-orange">SERVIÇOS</p>
        </div>
        <div className="flex w-full h-full gap-8 flex-wrap justify-center items-stretch">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <button
          aria-label="Open menu"
          className="py-1 px-2 rounded-md cursor-pointer border border-orange text-orange gap-2 font-semibold flex items-center text-md hover:bg-orange hover:text-white transition-colors duration-200"
        >
          <CalendarDots size={18} weight="bold" />
          {'Fazer reserva'}
        </button>
      </div>
      <div className="w-full flex justify-center items-center color-bg-secondary relative py-12">
        <img
          src={img}
          alt="Serviço de barbearia"
          className="object-cover rounded-r-lg opacity w-full h-full absolute inset-0"
        />
        <div className="w-full h-full relative z-10 flex flex-wrap items-start justify-around max-w-6xl gap-8">
          <InfoBlock
            icon={<Clock size={23} weight="bold" className="text-orange" />}
            title="FUNCIONAMENTO"
            values={['SEG - TER - QUA - QUI - SEX', '8h às 22h']}
            secondValues={['SAB', '7h às 16h']}
          />
          <InfoBlock
            icon={<MapPin size={23} weight="bold" className="text-orange" />}
            title="LOCALIZAÇÃO"
            values={['Rua Cabo João Alves, 337', 'Jaraguá do Sul - SC, Brasil']}
            action="IR PARA O MAPS"
          />
          <InfoBlock
            icon={
              <DeviceMobileCamera
                size={23}
                weight="bold"
                className="text-orange"
              />
            }
            title="CONTATO"
            values={['(47) 99915-5588']}
            action="IR PARA O WHATS"
          />
        </div>
      </div>
    </div>
  );
}
