import { GraduationCap, Cpu } from "lucide-react"

export const categoryIcons: { [key: string]: () => React.ReactNode } = {
    "Education": () => <GraduationCap className="w-5 h-5 text-blue-400" />,
    "Technology": () => <Cpu className="w-5 h-5 text-green-400" />
}