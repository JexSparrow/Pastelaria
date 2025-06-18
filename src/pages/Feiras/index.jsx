import DayCard from "../../components/DayCard";
import { fairDays } from "../../data/fairDays";
import { Title, Wrapper } from "./styles";


function Feiras() {
    return (

        <div>
            <Wrapper>
                <Title id='Feiras'> ~ Feiras da Semana ~</Title>

            </Wrapper>

            {fairDays.map(day => (
                <DayCard
                    key={day.id} // Chave única para cada item na lista
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