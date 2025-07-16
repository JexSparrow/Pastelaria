import DayCard from "../../components/DayCard";
import { fairDays } from "../../data/fairDays";
import { Title, Wrapper } from "./styles";


function Feiras() {
    return (

        <div>
            <Wrapper>
                <Title id='Feiras'
                    initial={{ opacity: 0, scale: 0, y: 20 }} // Começa invisível, sem escala e um pouco abaixo
                    whileInView={{ opacity: 1, scale: 1, y: 0 }} // Anima para visível, escala original e posição original
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} // Duração e suavização
                    viewport={{ once: true, amount: 0.99 }}
                > ~ Feiras da Semana ~</Title>

            </Wrapper>

            {fairDays.map(day => (
                <DayCard
                    key={day.id}
                    title={day.title}
                    address={day.address}
                    openingHours={day.openingHours}
                    description={day.description}
                    mapLink={day.mapLink}
                    images={day.images}
                    layoutDirection={day.layout} // Passando a prop de layout
                />
            ))}
        </div>


    );
}

export default Feiras;