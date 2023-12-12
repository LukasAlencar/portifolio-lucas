import { cn } from "@/app/lib/utils"

type HorizontalProps = {
    className?: string
}

export const HorizontalDivider = ({className}:HorizontalProps) => {
    return ( 
        <div className={cn(
            'w-full my-8 border-b border-b-gray-800', className
        )}/>
    )
}