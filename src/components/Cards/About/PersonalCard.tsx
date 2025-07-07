import { Icon } from "@/components/Icons/Icon";
import { motion } from "framer-motion";

interface Props {
  title: string;
  icon: string;
  items: string[];
}

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 1.5, 
    },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
};

export const PersonalCard = ({ title, icon, items }: Props) => (
  <motion.div
    className="transparent-effect p-5"
    variants={containerVariants}
    initial="initial"
    animate="animate"
  >
    <div className="flex items-center mb-4">
      <div className="soft-glass-panel mr-4 p-2">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <motion.ul className="space-y-2 text-sm text-white">
      {items.map((item, i) => (
        <motion.li
          key={i}
          className="flex items-start gap-2"
          variants={itemVariants}
        >
          <Icon name="lucide:check" className="h-4 w-4 mt-[2px]" />
          {item}
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);