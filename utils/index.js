import dynamic from 'next/dynamic'

const Device = dynamic(() => import('./detectDevice'), { ssr: false })

export default Device