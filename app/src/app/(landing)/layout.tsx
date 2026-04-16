import { Navbar } from "../../components/navbar"
import type { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default layout