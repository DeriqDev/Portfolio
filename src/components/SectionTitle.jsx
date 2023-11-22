import { Text3D } from "@react-three/drei"

export const SectionTitle = ({children, ...props}) => {
    return(
        <Text3D font={"font/Inter_Bold.json"} size={0.35} {...props}>
            {children}
            <meshStandardMaterial color="white" />
        </Text3D> 
    )
}