import React from "react";
import styled from "@emotion/styled";
import * as commanStyles from "../../Comman/__commanStyles"
const ContainerWrapper = styled.div(commanStyles.__container);

interface IComponentProps {
}
const MainLayout: React.FC<IComponentProps> = props => {
    return (
        // @ts-ignore
        <ContainerWrapper>
            <h1>Dark</h1>
        </ContainerWrapper>
    )
};
export default MainLayout;