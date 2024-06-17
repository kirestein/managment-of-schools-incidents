import React from 'react';
import { 
    Container,
    TitleContainer,
    Controllers 
} from './styles';

interface IContentHeaderProps {
    title: string;
    linecolor: string;
    children: React.ReactNode;
    children2: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = (({
    title, linecolor, children, children2
}) => {

    return (
        <Container>
            <TitleContainer $lineColor={ linecolor }>
                <h1>{ title }</h1>
            </TitleContainer>
            { children2 }
            <Controllers>
                { children }
            </Controllers>
        </Container>
    )
})

export default ContentHeader;