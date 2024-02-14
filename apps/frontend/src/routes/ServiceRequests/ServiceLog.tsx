import NavBar from "../../components/NavBar.tsx";
import {ServiceLogComponent} from "../../components/ServiceLogComponent.tsx";
import Global_Footer from "../../components/Global_Footer.tsx";
const ServiceLog = () => {
    return (
        <div>
            <NavBar></NavBar>
            <ServiceLogComponent></ServiceLogComponent>
            <Global_Footer />
        </div>
    );

};

export default ServiceLog;
