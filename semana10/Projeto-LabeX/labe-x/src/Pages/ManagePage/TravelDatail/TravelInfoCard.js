import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TravelInfoItem from './TravelInfoItem';

const TravelInfo = (props) => {
    const {name, planet, description, date, durationInDays} = props.info
    return (
        <Card>
            <CardContent>
                <Typography color="textSecondary" variant='h5' gutterBottom>
                    Informações da Viagem
                </Typography>
                <TravelInfoItem infoName={'Nome'} info={name}/>
                <TravelInfoItem infoName={'Planeta'} info={planet}/>
                <TravelInfoItem infoName={'Data'} info={date}/>
                <TravelInfoItem infoName={'Descrição'} info={description}/>
                <TravelInfoItem infoName={'Duração(em dias)'} info={durationInDays}/>
            </CardContent>
    </Card>
    )
}

export default TravelInfo;