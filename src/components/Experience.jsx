import { ContactShadows, Environment, Float, useScroll } from "@react-three/drei"
import { Cat } from "./Cat"
import { useEffect, useRef, useState } from "react"
import { SectionTitle } from "./SectionTitle"
import { useFrame } from "@react-three/fiber";
import { Room } from "./Room";
import { config } from "../config";
import { Avatar } from "./Avatar";
import {motion} from "framer-motion-3d"
import { Blender } from "./Blender";
import { Banlieue } from "./Banlieue";
import { ReactLogo } from "./ReactLogo";
import { Shoe } from "./AirMax";
import { FisherPrice } from "./FisherPrice";

const SECTIONS_DISTANCE = 10;

export const Experience = () => {
    const [section, setSection] = useState(config.sections[0])
    const sceneContainer = useRef()
    const scrollData = useScroll()

    useFrame(() => {
        sceneContainer.current.position.z = -scrollData.offset * SECTIONS_DISTANCE * (scrollData.pages - 1)
        setSection(config.sections[Math.round(scrollData.offset * (scrollData.pages - 1))]) 
    })

    useEffect(() => {
        const handleHashChange = () =>{
            const sectionIndex =  config.sections.indexOf(window.location.hash.replace("#", ""))
            if(sectionIndex >= 0) {
                scrollData.el.scrollTo(0, (sectionIndex / (config.sections.length - 1))) *
                (scrollData.el.scrollHeight - scrollData.el.clientHeight)
            }
        }
        window.addEventListener("hashchange", handleHashChange)
        return () => window.removeEventListener("hashchange", handleHashChange)
    }, [])
    return(
        <>
            <Environment preset="sunset" />
            
                /*CHAT*/
                <Cat 
                    scale={0.013}
                    rotation-y= {Math.PI/4}
                    />

                {/*FLOOR & SHADOW */}
                <ContactShadows opacity={0.5} scale={[30, 30]} color="#9c8e66"/>
                <mesh position-y={-0.0001} rotation-x={-Math.PI/2}>
                    <planeGeometry args={[100, 100]} />
                    <meshBasicMaterial color="#f5f3ee" />
                </mesh>
                <motion.group ref={sceneContainer} animate={section}>
                    {/* HOME */}
                    <motion.group position-y={-5} variants={{
                    home: {
                        y:0
                    }
                }}>
                        <SectionTitle 
                            position-x={0.5}
                            position-y={0.5}
                            size={0.35}
                            bevelEnabled
                            bevelThickness={0.15}
                            >{config.home.title}</SectionTitle>
                             <SectionTitle 
                            position-x={0.5}
                            size={0.35}
                            bevelEnabled
                            bevelThickness={0.15}
                            >{config.home.subtitle}</SectionTitle>
                            <Room position={[-2, 0, 0]}
                                  scale={0.2}
                                  rotation-y={-Math.PI/4}   
                            />
                    </motion.group>

                    {/* SKILLS */}
                    <motion.group 
                        position-z={SECTIONS_DISTANCE}
                        position-y={-5}
                        variants={{
                            skills:{
                                y:0,
                            },
                        }}>
                        <SectionTitle position-x={-2} rotation-y={Math.PI/4}>SKILLS</SectionTitle>
                        
                    </motion.group>

                    {/* PROJECTS */}

                    
                    <motion.group position-z={2 * SECTIONS_DISTANCE} position-y={-5} variants={{
                        projects:{
                            y:0
                        }
                    }}>
                        <SectionTitle 
                            position-x={0.5}>PROJECTS</SectionTitle>
                            <Blender position={[1, 0, 0.4]} scale={0.05} />
                            <Float>
                            <ReactLogo 
                                position={[3, 0.75, -1]}
                                scale={0.15}/>
                            </Float>
                            <Shoe scale={0.2} position-x={-1}/>
                            <FisherPrice scale={0.05} position-x={-1.25}/>
                    </motion.group>

                    {/* CONTACT */}
                    <motion.group position-z={3 * SECTIONS_DISTANCE} position-y={-5} variants={{
                        contact:{
                            y:0
                        }
                    }}>
                    <SectionTitle position-x={0.5}>CONTACT</SectionTitle>
                    <Banlieue scale={0.25} 
                        position-y={-0.42}
                        position-x={-1.8}
                        />
                    </motion.group>
                </motion.group>
        </>
        
    )
}
