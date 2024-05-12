import { LuEye } from "react-icons/lu";
import { FiDroplet, FiWind, FiSunrise, FiSunset } from "react-icons/fi";
import { ImMeter } from "react-icons/im";

export interface WeatherDetailProps {
    visibility?: string;
    humidity?: string;
    windSpeed?: string;
    airPressure?: string;
    sunrise?: string;
    sunset?: string;
}

export default function WeatherDetails(props: WeatherDetailProps) {
    const {
        visibility = "25km",
        humidity = "61%",
        windSpeed = "7 km/h",
        airPressure = "6.20",
        sunrise = "6.20",
        sunset = "18.48"
    } = props;

    return (
        <>
            <SingleWeatherDetail
                icon={<LuEye />}
                information="Visibility"
                value={visibility}
            />
            <SingleWeatherDetail
                icon={<FiDroplet />}
                information="Humidity"
                value={humidity}
            />
            <SingleWeatherDetail
                icon={<FiWind />}
                information="Wind speed"
                value={windSpeed}
            />
            <SingleWeatherDetail
                icon={<ImMeter />}
                information="Air pressure"
                value={airPressure}
            />
            <SingleWeatherDetail
                icon={<FiSunrise />}
                information="Sunrise"
                value={sunrise}
            />
            <SingleWeatherDetail
                icon={<FiSunset />}
                information="Sunset"
                value={sunset}
            />
        </>
    );
}

interface SingleWeatherDetailProps {
    icon: JSX.Element;
    information: string;
    value?: string;
}

function SingleWeatherDetail(props: SingleWeatherDetailProps) {
    return (
        <div className='flex flex-col justify-between gap-2 items-center text-xs font-semibold text-black/80'>
            <p className='whitespace-nowrap'>{props.information}</p>
            <div className='text-3xl'>{props.icon}</div>
            <p>{props.value}</p>
        </div>
    );
}

