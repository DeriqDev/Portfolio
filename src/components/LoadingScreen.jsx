import { useProgress } from "@react-three/drei"
import { config } from "../config"

export default function LoadingScreen () {
    const {progress, active} = useProgress()
    return(
        <>
        
            <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
            
            <div className="loading-screen__container">
                <img  src="icon/MetaRiq2.png" width="100px" height="100px"/>
                <h1 className="loading-screen__title">{config.title}</h1>
                <div className="progress__container">
                    <div 
                        className="progress__bar"
                        style={{width: `${progress}%`}}
                        >
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}