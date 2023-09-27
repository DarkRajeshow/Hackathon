import { FaCheckCircle } from 'react-icons/fa';
import SmartLoader from './SmartLoader'
import { motion } from 'framer';

export default function ScreenLoading({ checkText, textMessage, loadState, showDocument }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0
            }}
            animate={{
                opacity: loadState ? 1 : 0,
                scale: loadState ? 1 : 0,
            }}
            transition={{
                duration: 0.3,
                type: "just"
            }}

            className={`absolute w-full ${showDocument ? "min-h-[220vh]" : "min-h-[130vh]"} bg-dark/90 flex items-center justify-center flex-col`}>
            <div>
                <h1 className='text-light text-sm sm:text-base md:text-lg lg:text-xl font-semibold flex items-center gap-2'>{textMessage === checkText ? <FaCheckCircle className='text-green-500' /> : ""}{textMessage}</h1>
                <SmartLoader className="py-5" />
            </div>
        </motion.div>
    )
}
