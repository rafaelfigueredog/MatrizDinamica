import React from "react"
import { useStyles } from "./styles";
import { useHistory } from "react-router";

import Button from "@material-ui/core/Button"
import Header from "../../components/Header";
import Footer from "../../components/Footer"

// icons
import { BsBuilding } from "react-icons/bs";
import { BsFillCpuFill } from "react-icons/bs";
import { GiSatelliteCommunication } from "react-icons/gi";
import { FaThermometerThreeQuarters } from "react-icons/fa";
// import { FaLanguage } from "react-icons/fa"
import { VscSymbolOperator } from "react-icons/vsc";

import { ContainerGrid } from "./styles";
import { ContainerBody } from "./styles";


function Courses({ paletteType, setPaletteType }) {

    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root} >
            <Header paletteType={paletteType} setPaletteType={setPaletteType} />

            <ContainerBody>

                <ContainerGrid>
                    <Button
                        startIcon={<BsBuilding />}
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            history.push("/course/2");
                        }}
                    >
                        Construção de Edifícios
                    </Button>

                    <Button
                        startIcon={<BsFillCpuFill />}
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            history.push("/course/1");
                        }}
                    >
                        Engenharia de Computação
                    </Button>

                    <Button
                        startIcon={<BsBuilding />}
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            history.push("/course/3");
                        }}
                    >
                        Engenharia Civil
                    </Button>

                    <Button
                        startIcon={<VscSymbolOperator />}
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            history.push("/course/4");
                        }}
                    >
                        Licenciatura em Matemática
                    </Button>

                    <Button
                        startIcon={<FaThermometerThreeQuarters />}
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            history.push("/course/5");
                        }}
                    >
                        Licenciatura em Física
                    </Button>

                    <Button
                        startIcon={<GiSatelliteCommunication />}
                        className={classes.button}
                        color="primary"
                        variant="contained"
                        onClick={() => {
                            history.push("/course/6");
                        }}
                    >
                        Telemática
                    </Button>
                </ContainerGrid>
            </ContainerBody>
            <Footer />
        </div>
    )
}

export default Courses
